import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': null,
    'next': {
        "link": "articles/00-Beginner/index.html",
        "title": "一切的起源"
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
    'pagePath': "articles/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/index.html",
    'title': "ESMAScript+ 面试宝典",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>ESMAScript+ 面试宝典</h1>\n<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->\n<p><a href="#contributors-"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square" alt="All Contributors"></a></p>\n<!-- ALL-CONTRIBUTORS-BADGE:END -->\n<ul>\n<li>官网地址：<a href="http://es-interview.js.org">http://es-interview.js.org</a></li>\n<li>生产力：Github Pages + Github Action + Pagic + Typora</li>\n<li>欢迎 Star 和 <em><strong>Watch</strong></em>！\n<ul>\n<li><code>star</code> 可以让更多的人知道这个知识库，一起共建</li>\n<li>每当文档有一定多的内容更新时，本仓库都会发布一个版本，<code>watch release</code> 可以让你及时的收到这个通知且没那么频繁的打扰到你！</li>\n</ul>\n</li>\n</ul>\n<p>注：先小范围开源，建设中...预计 2021 年年初会有一个更加完整的第一个大版本。</p>\n<h2 id="%E7%90%86%E6%83%B3%E4%B8%8E%E7%8E%B0%E5%AE%9E">理想与现实<a class="anchor" href="#%E7%90%86%E6%83%B3%E4%B8%8E%E7%8E%B0%E5%AE%9E">§</a></h2>\n<ul>\n<li>目标：同时结合面试题以及知识库的特点 -&gt; 既能当题库又能当手册。\n<ul>\n<li>暂时不放图，专注纯文本。</li>\n<li>目前可能会粘贴大量文本，前后阅读不连贯，持续构造、优化中。</li>\n<li>未来全站导出 PDF，可以让更多设备方便离线观看。</li>\n</ul>\n</li>\n<li>待做：\n<ul>\n<li>更多的文本量</li>\n<li>更好的目录结构</li>\n<li>编排文案，更好的阅读体验</li>\n<li>为每个问题统一加上参考链接以及推荐阅读的链接。</li>\n<li>下一个版本开始\n<ul>\n<li>需要标明大量参考链接、推荐阅读链接</li>\n<li>加入图床</li>\n<li>加入询问“如下输出结果是什么”类型的题</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>未来可能改动：将 javascript-practice 等有关实战代码的文档全部转移到 deno-algorithm 仓库中。</li>\n<li>宣传仓库前：\n<ul>\n<li>加上量化数据易于宣传</li>\n<li>找几个大佬写推荐语哈哈</li>\n<li>快速写文章宣传。</li>\n</ul>\n</li>\n</ul>\n<p>还有大量文本正在填充中...也需要更多的拆分目录和调整目录顺序、调整语句...欢迎贡献任何想法和改动！</p>\n<h2 id="%E6%9B%B4%E7%BE%8E%E5%A5%BD%E7%9A%84%E6%9C%AA%E6%9D%A5">更美好的未来<a class="anchor" href="#%E6%9B%B4%E7%BE%8E%E5%A5%BD%E7%9A%84%E6%9C%AA%E6%9D%A5">§</a></h2>\n<ul>\n<li>支持全局快速搜题！别在浏览器里找题了，来这里吧。</li>\n<li>支持 VS Code 插件学习！随时在编辑器里刷题。</li>\n</ul>\n<h2 id="%E4%BD%A0%E5%8F%AF%E4%BB%A5%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E8%BF%99%E4%B8%AA%E7%9F%A5%E8%AF%86%E5%BA%93">你可以如何使用这个知识库？<a class="anchor" href="#%E4%BD%A0%E5%8F%AF%E4%BB%A5%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E8%BF%99%E4%B8%AA%E7%9F%A5%E8%AF%86%E5%BA%93">§</a></h2>\n<ul>\n<li>一起共建，成为我们的面试知识库</li>\n<li>当一个面试者，来寻找自己想要的知识</li>\n<li>当一个面试官，来从里面挑题问面试者</li>\n</ul>\n<p>当然，这要求这个知识库有更丰富、更及时的内容填充，一切都在建设中...</p>\n<h2 id="%E5%8F%8B%E6%83%85%E9%93%BE%E6%8E%A5">友情链接<a class="anchor" href="#%E5%8F%8B%E6%83%85%E9%93%BE%E6%8E%A5">§</a></h2>\n<ul>\n<li><a href="http://deno-tutorial.js.org/">deno-tutorial.js.org</a></li>\n</ul>\n<h2 id="%E5%8F%82%E4%B8%8E%E6%96%B9%E5%BC%8F">参与方式<a class="anchor" href="#%E5%8F%82%E4%B8%8E%E6%96%B9%E5%BC%8F">§</a></h2>\n<pre class="language-bash"><code class="language-bash">$ <span class="token function">curl</span> -fsSL <a class="token url-link" href="https://deno.land/x/install/install.sh">https://deno.land/x/install/install.sh</a> <span class="token operator">|</span> <span class="token function">sh</span>\n$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">DENO_INSTALL</span><span class="token operator">=</span><span class="token string">"/Users/didi/.deno"</span>\n$ <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">"<span class="token variable">$DENO_INSTALL</span>/bin:<span class="token environment constant">$PATH</span>"</span>\n$ deno <span class="token function">install</span> --unstable --allow-read --allow-write --allow-net --allow-run --name<span class="token operator">=</span>pagic <a class="token url-link" href="https://deno.land/x/pagic/mod.ts">https://deno.land/x/pagic/mod.ts</a>\n$ pagic build --watch --serve\n</code></pre>\n<h2 id="%E8%B4%A1%E7%8C%AE%E8%80%85-%E2%9C%A8">贡献者 ✨<a class="anchor" href="#%E8%B4%A1%E7%8C%AE%E8%80%85-%E2%9C%A8">§</a></h2>\n<p>感谢如下贡献者的贡献 (<a href="https://allcontributors.org/docs/en/emoji-key">emoji key</a>):</p>\n<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->\n<!-- prettier-ignore-start -->\n<!-- markdownlint-disable -->\n<table>\n  <tr>\n    <td align="center"><a href="https://github.com/hylerrix"><img src="https://avatars1.githubusercontent.com/u/19285461?v=4?s=100" width="100px;" alt=""/><br /><sub><b>hylerrix</b></sub></a><br /><a href="#ideas-hylerrix" title="Ideas, Planning, & Feedback">🤔</a></td>\n  </tr>\n</table>\n<!-- markdownlint-restore -->\n<!-- prettier-ignore-end -->\n<!-- ALL-CONTRIBUTORS-LIST:END -->\n<p>本项目贡献者列表遵循 <a href="https://github.com/all-contributors/all-contributors">all-contributors</a> 规范。欢迎你的参与。</p>\n<h2 id="%E5%BC%80%E6%BA%90%E5%8D%8F%E8%AE%AE">开源协议<a class="anchor" href="#%E5%BC%80%E6%BA%90%E5%8D%8F%E8%AE%AE">§</a></h2>\n<p>MIT &amp;&amp; CC-BY-SA-4.0</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-169223577-1" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "ESMAScript+ \u9762\u8BD5\u5B9D\u5178"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->\n<p><a href="#contributors-"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square" alt="All Contributors"></a></p>\n<!-- ALL-CONTRIBUTORS-BADGE:END -->\n<ul>\n<li>官网地址：<a href="http://es-interview.js.org">http://es-interview.js.org</a></li>\n<li>生产力：Github Pages + Github Action + Pagic + Typora</li>\n<li>欢迎 Star 和 <em><strong>Watch</strong></em>！\n<ul>\n<li><code>star</code> 可以让更多的人知道这个知识库，一起共建</li>\n<li>每当文档有一定多的内容更新时，本仓库都会发布一个版本，<code>watch release</code> 可以让你及时的收到这个通知且没那么频繁的打扰到你！</li>\n</ul>\n</li>\n</ul>\n<p>注：先小范围开源，建设中...预计 2021 年年初会有一个更加完整的第一个大版本。</p>\n<h2 id="%E7%90%86%E6%83%B3%E4%B8%8E%E7%8E%B0%E5%AE%9E">理想与现实<a class="anchor" href="#%E7%90%86%E6%83%B3%E4%B8%8E%E7%8E%B0%E5%AE%9E">§</a></h2>\n<ul>\n<li>目标：同时结合面试题以及知识库的特点 -&gt; 既能当题库又能当手册。\n<ul>\n<li>暂时不放图，专注纯文本。</li>\n<li>目前可能会粘贴大量文本，前后阅读不连贯，持续构造、优化中。</li>\n<li>未来全站导出 PDF，可以让更多设备方便离线观看。</li>\n</ul>\n</li>\n<li>待做：\n<ul>\n<li>更多的文本量</li>\n<li>更好的目录结构</li>\n<li>编排文案，更好的阅读体验</li>\n<li>为每个问题统一加上参考链接以及推荐阅读的链接。</li>\n<li>下一个版本开始\n<ul>\n<li>需要标明大量参考链接、推荐阅读链接</li>\n<li>加入图床</li>\n<li>加入询问“如下输出结果是什么”类型的题</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>未来可能改动：将 javascript-practice 等有关实战代码的文档全部转移到 deno-algorithm 仓库中。</li>\n<li>宣传仓库前：\n<ul>\n<li>加上量化数据易于宣传</li>\n<li>找几个大佬写推荐语哈哈</li>\n<li>快速写文章宣传。</li>\n</ul>\n</li>\n</ul>\n<p>还有大量文本正在填充中...也需要更多的拆分目录和调整目录顺序、调整语句...欢迎贡献任何想法和改动！</p>\n<h2 id="%E6%9B%B4%E7%BE%8E%E5%A5%BD%E7%9A%84%E6%9C%AA%E6%9D%A5">更美好的未来<a class="anchor" href="#%E6%9B%B4%E7%BE%8E%E5%A5%BD%E7%9A%84%E6%9C%AA%E6%9D%A5">§</a></h2>\n<ul>\n<li>支持全局快速搜题！别在浏览器里找题了，来这里吧。</li>\n<li>支持 VS Code 插件学习！随时在编辑器里刷题。</li>\n</ul>\n<h2 id="%E4%BD%A0%E5%8F%AF%E4%BB%A5%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E8%BF%99%E4%B8%AA%E7%9F%A5%E8%AF%86%E5%BA%93">你可以如何使用这个知识库？<a class="anchor" href="#%E4%BD%A0%E5%8F%AF%E4%BB%A5%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E8%BF%99%E4%B8%AA%E7%9F%A5%E8%AF%86%E5%BA%93">§</a></h2>\n<ul>\n<li>一起共建，成为我们的面试知识库</li>\n<li>当一个面试者，来寻找自己想要的知识</li>\n<li>当一个面试官，来从里面挑题问面试者</li>\n</ul>\n<p>当然，这要求这个知识库有更丰富、更及时的内容填充，一切都在建设中...</p>\n<h2 id="%E5%8F%8B%E6%83%85%E9%93%BE%E6%8E%A5">友情链接<a class="anchor" href="#%E5%8F%8B%E6%83%85%E9%93%BE%E6%8E%A5">§</a></h2>\n<ul>\n<li><a href="http://deno-tutorial.js.org/">deno-tutorial.js.org</a></li>\n</ul>\n<h2 id="%E5%8F%82%E4%B8%8E%E6%96%B9%E5%BC%8F">参与方式<a class="anchor" href="#%E5%8F%82%E4%B8%8E%E6%96%B9%E5%BC%8F">§</a></h2>\n<pre class="language-bash"><code class="language-bash">$ <span class="token function">curl</span> -fsSL <a class="token url-link" href="https://deno.land/x/install/install.sh">https://deno.land/x/install/install.sh</a> <span class="token operator">|</span> <span class="token function">sh</span>\n$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">DENO_INSTALL</span><span class="token operator">=</span><span class="token string">"/Users/didi/.deno"</span>\n$ <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">"<span class="token variable">$DENO_INSTALL</span>/bin:<span class="token environment constant">$PATH</span>"</span>\n$ deno <span class="token function">install</span> --unstable --allow-read --allow-write --allow-net --allow-run --name<span class="token operator">=</span>pagic <a class="token url-link" href="https://deno.land/x/pagic/mod.ts">https://deno.land/x/pagic/mod.ts</a>\n$ pagic build --watch --serve\n</code></pre>\n<h2 id="%E8%B4%A1%E7%8C%AE%E8%80%85-%E2%9C%A8">贡献者 ✨<a class="anchor" href="#%E8%B4%A1%E7%8C%AE%E8%80%85-%E2%9C%A8">§</a></h2>\n<p>感谢如下贡献者的贡献 (<a href="https://allcontributors.org/docs/en/emoji-key">emoji key</a>):</p>\n<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->\n<!-- prettier-ignore-start -->\n<!-- markdownlint-disable -->\n<table>\n  <tr>\n    <td align="center"><a href="https://github.com/hylerrix"><img src="https://avatars1.githubusercontent.com/u/19285461?v=4?s=100" width="100px;" alt=""/><br /><sub><b>hylerrix</b></sub></a><br /><a href="#ideas-hylerrix" title="Ideas, Planning, & Feedback">🤔</a></td>\n  </tr>\n</table>\n<!-- markdownlint-restore -->\n<!-- prettier-ignore-end -->\n<!-- ALL-CONTRIBUTORS-LIST:END -->\n<p>本项目贡献者列表遵循 <a href="https://github.com/all-contributors/all-contributors">all-contributors</a> 规范。欢迎你的参与。</p>\n<h2 id="%E5%BC%80%E6%BA%90%E5%8D%8F%E8%AE%AE">开源协议<a class="anchor" href="#%E5%BC%80%E6%BA%90%E5%8D%8F%E8%AE%AE">§</a></h2>\n<p>MIT &amp;&amp; CC-BY-SA-4.0</p>'
        } }),
    'contentHasKatex': false,
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E7%90%86%E6%83%B3%E4%B8%8E%E7%8E%B0%E5%AE%9E">理想与现实</a></li><li><a href="#%E6%9B%B4%E7%BE%8E%E5%A5%BD%E7%9A%84%E6%9C%AA%E6%9D%A5">更美好的未来</a></li><li><a href="#%E4%BD%A0%E5%8F%AF%E4%BB%A5%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E8%BF%99%E4%B8%AA%E7%9F%A5%E8%AF%86%E5%BA%93">你可以如何使用这个知识库？</a></li><li><a href="#%E5%8F%8B%E6%83%85%E9%93%BE%E6%8E%A5">友情链接</a></li><li><a href="#%E5%8F%82%E4%B8%8E%E6%96%B9%E5%BC%8F">参与方式</a></li><li><a href="#%E8%B4%A1%E7%8C%AE%E8%80%85-%E2%9C%A8">贡献者 ✨</a></li><li><a href="#%E5%BC%80%E6%BA%90%E5%8D%8F%E8%AE%AE">开源协议</a></li></ol></nav>'
        } }),
    'date': "2020-10-27T07:34:52.000Z",
    'updated': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ]
};
