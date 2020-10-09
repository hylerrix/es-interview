import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "text": "TypeScript",
        "link": "articles/02-ECMAScript+/02-typescript.html"
    },
    'next': {
        "link": "articles/03-HTML+CSS/index.html",
        "text": "HTML + CSS"
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
    'pagePath': "articles/02-ECMAScript+/03-javascript-parctice.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/02-ECMAScript+/03-javascript-parctice.html",
    'title': "JavaScript 常见实战题",
    'content': (React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>JavaScript 常见实战题</h1>\n<ul>\n<li>\n<p>实现 sum(1)(2)(3)</p>\n</li>\n<li>\n<p>写一段匹配 URL 的正则，包括协议、域名、端口、path、hash、querystring</p>\n</li>\n<li>\n<p>树的遍历</p>\n</li>\n<li>\n<p>节流和防抖</p>\n</li>\n<li>\n<p>EventLoop 考察</p>\n</li>\n</ul>\n<h2 id="%E5%AE%9E%E7%8E%B0-javascript-%E5%87%BD%E6%95%B0%E9%87%8D%E8%BD%BD">实现 JavaScript 函数重载？<a class="anchor" href="#%E5%AE%9E%E7%8E%B0-javascript-%E5%87%BD%E6%95%B0%E9%87%8D%E8%BD%BD">§</a></h2>\n<p>方法 1：</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">overLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n　　<span class="token comment">// 根据 arguments.length，对不同的值进行不同的操作</span>\n　　<span class="token keyword control-flow">switch</span><span class="token punctuation">(</span><span class="token parameter">arguments<span class="token punctuation">.</span><span class="token property-access">length</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n　　　　<span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>\n　　　　　　<span class="token comment">/*操作1的代码写在这里*/</span>\n　　　　　　<span class="token keyword control-flow">break</span><span class="token punctuation">;</span>\n　　　　<span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>\n　　　　　　<span class="token comment">/*操作2的代码写在这里*/</span>\n　　　　　　<span class="token keyword control-flow">break</span><span class="token punctuation">;</span>\n　　　　<span class="token keyword module">default</span><span class="token operator">:</span>\n　　　　    <span class="token keyword control-flow">break</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>方法 2：</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// addMethod</span>\n<span class="token keyword">function</span> <span class="token function">addMethod</span><span class="token punctuation">(</span><span class="token parameter">object<span class="token punctuation">,</span> name<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n　　<span class="token keyword">var</span> old <span class="token operator">=</span> object<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 把前一次添加的方法存在一个临时变量 old 里面</span>\n　　object<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 重写了 object[name] 的方法</span>\n　　　　<span class="token comment">// 如果调用 object[name] 方法时，传入的参数个数跟预期的一致，则直接调用</span>\n　　　　<span class="token keyword control-flow">if</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">.</span><span class="token property-access">length</span> <span class="token operator">===</span> arguments<span class="token punctuation">.</span><span class="token property-access">length</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n　　　　　　<span class="token keyword control-flow">return</span> fn<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>\n　　　　<span class="token comment">// 否则，判断 old 是否是函数，如果是，就调用 old</span>\n　　　　<span class="token punctuation">}</span> <span class="token keyword control-flow">else</span> <span class="token keyword control-flow">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> old <span class="token operator">===</span> <span class="token string">"function"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n　　　　　　<span class="token keyword control-flow">return</span> old<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>\n　　　　<span class="token punctuation">}</span>\n　　<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> people <span class="token operator">=</span> <span class="token punctuation">{</span>\n　　values<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Dean Edwards"</span><span class="token punctuation">,</span> <span class="token string">"Alex Russell"</span><span class="token punctuation">,</span> <span class="token string">"Dean Tom"</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n \n<span class="token comment">/* 下面开始通过 addMethod 来实现对 people.find 方法的重载 */</span>\n \n<span class="token comment">// 不传参数时，返回 peopld.values 里面的所有元素</span>\n<span class="token function">addMethod</span><span class="token punctuation">(</span>people<span class="token punctuation">,</span> <span class="token string">"find"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n　　<span class="token keyword control-flow">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">values</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n<span class="token comment">// 传一个参数时，按 first-name 的匹配进行返回</span>\n<span class="token function">addMethod</span><span class="token punctuation">(</span>people<span class="token punctuation">,</span> <span class="token string">"find"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">firstName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n　　<span class="token keyword">var</span> ret <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n　　<span class="token keyword control-flow">for</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">values</span><span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span> i<span class="token operator">++</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n　　　　<span class="token keyword control-flow">if</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">values</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token method function property-access">indexOf</span><span class="token punctuation">(</span>firstName<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n　　　　　　ret<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">values</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n　　　　<span class="token punctuation">}</span>\n　　<span class="token punctuation">}</span>\n　　<span class="token keyword control-flow">return</span> ret<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n<span class="token comment">// 传两个参数时，返回 first-name 和 last-name 都匹配的元素</span>\n<span class="token function">addMethod</span><span class="token punctuation">(</span>people<span class="token punctuation">,</span> <span class="token string">"find"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">firstName<span class="token punctuation">,</span> lastName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n　　<span class="token keyword">var</span> ret <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n　　<span class="token keyword control-flow">for</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">values</span><span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span> i<span class="token operator">++</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n　　　　<span class="token keyword control-flow">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">values</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token punctuation">(</span>firstName <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> lastName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n　　　　　　ret<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">values</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n　　　　<span class="token punctuation">}</span>\n　　<span class="token punctuation">}</span>\n　　<span class="token keyword control-flow">return</span> ret<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n<span class="token comment">// 测试：</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>people<span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//["Dean Edwards", "Alex Russell", "Dean Tom"]</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>people<span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">"Dean"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//["Dean Edwards", "Dean Tom"]</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>people<span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">"Dean Edwards"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//["Dean Edwards"]</span>\n</code></pre>\n<h2 id="%E5%8A%A8%E6%89%8B%E5%AE%9E%E7%8E%B0-json">动手实现 JSON<a class="anchor" href="#%E5%8A%A8%E6%89%8B%E5%AE%9E%E7%8E%B0-json">§</a></h2>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token known-class-name class-name">JSON</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token known-class-name class-name">JSON</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token function-variable function">parse</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">sJSON</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword control-flow">return</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">\'(\'</span> <span class="token operator">+</span> sJSON <span class="token operator">+</span> <span class="token string">\')\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    stringify<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">var</span> toString <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token property-access">toString</span><span class="token punctuation">;</span>\n      <span class="token keyword">var</span> isArray <span class="token operator">=</span> <span class="token known-class-name class-name">Array</span><span class="token punctuation">.</span><span class="token property-access">isArray</span> <span class="token operator">||</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword control-flow">return</span> toString<span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">\'[object Array]\'</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token keyword">var</span> escMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">\'"\'</span><span class="token operator">:</span> <span class="token string">\'\\"\'</span><span class="token punctuation">,</span> <span class="token string">\'\\', span
        } > (React.createElement("span", { class: "token operator" }, ":"), (React.createElement("span", { class: "token string" }, "\\'\\\\\\\\'"), (React.createElement("span", { class: "token punctuation" }, ","), (React.createElement("span", { class: "token string" }, "\\'\\b\\'"), (React.createElement("span", { class: "token operator" }, ":"), (React.createElement("span", { class: "token string" }, "\\'\\\\b\\'"), (React.createElement("span", { class: "token punctuation" }, ","), (React.createElement("span", { class: "token string" }, "\\'\\f\\'"), (React.createElement("span", { class: "token operator" }, ":"), (React.createElement("span", { class: "token string" }, "\\'\\\\f\\'"), (React.createElement("span", { class: "token punctuation" }, ","), (React.createElement("span", { class: "token string" }, "\\'\\n\\'"), (React.createElement("span", { class: "token operator" }, ":"), (React.createElement("span", { class: "token string" }, "\\'\\\\n\\'"), (React.createElement("span", { class: "token punctuation" }, ","), (React.createElement("span", { class: "token string" }, "\\'\\r\\'"), (React.createElement("span", { class: "token operator" }, ":"), (React.createElement("span", { class: "token string" }, "\\'\\\\r\\'"), (React.createElement("span", { class: "token punctuation" }, ","), (React.createElement("span", { class: "token string" }, "\\'\\t\\'"), (React.createElement("span", { class: "token operator" }, ":"), (React.createElement("span", { class: "token string" }, "\\'\\\\t\\'"), (React.createElement("span", { class: "token punctuation" }, "}"), React.createElement("span", { class: "token punctuation" }, ";")))))))))))))))))))))))), n: true }), (React.createElement("span", { class: "token keyword" }, "var"), (React.createElement("span", { class: "token function-variable function" }, "escFunc"), (React.createElement("span", { class: "token operator" }, "="), (React.createElement("span", { class: "token keyword" }, "function"), (React.createElement("span", { class: "token punctuation" }, "("), (React.createElement("span", { class: "token parameter" }, "m"), (React.createElement("span", { class: "token punctuation" }, ")"), (React.createElement("span", { class: "token punctuation" }, ), React.createElement("span", { class: "token keyword control-flow" }, "return")))))))))),
    class:  = "token punctuation" > [span > m < span, class {
        } = "token punctuation" > ], span
} > (React.createElement("span", { class: "token operator" }, "||"), (React.createElement("span", { class: "token string" }, "\\'\\\\u\\'"), (React.createElement("span", { class: "token operator" }, "+"), React.createElement("span", { class: "token punctuation" }, "("))));
m < span;
class {
}
"token punctuation" > .;
span > (React.createElement("span", { class: "token method function property-access" }, "charCodeAt"), (React.createElement("span", { class: "token punctuation" }, "("), (React.createElement("span", { class: "token number" }, "0"), (React.createElement("span", { class: "token punctuation" }, ")"), (React.createElement("span", { class: "token operator" }, "+"), (React.createElement("span", { class: "token number" }, "0x10000"), (React.createElement("span", { class: "token punctuation" }, ")"), (React.createElement("span", { class: "token punctuation" }, "."), (React.createElement("span", { class: "token method function property-access" }, "toString"), (React.createElement("span", { class: "token punctuation" }, "("), (React.createElement("span", { class: "token number" }, "16"), (React.createElement("span", { class: "token punctuation" }, ")"), (React.createElement("span", { class: "token punctuation" }, "."), (React.createElement("span", { class: "token method function property-access" }, "substr"), (React.createElement("span", { class: "token punctuation" }, "("), (React.createElement("span", { class: "token number" }, "1"), (React.createElement("span", { class: "token punctuation" }, ")"), (React.createElement("span", { class: "token punctuation" }, ";"), (React.createElement("span", { class: "token punctuation" }, "}"), React.createElement("span", { class: "token punctuation" }, ";"))))))))))))))))))));
n < span;
class {
}
"token keyword" > ;
var span;
 > escRE < span;
