module.exports = {
  head: {
    title: '{{ name }}',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: '{{ description }}'
      }
    ],
    link: [{
      rel: 'icon',
      type: ' image/png',
      href: '/favicon-16x16.png'
    }]
  },
  modules: [
    '@nuxtjs/sitemap'
  ]
}
