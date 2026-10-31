import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CATALOG_CATEGORIES } from '../data/catalogData';

interface HomePageProps {
  onSelectCategory: (categoryId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectCategory }) => {
  const categoriesList = Object.values(CATALOG_CATEGORIES);

  return (
    <>
      <Header isHome={true} title="Catálogos de ensaios" />

      <main className="sumario">
        <p>
          Escolha o tema do seu ensaio e anote os números das cenas que você mais gostou.
        </p>

        <ol role="list">
          {categoriesList.map((cat) => (
            <li key={cat.id}>
              <a
                href={`/${cat.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectCategory(cat.id);
                }}
              >
                <span className="tit">
                  {cat.title}
                  {cat.is18Plus && <span className="maior">18+</span>}
                </span>
                <span className="qtd">{cat.totalLabel}</span>
                {cat.sub && <span className="sub">{cat.sub}</span>}
              </a>
            </li>
          ))}
        </ol>
      </main>

      <Footer isHome={true} />
    </>
  );
};
