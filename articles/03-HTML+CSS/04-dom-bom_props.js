import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "title": "CSS 实战",
        "link": "articles/03-HTML+CSS/03-css-practice.html"
    },
    'next': {
        "link": "articles/04-Network+API/index.html",
        "title": "网络 + 前后端协作"
    },
    'sidebar': [
        {
            "title": "ESMAScript+ 面试宝典",
            "link": "articles/index.html",
            "pagePath": "articles/README.md"
        },
        {
            "link": "articles/00-Beginner/index.html",
            "title": "一切的起源",
            "children": [
                {
                    "title": "前端大事记",
                    "link": "articles/00-Beginner/00-es-timeline.html",
                    "pagePath": "articles/00-Beginner/00-es-timeline.md"
                },
                {
                    "title": "ES 方向 & 谁在招人？",
                    "link": "articles/00-Beginner/01-es-direction.html",
                    "pagePath": "articles/00-Beginner/01-es-direction.md"
                },
                {
                    "title": "大厂职级",
                    "link": "articles/00-Beginner/02-es-rank.html",
                    "pagePath": "articles/00-Beginner/02-es-rank.md"
                },
                {
                    "title": "看什么书？",
                    "link": "articles/00-Beginner/03-es-books.html",
                    "pagePath": "articles/00-Beginner/03-es-books.md"
                }
            ],
            "pagePath": "articles/00-Beginner/README.md"
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
                    "title": "ES 数据类型",
                    "link": "articles/02-ECMAScript+/01-es-data-type.html",
                    "pagePath": "articles/02-ECMAScript+/01-es-data-type.md"
                },
                {
                    "title": "JavaScript 基础知识",
                    "link": "articles/02-ECMAScript+/02-javascript.html",
                    "pagePath": "articles/02-ECMAScript+/02-javascript.md"
                },
                {
                    "title": "TypeScript",
                    "link": "articles/02-ECMAScript+/03-typescript.html",
                    "pagePath": "articles/02-ECMAScript+/03-typescript.md"
                },
                {
                    "title": "JavaScript 常见实战题",
                    "link": "articles/02-ECMAScript+/04-javascript-parctice.html",
                    "pagePath": "articles/02-ECMAScript+/04-javascript-parctice.md"
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
                    "title": "CSS 进阶",
                    "link": "articles/03-HTML+CSS/02-css-advance.html",
                    "pagePath": "articles/03-HTML+CSS/02-css-advance.md"
                },
                {
                    "title": "CSS 实战",
                    "link": "articles/03-HTML+CSS/03-css-practice.html",
                    "pagePath": "articles/03-HTML+CSS/03-css-practice.md"
                },
                {
                    "title": "DOM + BOM",
                    "link": "articles/03-HTML+CSS/04-dom-bom.html",
                    "pagePath": "articles/03-HTML+CSS/04-dom-bom.md"
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
                    "title": "React 基础",
                    "link": "articles/06-FE+Browser/05-react.html",
                    "pagePath": "articles/06-FE+Browser/05-react.md"
                },
                {
                    "title": "React 实战",
                    "link": "articles/06-FE+Browser/06-react-practice.html",
                    "pagePath": "articles/06-FE+Browser/06-react-practice.md"
                },
                {
                    "title": "Vue",
                    "link": "articles/06-FE+Browser/07-vue.html",
                    "pagePath": "articles/06-FE+Browser/07-vue.md"
                },
                {
                    "title": "iframe",
                    "link": "articles/06-FE+Browser/08-iframe.html",
                    "pagePath": "articles/06-FE+Browser/08-iframe.md"
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
    'pagePath': "articles/03-HTML+CSS/04-dom-bom.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/03-HTML+CSS/04-dom-bom.html",
    'title': "DOM + BOM",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>DOM + BOM</h1>\n<h2 id="dom-%E5%92%8C-bom-%E6%98%AF%E4%BB%80%E4%B9%88">DOM 和 BOM 是什么？<a class="anchor" href="#dom-%E5%92%8C-bom-%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h2>\n<ul>\n<li><strong>BOM 浏览器对象模型</strong>：根节点是 <code>window</code>。\n<ul>\n<li>navigator 对象：<code>appCodeName; appName; appVersion; cookieEnabled; platform; userAgent;</code>。</li>\n<li>screen 对象：<code>availHeight; availWidth; height; width; colorDepth;</code>。</li>\n<li>history 对象：<code>back; forward; go;</code>。</li>\n<li>location 对象：\n<ul>\n<li>属性：<code>hash; host; hostName; href; pathname; port; portocol; </code>。</li>\n<li>方法：<code>assign; reload; replace</code>。</li>\n</ul>\n</li>\n<li>document 对象：\n<ul>\n<li>集合：<code>anchors; images; links; forms;</code>。</li>\n<li>属性：<code>cookie; domain; referrer; title; URL;</code>。</li>\n<li>方法：<code>open; close; write; writeIn;</code>。</li>\n</ul>\n</li>\n<li>窗口控制：<code>moveBy; moveTo; resizeBy; resizeTo; scrollBy; scrollTo;</code>。</li>\n<li>焦点控制：<code>focus; blur;</code>。</li>\n<li>打开关闭窗口：<code>open; close;</code>。</li>\n<li>定时器：<code>setTimeout; clearTimeout; setInterval; clearInterval</code>。</li>\n<li>对话框：<code>alert; confirm; prompt;</code>。</li>\n<li>属性：\n<ul>\n<li>状态栏：<code>defaultStatus; status</code>。</li>\n<li>窗口位置 - IE：<code>screenLeft; screenTop;</code>。</li>\n<li>窗口位置 - !IE：<code>screenX; screenY; pageXOffset; pageYOffset;</code>。</li>\n<li>窗口位置 - FF：<code>innerHeight; innerWidth; outerHeight; outerWidth;</code>。</li>\n<li>其它：<code>opener; close; name; self;</code>。</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><strong>DOM 文档对象模型</strong>：W3C 标准。根节点是 <code>window.document</code>。\n<ul>\n<li>获取节点：\n<ul>\n<li>document：<code>getElementById; getElementsByName; getElementsByTagName; </code>。</li>\n<li>节点指针：<code>firstChild; lastChild; childNodes; previousSibling; nextSibling; parentNode;</code>。</li>\n</ul>\n</li>\n<li>节点操作：\n<ul>\n<li>创建节点：<code>createElement; createAttribute; createTextNode;</code>。</li>\n<li>插入节点：<code>appendChild; insertBefore;</code>。</li>\n<li>替换节点：<code>replaceChild;</code>。</li>\n<li>复制节点：<code>cloneNode;</code>。</li>\n<li>删除节点：<code>removeChild;</code>。</li>\n</ul>\n</li>\n<li>属性操作（获取/设置/删除）：<code>getAttribute; setAttribute; removeAttribute</code>。</li>\n<li>文本操作：<code>insertData; appendData, deleteData, replaceData; spliceData; substring;</code>。</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-dom-lever">如何理解 DOM Lever？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-dom-lever">§</a></h2>\n<ul>\n<li>DOM 一级</li>\n<li>DOM 二级</li>\n<li>DOM 三级</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E4%BA%8B%E4%BB%B6%E6%B5%81%E5%86%92%E6%B3%A1%E6%8D%95%E8%8E%B7%E5%A7%94%E6%89%98">如何理解事件流/冒泡/捕获/委托？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E4%BA%8B%E4%BB%B6%E6%B5%81%E5%86%92%E6%B3%A1%E6%8D%95%E8%8E%B7%E5%A7%94%E6%89%98">§</a></h2>\n<p><strong>事件流</strong>：</p>\n<ul>\n<li>\n<p>事件流被分为三个阶段(15)捕获过程、(56)目标过程、(6~10)冒泡过程。</p>\n</li>\n<li>\n<p>IE 提出的是冒泡流，而网景提出的是捕获流，后来在 W3C 组织的统一之下，JS 支持了冒泡流和捕获流，但是目前低版本的 IE 浏览器还是只能支持冒泡流(IE6, IE7, IE8 均只支持冒泡流)，所以为了能够兼容更多的浏览器，建议大家使用冒泡流。</p>\n</li>\n<li>\n<p>从事件传播的过程能够看出来，当点击鼠标后，会先发生事件的捕获</p>\n<ul>\n<li>捕获阶段：首先 window 会获捕获到事件，之后 document、documentElement、body 会捕获到，再之后就是在 body 中 DOM 元素一层一层的捕获到事件，有 wrapDiv、innerP。\n*目标阶段：真正点击的元素textSpan的事件发生了两次，因为在上面的JavaScript代码中，textSapn既在捕获阶段绑定了事件，又在冒泡阶段绑定了事件，所以发生了两次。但是这里有一点是需要注意，在目标阶段并不一定先发生在捕获阶段所绑定的事件，而是先绑定的事件发生，一会会解释一下。</li>\n<li>冒泡阶段：会和捕获阶段相反的步骤将事件一步一步的冒泡到window</li>\n</ul>\n</li>\n</ul>\n<p><strong>JavaScript 事件冒泡</strong>：</p>\n<ul>\n<li>当触发子元素时，事件会沿着 DOM 向上冒泡。事件冒泡是实现事件委托的原理。阻止冒泡示例：</li>\n</ul>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> btn <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'btn\'</span><span class="token punctuation">)</span>\nbtn<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// event.preventDefault() // 阻止默认行为</span>\n    event<span class="token punctuation">.</span><span class="token method function property-access">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 阻止冒泡</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'clicked\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n<p><strong>JavaScript 事件委托(事件代理)</strong>：</p>\n<p>事件委托是将事件监听器添加到父元素，而不是每个子元素单独设置事件监听器。当触发子元素时，事件会冒泡到父元素，监听器就会触发，这种技术的好处如下。</p>\n<ul>\n<li>优点：\n<ul>\n<li>内存占用减少，因为只需要一个父元素的事件处理程序，而不必为每个后代都添加事件处理程序。</li>\n<li>无需从已删除的元素中解绑处理程序，也不许将处理程序绑定到新元素上。</li>\n</ul>\n</li>\n<li>局限性：\n<ul>\n<li>focus、blur 之类的事件本身没有事件冒泡机制，所以无法委托</li>\n<li>mousemove、mouseout 这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，不适 合事件委托</li>\n</ul>\n</li>\n</ul>\n<p>示例目标：为 div 下的每个 a 标签绑定点击事件：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>a1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>a2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>a3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>a4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>点击增加一个 a 标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>示例原理：监听 div 下的事件触发点是不是 a 标签：</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">bindEvent</span><span class="token punctuation">(</span><span class="token parameter">elem<span class="token punctuation">,</span> type<span class="token punctuation">,</span> selector<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 这样可以实现重载</span>\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>fn <span class="token operator">==</span> <span class="token keyword null nil">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        fn <span class="token operator">=</span> selector\n        selector <span class="token operator">=</span> <span class="token keyword null nil">null</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 绑定事件</span>\n    elem<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> target\n        <span class="token comment">// 有 selector 说明需要做事件代理</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>selector<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 获取触发事件的元素，即 e.target</span>\n            target <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token property-access">target</span>\n            <span class="token comment">// 看是否符合 selector 这个条件</span>\n            <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token method function property-access">matches</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                fn<span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> e<span class="token punctuation">)</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span> <span class="token keyword control-flow">else</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 无 selector，说明不需要事件代理</span>\n            <span class="token function">fn</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>使用示例：</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// 使用代理 bindEvent 多一个 \'a\' 参数</span>\n<span class="token keyword">var</span> div <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span>\n<span class="token function">bindEvent</span><span class="token punctuation">(</span>div1<span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token string">\'a\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">innerHTML</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 不使用代理</span>\n<span class="token keyword">var</span> a1 <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'a1\'</span><span class="token punctuation">)</span>\n<span class="token function">bindEvent</span><span class="token punctuation">(</span>div<span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>a1<span class="token punctuation">.</span><span class="token property-access">innerHTML</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n<h2 id="dom-%E7%9A%84%E4%BA%8B%E4%BB%B6%E6%A8%A1%E5%9E%8B">DOM 的事件模型？<a class="anchor" href="#dom-%E7%9A%84%E4%BA%8B%E4%BB%B6%E6%A8%A1%E5%9E%8B">§</a></h2>\n<ul>\n<li>DOM之事件模型分脚本模型、内联模型(同类一个，后者覆盖)、动态绑定(同类多个)</li>\n<li>事件就是文档或浏览器窗口中发生的一些特定的交互瞬间，而事件流(又叫事件传播)描述的是从⻚面中接收事件的顺序。</li>\n<li>事件流：\n<ul>\n<li>事件就是文档或浏览器窗口中发生的一些特定的交互瞬间，而事件流(又叫事件传播)描述的是从⻚面中接收事件的顺 序。</li>\n<li>事件冒泡：即事件开始时由最具体的元素(文档中嵌套层次最深的那个节点)接收，然后逐级向上传播到 较为不具体的节点。</li>\n<li>事件捕获：事件捕获的思想是不太具体的节点应该更早接收到事件，而最具体的节点应该最后接收到事件。事件捕获的用意在于在。事件到达预定目标之前就捕获它。</li>\n</ul>\n</li>\n<li>事件流又称为事件传播，DOM2级事件规定的事件流包括三个阶段：\n<ul>\n<li>事件捕获阶段(capture phase)</li>\n<li>处于目标阶段 (target phase)</li>\n<li>事件冒泡阶段(bubbling phase)</li>\n</ul>\n</li>\n</ul>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n<span class="token comment">&lt;!--行内绑定:脚本模型--></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascrpt:alert(<span class="token punctuation">\'</span>Hello<span class="token punctuation">\'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!--内联模型--></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showHello()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!--动态绑定--></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token comment">/*DOM0:同一个元素，同类事件只能添加一个，如果添加多个，\n* 后面添加的会覆盖之前添加的*/</span>\n<span class="token keyword">function</span> <span class="token function">shoeHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> btn3 <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"btn3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nbtn3<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/*DOM2:可以给同一个元素添加多个同类事件*/</span> btn3<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hello1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nbtn3<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hello2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>btn3<span class="token punctuation">.</span><span class="token property-access">attachEvent</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token comment">/*IE*/</span>\nbtn3<span class="token punctuation">.</span><span class="token method function property-access">attachEvent</span><span class="token punctuation">(</span><span class="token string">"onclick"</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"IE Hello1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token keyword control-flow">else</span> <span class="token punctuation">{</span>\n<span class="token comment">/*W3C*/</span>\nbtn3<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"W3C Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n<h2 id="dom-%E7%9A%84%E5%AE%9E%E7%8E%B0%E6%9C%BA%E5%88%B6">DOM 的实现机制？<a class="anchor" href="#dom-%E7%9A%84%E5%AE%9E%E7%8E%B0%E6%9C%BA%E5%88%B6">§</a></h2>\n<ul>\n<li>当初始的 HTML 文档完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载。</li>\n<li>window 的 load 事件仅在 DOM 和所有相关资源全部完成加载后才会触发。</li>\n</ul>\n<h2 id="dom-%E6%A0%91%E7%9A%84%E6%9E%84%E5%BB%BA%E8%BF%87%E7%A8%8B">DOM 树的构建过程？<a class="anchor" href="#dom-%E6%A0%91%E7%9A%84%E6%9E%84%E5%BB%BA%E8%BF%87%E7%A8%8B">§</a></h2>\n<ul>\n<li>转码: 浏览器将接收到的二进制数据按照指定编码格式转化为HTML字符串</li>\n<li>生成Tokens: 之后开始parser，浏览器会将HTML字符串解析成Tokens</li>\n<li>构建Nodes: 对Node添加特定的属性，通过指针确定 Node 的父、子、兄弟关系和所属 treeScope</li>\n<li>生成DOM Tree: 通过node包含的指针确定的关系构建出DOM Tree</li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-169223577-1" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "DOM + BOM"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="dom-%E5%92%8C-bom-%E6%98%AF%E4%BB%80%E4%B9%88">DOM 和 BOM 是什么？<a class="anchor" href="#dom-%E5%92%8C-bom-%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h2>\n<ul>\n<li><strong>BOM 浏览器对象模型</strong>：根节点是 <code>window</code>。\n<ul>\n<li>navigator 对象：<code>appCodeName; appName; appVersion; cookieEnabled; platform; userAgent;</code>。</li>\n<li>screen 对象：<code>availHeight; availWidth; height; width; colorDepth;</code>。</li>\n<li>history 对象：<code>back; forward; go;</code>。</li>\n<li>location 对象：\n<ul>\n<li>属性：<code>hash; host; hostName; href; pathname; port; portocol; </code>。</li>\n<li>方法：<code>assign; reload; replace</code>。</li>\n</ul>\n</li>\n<li>document 对象：\n<ul>\n<li>集合：<code>anchors; images; links; forms;</code>。</li>\n<li>属性：<code>cookie; domain; referrer; title; URL;</code>。</li>\n<li>方法：<code>open; close; write; writeIn;</code>。</li>\n</ul>\n</li>\n<li>窗口控制：<code>moveBy; moveTo; resizeBy; resizeTo; scrollBy; scrollTo;</code>。</li>\n<li>焦点控制：<code>focus; blur;</code>。</li>\n<li>打开关闭窗口：<code>open; close;</code>。</li>\n<li>定时器：<code>setTimeout; clearTimeout; setInterval; clearInterval</code>。</li>\n<li>对话框：<code>alert; confirm; prompt;</code>。</li>\n<li>属性：\n<ul>\n<li>状态栏：<code>defaultStatus; status</code>。</li>\n<li>窗口位置 - IE：<code>screenLeft; screenTop;</code>。</li>\n<li>窗口位置 - !IE：<code>screenX; screenY; pageXOffset; pageYOffset;</code>。</li>\n<li>窗口位置 - FF：<code>innerHeight; innerWidth; outerHeight; outerWidth;</code>。</li>\n<li>其它：<code>opener; close; name; self;</code>。</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><strong>DOM 文档对象模型</strong>：W3C 标准。根节点是 <code>window.document</code>。\n<ul>\n<li>获取节点：\n<ul>\n<li>document：<code>getElementById; getElementsByName; getElementsByTagName; </code>。</li>\n<li>节点指针：<code>firstChild; lastChild; childNodes; previousSibling; nextSibling; parentNode;</code>。</li>\n</ul>\n</li>\n<li>节点操作：\n<ul>\n<li>创建节点：<code>createElement; createAttribute; createTextNode;</code>。</li>\n<li>插入节点：<code>appendChild; insertBefore;</code>。</li>\n<li>替换节点：<code>replaceChild;</code>。</li>\n<li>复制节点：<code>cloneNode;</code>。</li>\n<li>删除节点：<code>removeChild;</code>。</li>\n</ul>\n</li>\n<li>属性操作（获取/设置/删除）：<code>getAttribute; setAttribute; removeAttribute</code>。</li>\n<li>文本操作：<code>insertData; appendData, deleteData, replaceData; spliceData; substring;</code>。</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-dom-lever">如何理解 DOM Lever？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-dom-lever">§</a></h2>\n<ul>\n<li>DOM 一级</li>\n<li>DOM 二级</li>\n<li>DOM 三级</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E4%BA%8B%E4%BB%B6%E6%B5%81%E5%86%92%E6%B3%A1%E6%8D%95%E8%8E%B7%E5%A7%94%E6%89%98">如何理解事件流/冒泡/捕获/委托？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E4%BA%8B%E4%BB%B6%E6%B5%81%E5%86%92%E6%B3%A1%E6%8D%95%E8%8E%B7%E5%A7%94%E6%89%98">§</a></h2>\n<p><strong>事件流</strong>：</p>\n<ul>\n<li>\n<p>事件流被分为三个阶段(15)捕获过程、(56)目标过程、(6~10)冒泡过程。</p>\n</li>\n<li>\n<p>IE 提出的是冒泡流，而网景提出的是捕获流，后来在 W3C 组织的统一之下，JS 支持了冒泡流和捕获流，但是目前低版本的 IE 浏览器还是只能支持冒泡流(IE6, IE7, IE8 均只支持冒泡流)，所以为了能够兼容更多的浏览器，建议大家使用冒泡流。</p>\n</li>\n<li>\n<p>从事件传播的过程能够看出来，当点击鼠标后，会先发生事件的捕获</p>\n<ul>\n<li>捕获阶段：首先 window 会获捕获到事件，之后 document、documentElement、body 会捕获到，再之后就是在 body 中 DOM 元素一层一层的捕获到事件，有 wrapDiv、innerP。\n*目标阶段：真正点击的元素textSpan的事件发生了两次，因为在上面的JavaScript代码中，textSapn既在捕获阶段绑定了事件，又在冒泡阶段绑定了事件，所以发生了两次。但是这里有一点是需要注意，在目标阶段并不一定先发生在捕获阶段所绑定的事件，而是先绑定的事件发生，一会会解释一下。</li>\n<li>冒泡阶段：会和捕获阶段相反的步骤将事件一步一步的冒泡到window</li>\n</ul>\n</li>\n</ul>\n<p><strong>JavaScript 事件冒泡</strong>：</p>\n<ul>\n<li>当触发子元素时，事件会沿着 DOM 向上冒泡。事件冒泡是实现事件委托的原理。阻止冒泡示例：</li>\n</ul>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> btn <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'btn\'</span><span class="token punctuation">)</span>\nbtn<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// event.preventDefault() // 阻止默认行为</span>\n    event<span class="token punctuation">.</span><span class="token method function property-access">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 阻止冒泡</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'clicked\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n<p><strong>JavaScript 事件委托(事件代理)</strong>：</p>\n<p>事件委托是将事件监听器添加到父元素，而不是每个子元素单独设置事件监听器。当触发子元素时，事件会冒泡到父元素，监听器就会触发，这种技术的好处如下。</p>\n<ul>\n<li>优点：\n<ul>\n<li>内存占用减少，因为只需要一个父元素的事件处理程序，而不必为每个后代都添加事件处理程序。</li>\n<li>无需从已删除的元素中解绑处理程序，也不许将处理程序绑定到新元素上。</li>\n</ul>\n</li>\n<li>局限性：\n<ul>\n<li>focus、blur 之类的事件本身没有事件冒泡机制，所以无法委托</li>\n<li>mousemove、mouseout 这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，不适 合事件委托</li>\n</ul>\n</li>\n</ul>\n<p>示例目标：为 div 下的每个 a 标签绑定点击事件：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>a1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>a2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>a3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>a4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>点击增加一个 a 标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>示例原理：监听 div 下的事件触发点是不是 a 标签：</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">bindEvent</span><span class="token punctuation">(</span><span class="token parameter">elem<span class="token punctuation">,</span> type<span class="token punctuation">,</span> selector<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 这样可以实现重载</span>\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>fn <span class="token operator">==</span> <span class="token keyword null nil">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        fn <span class="token operator">=</span> selector\n        selector <span class="token operator">=</span> <span class="token keyword null nil">null</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 绑定事件</span>\n    elem<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> target\n        <span class="token comment">// 有 selector 说明需要做事件代理</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>selector<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 获取触发事件的元素，即 e.target</span>\n            target <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token property-access">target</span>\n            <span class="token comment">// 看是否符合 selector 这个条件</span>\n            <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token method function property-access">matches</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                fn<span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> e<span class="token punctuation">)</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span> <span class="token keyword control-flow">else</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 无 selector，说明不需要事件代理</span>\n            <span class="token function">fn</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>使用示例：</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// 使用代理 bindEvent 多一个 \'a\' 参数</span>\n<span class="token keyword">var</span> div <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span>\n<span class="token function">bindEvent</span><span class="token punctuation">(</span>div1<span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token string">\'a\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">innerHTML</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 不使用代理</span>\n<span class="token keyword">var</span> a1 <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'a1\'</span><span class="token punctuation">)</span>\n<span class="token function">bindEvent</span><span class="token punctuation">(</span>div<span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>a1<span class="token punctuation">.</span><span class="token property-access">innerHTML</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n<h2 id="dom-%E7%9A%84%E4%BA%8B%E4%BB%B6%E6%A8%A1%E5%9E%8B">DOM 的事件模型？<a class="anchor" href="#dom-%E7%9A%84%E4%BA%8B%E4%BB%B6%E6%A8%A1%E5%9E%8B">§</a></h2>\n<ul>\n<li>DOM之事件模型分脚本模型、内联模型(同类一个，后者覆盖)、动态绑定(同类多个)</li>\n<li>事件就是文档或浏览器窗口中发生的一些特定的交互瞬间，而事件流(又叫事件传播)描述的是从⻚面中接收事件的顺序。</li>\n<li>事件流：\n<ul>\n<li>事件就是文档或浏览器窗口中发生的一些特定的交互瞬间，而事件流(又叫事件传播)描述的是从⻚面中接收事件的顺 序。</li>\n<li>事件冒泡：即事件开始时由最具体的元素(文档中嵌套层次最深的那个节点)接收，然后逐级向上传播到 较为不具体的节点。</li>\n<li>事件捕获：事件捕获的思想是不太具体的节点应该更早接收到事件，而最具体的节点应该最后接收到事件。事件捕获的用意在于在。事件到达预定目标之前就捕获它。</li>\n</ul>\n</li>\n<li>事件流又称为事件传播，DOM2级事件规定的事件流包括三个阶段：\n<ul>\n<li>事件捕获阶段(capture phase)</li>\n<li>处于目标阶段 (target phase)</li>\n<li>事件冒泡阶段(bubbling phase)</li>\n</ul>\n</li>\n</ul>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n<span class="token comment">&lt;!--行内绑定:脚本模型--></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascrpt:alert(<span class="token punctuation">\'</span>Hello<span class="token punctuation">\'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!--内联模型--></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showHello()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!--动态绑定--></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token comment">/*DOM0:同一个元素，同类事件只能添加一个，如果添加多个，\n* 后面添加的会覆盖之前添加的*/</span>\n<span class="token keyword">function</span> <span class="token function">shoeHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> btn3 <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"btn3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nbtn3<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/*DOM2:可以给同一个元素添加多个同类事件*/</span> btn3<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hello1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nbtn3<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hello2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>btn3<span class="token punctuation">.</span><span class="token property-access">attachEvent</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token comment">/*IE*/</span>\nbtn3<span class="token punctuation">.</span><span class="token method function property-access">attachEvent</span><span class="token punctuation">(</span><span class="token string">"onclick"</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"IE Hello1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token keyword control-flow">else</span> <span class="token punctuation">{</span>\n<span class="token comment">/*W3C*/</span>\nbtn3<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"W3C Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n<h2 id="dom-%E7%9A%84%E5%AE%9E%E7%8E%B0%E6%9C%BA%E5%88%B6">DOM 的实现机制？<a class="anchor" href="#dom-%E7%9A%84%E5%AE%9E%E7%8E%B0%E6%9C%BA%E5%88%B6">§</a></h2>\n<ul>\n<li>当初始的 HTML 文档完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载。</li>\n<li>window 的 load 事件仅在 DOM 和所有相关资源全部完成加载后才会触发。</li>\n</ul>\n<h2 id="dom-%E6%A0%91%E7%9A%84%E6%9E%84%E5%BB%BA%E8%BF%87%E7%A8%8B">DOM 树的构建过程？<a class="anchor" href="#dom-%E6%A0%91%E7%9A%84%E6%9E%84%E5%BB%BA%E8%BF%87%E7%A8%8B">§</a></h2>\n<ul>\n<li>转码: 浏览器将接收到的二进制数据按照指定编码格式转化为HTML字符串</li>\n<li>生成Tokens: 之后开始parser，浏览器会将HTML字符串解析成Tokens</li>\n<li>构建Nodes: 对Node添加特定的属性，通过指针确定 Node 的父、子、兄弟关系和所属 treeScope</li>\n<li>生成DOM Tree: 通过node包含的指针确定的关系构建出DOM Tree</li>\n</ul>'
        } }),
    'contentHasKatex': false,
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#dom-%E5%92%8C-bom-%E6%98%AF%E4%BB%80%E4%B9%88">DOM 和 BOM 是什么？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-dom-lever">如何理解 DOM Lever？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E4%BA%8B%E4%BB%B6%E6%B5%81%E5%86%92%E6%B3%A1%E6%8D%95%E8%8E%B7%E5%A7%94%E6%89%98">如何理解事件流/冒泡/捕获/委托？</a></li><li><a href="#dom-%E7%9A%84%E4%BA%8B%E4%BB%B6%E6%A8%A1%E5%9E%8B">DOM 的事件模型？</a></li><li><a href="#dom-%E7%9A%84%E5%AE%9E%E7%8E%B0%E6%9C%BA%E5%88%B6">DOM 的实现机制？</a></li><li><a href="#dom-%E6%A0%91%E7%9A%84%E6%9E%84%E5%BB%BA%E8%BF%87%E7%A8%8B">DOM 树的构建过程？</a></li></ol></nav>'
        } }),
    'date': "2020-10-27T07:34:52.000Z",
    'updated': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ]
};
