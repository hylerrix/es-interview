import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "text": "JavaScript 基础知识",
        "link": "articles/02-ECMAScript+/01-javascript.html"
    },
    'next': {
        "text": "JavaScript 常见实战题",
        "link": "articles/02-ECMAScript+/03-javascript-parctice.html"
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
                },
                {
                    "text": "React",
                    "link": "articles/06-FE+Browser/05-react.html",
                    "pagePath": "articles/06-FE+Browser/05-react.md"
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
    'pagePath': "articles/02-ECMAScript+/02-typescript.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/02-ECMAScript+/02-typescript.html",
    'title': "TypeScript",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>TypeScript</h1>\n<blockquote>\n<p>装饰器、静态类型、类型注解、类型推断、泛型、类型定义文件、模块化、打包编译、装饰器、Metadata、设计模式、元祖</p>\n</blockquote>\n<blockquote>\n<p>TS 特有的东西：typeof，keyof， infer</p>\n</blockquote>\n<h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81-typescript">为什么需要 TypeScript<a class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81-typescript">§</a></h2>\n<ul>\n<li>\n<p>TypeScript 的基础特性：</p>\n</li>\n<li>\n<p>使用编译为 JavaScript 的更高级的语言优点：</p>\n<ul>\n<li>修复了 JavaScript 中一些长期问题，并摒弃了 JavaScript 不好的做法。</li>\n<li>在 JavaScript 的基础上提供一些语法糖，使我们能够编写更短的代码。ES2015 对语法糖支持的更好。</li>\n<li>对于需要长时间维护的大型项目，静态类型非常好用。</li>\n</ul>\n</li>\n<li>\n<p>使用编译为 JavaScript 的更高级的语言缺点：</p>\n<ul>\n<li>由于浏览器只运行 JavaScript、所以需要构建、编译过程，在将代码提供给浏览器之前，需要将代码转移为 JavaScript。</li>\n<li>如果 source map 不能很好地映射到预编译的源代码，调试会很痛苦。</li>\n<li>大多数开发人员不熟悉这些语言，需要增加团队成本来学习。</li>\n</ul>\n</li>\n</ul>\n<h2 id="typescript-v1v4-%E6%96%B0%E7%89%B9%E6%80%A7">TypeScript v1~v4 新特性<a class="anchor" href="#typescript-v1v4-%E6%96%B0%E7%89%B9%E6%80%A7">§</a></h2>\n<ul>\n<li>\n<p>v3.x</p>\n</li>\n<li>\n<p>v4.x</p>\n<ul>\n<li>可变元组类型</li>\n<li>Class 从构造函数推断成员变量类型：在构造函数里对成员变量的赋值可以直接为成员变量推导类型。</li>\n<li><strong>catch error 定义为 unknown 类型</strong>：以保证后面的代码以健壮的类型判断方式书写</li>\n<li>支持 <strong>jsxFragmentFactory</strong> 参数定义 Fragment 工厂函数</li>\n<li>构建速度提升，提升了 --incremental + --noEmitOnError 场景的构建速度</li>\n<li>支持 <code>--incremental</code> + <code>--noEmit</code> 参数同时生效。</li>\n<li><strong>支持 <code>@deprecated</code> 注释</strong>， 使用此注释时，代码中会使用 删除线 警告调用者。</li>\n<li><strong>局部 TS Server 快速启动功能</strong>，打开大型项目时，TS Server 要准备很久，Typescript 4 在 VSCode 编译器下做了优化，可以提前对当前打开的单文件进行部分语法响应。</li>\n<li><strong>更智能的自动导入，</strong> 现在 <code>package.json</code> <code>dependencies</code> 字段定义的依赖将优先作为自动导入的依据，而不再是遍历 <code>node_modules</code> 导入一些非预期的包。</li>\n</ul>\n</li>\n</ul>\n<h2 id="typescript-%E5%92%8C-babel-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">TypeScript 和 Babel 有什么区别？<a class="anchor" href="#typescript-%E5%92%8C-babel-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">§</a></h2>\n<ul>\n<li>TypeScript 是一门语言、Babel 是一个工具。</li>\n<li>......</li>\n</ul>\n<h2 id="typescript-%E7%9A%84%E5%86%85%E7%BD%AE%E7%B1%BB%E5%9E%8B%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">TypeScript 的内置类型都有哪些？<a class="anchor" href="#typescript-%E7%9A%84%E5%86%85%E7%BD%AE%E7%B1%BB%E5%9E%8B%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">§</a></h2>\n<ul>\n<li>ECMAScript 的内置对象：<code>Boolean</code>、<code>Error</code>、<code>Date</code>、<code>RegExp</code> 等。</li>\n<li>DOM 和 BOM 的内置对象：<code>Document</code>、<code>HTMLElement</code>、<code>Event</code>、<code>NodeList</code> 等。</li>\n<li>TypeScript 核心库的定义文件：TypeScript 核心库的定义文件中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的。</li>\n<li>第三方类型：如 <code>@types/node</code>。</li>\n</ul>\n<h2 id="typescript%E6%94%AF%E6%8C%81%E5%93%AA%E4%BA%9B%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%9C%AF%E8%AF%AD">TypeScript支持哪些面向对象的术语？<a class="anchor" href="#typescript%E6%94%AF%E6%8C%81%E5%93%AA%E4%BA%9B%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%9C%AF%E8%AF%AD">§</a></h2>\n<ul>\n<li>模块、类、接口、封装、继承、多态、数据类型、成员函数</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-typescript-%E6%B3%9B%E5%9E%8B">如何理解 TypeScript 泛型？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-typescript-%E6%B3%9B%E5%9E%8B">§</a></h2>\n<ul>\n<li>泛型支持递归</li>\n</ul>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">type</span> <span class="token class-name">ListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>\n  next<span class="token operator">:</span> ListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E5%A6%82%E4%BD%95%E7%BC%96%E5%86%99-tsconfigjson">如何编写 tsconfig.json？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%BC%96%E5%86%99-tsconfigjson">§</a></h2>\n<ul>\n<li>常用的编译配置：\n<ul>\n<li>allowJs：允许编译 js 文件</li>\n<li>sourceMap：生成一个 .map.js 的文件，用于其他工具来 debugg，类似于 webpack 的 sourceMap</li>\n<li>noImplicitAny：不允许用 any，如果初学 ts，建议项目部太复杂的情况下，可以借此来进行限制，前置自己培养对 ts 的理解</li>\n<li>module &amp;&amp; target：target 是编译成哪个版本的 js（es3、es5、es6...）；module 是模板生成的形式。默认情况下，当 target 是 es3 的时候，那 module 默认为 commonjs 形式，否则为 es6 形式。\n<ul>\n<li>注意（和 outFile 搭配使用）：生成的模块形式：none、commonjs、amd、system、umd、es6、es2015 或 esnext 只有 amd 和 system 能和 outFile 一起使用 target 为 es5 或更低时可用 es6 和 es2015</li>\n</ul>\n</li>\n<li>lib：引入 ES 的功能库，比如想在项目中用js中Set，Map等新的数据结构，或 promise 等，那要在 lib 中引入 es2015。</li>\n<li>removeComments 编译出的文件是否带注释，当为 false 的时候可以减少编译出文件的体积。</li>\n<li>allowSyntheticDefaultImports：为 false 的时候，引入模块的时候必须以 * as 的形式</li>\n<li>jsx：如果用 tsx 文件（React-ts）那么该项要配置成 jsx:&quot;react&quot;</li>\n<li>baseUrl</li>\n<li>paths：必须和 baseUrl 联用</li>\n</ul>\n</li>\n</ul>\n<h2 id="unknown-%E5%92%8C-any-%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%8C%BA%E5%88%AB">unknown 和 any 类型的区别？<a class="anchor" href="#unknown-%E5%92%8C-any-%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%8C%BA%E5%88%AB">§</a></h2>\n<p>unknown 类型不能赋值给除了 unknown 或 any 的其他任何类型，使用前必需显式进行指定类型，或是在有条件判断情况下能够隐式地进行类型推断的情况。</p>\n<ul>\n<li>unknown 类型，它是 any 类型对应的安全类型。</li>\n<li>unknown 和 any 的主要区别是，unknown 类型会更加严格：在对 unknown 类型的值执行大多数操作之前，我们必须进行某种形式的检查。而在对 any 类型的值执行操作之前，我们不必进行任何检查</li>\n</ul>\n<h2 id="type-%E5%92%8C-interface-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">type 和 interface 有什么区别？<a class="anchor" href="#type-%E5%92%8C-interface-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">§</a></h2>\n<ul>\n<li>interface是接口，type是类型，本身就是两个概念。只是碰巧表现上比较相似。</li>\n<li>希望定义一个变量类型，就用type，如果希望是能够继承并约束的，就用interface。</li>\n<li>如果你不知道该用哪个，说明你只是想定义一个类型而非接口，所以应该用type。</li>\n<li>相同点：都可以描述一个对象或者函数</li>\n<li>不同点\n<ul>\n<li>interface 可以 extends， 但 type 是不允许 extends 和 implement 的，但是 type 缺可以通过交叉类型 实现 interface 的 extend 行为</li>\n<li>interface 能够合并多个相同命名的声明</li>\n<li>interface 可以 extends type, type 也可以 与 interface 类型 交叉</li>\n<li>type 可以声明基本类型别名，联合类型，元组等类型</li>\n<li>type 语句中还可以使用 typeof 获取实例的 类型进行赋值</li>\n</ul>\n</li>\n</ul>\n<pre class="language-typescript"><code class="language-typescript"><span class="token comment">// Type 一些骚操作</span>\n<span class="token keyword">type</span> <span class="token class-name">StringOrNumber</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>  \n<span class="token keyword">type</span> <span class="token class-name">Text</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>  \n<span class="token keyword">type</span> <span class="token class-name">NameLookup</span> <span class="token operator">=</span> Dictionary<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> Person<span class="token operator">></span><span class="token punctuation">;</span>  \n<span class="token keyword">type</span> <span class="token class-name">Callback<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>  \n<span class="token keyword">type</span> <span class="token class-name">Pair<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  \n<span class="token keyword">type</span> <span class="token class-name">Coordinates</span> <span class="token operator">=</span> Pair<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span><span class="token punctuation">;</span>  \n<span class="token keyword">type</span> <span class="token class-name">Tree<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token punctuation">{</span> left<span class="token operator">:</span> Tree<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">,</span> right<span class="token operator">:</span> Tree<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E5%8A%A8%E6%89%8B%E5%AE%9E%E7%8E%B0-p-in-arrtype-string">动手实现 [P in ArrType]?: string[]<a class="anchor" href="#%E5%8A%A8%E6%89%8B%E5%AE%9E%E7%8E%B0-p-in-arrtype-string">§</a></h2>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">TestType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> ArrType<span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h2 id="%E5%8A%A8%E6%89%8B%E5%AE%9E%E7%8E%B0%E8%A3%85%E9%A5%B0%E5%99%A8">动手实现装饰器<a class="anchor" href="#%E5%8A%A8%E6%89%8B%E5%AE%9E%E7%8E%B0%E8%A3%85%E9%A5%B0%E5%99%A8">§</a></h2>\n<pre class="language-typescript"><code class="language-typescript"><span class="token doc-comment comment">/**\n * 处理异常装饰器, 挂在需要实现try/catch的方法上\n * <span class="token keyword">@param</span> <span class="token parameter">fn</span>\n * <span class="token keyword">@constructor</span>\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Throwable</span> <span class="token operator">=</span> <span class="token punctuation">(</span>fn<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> descriptor<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> original <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>value\n    descriptor<span class="token punctuation">.</span><span class="token function-variable function">value</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> f <span class="token operator">=</span> fn <span class="token operator">?</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">undefined</span>\n      <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        <span class="token function">original</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">notificationErrorLog</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n        f <span class="token operator">&amp;&amp;</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h2 id="%E5%A6%82%E4%BD%95%E5%9C%A8-typescript-%E4%B8%AD%E5%AE%9E%E7%8E%B0%E7%BB%A7%E6%89%BF">如何在 TypeScript 中实现继承？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E5%9C%A8-typescript-%E4%B8%AD%E5%AE%9E%E7%8E%B0%E7%BB%A7%E6%89%BF">§</a></h2>\n<h2 id="typescript-%E4%B8%AD%E7%9A%84%E6%A8%A1%E5%9D%97%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E7%82%B9">Typescript 中的模块有什么特点？<a class="anchor" href="#typescript-%E4%B8%AD%E7%9A%84%E6%A8%A1%E5%9D%97%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E7%82%B9">§</a></h2>\n<h2 id="typescript-%E4%B8%AD%E7%9A%84%E6%9E%9A%E4%B8%BE">TypeScript 中的枚举？<a class="anchor" href="#typescript-%E4%B8%AD%E7%9A%84%E6%9E%9A%E4%B8%BE">§</a></h2>\n<h2 id="%E5%A6%82%E4%BD%95%E6%A3%80%E6%9F%A5-typescript-%E4%B8%AD%E7%9A%84-null-%E5%92%8C-undefined">如何检查 TypeScript 中的 null 和 undefined？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E6%A3%80%E6%9F%A5-typescript-%E4%B8%AD%E7%9A%84-null-%E5%92%8C-undefined">§</a></h2>\n<h2 id="typescript-%E6%98%AF%E5%A6%82%E4%BD%95%E6%94%AF%E6%8C%81%E5%87%BD%E6%95%B0%E9%87%8D%E8%BD%BD%E7%9A%84">TypeScript 是如何支持函数重载的？<a class="anchor" href="#typescript-%E6%98%AF%E5%A6%82%E4%BD%95%E6%94%AF%E6%8C%81%E5%87%BD%E6%95%B0%E9%87%8D%E8%BD%BD%E7%9A%84">§</a></h2>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81-typescript">为什么需要 TypeScript</a></li><li><a href="#typescript-v1v4-%E6%96%B0%E7%89%B9%E6%80%A7">TypeScript v1~v4 新特性</a></li><li><a href="#typescript-%E5%92%8C-babel-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">TypeScript 和 Babel 有什么区别？</a></li><li><a href="#typescript-%E7%9A%84%E5%86%85%E7%BD%AE%E7%B1%BB%E5%9E%8B%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">TypeScript 的内置类型都有哪些？</a></li><li><a href="#typescript%E6%94%AF%E6%8C%81%E5%93%AA%E4%BA%9B%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%9C%AF%E8%AF%AD">TypeScript支持哪些面向对象的术语？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-typescript-%E6%B3%9B%E5%9E%8B">如何理解 TypeScript 泛型？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%BC%96%E5%86%99-tsconfigjson">如何编写 tsconfig.json？</a></li><li><a href="#unknown-%E5%92%8C-any-%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%8C%BA%E5%88%AB">unknown 和 any 类型的区别？</a></li><li><a href="#type-%E5%92%8C-interface-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">type 和 interface 有什么区别？</a></li><li><a href="#%E5%8A%A8%E6%89%8B%E5%AE%9E%E7%8E%B0-p-in-arrtype-string">动手实现 [P in ArrType]?: string[]</a></li><li><a href="#%E5%8A%A8%E6%89%8B%E5%AE%9E%E7%8E%B0%E8%A3%85%E9%A5%B0%E5%99%A8">动手实现装饰器</a></li><li><a href="#%E5%A6%82%E4%BD%95%E5%9C%A8-typescript-%E4%B8%AD%E5%AE%9E%E7%8E%B0%E7%BB%A7%E6%89%BF">如何在 TypeScript 中实现继承？</a></li><li><a href="#typescript-%E4%B8%AD%E7%9A%84%E6%A8%A1%E5%9D%97%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E7%82%B9">Typescript 中的模块有什么特点？</a></li><li><a href="#typescript-%E4%B8%AD%E7%9A%84%E6%9E%9A%E4%B8%BE">TypeScript 中的枚举？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E6%A3%80%E6%9F%A5-typescript-%E4%B8%AD%E7%9A%84-null-%E5%92%8C-undefined">如何检查 TypeScript 中的 null 和 undefined？</a></li><li><a href="#typescript-%E6%98%AF%E5%A6%82%E4%BD%95%E6%94%AF%E6%8C%81%E5%87%BD%E6%95%B0%E9%87%8D%E8%BD%BD%E7%9A%84">TypeScript 是如何支持函数重载的？</a></li></ol></nav>'
        } })
};
