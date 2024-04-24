import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svgr({
            include: '**/*.svg',
        }),
        react(),
    ],
    resolve: {
        alias: [{
            find: '@',
            replacement: '/src',
        }],
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API_URL__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
});