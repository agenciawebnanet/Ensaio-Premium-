import React from 'react';
import { Send } from 'lucide-react';
import { TELEGRAM_BOT_URL } from '../utils/telegram';

interface FooterProps {
  isHome?: boolean;
  onNavigateHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ isHome = false, onNavigateHome }) => {
  return (
    <footer>
      <p className="fim">
        Escolha os números.<br />
        Nós cuidamos do resto.
      </p>

      <hr className="fio" />

      <p className="romana">Envie suas escolhas pelo Telegram</p>

      <div className="mt-4 flex justify-center">
        <a
          href={TELEGRAM_BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-telegram inline-flex items-center text-xs tracking-widest px-4 py-2.5 rounded-sm shadow-md"
        >
          <Send className="w-4 h-4 text-[#0e0d0b]" />
          <span>Falar no Telegram</span>
        </a>
      </div>

      {!isHome && onNavigateHome && (
        <p className="rodape">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
          >
            Ver todos os temas
          </a>{' '}
          · Estúdio Premium
        </p>
      )}
    </footer>
  );
};
