/* eslint-env node */
/// <reference types="vitest"/>
import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue';

const outDir = resolve(__dirname, 'dist');
const rootDir = resolve(__dirname, 'src');
const publicDir = resolve(__dirname, 'public');

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tic-tac-vue/',
  build: {
    emptyOutDir: true,
    outDir,
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
      },
    },
  },
  plugins: [
    vue(),
    VitePWA({
      devOptions: { enabled: true },
      injectRegister: 'inline',
      registerType: 'autoUpdate',
      manifest: {
        name: 'Tic Tac Vue',
        short_name: 'Tic Tac Vue',
        background_color: '#333333',
        theme_color: '#42b983',
        icons: [
          {
            src: '/favicon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicon.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/favicon.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/favicon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    })],
  publicDir,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  root: rootDir,
  server: {
    port: 4000,
  },
  test: {
    // Because vite root is modified, need to point this to test directory
    include: ['../test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}'],
    reporters: 'dot',
  },
});