class {
}
"token operator" >= ;
span > (React.createElement("span", { class: "token regex" },
    React.createElement("span", { class: "token regex-delimiter" }, "/"),
    React.createElement("span", { class: "token regex-source language-regex" }, "[\\\\\"\\u0000-\\u001F\\u2028\\u2029]"),
    React.createElement("span", { class: "token regex-delimiter" }, "/"),
    React.createElement("span", { class: "token regex-flags" }, "g")), React.createElement("span", { class: "token punctuation" }, ";"));
n < span;
class {
}
"token keyword control-flow" > ;
return ;
span > (React.createElement("span", { class: "token keyword" }, "function"), (React.createElement("span", { class: "token function" }, "stringify"), (React.createElement("span", { class: "token punctuation" }, "("), (React.createElement("span", { class: "token parameter" }, "value"), (React.createElement("span", { class: "token punctuation" }, ")"), React.createElement("span", { class: "token punctuation" }, ))))));
n < span;
class {
}
"token keyword control-flow" > ;
if ()
    ;
span > React.createElement("span", { class: "token punctuation" }, "(");
value < span;
class {
}
"token operator" >= ;
span > (React.createElement("span", { class: "token keyword null nil" }, "null"), (React.createElement("span", { class: "token punctuation" }, ")"), React.createElement("span", { class: "token punctuation" }, )));
n < span;
class {
}
"token keyword control-flow" > ;
return ;
span > (React.createElement("span", { class: "token string" }, "\\'null\\'"), React.createElement("span", { class: "token punctuation" }, ";"));
n < span;
class {
}
"token punctuation" > ;
span > (React.createElement("span", { class: "token keyword control-flow" }, "else"), (React.createElement("span", { class: "token keyword control-flow" }, "if"), (React.createElement("span", { class: "token punctuation" }, "("), React.createElement("span", { class: "token keyword" }, "typeof"))));
value < span;
class {
}
"token operator" >=  == ;
span > (React.createElement("span", { class: "token string" }, "\\'number\\'"), (React.createElement("span", { class: "token punctuation" }, ")"), React.createElement("span", { class: "token punctuation" }, )));
n < span;
class {
}
"token keyword control-flow" > ;
return ;
span > (React.createElement("span", { class: "token function" }, "isFinite"), React.createElement("span", { class: "token punctuation" }, "("));
value < span;
class {
}
"token punctuation" > ;
span > React.createElement("span", { class: "token operator" }, "?");
value < span;
class {
}
"token punctuation" > .;
span > (React.createElement("span", { class: "token method function property-access" }, "toString"), (React.createElement("span", { class: "token punctuation" }, "("), (React.createElement("span", { class: "token punctuation" }, ")"), (React.createElement("span", { class: "token operator" }, ":"), (React.createElement("span", { class: "token string" }, "\\'null\\'"), React.createElement("span", { class: "token punctuation" }, ";"))))));
n < span;
class {
}
"token punctuation" > ;
span > (React.createElement("span", { class: "token keyword control-flow" }, "else"), (React.createElement("span", { class: "token keyword control-flow" }, "if"), (React.createElement("span", { class: "token punctuation" }, "("), React.createElement("span", { class: "token keyword" }, "typeof"))));
value < span;
class {
}
"token operator" >=  == ;
span > (React.createElement("span", { class: "token string" }, "\\'boolean\\'"), (React.createElement("span", { class: "token punctuation" }, ")"), React.createElement("span", { class: "token punctuation" }, )));
n < span;
class {
}
"token keyword control-flow" > ;
return ;
span > value < span;
class {
}
"token punctuation" > .;
span > (React.createElement("span", { class: "token method function property-access" }, "toString"), (React.createElement("span", { class: "token punctuation" }, "("), (React.createElement("span", { class: "token punctuation" }, ")"), React.createElement("span", { class: "token punctuation" }, ";"))));
n < span;
class {
}
"token punctuation" > ;
span > (React.createElement("span", { class: "token keyword control-flow" }, "else"), (React.createElement("span", { class: "token keyword control-flow" }, "if"), (React.createElement("span", { class: "token punctuation" }, "("), React.createElement("span", { class: "token keyword" }, "typeof"))));
value < span;
class {
}
"token operator" >=  == ;
span > (React.createElement("span", { class: "token string" }, "\\'object\\'"), (React.createElement("span", { class: "token punctuation" }, ")"), React.createElement("span", { class: "token punctuation" }, )));
n < span;
class {
}
"token keyword control-flow" > ;
if ()
    ;
