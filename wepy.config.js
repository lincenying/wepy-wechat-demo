const path = require('path')
const prod = process.env.NODE_ENV === 'production'

module.exports = {
    eslint: true,
    wpyExt: '.vue',
    build: {
        web: {
            htmlTemplate: path.join('src', 'index.template.html'),
            htmlOutput: path.join('web', 'index.html'),
            jsOutput: path.join('web', 'index.js')
        }
    },
    compilers: {
        babel: {
            sourceMap: true,
            presets: [
                'es2015',
                'stage-1'
            ],
            plugins: [
                'transform-export-extensions',
                'syntax-export-extensions',
            ]
        }
    }
}

if (prod) {

    delete module.exports.compilers.babel.sourcesMap
    // 压缩sass
    // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

    // 压缩less
    module.exports.compilers['less'] = {
        compress: true
    }

    // 压缩js
    module.exports.plugins = {
        uglifyjs: {
            filter: /\.js$/,
            config: {}
        },
        /* imagemin: {
          filter: /\.(jpg|png|jpge)$/,
          config: {
            jpg: {
              quality: 80
            },
            png: {
              quality: 80
            }
          }
        } */
    }
}
