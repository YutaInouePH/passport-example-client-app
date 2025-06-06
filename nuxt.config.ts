// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@bitinflow/nuxt-oauth',
  ],

  ssr: false,

  oauth: {
    redirect: {
      home: '/home',
    },
    endpoints: {
      authorization: 'http://localhost:8002/oauth/authorize',
      token: 'http://localhost:8002/oauth/token',
      userInfo: 'http://localhost:8002/api/users/me',
      logout: 'http://localhost:8002/oauth/logout'
    },
    clientId: '019743a8-72be-7116-a0f3-2d0732d2984f',
    scope: ['']
  },
})
