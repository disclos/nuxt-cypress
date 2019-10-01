export default {
    mode: 'universal',

    // Page headers
    head: {
        title: 'Nuxt Basic Template',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt template with Cypress, Jest, ESLint and code coverage setup.' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:300,300i,400,600,700,800,900' }
        ],
        script: [{ src: 'https://unpkg.com/ionicons@4.5.5/dist/ionicons.js' }]
    },

    // Customize the progress-bar color
    loading: { color: '#fff' },

    // Global CSS
    css: [],

    // Plugins to load before mounting the app
    plugins: [],

    // Nuxt modules
    modules: [],

    // Router config
    router: {
        middleware: []
    },

    // Build config
    build: {
    // You can extend webpack config here
        extend (config, ctx) {}
    }
}