span > (React.createElement("span", { class: "token punctuation" }, "("), React.createElement("span", { class: "token keyword" }, "typeof"));
value < span;
class {
}
"token punctuation" > .;
span > (React.createElement("span", { class: "token property-access" }, "toJSON"), (React.createElement("span", { class: "token operator" }, "==="), (React.createElement("span", { class: "token string" }, "\\'function\\'"), (React.createElement("span", { class: "token punctuation" }, ")"), React.createElement("span", { class: "token punctuation" }, )))));
n < span;
class {
}
"token keyword control-flow" > ;
return ;
span > (React.createElement("span", { class: "token function" }, "stringify"), React.createElement("span", { class: "token punctuation" }, "("));
value < span;
class {
}
"token punctuation" > .;
span > (React.createElement("span", { class: "token method function property-access" }, "toJSON"), (React.createElement("span", { class: "token punctuation" }, "("), (React.createElement("span", { class: "token punctuation" }, ")"), (React.createElement("span", { class: "token punctuation" }, ")"), React.createElement("span", { class: "token punctuation" }, ";")))));
n < span;
class {
}
"token punctuation" > ;
span > (React.createElement("span", { class: "token keyword control-flow" }, "else"), (React.createElement("span", { class: "token keyword control-flow" }, "if"), (React.createElement("span", { class: "token punctuation" }, "("), (React.createElement("span", { class: "token function" }, "isArray"), React.createElement("span", { class: "token punctuation" }, "(")))));
value < span;
class {
}
"token punctuation" > ;
span > (React.createElement("span", { class: "token punctuation" }, ")"), React.createElement("span", { class: "token punctuation" }, ));
n < span;
class {
}
"token keyword" > ;
var span;
 > res < span;
