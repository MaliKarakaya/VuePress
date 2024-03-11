const {description} = require('../../package')

module.exports = {
    title: 'Supsis - Documentation',
    description: description,
    head: [
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        logo: 'https://static.supsis.live/common/email/supsismorlogo.png',
        nav: [
            {
                text: 'Home',
                link: '/guide/',
            },
            {
                text: 'SUPSIS',
                link: '/guide/SUPSIS',
            },
            {
                text: 'JS SDK',
                link: '/guide/JSSDK',
            },
            {
                text: 'API',
                link: 'https://doc.supsis.live/api/#/',
            },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Supsis Dokümantasyon',
                    collapsable: false,
                    children: [
                        '',
                        'SUPSIS',
                        'JSSDK',
                    ]
                }
            ],
        }
    },

    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
