const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@font-family': 'Poppins, serif',
                            '@body-background': '#3E4059', // blue
                            '@text-color-dark': '#F3F1E0', // off-white
                            '@text-color': '#F3F1E0', // off-white
                            '@primary-color': ' #ECCD97',  // yellow
                            '@heading-color': '#F3F1E0', // off-white
                            '@btn-primary-color': '#3E4059', // blue
                            '@btn-font-weight': '600',
                            '@font-size-base': '16px',
                            '@btn-border-radius-base': '8px',
                            '@card-radius': '16px',
                            '@card-background': '#2f3144'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};