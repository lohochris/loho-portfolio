/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_URL: string;
  // You can keep the others if you want, or delete them if you're done with EmailJS
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}