import React from 'react';
import { MessageSquare, Copy } from 'lucide-react';
import { getWhatsAppUrl, formatSelectionMessage, formatCopyText } from '../utils/whatsapp';

interface SelectionBarProps {
  categoryTitle: string;
  selectedCodes: string[];
  onClear: () => void;
  onToast: (msg: string) => void;
}

export const SelectionBar: React.FC<SelectionBarProps> = ({
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
      onToast('Copiado! Agora é só colar na conversa do WhatsApp.');
    } catch {
      onToast(`Envie no WhatsApp: ${text}`);
    }
  };

  const handleSendWhatsApp = () => {
    const msg = formatSelectionMessage(categoryTitle, selectedCodes);
    const url = getWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="escolhas" aria-label="Cenas selecionadas">
      <div className="lista" aria-live="polite">
        <b>{countLabel}</b>
        <span title={listStr}>{listStr}</span>
      </div>

      <button type="button" className="limpar" onClick={onClear}>
        Limpar
      </button>

      <button
        type="button"
        className="btn-ouro"
        onClick={handleCopy}
        title="Copiar números para área de transferência"
      >
        <Copy className="w-3.5 h-3.5" />
        <span>Copiar números</span>
      </button>

      <button
        type="button"
        className="btn-whatsapp"
        onClick={handleSendWhatsApp}
        title="Enviar números diretamente no WhatsApp (11) 92693-3436"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>Enviar no WhatsApp</span>
      </button>
    </div>
  );
};