class {
}
"token operator" >= ;
span > (React.createElement("span", { class: "token string" }, "\\'[\\'"), React.createElement("span", { class: "token punctuation" }, ";"));
n < span;
class {
}
"token keyword control-flow" > ;
for (; ; )
    ;
span > (React.createElement("span", { class: "token punctuation" }, "("), React.createElement("span", { class: "token keyword" }, "var"));
i < span;
class {
}
"token operator" >= ;
span > (React.createElement("span", { class: "token number" }, "0"), React.createElement("span", { class: "token punctuation" }, ";"));
i < span;
class {
}
"token operator" >  & lt;
span > value < span;
class {
}
"token punctuation" > .;
span > (React.createElement("span", { class: "token property-access" }, "length"), React.createElement("span", { class: "token punctuation" }, ";"));
i < span;
class {
}
"token operator" > ++;
span > React.createElement("span", { class: "token punctuation" }, ")");
n;
res < span;
class {
}
"token operator" > ;
span > React.createElement("span", { class: "token punctuation" }, "(");
i < span;
class {
}
"token operator" >  ?  : ;
span > (React.createElement("span", { class: "token string" }, "\\', \\'"), (React.createElement("span", { class: "token operator" }, ":"), (React.createElement("span", { class: "token string" }, "\\'\\'"), (React.createElement("span", { class: "token punctuation" }, ")"), (React.createElement("span", { class: "token operator" }, "+"), (React.createElement("span", { class: "token function" }, "stringify"), React.createElement("span", { class: "token punctuation" }, "(")))))));
value < span;
class {
}
"token punctuation" > [span > i < span, class {
    } = "token punctuation" > ];
