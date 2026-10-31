import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Scene } from '../data/catalogData';

interface LightboxProps {
  scene: Scene | null;
  currentIndex: number;
  totalScenes: number;
  allScenes?: Scene[];
  isSelected: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onToggleSelect: (cod: string) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  scene,
  currentIndex,
  totalScenes,
  allScenes,
  isSelected,
  onClose,
  onPrev,
  onNext,
  onToggleSelect,
}) => {
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Preload adjacent images for instant transitions
  useEffect(() => {
    if (!allScenes || currentIndex < 0) return;
    if (currentIndex < allScenes.length - 1) {
      const nextImg = new Image();
      nextImg.src = allScenes[currentIndex + 1].cheia;
    }
    if (currentIndex > 0) {
      const prevImg = new Image();
      prevImg.src = allScenes[currentIndex - 1].cheia;
    }
  }, [currentIndex, allScenes]);

  useEffect(() => {
    if (!scene) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) onPrev();
      } else if (e.key === 'ArrowRight') {
        if (currentIndex < totalScenes - 1) onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('travado');

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('travado');
    };
  }, [scene, currentIndex, totalScenes, onClose, onPrev, onNext]);

  if (!scene) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = endX - touchStartX.current;
    const diffY = endY - (touchStartY.current ?? 0);
    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX < 0 && currentIndex < totalScenes - 1) {
        onNext();
      } else if (diffX > 0 && currentIndex > 0) {
        onPrev();
      }
    }
  };

  const codeDisplay = `N° ${scene.cod}`;

  return (
    <div className="visor" role="dialog" aria-modal="true" aria-label="Foto da cena em tamanho grande">
      <div className="topo">
        <span className="num">{codeDisplay}</span>
        <button
          type="button"
          className="fechar text-[#ede6da] hover:text-[#c6a46a]"
          aria-label="Fechar visor"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div
        className="palco"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          className="seta ant"
          disabled={currentIndex === 0}
          onClick={onPrev}
          aria-label="Cena anterior"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <img
          key={scene.cheia}
          src={scene.cheia}
          alt={`Cena ${scene.cod}`}
          className="select-none animate-fadeIn"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        <button
          type="button"
          className="seta prox"
          disabled={currentIndex === totalScenes - 1}
          onClick={onNext}
          aria-label="Próxima cena"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      <div className="base">
        <span className="nota">{scene.nota || ''}</span>
        <button
          type="button"
          className={`btn-ouro escolher ${isSelected ? 'selecionada' : ''}`}
          onClick={() => onToggleSelect(scene.cod)}
          aria-pressed={isSelected}
        >
          {isSelected ? (
            <>
              <Check className="w-4 h-4 text-[#0e0d0b]" />
              <span>Escolhida ✓</span>
            </>
          ) : (
            'Escolher esta cena'
          )}
        </button>
      </div>
    </div>
  );
};
