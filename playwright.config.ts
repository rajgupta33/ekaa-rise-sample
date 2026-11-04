import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests/assessment',
  fullyParallel: true,
  timeout: 90000,
  use: { baseURL: 'http://localhost:3000', channel: 'msedge', headless: true, screenshot: 'only-on-failure' },
  webServer: { command: 'npm run start', url: 'http://localhost:3000', reuseExistingServer: true, timeout: 60000 },
});