span > (React.createElement("span", { class: "token punctuation" }, ")"), React.createElement("span", { class: "token punctuation" }, ";"));
n < span;
class {
}
"token keyword control-flow" > ;
return ;
span > res < span;
class {
}
"token operator" > +;
span > (React.createElement("span", { class: "token string" }, "\\']\\'"), React.createElement("span", { class: "token punctuation" }, ";"));
n < span;
class {
}
"token punctuation" > ;
span > (React.createElement("span", { class: "token keyword control-flow" }, "else"), (React.createElement("span", { class: "token keyword control-flow" }, "if"), React.createElement("span", { class: "token punctuation" }, "(")));
toString < span;
class {
}
"token punctuation" > .;
span > (React.createElement("span", { class: "token method function property-access" }, "call"), React.createElement("span", { class: "token punctuation" }, "("));
value < span;
class {
}
"token punctuation" > ;
span > (React.createElement("span", { class: "token operator" }, "==="), (React.createElement("span", { class: "token string" }, "\\'[object Object]\\'"), (React.createElement("span", { class: "token punctuation" }, ")"), React.createElement("span", { class: "token punctuation" }, ))));
n < span;
class {
}
"token keyword" > ;
var span;
 > tmp < span;
class {
}
"token operator" >= ;
span > (React.createElement("span", { class: "token punctuation" }, "["), (React.createElement("span", { class: "token punctuation" }, "]"), React.createElement("span", { class: "token punctuation" }, ";")));
n < span;
class {
}
"token keyword control-flow" > ;
for (; ; )
    ;
