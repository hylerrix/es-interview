import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "title": "前端大事记",
        "link": "articles/00-Beginner/00-es-timeline.html"
    },
    'next': {
        "title": "大厂职级",
        "link": "articles/00-Beginner/02-es-rank.html"
    },
    'sidebar': [
        {
            "title": "ESMAScript+ 面试宝典",
            "link": "articles/index.html",
            "pagePath": "articles/README.md"
        },
        {
            "link": "articles/00-Beginner/index.html",
            "title": "一切的起源",
            "children": [
                {
                    "title": "前端大事记",
                    "link": "articles/00-Beginner/00-es-timeline.html",
                    "pagePath": "articles/00-Beginner/00-es-timeline.md"
                },
                {
                    "title": "ES 方向 & 谁在招人？",
                    "link": "articles/00-Beginner/01-es-direction.html",
                    "pagePath": "articles/00-Beginner/01-es-direction.md"
                },
                {
                    "title": "大厂职级",
                    "link": "articles/00-Beginner/02-es-rank.html",
                    "pagePath": "articles/00-Beginner/02-es-rank.md"
                },
                {
                    "title": "看什么书？",
                    "link": "articles/00-Beginner/03-es-books.html",
                    "pagePath": "articles/00-Beginner/03-es-books.md"
                }
            ],
            "pagePath": "articles/00-Beginner/README.md"
        },
        {
            "link": "articles/01-Programming/index.html",
            "title": "编程基础",
            "children": [
                {
                    "title": "编程语言",
                    "link": "articles/01-Programming/00-language.html",
                    "pagePath": "articles/01-Programming/00-language.md"
                },
                {
                    "title": "操作系统",
                    "link": "articles/01-Programming/01-operating-system.html",
                    "pagePath": "articles/01-Programming/01-operating-system.md"
                },
                {
                    "title": "算法",
                    "link": "articles/01-Programming/02-algorithms.html",
                    "pagePath": "articles/01-Programming/02-algorithms.md"
                },
                {
                    "title": "设计模式",
                    "link": "articles/01-Programming/03-design-patterns.html",
                    "pagePath": "articles/01-Programming/03-design-patterns.md"
                },
                {
                    "title": "软件工程",
                    "link": "articles/01-Programming/04-software-engineering.html",
                    "pagePath": "articles/01-Programming/04-software-engineering.md"
                },
                {
                    "title": "测试",
                    "link": "articles/01-Programming/05-software-test.html",
                    "pagePath": "articles/01-Programming/05-software-test.md"
                },
                {
                    "title": "版本控制",
                    "link": "articles/01-Programming/06-version-control.html",
                    "pagePath": "articles/01-Programming/06-version-control.md"
                },
                {
                    "title": "计算机组成原理",
                    "link": "articles/01-Programming/07-computer-principles.html",
                    "pagePath": "articles/01-Programming/07-computer-principles.md"
                },
                {
                    "title": "编译原理",
                    "link": "articles/01-Programming/08-compilation-principle.html",
                    "pagePath": "articles/01-Programming/08-compilation-principle.md"
                }
            ],
            "pagePath": "articles/01-Programming/README.md"
        },
        {
            "link": "articles/02-ECMAScript+/index.html",
            "title": "ECMAScript+",
            "children": [
                {
                    "title": "ECMAScript",
                    "link": "articles/02-ECMAScript+/00-ecmascript.html",
                    "pagePath": "articles/02-ECMAScript+/00-ecmascript.md"
                },
                {
                    "title": "ES 数据类型",
                    "link": "articles/02-ECMAScript+/01-es-data-type.html",
                    "pagePath": "articles/02-ECMAScript+/01-es-data-type.md"
                },
                {
                    "title": "JavaScript 基础知识",
                    "link": "articles/02-ECMAScript+/02-javascript.html",
                    "pagePath": "articles/02-ECMAScript+/02-javascript.md"
                },
                {
                    "title": "TypeScript",
                    "link": "articles/02-ECMAScript+/03-typescript.html",
                    "pagePath": "articles/02-ECMAScript+/03-typescript.md"
                },
                {
                    "title": "JavaScript 常见实战题",
                    "link": "articles/02-ECMAScript+/04-javascript-parctice.html",
                    "pagePath": "articles/02-ECMAScript+/04-javascript-parctice.md"
                }
            ],
            "pagePath": "articles/02-ECMAScript+/README.md"
        },
        {
            "link": "articles/03-HTML+CSS/index.html",
            "title": "HTML + CSS",
            "children": [
                {
                    "title": "HTML",
                    "link": "articles/03-HTML+CSS/00-html.html",
                    "pagePath": "articles/03-HTML+CSS/00-html.md"
                },
                {
                    "title": "CSS",
                    "link": "articles/03-HTML+CSS/01-css-design.html",
                    "pagePath": "articles/03-HTML+CSS/01-css-design.md"
                },
                {
                    "title": "CSS 进阶",
                    "link": "articles/03-HTML+CSS/02-css-advance.html",
                    "pagePath": "articles/03-HTML+CSS/02-css-advance.md"
                },
                {
                    "title": "CSS 实战",
                    "link": "articles/03-HTML+CSS/03-css-practice.html",
                    "pagePath": "articles/03-HTML+CSS/03-css-practice.md"
                },
                {
                    "title": "DOM + BOM",
                    "link": "articles/03-HTML+CSS/04-dom-bom.html",
                    "pagePath": "articles/03-HTML+CSS/04-dom-bom.md"
                }
            ],
            "pagePath": "articles/03-HTML+CSS/README.md"
        },
        {
            "link": "articles/04-Network+API/index.html",
            "title": "网络 + 前后端协作",
            "children": [
                {
                    "title": "网络",
                    "link": "articles/04-Network+API/00-network.html",
                    "pagePath": "articles/04-Network+API/00-network.md"
                },
                {
                    "title": "前后端协作",
                    "link": "articles/04-Network+API/01-fe-be-api.html",
                    "pagePath": "articles/04-Network+API/01-fe-be-api.md"
                },
                {
                    "title": "网络安全",
                    "link": "articles/04-Network+API/02-network-security.html",
                    "pagePath": "articles/04-Network+API/02-network-security.md"
                }
            ],
            "pagePath": "articles/04-Network+API/README.md"
        },
        {
            "link": "articles/05-V8+Runtime/index.html",
            "title": "V8 + JavaScript 运行时",
            "children": [
                {
                    "title": "V8",
                    "link": "articles/05-V8+Runtime/00-v8.html",
                    "pagePath": "articles/05-V8+Runtime/00-v8.md"
                },
                {
                    "title": "Node",
                    "link": "articles/05-V8+Runtime/01-node.html",
                    "pagePath": "articles/05-V8+Runtime/01-node.md"
                },
                {
                    "title": "Deno",
                    "link": "articles/05-V8+Runtime/02-deno.html",
                    "pagePath": "articles/05-V8+Runtime/02-deno.md"
                }
            ],
            "pagePath": "articles/05-V8+Runtime/README.md"
        },
        {
            "link": "articles/06-FE+Browser/index.html",
            "title": "前端应用开发 + 浏览器",
            "children": [
                {
                    "title": "浏览器",
                    "link": "articles/06-FE+Browser/00-browser.html",
                    "pagePath": "articles/06-FE+Browser/00-browser.md"
                },
                {
                    "title": "前端工程化",
                    "link": "articles/06-FE+Browser/01-fe-engineering.html",
                    "pagePath": "articles/06-FE+Browser/01-fe-engineering.md"
                },
                {
                    "title": "前端工具链",
                    "link": "articles/06-FE+Browser/02-fe-tooltain.html",
                    "pagePath": "articles/06-FE+Browser/02-fe-tooltain.md"
                },
                {
                    "title": "前端打包工具",
                    "link": "articles/06-FE+Browser/03-pack-tool.html",
                    "pagePath": "articles/06-FE+Browser/03-pack-tool.md"
                },
                {
                    "title": "移动端 Web 开发",
                    "link": "articles/06-FE+Browser/04-fe-mobile.html",
                    "pagePath": "articles/06-FE+Browser/04-fe-mobile.md"
                },
                {
                    "title": "React 基础",
                    "link": "articles/06-FE+Browser/05-react.html",
                    "pagePath": "articles/06-FE+Browser/05-react.md"
                },
                {
                    "title": "React 实战",
                    "link": "articles/06-FE+Browser/06-react-practice.html",
                    "pagePath": "articles/06-FE+Browser/06-react-practice.md"
                },
                {
                    "title": "Vue",
                    "link": "articles/06-FE+Browser/07-vue.html",
                    "pagePath": "articles/06-FE+Browser/07-vue.md"
                },
                {
                    "title": "iframe",
                    "link": "articles/06-FE+Browser/08-iframe.html",
                    "pagePath": "articles/06-FE+Browser/08-iframe.md"
                }
            ],
            "pagePath": "articles/06-FE+Browser/README.md"
        },
        {
            "link": "articles/07-BE+Server/index.html",
            "title": "后端应用开发 + 服务器",
            "children": [
                {
                    "title": "Linux + Nginx + 数据库",
                    "link": "articles/07-BE+Server/00-linux-nginx-database.html",
                    "pagePath": "articles/07-BE+Server/00-linux-nginx-database.md"
                },
                {
                    "title": "Node 框架",
                    "link": "articles/07-BE+Server/01-node-framework.html",
                    "pagePath": "articles/07-BE+Server/01-node-framework.md"
                }
            ],
            "pagePath": "articles/07-BE+Server/README.md"
        },
        {
            "title": "如何用 Markdown 绘制图片",
            "link": "articles/draw-in-markdown.html",
            "pagePath": "articles/draw-in-markdown.md"
        },
        {
            "title": "变更日志",
            "link": "articles/roadmap.html",
            "pagePath": "articles/roadmap.md"
        }
    ],
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['undefined'] },
    'pagePath': "articles/00-Beginner/01-es-direction.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/00-Beginner/01-es-direction.html",
    'title': "ES 方向 & 谁在招人？",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>ES 方向 &amp; 谁在招人？</h1>\n<blockquote>\n<p>目前电子书还在建设中，如果你有招聘需求，欢迎先发布在仓库 issues 里面。如果你愿意直接编辑这个 Markdown 文件并提交 PR，那就更好了！</p>\n</blockquote>\n<p>后端深度大，前端广度大，ECMAScript 胃口大。</p>\n<h2 id="%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96">数据可视化<a class="anchor" href="#%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96">§</a></h2>\n<h2 id="%E5%90%8C%E6%9E%84%E6%9E%B6%E6%9E%84">同构架构<a class="anchor" href="#%E5%90%8C%E6%9E%84%E6%9E%B6%E6%9E%84">§</a></h2>\n<h2 id="%E8%B7%A8%E5%B9%B3%E5%8F%B0%E5%BC%80%E5%8F%91">跨平台开发<a class="anchor" href="#%E8%B7%A8%E5%B9%B3%E5%8F%B0%E5%BC%80%E5%8F%91">§</a></h2>\n<ul>\n<li>flutter、weex、rn</li>\n<li>Electron</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF%E6%99%BA%E8%83%BD%E7%BB%84%E4%BB%B6%E6%8A%80%E6%9C%AF">前端智能组件技术<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E6%99%BA%E8%83%BD%E7%BB%84%E4%BB%B6%E6%8A%80%E6%9C%AF">§</a></h2>\n<h2 id="%E4%BD%8E%E4%BB%A3%E7%A0%81">低代码<a class="anchor" href="#%E4%BD%8E%E4%BB%A3%E7%A0%81">§</a></h2>\n<h2 id="%E5%BE%AE%E6%9C%8D%E5%8A%A1">微服务<a class="anchor" href="#%E5%BE%AE%E6%9C%8D%E5%8A%A1">§</a></h2>\n<h2 id="node-%E5%BC%80%E5%8F%91">Node 开发<a class="anchor" href="#node-%E5%BC%80%E5%8F%91">§</a></h2>\n<h2 id="deno-%E5%BC%80%E5%8F%91">Deno 开发<a class="anchor" href="#deno-%E5%BC%80%E5%8F%91">§</a></h2>\n<h2 id="webrtc-%E5%AE%9E%E6%97%B6%E9%9F%B3%E8%A7%86%E9%A2%91">WebRTC 实时音视频<a class="anchor" href="#webrtc-%E5%AE%9E%E6%97%B6%E9%9F%B3%E8%A7%86%E9%A2%91">§</a></h2>\n<h2 id="serverless">Serverless<a class="anchor" href="#serverless">§</a></h2>\n<h2 id="%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%B0%8F%E6%B8%B8%E6%88%8F">小程序/小游戏<a class="anchor" href="#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%B0%8F%E6%B8%B8%E6%88%8F">§</a></h2>\n<h2 id="css-%E7%8E%AF%E5%A2%83%E6%84%9F%E5%BA%94">CSS 环境感应<a class="anchor" href="#css-%E7%8E%AF%E5%A2%83%E6%84%9F%E5%BA%94">§</a></h2>\n<h2 id="iot%E5%BC%80%E5%8F%91">IOT开发<a class="anchor" href="#iot%E5%BC%80%E5%8F%91">§</a></h2>\n<h2 id="%E7%A1%AC%E4%BB%B6%E7%BC%96%E7%A8%8B">硬件编程<a class="anchor" href="#%E7%A1%AC%E4%BB%B6%E7%BC%96%E7%A8%8B">§</a></h2>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-169223577-1" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "ES \u65B9\u5411 & \u8C01\u5728\u62DB\u4EBA\uFF1F"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<blockquote>\n<p>目前电子书还在建设中，如果你有招聘需求，欢迎先发布在仓库 issues 里面。如果你愿意直接编辑这个 Markdown 文件并提交 PR，那就更好了！</p>\n</blockquote>\n<p>后端深度大，前端广度大，ECMAScript 胃口大。</p>\n<h2 id="%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96">数据可视化<a class="anchor" href="#%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96">§</a></h2>\n<h2 id="%E5%90%8C%E6%9E%84%E6%9E%B6%E6%9E%84">同构架构<a class="anchor" href="#%E5%90%8C%E6%9E%84%E6%9E%B6%E6%9E%84">§</a></h2>\n<h2 id="%E8%B7%A8%E5%B9%B3%E5%8F%B0%E5%BC%80%E5%8F%91">跨平台开发<a class="anchor" href="#%E8%B7%A8%E5%B9%B3%E5%8F%B0%E5%BC%80%E5%8F%91">§</a></h2>\n<ul>\n<li>flutter、weex、rn</li>\n<li>Electron</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF%E6%99%BA%E8%83%BD%E7%BB%84%E4%BB%B6%E6%8A%80%E6%9C%AF">前端智能组件技术<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E6%99%BA%E8%83%BD%E7%BB%84%E4%BB%B6%E6%8A%80%E6%9C%AF">§</a></h2>\n<h2 id="%E4%BD%8E%E4%BB%A3%E7%A0%81">低代码<a class="anchor" href="#%E4%BD%8E%E4%BB%A3%E7%A0%81">§</a></h2>\n<h2 id="%E5%BE%AE%E6%9C%8D%E5%8A%A1">微服务<a class="anchor" href="#%E5%BE%AE%E6%9C%8D%E5%8A%A1">§</a></h2>\n<h2 id="node-%E5%BC%80%E5%8F%91">Node 开发<a class="anchor" href="#node-%E5%BC%80%E5%8F%91">§</a></h2>\n<h2 id="deno-%E5%BC%80%E5%8F%91">Deno 开发<a class="anchor" href="#deno-%E5%BC%80%E5%8F%91">§</a></h2>\n<h2 id="webrtc-%E5%AE%9E%E6%97%B6%E9%9F%B3%E8%A7%86%E9%A2%91">WebRTC 实时音视频<a class="anchor" href="#webrtc-%E5%AE%9E%E6%97%B6%E9%9F%B3%E8%A7%86%E9%A2%91">§</a></h2>\n<h2 id="serverless">Serverless<a class="anchor" href="#serverless">§</a></h2>\n<h2 id="%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%B0%8F%E6%B8%B8%E6%88%8F">小程序/小游戏<a class="anchor" href="#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%B0%8F%E6%B8%B8%E6%88%8F">§</a></h2>\n<h2 id="css-%E7%8E%AF%E5%A2%83%E6%84%9F%E5%BA%94">CSS 环境感应<a class="anchor" href="#css-%E7%8E%AF%E5%A2%83%E6%84%9F%E5%BA%94">§</a></h2>\n<h2 id="iot%E5%BC%80%E5%8F%91">IOT开发<a class="anchor" href="#iot%E5%BC%80%E5%8F%91">§</a></h2>\n<h2 id="%E7%A1%AC%E4%BB%B6%E7%BC%96%E7%A8%8B">硬件编程<a class="anchor" href="#%E7%A1%AC%E4%BB%B6%E7%BC%96%E7%A8%8B">§</a></h2>'
        } }),
    'contentHasKatex': false,
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96">数据可视化</a></li><li><a href="#%E5%90%8C%E6%9E%84%E6%9E%B6%E6%9E%84">同构架构</a></li><li><a href="#%E8%B7%A8%E5%B9%B3%E5%8F%B0%E5%BC%80%E5%8F%91">跨平台开发</a></li><li><a href="#%E5%89%8D%E7%AB%AF%E6%99%BA%E8%83%BD%E7%BB%84%E4%BB%B6%E6%8A%80%E6%9C%AF">前端智能组件技术</a></li><li><a href="#%E4%BD%8E%E4%BB%A3%E7%A0%81">低代码</a></li><li><a href="#%E5%BE%AE%E6%9C%8D%E5%8A%A1">微服务</a></li><li><a href="#node-%E5%BC%80%E5%8F%91">Node 开发</a></li><li><a href="#deno-%E5%BC%80%E5%8F%91">Deno 开发</a></li><li><a href="#webrtc-%E5%AE%9E%E6%97%B6%E9%9F%B3%E8%A7%86%E9%A2%91">WebRTC 实时音视频</a></li><li><a href="#serverless">Serverless</a></li><li><a href="#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%B0%8F%E6%B8%B8%E6%88%8F">小程序/小游戏</a></li><li><a href="#css-%E7%8E%AF%E5%A2%83%E6%84%9F%E5%BA%94">CSS 环境感应</a></li><li><a href="#iot%E5%BC%80%E5%8F%91">IOT开发</a></li><li><a href="#%E7%A1%AC%E4%BB%B6%E7%BC%96%E7%A8%8B">硬件编程</a></li></ol></nav>'
        } }),
    'date': "2020-10-27T07:34:52.000Z",
    'updated': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ]
};
