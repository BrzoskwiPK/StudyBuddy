import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'sidebar-app',
      filename: 'sidebarEntry.js',
      exposes: {
        './Sidebar.vue': './src/Sidebar.vue',
      },
      shared: ['vue'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "../host/src/assets/scss/global.scss";`,
      },
    },
  },
});