span > (React.createElement("span", { class: "token punctuation" }, "("), React.createElement("span", { class: "token keyword" }, "var"));
k < span;
class {
}
"token keyword" >  in ;
span > value < span;
class {
}
"token punctuation" > ;
span > React.createElement("span", { class: "token punctuation" }, );
n < span;
class {
}
"token keyword control-flow" > ;
if ()
    ;
span > React.createElement("span", { class: "token punctuation" }, "(");
value < span;
class {
}
"token punctuation" > .;
span > (React.createElement("span", { class: "token method function property-access" }, "hasOwnProperty"), React.createElement("span", { class: "token punctuation" }, "("));
k < span;
class {
}
"token punctuation" > ;
span > React.createElement("span", { class: "token punctuation" }, ")");
n;
tmp < span;
class {
}
"token punctuation" > .;
span > (React.createElement("span", { class: "token method function property-access" }, "push"), (React.createElement("span", { class: "token punctuation" }, "("), (React.createElement("span", { class: "token function" }, "stringify"), React.createElement("span", { class: "token punctuation" }, "("))));
k < span;
class {
}
"token punctuation" > ;
span > (React.createElement("span", { class: "token operator" }, "+"), (React.createElement("span", { class: "token string" }, "\\': \\'"), (React.createElement("span", { class: "token operator" }, "+"), (React.createElement("span", { class: "token function" }, "stringify"), React.createElement("span", { class: "token punctuation" }, "(")))));
value < span;
class {
}
"token punctuation" > [span > k < span, class {
    } = "token punctuation" > ];
span > (React.createElement("span", { class: "token punctuation" }, ")"), (React.createElement("span", { class: "token punctuation" }, ")"), React.createElement("span", { class: "token punctuation" }, ";")));
n < span;
class {
}
"token punctuation" > ;
span > ;
n < span;
class {
}
"token keyword control-flow" > ;
return ;
span > (React.createElement("span", { class: "token string" },
    "\\'",
,
    "\\'"), React.createElement("span", { class: "token operator" }, "+"));
