import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "http://localhost:9966/petclinic",
  },
  // O reporter deve ficar dentro do bloco do defineConfig, logo após o 'use'
  reporter: [['html', { open: 'never' }]], 
});