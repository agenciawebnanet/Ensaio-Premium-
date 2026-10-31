import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { BRAND_LOGO } from '../data/catalogData';

interface HeaderProps {
  isHome?: boolean;
  title?: string;
  contagem?: string;
  onNavigateHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isHome = false,
  title = 'Catálogos de ensaios',
  contagem,
  onNavigateHome,
}) => {
  return (
    <header className="capa">
      {!isHome && onNavigateHome && (
        <a
          href="/"
          className="voltar"
          onClick={(e) => {
            e.preventDefault();
            onNavigateHome();
          }}
          aria-label="Voltar para todos os temas"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Todos os temas</span>
        </a>
      )}

      {/* Logotipo Premium dourado enviado pelo usuário */}
      <div className="selo-wrapper" aria-hidden="true">
        <img
          src={BRAND_LOGO}
          alt="Premium Ensaio - Estúdio Premium"
          className="selo-img"
          loading="eager"
        />
      </div>

      <p className="marca">Estúdio Premium</p>
      {isHome && <small>Estúdio fotográfico</small>}

      <hr className="fio" />

      <h1>{title}</h1>

      {contagem && <p className="contagem">{contagem}</p>}
    </header>
  );
};
