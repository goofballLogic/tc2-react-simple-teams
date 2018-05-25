const path = require( "path" );

module.exports = {

    mode: "development",
    entry: "./src/index.js",
    output: {

        filename: "bundle.js",
        path: path.resolve( __dirname, "dist" ),
        libraryTarget: "umd"

    },
    module: {

        rules: [
            
            {
            
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
          
            },
            {
                
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: "svg-react-loader"
                
            }
        
        ]
      
    },
    externals: [

        "react"

    ]

};