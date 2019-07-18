var path = require('path')
var webpack = require('webpack')
var fs=require("fs");
var CopyWebpackPlugin = require('copy-webpack-plugin');

const glob = require('glob');
const banner = `/**
* CopyRight (C) 2018-2022 CSII mobile Group Created.
* Created by phc on 18/08/01
* Version madp 1.0.0
*/
`
var bannerPlugin = new webpack.BannerPlugin({
    banner: `// { "framework": "Vue"} `,
    raw: true
})

function isExists(path,callBack){
    fs.exists(path,function(exists){
        if(exists){
            callBack()
        }
        if(!exists){
            return false;
        }
    })
}
// 配置组件入口文件
const entryConfig = dir => {
    const filePath = glob.sync(`${dir}/*/index.js`, {});
    const entry = {};
    filePath.forEach(path => {
        if (!/\.entry\.js$/.test(path)) {
            entry[path.replace(/^(.*)\.js$/, '$1')] = './' + path;
        }
    });
    return entry;
};
// 导出组件出口文件
const exportConfig = () => {
    const filePath = glob.sync('examples/*/', {});
    const arr = [];
    filePath.forEach(path => {
        if (!/(_public)/.test(path)) {
            arr.push({
                from: 'examples/_public/index.html',
                to: path + 'index.html'
            });
            arr.push({
                from: path + 'imgs',
                to: path + 'imgs',
            });
            if(isExists(path+"json",function(){
                arr.push({
                    from: path + 'json',
                    to: path + 'json',
                });
            })){
                
            }
            
        }
    });
    const filePublicPath = glob.sync('packages/*/', {});
    filePublicPath.forEach(path => {
        path = path.replace('packages/', '');
        var m = path.match(/(\w*)-(\w)(\w*)/);
        if(m){
            var currentPath = m[1] + m[2].toUpperCase() + m[3]
            if (!/(_public)/.test(path)) {
                arr.push({
                    from: 'packages/' + path + '/componentsImg',
                    to: "examples/" + currentPath + "/componentsImg"
                });

            }
        }
        
    });
    return arr;
};




const examples = entryConfig('examples');
const entry = Object.assign({
        'index': './index.js'
    },
    examples
)

function getBaseConfig() {
    return {
        entry,
        output: {
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules(?!(\/|\\).*(weex).*)/
            }, {
                test: /\.vue(\?[^?]+)?$/
            }]
        },
        plugins: [
            // new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}),
            bannerPlugin,

            new CopyWebpackPlugin(
                exportConfig()
            )

        ],
        //配置webpack开发服务功能
        devServer: {
            contentBase: path.resolve(__dirname, './'),
            compress: true,
            host: "0.0.0.0",
            port: "8088",
            // open:true
        },
        resolve: {
            extensions: ['.js', '.vue'],
            alias: {
                'vue$': 'vue/dist/vue.common.js'
            }
        },
    }
}

var webConfig = getBaseConfig()
webConfig.output.filename = '[name].web.js'
webConfig.module.rules[1].loader = 'vue-loader'
/**
 * important! should use postTransformNode to add $processStyle for
 * inline style normalization.
 */
webConfig.module.rules[1].options = {
    optimizeSSR: false,
    postcss: [
        // to convert weex exclusive styles.
        require('postcss-plugin-weex')(),
        require('autoprefixer')({
            browsers: ['> 0.1%', 'ios >= 8', 'not ie < 12']
        }),
        require('postcss-plugin-px2rem')({
            // base on 750px standard.
            rootValue: 75,
            // to leave 1px alone.
            minPixelValue: 1.01
        })
    ],
    compilerModules: [{
        postTransformNode: el => {
            // to convert vnode for weex components.
            require('weex-vue-precompiler')()(el)
        }
    }]
}

var nativeConfig = getBaseConfig()
nativeConfig.output.filename = '[name].weex.js'
nativeConfig.module.rules[1].loader = 'weex-loader'

module.exports = [webConfig, nativeConfig]