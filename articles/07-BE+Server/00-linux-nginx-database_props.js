import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "link": "articles/07-BE+Server/index.html",
        "title": "后端应用开发 + 服务器"
    },
    'next': {
        "title": "Node 框架",
        "link": "articles/07-BE+Server/01-node-framework.html"
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
    'pagePath': "articles/07-BE+Server/00-linux-nginx-database.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/07-BE+Server/00-linux-nginx-database.html",
    'title': "Linux + Nginx + 数据库",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Linux + Nginx + 数据库</h1>\n<h2 id="%E6%95%B0%E6%8D%AE%E5%BA%93">数据库<a class="anchor" href="#%E6%95%B0%E6%8D%AE%E5%BA%93">§</a></h2>\n<ul>\n<li>MySQl 关系型数据库、MongoDB 非关系型数据库</li>\n<li>数据库搜索速度优化 -&gt; 索引、拆分</li>\n</ul>\n<h2 id="linux--nginx">Linux + Nginx<a class="anchor" href="#linux--nginx">§</a></h2>\n<ul>\n<li>Nginx 平滑重启，反向代理、正向代理</li>\n</ul>\n<h2 id="nginx-%E6%9C%89%E5%93%AA%E4%BA%9B%E9%85%8D%E7%BD%AE%E9%A1%B9">Nginx 有哪些配置项？<a class="anchor" href="#nginx-%E6%9C%89%E5%93%AA%E4%BA%9B%E9%85%8D%E7%BD%AE%E9%A1%B9">§</a></h2>\n<ul>\n<li>listen、server_name、location、root...</li>\n</ul>\n<h2 id="nginx-%E7%9A%84%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86">Nginx 的反向代理？<a class="anchor" href="#nginx-%E7%9A%84%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86">§</a></h2>\n<h2 id="sql-%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">SQL 如何进行性能优化？<a class="anchor" href="#sql-%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">§</a></h2>\n<ul>\n<li>合理建立索引</li>\n<li>避免多次连接查询和嵌套查询</li>\n<li>避免数据类型不一致</li>\n<li>禁止不必要的 ORDER BY 排序</li>\n<li>批量 INSERT 插入可以合并插入</li>\n</ul>\n<h3 id="sql-%E7%9A%84%E6%85%A2%E6%9F%A5%E8%AF%A2%E6%98%AF%E4%BB%80%E4%B9%88">SQL 的慢查询是什么？<a class="anchor" href="#sql-%E7%9A%84%E6%85%A2%E6%9F%A5%E8%AF%A2%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h3>\n<ul>\n<li>先运行看看是否真的很慢，注意设置 SQL_NO_CACHE</li>\n<li>where 条件单表查，锁定最小返回记录表。这句话的意思是把查询语句的 where 都应用到表中返回的记录数最小的表开始查起，单表每个字段分别查询，看哪个字段的区分度最高</li>\n<li>explain 查看执行计划，是否与b预期一致(从锁定记录较少的表开始查询)</li>\n<li>order by limit 形式的 sql 语句让排序的表优先查</li>\n<li>了解业务方使用场景</li>\n<li>加索引时参照建索引的几大原则</li>\n<li>观察结果，不符合预期继续从 1 分析</li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-169223577-1" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Linux + Nginx + \u6570\u636E\u5E93"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E6%95%B0%E6%8D%AE%E5%BA%93">数据库<a class="anchor" href="#%E6%95%B0%E6%8D%AE%E5%BA%93">§</a></h2>\n<ul>\n<li>MySQl 关系型数据库、MongoDB 非关系型数据库</li>\n<li>数据库搜索速度优化 -&gt; 索引、拆分</li>\n</ul>\n<h2 id="linux--nginx">Linux + Nginx<a class="anchor" href="#linux--nginx">§</a></h2>\n<ul>\n<li>Nginx 平滑重启，反向代理、正向代理</li>\n</ul>\n<h2 id="nginx-%E6%9C%89%E5%93%AA%E4%BA%9B%E9%85%8D%E7%BD%AE%E9%A1%B9">Nginx 有哪些配置项？<a class="anchor" href="#nginx-%E6%9C%89%E5%93%AA%E4%BA%9B%E9%85%8D%E7%BD%AE%E9%A1%B9">§</a></h2>\n<ul>\n<li>listen、server_name、location、root...</li>\n</ul>\n<h2 id="nginx-%E7%9A%84%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86">Nginx 的反向代理？<a class="anchor" href="#nginx-%E7%9A%84%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86">§</a></h2>\n<h2 id="sql-%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">SQL 如何进行性能优化？<a class="anchor" href="#sql-%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">§</a></h2>\n<ul>\n<li>合理建立索引</li>\n<li>避免多次连接查询和嵌套查询</li>\n<li>避免数据类型不一致</li>\n<li>禁止不必要的 ORDER BY 排序</li>\n<li>批量 INSERT 插入可以合并插入</li>\n</ul>\n<h3 id="sql-%E7%9A%84%E6%85%A2%E6%9F%A5%E8%AF%A2%E6%98%AF%E4%BB%80%E4%B9%88">SQL 的慢查询是什么？<a class="anchor" href="#sql-%E7%9A%84%E6%85%A2%E6%9F%A5%E8%AF%A2%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h3>\n<ul>\n<li>先运行看看是否真的很慢，注意设置 SQL_NO_CACHE</li>\n<li>where 条件单表查，锁定最小返回记录表。这句话的意思是把查询语句的 where 都应用到表中返回的记录数最小的表开始查起，单表每个字段分别查询，看哪个字段的区分度最高</li>\n<li>explain 查看执行计划，是否与b预期一致(从锁定记录较少的表开始查询)</li>\n<li>order by limit 形式的 sql 语句让排序的表优先查</li>\n<li>了解业务方使用场景</li>\n<li>加索引时参照建索引的几大原则</li>\n<li>观察结果，不符合预期继续从 1 分析</li>\n</ul>'
        } }),
    'contentHasKatex': false,
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E6%95%B0%E6%8D%AE%E5%BA%93">数据库</a></li><li><a href="#linux--nginx">Linux + Nginx</a></li><li><a href="#nginx-%E6%9C%89%E5%93%AA%E4%BA%9B%E9%85%8D%E7%BD%AE%E9%A1%B9">Nginx 有哪些配置项？</a></li><li><a href="#nginx-%E7%9A%84%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86">Nginx 的反向代理？</a></li><li><a href="#sql-%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">SQL 如何进行性能优化？</a><ol><li><a href="#sql-%E7%9A%84%E6%85%A2%E6%9F%A5%E8%AF%A2%E6%98%AF%E4%BB%80%E4%B9%88">SQL 的慢查询是什么？</a></li></ol></li></ol></nav>'
        } }),
    'date': "2020-10-27T07:34:52.000Z",
    'updated': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ]
};
