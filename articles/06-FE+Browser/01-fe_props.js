import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "text": "浏览器",
        "link": "articles/06-FE+Browser/00-browser.html"
    },
    'next': {
        "link": "articles/07-BE+Server/index.html",
        "text": "后端应用开发 + 服务器"
    },
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'sidebar': [
        {
            "text": "Hello",
            "link": "articles/index.html",
            "pagePath": "articles/README.md"
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
                    "link": "articles/03-HTML+CSS/01-css.html",
                    "pagePath": "articles/03-HTML+CSS/01-css.md"
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
                    "link": "articles/06-FE+Browser/01-fe.html",
                    "pagePath": "articles/06-FE+Browser/01-fe.md"
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
    'pagePath': "articles/06-FE+Browser/01-fe.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/06-FE+Browser/01-fe.html",
    'title': "前端",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>前端</h1>\n<h2 id="%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84">前端架构<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84">§</a></h2>\n<ul>\n<li>权限组件的设计</li>\n<li>SSR</li>\n<li>SPA</li>\n<li>双向绑定</li>\n<li>懒加载</li>\n<li>MVVM：Proxy 与 object.defineProperty</li>\n</ul>\n<h2 id="react">React<a class="anchor" href="#react">§</a></h2>\n<ul>\n<li>React v15, v16, v17</li>\n<li>生命周期（v15 到 v16）、组件化</li>\n<li>React -&gt; Hooks、useEffect、setState</li>\n<li>懒加载</li>\n<li>虚拟 DOM</li>\n<li>Redux</li>\n<li>Fiber</li>\n<li>Concurrent</li>\n<li>性能优化：function component + redux、immutable、pure component , shouldComponentUpdate ...</li>\n</ul>\n<h2 id="vue">Vue<a class="anchor" href="#vue">§</a></h2>\n<blockquote>\n<p>nexttick</p>\n</blockquote>\n<blockquote>\n<p>React 和 Vue 的区别</p>\n</blockquote>\n<p>相同点</p>\n<ul>\n<li>都有组件化开发和Virtual DOM</li>\n<li>都支持props进行父子组件间数据通信</li>\n<li>都支持数据驱动视图, 不直接操作真实DOM, 更新状态数据界面就自动更新</li>\n<li>都支持服务器端渲染</li>\n<li>都有支持native的方案,React的React Native,Vue的Weex</li>\n</ul>\n<p>不同点</p>\n<ul>\n<li>数据绑定: vue实现了数据的双向绑定,react数据流动是单向的</li>\n<li>组件写法不一样, React推荐的做法是 JSX , 也就是把HTML和CSS全都写进JavaScript了,即\'all in js\'; Vue推荐的做法是webpack+vue-loader的单文件组件格式,即html,css,js写在同一个文件</li>\n<li>state对象在react应用中不可变的,需要使用setState方法更新状态;在vue中,state对象不是必须的,数据由data属性在vue对象中管理</li>\n<li>virtual DOM不一样,vue会跟踪每一个组件的依赖关系,不需要重新渲染整个组件树.而对于React而言,每当应用的状态被改变时,全部组件都会重新渲染,所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制</li>\n<li>React严格上只针对MVC的view层,Vue则是MVVM模式</li>\n</ul>\n<p>概念</p>\n<ul>\n<li>\n<p>组件通信：父向子、子向父、隔代、兄弟</p>\n</li>\n<li>\n<p>实现通信方式</p>\n</li>\n<li>\n<ul>\n<li>props：父向子传递一般属性、子向父传递函数属性；缺点隔代不好</li>\n<li>vue 自定义事件：Vue 内置，代替函数类型的 props【绑定监听 @、触发事件 emit】</li>\n<li>消息订阅与发布：常见订阅库 pubsub-js，适用于任意关系组件</li>\n<li>vuex：相比 pubsub 管理起来更集中方便</li>\n<li>slot：专门用来实现父向子传递带数据的标签</li>\n</ul>\n</li>\n</ul>\n<h2 id="webpack--babel">WebPack + Babel<a class="anchor" href="#webpack--babel">§</a></h2>\n<ul>\n<li>优化的两大方向：速度、体积</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">前端性能优化<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">§</a></h2>\n<ul>\n<li>图片懒加载？</li>\n<li>给页面注入50万个li怎么做提升性能？</li>\n<li>Base64</li>\n</ul>\n<blockquote>\n<p>网页很卡的原因</p>\n</blockquote>\n<ul>\n<li>带宽不足、硬件配置低、CPU 或者是内存被占满。</li>\n<li>HTTP 请求次数太多。</li>\n<li>接收数据时间过长，如下载资源过大。</li>\n<li>JS 脚本过大，阻塞了页面的加载。</li>\n<li>网页资源过多、接受数据时间长、加载某个资源慢。</li>\n<li>DNS 解析速度。</li>\n</ul>\n<blockquote>\n<p>性能优化的方法</p>\n</blockquote>\n<ul>\n<li>资源压缩、文件合并</li>\n<li>非核心代码异步加载（script 标签的 defer 和 async 属性）</li>\n<li>浏览器缓存：强缓存、协商缓存</li>\n<li>CDN</li>\n<li>资源预加载：预解析DNS</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF%E9%83%A8%E7%BD%B2">前端部署<a class="anchor" href="#%E5%89%8D%E7%AB%AF%E9%83%A8%E7%BD%B2">§</a></h2>\n<ul>\n<li>如何保证打包文件替换过程中，用户体验不断</li>\n<li>前端的多集群分布式部署？</li>\n</ul>\n<h2 id="%E5%89%8D%E7%AB%AF--%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%89%E5%85%A8%E6%80%A7">前端 + 浏览器安全性<a class="anchor" href="#%E5%89%8D%E7%AB%AF--%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%89%E5%85%A8%E6%80%A7">§</a></h2>\n<ul>\n<li>Xss csrf</li>\n</ul>\n<h2 id="%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%BC%80%E5%8F%91">移动端开发<a class="anchor" href="#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%BC%80%E5%8F%91">§</a></h2>\n<ul>\n<li>React Native、Flutter</li>\n</ul>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84">前端架构</a></li><li><a href="#react">React</a></li><li><a href="#vue">Vue</a></li><li><a href="#webpack--babel">WebPack + Babel</a></li><li><a href="#%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">前端性能优化</a></li><li><a href="#%E5%89%8D%E7%AB%AF%E9%83%A8%E7%BD%B2">前端部署</a></li><li><a href="#%E5%89%8D%E7%AB%AF--%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%89%E5%85%A8%E6%80%A7">前端 + 浏览器安全性</a></li><li><a href="#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%BC%80%E5%8F%91">移动端开发</a></li></ol></nav>'
        } })
};