tmp < span;
class {
}
"token punctuation" > .;
span > (React.createElement("span", { class: "token method function property-access" }, "join"), (React.createElement("span", { class: "token punctuation" }, "("), (React.createElement("span", { class: "token string" }, "\\', \\'"), (React.createElement("span", { class: "token punctuation" }, ")"), (React.createElement("span", { class: "token operator" }, "+"), (React.createElement("span", { class: "token string" }, "\\'}\\'"), React.createElement("span", { class: "token punctuation" }, ";")))))));
n < span;
class {
}
"token punctuation" > ;
span > ;
n < span;
class {
}
"token punctuation" > ;
span > ;
n < span;
class {
}
"token keyword control-flow" > ;
return ;
span > (React.createElement("span", { class: "token string" }, "\\'\"\\'"), React.createElement("span", { class: "token operator" }, "+"));
value < span;
class {
}
"token punctuation" > .;
span > (React.createElement("span", { class: "token method function property-access" }, "toString"), (React.createElement("span", { class: "token punctuation" }, "("), (React.createElement("span", { class: "token punctuation" }, ")"), (React.createElement("span", { class: "token punctuation" }, "."), (React.createElement("span", { class: "token method function property-access" }, "replace"), React.createElement("span", { class: "token punctuation" }, "("))))));
escRE < span;
class {
}
"token punctuation" > , ;
span > escFunc < span;
class {
}
"token punctuation" > ;
span > (React.createElement("span", { class: "token operator" }, "+"), (React.createElement("span", { class: "token string" }, "\\'\"\\'"), React.createElement("span", { class: "token punctuation" }, ";")));
n < span;
class {
}
"token punctuation" > ;
span > React.createElement("span", { class: "token punctuation" }, ";");
n < span;
class {
}
"token punctuation" > ;
span > (React.createElement("span", { class: "token punctuation" }, ")"), (React.createElement("span", { class: "token punctuation" }, "("), React.createElement("span", { class: "token punctuation" }, ")")));
n < span;
class {
}
"token punctuation" > ;
span > React.createElement("span", { class: "token punctuation" }, ";");
n < span;
class {
}
"token punctuation" > ;
span > ;
n;
code > ;
pre > ;
n < h2;
id = "%E4%BD%BF%E7%94%A8-mutationobserver-%E5%AE%9E%E7%8E%B0-microtask" > 使用;
MutationObserver;
实现;
microtask < a;
class {
}
"anchor";
href = "#%E4%BD%BF%E7%94%A8-mutationobserver-%E5%AE%9E%E7%8E%B0-microtask" > ;
a > ;
h2 > ;
n < p > MutationObserver;
可以用来实现;
microtask;
它属于;
microtask;
优先级小于;
Promise;
一般是;
Promise;
不支持时才会这样做;
p > ;
n < p > 它是;
HTML5;
中的新特性;
作用是;
监听一个;
DOM;
变动;
p > ;
n < p > 当;
DOM;
对象树发生任何变动时;
Mutation;
Observer;
会得到通知;
p > ;
n < p > 像以前的;
Vue;
源码中就是利用它来模拟;
nextTick;
的;
具体原理是;
创建一个;
TextNode;
并监听内容变化;
p > ;
n < p > 然后要;
nextTick;
的时候去改一下这个节点的文本内容;
p > ;
n < pre;
class {
}
"language-javascript" > React.createElement("code", { class: "language-javascript" },
    React.createElement("span", { class: "token keyword" }, "var"),
    " counter ",
    React.createElement("span", { class: "token operator" }, "="),
    " ",
    React.createElement("span", { class: "token number" }, "1"),
    "\\n",
    React.createElement("span", { class: "token keyword" }, "var"),
    " observer ",
    React.createElement("span", { class: "token operator" }, "="),
    " ",
    React.createElement("span", { class: "token keyword" }, "new"),
    " ",
    React.createElement("span", { class: "token class-name" }, "MutationObserver"),
    React.createElement("span", { class: "token punctuation" }, "("),
    "nextTickHandler",
    React.createElement("span", { class: "token punctuation" }, ")"),
    "\\n",
    React.createElement("span", { class: "token keyword" }, "var"),
    " textNode ",
    React.createElement("span", { class: "token operator" }, "="),
    " ",
    React.createElement("span", { class: "token dom variable" }, "document"),
    React.createElement("span", { class: "token punctuation" }, "."),
    React.createElement("span", { class: "token method function property-access" }, "createTextNode"),
    React.createElement("span", { class: "token punctuation" }, "("),
    React.createElement("span", { class: "token known-class-name class-name" }, "String"),
    React.createElement("span", { class: "token punctuation" }, "("),
    "counter",
    React.createElement("span", { class: "token punctuation" }, ")"),
    React.createElement("span", { class: "token punctuation" }, ")"),
    "\\n\\nobserver",
    React.createElement("span", { class: "token punctuation" }, "."),
    React.createElement("span", { class: "token method function property-access" }, "observe"),
    React.createElement("span", { class: "token punctuation" }, "("),
    "textNode",
    React.createElement("span", { class: "token punctuation" }, ","),
    " ",
    React.createElement("span", { class: "token punctuation" }, ),
    "\\n    characterData",
    React.createElement("span", { class: "token operator" }, ":"),
    " ",
    React.createElement("span", { class: "token boolean" }, "true"),
    "\\n",
    React.createElement("span", { class: "token punctuation" }, "}"),
    React.createElement("span", { class: "token punctuation" }, ")"),
    "\\n",
    React.createElement("span", { class: "token function-variable function" }, "timerFunc"),
    " ",
    React.createElement("span", { class: "token operator" }, "="),
    " ",
    React.createElement("span", { class: "token punctuation" }, "("),
    React.createElement("span", { class: "token punctuation" }, ")"),
    " ",
    React.createElement("span", { class: "token arrow operator" }, "=>"),
    " ",
    React.createElement("span", { class: "token punctuation" }, ),
    "\\n    counter ",
    React.createElement("span", { class: "token operator" }, "="),
    " ",
    React.createElement("span", { class: "token punctuation" }, "("),
    "counter ",
    React.createElement("span", { class: "token operator" }, "+"),
    " ",
    React.createElement("span", { class: "token number" }, "1"),
    React.createElement("span", { class: "token punctuation" }, ")"),
    " ",
    React.createElement("span", { class: "token operator" }, "%"),
    " ",
    React.createElement("span", { class: "token number" }, "2"),
    "\\n    textNode",
    React.createElement("span", { class: "token punctuation" }, "."),
    React.createElement("span", { class: "token property-access" }, "data"),
    " ",
    React.createElement("span", { class: "token operator" }, "="),
    " ",
    React.createElement("span", { class: "token known-class-name class-name" }, "String"),
    React.createElement("span", { class: "token punctuation" }, "("),
    "counter",
    React.createElement("span", { class: "token punctuation" }, ")"),
    "\\n",
    React.createElement("span", { class: "token punctuation" }, "}"),
    "\\n");
