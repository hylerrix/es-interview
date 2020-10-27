import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "title": "前端打包工具",
        "link": "articles/06-FE+Browser/03-pack-tool.html"
    },
    'next': {
        "title": "React 基础",
        "link": "articles/06-FE+Browser/05-react.html"
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
    'pagePath': "articles/06-FE+Browser/04-fe-mobile.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/06-FE+Browser/04-fe-mobile.html",
    'title': "移动端 Web 开发",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>移动端 Web 开发</h1>\n<h2 id="%E7%A7%BB%E5%8A%A8%E7%AB%AF-web-%E7%9A%84%E8%A7%A6%E6%91%B8%E4%BA%8B%E4%BB%B6">移动端 Web 的触摸事件<a class="anchor" href="#%E7%A7%BB%E5%8A%A8%E7%AB%AF-web-%E7%9A%84%E8%A7%A6%E6%91%B8%E4%BA%8B%E4%BB%B6">§</a></h2>\n<p>移动端的触摸事件</p>\n<p>触摸事件指的是指的是用户将手指放在屏幕上，在屏幕上滑动到将手指从屏幕移开触发的事件，具体来说，有以下触摸事件的产生：</p>\n<ul>\n<li>touchstart: 当手指触摸屏幕时候触发；</li>\n<li>touchmove: 当手指在屏幕上滑动的时候连续触发；可以调用阻止默认事件</li>\n<li>preventDefault(): 阻止屏幕滚动；</li>\n<li>touchend: 手指离开屏幕时触发；</li>\n<li>touchcancel: 系统停止跟踪触摸时触发；</li>\n</ul>\n<p>以上的这些事件都会冒泡，而且都可以取消冒泡。对于以上事件也提供了和鼠标事件中常用的属性：bubble, cancelable, view, clientX, clientY, screenX, screenY, detail, altKey, shiftKey, ctrKey 和 metaKey。</p>\n<p>除了上面这些属性外，触摸事件还提供了下面这些属性：</p>\n<ul>\n<li>touches: 跟踪返回 Touch 对象的数组；</li>\n<li>targetTouchs: 特定事件目标的 Touch 对象的数组；</li>\n<li>changeTouchs: 上次触摸以来改变了的 Touch 对象的数组；</li>\n</ul>\n<p>每个Touch对象包含一下的属性：</p>\n<ul>\n<li>clientX: 触摸目标在浏览器中的 x 坐标</li>\n<li>clientY: 触摸目标在浏览器中的 y 坐标</li>\n<li>identifier: 标识触摸的唯一 ID。</li>\n<li>pageX: 触摸目标在当前 DOM 中的 x 坐标</li>\n<li>pageY: 触摸目标在当前 DOM 中的 y 坐标</li>\n<li>screenX: 触摸目标在屏幕中的 x 坐标</li>\n<li>screenY: 触摸目标在屏幕中的 y 坐标</li>\n<li>target: 触摸的 DOM 节点目标。</li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-169223577-1" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u79FB\u52A8\u7AEF Web \u5F00\u53D1"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E7%A7%BB%E5%8A%A8%E7%AB%AF-web-%E7%9A%84%E8%A7%A6%E6%91%B8%E4%BA%8B%E4%BB%B6">移动端 Web 的触摸事件<a class="anchor" href="#%E7%A7%BB%E5%8A%A8%E7%AB%AF-web-%E7%9A%84%E8%A7%A6%E6%91%B8%E4%BA%8B%E4%BB%B6">§</a></h2>\n<p>移动端的触摸事件</p>\n<p>触摸事件指的是指的是用户将手指放在屏幕上，在屏幕上滑动到将手指从屏幕移开触发的事件，具体来说，有以下触摸事件的产生：</p>\n<ul>\n<li>touchstart: 当手指触摸屏幕时候触发；</li>\n<li>touchmove: 当手指在屏幕上滑动的时候连续触发；可以调用阻止默认事件</li>\n<li>preventDefault(): 阻止屏幕滚动；</li>\n<li>touchend: 手指离开屏幕时触发；</li>\n<li>touchcancel: 系统停止跟踪触摸时触发；</li>\n</ul>\n<p>以上的这些事件都会冒泡，而且都可以取消冒泡。对于以上事件也提供了和鼠标事件中常用的属性：bubble, cancelable, view, clientX, clientY, screenX, screenY, detail, altKey, shiftKey, ctrKey 和 metaKey。</p>\n<p>除了上面这些属性外，触摸事件还提供了下面这些属性：</p>\n<ul>\n<li>touches: 跟踪返回 Touch 对象的数组；</li>\n<li>targetTouchs: 特定事件目标的 Touch 对象的数组；</li>\n<li>changeTouchs: 上次触摸以来改变了的 Touch 对象的数组；</li>\n</ul>\n<p>每个Touch对象包含一下的属性：</p>\n<ul>\n<li>clientX: 触摸目标在浏览器中的 x 坐标</li>\n<li>clientY: 触摸目标在浏览器中的 y 坐标</li>\n<li>identifier: 标识触摸的唯一 ID。</li>\n<li>pageX: 触摸目标在当前 DOM 中的 x 坐标</li>\n<li>pageY: 触摸目标在当前 DOM 中的 y 坐标</li>\n<li>screenX: 触摸目标在屏幕中的 x 坐标</li>\n<li>screenY: 触摸目标在屏幕中的 y 坐标</li>\n<li>target: 触摸的 DOM 节点目标。</li>\n</ul>'
        } }),
    'contentHasKatex': false,
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E7%A7%BB%E5%8A%A8%E7%AB%AF-web-%E7%9A%84%E8%A7%A6%E6%91%B8%E4%BA%8B%E4%BB%B6">移动端 Web 的触摸事件</a></li></ol></nav>'
        } }),
    'date': "2020-10-27T07:34:52.000Z",
    'updated': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ]
};
