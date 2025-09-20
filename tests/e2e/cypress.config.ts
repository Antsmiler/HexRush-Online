import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    supportFile: false,
    specPattern: 'tests/e2e/**/*.cy.{js,ts}'
  }
});
