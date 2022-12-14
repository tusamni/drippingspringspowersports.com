import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind({ config: { applyBaseStyles: false } }),
        image({
            serviceEntryPoint: "@astrojs/image/sharp",
        }),
        sitemap(),
        alpinejs(),
    ],
});
