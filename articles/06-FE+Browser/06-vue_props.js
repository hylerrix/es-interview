import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "title": "React",
        "link": "articles/06-FE+Browser/05-react.html"
    },
    'next': {
        "title": "iframe",
        "link": "articles/06-FE+Browser/07-iframe.html"
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
    'pagePath': "articles/06-FE+Browser/06-vue.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/06-FE+Browser/06-vue.html",
    'title': "Vue",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Vue</h1>\n<blockquote>\n<p><a href="https://juejin.im/post/6844903876231954446">vue 269 个知识点（面试题）为你保驾护航</a>。</p>\n</blockquote>\n<h2 id="react-%E5%92%8C-vue-%E7%9A%84%E5%8C%BA%E5%88%AB">React 和 Vue 的区别？<a class="anchor" href="#react-%E5%92%8C-vue-%E7%9A%84%E5%8C%BA%E5%88%AB">§</a></h2>\n<p>相同点</p>\n<ul>\n<li>都有组件化开发和Virtual DOM</li>\n<li>都支持props进行父子组件间数据通信</li>\n<li>都支持数据驱动视图, 不直接操作真实DOM, 更新状态数据界面就自动更新</li>\n<li>都支持服务器端渲染</li>\n<li>都有支持native的方案,React的React Native,Vue的Weex</li>\n</ul>\n<p>不同点</p>\n<ul>\n<li>数据绑定: vue实现了数据的双向绑定,react数据流动是单向的</li>\n<li>组件写法不一样, React推荐的做法是 JSX , 也就是把HTML和CSS全都写进JavaScript了,即\'all in js\'; Vue推荐的做法是webpack+vue-loader的单文件组件格式,即html,css,js写在同一个文件</li>\n<li>state对象在react应用中不可变的,需要使用setState方法更新状态;在vue中,state对象不是必须的,数据由data属性在vue对象中管理</li>\n<li>virtual DOM不一样,vue会跟踪每一个组件的依赖关系,不需要重新渲染整个组件树.而对于React而言,每当应用的状态被改变时,全部组件都会重新渲染,所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制</li>\n<li>React严格上只针对MVC的view层,Vue则是MVVM模式</li>\n</ul>\n<p>概念</p>\n<ul>\n<li>\n<p>组件通信：父向子、子向父、隔代、兄弟</p>\n</li>\n<li>\n<p>实现通信方式</p>\n</li>\n<li>\n<ul>\n<li>props：父向子传递一般属性、子向父传递函数属性；缺点隔代不好</li>\n<li>vue 自定义事件：Vue 内置，代替函数类型的 props【绑定监听 @、触发事件 emit】</li>\n<li>消息订阅与发布：常见订阅库 pubsub-js，适用于任意关系组件</li>\n<li>vuex：相比 pubsub 管理起来更集中方便</li>\n<li>slot：专门用来实现父向子传递带数据的标签</li>\n</ul>\n</li>\n</ul>\n<h2 id="vue-13-%E7%9A%84%E7%89%88%E6%9C%AC%E7%89%B9%E6%80%A7">Vue 1~3 的版本特性<a class="anchor" href="#vue-13-%E7%9A%84%E7%89%88%E6%9C%AC%E7%89%B9%E6%80%A7">§</a></h2>\n<blockquote>\n<p><a href="https://cn.vuejs.org/v2/guide/migration.html">从 Vue 1.x 迁移到 V2</a></p>\n</blockquote>\n<ul>\n<li>\n<p>Vue1：</p>\n<ul>\n<li>生命周期：<code>init; created; beforeCompile; compiled; ready; beforeDestroy; destroyed; </code>。</li>\n<li>提高循环性能需添加 <code>track-by=\'$index\'</code></li>\n<li><code>v-for=&quot;(index,val) in array&quot;</code></li>\n<li>transition 只是一个属性</li>\n<li><code>&lt;a v-link=&quot;{path:\'/home\'}&quot;&gt;我是主页&lt;/a&gt;</code></li>\n</ul>\n</li>\n<li>\n<p>Vue 2：</p>\n<ul>\n<li>生命周期：\n<ul>\n<li><code>beforeCreate; created; beforeMount; mounted; beforeUpdate; updated; beforeDestroy; destroyed;</code>。</li>\n<li>移除：<code>beforeCompile; attached; detached; </code></li>\n<li>替换：<code>compiled, ready -&gt; mounted</code></li>\n<li>重新命名：<code>init -&gt; beforeCreate</code></li>\n</ul>\n</li>\n<li>Virtual-DOM\n<ul>\n<li>渲染层开始基于轻量级的 Virtual DOM 实现，大多数情况下初始化渲染速度和内存消耗都提升了 2~4 倍</li>\n<li>从模板到 Virtual DOM 的编译阶段使用了一些高阶优化：\n<ul>\n<li>它会检测出静态的 class 名和 attributes 这样它们在初始化渲染之后就永远都不会再被比对。</li>\n<li>它会检测出最大静态子树 (就是不需要动态性的子树) 并且从渲染函数中萃取出来。这样在每次重渲染的时候，它就会直接重用完全相同的 virtual nodes 同时跳过比对。</li>\n</ul>\n</li>\n<li>新的渲染系统同时允许你通过简单的冻结数据来禁用响应式转换，配以手动的强制更新，这意味着你对于重渲染的流程实际上有着完全的控制权。</li>\n</ul>\n</li>\n<li>可选支持 JSX</li>\n<li>支持服务端渲染，相比同时期的同步 SSR React，Vue 2 提供了内建的流式 SSR：在渲染组件时返回一个可读的 stream，然后直接 pipe 到 HTTP response。流式渲染能够确保服务端的响应度，也能让用户更快地获得渲染内容。</li>\n<li>不支持片段代码，<code>template</code> 下只接受一个根节点。</li>\n<li>提高循环性能可不添加 <code>:key=&quot;index&quot;</code></li>\n<li>transition 是一个组件</li>\n<li><code>&lt;router-link to=&quot;/home&quot;&gt;我是主页&lt;/router-link&gt;</code></li>\n</ul>\n</li>\n</ul>\n<h2 id="vue-%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">Vue 的生命周期<a class="anchor" href="#vue-%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">§</a></h2>\n<ul>\n<li>beforeCreate：组件实例被创建之初，组件的属性生效之前</li>\n<li>created：组件实例已经完全创建，属性也绑定，但真实dom还没有生成， $el 还不可用</li>\n<li>beforeMount：在挂载开始之前被调用:相关的 render 函数首次被调用</li>\n<li>mounted el：被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子</li>\n<li>beforeUpdate：组件数据更新之前调用，发生在虚拟 DOM 打补丁之前</li>\n<li>update：组件数据更新之后</li>\n<li>activited：keep-alive专属，组件被激活时调用</li>\n<li>deadctivated：keep-alive专属，组件被销毁时调用</li>\n<li>beforeDestory：组件销毁前调用</li>\n<li>destoryed：组件销毁后调用</li>\n</ul>\n<h2 id="%E5%AE%9E%E7%8E%B0-vue-%E7%9A%84%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A">实现 Vue 的双向绑定<a class="anchor" href="#%E5%AE%9E%E7%8E%B0-vue-%E7%9A%84%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A">§</a></h2>\n<p>Vue 2.x 的 Object.defineProperty 版本</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// 数据</span>\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>\n  text<span class="token operator">:</span> <span class="token string">\'default\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'input\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> span <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'span\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 数据劫持</span>\n<span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">\'text\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 数据变化 —> 修改视图</span>\n  <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    input<span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">=</span> newVal<span class="token punctuation">;</span>\n    span<span class="token punctuation">.</span><span class="token property-access">innerHTML</span> <span class="token operator">=</span> newVal<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 视图更改 --> 数据变化</span>\ninput<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'keyup\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  data<span class="token punctuation">.</span><span class="token property-access">text</span> <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>Vue 3.x 的 proxy 版本</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// 数据</span>\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>\n  text<span class="token operator">:</span> <span class="token string">\'default\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'input\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> span <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'span\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 数据劫持</span>\n<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>\n    <span class="token comment">// 数据变化 —> 修改视图</span>\n    input<span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>\n    span<span class="token punctuation">.</span><span class="token property-access">innerHTML</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>\n    <span class="token keyword control-flow">return</span> value<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 视图更改 --> 数据变化</span>\ninput<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'keyup\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  proxy<span class="token punctuation">.</span><span class="token property-access">text</span> <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="vue-%E7%BB%84%E4%BB%B6%E5%A6%82%E4%BD%95%E9%80%9A%E4%BF%A1">Vue 组件如何通信？<a class="anchor" href="#vue-%E7%BB%84%E4%BB%B6%E5%A6%82%E4%BD%95%E9%80%9A%E4%BF%A1">§</a></h2>\n<ul>\n<li>props/<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>e</mi><mi>m</mi><mi>i</mi><mi>t</mi><mo>+</mo><mi>v</mi><mo>−</mo><mi>o</mi><mi>n</mi><mo>:</mo><mtext>通过</mtext><mi>p</mi><mi>r</mi><mi>o</mi><mi>p</mi><mi>s</mi><mtext>将数据自上而下传递，而通过</mtext></mrow><annotation encoding="application/x-tex">emit+v-on: 通过props将数据自上而下传递，而通过</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.74285em;vertical-align:-0.08333em;"></span><span class="mord mathnormal">e</span><span class="mord mathnormal">m</span><span class="mord mathnormal">i</span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:0.66666em;vertical-align:-0.08333em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">v</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathnormal">o</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.8777699999999999em;vertical-align:-0.19444em;"></span><span class="mord cjk_fallback">通</span><span class="mord cjk_fallback">过</span><span class="mord mathnormal">p</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">o</span><span class="mord mathnormal">p</span><span class="mord mathnormal">s</span><span class="mord cjk_fallback">将</span><span class="mord cjk_fallback">数</span><span class="mord cjk_fallback">据</span><span class="mord cjk_fallback">自</span><span class="mord cjk_fallback">上</span><span class="mord cjk_fallback">而</span><span class="mord cjk_fallback">下</span><span class="mord cjk_fallback">传</span><span class="mord cjk_fallback">递</span><span class="mord cjk_fallback">，</span><span class="mord cjk_fallback">而</span><span class="mord cjk_fallback">通</span><span class="mord cjk_fallback">过</span></span></span></span>emit和v-on来向上传递信息。</li>\n<li>EventBus: 通过EventBus进行信息的发布与订阅</li>\n<li>vuex: 是全局数据管理库，可以通过vuex管理全局的数据流</li>\n<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mi>t</mi><mi>t</mi><mi>r</mi><mi>s</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">attrs/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mord mathnormal">t</span><span class="mord mathnormal">t</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">s</span><span class="mord">/</span></span></span></span>listeners: Vue2.4中加入的<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mi>t</mi><mi>t</mi><mi>r</mi><mi>s</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">attrs/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mord mathnormal">t</span><span class="mord mathnormal">t</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">s</span><span class="mord">/</span></span></span></span>listeners可以进行跨级的组件通信</li>\n<li>provide/inject:以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成 立的时间里始终生效，这成为了跨组件通信的基础</li>\n<li>还有用 solt 插槽或 ref 实例进行通信</li>\n</ul>\n<h2 id="computed-%E5%92%8C-watch-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">computed 和 Watch 有什么区别？<a class="anchor" href="#computed-%E5%92%8C-watch-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">§</a></h2>\n<ul>\n<li>computed：\n<ul>\n<li>computed 是计算属性，也就是计算值，它更多用于计算值的场景。</li>\n<li>computed 具有缓存性，computed 的值在 getter 执行后会缓存，只有在它依赖的属性值改变之后，下一次获取 computed 的值才会重新调用对应的 getter 来计算。</li>\n<li>computed 适用于计算比较消耗性能的计算场景。</li>\n</ul>\n</li>\n<li>watch：\n<ul>\n<li>更多的是观察的作用，监听回调。</li>\n<li>无缓存性，页面重新渲染时值不变化也会执行</li>\n</ul>\n</li>\n<li>当我们进行数值计算，而且依赖于其它数据时，用 computed</li>\n<li>如果需要在某个数据变化时做一些事情，使用 watch 来观察这个数据的变化。</li>\n</ul>\n<h2 id="vue-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A">Vue 如何实现双向绑定？<a class="anchor" href="#vue-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A">§</a></h2>\n<ul>\n<li>利用 Object.defineProperty 劫持对象的访问器，在属性值发生变化时获取变化后响应。</li>\n<li>Vue 3 中通过 Proxy 代理对象进行类似的操作。</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E5%93%8D%E5%BA%94%E5%BC%8F%E7%B3%BB%E7%BB%9F">如何理解 Vue 响应式系统？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E5%93%8D%E5%BA%94%E5%BC%8F%E7%B3%BB%E7%BB%9F">§</a></h2>\n<ul>\n<li>任何一个 Vue Component 都有一个与之对应的 Watcher 实例。</li>\n<li>Vue 的 data 上的属性会被添加 getter 和 setter 属性。</li>\n<li>当 Vue Component render 函数被执行的时候，data 上会被触碰（被读），getter 会被调用，此时 Vue 会记录此 Vue Component 所依赖的所有 data。（依赖收集）</li>\n<li>data 被改动时，setter 会被调用，此时 Vue 会去通知所有依赖此 data 的组件去调用他们的 render 函数进行更新。</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E7%9A%84%E4%BE%9D%E8%B5%96%E6%94%B6%E9%9B%86">如何理解 Vue 的依赖收集？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E7%9A%84%E4%BE%9D%E8%B5%96%E6%94%B6%E9%9B%86">§</a></h2>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E7%9A%84%E5%8F%98%E5%8C%96%E4%BE%A6%E6%B5%8B%E5%8E%9F%E7%90%86">如何理解 Vue 的变化侦测原理？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E7%9A%84%E5%8F%98%E5%8C%96%E4%BE%A6%E6%B5%8B%E5%8E%9F%E7%90%86">§</a></h2>\n<ul>\n<li>Vue 已经可以数据劫持后，为什么还需要虚拟 DOM 进行 diff 检测差异？\n<ul>\n<li>现代前端框架有两种方式侦测变化,一种是pull一种是push</li>\n<li>pull: 其代表为React,我们可以回忆一下React是如何侦测到变化的,我们通常会用 setState API显式更新,然后React会进 行一层层的Virtual Dom Diff操作找出差异,然后Patch到DOM上,React从一开始就不知道到底是哪发生了变化,只是知道 「有变化了」,然后再进行比较暴力的Diff操作查找「哪发生变化了」，另外一个代表就是Angular的脏检查操作。</li>\n<li>push: Vue的响应式系统则是push的代表,当Vue程序初始化的时候就会对数据data进行依赖的收集,一但数据发生变化,响 应式系统就会立刻得知,因此Vue是一开始就知道是「在哪发生变化了」,但是这又会产生一个问题,如果你熟悉Vue的响 应式系统就知道,通常一个绑定一个数据就需要一个Watcher,一但我们的绑定细粒度过高就会产生大量的Watcher,这会 带来内存以及依赖追踪的开销,而细粒度过低会无法精准侦测变化,因此Vue的设计是选择中等细粒度的方案,在组件级别 进行push侦测的方式,也就是那套响应式系统,通常我们会第一时间侦测到发生变化的组件,然后在组件内部进行Virtual Dom Diff获取更加具体的差异,而Virtual Dom Diff则是pull操作,Vue是push+pull结合的方式进行变化侦测的。</li>\n</ul>\n</li>\n<li>Vue 中为什么没有类似的 shouldComponentUpdate？\n<ul>\n<li>React是pull的方式侦测变化,当React知道发生变化后,会使用Virtual Dom Diff进行差异检测,但是很多组件实际上是肯定 不会发生变化的,这个时候需要用shouldComponentUpdate进行手动操作来减少diff,从而提高程序整体的性能.</li>\n<li>Vue是pull+push的方式侦测变化的,在一开始就知道那个组件发生了变化,因此在push的阶段并不需要手动控制diff,而组 件内部采用的diff方式实际上是可以引入类似于shouldComponentUpdate相关生命周期的,但是通常合理大小的组件不会 有过量的diff,手动优化的价值有限,因此目前Vue并没有考虑引入shouldComponentUpdate这种手动优化的生命周期.</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E7%9A%84-keep-alive">如何理解 Vue 的 Keep-Alive？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E7%9A%84-keep-alive">§</a></h2>\n<h2 id="%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3-gettersetter-%E4%B8%8D%E8%83%BD%E7%9B%91%E5%90%AC%E6%95%B0%E7%BB%84%E5%8F%98%E5%BC%82%E6%96%B9%E6%B3%95">如何解决 getter/setter 不能监听数组变异方法<a class="anchor" href="#%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3-gettersetter-%E4%B8%8D%E8%83%BD%E7%9B%91%E5%90%AC%E6%95%B0%E7%BB%84%E5%8F%98%E5%BC%82%E6%96%B9%E6%B3%95">§</a></h2>\n<h2 id="%E7%9B%91%E5%90%AC%E7%9A%84%E5%9B%9E%E8%B0%83%E5%92%8C%E4%BA%8B%E4%BB%B6%E6%80%8E%E4%B9%88%E8%A7%A3%E8%80%A6%E7%9A%84">监听的回调和事件怎么解耦的<a class="anchor" href="#%E7%9B%91%E5%90%AC%E7%9A%84%E5%9B%9E%E8%B0%83%E5%92%8C%E4%BA%8B%E4%BB%B6%E6%80%8E%E4%B9%88%E8%A7%A3%E8%80%A6%E7%9A%84">§</a></h2>\n<h2 id="watcher-%E5%8E%BB%E9%87%8D%E6%80%8E%E4%B9%88%E5%81%9A%E7%9A%84">watcher 去重怎么做的<a class="anchor" href="#watcher-%E5%8E%BB%E9%87%8D%E6%80%8E%E4%B9%88%E5%81%9A%E7%9A%84">§</a></h2>\n<h2 id="dom%E6%89%B9%E6%9B%B4%E6%96%B0%E6%80%8E%E4%B9%88%E5%81%9A%E7%9A%84">DOM批更新怎么做的<a class="anchor" href="#dom%E6%89%B9%E6%9B%B4%E6%96%B0%E6%80%8E%E4%B9%88%E5%81%9A%E7%9A%84">§</a></h2>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-169223577-1" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Vue"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<blockquote>\n<p><a href="https://juejin.im/post/6844903876231954446">vue 269 个知识点（面试题）为你保驾护航</a>。</p>\n</blockquote>\n<h2 id="react-%E5%92%8C-vue-%E7%9A%84%E5%8C%BA%E5%88%AB">React 和 Vue 的区别？<a class="anchor" href="#react-%E5%92%8C-vue-%E7%9A%84%E5%8C%BA%E5%88%AB">§</a></h2>\n<p>相同点</p>\n<ul>\n<li>都有组件化开发和Virtual DOM</li>\n<li>都支持props进行父子组件间数据通信</li>\n<li>都支持数据驱动视图, 不直接操作真实DOM, 更新状态数据界面就自动更新</li>\n<li>都支持服务器端渲染</li>\n<li>都有支持native的方案,React的React Native,Vue的Weex</li>\n</ul>\n<p>不同点</p>\n<ul>\n<li>数据绑定: vue实现了数据的双向绑定,react数据流动是单向的</li>\n<li>组件写法不一样, React推荐的做法是 JSX , 也就是把HTML和CSS全都写进JavaScript了,即\'all in js\'; Vue推荐的做法是webpack+vue-loader的单文件组件格式,即html,css,js写在同一个文件</li>\n<li>state对象在react应用中不可变的,需要使用setState方法更新状态;在vue中,state对象不是必须的,数据由data属性在vue对象中管理</li>\n<li>virtual DOM不一样,vue会跟踪每一个组件的依赖关系,不需要重新渲染整个组件树.而对于React而言,每当应用的状态被改变时,全部组件都会重新渲染,所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制</li>\n<li>React严格上只针对MVC的view层,Vue则是MVVM模式</li>\n</ul>\n<p>概念</p>\n<ul>\n<li>\n<p>组件通信：父向子、子向父、隔代、兄弟</p>\n</li>\n<li>\n<p>实现通信方式</p>\n</li>\n<li>\n<ul>\n<li>props：父向子传递一般属性、子向父传递函数属性；缺点隔代不好</li>\n<li>vue 自定义事件：Vue 内置，代替函数类型的 props【绑定监听 @、触发事件 emit】</li>\n<li>消息订阅与发布：常见订阅库 pubsub-js，适用于任意关系组件</li>\n<li>vuex：相比 pubsub 管理起来更集中方便</li>\n<li>slot：专门用来实现父向子传递带数据的标签</li>\n</ul>\n</li>\n</ul>\n<h2 id="vue-13-%E7%9A%84%E7%89%88%E6%9C%AC%E7%89%B9%E6%80%A7">Vue 1~3 的版本特性<a class="anchor" href="#vue-13-%E7%9A%84%E7%89%88%E6%9C%AC%E7%89%B9%E6%80%A7">§</a></h2>\n<blockquote>\n<p><a href="https://cn.vuejs.org/v2/guide/migration.html">从 Vue 1.x 迁移到 V2</a></p>\n</blockquote>\n<ul>\n<li>\n<p>Vue1：</p>\n<ul>\n<li>生命周期：<code>init; created; beforeCompile; compiled; ready; beforeDestroy; destroyed; </code>。</li>\n<li>提高循环性能需添加 <code>track-by=\'$index\'</code></li>\n<li><code>v-for=&quot;(index,val) in array&quot;</code></li>\n<li>transition 只是一个属性</li>\n<li><code>&lt;a v-link=&quot;{path:\'/home\'}&quot;&gt;我是主页&lt;/a&gt;</code></li>\n</ul>\n</li>\n<li>\n<p>Vue 2：</p>\n<ul>\n<li>生命周期：\n<ul>\n<li><code>beforeCreate; created; beforeMount; mounted; beforeUpdate; updated; beforeDestroy; destroyed;</code>。</li>\n<li>移除：<code>beforeCompile; attached; detached; </code></li>\n<li>替换：<code>compiled, ready -&gt; mounted</code></li>\n<li>重新命名：<code>init -&gt; beforeCreate</code></li>\n</ul>\n</li>\n<li>Virtual-DOM\n<ul>\n<li>渲染层开始基于轻量级的 Virtual DOM 实现，大多数情况下初始化渲染速度和内存消耗都提升了 2~4 倍</li>\n<li>从模板到 Virtual DOM 的编译阶段使用了一些高阶优化：\n<ul>\n<li>它会检测出静态的 class 名和 attributes 这样它们在初始化渲染之后就永远都不会再被比对。</li>\n<li>它会检测出最大静态子树 (就是不需要动态性的子树) 并且从渲染函数中萃取出来。这样在每次重渲染的时候，它就会直接重用完全相同的 virtual nodes 同时跳过比对。</li>\n</ul>\n</li>\n<li>新的渲染系统同时允许你通过简单的冻结数据来禁用响应式转换，配以手动的强制更新，这意味着你对于重渲染的流程实际上有着完全的控制权。</li>\n</ul>\n</li>\n<li>可选支持 JSX</li>\n<li>支持服务端渲染，相比同时期的同步 SSR React，Vue 2 提供了内建的流式 SSR：在渲染组件时返回一个可读的 stream，然后直接 pipe 到 HTTP response。流式渲染能够确保服务端的响应度，也能让用户更快地获得渲染内容。</li>\n<li>不支持片段代码，<code>template</code> 下只接受一个根节点。</li>\n<li>提高循环性能可不添加 <code>:key=&quot;index&quot;</code></li>\n<li>transition 是一个组件</li>\n<li><code>&lt;router-link to=&quot;/home&quot;&gt;我是主页&lt;/router-link&gt;</code></li>\n</ul>\n</li>\n</ul>\n<h2 id="vue-%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">Vue 的生命周期<a class="anchor" href="#vue-%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">§</a></h2>\n<ul>\n<li>beforeCreate：组件实例被创建之初，组件的属性生效之前</li>\n<li>created：组件实例已经完全创建，属性也绑定，但真实dom还没有生成， $el 还不可用</li>\n<li>beforeMount：在挂载开始之前被调用:相关的 render 函数首次被调用</li>\n<li>mounted el：被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子</li>\n<li>beforeUpdate：组件数据更新之前调用，发生在虚拟 DOM 打补丁之前</li>\n<li>update：组件数据更新之后</li>\n<li>activited：keep-alive专属，组件被激活时调用</li>\n<li>deadctivated：keep-alive专属，组件被销毁时调用</li>\n<li>beforeDestory：组件销毁前调用</li>\n<li>destoryed：组件销毁后调用</li>\n</ul>\n<h2 id="%E5%AE%9E%E7%8E%B0-vue-%E7%9A%84%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A">实现 Vue 的双向绑定<a class="anchor" href="#%E5%AE%9E%E7%8E%B0-vue-%E7%9A%84%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A">§</a></h2>\n<p>Vue 2.x 的 Object.defineProperty 版本</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// 数据</span>\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>\n  text<span class="token operator">:</span> <span class="token string">\'default\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'input\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> span <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'span\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 数据劫持</span>\n<span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">\'text\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 数据变化 —> 修改视图</span>\n  <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    input<span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">=</span> newVal<span class="token punctuation">;</span>\n    span<span class="token punctuation">.</span><span class="token property-access">innerHTML</span> <span class="token operator">=</span> newVal<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 视图更改 --> 数据变化</span>\ninput<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'keyup\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  data<span class="token punctuation">.</span><span class="token property-access">text</span> <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>Vue 3.x 的 proxy 版本</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// 数据</span>\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>\n  text<span class="token operator">:</span> <span class="token string">\'default\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'input\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> span <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'span\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 数据劫持</span>\n<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>\n    <span class="token comment">// 数据变化 —> 修改视图</span>\n    input<span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>\n    span<span class="token punctuation">.</span><span class="token property-access">innerHTML</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>\n    <span class="token keyword control-flow">return</span> value<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 视图更改 --> 数据变化</span>\ninput<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'keyup\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  proxy<span class="token punctuation">.</span><span class="token property-access">text</span> <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="vue-%E7%BB%84%E4%BB%B6%E5%A6%82%E4%BD%95%E9%80%9A%E4%BF%A1">Vue 组件如何通信？<a class="anchor" href="#vue-%E7%BB%84%E4%BB%B6%E5%A6%82%E4%BD%95%E9%80%9A%E4%BF%A1">§</a></h2>\n<ul>\n<li>props/<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>e</mi><mi>m</mi><mi>i</mi><mi>t</mi><mo>+</mo><mi>v</mi><mo>−</mo><mi>o</mi><mi>n</mi><mo>:</mo><mtext>通过</mtext><mi>p</mi><mi>r</mi><mi>o</mi><mi>p</mi><mi>s</mi><mtext>将数据自上而下传递，而通过</mtext></mrow><annotation encoding="application/x-tex">emit+v-on: 通过props将数据自上而下传递，而通过</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.74285em;vertical-align:-0.08333em;"></span><span class="mord mathnormal">e</span><span class="mord mathnormal">m</span><span class="mord mathnormal">i</span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:0.66666em;vertical-align:-0.08333em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">v</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathnormal">o</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.8777699999999999em;vertical-align:-0.19444em;"></span><span class="mord cjk_fallback">通</span><span class="mord cjk_fallback">过</span><span class="mord mathnormal">p</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">o</span><span class="mord mathnormal">p</span><span class="mord mathnormal">s</span><span class="mord cjk_fallback">将</span><span class="mord cjk_fallback">数</span><span class="mord cjk_fallback">据</span><span class="mord cjk_fallback">自</span><span class="mord cjk_fallback">上</span><span class="mord cjk_fallback">而</span><span class="mord cjk_fallback">下</span><span class="mord cjk_fallback">传</span><span class="mord cjk_fallback">递</span><span class="mord cjk_fallback">，</span><span class="mord cjk_fallback">而</span><span class="mord cjk_fallback">通</span><span class="mord cjk_fallback">过</span></span></span></span>emit和v-on来向上传递信息。</li>\n<li>EventBus: 通过EventBus进行信息的发布与订阅</li>\n<li>vuex: 是全局数据管理库，可以通过vuex管理全局的数据流</li>\n<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mi>t</mi><mi>t</mi><mi>r</mi><mi>s</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">attrs/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mord mathnormal">t</span><span class="mord mathnormal">t</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">s</span><span class="mord">/</span></span></span></span>listeners: Vue2.4中加入的<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mi>t</mi><mi>t</mi><mi>r</mi><mi>s</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">attrs/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mord mathnormal">t</span><span class="mord mathnormal">t</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">s</span><span class="mord">/</span></span></span></span>listeners可以进行跨级的组件通信</li>\n<li>provide/inject:以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成 立的时间里始终生效，这成为了跨组件通信的基础</li>\n<li>还有用 solt 插槽或 ref 实例进行通信</li>\n</ul>\n<h2 id="computed-%E5%92%8C-watch-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">computed 和 Watch 有什么区别？<a class="anchor" href="#computed-%E5%92%8C-watch-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">§</a></h2>\n<ul>\n<li>computed：\n<ul>\n<li>computed 是计算属性，也就是计算值，它更多用于计算值的场景。</li>\n<li>computed 具有缓存性，computed 的值在 getter 执行后会缓存，只有在它依赖的属性值改变之后，下一次获取 computed 的值才会重新调用对应的 getter 来计算。</li>\n<li>computed 适用于计算比较消耗性能的计算场景。</li>\n</ul>\n</li>\n<li>watch：\n<ul>\n<li>更多的是观察的作用，监听回调。</li>\n<li>无缓存性，页面重新渲染时值不变化也会执行</li>\n</ul>\n</li>\n<li>当我们进行数值计算，而且依赖于其它数据时，用 computed</li>\n<li>如果需要在某个数据变化时做一些事情，使用 watch 来观察这个数据的变化。</li>\n</ul>\n<h2 id="vue-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A">Vue 如何实现双向绑定？<a class="anchor" href="#vue-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A">§</a></h2>\n<ul>\n<li>利用 Object.defineProperty 劫持对象的访问器，在属性值发生变化时获取变化后响应。</li>\n<li>Vue 3 中通过 Proxy 代理对象进行类似的操作。</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E5%93%8D%E5%BA%94%E5%BC%8F%E7%B3%BB%E7%BB%9F">如何理解 Vue 响应式系统？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E5%93%8D%E5%BA%94%E5%BC%8F%E7%B3%BB%E7%BB%9F">§</a></h2>\n<ul>\n<li>任何一个 Vue Component 都有一个与之对应的 Watcher 实例。</li>\n<li>Vue 的 data 上的属性会被添加 getter 和 setter 属性。</li>\n<li>当 Vue Component render 函数被执行的时候，data 上会被触碰（被读），getter 会被调用，此时 Vue 会记录此 Vue Component 所依赖的所有 data。（依赖收集）</li>\n<li>data 被改动时，setter 会被调用，此时 Vue 会去通知所有依赖此 data 的组件去调用他们的 render 函数进行更新。</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E7%9A%84%E4%BE%9D%E8%B5%96%E6%94%B6%E9%9B%86">如何理解 Vue 的依赖收集？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E7%9A%84%E4%BE%9D%E8%B5%96%E6%94%B6%E9%9B%86">§</a></h2>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E7%9A%84%E5%8F%98%E5%8C%96%E4%BE%A6%E6%B5%8B%E5%8E%9F%E7%90%86">如何理解 Vue 的变化侦测原理？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E7%9A%84%E5%8F%98%E5%8C%96%E4%BE%A6%E6%B5%8B%E5%8E%9F%E7%90%86">§</a></h2>\n<ul>\n<li>Vue 已经可以数据劫持后，为什么还需要虚拟 DOM 进行 diff 检测差异？\n<ul>\n<li>现代前端框架有两种方式侦测变化,一种是pull一种是push</li>\n<li>pull: 其代表为React,我们可以回忆一下React是如何侦测到变化的,我们通常会用 setState API显式更新,然后React会进 行一层层的Virtual Dom Diff操作找出差异,然后Patch到DOM上,React从一开始就不知道到底是哪发生了变化,只是知道 「有变化了」,然后再进行比较暴力的Diff操作查找「哪发生变化了」，另外一个代表就是Angular的脏检查操作。</li>\n<li>push: Vue的响应式系统则是push的代表,当Vue程序初始化的时候就会对数据data进行依赖的收集,一但数据发生变化,响 应式系统就会立刻得知,因此Vue是一开始就知道是「在哪发生变化了」,但是这又会产生一个问题,如果你熟悉Vue的响 应式系统就知道,通常一个绑定一个数据就需要一个Watcher,一但我们的绑定细粒度过高就会产生大量的Watcher,这会 带来内存以及依赖追踪的开销,而细粒度过低会无法精准侦测变化,因此Vue的设计是选择中等细粒度的方案,在组件级别 进行push侦测的方式,也就是那套响应式系统,通常我们会第一时间侦测到发生变化的组件,然后在组件内部进行Virtual Dom Diff获取更加具体的差异,而Virtual Dom Diff则是pull操作,Vue是push+pull结合的方式进行变化侦测的。</li>\n</ul>\n</li>\n<li>Vue 中为什么没有类似的 shouldComponentUpdate？\n<ul>\n<li>React是pull的方式侦测变化,当React知道发生变化后,会使用Virtual Dom Diff进行差异检测,但是很多组件实际上是肯定 不会发生变化的,这个时候需要用shouldComponentUpdate进行手动操作来减少diff,从而提高程序整体的性能.</li>\n<li>Vue是pull+push的方式侦测变化的,在一开始就知道那个组件发生了变化,因此在push的阶段并不需要手动控制diff,而组 件内部采用的diff方式实际上是可以引入类似于shouldComponentUpdate相关生命周期的,但是通常合理大小的组件不会 有过量的diff,手动优化的价值有限,因此目前Vue并没有考虑引入shouldComponentUpdate这种手动优化的生命周期.</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E7%9A%84-keep-alive">如何理解 Vue 的 Keep-Alive？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E7%9A%84-keep-alive">§</a></h2>\n<h2 id="%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3-gettersetter-%E4%B8%8D%E8%83%BD%E7%9B%91%E5%90%AC%E6%95%B0%E7%BB%84%E5%8F%98%E5%BC%82%E6%96%B9%E6%B3%95">如何解决 getter/setter 不能监听数组变异方法<a class="anchor" href="#%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3-gettersetter-%E4%B8%8D%E8%83%BD%E7%9B%91%E5%90%AC%E6%95%B0%E7%BB%84%E5%8F%98%E5%BC%82%E6%96%B9%E6%B3%95">§</a></h2>\n<h2 id="%E7%9B%91%E5%90%AC%E7%9A%84%E5%9B%9E%E8%B0%83%E5%92%8C%E4%BA%8B%E4%BB%B6%E6%80%8E%E4%B9%88%E8%A7%A3%E8%80%A6%E7%9A%84">监听的回调和事件怎么解耦的<a class="anchor" href="#%E7%9B%91%E5%90%AC%E7%9A%84%E5%9B%9E%E8%B0%83%E5%92%8C%E4%BA%8B%E4%BB%B6%E6%80%8E%E4%B9%88%E8%A7%A3%E8%80%A6%E7%9A%84">§</a></h2>\n<h2 id="watcher-%E5%8E%BB%E9%87%8D%E6%80%8E%E4%B9%88%E5%81%9A%E7%9A%84">watcher 去重怎么做的<a class="anchor" href="#watcher-%E5%8E%BB%E9%87%8D%E6%80%8E%E4%B9%88%E5%81%9A%E7%9A%84">§</a></h2>\n<h2 id="dom%E6%89%B9%E6%9B%B4%E6%96%B0%E6%80%8E%E4%B9%88%E5%81%9A%E7%9A%84">DOM批更新怎么做的<a class="anchor" href="#dom%E6%89%B9%E6%9B%B4%E6%96%B0%E6%80%8E%E4%B9%88%E5%81%9A%E7%9A%84">§</a></h2>'
        } }),
    'contentHasKatex': true,
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#react-%E5%92%8C-vue-%E7%9A%84%E5%8C%BA%E5%88%AB">React 和 Vue 的区别？</a></li><li><a href="#vue-13-%E7%9A%84%E7%89%88%E6%9C%AC%E7%89%B9%E6%80%A7">Vue 1~3 的版本特性</a></li><li><a href="#vue-%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">Vue 的生命周期</a></li><li><a href="#%E5%AE%9E%E7%8E%B0-vue-%E7%9A%84%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A">实现 Vue 的双向绑定</a></li><li><a href="#vue-%E7%BB%84%E4%BB%B6%E5%A6%82%E4%BD%95%E9%80%9A%E4%BF%A1">Vue 组件如何通信？</a></li><li><a href="#computed-%E5%92%8C-watch-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">computed 和 Watch 有什么区别？</a></li><li><a href="#vue-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A">Vue 如何实现双向绑定？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E5%93%8D%E5%BA%94%E5%BC%8F%E7%B3%BB%E7%BB%9F">如何理解 Vue 响应式系统？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E7%9A%84%E4%BE%9D%E8%B5%96%E6%94%B6%E9%9B%86">如何理解 Vue 的依赖收集？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E7%9A%84%E5%8F%98%E5%8C%96%E4%BE%A6%E6%B5%8B%E5%8E%9F%E7%90%86">如何理解 Vue 的变化侦测原理？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-vue-%E7%9A%84-keep-alive">如何理解 Vue 的 Keep-Alive？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3-gettersetter-%E4%B8%8D%E8%83%BD%E7%9B%91%E5%90%AC%E6%95%B0%E7%BB%84%E5%8F%98%E5%BC%82%E6%96%B9%E6%B3%95">如何解决 getter/setter 不能监听数组变异方法</a></li><li><a href="#%E7%9B%91%E5%90%AC%E7%9A%84%E5%9B%9E%E8%B0%83%E5%92%8C%E4%BA%8B%E4%BB%B6%E6%80%8E%E4%B9%88%E8%A7%A3%E8%80%A6%E7%9A%84">监听的回调和事件怎么解耦的</a></li><li><a href="#watcher-%E5%8E%BB%E9%87%8D%E6%80%8E%E4%B9%88%E5%81%9A%E7%9A%84">watcher 去重怎么做的</a></li><li><a href="#dom%E6%89%B9%E6%9B%B4%E6%96%B0%E6%80%8E%E4%B9%88%E5%81%9A%E7%9A%84">DOM批更新怎么做的</a></li></ol></nav>'
        } }),
    'date': "2020-10-25T07:04:16.000Z",
    'updated': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ]
};