pre > ;
n < p > 不过;
现在的;
Vue;
2.5 + 的;
nextTick;
实现移除了;
MutationObserver;
的方式(据说是兼容性原因);
取而代之的是使用;
MessageChannel;
p > ;
n(当然, 默认情况仍然是, Promise, 不支持才兼容的);
p > ;
n < p > MessageChannel;
属于宏任务;
优先级是;
MessageChannel -  & gt;
setTimeout;
所以;
Vue;
2.5 + 内部的;
nextTick;
与;
2.4;
及之前的实现是不一样的;
需要注意下;
p > ';
/>,;
'script';
React.createElement(React.Fragment, null,
    React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
    React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
    React.createElement("script", { src: "/index.js", type: "module" })),
    'toc';
React.createElement("aside", { dangerouslySetInnerHTML: {
        __html: '<nav class="toc"><ol><li><a href="#%E5%AE%9E%E7%8E%B0-javascript-%E5%87%BD%E6%95%B0%E9%87%8D%E8%BD%BD">实现 JavaScript 函数重载？</a></li><li><a href="#%E5%8A%A8%E6%89%8B%E5%AE%9E%E7%8E%B0-json">动手实现 JSON</a></li><li><a href="#%E4%BD%BF%E7%94%A8-mutationobserver-%E5%AE%9E%E7%8E%B0-microtask">使用 MutationObserver 实现 microtask</a></li></ol></nav>'
    } });
