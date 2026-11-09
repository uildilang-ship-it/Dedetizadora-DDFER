import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const resolveServiceImageAssets = {
  name: 'resolve-service-image-assets',
  enforce: 'pre' as const,
  transform(code: string, id: string) {
    if (!id.endsWith('/src/data/mockData.ts')) return null;

    return code.replace(
      /image: '(\/src\/assets\/images\/[^']+)'/g,
      (_match, imagePath: string) => {
        const filename = imagePath.split('/').pop();
        return `image: new URL('../assets/images/${filename}', import.meta.url).href`;
      },
    );
  },
};

export default defineConfig(() => {
  return {
    plugins: [resolveServiceImageAssets, react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
