import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'https://development.ziba-property.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
         configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log(`Request made to: ${req.url}`);
          });
        },
      },
    },
  },
});


