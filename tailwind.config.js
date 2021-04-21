module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1a91da',
        'deep-blue': '#1b95e0',
        'light-blue': '#1da1f2',
        'faded-blue': '#1da1f21a',
        'faded-gray': '#2f3336',
        'light-gray': '#6e767d',
      },
    },
  },
  variants: {},
  plugins: [],
}
