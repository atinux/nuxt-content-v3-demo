// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  // Pre-render all pages
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  }
})
