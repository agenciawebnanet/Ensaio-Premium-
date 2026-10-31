/**
 * WhatsApp utility helpers for Estúdio Premium
 */
export const WHATSAPP_PHONE = '11926933436';
export const WHATSAPP_FORMATTED = '(11) 92693-3436';

export function getWhatsAppUrl(message?: string): string {
  const cleanPhone = WHATSAPP_PHONE.replace(/\D/g, '');
  const base = `https://wa.me/55${cleanPhone}`;
  if (!message) {
    return `${base}?text=${encodeURIComponent('Olá! Gostaria de mais informações sobre os catálogos do Estúdio Premium.')}`;
  }
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function formatSelectionMessage(categoryTitle: string, selectedCodes: string[]): string {
  if (!selectedCodes.length) {
    return `Olá! Estava navegando pelo catálogo de ${categoryTitle} e gostaria de mais informações.`;
  }

  const scenesStr = selectedCodes.length < 2
    ? selectedCodes[0]
    : selectedCodes.slice(0, -1).join(', ') + ' e ' + selectedCodes[selectedCodes.length - 1];

  return `Olá! Escolhi as cenas ${scenesStr} do ${categoryTitle} no catálogo. Gostaria de verificar valores e disponibilidade para meu ensaio!`;
}

export function formatCopyText(selectedCodes: string[]): string {
  if (!selectedCodes.length) return '';
  const scenesStr = selectedCodes.length < 2
    ? selectedCodes[0]
    : selectedCodes.slice(0, -1).join(', ') + ' e ' + selectedCodes[selectedCodes.length - 1];
  return `Escolhi as cenas ${scenesStr}`;
}
