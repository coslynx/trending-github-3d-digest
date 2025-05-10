/// <reference types="vite/client" />

interface ImportMetaEnv extends Record<string, any> {
  /**
   * Public base URL of the API server.
   *
   * Accessed via `import.meta.env.VITE_API_BASE_URL`.
   */
  readonly VITE_API_BASE_URL: string;
  // Add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}