export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-api-party',
    '@nuxt/fonts',
  ],

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: true,
    },
  },

  apiParty: {
    endpoints: {
      'pokemon': {
        url: 'https://pokeapi.co',
        schema: 'https://raw.githubusercontent.com/PokeAPI/pokeapi/refs/heads/master/openapi.yml',
      },
      'rick-and-morty': {
        url: 'https://rickandmortyapi.com/api',
      },
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
})
