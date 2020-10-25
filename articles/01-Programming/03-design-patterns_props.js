import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "title": "算法",
        "link": "articles/01-Programming/02-algorithms.html"
    },
    'next': {
        "title": "软件工程",
        "link": "articles/01-Programming/04-software-engineering.html"
    },
    'sidebar': [
        {
            "title": "ESMAScript+ 面试宝典",
            "link": "articles/index.html",
            "pagePath": "articles/README.md"
        },
        {
            "title": "前端大事记",
            "link": "articles/es-timeline.html",
            "pagePath": "articles/es-timeline.md"
        },
        {
            "title": "ES 方向 & 谁在招人？",
            "link": "articles/es-direction.html",
            "pagePath": "articles/es-direction.md"
        },
        {
            "title": "职业 & 成长",
            "link": "articles/00-Profession/index.html",
            "pagePath": "articles/00-Profession/README.md"
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
                    "title": "JavaScript 基础知识",
                    "link": "articles/02-ECMAScript+/01-javascript.html",
                    "pagePath": "articles/02-ECMAScript+/01-javascript.md"
                },
                {
                    "title": "TypeScript",
                    "link": "articles/02-ECMAScript+/02-typescript.html",
                    "pagePath": "articles/02-ECMAScript+/02-typescript.md"
                },
                {
                    "title": "JavaScript 常见实战题",
                    "link": "articles/02-ECMAScript+/03-javascript-parctice.html",
                    "pagePath": "articles/02-ECMAScript+/03-javascript-parctice.md"
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
                    "title": "HTML + CSS 实战",
                    "link": "articles/03-HTML+CSS/02-html-css-practice.html",
                    "pagePath": "articles/03-HTML+CSS/02-html-css-practice.md"
                },
                {
                    "title": "DOM + BOM",
                    "link": "articles/03-HTML+CSS/03-dom-bom.html",
                    "pagePath": "articles/03-HTML+CSS/03-dom-bom.md"
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
                    "title": "React",
                    "link": "articles/06-FE+Browser/05-react.html",
                    "pagePath": "articles/06-FE+Browser/05-react.md"
                },
                {
                    "title": "Vue",
                    "link": "articles/06-FE+Browser/06-vue.html",
                    "pagePath": "articles/06-FE+Browser/06-vue.md"
                },
                {
                    "title": "iframe",
                    "link": "articles/06-FE+Browser/07-iframe.html",
                    "pagePath": "articles/06-FE+Browser/07-iframe.md"
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
    'pagePath': "articles/01-Programming/03-design-patterns.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/01-Programming/03-design-patterns.html",
    'title': "设计模式",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>设计模式</h1>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F">什么是单例模式？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F">§</a></h2>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F%E5%92%8C%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F">什么是观察者模式和发布订阅模式？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F%E5%92%8C%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F">§</a></h2>\n<blockquote>\n<p><strong>观察者模式</strong>是<a href="https://zh.wikipedia.org/wiki/%E8%BB%9F%E4%BB%B6%E8%A8%AD%E8%A8%88%E6%A8%A1%E5%BC%8F">软件设计模式</a>的一种。在此种模式中，一个目标对象管理所有相依于它的观察者对象，并且在它本身的状态改变时主动发出通知。这通常透过呼叫各观察者所提供的方法来实现。此种模式通常被用来实时事件处理系统。 —— 维基百科</p>\n<p>在<a href="https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E6%9E%B6%E6%9E%84">软件架构</a>中，<strong>发布-订阅</strong>是一种<a href="https://zh.wikipedia.org/wiki/%E6%B6%88%E6%81%AF">消息</a><a href="https://zh.wikipedia.org/wiki/%E8%8C%83%E5%BC%8F">范式</a>，消息的发送者（称为发布者）不会将消息直接发送给特定的接收者（称为订阅者）。而是将发布的消息分为不同的类别，无需了解哪些订阅者（如果有的话）可能存在。同样的，订阅者可以表达对一个或多个类别的兴趣，只接收感兴趣的消息，无需了解哪些发布者（如果有的话）存在。—— <a href="https://zh.wikipedia.org/wiki/%E5%8F%91%E5%B8%83/%E8%AE%A2%E9%98%85">维基百科</a></p>\n</blockquote>\n<ul>\n<li>观察者模式，定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。</li>\n<li>发布/订阅模式与观察者模式非常类似，它们最大的区别是：发布者和订阅者不知道对方的存在。它们之间需要一个第三方组件，叫做信息中介，它将订阅者和发布者串联起来，它过滤和分配所有输入的消息。换句话说，发布/订阅模式用来处理不同系统组件的信息交流，即使这些组件不知道对方的存在。</li>\n<li>信息中介是如何过滤消息\n<ul>\n<li>在<strong>基于主题</strong>的系统中，消息被发布到主题或命名通道上。订阅者将收到其订阅的主题上的所有消息，并且所有订阅同一主题的订阅者将接收到同样的消息。发布者负责定义订阅者所订阅的消息类别。</li>\n<li>在<strong>基于内容</strong>的系统中，订阅者定义其感兴趣的消息的条件，只有当消息的属性或内容满足订阅者定义的条件时，消息才会被投递到该订阅者。订阅者需要负责对消息进行分类。</li>\n</ul>\n</li>\n<li>观察者模式与发布/订阅模式之间的区别：\n<ul>\n<li>在观察者模式中，观察者知道 Subject 的存在，Subject 一直保持对观察者进行记录。然而，在发布/订阅模式中，发布者和订阅者不知道对方的存在，它们只有通过信息中介进行通信。</li>\n<li>在发布订阅模式中，组件是松散耦合的，正好和观察者模式相反。</li>\n<li>观察者模式大多数时候是同步的，比如当事件触发，Subject 就会去调用观察者的方法。而发布/订阅模式大多数时候是异步的（使用消息队列）。</li>\n</ul>\n</li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-169223577-1" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u8BBE\u8BA1\u6A21\u5F0F"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F">什么是单例模式？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F">§</a></h2>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F%E5%92%8C%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F">什么是观察者模式和发布订阅模式？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F%E5%92%8C%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F">§</a></h2>\n<blockquote>\n<p><strong>观察者模式</strong>是<a href="https://zh.wikipedia.org/wiki/%E8%BB%9F%E4%BB%B6%E8%A8%AD%E8%A8%88%E6%A8%A1%E5%BC%8F">软件设计模式</a>的一种。在此种模式中，一个目标对象管理所有相依于它的观察者对象，并且在它本身的状态改变时主动发出通知。这通常透过呼叫各观察者所提供的方法来实现。此种模式通常被用来实时事件处理系统。 —— 维基百科</p>\n<p>在<a href="https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E6%9E%B6%E6%9E%84">软件架构</a>中，<strong>发布-订阅</strong>是一种<a href="https://zh.wikipedia.org/wiki/%E6%B6%88%E6%81%AF">消息</a><a href="https://zh.wikipedia.org/wiki/%E8%8C%83%E5%BC%8F">范式</a>，消息的发送者（称为发布者）不会将消息直接发送给特定的接收者（称为订阅者）。而是将发布的消息分为不同的类别，无需了解哪些订阅者（如果有的话）可能存在。同样的，订阅者可以表达对一个或多个类别的兴趣，只接收感兴趣的消息，无需了解哪些发布者（如果有的话）存在。—— <a href="https://zh.wikipedia.org/wiki/%E5%8F%91%E5%B8%83/%E8%AE%A2%E9%98%85">维基百科</a></p>\n</blockquote>\n<ul>\n<li>观察者模式，定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。</li>\n<li>发布/订阅模式与观察者模式非常类似，它们最大的区别是：发布者和订阅者不知道对方的存在。它们之间需要一个第三方组件，叫做信息中介，它将订阅者和发布者串联起来，它过滤和分配所有输入的消息。换句话说，发布/订阅模式用来处理不同系统组件的信息交流，即使这些组件不知道对方的存在。</li>\n<li>信息中介是如何过滤消息\n<ul>\n<li>在<strong>基于主题</strong>的系统中，消息被发布到主题或命名通道上。订阅者将收到其订阅的主题上的所有消息，并且所有订阅同一主题的订阅者将接收到同样的消息。发布者负责定义订阅者所订阅的消息类别。</li>\n<li>在<strong>基于内容</strong>的系统中，订阅者定义其感兴趣的消息的条件，只有当消息的属性或内容满足订阅者定义的条件时，消息才会被投递到该订阅者。订阅者需要负责对消息进行分类。</li>\n</ul>\n</li>\n<li>观察者模式与发布/订阅模式之间的区别：\n<ul>\n<li>在观察者模式中，观察者知道 Subject 的存在，Subject 一直保持对观察者进行记录。然而，在发布/订阅模式中，发布者和订阅者不知道对方的存在，它们只有通过信息中介进行通信。</li>\n<li>在发布订阅模式中，组件是松散耦合的，正好和观察者模式相反。</li>\n<li>观察者模式大多数时候是同步的，比如当事件触发，Subject 就会去调用观察者的方法。而发布/订阅模式大多数时候是异步的（使用消息队列）。</li>\n</ul>\n</li>\n</ul>'
        } }),
    'contentHasKatex': false,
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F">什么是单例模式？</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F%E5%92%8C%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F">什么是观察者模式和发布订阅模式？</a></li></ol></nav>'
        } }),
    'date': "2020-10-25T07:04:16.000Z",
    'updated': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ]
};
