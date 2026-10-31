import React, { useState, useEffect, useMemo } from 'react';
import { CatalogCategory, Scene } from '../data/catalogData';
import { Header } from './Header';
import { Instructions } from './Instructions';
import { SceneGrid } from './SceneGrid';
import { Lightbox } from './Lightbox';
import { SelectionBar } from './SelectionBar';
import { SensualGate } from './SensualGate';
import { Footer } from './Footer';
import { Toast } from './Toast';

interface CategoryViewProps {
  category: CatalogCategory;
  onNavigateHome: () => void;
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  category,
  onNavigateHome,
}) => {
  const storageKey = `escolhas:${category.id}`;

  // Selections state loaded from localStorage
  const [selectedCodes, setSelectedCodes] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          // ensure codes exist in current category
          const validSet = new Set(category.scenes.map((s) => s.cod));
          return parsed.filter((c) => typeof c === 'string' && validSet.has(c));
        }
      }
    } catch {
      // fallback
    }
    return [];
  });

  // 18+ Gate for Sensual
  const [is18Confirmed, setIs18Confirmed] = useState<boolean>(() => {
    if (!category.is18Plus) return true;
    try {
      return sessionStorage.getItem('maior18') === '1';
    } catch {
      return false;
    }
  });

  // Lightbox state
  const [activeLightboxScene, setActiveLightboxScene] = useState<Scene | null>(null);

  // Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Active section filter for Infantil (all, meninas, meninos)
  const [infantilFilter, setInfantilFilter] = useState<'all' | 'meninas' | 'meninos'>('all');

  // Sync selections to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(selectedCodes));
    } catch {
      // storage disabled
    }
  }, [selectedCodes, storageKey]);

  // Update body class for fixed bar padding
  useEffect(() => {
    if (selectedCodes.length > 0) {
      document.body.classList.add('com-escolhas');
    } else {
      document.body.classList.remove('com-escolhas');
    }
    return () => {
      document.body.classList.remove('com-escolhas');
    };
  }, [selectedCodes.length]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleToggleSelect = (cod: string) => {
    setSelectedCodes((prev) => {
      if (prev.includes(cod)) {
        return prev.filter((c) => c !== cod);
      } else {
        return [...prev, cod];
      }
    });
  };

  const handleClear = () => {
    setSelectedCodes([]);
    showToast('Seleções limpas.');
  };

  // Sort selected codes in the exact catalog order
  const sortedSelectedCodes = useMemo(() => {
    const orderMap = new Map<string, number>();
    category.scenes.forEach((s, idx) => orderMap.set(s.cod, idx));
    return [...selectedCodes].sort((a, b) => (orderMap.get(a) ?? 0) - (orderMap.get(b) ?? 0));
  }, [selectedCodes, category.scenes]);

  // Lightbox navigation helpers
  const lightboxIndex = activeLightboxScene
    ? category.scenes.findIndex((s) => s.cod === activeLightboxScene.cod)
    : -1;

  const handlePrevLightbox = () => {
    if (lightboxIndex > 0) {
      setActiveLightboxScene(category.scenes[lightboxIndex - 1]);
    }
  };

  const handleNextLightbox = () => {
    if (lightboxIndex >= 0 && lightboxIndex < category.scenes.length - 1) {
      setActiveLightboxScene(category.scenes[lightboxIndex + 1]);
    }
  };

  // 18+ Handlers
  const handleAccept18 = () => {
    try {
      sessionStorage.setItem('maior18', '1');
    } catch {
      // ignore
    }
    setIs18Confirmed(true);
  };

  const isInfantil = category.id === 'infantil';
  const meninasScenes = useMemo(() => category.scenes.filter((s) => s.cod.startsWith('F')), [category.scenes]);
  const meninosScenes = useMemo(() => category.scenes.filter((s) => s.cod.startsWith('M')), [category.scenes]);

  return (
    <>
      {category.is18Plus && !is18Confirmed && (
        <SensualGate
          onAccept={handleAccept18}
          onReject={onNavigateHome}
        />
      )}

      <Header
        isHome={false}
        title={category.title}
        contagem={category.contagem}
        onNavigateHome={onNavigateHome}
      />

      <main>
        <Instructions steps={category.steps} />

        {isInfantil ? (
          <>
            <nav className="atalhos" aria-label="Seções infantil">
              <a href="#meninas" onClick={() => setInfantilFilter('all')}>
                Meninas
              </a>
              <a href="#meninos" onClick={() => setInfantilFilter('all')}>
                Meninos
              </a>
            </nav>

            <section className="secao" id="meninas">
              <h2>Meninas</h2>
              <p>F01 a F25</p>
              <SceneGrid
                scenes={meninasScenes}
                selectedCodes={selectedCodes}
                onToggleSelect={handleToggleSelect}
                onOpenLightbox={setActiveLightboxScene}
              />
            </section>

            <section className="secao" id="meninos">
              <h2>Meninos</h2>
              <p>M01 a M25</p>
              <SceneGrid
                scenes={meninosScenes}
                selectedCodes={selectedCodes}
                onToggleSelect={handleToggleSelect}
                onOpenLightbox={setActiveLightboxScene}
              />
            </section>
          </>
        ) : (
          <section className="secao">
            <SceneGrid
              scenes={category.scenes}
              selectedCodes={selectedCodes}
              onToggleSelect={handleToggleSelect}
              onOpenLightbox={setActiveLightboxScene}
            />
          </section>
        )}
      </main>

      <Footer isHome={false} onNavigateHome={onNavigateHome} />

      <SelectionBar
        categoryTitle={category.title}
        selectedCodes={sortedSelectedCodes}
        onClear={handleClear}
        onToast={showToast}
      />

      <Lightbox
        scene={activeLightboxScene}
        currentIndex={lightboxIndex}
        totalScenes={category.scenes.length}
        isSelected={activeLightboxScene ? selectedCodes.includes(activeLightboxScene.cod) : false}
        onClose={() => setActiveLightboxScene(null)}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
        onToggleSelect={handleToggleSelect}
      />

      <Toast message={toastMessage} />
    </>
  );
};
