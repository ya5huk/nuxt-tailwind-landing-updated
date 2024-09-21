// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-import': {},
      'postcss-custom-media': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
      title: 'Starter',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },

  }

})
