const parseArgs = require('minimist')
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: 'hostname',
    p: 'port'
  },
  string: ['H'],
  unknown: parameter => false
})

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  '3000'
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  'localhost'
module.exports = {
  env: {
    baseUrl:
      process.env.BASE_URL ||
      `http://${host}:${port}`
  },
  head: {
    title: 'tt1',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
  ** Load font
  */
  webfontloader: {
    google: {
      families: ['IBM Plex Sans:400,500,700'] //Loads Lato font with weights 400 and 700
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: ['~/assets/styles/app.styl', '~/assets/styles/main.styl'],
  build: {},
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
    'nuxt-webfontloader',
    '~/modules/typescript.js'
  ],
  axios: {},
  workbox: {
    importScripts: [
        'custom-sw.js'
    ],
  },
  manifest: {
    name: 'Docker Vue Nuxt',
    lang: 'en'
  }
}
