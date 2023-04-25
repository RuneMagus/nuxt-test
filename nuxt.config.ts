import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Components: https://nuxt.com/docs/api/configuration/nuxt-config#components
  components: [
    {
      path: "~/components/",
      pathPrefix: false,
    },
  ],
  css: ["/assets/styles/fonts.css", "/assets/styles/global-styles.css"],
  // Typescript: https://nuxt.com/docs/api/configuration/nuxt-config#typescript
  typescript: {
    typeCheck: true,
    strict: true,
  },
  nitro: {
    preset: "aws-lambda"
  }
});
