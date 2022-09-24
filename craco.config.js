const cracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: cracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@body-background': '#141414' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
