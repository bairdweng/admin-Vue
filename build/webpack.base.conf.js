
var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV
// check env & config/index.js to decide whether to enable CSS source maps for the
// various preprocessor loaders added to vue-loader at the end of this file

//环境变量
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd


// module.noParse = {
//     noParse: [new RegExp(path.resolve(__dirname, '/node_modules/localforage/dist/localforage.js'))]
// }

module.exports = {
    //页面入口文件配置
    entry: {
        app: './src/main.js'
    },
    //入口文件输出配置
    output: {
        path: config.build.assetsRoot,
        publicpath:'./',
        filename: '[name].js',
    },
    //其它解决方案配置
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.vue', '.json'],
        fallback: [path.join(__dirname, '../node_modules')],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components'),
            'service': path.resolve(__dirname, '../src/service'),
            'less': path.resolve(__dirname, '../src/less'),
            'tools': path.resolve(__dirname, '../src/tools'),
        },
    },
    resolveLoader: {
        // fallback: [path.join(__dirname, '../node_modules')],
        root: path.join(__dirname, 'node_modules')
    },
    //加载器，配置文件使用的加载器。(为什么css，sass不用单独增加呢？)
    module: {
        preLoaders: [
        ],
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,//包含要处理的目录
                exclude: /node_modules///排除不处理的目录
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                //增加一个query对象,防止字体找不到。
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: [{
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                },{
                    limit: 10000,
                    name: utils.assetsPath('../fonts/[name].[hash:7].[ext]')
                }]
            },
            {
                test: /vue-scroller.src.*?js$/,
                loader: 'babel'
            }
        ],
        noParse: [new RegExp('node_modules/localforage/dist/localforage.js')]//消除localforage.js警告
    },
    vue: {
        loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
        postcss: [
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ]
    }
}
