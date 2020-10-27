import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "title": "如何用 Markdown 绘制图片",
        "link": "articles/draw-in-markdown.html"
    },
    'next': null,
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
    'pagePath': "articles/roadmap.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/roadmap.html",
    'title': "变更日志",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>变更日志</h1>\n<!--\n\n## v0.3.0 2020xxxx - 规划中\n\n* 开始专题模式，取代大面积浅尝而止的风格，对每个部分对核心知识逐个实战和解析。\n* 引入标题的“对号”机制，对于以专题认真探讨完毕的主题可以在标题中加入“对号”，目标 100% 覆盖率。\n* 引入大量 MarkDown 绘制的原创图，每张图都融合了自己独特的思考。\n* [Beginner]\n* [Programming]\n  * 算法实战代码全量转移到 [@hylerrix/deno-algorithm](https://github.com/hylerrix/deno-algorithm) 仓库中维护。\n  * 此仓库暂未公开，考虑是否合并为一个仓库？这样每个仓库的明确性不高但可以集中 star。\n  * 开启重修“计算机科学与技术”计划，以更广阔的视野填充了计算机体系大量内容。\n* [ECMAScript+] JavaScript Practice 篇的代码实战部分进行了转移...\n  * 转移到哪里？可以考虑转移到此仓库的非 articles 目录下\n* [HTML+CSS]\n* [Network+API]\n  * 根据近期实战经验，重点填充了单点登录相关的内容。\n* [V8+Runtime]\n  * 对 V8/Deno 进行了更多的探讨。\n* [FE+Browser]\n* [BE+Server]\n  * 根据自身 Node/Deno 后端框架开发/部署实战经验，填充了大量内容，目录进行更细致地拆分。\n\n-->\n<h2 id="v020-20201027">v0.2.0 20201027<a class="anchor" href="#v020-20201027">§</a></h2>\n<ul>\n<li>内容量长的文章中引入二级目录机制，对长篇文章更好的梳理和定位。</li>\n<li>[Beginner] 初始化“谁在招人”、“ES 书籍”、“大厂职级”等篇章并统一归为一类。</li>\n<li>[Programming] 对整个编程体系进行了更好的拆分如初始化“计算机组成原理”、“编译原理”等。</li>\n<li>[ECMAScript+] ES 篇和 JS 篇负责的功能更明确，拆分 ES 数据类型，且填充了更多的内容。</li>\n<li>[HTML+CSS] 拆分出 DOM BOM 篇来收录 DOM 事件机制、BOM 等，填充了内容/拆分了目录。</li>\n<li>[Network+API] 为每篇长文拆分了二级目录，将“网络安全”篇移动至此。</li>\n<li>[V8+Runtime] 主要梳理、填充了 Node 相关的知识。</li>\n<li>[FE+Browser] 将 React、Vue、iFrame 等知识点拆分的更细，填充了内容。</li>\n<li>[BE+Server] 本次尚未有重要改动</li>\n</ul>\n<h2 id="v010-20201012"><a href="https://github.com/hylerrix/es-interview/releases/tag/v0.1.0">v0.1.0</a> 20201012<a class="anchor" href="#v010-20201012">§</a></h2>\n<p>首次发布孵化版：</p>\n<ul>\n<li>确定了官网的域名：<a href="https://es-interview.js.org./">https://es-interview.js.org。</a></li>\n<li>确定了生产力工具：Github + Typora 等。</li>\n<li>理清了仓库长期更新情况下的发展目标。</li>\n<li>转移了大学期间的面试题库。</li>\n<li>初始化了一些基础内容并重点初始化了 ES/React/TS 题库。</li>\n<li>引入了贡献者机器人 all-contributor。</li>\n<li>本版本先不做任何文案宣传。</li>\n<li>...</li>\n</ul>\n<p>期待内容越来越多、知识越来越干货的仓库未来！</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-169223577-1" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u53D8\u66F4\u65E5\u5FD7"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<!--\n\n## v0.3.0 2020xxxx - 规划中\n\n* 开始专题模式，取代大面积浅尝而止的风格，对每个部分对核心知识逐个实战和解析。\n* 引入标题的“对号”机制，对于以专题认真探讨完毕的主题可以在标题中加入“对号”，目标 100% 覆盖率。\n* 引入大量 MarkDown 绘制的原创图，每张图都融合了自己独特的思考。\n* [Beginner]\n* [Programming]\n  * 算法实战代码全量转移到 [@hylerrix/deno-algorithm](https://github.com/hylerrix/deno-algorithm) 仓库中维护。\n  * 此仓库暂未公开，考虑是否合并为一个仓库？这样每个仓库的明确性不高但可以集中 star。\n  * 开启重修“计算机科学与技术”计划，以更广阔的视野填充了计算机体系大量内容。\n* [ECMAScript+] JavaScript Practice 篇的代码实战部分进行了转移...\n  * 转移到哪里？可以考虑转移到此仓库的非 articles 目录下\n* [HTML+CSS]\n* [Network+API]\n  * 根据近期实战经验，重点填充了单点登录相关的内容。\n* [V8+Runtime]\n  * 对 V8/Deno 进行了更多的探讨。\n* [FE+Browser]\n* [BE+Server]\n  * 根据自身 Node/Deno 后端框架开发/部署实战经验，填充了大量内容，目录进行更细致地拆分。\n\n-->\n<h2 id="v020-20201027">v0.2.0 20201027<a class="anchor" href="#v020-20201027">§</a></h2>\n<ul>\n<li>内容量长的文章中引入二级目录机制，对长篇文章更好的梳理和定位。</li>\n<li>[Beginner] 初始化“谁在招人”、“ES 书籍”、“大厂职级”等篇章并统一归为一类。</li>\n<li>[Programming] 对整个编程体系进行了更好的拆分如初始化“计算机组成原理”、“编译原理”等。</li>\n<li>[ECMAScript+] ES 篇和 JS 篇负责的功能更明确，拆分 ES 数据类型，且填充了更多的内容。</li>\n<li>[HTML+CSS] 拆分出 DOM BOM 篇来收录 DOM 事件机制、BOM 等，填充了内容/拆分了目录。</li>\n<li>[Network+API] 为每篇长文拆分了二级目录，将“网络安全”篇移动至此。</li>\n<li>[V8+Runtime] 主要梳理、填充了 Node 相关的知识。</li>\n<li>[FE+Browser] 将 React、Vue、iFrame 等知识点拆分的更细，填充了内容。</li>\n<li>[BE+Server] 本次尚未有重要改动</li>\n</ul>\n<h2 id="v010-20201012"><a href="https://github.com/hylerrix/es-interview/releases/tag/v0.1.0">v0.1.0</a> 20201012<a class="anchor" href="#v010-20201012">§</a></h2>\n<p>首次发布孵化版：</p>\n<ul>\n<li>确定了官网的域名：<a href="https://es-interview.js.org./">https://es-interview.js.org。</a></li>\n<li>确定了生产力工具：Github + Typora 等。</li>\n<li>理清了仓库长期更新情况下的发展目标。</li>\n<li>转移了大学期间的面试题库。</li>\n<li>初始化了一些基础内容并重点初始化了 ES/React/TS 题库。</li>\n<li>引入了贡献者机器人 all-contributor。</li>\n<li>本版本先不做任何文案宣传。</li>\n<li>...</li>\n</ul>\n<p>期待内容越来越多、知识越来越干货的仓库未来！</p>'
        } }),
    'contentHasKatex': false,
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#v020-20201027">v0.2.0 20201027</a></li><li><a href="#v010-20201012">v0.1.0 20201012</a></li></ol></nav>'
        } }),
    'date': "2020-10-27T07:34:52.000Z",
    'updated': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ]
};
