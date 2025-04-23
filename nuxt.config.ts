import mkcert from 'vite-plugin-mkcert'

export default defineNuxtConfig({
  compatibilityDate: '2025-04-22',
  devtools: { enabled: true },
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
        apiOptions: {
          endpoint: process.env.STORYBLOK_API_BASE_URL
            ? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
            : undefined,
        },
      },
    ],
  ],

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/3.0.1/modern-normalize.min.css',
        },
      ],
    },
  },

  css: ['~/assets/css/blueprint.css'],

  ssr: true,

  devServer: {
    https: true,
  },

  vite: {
    plugins: [mkcert()],
  },
})
