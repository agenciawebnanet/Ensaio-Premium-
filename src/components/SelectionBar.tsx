import React from 'react';
import { Send, Copy } from 'lucide-react';
import { codificarSelecao, formatCopyText, linkSelecao } from '../utils/telegram';

interface SelectionBarProps {
  categoryId: string;
  categoryTitle: string;
  selectedCodes: string[];
  onClear: () => void;
  onToast: (msg: string) => void;
}

export const SelectionBar: React.FC<SelectionBarProps> = ({
  categoryId,
  categoryTitle,
  selectedCodes,
  onClear,
  onToast,
}) => {
  if (selectedCodes.length === 0) return null;

  const count = selectedCodes.length;
  const countLabel = count === 1 ? '1 escolhida' : `${count} escolhidas`;
  const listStr = selectedCodes.join(' · ');

  const handleCopy = async () => {
    const text = formatCopyText(selectedCodes);
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      onToast('Copiado! Agora é só colar na conversa do bot no Telegram.');
    } catch {
      onToast(`Envie no Telegram: ${text}`);
    }
  };

  const handleSendTelegram = () => {
    const cabeNoLink = codificarSelecao(categoryId, selectedCodes) !== null;
    if (!cabeNoLink) {
      onToast(
        `São muitas cenas para o link automático. Copie os números e cole na conversa do bot no Telegram.`,
      );
    }
    window.open(linkSelecao(categoryId, selectedCodes), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="escolhas" aria-label="Cenas selecionadas">
      <div className="lista" aria-live="polite">
        <b>{countLabel}</b>
        <span title={`${categoryTitle} — ${listStr}`}>{listStr}</span>
      </div>

      <button type="button" className="limpar" onClick={onClear}>
        Limpar
      </button>

      <button
        type="button"
        className="btn-linha"
        onClick={handleCopy}
        title="Copiar números para área de transferência"
      >
        <Copy className="w-3.5 h-3.5" />
        <span>Copiar números</span>
      </button>

      <button
        type="button"
        className="btn-telegram"
        onClick={handleSendTelegram}
        title="Abrir o bot no Telegram com estas cenas já selecionadas"
      >
        <Send className="w-3.5 h-3.5" />
        <span>Enviar no Telegram</span>
      </button>
    </div>
  );
};
