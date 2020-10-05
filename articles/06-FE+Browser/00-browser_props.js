import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "link": "articles/06-FE+Browser/index.html",
        "text": "前端应用开发 + 浏览器"
    },
    'next': {
        "text": "前端",
        "link": "articles/06-FE+Browser/01-fe.html"
    },
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'sidebar': [
        {
            "text": "Hello",
            "link": "articles/index.html",
            "pagePath": "articles/README.md"
        },
        {
            "text": "职业 & 成长",
            "link": "articles/00-Profession/index.html",
            "pagePath": "articles/00-Profession/README.md"
        },
        {
            "link": "articles/01-Programming/index.html",
            "title": "编程基础",
            "children": [
                {
                    "text": "编程语言",
                    "link": "articles/01-Programming/00-language.html",
                    "pagePath": "articles/01-Programming/00-language.md"
                },
                {
                    "text": "操作系统",
                    "link": "articles/01-Programming/01-operating-system.html",
                    "pagePath": "articles/01-Programming/01-operating-system.md"
                },
                {
                    "text": "算法",
                    "link": "articles/01-Programming/02-algorithms.html",
                    "pagePath": "articles/01-Programming/02-algorithms.md"
                },
                {
                    "text": "设计模式",
                    "link": "articles/01-Programming/03-design-patterns.html",
                    "pagePath": "articles/01-Programming/03-design-patterns.md"
                },
                {
                    "text": "工程化",
                    "link": "articles/01-Programming/04-software-engineering.html",
                    "pagePath": "articles/01-Programming/04-software-engineering.md"
                },
                {
                    "text": "安全",
                    "link": "articles/01-Programming/05-network-security.html",
                    "pagePath": "articles/01-Programming/05-network-security.md"
                },
                {
                    "text": "测试",
                    "link": "articles/01-Programming/06-software-test.html",
                    "pagePath": "articles/01-Programming/06-software-test.md"
                }
            ],
            "text": "编程基础",
            "pagePath": "articles/01-Programming/README.md"
        },
        {
            "link": "articles/02-ECMAScript+/index.html",
            "title": "ECMAScript+",
            "children": [
                {
                    "text": "ECMAScript",
                    "link": "articles/02-ECMAScript+/00-ecmascript.html",
                    "pagePath": "articles/02-ECMAScript+/00-ecmascript.md"
                },
                {
                    "text": "JavaScript 基础知识",
                    "link": "articles/02-ECMAScript+/01-javascript.html",
                    "pagePath": "articles/02-ECMAScript+/01-javascript.md"
                },
                {
                    "text": "TypeScript",
                    "link": "articles/02-ECMAScript+/02-typescript.html",
                    "pagePath": "articles/02-ECMAScript+/02-typescript.md"
                }
            ],
            "text": "ECMAScript+",
            "pagePath": "articles/02-ECMAScript+/README.md"
        },
        {
            "link": "articles/03-HTML+CSS/index.html",
            "title": "HTML + CSS",
            "children": [
                {
                    "text": "HTML",
                    "link": "articles/03-HTML+CSS/00-html.html",
                    "pagePath": "articles/03-HTML+CSS/00-html.md"
                },
                {
                    "text": "CSS",
                    "link": "articles/03-HTML+CSS/01-css.html",
                    "pagePath": "articles/03-HTML+CSS/01-css.md"
                },
                {
                    "text": "HTML + CSS 实战",
                    "link": "articles/03-HTML+CSS/02-html-css-practice.html",
                    "pagePath": "articles/03-HTML+CSS/02-html-css-practice.md"
                }
            ],
            "text": "HTML + CSS",
            "pagePath": "articles/03-HTML+CSS/README.md"
        },
        {
            "link": "articles/04-Network+API/index.html",
            "title": "网络 + 前后端协作",
            "children": [
                {
                    "text": "网络",
                    "link": "articles/04-Network+API/00-network.html",
                    "pagePath": "articles/04-Network+API/00-network.md"
                },
                {
                    "text": "前后端协作",
                    "link": "articles/04-Network+API/01-fe-be-api.html",
                    "pagePath": "articles/04-Network+API/01-fe-be-api.md"
                },
                {
                    "text": "登录",
                    "link": "articles/04-Network+API/02-login.html",
                    "pagePath": "articles/04-Network+API/02-login.md"
                }
            ],
            "text": "网络 + 前后端协作",
            "pagePath": "articles/04-Network+API/README.md"
        },
        {
            "link": "articles/05-V8+Runtime/index.html",
            "title": "V8 + JavaScript 运行时",
            "children": [
                {
                    "text": "V8",
                    "link": "articles/05-V8+Runtime/00-v8.html",
                    "pagePath": "articles/05-V8+Runtime/00-v8.md"
                },
                {
                    "text": "Node",
                    "link": "articles/05-V8+Runtime/01-node.html",
                    "pagePath": "articles/05-V8+Runtime/01-node.md"
                },
                {
                    "text": "Deno",
                    "link": "articles/05-V8+Runtime/02-deno.html",
                    "pagePath": "articles/05-V8+Runtime/02-deno.md"
                }
            ],
            "text": "V8 + JavaScript 运行时",
            "pagePath": "articles/05-V8+Runtime/README.md"
        },
        {
            "link": "articles/06-FE+Browser/index.html",
            "title": "前端应用开发 + 浏览器",
            "children": [
                {
                    "text": "浏览器",
                    "link": "articles/06-FE+Browser/00-browser.html",
                    "pagePath": "articles/06-FE+Browser/00-browser.md"
                },
                {
                    "text": "前端",
                    "link": "articles/06-FE+Browser/01-fe.html",
                    "pagePath": "articles/06-FE+Browser/01-fe.md"
                }
            ],
            "text": "前端应用开发 + 浏览器",
            "pagePath": "articles/06-FE+Browser/README.md"
        },
        {
            "link": "articles/07-BE+Server/index.html",
            "title": "后端应用开发 + 服务器",
            "children": [
                {
                    "text": "Linux + Nginx + 数据库",
                    "link": "articles/07-BE+Server/00-linux-nginx-database.html",
                    "pagePath": "articles/07-BE+Server/00-linux-nginx-database.md"
                },
                {
                    "text": "Node 框架",
                    "link": "articles/07-BE+Server/01-node-framework.html",
                    "pagePath": "articles/07-BE+Server/01-node-framework.md"
                }
            ],
            "text": "后端应用开发 + 服务器",
            "pagePath": "articles/07-BE+Server/README.md"
        }
    ],
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['undefined'] },
    'pagePath': "articles/06-FE+Browser/00-browser.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/06-FE+Browser/00-browser.html",
    'title': "浏览器",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>浏览器</h1>\n<ul>\n<li>localStorage、sessionStorage、cookie、Session</li>\n<li>Web Worker，Web Storage</li>\n<li>跨域：jsonp、CORS、nginx 代理...</li>\n<li>http 长链接，浏览器缓存</li>\n<li>浏览器渲染流程</li>\n<li>浏览器多进程与 JavaScript 单线程</li>\n<li>浏览器抓包</li>\n<li>三次握手、四次挥手</li>\n<li>跨域、同源策略：jsonp、cors、服务器代理、document.domain、postMessage</li>\n<li>存储：cookie、sessionStorage、localStorage、indexDB、ServiceWorker</li>\n<li>渲染、重绘</li>\n</ul>\n<blockquote>\n<p>浏览器多线程</p>\n</blockquote>\n<p>GUI 渲染线程</p>\n<p>JS 引擎线程</p>\n<p>事件触发线程</p>\n<p>异步 HTTP 请求线程</p>\n<p>Web Worker</p>\n<blockquote>\n<p>浏览器多标签页之间的通信</p>\n</blockquote>\n<p>WebSocket</p>\n<p>LocalStorage：事件监听，无关跨域</p>\n<p>SharedWorker：但必须是同源的</p>\n<h2 id="%E5%B8%B8%E8%A7%81%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8%E5%8F%8A%E5%85%B6%E7%BB%84%E6%88%90">常见浏览器内核及其组成？<a class="anchor" href="#%E5%B8%B8%E8%A7%81%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8%E5%8F%8A%E5%85%B6%E7%BB%84%E6%88%90">§</a></h2>\n<ul>\n<li>常见的浏览器内核：\n<ul>\n<li>Trident 内核：IE、360、搜狗浏览器、MaxThon、TT、The World 等。[又称 MSHTML]。</li>\n<li>Gecko 内核：火狐、FF、MozillaSuite、SeaMonkey 等。</li>\n<li>Presto 内核：Opera7 及以上。[Opera 内核原为：Presto，现为：Blink]。</li>\n<li>Webkit 内核：Safari、Chrome 等。 [ Chrome 的：Blink（WebKit 的分支）]。</li>\n</ul>\n</li>\n<li>浏览器内核的组成：\n<ul>\n<li>渲染引擎。</li>\n<li>JavaScript 引擎。</li>\n</ul>\n</li>\n</ul>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%B8%B8%E8%A7%81%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8%E5%8F%8A%E5%85%B6%E7%BB%84%E6%88%90">常见浏览器内核及其组成？</a></li></ol></nav>'
        } })
};
