import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { viteSingleFile } from 'vite-plugin-singlefile';
import sveltePreprocess from 'svelte-preprocess';
import svelteSVG from 'vite-plugin-svelte-svg';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte({
            preprocess: sveltePreprocess({
                scss: {
                    prependData: `@import "./src/App.scss";`,
                },
            }),
        }),
        // viteSingleFile(),
        svelteSVG({
            svgoConfig: {}, // See https://github.com/svg/svgo#configuration
            requireSuffix: true, // Set false to accept '.svg' without the '?component'
        }),
    ],
    esbuild: {
        charset: 'utf8',
    },
    server: {
        port: 3000,
    },
});
