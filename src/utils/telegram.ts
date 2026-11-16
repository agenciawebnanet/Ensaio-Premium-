/**
 * Ponte entre o catálogo e o bot de vendas no Telegram.
 *
 * A seleção de cenas viaja dentro do link do bot (?start=...), então o
 * cliente chega na conversa com as escolhas já preenchidas e segue direto
 * para o pagamento do ensaio.
 */

const BOT_PADRAO = 'catalogoiabot';

export const TELEGRAM_BOT_USERNAME: string =
  (import.meta.env?.VITE_TELEGRAM_BOT as string | undefined)?.trim() || BOT_PADRAO;

export const TELEGRAM_BOT_URL = `https://t.me/${TELEGRAM_BOT_USERNAME}`;

/** Prefixo do payload entendido pelo bot (ep1 = ensaio premium, versão 1). */
const PREFIXO_PAYLOAD = 'ep1';

/** O Telegram só aceita até 64 caracteres no parâmetro start. */
const LIMITE_PAYLOAD = 64;

/** Códigos curtos das categorias, iguais aos do bot. */
const CATEGORIAS_CURTAS: Record<string, string> = {
  aniversario: 'ani',
  corporativo: 'cor',
  casal: 'cas',
  infantil: 'inf',
  casual: 'csu',
  sensual: 'sen',
};

function paraBase64Url(bytes: Uint8Array): string {
  let binario = '';
  for (const byte of bytes) binario += String.fromCharCode(byte);
  return btoa(binario).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function numeral(codigo: string): number {
  const numero = Number.parseInt(String(codigo), 10);
  return Number.isInteger(numero) ? numero : NaN;
}

/**
 * Empacota as cenas escolhidas em um payload curto (bitmask + base64url).
 * Devolve null quando a categoria é desconhecida ou o resultado passa do
 * limite aceito pelo Telegram.
 */
export function codificarSelecao(categoryId: string, codes: string[]): string | null {
  const categoria = CATEGORIAS_CURTAS[categoryId];
  if (!categoria) return null;

  const numeros = [...new Set(codes.map(numeral))]
    .filter((numero) => Number.isInteger(numero) && numero >= 1 && numero <= 999)
    .sort((a, b) => a - b);
  if (!numeros.length) return null;

  const maior = numeros[numeros.length - 1];
  const bytes = new Uint8Array(Math.ceil(maior / 8));
  for (const numero of numeros) {
    const indice = numero - 1;
    bytes[indice >> 3] |= 1 << (indice & 7);
  }

  const payload = `${PREFIXO_PAYLOAD}.${categoria}.${paraBase64Url(bytes)}`;
  return payload.length <= LIMITE_PAYLOAD ? payload : null;
}

/** Link do bot com a seleção embutida (ou o link simples quando não cabe). */
export function linkSelecao(categoryId: string, codes: string[]): string {
  const payload = codificarSelecao(categoryId, codes);
  return payload ? `${TELEGRAM_BOT_URL}?start=${payload}` : TELEGRAM_BOT_URL;
}

export function formatCopyText(selectedCodes: string[]): string {
  if (!selectedCodes.length) return '';
  const lista =
    selectedCodes.length < 2
      ? selectedCodes[0]
      : `${selectedCodes.slice(0, -1).join(', ')} e ${selectedCodes[selectedCodes.length - 1]}`;
  return `Escolhi as cenas ${lista}`;
}
