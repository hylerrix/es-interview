import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "link": "articles/02-ECMAScript+/index.html",
        "text": "ECMAScript+"
    },
    'next': {
        "text": "JavaScript 基础知识",
        "link": "articles/02-ECMAScript+/01-javascript.html"
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
    'pagePath': "articles/02-ECMAScript+/00-ecmascript.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/02-ECMAScript+/00-ecmascript.html",
    'title': "ECMAScript",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>ECMAScript</h1>\n<blockquote>\n<p>重点关注标准和版本特性</p>\n</blockquote>\n<h2 id="es-%E6%A0%87%E5%87%86%E5%8F%8A%E5%85%B6%E6%B5%81%E7%A8%8B">ES 标准及其流程？<a class="anchor" href="#es-%E6%A0%87%E5%87%86%E5%8F%8A%E5%85%B6%E6%B5%81%E7%A8%8B">§</a></h2>\n<ul>\n<li>\n<p>ECMAScript 是 ECMA 制定的标准化脚本语言。</p>\n</li>\n<li>\n<p>ECMA 规范最终由 TC39 敲定。TC39 由包括浏览器厂商在内的各方组成，他们开会推动 JavaScript 提案沿着一条严格的发展道路前进。</p>\n</li>\n<li>\n<p>TC39 的新特性提案：<a href="https://github.com/tc39/proposals">https://github.com/tc39/proposals</a></p>\n</li>\n<li>\n<p>ECMAScript 新闻：<a href="https://www.ecma-international.org/news/index.html">https://www.ecma-international.org/news/index.html</a></p>\n</li>\n<li>\n<p>从提案到入选ECMA规范主要有以下几个阶段：</p>\n<ul>\n<li>Stage 0: strawman——最初想法的提交。</li>\n<li>Stage 1: proposal（提案）——由 TC39 至少一名成员倡导的正式提案文件，该文件包括 API 示例。</li>\n<li>Stage 2: draft（草案）——功能规范的初始版本，该版本包含功能规范的两个实验实现。</li>\n<li>Stage 3: candidate（候选）——提案规范通过审查并从厂商那里收集反馈。</li>\n<li>Stage 4: finished（完成）——提案准备加入ECMAScript，但是到浏览器或者Nodejs中可能需要更长的时间。</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%85%B3%E9%94%AE%E5%AD%97%E4%B8%8E%E4%BF%9D%E7%95%99%E5%AD%97">关键字与保留字？<a class="anchor" href="#%E5%85%B3%E9%94%AE%E5%AD%97%E4%B8%8E%E4%BF%9D%E7%95%99%E5%AD%97">§</a></h2>\n<h2 id="es-5-%E7%89%B9%E6%80%A7%E5%8F%91%E5%B1%95%E5%8F%B2">ES ~5 特性发展史？<a class="anchor" href="#es-5-%E7%89%B9%E6%80%A7%E5%8F%91%E5%B1%95%E5%8F%B2">§</a></h2>\n<h2 id="es-6-%E6%96%B0%E7%89%B9%E6%80%A7%E6%A6%82%E8%A6%81">ES 6+ 新特性概要？<a class="anchor" href="#es-6-%E6%96%B0%E7%89%B9%E6%80%A7%E6%A6%82%E8%A6%81">§</a></h2>\n<blockquote>\n<p>以下特性摘抄自博客，尚未和 ES 标准精确配对，可能会出现特性和版本不一致。</p>\n</blockquote>\n<ul>\n<li>ES6：在 ES5 发布近 6 年（2009-11 至 2015-6）之后才将其标准化。\n<ul>\n<li><strong>类</strong>：<code>class; new; instanceof; constructor;</code>。</li>\n<li><strong>模块化</strong>：<code>export; import;</code>。</li>\n<li><strong>箭头函数</strong>：箭头函数与包围它的代码共享同一个 this。<code>() =&gt; {}; fun.bind(this);</code>。</li>\n<li><strong>函数参数默认值</strong>：<code>function foo(h = 50, c = \'red\') {};</code>。</li>\n<li><strong>模板字符串</strong>：`Your name is ${first} ${last}`;。</li>\n<li><strong>解构赋值</strong>：<code>[a=5, b=7] = [1];  [a, b] = [b, a]; const { n, a } = s;</code>。</li>\n<li><strong>延展操作符</strong>：<code>[...[1, 2]]; [...obj, \'4\', ...\'hello\', 6];</code>。</li>\n<li><strong>对象属性简写</strong>：<code>student = { name };</code>。</li>\n<li><strong>Promise</strong>：异步编程串行化，避免了回调地狱。<code>new Promise((resolve, reject) =&gt; {});</code>。</li>\n<li><strong>Let 与 Const</strong>：填补块级作用域空白。</li>\n</ul>\n</li>\n<li>ES7：来说明标准化的过程\n<ul>\n<li><strong>Array.prototype.includes()</strong>：判断一个数组是否包含一个指定的值。</li>\n<li><strong>指数操作符</strong>：具有与 Math.pow(..) 相同的效果。<code>console.log(2**10);</code>。</li>\n</ul>\n</li>\n<li>ES8：\n<ul>\n<li><strong>[升级] 延展操作符</strong>：增加了对对象的支持，<code>let objClone = { ...obj }; </code>。</li>\n<li><strong>Async/Await</strong>：异步迭代器。</li>\n<li><strong>Object.values()</strong>：与 Object.keys() 类似，返回 Object 自身属性的所有值，不包括继承的值。</li>\n<li><strong>Object.entries()</strong>：返回一个给定对象自身可枚举属性的键值对的数组。<code>for(let [k,v] of Object.entries(obj)) {}</code>。</li>\n<li><strong>String padding</strong>：填充字符串达到当前长度。<code>String.prototype.padStart; String.prototype.padEnd;</code>。</li>\n<li><strong>函数参数列表结尾允许逗号</strong>：git 修改同一个函数减少不必要的行变更。</li>\n<li><strong>Object.getOwnPropertyDescriptors()</strong>：获取一个对象的所有自身属性的描述符,如果没有任何自身属性，则返回空对象。</li>\n<li><strong>ShareArrayBuffer</strong>：类似于 ArrayBuffer，表示一个通用的，固定长度的原始二进制数据缓冲区，但 SharedArrayBuffer 不能被分离。<code>new SharedArrayBuffer(length)</code>。</li>\n<li><strong>Atomics</strong>：提供了一组静态方法用来对 SharedArrayBuffer 对象进行原子操作（多线程共同读写时保证符合预期）。Atomics 的所有属性和方法都是静态的（与 Math 对象一样）。</li>\n</ul>\n</li>\n<li>ES9：\n<ul>\n<li><strong>[升级] 异步迭代器</strong>：Async/Await。<code>for await (let i of arr) {}; arr.forEach(async i =&gt; { await fun(i); }); </code>。</li>\n<li><strong>[升级] Promise.finally()</strong>：指定多个 Promise 统一执行完后最终的逻辑，不关注每一个的成功状态。</li>\n<li><strong>[升级] Rest/Spread 属性</strong>：允许我们将一个不定数量的参数表示为一个数组，只适用于每个对象的顶层而非嵌套。<code>restParam(p1, p2, ...p3)</code>。</li>\n<li><strong>正则表达式命名捕获组</strong>：<code>const reDate = /(?&lt;year&gt;[0-9]{4})-(?&lt;month&gt;[0-9]{2})-(?&lt;day&gt;[0-9]{2}); const usDate = \'2020-10-01\'.replace(reDate, \'$&lt;month&gt;-$&lt;day&gt;-$&lt;year&gt;\');</code>。</li>\n<li><strong>正则表达式反向断言</strong>：分为肯定反向断言，否定反向断言。</li>\n<li><strong>正则表达式 dotAll 模式</strong>：<code>.</code> 匹配除回车外的任何单字符，标记 <code>s</code> 改变这种行为，允许行终止符的出现。<code>/hello.world/s.test(\'hello\nworld\');</code>。</li>\n<li><strong>正则表达式 Unicode 转义</strong>：添加了 Unicode 属性转义——形式为 <code>\p{...}</code> 和 <code>\P{...}</code></li>\n<li><strong>非转义序列的模板字符串</strong>。</li>\n</ul>\n</li>\n<li><a href="https://ecma-international.org/publications/standards/Ecma-417.htm">ES10（ES 2019，ECMA-417）</a>：\n<ul>\n<li>**行分隔符（U + 2028）和段分隔符（U + 2029）**符号现在允许在字符串文字中，与 JSON 匹配。以前这些符号在字符串文字中被视为行终止符，使用它们会导致 SyntaxError 异常。</li>\n<li><strong>[升级] JSON.stringify</strong>：和 Unicode 有关。</li>\n<li><strong>Array.flat() 和 Array.flatMap()</strong>：本质上就是是归纳（reduce） 与 合并（concat）的操作。</li>\n<li><strong>String.trimStart() 和 String.trimEnd()</strong>：分别去除字符串首尾空白字符。</li>\n<li><strong>Object.fromEntries()</strong>：<code>Object.entries()</code> 返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致。<code>Object.fromEntries()</code> 则是 <code>Object.entries()</code> 的反转。可以将 Map 或 Array 转化为 Object。</li>\n<li><strong>Symbol.prototype.description</strong>：直接访问 Symbol(\'The description\') 后的内容，使用 <code>sym.description</code> 而非 <code>String(sym.desc)</code>。</li>\n<li><strong>String.prototype.matchAll</strong>：查找字符串中所有正则表达式的匹配项和它们的位置。<code>str.matchAll(regexp)</code>。</li>\n<li><strong>Function.prototype.toString()</strong>：现在返回精确字符，包括空格和注释。<code>console.log(foo.toString()); // function /* comment */ foo /* another comment */ (){}</code>。</li>\n<li><strong>修改 catch 绑定</strong>：简化 <code>try {} catch(e) {}</code> 为 <code>try {} catch {}</code>。</li>\n<li><strong>BigInt</strong>：新的基本数据类型。创建比 2^53 - 1 还大的数，typeof 值为 bigint。<code>BigInt(1); 1n</code>。</li>\n<li><strong>globalThis</strong>：统一浏览器的 window 和 node 中的 global。</li>\n</ul>\n</li>\n<li><a href="https://www.ecma-international.org/publications/standards/Ecma-262.htm">ES11（ES 2020，ECMA-262）</a>：\n<ul>\n<li><strong>Optional Chaining 可选链式调用</strong>：<code>flower.species?.lily; flowers?.[1]; plantFlowers?.()</code>。</li>\n<li><strong>Nullish Coalescing 空值合并</strong>：<code>number ?? 7</code>。</li>\n<li><strong>Private Fields 私有字段</strong>：ES6 支持类语法，ES11 才引人私有字段，符号为 <code>#</code>。</li>\n<li><strong>Static Fields 静态字段</strong>：想使用类的方法，必须先实例化一个类，除非此方法为 static。</li>\n<li><strong>Top Level Await 顶级 Await</strong>：此前在顶级 await 必须使用 IIFE，现在直接顶级使用。</li>\n<li><strong>Promise.allSettled 方法</strong>：可以不关心数组中每个的 Promise 是否成功或失败，统一处理。<code>Promise.allSettled([a, b]).then(([a, b]) =&gt; {})</code>。</li>\n<li><strong>Dynamic Import 动态引入</strong>：<code>import(\'\').then()</code>。</li>\n</ul>\n</li>\n</ul>\n<h2 id="ecmascript-%E6%A8%A1%E5%9D%97%E5%8C%96%E5%8F%91%E5%B1%95%E5%8F%B2">ECMAScript 模块化发展史<a class="anchor" href="#ecmascript-%E6%A8%A1%E5%9D%97%E5%8C%96%E5%8F%91%E5%B1%95%E5%8F%B2">§</a></h2>\n<ul>\n<li>社区解决方案 - 同步服务端 CommonJS &amp; Node.js：\n<ul>\n<li>暴露模块 - <code>module.exports</code>。</li>\n<li>暴露模块 - <code>exports</code>。</li>\n<li>加载模块 - <code>require()</code>。</li>\n</ul>\n</li>\n<li>社区解决方案 - 异步浏览器 AMD &amp; RequireJS：\n<ul>\n<li>定义：<code>define(id?, dependencies?, factory);</code>。</li>\n<li>加载：<code>require([module], callback);</code>。</li>\n</ul>\n</li>\n<li>社区解决方案 - 异步就近加载 CMD &amp; SeaJS：\n<ul>\n<li>定义：<code>define(id?, dependencies?, factory);</code>。</li>\n<li>依赖就近，用的时候再 <code>require</code>。</li>\n<li>需要使用把模块变为字符串解析一遍才知道依赖了那些模块。</li>\n</ul>\n</li>\n<li>官方解决方案 - ES6 import/export：\n<ul>\n<li>导出 - 命名式导出。</li>\n<li>导出 - 默认导出：<code>export default {};</code>。</li>\n<li>导入：对应导出的命名式导出和默认导出。<code>import $, {each, map} from \'jquery\';</code>。</li>\n</ul>\n</li>\n</ul>\n<h2 id="es-%E6%A8%A1%E5%9D%97%E5%8C%96%E7%9A%84%E5%85%B7%E4%BD%93%E5%8C%BA%E5%88%AB">ES 模块化的具体区别<a class="anchor" href="#es-%E6%A8%A1%E5%9D%97%E5%8C%96%E7%9A%84%E5%85%B7%E4%BD%93%E5%8C%BA%E5%88%AB">§</a></h2>\n<p>import, require 有什么不同的表现形式？</p>\n<h2 id="this-%E4%B8%8E%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E7%9A%84%E7%89%B9%E7%82%B9">this 与箭头函数的特点？<a class="anchor" href="#this-%E4%B8%8E%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E7%9A%84%E7%89%B9%E7%82%B9">§</a></h2>\n<ul>\n<li>this 有四种绑定：和调用位置有关，和定义位置无关\n<ul>\n<li>默认绑定：在非严格模式下，this 就是全局对象，否则是 undefined。<code>foo()</code>。</li>\n<li>隐式绑定：<code>o.foo()</code>。</li>\n<li>显示绑定：如果 foo 是通过 call、apply 或者 bind 调用的，那么这种调用就是显式绑定。<code>foo.call(obj)</code>。</li>\n<li>new 关键字绑定。</li>\n</ul>\n</li>\n<li>箭头函数的特点：和定义位置有关，和调用位置无关\n<ul>\n<li>无视 this 的四种绑定规则。</li>\n<li>this 的值就是函数创建时候所在的 lexical scope 中的 this，而和调用方式无关。</li>\n</ul>\n</li>\n<li>绑定规则优先级：箭头函数 &gt; 关键字 new 调用 &gt; 显式绑定 &gt; 隐式绑定 &gt; 默认绑定</li>\n</ul>\n<h2 id="%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87">变量提升？<a class="anchor" href="#%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87">§</a></h2>\n<h2 id="settimeout-%E5%92%8C-setinterval-%E5%8E%9F%E7%90%86">setTimeOut 和 setInterval 原理？<a class="anchor" href="#settimeout-%E5%92%8C-setinterval-%E5%8E%9F%E7%90%86">§</a></h2>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#es-%E6%A0%87%E5%87%86%E5%8F%8A%E5%85%B6%E6%B5%81%E7%A8%8B">ES 标准及其流程？</a></li><li><a href="#%E5%85%B3%E9%94%AE%E5%AD%97%E4%B8%8E%E4%BF%9D%E7%95%99%E5%AD%97">关键字与保留字？</a></li><li><a href="#es-5-%E7%89%B9%E6%80%A7%E5%8F%91%E5%B1%95%E5%8F%B2">ES ~5 特性发展史？</a></li><li><a href="#es-6-%E6%96%B0%E7%89%B9%E6%80%A7%E6%A6%82%E8%A6%81">ES 6+ 新特性概要？</a></li><li><a href="#ecmascript-%E6%A8%A1%E5%9D%97%E5%8C%96%E5%8F%91%E5%B1%95%E5%8F%B2">ECMAScript 模块化发展史</a></li><li><a href="#es-%E6%A8%A1%E5%9D%97%E5%8C%96%E7%9A%84%E5%85%B7%E4%BD%93%E5%8C%BA%E5%88%AB">ES 模块化的具体区别</a></li><li><a href="#this-%E4%B8%8E%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E7%9A%84%E7%89%B9%E7%82%B9">this 与箭头函数的特点？</a></li><li><a href="#%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87">变量提升？</a></li><li><a href="#settimeout-%E5%92%8C-setinterval-%E5%8E%9F%E7%90%86">setTimeOut 和 setInterval 原理？</a></li></ol></nav>'
        } })
};
