const mix = require('laravel-mix')
const webpackConfig = require('./webpack.config')

mix.webpackConfig(webpackConfig)

mix.js('resources/js/card.js', 'dist/js')
   .vue({ version: 2 })
   .sass('resources/sass/card.scss', 'dist/css')
