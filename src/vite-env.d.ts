/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TELEGRAM_BOT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
