// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['yandex-metrika-module-nuxt3'],
  yandexMetrika: {
    id: 'XXXXXX',
    webvisor: true,
    // consoleLog: true,
    // clickmap: true,
    // useCDN: false,
    // trackLinks: true,
    // accurateTrackBounce: true,
  }
})
