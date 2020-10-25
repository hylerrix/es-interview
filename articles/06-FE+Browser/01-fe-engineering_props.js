import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "title": "浏览器",
        "link": "articles/06-FE+Browser/00-browser.html"
    },
    'next': {
        "title": "前端工具链",
        "link": "articles/06-FE+Browser/02-fe-tooltain.html"
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
    'pagePath': "articles/06-FE+Browser/01-fe-engineering.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/06-FE+Browser/01-fe-engineering.html",
    'title': "前端工程化",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>前端工程化</h1>\n<h2 id="%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84">前端架构<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84">§</a></h2>\n<ul>\n<li>SSR、SPA、双向绑定、懒加载、MVVM：Proxy 与 object.defineProperty</li>\n</ul>\n<h2 id="mv-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B8%8E%E6%A1%86%E6%9E%B6">MV* 设计模式与框架？<a class="anchor" href="#mv-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B8%8E%E6%A1%86%E6%9E%B6">§</a></h2>\n<ul>\n<li>MV* 框架\n<ul>\n<li>MVC：模型、视图、控制器</li>\n<li>MVP：模型、视图、表示器</li>\n<li>MVVM：模型、视图、视图模型</li>\n</ul>\n</li>\n<li>为什么要使用 MV* 框架：关注点分离、简化日常任务、提升生产率、标准化、更高效的合作、独立代码更容易更改、更干净的单元测试。</li>\n<li>MVVM：它萌芽于2005年微软推出的基于 Windows 的用户界面框架 WPF ，前端最早的 MVVM 框架 knockout 在2010年发布。\n<ul>\n<li>分层：\n<ul>\n<li>Model 层：对应数据层的域模型，它主要做域模型的同步。通过 Ajax/fetch 等 API 完成客户端和服务端业务 Model 的同 步。在层间关系里，它主要用于抽象出 ViewModel 中视图的 Model。</li>\n<li>View 层：为视图模板存在，在 MVVM 里，整个 View 是一个动态模板。除了定义结构、布局外，它展示的是 ViewModel 层的数据和状态。View 层不负责处理状态，View 层做的是 数据绑定的声明、 指令的声明、 事件绑定的声 明。</li>\n<li>ViewModel 层：把 View 需要的层数据暴露，并对 View 层的 数据绑定声明、 指令声明、 事件绑定声明负责，也就是处理 View 层的具体业务逻辑。ViewModel 底层会做好绑定属性的监听。当 ViewModel 中数据变化，View 层会得到更 新;而当 View 中声明了数据的双向绑定(通常是表单元素)，框架也会监听 View 层(表单)值的变化。一旦值变 化，View 层绑定的 ViewModel 中的数据也会得到自动更新。</li>\n</ul>\n</li>\n<li>优点：\n<ul>\n<li>分离视图(View)和模型(Model),降低代码耦合，提高视图或者逻辑的重用性: 比如视图(View)可以独立于 Model变化和修改，一个ViewModel可以绑定不同的&quot;View&quot;上，当View变化的时候Model不可以不变，当Model变化 的时候View也可以不变。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑</li>\n<li>提高可测试性: ViewModel的存在可以帮助开发者更好地编写测试代码</li>\n<li>自动更新dom: 利用双向绑定,数据更新后视图自动更新,让开发者从繁琐的手动dom中解放</li>\n</ul>\n</li>\n<li>缺点：\n<ul>\n<li>Bug很难被调试: 因为使用双向绑定的模式，当你看到界面异常了，有可能是你View的代码有Bug，也可能是Model 的代码有问题。数据绑定使得一个位置的Bug被快速传递到别的位置，要定位原始出问题的地方就变得不那么容易 了。另外，数据绑定的声明是指令式地写在View的模版当中的，这些内容是没办法去打断点debug的</li>\n<li>一个大的模块中model也会很大，虽然使用方便了也很容易保证了数据的一致性，当时⻓期持有，不释放内存就造 成了花费更多的内存</li>\n<li>对于大型的图形应用程序，视图状态较多，ViewModel的构建和维护的成本都会比较高</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E4%B8%8D%E5%90%8C%E5%9C%BA%E6%99%AF%E4%B8%8B%E5%89%8D%E7%AB%AF%E9%9B%86%E6%88%90%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E6%9C%89%E4%BB%80%E4%B9%88%E6%80%9D%E8%B7%AF">不同场景下前端集成的解决方案有什么思路？<a class="anchor" href="#%E4%B8%8D%E5%90%8C%E5%9C%BA%E6%99%AF%E4%B8%8B%E5%89%8D%E7%AB%AF%E9%9B%86%E6%88%90%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E6%9C%89%E4%BB%80%E4%B9%88%E6%80%9D%E8%B7%AF">§</a></h2>\n<h2 id="%E5%89%8D%E7%AB%AF%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8D%B3%E6%97%B6%E9%80%9A%E4%BF%A1">前端如何实现即时通信？<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8D%B3%E6%97%B6%E9%80%9A%E4%BF%A1">§</a></h2>\n<ul>\n<li>短轮询：每隔一段时间客户端就发出一个请求，去获取服务器最新的数据，一定程度上模拟实现了及时通信。\n<ul>\n<li>优点：兼容性强，实现非常简单。</li>\n<li>缺点：延迟性高，非常消耗请求资源，影响性能。</li>\n</ul>\n</li>\n<li>Comet：\n<ul>\n<li>基于 AJAX 的长轮询：\n<ul>\n<li>优点：兼容性好，资源浪费较小。</li>\n<li>缺点：服务器 hold 连接会消耗资源，返回数据顺序无保证，难于管理维护。</li>\n</ul>\n</li>\n<li>基于 iframe 及 htmlfile 的流方式（streaming）</li>\n</ul>\n</li>\n<li>SSE（Server-Sent Event），服务端推送事件：\n<ul>\n<li>优点：基于 HTTP 而生，因此不需要太多改造就能使用，使用方便</li>\n<li>缺点：基于文本传输效率没有 WebSocket 高，不是严格的双向通信，客户端向服务端发送请求无法复用之前的连接，需要重新发出独立的请求。</li>\n</ul>\n</li>\n<li>WebSocket：全新、独立的协议，基于 TCP 协议，与 HTTP 协议兼容，却不会融入 HTTP 协议，仅仅作为 HTML5 的一部分，其作用就是在服务器和客户端之间建立实时的双向通信。\n<ul>\n<li>优点：真正意义上的双向通信，性能好、延迟低</li>\n<li>缺点：独立于 HTTP 协议，因此需要额外的项目改造，使用复杂度高，必须引入成熟的库，无法兼容低版本浏览器。</li>\n</ul>\n</li>\n<li>Web Worker：为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运。</li>\n<li>Service Worker：本质上充当Web应用程序与浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理，创建有效的离线体验。</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E5%89%8D%E7%AB%AF%E5%BE%AE%E6%9C%8D%E5%8A%A1">如何理解前端微服务？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E5%89%8D%E7%AB%AF%E5%BE%AE%E6%9C%8D%E5%8A%A1">§</a></h2>\n<h2 id="%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">前端性能优化<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">§</a></h2>\n<ul>\n<li>图片懒加载？</li>\n<li>给页面注入50万个li怎么做提升性能？</li>\n<li>Base64</li>\n</ul>\n<blockquote>\n<p>网页很卡的原因</p>\n</blockquote>\n<ul>\n<li>带宽不足、硬件配置低、CPU 或者是内存被占满。</li>\n<li>HTTP 请求次数太多。</li>\n<li>接收数据时间过长，如下载资源过大。</li>\n<li>JS 脚本过大，阻塞了页面的加载。</li>\n<li>网页资源过多、接受数据时间长、加载某个资源慢。</li>\n<li>DNS 解析速度。</li>\n</ul>\n<blockquote>\n<p>性能优化的方法</p>\n</blockquote>\n<ul>\n<li>资源压缩、文件合并</li>\n<li>非核心代码异步加载（script 标签的 defer 和 async 属性）</li>\n<li>资源预加载：预解析DNS</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF%E9%83%A8%E7%BD%B2">前端部署<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E9%83%A8%E7%BD%B2">§</a></h2>\n<ul>\n<li>如何保证打包文件替换过程中，用户体验不断</li>\n<li>前端的多集群分布式部署？</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF--%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%89%E5%85%A8%E6%80%A7">前端 + 浏览器安全性<a class="anchor" href="#%E5%89%8D%E7%AB%AF--%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%89%E5%85%A8%E6%80%A7">§</a></h2>\n<ul>\n<li>Xss csrf</li>\n</ul>\n<h2 id="%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%BC%80%E5%8F%91">移动端开发<a class="anchor" href="#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%BC%80%E5%8F%91">§</a></h2>\n<ul>\n<li>React Native、Flutter</li>\n</ul>\n<h2 id="spa-%E5%8D%95%E9%A1%B5%E9%9D%A2%E5%BA%94%E7%94%A8%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E7%82%B9">SPA 单页面应用有什么特点？<a class="anchor" href="#spa-%E5%8D%95%E9%A1%B5%E9%9D%A2%E5%BA%94%E7%94%A8%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E7%82%B9">§</a></h2>\n<p>“网络应用”相较于“网站”，具有高度的交互性和动态性，允许用户执行操作并接收他们的操作响应。</p>\n<ul>\n<li>在过去，浏览器从服务器接收 HTML 并渲染。当用户导航到其它 URL 时，需要整页刷新，服务器会为新页面发送新的 HTML，这被称为服务器端渲染。</li>\n<li>在现代的 SPA 中，客户端渲染取而代之，浏览器从服务器加载初始页面，以及整个应用程序所需的脚本(框架、库、应用代码)和样式表。当用户导航到其他页面时，不会触发页面刷新。该页面的 URL 通过 HTML5 History API 进行更新。浏览器通过 AJAX 请求向服务器检索新页面所需的数据(通常 JSON 格式)</li>\n<li>SPA 带来了：\n<ul>\n<li>应用的表现层从服务器端脱离出来，在浏览器管理</li>\n<li>提升应用设计、代码维护和开发时间等方面的效率</li>\n<li>服务端的事务处理仅限于数据</li>\n<li>解决整页刷新、请求重复、重负荷事物处理等问题</li>\n<li>嵌入脚本</li>\n</ul>\n</li>\n</ul>\n<ul>\n<li>\n<p>好处：</p>\n<ul>\n<li>用户感知响应快，用户切换页面时，不再看到因页面刷新而导致的白屏。</li>\n<li>对服务器进行的 HTTP 请求减少，因为对于每个页面加载，不必再次下载相同的资源。</li>\n<li>客户端和服务器之间的关注点分离。可以为不同平台(手机、聊天机器人、智能手表)建立新的客户端，而无需修改服务器代码。只要 API 没有修改，可以单独修改客户端和服务器上的代码。</li>\n</ul>\n</li>\n<li>\n<p>缺点：</p>\n<ul>\n<li>由于加载了多个页面所需的框架、应用和资源，导致初始页面加载时间较长。</li>\n<li>服务器还需要进行额外的工作，需要将所有请求路由配置到单个入口点，然后由客户端接管路由。</li>\n<li>SPA 依赖于 JavaScript 来呈现内容，但并非所有搜索引擎都在抓取过程中执行 JavaScript，他们可能会在你的页面上看到空的内容。这无意中损害了应用的搜索引擎优化(SEO)。然而，当你构建应用时，大多情况下，搜索引擎优化并不是最重要的因素，因为并非所有内容都需要通过搜索引擎进行索引。为了解决这个问题，可以在服务器端渲染你的应用，或者使用诸如 Prerender 的服务来“在浏览器中呈现你的 JavaScript，保存静态 HTML，将其返回给爬虫”</li>\n</ul>\n</li>\n<li>\n<p>SPA 技术要点：</p>\n<ul>\n<li>组织项目(文件结构)</li>\n<li>创建可维护的松耦合 UI</li>\n<li>使用 JavaScript 模块</li>\n<li>执行 SPA 导航：SPA 布局 = Shell 页面 + Region 容器</li>\n<li>创建视图组成与布局</li>\n<li>模块通信：pub/sub 设计模式</li>\n<li>与服务器通信</li>\n<li>执行单元测试</li>\n<li>客户端自动化技术</li>\n</ul>\n</li>\n<li>\n<p>SPA 模型</p>\n<ul>\n<li>隐式模型：v-model、v-bind</li>\n<li>显式模型：Backbone.js</li>\n</ul>\n<ul>\n<li>模型的绑定\n<ul>\n<li>用来自由混入模板的 HTML 代码</li>\n<li>绑定类型\n<ul>\n<li>属性：ng-bind、v-bind</li>\n<li>表达式：{{ aaa }}、&lt;%= aaa %&gt;</li>\n</ul>\n</li>\n<li>定向绑定\n<ul>\n<li>单向绑定：ng-bind、v-bind</li>\n<li>单次绑定：渲染期间只发生一次</li>\n<li>双向绑定，与 UI 控件关联，采用观察者模式，需要付出开销代价：ng-model、v-model</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>\n<p>SPA 模板</p>\n<ul>\n<li>模板引擎：在 MV* 中将模板和模型数据结合起来</li>\n<li>模板：HTML 片段——可额外包含多种绑定及其他指令</li>\n<li>模板渲染</li>\n<li>模板存放位置\n<ul>\n<li>内嵌模板：SPA 初始下载，type=&quot;text/template&quot;</li>\n<li>局部模板：按需下载</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<ul>\n<li>SPA 模块：模块模式、模块化编程等</li>\n</ul>\n<h2 id="spa-%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8E%9F%E7%90%86">SPA 路由的原理？<a class="anchor" href="#spa-%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8E%9F%E7%90%86">§</a></h2>\n<ul>\n<li>客户端路由器\n<ul>\n<li>侦测浏览器位置发生的变化，监听特定事件</li>\n<li>管理 SPA 视图、数据以及业务事物状态</li>\n<li>浏览器导航控制</li>\n</ul>\n</li>\n<li>路由术语\n<ul>\n<li>名称：路由标识</li>\n<li>动词：get、put、on、when</li>\n<li>路径：URL 部分，建立路由/路由处理程序之间的链接</li>\n<li>功能：可能执行的相关代码(控制器、回调函数)</li>\n</ul>\n</li>\n<li>路由配置\n<ul>\n<li>路由语法</li>\n<li>路由配置项：当路由找到匹配 URL 时，该如何动作</li>\n<li>路由参数：在路由路径中定义的变量</li>\n<li>缺省路由</li>\n</ul>\n</li>\n<li>客户端路由器的工作机制\n<ul>\n<li>片段标识符方式，# 为前缀，使用 location 的 onhashchange 时间</li>\n<li>HTML 历史 API 方式，兼容性差，使用片段标识符作为回退方案\n<ul>\n<li>pushState、replaceState、pospstate</li>\n<li>三个参数：状态对象、标题、URL</li>\n<li>基准链接：服务器端调整(重定向)、移除 hash</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E8%99%9A%E6%8B%9F-dom-%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88">虚拟 DOM 的原理是什么？<a class="anchor" href="#%E8%99%9A%E6%8B%9F-dom-%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h2>\n<p>近年来，前端的框架主要发展方向就是解放DOM操作的复杂性。虚拟的 DOM 的核心思想是：对复杂的文档 DOM 结构，提供一种方便的工具，进行最小化地 DOM 操作。</p>\n<ul>\n<li>算法实现\n<ol>\n<li>用 JS 对象模拟 DOM 树</li>\n<li>比较两棵虚拟 DOM 树的差异</li>\n<li>把差异应用到真正的 DOM 树上</li>\n</ol>\n</li>\n<li>DOM patching，DOM 修补</li>\n<li>DOM diff</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E4%BB%80%E4%B9%88">前端性能优化需要注意什么？<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E4%BB%80%E4%B9%88">§</a></h2>\n<blockquote>\n<p>火焰图？</p>\n</blockquote>\n<ul>\n<li>最大限度地减少 HTTP 请求：</li>\n<li>使用内容分发网络</li>\n<li>headers 添加一个 Expires 或Cache-Control 头</li>\n<li>用 gzip 的压缩内容</li>\n<li>将样式表在顶部</li>\n<li>JS 代码放在底部</li>\n<li>避免使用 CSS 表达式</li>\n<li>JavaScript 和 CSS 放在外部</li>\n<li>减少 DNS 查找</li>\n<li>缩小 JavaScript 和 CSS</li>\n<li>避免重定向</li>\n<li>删除重复的脚本和样式</li>\n<li>减少 DOM 元素的数量</li>\n<li>CSS 雪碧图</li>\n<li>HTTP 缓存</li>\n<li>尽量避免回流</li>\n<li>复合层、简单层与硬件加速</li>\n<li>工程化打包</li>\n<li>复合层与性能优化</li>\n</ul>\n<p>静态资源域名拆分（HTTP 2.0 不需要）</p>\n<ul>\n<li>将静态资源分组，分别放到不同的域名下(<a href="http://xn--static-hh4k.base.com">如static.base.com</a>)</li>\n<li>而 <a href="http://page.base.com">page.base.com</a>(页面所在域名)下请求时，是不会带上 <a href="http://static.base.com">static.base.com</a> 域名的 cookie 的，所以就避免了浪费</li>\n<li>在移动端，如果请求的域名数过多，会降低请求速度(因为域名整套解析流程是很耗费时间的，而且移动端一般带宽都比不上pc)，此时就需要用到一种优化方案：dns-prefetch(让浏览器空闲时提前解析dns域名，不过也请合理使用，勿滥用)</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E5%A6%82%E4%BD%95%E9%83%A8%E7%BD%B2%E5%88%B0-cdn-%E4%B8%8A">前端项目如何部署到 CDN 上？<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E5%A6%82%E4%BD%95%E9%83%A8%E7%BD%B2%E5%88%B0-cdn-%E4%B8%8A">§</a></h2>\n<h2 id="%E5%B8%B8%E8%A7%81%E7%9A%84%E7%BB%88%E7%AB%AF%E7%BB%B4%E6%8A%A4%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E7%8A%B6%E6%80%81%E7%9A%84%E5%91%BD%E4%BB%A4%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">常见的终端维护前端项目状态的命令都有哪些。<a class="anchor" href="#%E5%B8%B8%E8%A7%81%E7%9A%84%E7%BB%88%E7%AB%AF%E7%BB%B4%E6%8A%A4%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E7%8A%B6%E6%80%81%E7%9A%84%E5%91%BD%E4%BB%A4%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">§</a></h2>\n<ul>\n<li>查看端口占用</li>\n<li>查看进程状态</li>\n<li>查看 host、nginx 状态</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF%E9%83%BD%E5%8F%AF%E4%BB%A5%E6%80%8E%E4%B9%88%E5%8E%8B%E7%BC%A9">前端都可以怎么压缩？<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E9%83%BD%E5%8F%AF%E4%BB%A5%E6%80%8E%E4%B9%88%E5%8E%8B%E7%BC%A9">§</a></h2>\n<p>GZip 压缩</p>\n<ul>\n<li>是一种压缩格式，需要浏览器支持才有效(不过一般现在浏览器都支持)， 而且 GZip 压缩效率很好(高达70%左右)</li>\n<li>然后 GZip 一般是由 Apache、Tomcat 等 Web 服务器开启</li>\n<li>服务器除了 GZip 外，也还会有其它压缩格式(如 deflate，没有 gzip 高效，且不流行)</li>\n<li>一般只需要在服务器上开启了 GZip 压缩，然后之后的请求就都是基于 GZip 压缩格式的, 非常方便。</li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-169223577-1" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u524D\u7AEF\u5DE5\u7A0B\u5316"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84">前端架构<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84">§</a></h2>\n<ul>\n<li>SSR、SPA、双向绑定、懒加载、MVVM：Proxy 与 object.defineProperty</li>\n</ul>\n<h2 id="mv-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B8%8E%E6%A1%86%E6%9E%B6">MV* 设计模式与框架？<a class="anchor" href="#mv-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B8%8E%E6%A1%86%E6%9E%B6">§</a></h2>\n<ul>\n<li>MV* 框架\n<ul>\n<li>MVC：模型、视图、控制器</li>\n<li>MVP：模型、视图、表示器</li>\n<li>MVVM：模型、视图、视图模型</li>\n</ul>\n</li>\n<li>为什么要使用 MV* 框架：关注点分离、简化日常任务、提升生产率、标准化、更高效的合作、独立代码更容易更改、更干净的单元测试。</li>\n<li>MVVM：它萌芽于2005年微软推出的基于 Windows 的用户界面框架 WPF ，前端最早的 MVVM 框架 knockout 在2010年发布。\n<ul>\n<li>分层：\n<ul>\n<li>Model 层：对应数据层的域模型，它主要做域模型的同步。通过 Ajax/fetch 等 API 完成客户端和服务端业务 Model 的同 步。在层间关系里，它主要用于抽象出 ViewModel 中视图的 Model。</li>\n<li>View 层：为视图模板存在，在 MVVM 里，整个 View 是一个动态模板。除了定义结构、布局外，它展示的是 ViewModel 层的数据和状态。View 层不负责处理状态，View 层做的是 数据绑定的声明、 指令的声明、 事件绑定的声 明。</li>\n<li>ViewModel 层：把 View 需要的层数据暴露，并对 View 层的 数据绑定声明、 指令声明、 事件绑定声明负责，也就是处理 View 层的具体业务逻辑。ViewModel 底层会做好绑定属性的监听。当 ViewModel 中数据变化，View 层会得到更 新;而当 View 中声明了数据的双向绑定(通常是表单元素)，框架也会监听 View 层(表单)值的变化。一旦值变 化，View 层绑定的 ViewModel 中的数据也会得到自动更新。</li>\n</ul>\n</li>\n<li>优点：\n<ul>\n<li>分离视图(View)和模型(Model),降低代码耦合，提高视图或者逻辑的重用性: 比如视图(View)可以独立于 Model变化和修改，一个ViewModel可以绑定不同的&quot;View&quot;上，当View变化的时候Model不可以不变，当Model变化 的时候View也可以不变。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑</li>\n<li>提高可测试性: ViewModel的存在可以帮助开发者更好地编写测试代码</li>\n<li>自动更新dom: 利用双向绑定,数据更新后视图自动更新,让开发者从繁琐的手动dom中解放</li>\n</ul>\n</li>\n<li>缺点：\n<ul>\n<li>Bug很难被调试: 因为使用双向绑定的模式，当你看到界面异常了，有可能是你View的代码有Bug，也可能是Model 的代码有问题。数据绑定使得一个位置的Bug被快速传递到别的位置，要定位原始出问题的地方就变得不那么容易 了。另外，数据绑定的声明是指令式地写在View的模版当中的，这些内容是没办法去打断点debug的</li>\n<li>一个大的模块中model也会很大，虽然使用方便了也很容易保证了数据的一致性，当时⻓期持有，不释放内存就造 成了花费更多的内存</li>\n<li>对于大型的图形应用程序，视图状态较多，ViewModel的构建和维护的成本都会比较高</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E4%B8%8D%E5%90%8C%E5%9C%BA%E6%99%AF%E4%B8%8B%E5%89%8D%E7%AB%AF%E9%9B%86%E6%88%90%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E6%9C%89%E4%BB%80%E4%B9%88%E6%80%9D%E8%B7%AF">不同场景下前端集成的解决方案有什么思路？<a class="anchor" href="#%E4%B8%8D%E5%90%8C%E5%9C%BA%E6%99%AF%E4%B8%8B%E5%89%8D%E7%AB%AF%E9%9B%86%E6%88%90%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E6%9C%89%E4%BB%80%E4%B9%88%E6%80%9D%E8%B7%AF">§</a></h2>\n<h2 id="%E5%89%8D%E7%AB%AF%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8D%B3%E6%97%B6%E9%80%9A%E4%BF%A1">前端如何实现即时通信？<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8D%B3%E6%97%B6%E9%80%9A%E4%BF%A1">§</a></h2>\n<ul>\n<li>短轮询：每隔一段时间客户端就发出一个请求，去获取服务器最新的数据，一定程度上模拟实现了及时通信。\n<ul>\n<li>优点：兼容性强，实现非常简单。</li>\n<li>缺点：延迟性高，非常消耗请求资源，影响性能。</li>\n</ul>\n</li>\n<li>Comet：\n<ul>\n<li>基于 AJAX 的长轮询：\n<ul>\n<li>优点：兼容性好，资源浪费较小。</li>\n<li>缺点：服务器 hold 连接会消耗资源，返回数据顺序无保证，难于管理维护。</li>\n</ul>\n</li>\n<li>基于 iframe 及 htmlfile 的流方式（streaming）</li>\n</ul>\n</li>\n<li>SSE（Server-Sent Event），服务端推送事件：\n<ul>\n<li>优点：基于 HTTP 而生，因此不需要太多改造就能使用，使用方便</li>\n<li>缺点：基于文本传输效率没有 WebSocket 高，不是严格的双向通信，客户端向服务端发送请求无法复用之前的连接，需要重新发出独立的请求。</li>\n</ul>\n</li>\n<li>WebSocket：全新、独立的协议，基于 TCP 协议，与 HTTP 协议兼容，却不会融入 HTTP 协议，仅仅作为 HTML5 的一部分，其作用就是在服务器和客户端之间建立实时的双向通信。\n<ul>\n<li>优点：真正意义上的双向通信，性能好、延迟低</li>\n<li>缺点：独立于 HTTP 协议，因此需要额外的项目改造，使用复杂度高，必须引入成熟的库，无法兼容低版本浏览器。</li>\n</ul>\n</li>\n<li>Web Worker：为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运。</li>\n<li>Service Worker：本质上充当Web应用程序与浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理，创建有效的离线体验。</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E5%89%8D%E7%AB%AF%E5%BE%AE%E6%9C%8D%E5%8A%A1">如何理解前端微服务？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E5%89%8D%E7%AB%AF%E5%BE%AE%E6%9C%8D%E5%8A%A1">§</a></h2>\n<h2 id="%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">前端性能优化<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">§</a></h2>\n<ul>\n<li>图片懒加载？</li>\n<li>给页面注入50万个li怎么做提升性能？</li>\n<li>Base64</li>\n</ul>\n<blockquote>\n<p>网页很卡的原因</p>\n</blockquote>\n<ul>\n<li>带宽不足、硬件配置低、CPU 或者是内存被占满。</li>\n<li>HTTP 请求次数太多。</li>\n<li>接收数据时间过长，如下载资源过大。</li>\n<li>JS 脚本过大，阻塞了页面的加载。</li>\n<li>网页资源过多、接受数据时间长、加载某个资源慢。</li>\n<li>DNS 解析速度。</li>\n</ul>\n<blockquote>\n<p>性能优化的方法</p>\n</blockquote>\n<ul>\n<li>资源压缩、文件合并</li>\n<li>非核心代码异步加载（script 标签的 defer 和 async 属性）</li>\n<li>资源预加载：预解析DNS</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF%E9%83%A8%E7%BD%B2">前端部署<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E9%83%A8%E7%BD%B2">§</a></h2>\n<ul>\n<li>如何保证打包文件替换过程中，用户体验不断</li>\n<li>前端的多集群分布式部署？</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF--%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%89%E5%85%A8%E6%80%A7">前端 + 浏览器安全性<a class="anchor" href="#%E5%89%8D%E7%AB%AF--%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%89%E5%85%A8%E6%80%A7">§</a></h2>\n<ul>\n<li>Xss csrf</li>\n</ul>\n<h2 id="%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%BC%80%E5%8F%91">移动端开发<a class="anchor" href="#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%BC%80%E5%8F%91">§</a></h2>\n<ul>\n<li>React Native、Flutter</li>\n</ul>\n<h2 id="spa-%E5%8D%95%E9%A1%B5%E9%9D%A2%E5%BA%94%E7%94%A8%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E7%82%B9">SPA 单页面应用有什么特点？<a class="anchor" href="#spa-%E5%8D%95%E9%A1%B5%E9%9D%A2%E5%BA%94%E7%94%A8%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E7%82%B9">§</a></h2>\n<p>“网络应用”相较于“网站”，具有高度的交互性和动态性，允许用户执行操作并接收他们的操作响应。</p>\n<ul>\n<li>在过去，浏览器从服务器接收 HTML 并渲染。当用户导航到其它 URL 时，需要整页刷新，服务器会为新页面发送新的 HTML，这被称为服务器端渲染。</li>\n<li>在现代的 SPA 中，客户端渲染取而代之，浏览器从服务器加载初始页面，以及整个应用程序所需的脚本(框架、库、应用代码)和样式表。当用户导航到其他页面时，不会触发页面刷新。该页面的 URL 通过 HTML5 History API 进行更新。浏览器通过 AJAX 请求向服务器检索新页面所需的数据(通常 JSON 格式)</li>\n<li>SPA 带来了：\n<ul>\n<li>应用的表现层从服务器端脱离出来，在浏览器管理</li>\n<li>提升应用设计、代码维护和开发时间等方面的效率</li>\n<li>服务端的事务处理仅限于数据</li>\n<li>解决整页刷新、请求重复、重负荷事物处理等问题</li>\n<li>嵌入脚本</li>\n</ul>\n</li>\n</ul>\n<ul>\n<li>\n<p>好处：</p>\n<ul>\n<li>用户感知响应快，用户切换页面时，不再看到因页面刷新而导致的白屏。</li>\n<li>对服务器进行的 HTTP 请求减少，因为对于每个页面加载，不必再次下载相同的资源。</li>\n<li>客户端和服务器之间的关注点分离。可以为不同平台(手机、聊天机器人、智能手表)建立新的客户端，而无需修改服务器代码。只要 API 没有修改，可以单独修改客户端和服务器上的代码。</li>\n</ul>\n</li>\n<li>\n<p>缺点：</p>\n<ul>\n<li>由于加载了多个页面所需的框架、应用和资源，导致初始页面加载时间较长。</li>\n<li>服务器还需要进行额外的工作，需要将所有请求路由配置到单个入口点，然后由客户端接管路由。</li>\n<li>SPA 依赖于 JavaScript 来呈现内容，但并非所有搜索引擎都在抓取过程中执行 JavaScript，他们可能会在你的页面上看到空的内容。这无意中损害了应用的搜索引擎优化(SEO)。然而，当你构建应用时，大多情况下，搜索引擎优化并不是最重要的因素，因为并非所有内容都需要通过搜索引擎进行索引。为了解决这个问题，可以在服务器端渲染你的应用，或者使用诸如 Prerender 的服务来“在浏览器中呈现你的 JavaScript，保存静态 HTML，将其返回给爬虫”</li>\n</ul>\n</li>\n<li>\n<p>SPA 技术要点：</p>\n<ul>\n<li>组织项目(文件结构)</li>\n<li>创建可维护的松耦合 UI</li>\n<li>使用 JavaScript 模块</li>\n<li>执行 SPA 导航：SPA 布局 = Shell 页面 + Region 容器</li>\n<li>创建视图组成与布局</li>\n<li>模块通信：pub/sub 设计模式</li>\n<li>与服务器通信</li>\n<li>执行单元测试</li>\n<li>客户端自动化技术</li>\n</ul>\n</li>\n<li>\n<p>SPA 模型</p>\n<ul>\n<li>隐式模型：v-model、v-bind</li>\n<li>显式模型：Backbone.js</li>\n</ul>\n<ul>\n<li>模型的绑定\n<ul>\n<li>用来自由混入模板的 HTML 代码</li>\n<li>绑定类型\n<ul>\n<li>属性：ng-bind、v-bind</li>\n<li>表达式：{{ aaa }}、&lt;%= aaa %&gt;</li>\n</ul>\n</li>\n<li>定向绑定\n<ul>\n<li>单向绑定：ng-bind、v-bind</li>\n<li>单次绑定：渲染期间只发生一次</li>\n<li>双向绑定，与 UI 控件关联，采用观察者模式，需要付出开销代价：ng-model、v-model</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>\n<p>SPA 模板</p>\n<ul>\n<li>模板引擎：在 MV* 中将模板和模型数据结合起来</li>\n<li>模板：HTML 片段——可额外包含多种绑定及其他指令</li>\n<li>模板渲染</li>\n<li>模板存放位置\n<ul>\n<li>内嵌模板：SPA 初始下载，type=&quot;text/template&quot;</li>\n<li>局部模板：按需下载</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<ul>\n<li>SPA 模块：模块模式、模块化编程等</li>\n</ul>\n<h2 id="spa-%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8E%9F%E7%90%86">SPA 路由的原理？<a class="anchor" href="#spa-%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8E%9F%E7%90%86">§</a></h2>\n<ul>\n<li>客户端路由器\n<ul>\n<li>侦测浏览器位置发生的变化，监听特定事件</li>\n<li>管理 SPA 视图、数据以及业务事物状态</li>\n<li>浏览器导航控制</li>\n</ul>\n</li>\n<li>路由术语\n<ul>\n<li>名称：路由标识</li>\n<li>动词：get、put、on、when</li>\n<li>路径：URL 部分，建立路由/路由处理程序之间的链接</li>\n<li>功能：可能执行的相关代码(控制器、回调函数)</li>\n</ul>\n</li>\n<li>路由配置\n<ul>\n<li>路由语法</li>\n<li>路由配置项：当路由找到匹配 URL 时，该如何动作</li>\n<li>路由参数：在路由路径中定义的变量</li>\n<li>缺省路由</li>\n</ul>\n</li>\n<li>客户端路由器的工作机制\n<ul>\n<li>片段标识符方式，# 为前缀，使用 location 的 onhashchange 时间</li>\n<li>HTML 历史 API 方式，兼容性差，使用片段标识符作为回退方案\n<ul>\n<li>pushState、replaceState、pospstate</li>\n<li>三个参数：状态对象、标题、URL</li>\n<li>基准链接：服务器端调整(重定向)、移除 hash</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E8%99%9A%E6%8B%9F-dom-%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88">虚拟 DOM 的原理是什么？<a class="anchor" href="#%E8%99%9A%E6%8B%9F-dom-%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h2>\n<p>近年来，前端的框架主要发展方向就是解放DOM操作的复杂性。虚拟的 DOM 的核心思想是：对复杂的文档 DOM 结构，提供一种方便的工具，进行最小化地 DOM 操作。</p>\n<ul>\n<li>算法实现\n<ol>\n<li>用 JS 对象模拟 DOM 树</li>\n<li>比较两棵虚拟 DOM 树的差异</li>\n<li>把差异应用到真正的 DOM 树上</li>\n</ol>\n</li>\n<li>DOM patching，DOM 修补</li>\n<li>DOM diff</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E4%BB%80%E4%B9%88">前端性能优化需要注意什么？<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E4%BB%80%E4%B9%88">§</a></h2>\n<blockquote>\n<p>火焰图？</p>\n</blockquote>\n<ul>\n<li>最大限度地减少 HTTP 请求：</li>\n<li>使用内容分发网络</li>\n<li>headers 添加一个 Expires 或Cache-Control 头</li>\n<li>用 gzip 的压缩内容</li>\n<li>将样式表在顶部</li>\n<li>JS 代码放在底部</li>\n<li>避免使用 CSS 表达式</li>\n<li>JavaScript 和 CSS 放在外部</li>\n<li>减少 DNS 查找</li>\n<li>缩小 JavaScript 和 CSS</li>\n<li>避免重定向</li>\n<li>删除重复的脚本和样式</li>\n<li>减少 DOM 元素的数量</li>\n<li>CSS 雪碧图</li>\n<li>HTTP 缓存</li>\n<li>尽量避免回流</li>\n<li>复合层、简单层与硬件加速</li>\n<li>工程化打包</li>\n<li>复合层与性能优化</li>\n</ul>\n<p>静态资源域名拆分（HTTP 2.0 不需要）</p>\n<ul>\n<li>将静态资源分组，分别放到不同的域名下(<a href="http://xn--static-hh4k.base.com">如static.base.com</a>)</li>\n<li>而 <a href="http://page.base.com">page.base.com</a>(页面所在域名)下请求时，是不会带上 <a href="http://static.base.com">static.base.com</a> 域名的 cookie 的，所以就避免了浪费</li>\n<li>在移动端，如果请求的域名数过多，会降低请求速度(因为域名整套解析流程是很耗费时间的，而且移动端一般带宽都比不上pc)，此时就需要用到一种优化方案：dns-prefetch(让浏览器空闲时提前解析dns域名，不过也请合理使用，勿滥用)</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E5%A6%82%E4%BD%95%E9%83%A8%E7%BD%B2%E5%88%B0-cdn-%E4%B8%8A">前端项目如何部署到 CDN 上？<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E5%A6%82%E4%BD%95%E9%83%A8%E7%BD%B2%E5%88%B0-cdn-%E4%B8%8A">§</a></h2>\n<h2 id="%E5%B8%B8%E8%A7%81%E7%9A%84%E7%BB%88%E7%AB%AF%E7%BB%B4%E6%8A%A4%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E7%8A%B6%E6%80%81%E7%9A%84%E5%91%BD%E4%BB%A4%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">常见的终端维护前端项目状态的命令都有哪些。<a class="anchor" href="#%E5%B8%B8%E8%A7%81%E7%9A%84%E7%BB%88%E7%AB%AF%E7%BB%B4%E6%8A%A4%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E7%8A%B6%E6%80%81%E7%9A%84%E5%91%BD%E4%BB%A4%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">§</a></h2>\n<ul>\n<li>查看端口占用</li>\n<li>查看进程状态</li>\n<li>查看 host、nginx 状态</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF%E9%83%BD%E5%8F%AF%E4%BB%A5%E6%80%8E%E4%B9%88%E5%8E%8B%E7%BC%A9">前端都可以怎么压缩？<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E9%83%BD%E5%8F%AF%E4%BB%A5%E6%80%8E%E4%B9%88%E5%8E%8B%E7%BC%A9">§</a></h2>\n<p>GZip 压缩</p>\n<ul>\n<li>是一种压缩格式，需要浏览器支持才有效(不过一般现在浏览器都支持)， 而且 GZip 压缩效率很好(高达70%左右)</li>\n<li>然后 GZip 一般是由 Apache、Tomcat 等 Web 服务器开启</li>\n<li>服务器除了 GZip 外，也还会有其它压缩格式(如 deflate，没有 gzip 高效，且不流行)</li>\n<li>一般只需要在服务器上开启了 GZip 压缩，然后之后的请求就都是基于 GZip 压缩格式的, 非常方便。</li>\n</ul>'
        } }),
    'contentHasKatex': false,
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84">前端架构</a></li><li><a href="#mv-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B8%8E%E6%A1%86%E6%9E%B6">MV* 设计模式与框架？</a></li><li><a href="#%E4%B8%8D%E5%90%8C%E5%9C%BA%E6%99%AF%E4%B8%8B%E5%89%8D%E7%AB%AF%E9%9B%86%E6%88%90%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E6%9C%89%E4%BB%80%E4%B9%88%E6%80%9D%E8%B7%AF">不同场景下前端集成的解决方案有什么思路？</a></li><li><a href="#%E5%89%8D%E7%AB%AF%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8D%B3%E6%97%B6%E9%80%9A%E4%BF%A1">前端如何实现即时通信？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E5%89%8D%E7%AB%AF%E5%BE%AE%E6%9C%8D%E5%8A%A1">如何理解前端微服务？</a></li><li><a href="#%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">前端性能优化</a></li><li><a href="#%E5%89%8D%E7%AB%AF%E9%83%A8%E7%BD%B2">前端部署</a></li><li><a href="#%E5%89%8D%E7%AB%AF--%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%89%E5%85%A8%E6%80%A7">前端 + 浏览器安全性</a></li><li><a href="#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%BC%80%E5%8F%91">移动端开发</a></li><li><a href="#spa-%E5%8D%95%E9%A1%B5%E9%9D%A2%E5%BA%94%E7%94%A8%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E7%82%B9">SPA 单页面应用有什么特点？</a></li><li><a href="#spa-%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8E%9F%E7%90%86">SPA 路由的原理？</a></li><li><a href="#%E8%99%9A%E6%8B%9F-dom-%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88">虚拟 DOM 的原理是什么？</a></li><li><a href="#%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E4%BB%80%E4%B9%88">前端性能优化需要注意什么？</a></li><li><a href="#%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E5%A6%82%E4%BD%95%E9%83%A8%E7%BD%B2%E5%88%B0-cdn-%E4%B8%8A">前端项目如何部署到 CDN 上？</a></li><li><a href="#%E5%B8%B8%E8%A7%81%E7%9A%84%E7%BB%88%E7%AB%AF%E7%BB%B4%E6%8A%A4%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E7%8A%B6%E6%80%81%E7%9A%84%E5%91%BD%E4%BB%A4%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">常见的终端维护前端项目状态的命令都有哪些。</a></li><li><a href="#%E5%89%8D%E7%AB%AF%E9%83%BD%E5%8F%AF%E4%BB%A5%E6%80%8E%E4%B9%88%E5%8E%8B%E7%BC%A9">前端都可以怎么压缩？</a></li></ol></nav>'
        } }),
    'date': "2020-10-25T07:04:16.000Z",
    'updated': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ]
};
