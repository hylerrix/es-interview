import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "title": "测试",
        "link": "articles/01-Programming/05-software-test.html"
    },
    'next': {
        "title": "计算机组成原理",
        "link": "articles/01-Programming/07-computer-principles.html"
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
    'pagePath': "articles/01-Programming/06-version-control.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/01-Programming/06-version-control.html",
    'title': "版本控制",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>版本控制</h1>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF-git">什么是 Git<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-git">§</a></h2>\n<ul>\n<li>Git 仓库的三个组成部分：工作区、暂存区和历史记录区\n<ul>\n<li>工作区 working directory：在 git 管理下的正常目录都是工作区</li>\n<li>暂存区 stage：临时区域，里面存放将要提交文件的快照</li>\n<li>历史记录区 history：git commit 后的记录区</li>\n<li>三个区转换关系：\n<ul>\n<li>history -&gt; stage(Index)：<code>git reset --files</code></li>\n<li>Stage(Index) -&gt; Working Directory: <code>git checkout --files</code></li>\n<li>Working Directory -&gt; Stage(Index): <code>git add files</code></li>\n<li>Stage(Index) -&gt; History: <code>git commit</code></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="git-workflow-%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84">Git Workflow 是怎样的？<a class="anchor" href="#git-workflow-%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84">§</a></h2>\n<ul>\n<li>Git Flow：由 Vincent Driessen 提出：\n<ul>\n<li>分支\n<ul>\n<li>master：主分支</li>\n<li>develop：主开发分支，包含确定即将发布的代码</li>\n<li>feature：新功能分支，一般一个新功能对应一个分支，对于功能的拆分需要比较合理，以避免一些后面不必要的代码冲突。</li>\n<li>release：发布分支，发布时候用的分支，一般测试时候发现的 bug 在这个分支进行修复。</li>\n<li>hotfix：更新分支，紧急修 bug 时候用</li>\n</ul>\n</li>\n<li>优点：\n<ul>\n<li>并行开发：GitFlow 可以很方便的实现并行开发:每个新功能都会建立一个新的 feature 分支，从而和已经完成的功能隔离开来，而且只有在新功能完成开发的情况下，其对应的 feature 分支才会合并到主开发分支上(也就是我们经常说的 分支)。另外，如果你正在开发某个功能，同时又有一个新的功能需要开发，你只需要 提交当前 的代码，然后创建另外一个 feature 分支并完成新功能开发。然后再切回之前的 feature 分 支即可继续完成之前功能的开发。</li>\n<li>协作开发：协作开发:GitFlow 还支持多人协同开发，因为每个 feature 分支上改动的代码都只是为了让某个新的 feature 可以独立运行。同时我们也很容易知道每个人都在干啥。</li>\n<li>发布阶段：当一个新 feature 开发完成的时候，它会被合并到 分支，这个分支主要用来暂时保存那些还 没有发布的内容，所以如果需要再开发新的 feature ，我们只需要从 分支创建新分支，即可包含所有已 经完成的 feature 。</li>\n<li>支持紧急修复：GitFlow 还包含了 hotfix 分支。这种类型的分支是从某个已经发布的 tag 上创建出来并做一个紧 急的修复，而且这个紧急修复只影响这个已经发布的 tag，而不会影响到你正在开发的新 feature 。</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>GitHub Flow</li>\n</ul>\n<h2 id="rebase-%E5%92%8C-merge-%E7%9A%84%E5%8C%BA%E5%88%AB">rebase 和 merge 的区别？<a class="anchor" href="#rebase-%E5%92%8C-merge-%E7%9A%84%E5%8C%BA%E5%88%AB">§</a></h2>\n<ul>\n<li>git rebase 和 git merge 一样都是用于从一个分支获取并且合并到当前分支。</li>\n<li>merge：自动创建一个新的 commit，如果合并时遇到冲突，仅需要修改后重新 commit\n<ul>\n<li>优点：记录了真实的 commit 情况，包括每个分支的详情</li>\n<li>缺点：因为每次 merge 都会自动产生一个 merge commit，所以在使用一些 git GUI 工具时，分支较乱。</li>\n</ul>\n</li>\n<li>rebase：合并之前的 commit 历史\n<ul>\n<li>优点：得到更简洁的项目历史，去掉了 merge commit</li>\n<li>缺点：如果合并出现代码问题不容易定位，因为 rewrite 了 history</li>\n</ul>\n</li>\n</ul>\n<h2 id="resetrevertcheckout-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">reset、revert、checkout 有什么区别？<a class="anchor" href="#resetrevertcheckout-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">§</a></h2>\n<ul>\n<li>共同点：用来撤销代码仓库中的某些更改。</li>\n<li>不同点 - commit 层面：\n<ul>\n<li>git reset 可以将一个分支的末端指向之前的一个 commit，然后在下次 git 执行垃圾回收的时候，会把这个 commit 之后的 commit 都扔掉。</li>\n<li>git reset 还支持三种标记，用来标记 reset 指令影响的范围：\n<ul>\n<li>--mixed：会影响到暂存区和历史记录区。也是默认选项。</li>\n<li>--soft：只影响历史记录区。</li>\n<li>--hard：影响工作区、暂存区和历史记录区</li>\n</ul>\n</li>\n<li>git reset 是直接删除 commit 记录，从而会影响到其他开发人员的分支，所以不要在公共分支（dev、master 等）操作。</li>\n<li>git checkout 可以将 HEAD 移到一个新的分支，并更新工作目录。因为可能会覆盖</li>\n</ul>\n</li>\n<li>不同点 - 文件层面：\n<ul>\n<li>git reset 只是把文件从历史记录区拿到暂存区，不影响工作区的内容，而且不支持 --mixed、--soft 和 --hard。</li>\n<li>git checkout 则是把文件从历史记录拿到工作区，不影响暂存区的内容。</li>\n<li>git revert 不支持文件层面的操作。</li>\n</ul>\n</li>\n</ul>\n<h2 id="git-commit-message-%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83angular">Git Commit Message 提交规范（Angular）？<a class="anchor" href="#git-commit-message-%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83angular">§</a></h2>\n<p>每次提交，Commit message 都包括三个部分：Header，Body 和 Footer。其中，Header 是必需的，Body 和 Footer 可以省略。不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。这是为了避免自动换行影响美观。</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>(<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>): <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>subject</span><span class="token punctuation">></span></span>\n// 空一行\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n// 空一行\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>\n</code></pre>\n<ul>\n<li>Header：Header 部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）。\n<ul>\n<li>type：用于说明 commit 的类别，只允许使用下面 7 个标识。\n<ul>\n<li>feat：新功能（feature）</li>\n<li>fix：修补bug</li>\n<li>docs：文档（documentation）</li>\n<li>style：格式（不影响代码运行的变动）</li>\n<li>refactor：重构（即不是新增功能，也不是修改bug的代码变动）</li>\n<li>test：增加测试</li>\n<li>chore：构建过程或辅助工具的变动</li>\n</ul>\n</li>\n<li>如果 type 为 feat 和 fix，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。</li>\n<li>scope：用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。</li>\n<li>subject：是 commit 目的的简短描述，不超过50个字符。\n<ul>\n<li>以动词开头，使用第一人称现在时，比如change，而不是changed或changes</li>\n<li>第一个字母小写</li>\n<li>结尾不加句号（.）</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Body：对本次 commit 的详细描述，可以分成多行。注意：\n<ul>\n<li>使用第一人称现在时，比如使用change而不是changed或changes。</li>\n<li>应该说明代码变动的动机，以及与以前行为的对比。</li>\n</ul>\n</li>\n<li>Footer：只用于两种情况。\n<ul>\n<li>不兼容变动：如果当前代码与上一个版本不兼容，则 Footer 部分以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动理由和迁移方法。</li>\n<li>关闭 Issue：如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。也可以一次关闭多个 issue 。</li>\n</ul>\n</li>\n<li>Revert：还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以revert:开头，后面跟着被撤销 Commit 的 Header。\n<ul>\n<li>Body部分的格式是固定的，必须写成 This reverts commit .，其中的 hash 是被撤销 commit 的 SHA 标识符。</li>\n<li>如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。如果两者在不同的发布，那么当前 commit，会出现在 Change log 的Reverts小标题下面。</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E4%BF%9D%E8%AF%81-git-commit-%E8%A7%84%E8%8C%83%E7%9A%84%E5%B7%A5%E5%85%B7%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">保证 Git Commit 规范的工具都有哪些？<a class="anchor" href="#%E4%BF%9D%E8%AF%81-git-commit-%E8%A7%84%E8%8C%83%E7%9A%84%E5%B7%A5%E5%85%B7%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">§</a></h2>\n<ul>\n<li>Commitizen：一个撰写合格 Commit message 的工具。安装后在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式。</li>\n<li>validate-commit-msg：用于检查 Node 项目的 Commit message 是否符合格式。它的安装是手动的。首先，拷贝下面这个 JavaScript 文件，放入你的代码库。文件名可以取为 validate-commit-msg.js。接着，把这个脚本加入 Git 的 hook。下面是在 package.json 里面使用 ghooks，把这个脚本加为 commit-msg 时运行。</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%94%9F%E6%88%90-changelog">如何生成 changelog？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%94%9F%E6%88%90-changelog">§</a></h2>\n<ul>\n<li>\n<p>如果你的所有 Commit 都符合 Angular 格式，那么发布新版本时， Change log 就可以用脚本自动生成。生成的文档包括以下三个部分。</p>\n<ul>\n<li>New features</li>\n<li>Bug fixes</li>\n<li>Breaking changes。</li>\n</ul>\n</li>\n<li>\n<p>使用 conventional-changelog 工具。</p>\n<ul>\n<li>上面命令不会覆盖以前的 Change log，只会在 <a href="http://CHANGELOG.md">CHANGELOG.md</a> 的头部加上自从上次发布以来的变动。如果你想生成所有发布的 Change log，要改为运行下面的命令。</li>\n</ul>\n</li>\n</ul>\n<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"changelog"</span><span class="token operator">:</span> <span class="token string">"conventional-changelog -p angular -i CHANGELOG.md -w -r 0"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-169223577-1" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u7248\u672C\u63A7\u5236"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF-git">什么是 Git<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-git">§</a></h2>\n<ul>\n<li>Git 仓库的三个组成部分：工作区、暂存区和历史记录区\n<ul>\n<li>工作区 working directory：在 git 管理下的正常目录都是工作区</li>\n<li>暂存区 stage：临时区域，里面存放将要提交文件的快照</li>\n<li>历史记录区 history：git commit 后的记录区</li>\n<li>三个区转换关系：\n<ul>\n<li>history -&gt; stage(Index)：<code>git reset --files</code></li>\n<li>Stage(Index) -&gt; Working Directory: <code>git checkout --files</code></li>\n<li>Working Directory -&gt; Stage(Index): <code>git add files</code></li>\n<li>Stage(Index) -&gt; History: <code>git commit</code></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="git-workflow-%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84">Git Workflow 是怎样的？<a class="anchor" href="#git-workflow-%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84">§</a></h2>\n<ul>\n<li>Git Flow：由 Vincent Driessen 提出：\n<ul>\n<li>分支\n<ul>\n<li>master：主分支</li>\n<li>develop：主开发分支，包含确定即将发布的代码</li>\n<li>feature：新功能分支，一般一个新功能对应一个分支，对于功能的拆分需要比较合理，以避免一些后面不必要的代码冲突。</li>\n<li>release：发布分支，发布时候用的分支，一般测试时候发现的 bug 在这个分支进行修复。</li>\n<li>hotfix：更新分支，紧急修 bug 时候用</li>\n</ul>\n</li>\n<li>优点：\n<ul>\n<li>并行开发：GitFlow 可以很方便的实现并行开发:每个新功能都会建立一个新的 feature 分支，从而和已经完成的功能隔离开来，而且只有在新功能完成开发的情况下，其对应的 feature 分支才会合并到主开发分支上(也就是我们经常说的 分支)。另外，如果你正在开发某个功能，同时又有一个新的功能需要开发，你只需要 提交当前 的代码，然后创建另外一个 feature 分支并完成新功能开发。然后再切回之前的 feature 分 支即可继续完成之前功能的开发。</li>\n<li>协作开发：协作开发:GitFlow 还支持多人协同开发，因为每个 feature 分支上改动的代码都只是为了让某个新的 feature 可以独立运行。同时我们也很容易知道每个人都在干啥。</li>\n<li>发布阶段：当一个新 feature 开发完成的时候，它会被合并到 分支，这个分支主要用来暂时保存那些还 没有发布的内容，所以如果需要再开发新的 feature ，我们只需要从 分支创建新分支，即可包含所有已 经完成的 feature 。</li>\n<li>支持紧急修复：GitFlow 还包含了 hotfix 分支。这种类型的分支是从某个已经发布的 tag 上创建出来并做一个紧 急的修复，而且这个紧急修复只影响这个已经发布的 tag，而不会影响到你正在开发的新 feature 。</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>GitHub Flow</li>\n</ul>\n<h2 id="rebase-%E5%92%8C-merge-%E7%9A%84%E5%8C%BA%E5%88%AB">rebase 和 merge 的区别？<a class="anchor" href="#rebase-%E5%92%8C-merge-%E7%9A%84%E5%8C%BA%E5%88%AB">§</a></h2>\n<ul>\n<li>git rebase 和 git merge 一样都是用于从一个分支获取并且合并到当前分支。</li>\n<li>merge：自动创建一个新的 commit，如果合并时遇到冲突，仅需要修改后重新 commit\n<ul>\n<li>优点：记录了真实的 commit 情况，包括每个分支的详情</li>\n<li>缺点：因为每次 merge 都会自动产生一个 merge commit，所以在使用一些 git GUI 工具时，分支较乱。</li>\n</ul>\n</li>\n<li>rebase：合并之前的 commit 历史\n<ul>\n<li>优点：得到更简洁的项目历史，去掉了 merge commit</li>\n<li>缺点：如果合并出现代码问题不容易定位，因为 rewrite 了 history</li>\n</ul>\n</li>\n</ul>\n<h2 id="resetrevertcheckout-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">reset、revert、checkout 有什么区别？<a class="anchor" href="#resetrevertcheckout-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">§</a></h2>\n<ul>\n<li>共同点：用来撤销代码仓库中的某些更改。</li>\n<li>不同点 - commit 层面：\n<ul>\n<li>git reset 可以将一个分支的末端指向之前的一个 commit，然后在下次 git 执行垃圾回收的时候，会把这个 commit 之后的 commit 都扔掉。</li>\n<li>git reset 还支持三种标记，用来标记 reset 指令影响的范围：\n<ul>\n<li>--mixed：会影响到暂存区和历史记录区。也是默认选项。</li>\n<li>--soft：只影响历史记录区。</li>\n<li>--hard：影响工作区、暂存区和历史记录区</li>\n</ul>\n</li>\n<li>git reset 是直接删除 commit 记录，从而会影响到其他开发人员的分支，所以不要在公共分支（dev、master 等）操作。</li>\n<li>git checkout 可以将 HEAD 移到一个新的分支，并更新工作目录。因为可能会覆盖</li>\n</ul>\n</li>\n<li>不同点 - 文件层面：\n<ul>\n<li>git reset 只是把文件从历史记录区拿到暂存区，不影响工作区的内容，而且不支持 --mixed、--soft 和 --hard。</li>\n<li>git checkout 则是把文件从历史记录拿到工作区，不影响暂存区的内容。</li>\n<li>git revert 不支持文件层面的操作。</li>\n</ul>\n</li>\n</ul>\n<h2 id="git-commit-message-%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83angular">Git Commit Message 提交规范（Angular）？<a class="anchor" href="#git-commit-message-%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83angular">§</a></h2>\n<p>每次提交，Commit message 都包括三个部分：Header，Body 和 Footer。其中，Header 是必需的，Body 和 Footer 可以省略。不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。这是为了避免自动换行影响美观。</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>(<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>): <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>subject</span><span class="token punctuation">></span></span>\n// 空一行\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n// 空一行\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>\n</code></pre>\n<ul>\n<li>Header：Header 部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）。\n<ul>\n<li>type：用于说明 commit 的类别，只允许使用下面 7 个标识。\n<ul>\n<li>feat：新功能（feature）</li>\n<li>fix：修补bug</li>\n<li>docs：文档（documentation）</li>\n<li>style：格式（不影响代码运行的变动）</li>\n<li>refactor：重构（即不是新增功能，也不是修改bug的代码变动）</li>\n<li>test：增加测试</li>\n<li>chore：构建过程或辅助工具的变动</li>\n</ul>\n</li>\n<li>如果 type 为 feat 和 fix，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。</li>\n<li>scope：用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。</li>\n<li>subject：是 commit 目的的简短描述，不超过50个字符。\n<ul>\n<li>以动词开头，使用第一人称现在时，比如change，而不是changed或changes</li>\n<li>第一个字母小写</li>\n<li>结尾不加句号（.）</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Body：对本次 commit 的详细描述，可以分成多行。注意：\n<ul>\n<li>使用第一人称现在时，比如使用change而不是changed或changes。</li>\n<li>应该说明代码变动的动机，以及与以前行为的对比。</li>\n</ul>\n</li>\n<li>Footer：只用于两种情况。\n<ul>\n<li>不兼容变动：如果当前代码与上一个版本不兼容，则 Footer 部分以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动理由和迁移方法。</li>\n<li>关闭 Issue：如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。也可以一次关闭多个 issue 。</li>\n</ul>\n</li>\n<li>Revert：还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以revert:开头，后面跟着被撤销 Commit 的 Header。\n<ul>\n<li>Body部分的格式是固定的，必须写成 This reverts commit .，其中的 hash 是被撤销 commit 的 SHA 标识符。</li>\n<li>如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。如果两者在不同的发布，那么当前 commit，会出现在 Change log 的Reverts小标题下面。</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E4%BF%9D%E8%AF%81-git-commit-%E8%A7%84%E8%8C%83%E7%9A%84%E5%B7%A5%E5%85%B7%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">保证 Git Commit 规范的工具都有哪些？<a class="anchor" href="#%E4%BF%9D%E8%AF%81-git-commit-%E8%A7%84%E8%8C%83%E7%9A%84%E5%B7%A5%E5%85%B7%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">§</a></h2>\n<ul>\n<li>Commitizen：一个撰写合格 Commit message 的工具。安装后在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式。</li>\n<li>validate-commit-msg：用于检查 Node 项目的 Commit message 是否符合格式。它的安装是手动的。首先，拷贝下面这个 JavaScript 文件，放入你的代码库。文件名可以取为 validate-commit-msg.js。接着，把这个脚本加入 Git 的 hook。下面是在 package.json 里面使用 ghooks，把这个脚本加为 commit-msg 时运行。</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%94%9F%E6%88%90-changelog">如何生成 changelog？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%94%9F%E6%88%90-changelog">§</a></h2>\n<ul>\n<li>\n<p>如果你的所有 Commit 都符合 Angular 格式，那么发布新版本时， Change log 就可以用脚本自动生成。生成的文档包括以下三个部分。</p>\n<ul>\n<li>New features</li>\n<li>Bug fixes</li>\n<li>Breaking changes。</li>\n</ul>\n</li>\n<li>\n<p>使用 conventional-changelog 工具。</p>\n<ul>\n<li>上面命令不会覆盖以前的 Change log，只会在 <a href="http://CHANGELOG.md">CHANGELOG.md</a> 的头部加上自从上次发布以来的变动。如果你想生成所有发布的 Change log，要改为运行下面的命令。</li>\n</ul>\n</li>\n</ul>\n<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"changelog"</span><span class="token operator">:</span> <span class="token string">"conventional-changelog -p angular -i CHANGELOG.md -w -r 0"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>'
        } }),
    'contentHasKatex': false,
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF-git">什么是 Git</a></li><li><a href="#git-workflow-%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84">Git Workflow 是怎样的？</a></li><li><a href="#rebase-%E5%92%8C-merge-%E7%9A%84%E5%8C%BA%E5%88%AB">rebase 和 merge 的区别？</a></li><li><a href="#resetrevertcheckout-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">reset、revert、checkout 有什么区别？</a></li><li><a href="#git-commit-message-%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83angular">Git Commit Message 提交规范（Angular）？</a></li><li><a href="#%E4%BF%9D%E8%AF%81-git-commit-%E8%A7%84%E8%8C%83%E7%9A%84%E5%B7%A5%E5%85%B7%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">保证 Git Commit 规范的工具都有哪些？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%94%9F%E6%88%90-changelog">如何生成 changelog？</a></li></ol></nav>'
        } }),
    'date': "2020-10-25T07:04:16.000Z",
    'updated': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ]
};
