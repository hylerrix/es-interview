import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "text": "测试",
        "link": "articles/01-Programming/06-software-test.html"
    },
    'next': {
        "link": "articles/02-ECMAScript+/index.html",
        "text": "ECMAScript+"
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
    'pagePath': "articles/01-Programming/07-version-control.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/01-Programming/07-version-control.html",
    'title': "版本控制",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>版本控制</h1>\n<h2 id="git-commit-message-%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83angular">Git Commit Message 提交规范（Angular）？<a class="anchor" href="#git-commit-message-%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83angular">§</a></h2>\n<p>每次提交，Commit message 都包括三个部分：Header，Body 和 Footer。其中，Header 是必需的，Body 和 Footer 可以省略。不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。这是为了避免自动换行影响美观。</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>(<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>): <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>subject</span><span class="token punctuation">></span></span>\n// 空一行\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n// 空一行\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>\n</code></pre>\n<ul>\n<li>Header：Header 部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）。\n<ul>\n<li>type：用于说明 commit 的类别，只允许使用下面 7 个标识。\n<ul>\n<li>feat：新功能（feature）</li>\n<li>fix：修补bug</li>\n<li>docs：文档（documentation）</li>\n<li>style：格式（不影响代码运行的变动）</li>\n<li>refactor：重构（即不是新增功能，也不是修改bug的代码变动）</li>\n<li>test：增加测试</li>\n<li>chore：构建过程或辅助工具的变动</li>\n</ul>\n</li>\n<li>如果 type 为 feat 和 fix，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。</li>\n<li>scope：用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。</li>\n<li>subject：是 commit 目的的简短描述，不超过50个字符。\n<ul>\n<li>以动词开头，使用第一人称现在时，比如change，而不是changed或changes</li>\n<li>第一个字母小写</li>\n<li>结尾不加句号（.）</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Body：对本次 commit 的详细描述，可以分成多行。注意：\n<ul>\n<li>使用第一人称现在时，比如使用change而不是changed或changes。</li>\n<li>应该说明代码变动的动机，以及与以前行为的对比。</li>\n</ul>\n</li>\n<li>Footer：只用于两种情况。\n<ul>\n<li>不兼容变动：如果当前代码与上一个版本不兼容，则 Footer 部分以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动理由和迁移方法。</li>\n<li>关闭 Issue：如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。也可以一次关闭多个 issue 。</li>\n</ul>\n</li>\n<li>Revert：还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以revert:开头，后面跟着被撤销 Commit 的 Header。\n<ul>\n<li>Body部分的格式是固定的，必须写成 This reverts commit .，其中的 hash 是被撤销 commit 的 SHA 标识符。</li>\n<li>如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。如果两者在不同的发布，那么当前 commit，会出现在 Change log 的Reverts小标题下面。</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E4%BF%9D%E8%AF%81-git-commit-%E8%A7%84%E8%8C%83%E7%9A%84%E5%B7%A5%E5%85%B7%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">保证 Git Commit 规范的工具都有哪些？<a class="anchor" href="#%E4%BF%9D%E8%AF%81-git-commit-%E8%A7%84%E8%8C%83%E7%9A%84%E5%B7%A5%E5%85%B7%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">§</a></h2>\n<ul>\n<li>Commitizen：一个撰写合格 Commit message 的工具。安装后在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式。</li>\n<li>validate-commit-msg：用于检查 Node 项目的 Commit message 是否符合格式。它的安装是手动的。首先，拷贝下面这个 JavaScript 文件，放入你的代码库。文件名可以取为 validate-commit-msg.js。接着，把这个脚本加入 Git 的 hook。下面是在 package.json 里面使用 ghooks，把这个脚本加为 commit-msg 时运行。</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%94%9F%E6%88%90-changelog">如何生成 changelog？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%94%9F%E6%88%90-changelog">§</a></h2>\n<ul>\n<li>\n<p>如果你的所有 Commit 都符合 Angular 格式，那么发布新版本时， Change log 就可以用脚本自动生成。生成的文档包括以下三个部分。</p>\n<ul>\n<li>New features</li>\n<li>Bug fixes</li>\n<li>Breaking changes。</li>\n</ul>\n</li>\n<li>\n<p>使用 conventional-changelog 工具。</p>\n<ul>\n<li>上面命令不会覆盖以前的 Change log，只会在 <a href="http://CHANGELOG.md">CHANGELOG.md</a> 的头部加上自从上次发布以来的变动。如果你想生成所有发布的 Change log，要改为运行下面的命令。</li>\n</ul>\n</li>\n</ul>\n<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"changelog"</span><span class="token operator">:</span> <span class="token string">"conventional-changelog -p angular -i CHANGELOG.md -w -r 0"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#git-commit-message-%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83angular">Git Commit Message 提交规范（Angular）？</a></li><li><a href="#%E4%BF%9D%E8%AF%81-git-commit-%E8%A7%84%E8%8C%83%E7%9A%84%E5%B7%A5%E5%85%B7%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">保证 Git Commit 规范的工具都有哪些？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%94%9F%E6%88%90-changelog">如何生成 changelog？</a></li></ol></nav>'
        } })
};
