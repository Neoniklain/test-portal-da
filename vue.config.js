module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/scss/style.scss";`
            }
        }
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    oneOf: [
                        {
                            resourceQuery: /^\?vue/,
                            use: ['pug-plain-loader']
                        },
                        {
                            use: ['raw-loader', 'pug-plain-loader']
                        }
                    ]
                }
            ]
        }
    }
}