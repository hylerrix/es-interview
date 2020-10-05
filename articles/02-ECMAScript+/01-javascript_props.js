import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "text": "ECMAScript",
        "link": "articles/02-ECMAScript+/00-ecmascript.html"
    },
    'next': {
        "text": "TypeScript",
        "link": "articles/02-ECMAScript+/02-typescript.html"
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
    'pagePath': "articles/02-ECMAScript+/01-javascript.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/02-ECMAScript+/01-javascript.html",
    'title': "JavaScript 基础知识",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>JavaScript 基础知识</h1>\n<h2 id="dom-%E5%92%8C-bom-%E6%98%AF%E4%BB%80%E4%B9%88">DOM 和 BOM 是什么？<a class="anchor" href="#dom-%E5%92%8C-bom-%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h2>\n<ul>\n<li><strong>BOM 浏览器对象模型</strong>：根节点是 <code>window</code>。\n<ul>\n<li>navigator 对象：<code>appCodeName; appName; appVersion; cookieEnabled; platform; userAgent;</code>。</li>\n<li>screen 对象：<code>availHeight; availWidth; height; width; colorDepth;</code>。</li>\n<li>history 对象：<code>back; forward; go;</code>。</li>\n<li>location 对象：\n<ul>\n<li>属性：<code>hash; host; hostName; href; pathname; port; portocol; </code>。</li>\n<li>方法：<code>assign; reload; replace</code>。</li>\n</ul>\n</li>\n<li>document 对象：\n<ul>\n<li>集合：<code>anchors; images; links; forms;</code>。</li>\n<li>属性：<code>cookie; domain; referrer; title; URL;</code>。</li>\n<li>方法：<code>open; close; write; writeIn;</code>。</li>\n</ul>\n</li>\n<li>窗口控制：<code>moveBy; moveTo; resizeBy; resizeTo; scrollBy; scrollTo;</code>。</li>\n<li>焦点控制：<code>focus; blur;</code>。</li>\n<li>打开关闭窗口：<code>open; close;</code></li>\n<li>定时器：<code>setTimeout; clearTimeout; setInterval; clearInterval</code>。</li>\n<li>对话框：<code>alert; confirm; prompt;</code>。</li>\n<li>属性：\n<ul>\n<li>状态栏：<code>defaultStatus; status</code>。</li>\n<li>窗口位置 - IE：<code>screenLeft; screenTop;</code>。</li>\n<li>窗口位置 - !IE：<code>screenX; screenY; pageXOffset; pageYOffset;</code>。</li>\n<li>窗口位置 - FF：<code>innerHeight; innerWidth; outerHeight; outerWidth;</code>。</li>\n<li>其它：<code>opener; close; name; self;</code>。</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><strong>DOM 文档对象模型</strong>：W3C 标准。根节点是 <code>window.document</code>。\n<ul>\n<li>获取节点：\n<ul>\n<li>document：<code>getElementById; getElementsByName; getElementsByTagName; </code>。</li>\n<li>节点指针：<code>firstChild; lastChild; childNodes; previousSibling; nextSibling; parentNode;</code>。</li>\n</ul>\n</li>\n<li>节点操作：\n<ul>\n<li>创建节点：<code>createElement; createAttribute; createTextNode;</code>。</li>\n<li>插入节点：<code>appendChild; insertBefore;</code>。</li>\n<li>替换节点：<code>replaceChild;</code>。</li>\n<li>复制节点：<code>cloneNode;</code>。</li>\n<li>删除节点：<code>removeChild;</code>。</li>\n</ul>\n</li>\n<li>属性操作（获取/设置/删除）：<code>getAttribute; setAttribute; removeAttribute</code>。</li>\n<li>文本操作：<code>insertData; appendData, deleteData, replaceData; spliceData; substring;</code>。</li>\n</ul>\n</li>\n</ul>\n<h2 id="new-%E7%9A%84%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E7%8E%B0">new 的原理与实现？<a class="anchor" href="#new-%E7%9A%84%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E7%8E%B0">§</a></h2>\n<ul>\n<li>创建一个新的空对象</li>\n<li>将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）</li>\n<li>执行构造函数中的代码（为这个新对象添加属性）</li>\n<li>如果这个函数有返回值，则返回；否则，就会默认返回新对象。</li>\n</ul>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Person</span></span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> job</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">age</span> <span class="token operator">=</span> age<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">job</span> <span class="token operator">=</span> job<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">myNew</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 创建一个空对象</span>\n  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token comment">// 获取构造函数</span>\n  <span class="token keyword">let</span> <span class="token maybe-class-name">Con</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token method function property-access">shift</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>\n  <span class="token comment">// 设置空对象的原型</span>\n  obj<span class="token punctuation">.</span><span class="token property-access">__proto__</span> <span class="token operator">=</span> <span class="token class-name">Con</span><span class="token punctuation">.</span><span class="token property-access">prototype</span>\n  <span class="token comment">// 绑定this</span>\n  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token maybe-class-name">Con</span><span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>\n  <span class="token comment">// 返回新对象</span>\n  <span class="token keyword control-flow">return</span> res <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> res <span class="token operator">:</span> obj\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token function">myNew</span><span class="token punctuation">(</span><span class="token maybe-class-name">Person</span><span class="token punctuation">,</span> <span class="token string">\'Nicholas\'</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">,</span> <span class="token string">\'Front-end developer\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// var person = new Person(\'Nicholas\', 29, \'Front-end developer\'); </span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span> <span class="token comment">// Nicholas</span>\nperson<span class="token punctuation">.</span><span class="token method function property-access">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// Nicholas</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token property-access">__proto__</span> <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// true</span>\n</code></pre>\n<h2 id="callapplybind-%E7%9A%84%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E7%8E%B0">call()、apply()、bind() 的原理与实现？<a class="anchor" href="#callapplybind-%E7%9A%84%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E7%8E%B0">§</a></h2>\n<ul>\n<li>call：传入多个参数，第一个参数是 this 的指向，之后的参数都是函数的参数</li>\n<li>apply：传入两个参数，第一个参数是 this 的指向，第二个参数是函数参数组成的数组</li>\n<li>bind：创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被 bind 的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。</li>\n<li>场景用途：\n<ul>\n<li>在 ES6 解构赋值之前，可以用 apply 给函数传入参数数组。</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E9%97%AD%E5%8C%85%E5%92%8C-iife-%E7%9A%84%E6%A6%82%E5%BF%B5%E4%B8%8E%E5%AE%9E%E6%88%98">闭包和 IIFE 的概念与实战？<a class="anchor" href="#%E9%97%AD%E5%8C%85%E5%92%8C-iife-%E7%9A%84%E6%A6%82%E5%BF%B5%E4%B8%8E%E5%AE%9E%E6%88%98">§</a></h2>\n<ul>\n<li>\n<p>IIFE 可以达到不暴露私有成员的目的</p>\n</li>\n<li>\n<p>DOM 冒泡机制</p>\n</li>\n</ul>\n<ul>\n<li>this 指针</li>\n<li>闭包、原型链</li>\n<li>let、const、var 区别及变量提升</li>\n<li>隐式类型转换、事件代理</li>\n<li>setTimeout、setInterval 与 requestAnimationFrame</li>\n<li>作用域链与执行上下文</li>\n<li>异步原理及其发展史</li>\n<li>typeof、instanceof</li>\n</ul>\n<blockquote>\n<p>宏任务、微任务</p>\n</blockquote>\n<p>• 宏任务\n• 分类：setTimeout、setInterval、requestAnimationFrame、DOM 事件回调、Ajax 回调\n• 宏任务队列：第一个宏任务队列中，只有一个任务：执行主线程 js 代码；可以有多个宏任务队列；每次准备取出第一个宏任务执行前，都要将所有的微任务一个一个取出来执行\n• 微任务\n• 分类new Promise().then(这个回调)、process.nextTick、mutation 回调\n• 微任务队列：只有一个微任务队列；在上一个宏任务队列执行完成后如果有微任务队列就会执行微任务队列所有任务</p>\n<blockquote>\n<p>闭包</p>\n</blockquote>\n<p>• 密闭的容器，主要存储数据\n• 闭包是一个对象，存放数据的格式：key：value\n• 形成条件：\n• 函数嵌套\n• 内部函数引用外部函数的局部变量\n• 出现和销毁？\n• 优点：延长外部函数局部变量的生命周期\n• 缺点：容易造成内存泄漏\n• 注意：合理使用，用完销毁</p>\n<blockquote>\n<p>错误处理</p>\n</blockquote>\n<p>常见的内置错误的类型：</p>\n<ul>\n<li>Error：所有错误的父类型</li>\n<li>Reference：引用的变量不存在</li>\n<li>TypeError：数据类型不正确</li>\n<li>RangeError：数据值不在其所允许的范围内</li>\n<li>SyntaxError：语法错误</li>\n<li>......</li>\n</ul>\n<p>错误处理：</p>\n<ul>\n<li>try catch</li>\n<li>throw error</li>\n</ul>\n<p>错误对象</p>\n<ul>\n<li>message 属性：错误相关信息</li>\n<li>stack 属性：函数调用栈记录信息</li>\n</ul>\n<h2 id="%E5%9F%BA%E7%A1%80%E7%B1%BB%E5%9E%8B">基础类型<a class="anchor" href="#%E5%9F%BA%E7%A1%80%E7%B1%BB%E5%9E%8B">§</a></h2>\n<ul>\n<li>\n<p>Array 静态方法：<code>Array.from(); Array.isArray(); Array.of();</code>。</p>\n</li>\n<li>\n<p>Array 原型方法：</p>\n<ul>\n<li><code>.concat(); .copyWithin(); .entries(); .every();</code>。</li>\n<li><code>.fill(); .filter(); .find(); .findIndex(); .flat(); .flatMap(); .forEach();</code>。</li>\n<li><code>.includes(); .indexOf(); .join(); .keys(); .lastIndexOf(); .map(); .pop(); .push(); </code>。</li>\n<li><code>.reduce(); .reduceRight(); .reverse(); .shift(); .slice(); .some(); .sort(); .splice(); </code>。</li>\n<li><code>.toLocaleString(); .toSource(); .toString(); .unshift(); .values();</code>。</li>\n<li><code>Array.prototype[@@iterator](); get Array[@@species]</code>。</li>\n</ul>\n</li>\n<li>\n<p>Array 常见考题：</p>\n<ul>\n<li>数组拷贝。</li>\n<li>数组展开。</li>\n<li>用 reduce 实现 map 的功能</li>\n<li>类数组转化成数组的方法</li>\n<li>实现数组 flatten</li>\n</ul>\n</li>\n<li>\n<p>Object 常见考题：</p>\n<ul>\n<li>深拷贝、浅拷贝</li>\n<li>如何判断一个对象是不是空对象？</li>\n</ul>\n</li>\n<li>\n<p>apply、bind、call</p>\n</li>\n<li>\n<p>Number &amp; BigInt 常见考题：</p>\n<ul>\n<li>大数操作</li>\n<li>0.1+0.2 == 0.3？原因？</li>\n</ul>\n</li>\n<li>\n<p>链式调用：add(2, 5)，add(2)(5)，add(1)(1)(5) 的结果都为 7</p>\n</li>\n</ul>\n<h2 id="%E7%89%B9%E6%AE%8A%E5%85%B3%E9%94%AE%E5%AD%97">特殊关键字<a class="anchor" href="#%E7%89%B9%E6%AE%8A%E5%85%B3%E9%94%AE%E5%AD%97">§</a></h2>\n<ul>\n<li>NaN == NaN，null == undefined</li>\n<li>arguments 的使用</li>\n<li>实现 stringify 序列化函数</li>\n</ul>\n<h2 id="%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1--%E5%87%BD%E6%95%B0%E5%BC%8F">面向对象 &amp; 函数式<a class="anchor" href="#%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1--%E5%87%BD%E6%95%B0%E5%BC%8F">§</a></h2>\n<ul>\n<li>JavaScript 继承方式的实现方案？</li>\n<li>实现柯里化</li>\n<li>function a () {} 和 var a = function () {} 区别、变量提升</li>\n</ul>\n<h2 id="%E5%BA%94%E7%94%A8%E7%B1%BB">应用类<a class="anchor" href="#%E5%BA%94%E7%94%A8%E7%B1%BB">§</a></h2>\n<ul>\n<li>\n<p>防抖、节流函数</p>\n</li>\n<li>\n<p>setTimeout、promise 的使用</p>\n</li>\n<li>\n<p>function request(urls, maxNumber, callback) 要求编写函数实现，根据urls数组内的url地址进行并发网络请求，最大并发数maxNumber,当所有请求完毕后调用callback函数(已知请求网络的方法可以使用fetch api)</p>\n</li>\n<li>\n<p>getUrlParams(url,key)</p>\n</li>\n</ul>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#dom-%E5%92%8C-bom-%E6%98%AF%E4%BB%80%E4%B9%88">DOM 和 BOM 是什么？</a></li><li><a href="#new-%E7%9A%84%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E7%8E%B0">new 的原理与实现？</a></li><li><a href="#callapplybind-%E7%9A%84%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E7%8E%B0">call()、apply()、bind() 的原理与实现？</a></li><li><a href="#%E9%97%AD%E5%8C%85%E5%92%8C-iife-%E7%9A%84%E6%A6%82%E5%BF%B5%E4%B8%8E%E5%AE%9E%E6%88%98">闭包和 IIFE 的概念与实战？</a></li><li><a href="#%E5%9F%BA%E7%A1%80%E7%B1%BB%E5%9E%8B">基础类型</a></li><li><a href="#%E7%89%B9%E6%AE%8A%E5%85%B3%E9%94%AE%E5%AD%97">特殊关键字</a></li><li><a href="#%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1--%E5%87%BD%E6%95%B0%E5%BC%8F">面向对象 &amp; 函数式</a></li><li><a href="#%E5%BA%94%E7%94%A8%E7%B1%BB">应用类</a></li></ol></nav>'
        } })
};
