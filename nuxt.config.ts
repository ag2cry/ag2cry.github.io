// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  srcDir: "src",

  app: {
    baseURL: "",
    head: {
      title: "shio's room",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0,viewport-fit=cover,user-scalable=0"
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      htmlAttrs: {
        lang: "ja",
      }
    },
    cdnURL: '/<repository>/'
  },

  modules: ["@pinia/nuxt"],
  devtools: { enabled: true },
  compatibilityDate: "2024-10-26"
})