import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "link": "articles/06-FE+Browser/index.html",
        "text": "前端应用开发 + 浏览器"
    },
    'next': {
        "text": "前端",
        "link": "articles/06-FE+Browser/01-fe-framework.html"
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
    'pagePath': "articles/06-FE+Browser/00-browser.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/06-FE+Browser/00-browser.html",
    'title': "浏览器",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>浏览器</h1>\n<ul>\n<li>localStorage、sessionStorage、cookie、Session</li>\n<li>Web Worker，Web Storage</li>\n<li>跨域：jsonp、CORS、nginx 代理...</li>\n<li>http 长链接，浏览器缓存</li>\n<li>浏览器渲染流程</li>\n<li>浏览器多进程与 JavaScript 单线程</li>\n<li>浏览器抓包</li>\n<li>三次握手、四次挥手</li>\n<li>跨域、同源策略：jsonp、cors、服务器代理、document.domain、postMessage</li>\n<li>存储：cookie、sessionStorage、localStorage、indexDB、ServiceWorker</li>\n<li>渲染、重绘</li>\n</ul>\n<blockquote>\n<p>浏览器多线程</p>\n</blockquote>\n<p>GUI 渲染线程</p>\n<p>JS 引擎线程</p>\n<p>事件触发线程</p>\n<p>异步 HTTP 请求线程</p>\n<p>Web Worker</p>\n<blockquote>\n<p>浏览器多标签页之间的通信</p>\n</blockquote>\n<p>WebSocket</p>\n<p>LocalStorage：事件监听，无关跨域</p>\n<p>SharedWorker：但必须是同源的</p>\n<h2 id="%E6%B5%8F%E8%A7%88%E5%99%A8%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E7%82%B9">浏览器有什么特点？<a class="anchor" href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E7%82%B9">§</a></h2>\n<ul>\n<li>可用于使用万维网；</li>\n<li>提供丰富多彩的用户界面：其中包括上下页、刷新、地址栏、书签、显示源码等功能；</li>\n<li>支持解析多种网页标准：HTML、HTML5、CSS、SVG、XHTML、WebGL、JavaScript 和 MathML 等；</li>\n<li>支持多种文件格式及协议：可以通过浏览器打开特定格式的文件进行查询、编辑等操作，且提供 HTTPS、FTP 等网络协议的支持；</li>\n<li>可通过多个窗口或多个标签页同时打开多种由统一资源标识符标志的信息资源：网络、图片、影音等；</li>\n<li>可通过开放开发的浏览器插件来拓展浏览器功能。</li>\n</ul>\n<h2 id="%E5%B8%B8%E8%A7%81%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8%E5%8F%8A%E5%85%B6%E7%BB%84%E6%88%90">常见浏览器内核及其组成？<a class="anchor" href="#%E5%B8%B8%E8%A7%81%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8%E5%8F%8A%E5%85%B6%E7%BB%84%E6%88%90">§</a></h2>\n<ul>\n<li>常见的浏览器内核：\n<ul>\n<li>Trident 内核：IE、360、搜狗浏览器、MaxThon、TT、The World 等。[又称 MSHTML]。\n<ul>\n<li>Trident 内核运行在 IE 上，又称 IE 内核，是 IE 的排版引擎的名称。Trident 曾因其市场占有量庞大而不思进取，一度与 W3C 标准脱节(05 年)，给了运行在 Safari、Chrome、Firefox 和 Opera 等浏览器 上的内核提供了很大的发展空间。随着微软逐步放弃 IE 浏览器品牌，Trident 内核版本也不再更新。</li>\n</ul>\n</li>\n<li>EdgeHTML 内核：运行在 Microsoft Edge 上\n<ul>\n<li>EdgeHTML 内核开启了 Trident 内核的分支，成为了替代 IE 浏览器的 Microsoft Edge 浏览器的主要排版引擎。EdgeHTML 移除所有旧版 IE 浏览器遗留下来的代码，并通过尊重网页标准、重写主要的代码以和其他现代浏览器的设计精神互通有无。</li>\n</ul>\n</li>\n<li>KHTML 内核，早期内核，Webkit 前身\n<ul>\n<li>KHTML 是由 KDE 自由软件社区所开发的 HTML 排版引擎，由 C++ 语言编写。这里提到 KHTML 是因为其是早起 Safari 的内核最终选型。Safari 开发团队因对 KHTML 作出大量的改动，逐步从 KHTML 中脱离出来，KHTML 逐渐淡出主流浏览器中。</li>\n</ul>\n</li>\n<li>Gecko 内核：火狐、FF、MozillaSuite、SeaMonkey 等。\n<ul>\n<li>Gecko 是 Netscape6 和 Firefox 的内核。Gecko 代码公开，使用该内核浏览器很多。其诞生来源于 IE 的不思进取。微软内部人员不满，与一停止更新 Netscape 的员工一起在创办 了 Mozila 后开发，常被称为 Firefox 内核，跨平台使用。</li>\n</ul>\n</li>\n<li>Presto 内核：Opera7 及以上。[Opera 内核原为：Presto，现为：Blink]。\n<ul>\n<li>Opera 浏览器早期使用的内核，Opera 在 Blink 引擎推出之后转用 Blink，其中原因包括毫无推广上的优势（主要原因）和使用 Webkit 内核的 Opera 可以兼容谷歌 Chrome 浏览器等。但换内核代价惨痛，从快速轻量化与稳定到异常卡顿与不稳定，书签同步都困难，很多用户流失。Presto 内核最终停留在了 12.17。</li>\n</ul>\n</li>\n<li>Webkit 内核：Safari、Chrome 等。 [ Chrome 的：Blink（WebKit 的分支）]。\n<ul>\n<li>Webkit 的前身是 KHTML 引擎，属于其一个开源分支，是 Safari 及早期 Chromium 、Amazon Kindle 等浏览器的默认内核。通常所说的 Webkit 不仅仅是排版引擎，其包括用来渲染 HTML 和 CSS 的 Webcore 引擎和用来解析 JS 的 JSCore。Webcore 便用来处理排版。</li>\n</ul>\n</li>\n<li>Chromium/Blink：运行在 Chrome 上\n<ul>\n<li>Chrome 浏览器的内核来源于 Webkit 的 Webcore，最终用谷歌公司自主开发的开源排版引擎 Blink 所代替；同时 Chrome 浏览器对于 JavaScript 代码的解析也使用了自己的 V8 引擎。</li>\n<li>Blink 同样来自于 Webkit，据说 Blink 删除了 880w 行 webkit 代码。Blink 引擎问世后，国产各种 chrome 系的浏览器也纷纷投入 Blink 的怀抱，可以在浏览器地址栏输入 chrome://version 进行查看。</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>浏览器内核的组成：\n<ul>\n<li>渲染引擎。</li>\n<li>JavaScript 引擎。</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86%E4%B8%8E%E5%85%B3%E9%94%AE%E6%B8%B2%E6%9F%93%E8%B7%AF%E5%BE%84">浏览器的渲染原理与关键渲染路径？<a class="anchor" href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86%E4%B8%8E%E5%85%B3%E9%94%AE%E6%B8%B2%E6%9F%93%E8%B7%AF%E5%BE%84">§</a></h2>\n<ul>\n<li>渲染过程\n<ul>\n<li>创建 DOM 树：独立树</li>\n<li>创建 CSS 树：独立树</li>\n<li>生成渲染树（文档流）：<code>&lt;head&gt;</code> 内部及 <code>display: none</code> 都不在，<code>visibility: hidden</code>在树中。</li>\n<li>执行脚本（就是JavaScript）：\n<ul>\n<li>脚本会阻塞 DOM 的解析，但在脚本修改 CSSOM 的地方，会在创建好 CSSOM 后执行。</li>\n<li>放在紧跟 <code>&lt;/body&gt;</code> 之前，可以保证 DOM 树的解析。</li>\n<li>async：异步下载，下载好后立刻执行。</li>\n<li>defer：异步下载，下载好后等页面解析完再执行。</li>\n</ul>\n</li>\n<li>布局：</li>\n<li>绘制：</li>\n</ul>\n</li>\n<li>优化关键渲染路径：\n<ul>\n<li>减少文件大小：最小化文件；压缩文件；以及缓存文件。</li>\n<li>减少关键资源的数量：CSS 和 JS 文件放在 bundle 当中；在 link 上使用 media query。</li>\n<li>减少关键渲染路径的长度：</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%90%8C%E6%BA%90%E7%AD%96%E7%95%A5%E7%9A%84%E5%8E%9F%E7%90%86%E4%B8%8E%E6%80%8E%E4%B9%88%E8%A7%A3%E5%86%B3%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98">同源策略的原理与怎么解决跨域问题？<a class="anchor" href="#%E5%90%8C%E6%BA%90%E7%AD%96%E7%95%A5%E7%9A%84%E5%8E%9F%E7%90%86%E4%B8%8E%E6%80%8E%E4%B9%88%E8%A7%A3%E5%86%B3%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98">§</a></h2>\n<ul>\n<li>无视跨域问题的标签：<code>&lt;script&gt;、&lt;link&gt;、&lt;img&gt;、&lt;video&gt;、&lt;audio&gt;、&lt;iframe&gt;</code>。</li>\n<li>解决方法：\n<ul>\n<li>JSONP（JSON with Padding）：只能处理 GET 请求。</li>\n<li>CORS（Cross-Origin Resource Sharing）：新增了一组 HTTP 首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源。\n<ul>\n<li>简单请求：</li>\n<li>预检请求：预检，查看自己是否可以跨域</li>\n</ul>\n</li>\n<li>代理</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E5%A4%9A%E8%BF%9B%E7%A8%8B%E4%B8%8E%E5%86%85%E6%A0%B8%E7%9A%84%E5%A4%9A%E7%BA%BF%E7%A8%8B%E6%9C%BA%E5%88%B6">浏览器的多进程与内核的多线程机制？<a class="anchor" href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E5%A4%9A%E8%BF%9B%E7%A8%8B%E4%B8%8E%E5%86%85%E6%A0%B8%E7%9A%84%E5%A4%9A%E7%BA%BF%E7%A8%8B%E6%9C%BA%E5%88%B6">§</a></h2>\n<p>多进程</p>\n<ul>\n<li>浏览器是多进程的\n<ul>\n<li>主控进程，Browser 进程：浏览器的主进程(负责协调、主控)，只有一个</li>\n<li>负责浏览器界面显示，与用户交互。如前进，后退等</li>\n<li>负责各个页面的管理，创建和销毁其他进程</li>\n<li>将 Renderer 进程得到的内存中的 Bitmap，绘制到用户界面上</li>\n<li>网络资源的管理，下载等</li>\n<li>第三方插件进程：每种类型的插件对应一个进程，仅当使用该插件时才创建</li>\n<li>GPU 进程：最多一个，用于 3D 绘制</li>\n<li>浏览器渲染进程(内核)：默认每个页面一个该进程，互不影响，该进程控制页面渲染，脚本执行，事件处理等</li>\n</ul>\n</li>\n<li>浏览器多进程的优势\n<ul>\n<li>避免单个 Page Crash 影响整个浏览器</li>\n<li>避免第三方插件 Crash 影响整个浏览器</li>\n<li>多进程充分利用多核优势</li>\n<li>方便使用沙盒模型隔离插件等进程，提高浏览器稳定性</li>\n</ul>\n</li>\n<li>Browser 进程和 Renderer 进程的通信过程\n<ul>\n<li>Browser 进程收到用户请求，首先需要获取页面内容，譬如通过网络下载资源，随后将该任务通过 RendererHost 接口传递给 Render 进程</li>\n<li>Renderer 进程的 Renderer 接口收到消息，简单解释后，交给渲染线程，然后开始渲染\n<ul>\n<li>渲染线程接收请求，加载网页并渲染网页，这其中可能需要 Browser 进程获取资源和需要 GPU 进程来帮助渲染</li>\n<li>可能会有 JavaScript 线程操作 DOM，这样可能会造成回流并重绘</li>\n<li>最后 Render 进程将结果传递给 Browser 进程</li>\n</ul>\n</li>\n<li>Browser 进程接收到结果并将结果绘制出来</li>\n</ul>\n</li>\n</ul>\n<p>浏览器内核是多线程的，浏览器内核多线程列表：</p>\n<ul>\n<li>GUI 线程\n<ul>\n<li>负责渲染浏览器界面，解析 HTML，CSS，构建 DOM 树和 RenderObject 树，布局和绘制等。</li>\n<li>当界面需要重绘 Repaint 或由于某种操作引发回流 Reflow 时，该线程就会执行</li>\n<li>注意，GUI 渲染线程与 JavaScript 引擎线程是互斥的，当 JS 引擎执行时GUI线程会被挂起(相当于被冻结了），GUI 更新会被保存在一个队列中等到 JavaScript 引擎空闲时立即被执行。</li>\n</ul>\n</li>\n<li>JavaScript 引擎线程\n<ul>\n<li>也称为JS内核，负责处理 JavaScript 脚本程序。例如 V8 引擎。</li>\n<li>JavaScript 引擎线程负责解析 JavaScript 脚本，运行代码。</li>\n<li>JavaScript 引擎一直等待着任务队列中任务的到来，然后加以处理，一个 Tab 页(Renderer 进程)中无论什么时候都只有一个 JavaScript 线程在运行 JavaScript 程序</li>\n<li>同样注意，GUI 渲染线程与 JavaScript 引擎线程是互斥的，所以如果 JavaScript 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。</li>\n</ul>\n</li>\n<li>事件触发线程\n<ul>\n<li>归属于浏览器而不是 JavaScript 引擎，用来控制事件循环(可以理解，JavaScript引擎自己都忙不过来，需要浏览器另开线程协助)</li>\n<li>当 JavaScript 引擎执行代码块如 SetTimeOut 时(也可来自浏览器内核的其他线程,如鼠标点击、AJAX异步请求等)，会将对应任务添加到事件线程中。</li>\n<li>当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待 JavaScript 引擎的处理</li>\n<li>注意，由于 JavaScript 的单线程关系，所以这些待处理队列中的事件都得排队等待 JavaScript 引擎处理(当 JavaScript 引擎空闲时才会去执行)</li>\n</ul>\n</li>\n<li>定时触发器线程\n<ul>\n<li>传说中的 SetInterval 与 SetTimeout 所在的线程</li>\n<li>浏览器定时计数器并不是由 JavaScript 引擎计数的，因为 JavaScript 引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确</li>\n<li>因此通过单独线程来计时并触发定时，计时完毕后，添加到事件队列中，等待 JavaScript 引擎空闲后执行)</li>\n<li>注意，W3C 在 HTML 标准中规定，规定要求 SetTimeout 中低于 4ms 的时间间隔算为 4ms。</li>\n</ul>\n</li>\n<li>网络请求线程/异步 HTTP 请求线程\n<ul>\n<li>每次网络请求时都需要开辟单独的线程，开启网络线程到发出一个完整的 HTTP 请求过程中包括：dns 查询、TCP/IP 请求构建、五层因特网协议栈等</li>\n<li>在 XMLHttpRequest 在连接后是通过浏览器新开一个线程请求\n将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中，再由 JavaScript 引擎执行。</li>\n</ul>\n</li>\n</ul>\n<p>浏览器内核中线程之间的关系：</p>\n<ul>\n<li>GUI 渲染线程与 JavaScript 引擎线程互斥\n<ul>\n<li>由于 JavaScript 是可操纵 DOM 的，如果在修改这些元素属性同时渲染界面(即 JavaScript 线程和 UI 线程同时运行)，那么渲染线程前后获得的元素数据就可能不一致了。</li>\n<li>因此为了防止渲染出现不可预期的结果，浏览器设置 GUI 渲染线程与 JavaScript 引擎为互斥的关系，当 JavaScript 引擎执行时 GUI 线程会被挂起，GUI 更新则会被保存在一个队列中等到 JavaScript 引擎线程空闲时立即被执行。</li>\n</ul>\n</li>\n<li>JavaScript 阻塞页面加载\n<ul>\n<li>JavaScript 如果执行时间过长就会阻塞页面。譬如，假设 JavaScript 引擎正在进行巨量的计算，此时就算 GUI 有更新，也会被保存到队列中，等待 JavaScript 引擎空闲后执行。然后，由于巨量计算，所以 JavaScript 引擎很可能很久很久后才能空闲，自然会感觉到巨卡无比。</li>\n</ul>\n</li>\n</ul>\n<p>WebWorker，JavaScript 的多线程</p>\n<ul>\n<li>WebWorker 的 MDN 官方解释如下：\n<ul>\n<li>Web Worker 为 Web 内容在后台线程中运行脚本提供了一种简单的方法。线程可以执行任务而不干扰用户界面。</li>\n<li>一个 Worker 是使用一个构造函数创建的一个对象(e.g. Worker()) 运行一个命名的 JavaScript 文件</li>\n<li>这个文件包含将在工作线程中运行的代码 Workers 运行在另一个全局上下文中,不同于当前的 Window</li>\n<li>因此，使用 Window 快捷方式获取当前全局的范围(而不是 self) 在一个 Worker 内将返回错误</li>\n</ul>\n</li>\n<li>JavaScript 引擎是单线程的，这一点的本质仍然未改变。如果有非常耗时的工作，请单独开一个 Worker 线程。\n<ul>\n<li>创建 Worker 时，JavaScript 引擎向浏览器申请开一个子线程。子线程是浏览器开的，完全受主线程控制，而且不能操作DOM</li>\n<li>JavaScript 引擎线程与 Worker 线程间通过特定的方式通信(postMessage API，需要通过序列化对象来与线程交互特定的数据)</li>\n</ul>\n</li>\n<li>WebWorker 与 SharedWorked\n<ul>\n<li>WebWorker 只属于某个页面，不会和其他页面的 Render 进程(浏览器内核进程)共享\n<ul>\n<li>所以 Chrome 在 Render 进程中创建一个新的线程来运行 Worker 中的 JavaScript 程序</li>\n</ul>\n</li>\n<li>SharedWorker 是浏览器所有页面共享的，不能采用与 Worker 同样的方式实现，因为它不隶属于某个 Render 进程，可以为多个 Render 进程共享使用\n<ul>\n<li>所以 Chrome 浏览器为 SharedWorker 单独创建一个进程来运行 JavaScript 程序，在浏览器中每个相同的 JavaScript 只存在一个 SharedWorker 进程，不管它被创建多少次。</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<p>网络线程静态资源下载：这里将遇到的静态资源分为一下几大类(未列举所有)：CSS样式资源、JS脚本资源、img图片类资源。</p>\n<ul>\n<li>遇到 CSS 样式资源\n<ul>\n<li>CSS 下载时异步，不会阻塞浏览器构建 DOM 树</li>\n<li>但是会阻塞渲染，也就是在构建 render 时，会等到 CSS 下载解析完毕后才进行(这点与浏览器优化有关，防止 CSS 规则不断改变，避免了重复的构建)</li>\n<li>有例外，media query 声明的 CSS 是不会阻塞渲染的</li>\n</ul>\n</li>\n<li>遇到 JS 脚本资源\n<ul>\n<li>阻塞浏览器的解析，也就是说发现一个外链脚本时，需等待脚本下载完成并执行后才会继续解析 HTML</li>\n<li>浏览器的优化，一般现代浏览器有优化，在脚本阻塞时，也会继续下载其它资源(当然有并发上限)，但是虽然脚本可以并行下载，解析过程仍然是阻塞的，也就是说必须这个脚本执行完毕后才会接下来的解析，并行下载只是一种优化而已</li>\n<li>defer 与 async，普通的脚本是会阻塞浏览器解析的，但是可以加上 defer 或 async 属性，这样脚本就变成异步了，可以等到解析完毕后再执行。注意，defer 和 async 是有区别的：\n<ul>\n<li>async 是异步执行，异步下载完毕后就会执行，不确保执行顺序，一定在 onload 前，但不确定在 DOMContentLoaded 事件的前或后</li>\n<li>defer 是延迟执行，在浏览器看起来的效果像是将脚本放在了 body 后面一样(虽然按规范应该是在 DOMContentLoaded 事件前，但实际上不同浏览器的优化效果不一样，也有可能在它后面)</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>遇到 img 图片类资源：遇到图片等资源时，直接就是异步下载，不会阻塞解析，下载完毕后直接用图片替换原有 src 的地方。</li>\n</ul>\n<p>loaded 和 domcontentloaded</p>\n<ul>\n<li>DOMContentLoaded 事件触发时，仅当 DOM 加载完成，不包括样式表，图片(譬如如果有 async 加载的脚本就不一定完成)</li>\n<li>load 事件触发时，页面上所有 DOM，样式表，脚本，图片都已经加载完成了。</li>\n</ul>\n<h2 id="%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7%E6%9C%89%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E7%9A%84">浏览器兼容性有什么需要注意的？<a class="anchor" href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7%E6%9C%89%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E7%9A%84">§</a></h2>\n<ul>\n<li>\n<p>在确定问题原因和有问题的浏览器后，使用单独的样式表，仅供出现问题的浏览器加载。这种方法需要使用服务器端渲染。</p>\n</li>\n<li>\n<p>使用已经处理好此类问题的库，比如 BootStrap。</p>\n</li>\n<li>\n<p>使用 Reset CSS 或 Normalize.css。</p>\n</li>\n<li>\n<p>优雅的降级/渐进式增强，构建基于用户体验的应用，同时确保它在旧版浏览器中正常运行。</p>\n</li>\n<li>\n<p>利用 <a href="http://caniuse.com">caniuse.com</a> 检查特性支持。</p>\n</li>\n<li>\n<p>使用 autoprefixer 自动生成 CSS 属性前缀。</p>\n</li>\n<li>\n<p>使用 Modernizr 进行特性检测。Modernizr 是一套 JavaScript  库，用来侦测浏览器是否支持 HTML5 与 CSS3 等规格。如果浏览器不支持，Modernizr 会使用其他的解决方法来进行模拟。</p>\n</li>\n</ul>\n<h2 id="%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%A4%E8%BD%AE%E5%A4%A7%E6%88%98%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88">浏览器两轮大战发生了什么？<a class="anchor" href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%A4%E8%BD%AE%E5%A4%A7%E6%88%98%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88">§</a></h2>\n<ul>\n<li>第一轮概要，Netscape 对抗新 IE\n<ul>\n<li>围绕在二十世纪末期——人们开始注意到万维网</li>\n<li>当时市场及网页浏览标准以 Netscape 主导。Netscape 曾改进了史前浏览器 Mosaic 的实用性和稳定性，并在网络上提供免费试用版。</li>\n<li>用户界面友好的微软公司争取到 Mosaic 授权，IE 浏览器登场。</li>\n<li>IE 浏览器从技术层面通过最先支持 CSS、新增网页动态加载及图片位置改变等优势，逐步提高了市场占有率。</li>\n<li>一场要求网页无论使用 IE 或 Netscape 均能正常浏览的 “可用任何浏览器浏览”（Viewable With Any Browser）运动悄然崛起。</li>\n<li>微软公司使用诸多商业手段与公司规模较小的 Netscape 公司争抢浏览器用户。</li>\n<li>Netscape 浏览器市场占用率从 90% 跌至 IE 占有率之下。</li>\n<li>Netscape 公司落败，被美国在线公司收购。</li>\n</ul>\n</li>\n<li>第二轮概要，旧 IE 对抗各大新浏览器\n<ul>\n<li>IE 浏览器寡占市场，暴露问题：使用专属格式，不尊重网页公开标准；由于高占有率，成为电脑蠕虫病毒攻击的主要目标之一。</li>\n</ul>\n</li>\n</ul>\n<ul>\n<li>Netscape 浏览器衰落之时开发浏览器源码，酝酿出安全性较高的 Firefox 浏览器。</li>\n<li>2012 年报告，Chrome 市场占有率达 33%，超过 IE 浏览器，成为全球第一大。</li>\n</ul>\n<ul>\n<li>总结，使用尽可能新的浏览器\n<ul>\n<li>第一，旧版浏览器通常无法更新最新的安全补丁和功能，因而极易受到攻击。</li>\n<li>第二，网络的发展十分迅速。旧版浏览器可能无法支持当今网站和网络应用程序中的许多最\n新功能。</li>\n<li>第三，旧版浏览器阻碍了网络创新的步伐。如果大量的互联网用户都墨守旧版浏览器，网络\n开发人员就不得不在设计网站时兼顾新旧技术。</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8%E7%9A%84%E6%B8%B2%E6%9F%93%E6%9C%BA%E5%88%B6">浏览器内核的渲染机制？<a class="anchor" href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8%E7%9A%84%E6%B8%B2%E6%9F%93%E6%9C%BA%E5%88%B6">§</a></h2>\n<ul>\n<li>\n<p>解析 HTML，构建 DOM 树</p>\n<ul>\n<li><code>Bytes → characters → tokens → nodes → DOM</code></li>\n<li>Conversion 转换：浏览器将获得的 HTML 内容(Bytes)基于他的编码转换为单个字符</li>\n<li>Tokenizing 分词：浏览器按照 HTML 规范标准将这些字符转换为不同的标记 token。每个 token 都有自己独特的含义以及规则集</li>\n<li>Lexing 词法分析：分词的结果是得到一堆的 token，此时把他们转换为对象，这些对象分别定义他们的属性和规则</li>\n<li>DOM 构建：因为 HTML 标记定义的就是不同标签之间的关系，这个关系就像是一个树形结构一样。\n例如：body 对象的父节点就是 HTML 对象，然后段略 p 对象的父节点就是 body 对象</li>\n</ul>\n</li>\n<li>\n<p>解析 CSS，生成 CSS 规则树</p>\n<ul>\n<li><code>Bytes → characters → tokens → nodes → CSSOM</code></li>\n</ul>\n</li>\n<li>\n<p>合并 DOM 树和 CSS 规则，生成 render 树</p>\n<ul>\n<li>一般来说，渲染树和 DOM 树相对应的，但不是严格意义上的一一对应。因为有一些不可见的DOM元素不会插入到渲染树中，如 head 这种不可见的标签或者 <code>display: none</code> 等。</li>\n</ul>\n</li>\n<li>\n<p>渲染过程：</p>\n<ul>\n<li>计算CSS样式</li>\n<li>构建渲染树</li>\n<li>布局，主要定位坐标和大小，是否换行，各种 position overflow z-index 属性【布局 render 树(Layout/reflow)，负责各元素尺寸、位置的计算】</li>\n<li>绘制，将图像绘制出来【绘制 render 树(paint)，绘制页面像素信息】</li>\n<li>浏览器会将各层的信息发送给 GPU，GPU 会将各层合成(composite)，显示在屏幕上。</li>\n</ul>\n</li>\n<li>\n<p>回流和重绘</p>\n<ul>\n<li>Layout，也称为 Reflow，即回流。一般意味着元素的内容、结构、位置或尺寸发生了变化，需要重新计算样式和渲染树</li>\n<li>Repaint，即重绘。意味着元素发生的改变只是影响了元素的一些外观之类的时候（例如，背景色，边框颜色，文字颜色等），此时只需要应用新样式绘制这个元素就可以了</li>\n<li>回流的成本开销要高于重绘，而且一个节点的回流往往回导致子节点以及同级节点的回流，所以优化方案中一般都包括，尽量避免回流。回流一定伴随着重绘，重绘却可以单独出现。</li>\n<li>什么引起回流\n<ul>\n<li>页面渲染初始化</li>\n<li>DOM 结构改变，比如删除了某个节点</li>\n<li>render 树变化，比如减少了 padding</li>\n<li>窗口 resize</li>\n<li>改变字体大小会引发回流</li>\n<li>最复杂的一种：获取某些属性，引发回流，\n很多浏览器会对回流做优化，会等到数量足够时做一次批处理回流，\n但是除了 render 树的直接变化，当获取一些属性时，浏览器为了获得正确的值也会触发回流，这样使得浏览器优化无效，包括 <code>offset(Top/Left/Width/Height); scroll(Top/Left/Width/Height); cilent(Top/Left/Width/Height); width,height; 调用了 getComputedStyle() 或者 IE 的 currentStyle;</code></li>\n</ul>\n</li>\n<li>回流优化方案：\n<ul>\n<li>减少逐项更改样式，最好一次性更改 style，或者将样式定义为 class 并一次性更新</li>\n<li>避免循环操作 DOM，创建一个 documentFragment 或 div，在它上面应用所有 DOM 操作，最后再把它添加到window.document</li>\n<li>避免多次读取 offset 等属性。无法避免则将它们缓存到变量</li>\n<li>将复杂的元素绝对定位或固定定位，使得它脱离文档流，否则回流代价会很高</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>\n<p>普通图层和混合图层</p>\n<ul>\n<li>可以认为默认只有一个复合图层，所有的 DOM 节点都是在这个复合图层下的</li>\n<li>如果开启了硬件加速功能，可以将某个节点变成复合图层</li>\n<li>复合图层之间的绘制互不干扰，由 GPU 直接控制</li>\n<li>而简单图层中，就算是 absolute 等布局，变化时不影响整体的回流，但是由于在同一个图层中，仍然是会影响绘制的，因此做动画时性能仍然很低。而复合层是独立的，所以一般做动画推荐使用硬件加速。</li>\n</ul>\n</li>\n<li>\n<p>硬件加速变成复合图层：经测试，除了上述可以引发硬件加速的属性外，其它属性并不会变成复合层。</p>\n<ul>\n<li>最常用的方式：translate3d、translateZ</li>\n<li>opacity 属性/过渡动画（需要动画执行的过程中才会创建合成层，动画没有开始或结束后元素还会回到之前的状态）</li>\n<li>will-chang 属性，一般配合 opacity 与 translate 使用</li>\n</ul>\n</li>\n<li>\n<p>absolute 和硬件加速的区别</p>\n<ul>\n<li>absolute 虽然可以脱离普通文档流，但是无法脱离默认复合层。所以，就算 absolute 中信息改变时不会改变普通文档流中 render 树，但浏览器最终绘制时，是整个复合层绘制的，absolute 中信息的改变仍然会影响整个复合层的绘制。</li>\n<li>硬件加速直接就是在另一个复合层了，所以它的信息改变不会影响默认复合层。</li>\n</ul>\n</li>\n<li>\n<p>复合层的作用？：一般一个元素开启硬件加速后会变成复合图层，可以独立于普通文档流中，改动后可以避免整个页面重绘，提升性能。</p>\n</li>\n<li>\n<p>硬件加速时请使用 index。使用硬件加速时，尽可能的使用index，防止浏览器默认给后续的元素创建复合层渲染。如果a是一个复合图层，而且b在a上面，那么b也会被隐式转为一个复合图层，这点需要特别注意。</p>\n</li>\n</ul>\n<h2 id="javascript-%E7%9A%84%E5%BC%95%E6%93%8E%E6%9C%89%E5%93%AA%E4%BA%9B%E5%8F%8A%E5%85%B6%E7%89%B9%E7%82%B9">JavaScript 的引擎有哪些及其特点？<a class="anchor" href="#javascript-%E7%9A%84%E5%BC%95%E6%93%8E%E6%9C%89%E5%93%AA%E4%BA%9B%E5%8F%8A%E5%85%B6%E7%89%B9%E7%82%B9">§</a></h2>\n<ul>\n<li>\n<p>KJS 引擎，与早期 KHTML 引擎相配</p>\n<ul>\n<li>与早期 KHTML 排版引擎相配的，还有用来解析 JavaScript 的 KJS 引擎。KJS 同样由 KDE 社区开发。其后因为 Webkit 作为分支的诞生，逐步被可以直接将 JS 代码编译为原生机器码的 JavaScriptCore 引擎替代。JavaScriptCore 引擎成为了 Webkit 中的一个重要组件。</li>\n</ul>\n</li>\n<li>\n<p>Chakra，运行在 IE9+ 上</p>\n<ul>\n<li>Chakra 引擎(又称 JScript 引擎)是由微软为 IE9+ 版本开发的 JavaScript 引擎，在一个独立的 CPU 核心上即时编译脚本，与浏览器并行。在 2009 年 11 月 18 日举行的 SunSpider 测试展示了 IE9 的 PDC 版本对脚本的执行远快于 IE8，但是仍然慢于 Firefox 3.5、Google Chrome 4 和 Safari 4。</li>\n</ul>\n</li>\n<li>\n<p>ChakraCore，运行在 Microsoft Edge 上</p>\n<ul>\n<li>Chakra是由微软为其Microsoft Edge网页浏览器开发的JavaScript引擎。它是Internet Explorer中使用的JScript引擎的一个分支。</li>\n</ul>\n</li>\n<li>\n<p>V8 引擎，运行在 Chrome、Node.JS 上</p>\n<ul>\n<li>V8 由 Google 公司开发，是开源的 JavaScript 引擎。V8 在运行之前将 JavaScript 编译成了机器码，而非字节码或是解释执行它，以此提升性能。基于 V8 引擎对 JavaScript 的高性能解析，Node.js 也选择了 V8 引擎作为其在服务端解析 JavaScript 的首选引擎，促进了前端的蓬勃发展。</li>\n</ul>\n</li>\n<li>\n<p>JavaScriptCore 引擎</p>\n<ul>\n<li>浏览器下载的顺序是从上到下，渲染的顺序也是从上到下，下载和渲染是同时进行的。</li>\n</ul>\n<ul>\n<li>在渲染到页面的某一部分时，其上面的所有部分都已经下载完成（并不是说所有相关联的元素都已经下载完，比如图片）。</li>\n<li>如果遇到语义解释性的标签嵌入文件（JS脚本，CSS样式），那么此时IE的下载过程会启用单独连接进行下载。</li>\n<li>并且在下载后进行解析，解析过程中，停止页面所有往下元素的下载。此时渲染会被阻塞，必须等js、或css资源文件加载并解析完成之后才会继续后面的渲染</li>\n<li>样式表在下载完成后，将和以前下载的所有样式表一起进行解析，解析完成后，将对此前所有元素(含以前已经渲染的)重新进行渲染。重新渲染是很耗费性能的，如果可以，尽量把所有的 CSS 样式文件都在 <code>&lt;head&gt;</code> 里面，实在不行，把首屏的 CSS 样式内嵌在页面中，加快首屏显示速度，提升用户体验。</li>\n</ul>\n</li>\n</ul>\n<h2 id="javascript-%E5%BC%95%E6%93%8E%E8%A7%A3%E6%9E%90%E8%BF%87%E7%A8%8B">JavaScript 引擎解析过程<a class="anchor" href="#javascript-%E5%BC%95%E6%93%8E%E8%A7%A3%E6%9E%90%E8%BF%87%E7%A8%8B">§</a></h2>\n<ul>\n<li>JavaScript 的解析阶段\n<ul>\n<li>JavaScript 是解释型语音，所以它无需提前编译，而是由解释器实时运行。引擎对 JavaScript 的处理过程可以简述如下：\n<ol>\n<li>读取代码，进行词法分析 Lexical analysis，然后将代码分解成词元 token</li>\n<li>对词元进行语法分析 parsing，然后将代码整理成语法树 syntax tree</li>\n<li>使用翻译器 translator，将代码转为字节码 bytecode</li>\n<li>使用字节码解释器 bytecode interpreter，将字节码转为机器码</li>\n<li>总结：核心的 JIT 编译器将源码编译成机器码运行</li>\n</ol>\n</li>\n<li>最终计算机执行的就是机器码。为了提高运行速度，现代浏览器一般采用即时编译 JIT-Just In Time compiler，即字节码只在运行时编译，用到哪一行就编译哪一行，并且把编译结果缓存 inline cache，这样整个程序的运行速度能得到显著提升。</li>\n<li>不同浏览器策略可能还不同，有的浏览器就省略了字节码的翻译步骤，直接转为机器码，如 Chrome 的 V8。</li>\n</ul>\n</li>\n<li>JavaScript 的预处理阶段：正式执行 JavaScript 前，还会有一个预处理阶段。\n<ul>\n<li>分号补全机制：JavaScript 解释器有一个 Semicolon Insertion 规则，它会按照一定规则，在适当的位置补充分号。\n<ul>\n<li>加分号规则：\n<ul>\n<li>当有换行符，包括含有换行符的多行注释，并且下一个 token 没法跟前面的语法匹配时，会自动补分号。</li>\n<li>当有 } 时，如果缺少分号，会补分号。</li>\n<li>程序源代码结束时，如果缺少分号，会补分号。</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>变量提升机制：一般包括函数提升和变量提升。\n<ul>\n<li>变量声明，函数声明，形参，实参的优先级顺序，以及 es6 中 let 有关的临时死区、var conost let 等</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>JavaScript 的执行阶段\n<ul>\n<li>执行上下文\n<ul>\n<li>JavaScript 有执行上下文</li>\n<li>浏览器首次载入脚本，它将创建全局执行上下文，并压入执行栈栈顶，不可被弹出</li>\n<li>然后每进入其它作用域就创建对应的执行上下文并把它压入执行栈的顶部</li>\n<li>一旦对应的上下文执行完毕，就从栈顶弹出，并将上下文控制权交给当前的栈。</li>\n<li>这样依次执行，最终都会回到全局执行上下文</li>\n</ul>\n<ul>\n<li>譬如，如果程序执行完毕，被弹出执行栈，然后有没有被引用，没有形成闭包，那么这个函数中用到的内存就会被垃圾处理器自动回收。</li>\n<li>每一个执行上下文，都有三个重要属性：变量对象(Variable object，VO)、作用域链(Scope chain)、this</li>\n</ul>\n</li>\n<li>VO 与 AO\n<ul>\n<li>VO 是执行上下文的属性(抽象概念)，但是只有全局上下文的变量对象允许通过 VO 的属性名称来间接访问(因为在全局上下文里，全局对象自身就是变量对象)。AO(activation object)，当函数被调用者激活，AO 就被创建了。</li>\n<li>在函数上下文中：VO === AO</li>\n<li>在全局上下文中：VO === this === global</li>\n<li>总的来说，VO中会存放一些变量信息（如声明的变量，函数，arguments参数等等）</li>\n</ul>\n</li>\n<li>作用域链，它是执行上下文中的一个属性，原理和原型链很相似，作用很重要。流程\n<ul>\n<li>在函数上下文中，查找一个变量 foo</li>\n<li>如果函数的 VO 中找到了，就直接使用</li>\n<li>否则去它的父级作用域链中(parent)找</li>\n<li>如果父级中没找到，继续往上找</li>\n<li>直到全局上下文中也没找到就报错</li>\n</ul>\n</li>\n<li>this 指针\n<ul>\n<li>this 是执行上下文环境的一个属性，而不是某个变量对象的属性。</li>\n</ul>\n<ul>\n<li>this 是没有一个类似搜寻变量的过程</li>\n<li>当代码中使用了 this，这个 this 的值就直接从执行的上下文中获取了，而不会从作用域链中搜寻</li>\n<li>this 的值只取决中进入上下文时的情况</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>JavaScript 回收机制：JavaScript 有垃圾处理器，所以无需手动回收内存，而是由垃圾处理器自动处理。常用的两种垃圾回收规则是：标记清除和引用计数。\n<ul>\n<li>标记清除：JavaScript 引擎基础 GC 方案是(Simple GC)：mark and sweep 标记清除，简单解释如下：\n<ul>\n<li>遍历所有可访问的对象。</li>\n<li>回收已不可访问的对象。</li>\n</ul>\n</li>\n<li>引用计数：跟踪记录每个值被引用的次数，当一个值被引用时，次数 +1，减持时 -1，下次垃圾回收器会回收次数为 0 的值的内存(容易出循环引用的bug)。</li>\n<li>GC 的缺陷：GC 时，停止响应其他操作，这是为了安全考虑。Javascript 的 GC 在 100ms 甚至以上。对一般的应用还好，但对于 JavaScript 游戏，动画对连贯性要求比较高的应用，就麻烦了。</li>\n<li>GC 优化策略：Generation GC 分代回收机制目前是通过区分“临时”与“持久”对象：\n<ul>\n<li>多回收“临时对象”区（young generation）</li>\n<li>少回收“持久对象”区（tenured generation）</li>\n<li>减少每次需遍历的对象，从而减少每次 GC 的耗时</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E6%B2%99%E7%9B%92%E6%A8%A1%E5%9E%8B">什么是浏览器的沙盒模型？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E6%B2%99%E7%9B%92%E6%A8%A1%E5%9E%8B">§</a></h2>\n<blockquote>\n<p>内容安全策略 (CSP, Content Security Policy) 是一个附加的安全层，用于帮助检测和缓解某些类型的攻击，包括跨站脚本 (XSS) 和数据注入等攻击。 这些攻击可用于实现从数据窃取到网站破坏或作为恶意软件分发版本等用途。</p>\n</blockquote>\n<p>例如，“Google Chrome 浏览器”采用了“安全浏览”技术，这种技术也应用于其他几种现代浏览器。当您浏览网页时，浏览器会将每个网页与疑似存在网上诱骗和恶意软件的网站列表进行快速比对。这个列表会在您的本地计算机上进行存储和维护，从而帮助您保护浏览隐私。如果从本地列表中找到了匹配项，浏览器就会向 Google 发送一条请求，以获取更多信息。（这条请求是完全加密的，不会以纯文本形式发送。）如果 Google 通过验证确定是匹配项，“Chrome 浏览器”就会显示一个红色警告页面，提醒您尝试访问的网页可能存在风险。浏览器获取和载入网站时，如何通过扩展验证证书验证网站的身份。</p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E7%82%B9">浏览器有什么特点？</a></li><li><a href="#%E5%B8%B8%E8%A7%81%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8%E5%8F%8A%E5%85%B6%E7%BB%84%E6%88%90">常见浏览器内核及其组成？</a></li><li><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86%E4%B8%8E%E5%85%B3%E9%94%AE%E6%B8%B2%E6%9F%93%E8%B7%AF%E5%BE%84">浏览器的渲染原理与关键渲染路径？</a></li><li><a href="#%E5%90%8C%E6%BA%90%E7%AD%96%E7%95%A5%E7%9A%84%E5%8E%9F%E7%90%86%E4%B8%8E%E6%80%8E%E4%B9%88%E8%A7%A3%E5%86%B3%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98">同源策略的原理与怎么解决跨域问题？</a></li><li><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E5%A4%9A%E8%BF%9B%E7%A8%8B%E4%B8%8E%E5%86%85%E6%A0%B8%E7%9A%84%E5%A4%9A%E7%BA%BF%E7%A8%8B%E6%9C%BA%E5%88%B6">浏览器的多进程与内核的多线程机制？</a></li><li><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7%E6%9C%89%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E7%9A%84">浏览器兼容性有什么需要注意的？</a></li><li><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%A4%E8%BD%AE%E5%A4%A7%E6%88%98%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88">浏览器两轮大战发生了什么？</a></li><li><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8%E7%9A%84%E6%B8%B2%E6%9F%93%E6%9C%BA%E5%88%B6">浏览器内核的渲染机制？</a></li><li><a href="#javascript-%E7%9A%84%E5%BC%95%E6%93%8E%E6%9C%89%E5%93%AA%E4%BA%9B%E5%8F%8A%E5%85%B6%E7%89%B9%E7%82%B9">JavaScript 的引擎有哪些及其特点？</a></li><li><a href="#javascript-%E5%BC%95%E6%93%8E%E8%A7%A3%E6%9E%90%E8%BF%87%E7%A8%8B">JavaScript 引擎解析过程</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E6%B2%99%E7%9B%92%E6%A8%A1%E5%9E%8B">什么是浏览器的沙盒模型？</a></li></ol></nav>'
        } })
};
