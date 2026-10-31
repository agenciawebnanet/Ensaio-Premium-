import React from 'react';
import { MessageSquare } from 'lucide-react';
import { WHATSAPP_FORMATTED, getWhatsAppUrl } from '../utils/whatsapp';

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

      <p className="romana">Envie suas escolhas pelo WhatsApp</p>

      <div className="mt-4 flex justify-center">
        <a
          href={getWhatsAppUrl('Olá! Gostaria de falar com o atendimento comercial do Estúdio Premium.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp inline-flex items-center text-xs tracking-widest px-4 py-2.5 rounded-sm shadow-md"
        >
          <MessageSquare className="w-4 h-4 text-[#0e0d0b]" />
          <span>WhatsApp de Vendas: {WHATSAPP_FORMATTED}</span>
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
