// @deno-types="https://deno.land/x/pagic@v0.9.1/src/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';
export default {
    srcDir: 'site',
    theme: 'docs',
    plugins: ['sidebar', 'prev_next', 'ga'],
    title: 'ECMAScript+ 面试宝典',
    description: '收集汇总梳理全网资源，涵盖 JS/TS 前后端的全方位面试题库（含提示性解析），助力找个好工作！',
    github: 'https://github.com/hylerrix/es-interview',
    head: (React.createElement("link", { rel: "icon", type: "image/png", href: "/favicon.png" })),
    nav: [
        { text: '文章', link: '/articles/' },
        {
            text: '打赏一下!!',
            link: 'http://qiniu.ningo.cloud/hylerrix/reward-alipay.png',
            target: '_blank',
            popover: (React.createElement(React.Fragment, null,
                React.createElement("img", { src: "http://qiniu.ningo.cloud/hylerrix/reward-alipay.png", width: "256", style: { marginRight: '1rem', verticalAlign: 'top' } }),
                React.createElement("img", { src: "http://qiniu.ningo.cloud/hylerrix/reward-wechat.png", width: "256", style: { verticalAlign: 'top' } })))
        },
        { text: 'Deno 钻研之术', target: '_blank', link: 'https://github.com/hylerrix/deno-tutorial' },
        { text: '持续添加中...', target: '_blank', link: 'https://github.com/hylerrix' },
        {
            text: '凝果屋',
            link: 'https://github.com/ningowood',
            target: '_blank',
            popover: (React.createElement("img", { src: "http://qiniu.ningo.cloud/ningo/official-qrcode.png", width: "256", style: { verticalAlign: 'top' } }))
        },
        { text: '关于', target: '_blank', link: 'https://github.com/hylerrix' },
    ],
    sidebar: {
        '/articles/': [
            'articles/README.md',
            'articles/es-timeline.md',
            'articles/00-Profession/README.md',
            // {
            //   link: 'articles/00-Profession/README.md',
            //   title: '职业 & 成长',
            //   children: [
            //   ],
            // },
            {
                link: 'articles/01-Programming/README.md',
                title: '编程基础',
                children: [
                    'articles/01-Programming/00-language.md',
                    'articles/01-Programming/01-operating-system.md',
                    'articles/01-Programming/02-algorithms.md',
                    'articles/01-Programming/03-design-patterns.md',
                    'articles/01-Programming/04-software-engineering.md',
                    'articles/01-Programming/05-network-security.md',
                    'articles/01-Programming/06-software-test.md',
                    'articles/01-Programming/07-version-control.md',
                ],
            },
            {
                link: 'articles/02-ECMAScript+/README.md',
                title: 'ECMAScript+',
                children: [
                    'articles/02-ECMAScript+/00-ecmascript.md',
                    'articles/02-ECMAScript+/01-javascript.md',
                    'articles/02-ECMAScript+/02-typescript.md',
                    'articles/02-ECMAScript+/03-javascript-parctice.md',
                ],
            },
            {
                link: 'articles/03-HTML+CSS/README.md',
                title: 'HTML + CSS',
                children: [
                    'articles/03-HTML+CSS/00-html.md',
                    'articles/03-HTML+CSS/01-css-design.md',
                    'articles/03-HTML+CSS/02-html-css-practice.md',
                ],
            },
            {
                link: 'articles/04-Network+API/README.md',
                title: '网络 + 前后端协作',
                children: [
                    'articles/04-Network+API/00-network.md',
                    'articles/04-Network+API/01-fe-be-api.md',
                    'articles/04-Network+API/02-login.md',
                ],
            },
            {
                link: 'articles/05-V8+Runtime/README.md',
                title: 'V8 + JavaScript 运行时',
                children: [
                    'articles/05-V8+Runtime/00-v8.md',
                    'articles/05-V8+Runtime/01-node.md',
                    'articles/05-V8+Runtime/02-deno.md',
                ],
            },
            {
                link: 'articles/06-FE+Browser/README.md',
                title: '前端应用开发 + 浏览器',
                children: [
                    'articles/06-FE+Browser/00-browser.md',
                    'articles/06-FE+Browser/01-fe-framework.md',
                    'articles/06-FE+Browser/02-fe-tooltain.md',
                    'articles/06-FE+Browser/03-pack-tool.md',
                    'articles/06-FE+Browser/04-fe-mobile.md',
                    'articles/06-FE+Browser/05-react.md',
                ],
            },
            {
                link: 'articles/07-BE+Server/README.md',
                title: '后端应用开发 + 服务器',
                children: [
                    'articles/07-BE+Server/00-linux-nginx-database.md',
                    'articles/07-BE+Server/01-node-framework.md',
                ],
            },
        ],
    },
    tools: {
        editOnGithub: true,
        backToTop: true
    },
    ga: {
        id: 'UA-169223577-1'
    },
    port: 8011
};
