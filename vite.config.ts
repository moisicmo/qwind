import { defineConfig, loadEnv } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import { SITE } from './src/config.mjs';

// Cargar las variables de entorno desde .env
const env = loadEnv('', process.cwd());

// Obtener el valor de la variable de entorno para el host y el puerto
const { VITE_HOST, VITE_PORT } = env;


export default defineConfig(() => {
    return {
        base: SITE.basePathname,
        plugins: [
            qwikCity({
                trailingSlash: SITE.trailingSlash,
            }),
            qwikVite(),
            tsconfigPaths(),
        ],
        preview: {
            headers: {
                'Cache-Control': 'public, max-age=600',
            },
        },
        server: {
          host: VITE_HOST || 'localhost', // Usar el valor de la variable de entorno o 'localhost' por defecto
          port: Number(VITE_PORT) || 3000, // Usar el valor de la variable de entorno o 3000 por defecto
        },
    };
});
