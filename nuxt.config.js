export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Yteam主页",
    htmlAttrs: {
      lang: "zh",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "nuxt_study_demo" },
      { name: "keywords", content: "nuxt,demo,鹰小队,整活测试" },
      // { hid: 'description', name: 'description', content: '' },
      // { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i",
      },
      {
        rel: "stylesheet",
        href: "https://at.alicdn.com/t/c/font_3642781_cjjerj9ddk.css",
      },
    ],
    script: [{ src: "https://at.alicdn.com/t/c/font_3642781_cjjerj9ddk.js" }],
  },
  //at.alicdn.com/t/c/font_3642781_cjjerj9ddk.js
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "~assets/css/webInit.scss",
    "~assets/css/common.scss",
    "animate.css/animate.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/element-ui"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    extractCSS: {
      ignoreOrder: true,
    },
  },
};
