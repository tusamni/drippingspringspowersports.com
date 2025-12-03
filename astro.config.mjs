// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
    adapter: netlify(),
    experimental: {
        fonts: [{
            provider: fontProviders.google(),
            name: "Poppins",
            weights: ["300 900"],
            cssVariable: "--font-heading"
        }, {
            provider: fontProviders.google(),
            name: "Inter",
            weights: ["200 800"],
            cssVariable: "--font-manrope"
        }]
    },
    integrations: [sitemap(), alpinejs()],
    site: "https://eriksolsen.com",
    trailingSlash: "always",
    vite: {
        plugins: [tailwindcss()]
    },
});