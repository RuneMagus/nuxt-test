import { defaultColors, defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [HstVue()],
  theme: {
    title: "WOH components | TRG",
    logo: {
      square: "./assets/logos/WagamamaLogoSquare.svg",
      light: "./assets/logos/WagamamaLogoBlack.svg",
      dark: "./assets/logos/WagamamaLogoWhite.svg",
    },
    colors: {
      primary: defaultColors.red,
    },
  },
  tree: {
    groups: [
      {
        id: "top",
        title: "", // No toggle
      },
      {
        title: "Atoms",
        include: (file) => file.path.includes("atoms"),
      },
      {
        title: "Molecules",
        include: (file) => file.path.includes("molecules"),
      },
      {
        title: "Others",
        include: () => true,
      },
    ],
  },
  vite: {
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        // targets to transform
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],

        // global imports to register
        imports: [
          // presets
          "vue",
          "vue-router",
          // custom
          {
            "@vueuse/core": [
              // named imports
              "useMouse", // import { useMouse } from '@vueuse/core',
              // alias
              ["useFetch", "useMyFetch"], // import { useFetch as useMyFetch } from '@vueuse/core',
            ],
            axios: [
              // default imports
              ["default", "axios"], // import { default as axios } from 'axios',
            ],
          },
        ],
        // Enable auto import by filename for default module exports under directories
        defaultExportByFilename: false,

        // Auto import for module exports under directories
        // by default it only scan one level of modules under the directory
        dirs: [
          // './hooks',
          // './composables' // only root modules
          // './composables/**', // all nested modules
          // ...
        ],

        // Filepath to generate corresponding .d.ts file.
        // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
        // Set `false` to disable.
        dts: true,

        // Custom resolvers, compatible with `unplugin-vue-components`
        // see https://github.com/antfu/unplugin-auto-import/pull/23/
        resolvers: [
          /* ... */
        ],
      }),
      Components({ dirs: ["./components"] }),
    ],
  },
});
