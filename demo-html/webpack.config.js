const {resolve}=require('path'); 
const HtmlWebpackPlgin=require('html-webpack-plugin');
// loader：1下载 2 使用（配置loader）
// plugin：1下载 2引用 3使用 来处理HTML资源

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            // {
            //     // loders的配置
            //     test:/\.html/,
            //     use:[

            //     ]
            // }
        ]
    },
    plugins:[
        // plugin的配置
        // html-webpack-plugin
        // 功能：默认会创建空的HTML，自动引入打包输出的所有资源。
        // 需求：需要有结构的HTML文件
        new HtmlWebpackPlgin({
            //下方为设置默认样板的格式
            template:'./temp/index.html'
        })

    ],
    mode:'development'
    // mode:'production'
}