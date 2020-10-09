import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "text": "JavaScript 基础知识",
        "link": "articles/02-ECMAScript+/01-javascript.html"
    },
    'next': {
        "text": "JavaScript 常见实战题",
        "link": "articles/02-ECMAScript+/03-javascript-parctice.html"
    },
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'sidebar': [
        {
            "text": "ESMAScript+ 面试宝典",
            "link": "articles/index.html",
            "pagePath": "articles/README.md"
        },
        {
            "text": "前端大事记",
            "link": "articles/es-timeline.html",
            "pagePath": "articles/es-timeline.md"
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
                },
                {
                    "text": "版本控制",
                    "link": "articles/01-Programming/07-version-control.html",
                    "pagePath": "articles/01-Programming/07-version-control.md"
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
                },
                {
                    "text": "JavaScript 常见实战题",
                    "link": "articles/02-ECMAScript+/03-javascript-parctice.html",
                    "pagePath": "articles/02-ECMAScript+/03-javascript-parctice.md"
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
                    "link": "articles/03-HTML+CSS/01-css-design.html",
                    "pagePath": "articles/03-HTML+CSS/01-css-design.md"
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
                    "link": "articles/06-FE+Browser/01-fe-framework.html",
                    "pagePath": "articles/06-FE+Browser/01-fe-framework.md"
                },
                {
                    "text": "前端工具链",
                    "link": "articles/06-FE+Browser/02-fe-tooltain.html",
                    "pagePath": "articles/06-FE+Browser/02-fe-tooltain.md"
                },
                {
                    "text": "前端打包工具",
                    "link": "articles/06-FE+Browser/03-pack-tool.html",
                    "pagePath": "articles/06-FE+Browser/03-pack-tool.md"
                },
                {
                    "text": "移动端 Web 开发",
                    "link": "articles/06-FE+Browser/04-fe-mobile.html",
                    "pagePath": "articles/06-FE+Browser/04-fe-mobile.md"
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
    'pagePath': "articles/02-ECMAScript+/02-typescript.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/02-ECMAScript+/02-typescript.html",
    'title': "TypeScript",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>TypeScript</h1>\n<h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E7%BC%96%E8%AF%91%E4%B8%BA-javascript-%E7%9A%84%E6%9B%B4%E9%AB%98%E7%BA%A7%E8%AF%AD%E8%A8%80">为什么需要编译为 JavaScript 的更高级语言<a class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E7%BC%96%E8%AF%91%E4%B8%BA-javascript-%E7%9A%84%E6%9B%B4%E9%AB%98%E7%BA%A7%E8%AF%AD%E8%A8%80">§</a></h2>\n<p>优点：</p>\n<ul>\n<li>修复了 JavaScript 中一些长期问题，并摒弃了 JavaScript 不好的做法。</li>\n<li>在 JavaScript 的基础上提供一些语法糖，使我们能够编写更短的代码。ES2015 对语法糖支持的更好。</li>\n<li>对于需要长时间维护的大型项目，静态类型非常好用。</li>\n</ul>\n<p>缺点：</p>\n<ul>\n<li>\n<p>由于浏览器只运行 JavaScript、所以需要构建、编译过程，在将代码提供给浏览器之前，需要将代码转移为 JavaScript。</p>\n</li>\n<li>\n<p>如果 source map 不能很好地映射到预编译的源代码，调试会很痛苦。</p>\n</li>\n<li>\n<p>大多数开发人员不熟悉这些语言，需要增加团队成本来学习。</p>\n</li>\n<li>\n<p>type 和 interface</p>\n</li>\n<li>\n<p>装饰器</p>\n</li>\n<li>\n<p>静态类型</p>\n</li>\n<li>\n<p>类型注解</p>\n</li>\n<li>\n<p>类型推断</p>\n</li>\n<li>\n<p>泛型</p>\n</li>\n<li>\n<p>类型定义文件</p>\n</li>\n<li>\n<p>模块化</p>\n</li>\n<li>\n<p>打包编译</p>\n</li>\n<li>\n<p>装饰器</p>\n</li>\n<li>\n<p>Metadata</p>\n</li>\n<li>\n<p>设计模式</p>\n</li>\n<li>\n<p>TypeScript 版本特性发展</p>\n</li>\n</ul>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E7%BC%96%E8%AF%91%E4%B8%BA-javascript-%E7%9A%84%E6%9B%B4%E9%AB%98%E7%BA%A7%E8%AF%AD%E8%A8%80">为什么需要编译为 JavaScript 的更高级语言</a></li></ol></nav>'
        } })
};
