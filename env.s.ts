/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_REST_URL: string;
  readonly VITE_CRYPTO_KEY: string;
  // more env variables...
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
