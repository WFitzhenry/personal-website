import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        web: '/src/pages/web-projects.html',
        mobile: '/src/pages/mobile-projects.html',
        ml: '/src/pages/ml-projects.html',
        other: '/src/pages/other-projects.html',
      },
    },
  },
});