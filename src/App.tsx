import { useState, useEffect } from 'react';
import { CATALOG_CATEGORIES } from './data/catalogData';
import { HomePage } from './components/HomePage';
import { CategoryView } from './components/CategoryView';

export default function App() {
  const getCategoryFromPath = (): string | null => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
    if (path && CATALOG_CATEGORIES[path]) {
      return path;
    }
    return null;
  };

  const [currentCategory, setCurrentCategory] = useState<string | null>(getCategoryFromPath);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentCategory(getCategoryFromPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update page title and scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (currentCategory && CATALOG_CATEGORIES[currentCategory]) {
      const cat = CATALOG_CATEGORIES[currentCategory];
      document.title = cat.metaTitle;
    } else {
      document.title = 'Catálogos de ensaios · Estúdio Premium';
    }
  }, [currentCategory]);

  const handleSelectCategory = (categoryId: string) => {
    window.history.pushState({}, '', `/${categoryId}`);
    setCurrentCategory(categoryId);
  };

  const handleNavigateHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentCategory(null);
  };

  const activeCategory = currentCategory ? CATALOG_CATEGORIES[currentCategory] : null;

  return (
    <div className="min-h-screen bg-[#0e0d0b] text-[#ede6da]">
      {activeCategory ? (
        <CategoryView
          category={activeCategory}
          onNavigateHome={handleNavigateHome}
        />
      ) : (
        <HomePage onSelectCategory={handleSelectCategory} />
      )}
    </div>
  );
}
