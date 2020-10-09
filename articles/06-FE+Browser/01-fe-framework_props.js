import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "text": "浏览器",
        "link": "articles/06-FE+Browser/00-browser.html"
    },
    'next': {
        "text": "前端工具链",
        "link": "articles/06-FE+Browser/02-fe-tooltain.html"
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
    'pagePath': "articles/06-FE+Browser/01-fe-framework.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/06-FE+Browser/01-fe-framework.html",
    'title': "前端",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>前端</h1>\n<h2 id="%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84">前端架构<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84">§</a></h2>\n<ul>\n<li>权限组件的设计</li>\n<li>SSR</li>\n<li>SPA</li>\n<li>双向绑定</li>\n<li>懒加载</li>\n<li>MVVM：Proxy 与 object.defineProperty</li>\n</ul>\n<h2 id="react">React<a class="anchor" href="#react">§</a></h2>\n<ul>\n<li>React v15, v16, v17</li>\n<li>生命周期（v15 到 v16）、组件化</li>\n<li>React -&gt; Hooks、useEffect、setState</li>\n<li>懒加载</li>\n<li>Redux</li>\n<li>Fiber</li>\n<li>Concurrent</li>\n<li>性能优化：function component + redux、immutable、pure component , shouldComponentUpdate ...</li>\n</ul>\n<h2 id="setstate%E8%83%8C%E5%90%8E%E7%9A%84%E5%8E%9F%E7%90%86">setState背后的原理<a class="anchor" href="#setstate%E8%83%8C%E5%90%8E%E7%9A%84%E5%8E%9F%E7%90%86">§</a></h2>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF-fiber">什么是 Fiber<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-fiber">§</a></h2>\n<h2 id="%E6%80%8E%E4%B9%88%E7%94%A8-transaction-%E5%81%9A%E6%89%B9%E6%9B%B4%E6%96%B0">怎么用 transaction 做批更新<a class="anchor" href="#%E6%80%8E%E4%B9%88%E7%94%A8-transaction-%E5%81%9A%E6%89%B9%E6%9B%B4%E6%96%B0">§</a></h2>\n<h2 id="%E8%99%9A%E6%8B%9F-dom-%E5%8E%9F%E7%90%86">虚拟 DOM 原理<a class="anchor" href="#%E8%99%9A%E6%8B%9F-dom-%E5%8E%9F%E7%90%86">§</a></h2>\n<h2 id="vue">Vue<a class="anchor" href="#vue">§</a></h2>\n<blockquote>\n<p>nexttick</p>\n</blockquote>\n<blockquote>\n<p>React 和 Vue 的区别</p>\n</blockquote>\n<p>相同点</p>\n<ul>\n<li>都有组件化开发和Virtual DOM</li>\n<li>都支持props进行父子组件间数据通信</li>\n<li>都支持数据驱动视图, 不直接操作真实DOM, 更新状态数据界面就自动更新</li>\n<li>都支持服务器端渲染</li>\n<li>都有支持native的方案,React的React Native,Vue的Weex</li>\n</ul>\n<p>不同点</p>\n<ul>\n<li>数据绑定: vue实现了数据的双向绑定,react数据流动是单向的</li>\n<li>组件写法不一样, React推荐的做法是 JSX , 也就是把HTML和CSS全都写进JavaScript了,即\'all in js\'; Vue推荐的做法是webpack+vue-loader的单文件组件格式,即html,css,js写在同一个文件</li>\n<li>state对象在react应用中不可变的,需要使用setState方法更新状态;在vue中,state对象不是必须的,数据由data属性在vue对象中管理</li>\n<li>virtual DOM不一样,vue会跟踪每一个组件的依赖关系,不需要重新渲染整个组件树.而对于React而言,每当应用的状态被改变时,全部组件都会重新渲染,所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制</li>\n<li>React严格上只针对MVC的view层,Vue则是MVVM模式</li>\n</ul>\n<p>概念</p>\n<ul>\n<li>\n<p>组件通信：父向子、子向父、隔代、兄弟</p>\n</li>\n<li>\n<p>实现通信方式</p>\n</li>\n<li>\n<ul>\n<li>props：父向子传递一般属性、子向父传递函数属性；缺点隔代不好</li>\n<li>vue 自定义事件：Vue 内置，代替函数类型的 props【绑定监听 @、触发事件 emit】</li>\n<li>消息订阅与发布：常见订阅库 pubsub-js，适用于任意关系组件</li>\n<li>vuex：相比 pubsub 管理起来更集中方便</li>\n<li>slot：专门用来实现父向子传递带数据的标签</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3-gettersetter-%E4%B8%8D%E8%83%BD%E7%9B%91%E5%90%AC%E6%95%B0%E7%BB%84%E5%8F%98%E5%BC%82%E6%96%B9%E6%B3%95">如何解决 getter/setter 不能监听数组变异方法<a class="anchor" href="#%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3-gettersetter-%E4%B8%8D%E8%83%BD%E7%9B%91%E5%90%AC%E6%95%B0%E7%BB%84%E5%8F%98%E5%BC%82%E6%96%B9%E6%B3%95">§</a></h2>\n<h2 id="%E7%9B%91%E5%90%AC%E7%9A%84%E5%9B%9E%E8%B0%83%E5%92%8C%E4%BA%8B%E4%BB%B6%E6%80%8E%E4%B9%88%E8%A7%A3%E8%80%A6%E7%9A%84">监听的回调和事件怎么解耦的<a class="anchor" href="#%E7%9B%91%E5%90%AC%E7%9A%84%E5%9B%9E%E8%B0%83%E5%92%8C%E4%BA%8B%E4%BB%B6%E6%80%8E%E4%B9%88%E8%A7%A3%E8%80%A6%E7%9A%84">§</a></h2>\n<h2 id="watcher-%E5%8E%BB%E9%87%8D%E6%80%8E%E4%B9%88%E5%81%9A%E7%9A%84">watcher 去重怎么做的<a class="anchor" href="#watcher-%E5%8E%BB%E9%87%8D%E6%80%8E%E4%B9%88%E5%81%9A%E7%9A%84">§</a></h2>\n<h2 id="dom%E6%89%B9%E6%9B%B4%E6%96%B0%E6%80%8E%E4%B9%88%E5%81%9A%E7%9A%84">DOM批更新怎么做的<a class="anchor" href="#dom%E6%89%B9%E6%9B%B4%E6%96%B0%E6%80%8E%E4%B9%88%E5%81%9A%E7%9A%84">§</a></h2>\n<h2 id="%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">前端性能优化<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">§</a></h2>\n<ul>\n<li>图片懒加载？</li>\n<li>给页面注入50万个li怎么做提升性能？</li>\n<li>Base64</li>\n</ul>\n<blockquote>\n<p>网页很卡的原因</p>\n</blockquote>\n<ul>\n<li>带宽不足、硬件配置低、CPU 或者是内存被占满。</li>\n<li>HTTP 请求次数太多。</li>\n<li>接收数据时间过长，如下载资源过大。</li>\n<li>JS 脚本过大，阻塞了页面的加载。</li>\n<li>网页资源过多、接受数据时间长、加载某个资源慢。</li>\n<li>DNS 解析速度。</li>\n</ul>\n<blockquote>\n<p>性能优化的方法</p>\n</blockquote>\n<ul>\n<li>资源压缩、文件合并</li>\n<li>非核心代码异步加载（script 标签的 defer 和 async 属性）</li>\n<li>浏览器缓存：强缓存、协商缓存</li>\n<li>CDN</li>\n<li>资源预加载：预解析DNS</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF%E9%83%A8%E7%BD%B2">前端部署<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E9%83%A8%E7%BD%B2">§</a></h2>\n<ul>\n<li>如何保证打包文件替换过程中，用户体验不断</li>\n<li>前端的多集群分布式部署？</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF--%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%89%E5%85%A8%E6%80%A7">前端 + 浏览器安全性<a class="anchor" href="#%E5%89%8D%E7%AB%AF--%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%89%E5%85%A8%E6%80%A7">§</a></h2>\n<ul>\n<li>Xss csrf</li>\n</ul>\n<h2 id="%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%BC%80%E5%8F%91">移动端开发<a class="anchor" href="#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%BC%80%E5%8F%91">§</a></h2>\n<ul>\n<li>React Native、Flutter</li>\n</ul>\n<h2 id="spa-%E5%8D%95%E9%A1%B5%E9%9D%A2%E5%BA%94%E7%94%A8%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E7%82%B9">SPA 单页面应用有什么特点？<a class="anchor" href="#spa-%E5%8D%95%E9%A1%B5%E9%9D%A2%E5%BA%94%E7%94%A8%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E7%82%B9">§</a></h2>\n<p>“网络应用”相较于“网站”，具有高度的交互性和动态性，允许用户执行操作并接收他们的操作响应。</p>\n<ul>\n<li>在过去，浏览器从服务器接收 HTML 并渲染。当用户导航到其它 URL 时，需要整页刷新，服务器会为新页面发送新的 HTML，这被称为服务器端渲染。</li>\n<li>在现代的 SPA 中，客户端渲染取而代之，浏览器从服务器加载初始页面，以及整个应用程序所需的脚本(框架、库、应用代码)和样式表。当用户导航到其他页面时，不会触发页面刷新。该页面的 URL 通过 HTML5 History API 进行更新。浏览器通过 AJAX 请求向服务器检索新页面所需的数据(通常 JSON 格式)</li>\n<li>SPA 带来了：\n<ul>\n<li>应用的表现层从服务器端脱离出来，在浏览器管理</li>\n<li>提升应用设计、代码维护和开发时间等方面的效率</li>\n<li>服务端的事务处理仅限于数据</li>\n<li>解决整页刷新、请求重复、重负荷事物处理等问题</li>\n<li>嵌入脚本</li>\n</ul>\n</li>\n</ul>\n<ul>\n<li>\n<p>好处：</p>\n<ul>\n<li>用户感知响应快，用户切换页面时，不再看到因页面刷新而导致的白屏。</li>\n<li>对服务器进行的 HTTP 请求减少，因为对于每个页面加载，不必再次下载相同的资源。</li>\n<li>客户端和服务器之间的关注点分离。可以为不同平台(手机、聊天机器人、智能手表)建立新的客户端，而无需修改服务器代码。只要 API 没有修改，可以单独修改客户端和服务器上的代码。</li>\n</ul>\n</li>\n<li>\n<p>缺点：</p>\n<ul>\n<li>由于加载了多个页面所需的框架、应用和资源，导致初始页面加载时间较长。</li>\n<li>服务器还需要进行额外的工作，需要将所有请求路由配置到单个入口点，然后由客户端接管路由。</li>\n<li>SPA 依赖于 JavaScript 来呈现内容，但并非所有搜索引擎都在抓取过程中执行 JavaScript，他们可能会在你的页面上看到空的内容。这无意中损害了应用的搜索引擎优化(SEO)。然而，当你构建应用时，大多情况下，搜索引擎优化并不是最重要的因素，因为并非所有内容都需要通过搜索引擎进行索引。为了解决这个问题，可以在服务器端渲染你的应用，或者使用诸如 Prerender 的服务来“在浏览器中呈现你的 JavaScript，保存静态 HTML，将其返回给爬虫”</li>\n</ul>\n</li>\n<li>\n<p>SPA 技术要点：</p>\n<ul>\n<li>组织项目(文件结构)</li>\n<li>创建可维护的松耦合 UI</li>\n<li>使用 JavaScript 模块</li>\n<li>执行 SPA 导航：SPA 布局 = Shell 页面 + Region 容器</li>\n<li>创建视图组成与布局</li>\n<li>模块通信：pub/sub 设计模式</li>\n<li>与服务器通信</li>\n<li>执行单元测试</li>\n<li>客户端自动化技术</li>\n</ul>\n</li>\n<li>\n<p>SPA 模型</p>\n<ul>\n<li>隐式模型：v-model、v-bind</li>\n<li>显式模型：Backbone.js</li>\n</ul>\n<ul>\n<li>模型的绑定\n<ul>\n<li>用来自由混入模板的 HTML 代码</li>\n<li>绑定类型\n<ul>\n<li>属性：ng-bind、v-bind</li>\n<li>表达式：{{ aaa }}、&lt;%= aaa %&gt;</li>\n</ul>\n</li>\n<li>定向绑定\n<ul>\n<li>单向绑定：ng-bind、v-bind</li>\n<li>单次绑定：渲染期间只发生一次</li>\n<li>双向绑定，与 UI 控件关联，采用观察者模式，需要付出开销代价：ng-model、v-model</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>\n<p>SPA 模板</p>\n<ul>\n<li>模板引擎：在 MV* 中将模板和模型数据结合起来</li>\n<li>模板：HTML 片段——可额外包含多种绑定及其他指令</li>\n<li>模板渲染</li>\n<li>模板存放位置\n<ul>\n<li>内嵌模板：SPA 初始下载，type=&quot;text/template&quot;</li>\n<li>局部模板：按需下载</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<ul>\n<li>SPA 模块：模块模式、模块化编程等</li>\n</ul>\n<h2 id="spa-%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8E%9F%E7%90%86">SPA 路由的原理？<a class="anchor" href="#spa-%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8E%9F%E7%90%86">§</a></h2>\n<ul>\n<li>客户端路由器\n<ul>\n<li>侦测浏览器位置发生的变化，监听特定事件</li>\n<li>管理 SPA 视图、数据以及业务事物状态</li>\n<li>浏览器导航控制</li>\n</ul>\n</li>\n<li>路由术语\n<ul>\n<li>名称：路由标识</li>\n<li>动词：get、put、on、when</li>\n<li>路径：URL 部分，建立路由/路由处理程序之间的链接</li>\n<li>功能：可能执行的相关代码(控制器、回调函数)</li>\n</ul>\n</li>\n<li>路由配置\n<ul>\n<li>路由语法</li>\n<li>路由配置项：当路由找到匹配 URL 时，该如何动作</li>\n<li>路由参数：在路由路径中定义的变量</li>\n<li>缺省路由</li>\n</ul>\n</li>\n<li>客户端路由器的工作机制\n<ul>\n<li>片段标识符方式，# 为前缀，使用 location 的 onhashchange 时间</li>\n<li>HTML 历史 API 方式，兼容性差，使用片段标识符作为回退方案\n<ul>\n<li>pushState、replaceState、pospstate</li>\n<li>三个参数：状态对象、标题、URL</li>\n<li>基准链接：服务器端调整(重定向)、移除 hash</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="mv-%E6%A1%86%E6%9E%B6%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E5%8F%8A%E5%85%B6%E7%89%B9%E7%82%B9">MV* 框架都有哪些及其特点？<a class="anchor" href="#mv-%E6%A1%86%E6%9E%B6%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E5%8F%8A%E5%85%B6%E7%89%B9%E7%82%B9">§</a></h2>\n<ul>\n<li>\n<p>MV* 框架</p>\n<ul>\n<li>MVC：模型、视图、控制器</li>\n<li>MVP：模型、视图、表示器</li>\n<li>MVVM：模型、视图、视图模型</li>\n</ul>\n</li>\n<li>\n<p>为什么要使用 MV* 框架：关注点分离、简化日常任务、提升生产率、标准化、更高效的合作、独立代码更容易更改、更干净的单元测试。</p>\n</li>\n</ul>\n<h2 id="%E8%99%9A%E6%8B%9F-dom-%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88">虚拟 DOM 的原理是什么？<a class="anchor" href="#%E8%99%9A%E6%8B%9F-dom-%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h2>\n<p>近年来，前端的框架主要发展方向就是解放DOM操作的复杂性。虚拟的 DOM 的核心思想是：对复杂的文档 DOM 结构，提供一种方便的工具，进行最小化地 DOM 操作。</p>\n<ul>\n<li>算法实现\n<ol>\n<li>用 JS 对象模拟 DOM 树</li>\n<li>比较两棵虚拟 DOM 树的差异</li>\n<li>把差异应用到真正的 DOM 树上</li>\n</ol>\n</li>\n<li>DOM patching，DOM 修补</li>\n<li>DOM diff</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E4%BB%80%E4%B9%88">前端性能优化需要注意什么？<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E4%BB%80%E4%B9%88">§</a></h2>\n<ul>\n<li>最大限度地减少 HTTP 请求：</li>\n<li>使用内容分发网络</li>\n<li>headers 添加一个 Expires 或Cache-Control 头</li>\n<li>用 gzip 的压缩内容</li>\n<li>将样式表在顶部</li>\n<li>JS 代码放在底部</li>\n<li>避免使用 CSS 表达式</li>\n<li>JavaScript 和 CSS 放在外部</li>\n<li>减少 DNS 查找</li>\n<li>缩小 JavaScript 和 CSS</li>\n<li>避免重定向</li>\n<li>删除重复的脚本和样式</li>\n<li>减少 DOM 元素的数量</li>\n<li>CSS 雪碧图</li>\n<li>HTTP 缓存</li>\n<li>尽量避免回流</li>\n<li>复合层、简单层与硬件加速</li>\n<li>工程化打包</li>\n<li>复合层与性能优化</li>\n</ul>\n<p>静态资源域名拆分（HTTP 2.0 不需要）</p>\n<ul>\n<li>将静态资源分组，分别放到不同的域名下(<a href="http://xn--static-hh4k.base.com">如static.base.com</a>)</li>\n<li>而 <a href="http://page.base.com">page.base.com</a>(页面所在域名)下请求时，是不会带上 <a href="http://static.base.com">static.base.com</a> 域名的 cookie 的，所以就避免了浪费</li>\n<li>在移动端，如果请求的域名数过多，会降低请求速度(因为域名整套解析流程是很耗费时间的，而且移动端一般带宽都比不上pc)，此时就需要用到一种优化方案：dns-prefetch(让浏览器空闲时提前解析dns域名，不过也请合理使用，勿滥用)</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF%E9%83%BD%E5%8F%AF%E4%BB%A5%E6%80%8E%E4%B9%88%E5%8E%8B%E7%BC%A9">前端都可以怎么压缩？<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E9%83%BD%E5%8F%AF%E4%BB%A5%E6%80%8E%E4%B9%88%E5%8E%8B%E7%BC%A9">§</a></h2>\n<p>GZip 压缩</p>\n<ul>\n<li>是一种压缩格式，需要浏览器支持才有效(不过一般现在浏览器都支持)， 而且 GZip 压缩效率很好(高达70%左右)</li>\n<li>然后 GZip 一般是由 Apache、Tomcat 等 Web 服务器开启</li>\n<li>服务器除了 GZip 外，也还会有其它压缩格式(如 deflate，没有 gzip 高效，且不流行)</li>\n<li>一般只需要在服务器上开启了 GZip 压缩，然后之后的请求就都是基于 GZip 压缩格式的, 非常方便。</li>\n</ul>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84">前端架构</a></li><li><a href="#react">React</a></li><li><a href="#setstate%E8%83%8C%E5%90%8E%E7%9A%84%E5%8E%9F%E7%90%86">setState背后的原理</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF-fiber">什么是 Fiber</a></li><li><a href="#%E6%80%8E%E4%B9%88%E7%94%A8-transaction-%E5%81%9A%E6%89%B9%E6%9B%B4%E6%96%B0">怎么用 transaction 做批更新</a></li><li><a href="#%E8%99%9A%E6%8B%9F-dom-%E5%8E%9F%E7%90%86">虚拟 DOM 原理</a></li><li><a href="#vue">Vue</a></li><li><a href="#%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3-gettersetter-%E4%B8%8D%E8%83%BD%E7%9B%91%E5%90%AC%E6%95%B0%E7%BB%84%E5%8F%98%E5%BC%82%E6%96%B9%E6%B3%95">如何解决 getter/setter 不能监听数组变异方法</a></li><li><a href="#%E7%9B%91%E5%90%AC%E7%9A%84%E5%9B%9E%E8%B0%83%E5%92%8C%E4%BA%8B%E4%BB%B6%E6%80%8E%E4%B9%88%E8%A7%A3%E8%80%A6%E7%9A%84">监听的回调和事件怎么解耦的</a></li><li><a href="#watcher-%E5%8E%BB%E9%87%8D%E6%80%8E%E4%B9%88%E5%81%9A%E7%9A%84">watcher 去重怎么做的</a></li><li><a href="#dom%E6%89%B9%E6%9B%B4%E6%96%B0%E6%80%8E%E4%B9%88%E5%81%9A%E7%9A%84">DOM批更新怎么做的</a></li><li><a href="#%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">前端性能优化</a></li><li><a href="#%E5%89%8D%E7%AB%AF%E9%83%A8%E7%BD%B2">前端部署</a></li><li><a href="#%E5%89%8D%E7%AB%AF--%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%89%E5%85%A8%E6%80%A7">前端 + 浏览器安全性</a></li><li><a href="#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%BC%80%E5%8F%91">移动端开发</a></li><li><a href="#spa-%E5%8D%95%E9%A1%B5%E9%9D%A2%E5%BA%94%E7%94%A8%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E7%82%B9">SPA 单页面应用有什么特点？</a></li><li><a href="#spa-%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8E%9F%E7%90%86">SPA 路由的原理？</a></li><li><a href="#mv-%E6%A1%86%E6%9E%B6%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E5%8F%8A%E5%85%B6%E7%89%B9%E7%82%B9">MV* 框架都有哪些及其特点？</a></li><li><a href="#%E8%99%9A%E6%8B%9F-dom-%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88">虚拟 DOM 的原理是什么？</a></li><li><a href="#%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E4%BB%80%E4%B9%88">前端性能优化需要注意什么？</a></li><li><a href="#%E5%89%8D%E7%AB%AF%E9%83%BD%E5%8F%AF%E4%BB%A5%E6%80%8E%E4%B9%88%E5%8E%8B%E7%BC%A9">前端都可以怎么压缩？</a></li></ol></nav>'
        } })
};
