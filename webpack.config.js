const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry  : "./src/page.jsx",
    output : {
        filename : "bundle.js",
        path : path.resolve(__dirname,"webpack")
    },
    devServer : {
        static : {
            directory : path.resolve(__dirname,"webpack")
        },
        compress:true,
        port : 9000
    },
    mode : "production",
    plugins : [new MiniCssExtractPlugin()],
    module:{
        rules: [
            {
                test : /\.jsx$/,
                exclude : /node_modules/,
                use : ["babel-loader"]
            },
            {
                test : /.(c|sa)ss$/,
                use : [MiniCssExtractPlugin.loader,"css-loader"]
            },
            {
            test: /\.(png|jpg)$/,
            loader: 'file-loader'
            }
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],    
    },
    devtool : "source-map",
    performance:{
        maxEntrypointSize : 512000,
        maxAssetSize : 512000
    }
}