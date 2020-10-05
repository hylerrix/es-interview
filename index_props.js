import projectConfig from '/pagic.config.js';
import IndexPage from './index_content.js';
var _a, _b;
export default {
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['undefined'] },
    'pagePath': "index.tsx",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "",
    'content': React.createElement(IndexPage, { config: {
            description: '收集汇总梳理全网资源，涵盖 JS/TS 前后端的全方位面试题库（含提示性解析），助力找个好工作！',
            exclude: [
                '**/.*',
                '**/package.json',
                '**/package-lock.json',
                '**/node_modules',
                'pagic.config.ts',
                'pagic.config.tsx',
                '**/config.gypi',
                '**/CVS',
                '**/npm-debug.log',
                'dist'
            ],
            ga: {
                id: 'UA-169223577-1'
            },
            github: 'https://github.com/hylerrix/es-interview',
            head: React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
            include: undefined,
            md: {
                anchorLevel: [
                    2,
                    3,
                    4,
                    5,
                    6
                ],
                tocLevel: [
                    2,
                    3
                ]
            },
            nav: [
                {
                    link: '/articles/',
                    text: '文章'
                },
                {
                    link: 'http://qiniu.ningo.cloud/hylerrix/reward-alipay.png',
                    popover: React.createElement(React.Fragment, null,
                        React.createElement("img", { src: "http://qiniu.ningo.cloud/hylerrix/reward-alipay.png", style: { marginRight: '1rem', verticalAlign: 'top' }, width: "256" }),
                        React.createElement("img", { src: "http://qiniu.ningo.cloud/hylerrix/reward-wechat.png", style: { verticalAlign: 'top' }, width: "256" })),
                    target: '_blank',
                    text: '打赏一下!!'
                },
                {
                    link: 'https://github.com/hylerrix/deno-tutorial',
                    target: '_blank',
                    text: 'Deno 钻研之术'
                },
                {
                    link: 'https://github.com/hylerrix',
                    target: '_blank',
                    text: '持续添加中...'
                },
                {
                    link: 'https://github.com/ningowood',
                    popover: React.createElement("img", { src: "http://qiniu.ningo.cloud/ningo/official-qrcode.png", style: { verticalAlign: 'top' }, width: "256" }),
                    target: '_blank',
                    text: '凝果屋'
                },
                {
                    link: 'https://github.com/hylerrix',
                    target: '_blank',
                    text: '关于'
                }
            ],
            outDir: 'dist',
            plugins: [
                'clean',
                'init',
                'md',
                'tsx',
                'script',
                'layout',
                'out',
                'sidebar',
                'prev_next',
                'ga'
            ],
            port: 8011,
            root: '/',
            serve: false,
            sidebar: {
                '/articles/': [
                    'articles/README.md',
                    'articles/00-Profession/README.md',
                    {
                        children: [
                            'articles/01-Programming/00-language.md',
                            'articles/01-Programming/01-operating-system.md',
                            'articles/01-Programming/02-algorithms.md',
                            'articles/01-Programming/03-design-patterns.md',
                            'articles/01-Programming/04-software-engineering.md',
                            'articles/01-Programming/05-network-security.md',
                            'articles/01-Programming/06-software-test.md'
                        ],
                        link: 'articles/01-Programming/README.md',
                        title: '编程基础'
                    },
                    {
                        children: [
                            'articles/02-ECMAScript+/00-ecmascript.md',
                            'articles/02-ECMAScript+/01-javascript.md',
                            'articles/02-ECMAScript+/02-typescript.md'
                        ],
                        link: 'articles/02-ECMAScript+/README.md',
                        title: 'ECMAScript+'
                    },
                    {
                        children: [
                            'articles/03-HTML+CSS/00-html.md',
                            'articles/03-HTML+CSS/01-css.md',
                            'articles/03-HTML+CSS/02-html-css-practice.md'
                        ],
                        link: 'articles/03-HTML+CSS/README.md',
                        title: 'HTML + CSS'
                    },
                    {
                        children: [
                            'articles/04-Network+API/00-network.md',
                            'articles/04-Network+API/01-fe-be-api.md',
                            'articles/04-Network+API/02-login.md'
                        ],
                        link: 'articles/04-Network+API/README.md',
                        title: '网络 + 前后端协作'
                    },
                    {
                        children: [
                            'articles/05-V8+Runtime/00-v8.md',
                            'articles/05-V8+Runtime/01-node.md',
                            'articles/05-V8+Runtime/02-deno.md'
                        ],
                        link: 'articles/05-V8+Runtime/README.md',
                        title: 'V8 + JavaScript 运行时'
                    },
                    {
                        children: [
                            'articles/06-FE+Browser/00-browser.md',
                            'articles/06-FE+Browser/01-fe.md'
                        ],
                        link: 'articles/06-FE+Browser/README.md',
                        title: '前端应用开发 + 浏览器'
                    },
                    {
                        children: [
                            'articles/07-BE+Server/00-linux-nginx-database.md',
                            'articles/07-BE+Server/01-node-framework.md'
                        ],
                        link: 'articles/07-BE+Server/README.md',
                        title: '后端应用开发 + 服务器'
                    }
                ]
            },
            srcDir: 'site',
            theme: 'docs',
            title: 'ECMAScript+ 面试宝典',
            tools: {
                backToTop: true,
                editOnGithub: true
            },
            watch: false
        }, content: null, head: React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }), layoutPath: "_layout.tsx", outputPath: "index.html", pagePath: "index.tsx", script: null, title: "", toc: null }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': null
};
