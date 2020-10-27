import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "title": "CSS",
        "link": "articles/03-HTML+CSS/01-css-design.html"
    },
    'next': {
        "title": "CSS 实战",
        "link": "articles/03-HTML+CSS/03-css-practice.html"
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
    'pagePath': "articles/03-HTML+CSS/02-css-advance.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/03-HTML+CSS/02-css-advance.html",
    'title': "CSS 进阶",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>CSS 进阶</h1>\n<h2 id="css-%E5%93%8D%E5%BA%94%E5%BC%8F">CSS 响应式<a class="anchor" href="#css-%E5%93%8D%E5%BA%94%E5%BC%8F">§</a></h2>\n<blockquote>\n<p>CSS 像素、物理像素、逻辑像素、设备像素比、PPI、Viewport 区别及实现，<a href="https://github.com/jawil/blog/issues/21">https://github.com/jawil/blog/issues/21</a></p>\n</blockquote>\n<h3 id="%E5%93%8D%E5%BA%94%E5%BC%8F%E8%AE%BE%E8%AE%A1%E4%B8%8E%E8%87%AA%E9%80%82%E5%BA%94%E8%AE%BE%E8%AE%A1">响应式设计与自适应设计？<a class="anchor" href="#%E5%93%8D%E5%BA%94%E5%BC%8F%E8%AE%BE%E8%AE%A1%E4%B8%8E%E8%87%AA%E9%80%82%E5%BA%94%E8%AE%BE%E8%AE%A1">§</a></h3>\n<p>响应式设计和自适应设计都以提高不同设备间的用户体验为目标，根据视窗大小、分辨率、使用环境和控制方式等参数进行优化调整。</p>\n<ul>\n<li>响应式设计的适应性原则：网站应该凭借一份代码，在各种设备上都有良好的显示和使用效果。响应式网站通过使用媒体查询，自适应栅格和响应式图片，基于多种因素进行变化，创造出优良的用户体验。就像一个球通过膨胀和收缩，来适应不同大小的篮圈。</li>\n<li>自适应设计更像是渐进式增强的现代解释。与响应式设计单一地去适配不同，自适应设计通过检测设备和其他特征，从早已定义好的一系列视窗大小和其他特性中，选出最恰当的功能和布局。与使用一个球去穿过各种的篮筐不同，自适应设计允许使用多个球，然后根据不同的篮筐大小，去选择最合适的一个。</li>\n</ul>\n<h3 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2">如何理解媒体查询？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2">§</a></h3>\n<blockquote>\n<p><a href="https://www.cnblogs.com/xiaohuochai/p/5848612.html">https://www.cnblogs.com/xiaohuochai/p/5848612.html</a></p>\n</blockquote>\n<ul>\n<li>媒体查询由一个可选的媒体类型和零个或多个使用媒体功能的限制了样式表范围的表达式组成，例如宽度、高度和颜 色。媒体查询，添加自CSS3，允许内容的呈现针对一个特定范围的输出设备而进行裁剪，而不必改变内容本身,非常适 合web网⻚应对不同型号的设备而做出对应的响应适配。</li>\n<li>媒体查询包含一个可选的媒体类型和，满足CSS3规范的条件下，包含零个或多个表达式，这些表达式描述了媒体特 征，最终会被解析为true或false。如果媒体查询中指定的媒体类型匹配展示文档所使用的设备类型，并且所有的表达式 的值都是true，那么该媒体查询的结果为true.那么媒体查询内的样式将会生效。</li>\n</ul>\n<pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- link元素中的CSS媒体查询 --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(max-width: 800px)<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token comment">&lt;!-- 样式表中的CSS媒体查询 --></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> <span class="token number">600</span><span class="token unit">px</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n<span class="token selector"><span class="token class">.facet_sidebar</span></span> <span class="token punctuation">{</span> <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n</code></pre>\n<h3 id="%E4%BB%80%E4%B9%88%E6%98%AF%E8%AE%BE%E5%A4%87%E7%8B%AC%E7%AB%8B%E5%83%8F%E7%B4%A0dip">什么是设备独立像素（DIP）？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E8%AE%BE%E5%A4%87%E7%8B%AC%E7%AB%8B%E5%83%8F%E7%B4%A0dip">§</a></h3>\n<p><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1&quot;&gt;</code>。</p>\n<ul>\n<li>浏览器使用的宽度像素 DIP，并不是你设备真正的硬件宽度像素。</li>\n<li>如果你没有在代码当中指定 viewport，那么，浏览器会默认使用 DIP 为 980px，在手机这种小屏幕设备中，设备宽度会很小，在很小的宽度中显示 980px，所有东西自然都变地很小。</li>\n<li><code>window.devicePixelRatio</code> 查看屏幕密度描述符：<code>&lt;img src=”people_1x.jpg” srcset=”people_1x.jpg 1x, people_2x.jpg 2x” alt=”people”&gt;</code>。</li>\n</ul>\n<h3 id="empxrem-%E5%8C%BA%E5%88%AB">em\px\rem 区别?<a class="anchor" href="#empxrem-%E5%8C%BA%E5%88%AB">§</a></h3>\n<ul>\n<li>px：绝对单位，⻚面按精确像素展示。</li>\n<li>em：相对单位，基准点为父节点字体的大小，如果自身定义了 font-size 按自身来计算(浏览器默认字体是 16px)，整个⻚面内1em不是一个固定的值。</li>\n<li>rem:相对单位，可理解为”root em”, 相对根节点html的字体大小来计算，CSS3新加属性，chrome/firefox/IE9+ 支持</li>\n</ul>\n<h3 id="canvassvgpngjpg-%E7%9A%84%E5%8C%BA%E5%88%AB">Canvas/SVG/PNG/JPG 的区别？<a class="anchor" href="#canvassvgpngjpg-%E7%9A%84%E5%8C%BA%E5%88%AB">§</a></h3>\n<h2 id="css-%E5%8A%A8%E7%94%BB%E5%92%8C-3d">CSS 动画和 3D<a class="anchor" href="#css-%E5%8A%A8%E7%94%BB%E5%92%8C-3d">§</a></h2>\n<blockquote>\n<p><a href="https://www.cnblogs.com/xiaohuochai/p/5391663.html">https://www.cnblogs.com/xiaohuochai/p/5391663.html</a></p>\n<p><a href="https://www.cnblogs.com/xiaohuochai/p/5347930.html">https://www.cnblogs.com/xiaohuochai/p/5347930.html</a></p>\n</blockquote>\n<h3 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-translate">如何理解 translate？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-translate">§</a></h3>\n<blockquote>\n<p><a href="https://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/">https://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/</a></p>\n</blockquote>\n<ul>\n<li>translate()是transform的一个值。改变transform或opacity不会触发浏览器重新布局(reflow)或重绘(repaint)，只会 触发复合(compositions)。而改变绝对定位会触发重新布局，进而触发重绘和复合。transform使浏览器为元素创建一 个 GPU 图层，但改变绝对定位会使用到 CPU。 因此translate()更高效，可以缩短平滑动画的绘制时间。</li>\n<li>而translate改变位置时，元素依然会占据其原始空间，绝对定位就不会发生这种情况。</li>\n</ul>\n<h2 id="css-%E5%B7%A5%E7%A8%8B%E5%AE%9E%E6%88%98">CSS 工程实战<a class="anchor" href="#css-%E5%B7%A5%E7%A8%8B%E5%AE%9E%E6%88%98">§</a></h2>\n<h3 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E6%A0%85%E6%A0%BC%E7%B3%BB%E7%BB%9F">如何理解栅格系统？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E6%A0%85%E6%A0%BC%E7%B3%BB%E7%BB%9F">§</a></h3>\n<h3 id="css-%E6%80%8E%E4%B9%88%E5%BD%B1%E5%93%8D%E6%B5%8F%E8%A7%88%E5%99%A8-reflowrepaintcompositing">CSS 怎么影响浏览器 reflow/repaint/compositing<a class="anchor" href="#css-%E6%80%8E%E4%B9%88%E5%BD%B1%E5%93%8D%E6%B5%8F%E8%A7%88%E5%99%A8-reflowrepaintcompositing">§</a></h3>\n<h3 id="css-hack-%E7%9A%84%E5%88%86%E7%B1%BB">CSS Hack 的分类？<a class="anchor" href="#css-hack-%E7%9A%84%E5%88%86%E7%B1%BB">§</a></h3>\n<ul>\n<li>属性前缀法(即类内部 Hack)：属性前缀法是在 CSS 样式属性名前加上一些只有特定浏览器才能识别的 Hack 前缀，以达到预期的页面展现效果。</li>\n</ul>\n<blockquote>\n<p>说明，在标准模式中：</p>\n<ol>\n<li>&quot;-&quot; 减号是IE6专有的hack</li>\n<li>&quot;\9&quot; IE6/IE7/IE8/IE9/IE10都生效</li>\n<li>&quot;\0&quot; IE8/IE9/IE10都生效，是IE8/9/10的hack</li>\n<li>&quot;\9\0&quot; 只对IE9/IE10生效，是IE9/10的hack</li>\n</ol>\n</blockquote>\n<ul>\n<li>选择器前缀法(即选择器 Hack)：针对一些页面表现不一致或者需要特殊对待的浏览器，在 CSS 选择器前加上一些只有某些特定浏览器才能识别的前缀进行 Hack。例如。</li>\n</ul>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">*</span>html <span class="token operator">*</span>前缀只对 IE6 生效\n<span class="token operator">*</span><span class="token operator">+</span>html <span class="token operator">*</span><span class="token operator">+</span>前缀只对 IE7 生效\n<span class="token variable">@media</span> screen\<span class="token number">9</span>{<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>}只对 IE6<span class="token operator">/</span><span class="token number">7</span> 生效\n<span class="token variable">@media</span> \0screen {body { background<span class="token punctuation">:</span> red<span class="token comment">; }}只对 IE8 有效</span>\n<span class="token variable">@media</span> \0screen\<span class="token punctuation">,</span>screen\<span class="token number">9</span>{body { background<span class="token punctuation">:</span> blue<span class="token comment">; }}只对 IE6/7/8 有效</span>\n<span class="token variable">@media</span> screen\<span class="token number">0</span> {body { background<span class="token punctuation">:</span> green<span class="token comment">; }} 只对 IE8/9/10 有效</span>\n<span class="token variable">@media</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span>min<span class="token operator">-</span>width<span class="token punctuation">:</span><span class="token number">0</span>\<span class="token number">0</span><span class="token punctuation">)</span> {body { background<span class="token punctuation">:</span> gray<span class="token comment">; }} 只对 IE9/10 有效</span>\n<span class="token variable">@media</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token operator">-</span>ms<span class="token operator">-</span>high<span class="token operator">-</span>contrast<span class="token punctuation">:</span> active<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">-</span>ms<span class="token operator">-</span>high<span class="token operator">-</span>contrast<span class="token punctuation">:</span> none<span class="token punctuation">)</span> {body { background<span class="token punctuation">:</span> orange<span class="token comment">; }} 只对 IE10 有效</span>\n等等\n</code></pre>\n<ul>\n<li>IE 条件注释法(即 HTML 条件注释 Hack)：这种方式是 IE 浏览器专有的 Hack 方式，微软官方推荐使用的 Hack 方式。如下。</li>\n</ul>\n<pre class="language-autoit"><code class="language-autoit">只在 IE 下生效\n<span class="token operator">&lt;</span>!<span class="token operator">-</span><span class="token operator">-</span><span class="token punctuation">[</span><span class="token keyword">if</span> IE<span class="token punctuation">]</span><span class="token operator">></span>\n这段文字只在 IE 浏览器显示\n<span class="token operator">&lt;</span>!<span class="token punctuation">[</span><span class="token keyword">endif</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>\n\n只在 IE6 下生效\n<span class="token operator">&lt;</span>!<span class="token operator">-</span><span class="token operator">-</span><span class="token punctuation">[</span><span class="token keyword">if</span> IE <span class="token number">6</span><span class="token punctuation">]</span><span class="token operator">></span>\n这段文字只在 IE6 浏览器显示\n<span class="token operator">&lt;</span>!<span class="token punctuation">[</span><span class="token keyword">endif</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>\n\n只在 IE6 以上版本生效\n<span class="token operator">&lt;</span>!<span class="token operator">-</span><span class="token operator">-</span><span class="token punctuation">[</span><span class="token keyword">if</span> gte IE <span class="token number">6</span><span class="token punctuation">]</span><span class="token operator">></span>\n这段文字只在 IE6 以上<span class="token punctuation">(</span>包括<span class="token punctuation">)</span>版本 IE 浏览器显示\n<span class="token operator">&lt;</span>!<span class="token punctuation">[</span><span class="token keyword">endif</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>\n\n只在 IE8 上不生效\n<span class="token operator">&lt;</span>!<span class="token operator">-</span><span class="token operator">-</span><span class="token punctuation">[</span><span class="token keyword">if</span> ! IE <span class="token number">8</span><span class="token punctuation">]</span><span class="token operator">></span>\n这段文字在非 IE8 浏览器显示\n<span class="token operator">&lt;</span>!<span class="token punctuation">[</span><span class="token keyword">endif</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>\n\n非 IE 浏览器生效\n<span class="token operator">&lt;</span>!<span class="token operator">-</span><span class="token operator">-</span><span class="token punctuation">[</span><span class="token keyword">if</span> !IE<span class="token punctuation">]</span><span class="token operator">></span>\n这段文字只在非 IE 浏览器显示\n<span class="token operator">&lt;</span>!<span class="token punctuation">[</span><span class="token keyword">endif</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>\n</code></pre>\n<h3 id="css-hack-%E6%9C%89%E5%93%AA%E4%BA%9B%E6%8A%80%E5%B7%A7">CSS Hack 有哪些技巧？<a class="anchor" href="#css-hack-%E6%9C%89%E5%93%AA%E4%BA%9B%E6%8A%80%E5%B7%A7">§</a></h3>\n<p>我们把这个针对不同的浏览器或不同版本编写相应 CSS 的过程，叫做 CSS Hack。</p>\n<p>一般情况下，我们尽量避免使用 CSS Hack，但是有些情况为了顾及用户体验实现向下兼容，不得已才使用 Hack。使用 Hack 虽然对页面表现的一致性有好处，但过多的滥用会造成 HTML 文档混乱不堪，增加管理和维护的负担。</p>\n<p>常见的浏览器兼容问题机器 hack 技巧：</p>\n<ul>\n<li>PNG 24位的图片在 IE6 浏览器上出现背景，解决方案是做成 PNG8。</li>\n<li>浏览器默认的 margin 和 padding 不同。解决方案是加一个全局的 <code>*{ margin:0; padding:0;}</code>来统一。</li>\n<li>IE6双边距bug：块属性标签float后，又有横行的 margin 情况下，在 IE6 显示 margin 比设置的大。</li>\n</ul>\n<pre class="language-autoit"><code class="language-autoit"><span class="token punctuation">.</span>bb{\n    background<span class="token operator">-</span>color<span class="token punctuation">:</span> red<span class="token comment">;/* 所有识别 */</span>\n    background<span class="token operator">-</span>color<span class="token punctuation">:</span> #00deff\<span class="token number">9</span><span class="token comment">; /* IE6、7、8 识别*/</span>\n    <span class="token operator">+</span>background<span class="token operator">-</span>color<span class="token punctuation">:</span> #a200ff<span class="token comment">;/* IE6、7 识别*/</span>\n    _background<span class="token operator">-</span>color<span class="token punctuation">:</span> #1e0bd1<span class="token comment">;/* IE6 识别*/</span>\n}\n</code></pre>\n<ul>\n<li>IE 下,可以使用获取常规属性的方法来获取自定义属性，也可以使用 getAttribute() 获取自定义属性;Firefox 下,只能使用 getAttribute() 获取自定义属性。解决方法:统一通过 getAttribute() 获取自定义属性。</li>\n<li>IE下,event 对象有x, y 属性,但是没有pageX, pageY 属性;Firefox 下,event 对象有 pageX, pageY 属性,但是没有 x, y 属性。</li>\n<li>解决方法：(条件注释)缺点是在 IE 浏览器下可能会增加额外的 HTTP 请求数。</li>\n<li>Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示，可通过加入 CSS 属性 <code>-webkit-text-size-adjust: none;</code> 解决。</li>\n<li>超链接访问过后 hover 样式就不出现了 被点击访问过的超链接样式不在具有 hover 和 active 了解决方法是改变 CSS 属性的排列顺序：<code>L-V-H-A : a:link {} a:visited {} a:hover {} a:active {}</code></li>\n</ul>\n<h3 id="css-%E5%A6%82%E4%BD%95%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8">CSS 如何清除浮动？<a class="anchor" href="#css-%E5%A6%82%E4%BD%95%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8">§</a></h3>\n<ul>\n<li>空div方法: <code>&lt;div style=&quot;clear:both;&quot;&gt;&lt;/div&gt;</code></li>\n<li>Clearfix 方法:上文使用.clearfix类已经提到</li>\n<li>overflow: auto或overflow: hidden方法，使用BFC</li>\n</ul>\n<h3 id="css-%E9%9A%90%E8%97%8F%E5%86%85%E5%AE%B9%E7%9A%84%E6%8A%80%E5%B7%A7">CSS 隐藏内容的技巧？<a class="anchor" href="#css-%E9%9A%90%E8%97%8F%E5%86%85%E5%AE%B9%E7%9A%84%E6%8A%80%E5%B7%A7">§</a></h3>\n<p>这些与元素的可访问性有关。</p>\n<ul>\n<li><code>visibility: hidden</code>：元素仍然在页面流中，并占用空间，不可以交互。</li>\n<li><code>overflow: hidden</code>：这个只隐藏元素溢出的部分，但是占据空间且不可交互。</li>\n<li><code>display: none</code>：这个是彻底隐藏了元素，元素从文档流中消失，既不占据空间也不交互，也不影响布局。</li>\n<li><code>width: 0; height: 0</code>：使元素不占用屏幕上的任何空间，导致不显示它。</li>\n<li><code>position: absolute; left: -99999px</code>： 将它置于屏幕之外。</li>\n<li><code>text-indent: -9999px</code>：这只适用于 block 元素中的文本。</li>\n<li><code>opacity: 0</code>：本质上是将元素的透明度将为0，就看起来隐藏了，但是依然占据空间且可以交互。</li>\n<li><code>z-index: -9999</code>：原理是将层级放到底部，这样就被覆盖了，看起来隐藏了。</li>\n<li><code>transform: scale(0, 0)</code>：平面变换，将元素缩放为0，但是依然占据空间，但不可交互。</li>\n<li>更多的 Hack 技巧：还有一些靠绝对定位把元素移到可视区域外，或者用clip-path进行裁剪的操作。</li>\n</ul>\n<h3 id="%E4%BB%80%E4%B9%88%E6%98%AF-css-%E9%9B%AA%E7%A2%A7%E5%9B%BE">什么是 CSS 雪碧图？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-css-%E9%9B%AA%E7%A2%A7%E5%9B%BE">§</a></h3>\n<ul>\n<li>\n<p>雪碧图是把多张图片整合到一张上的图片。它被运用在众多使用了很多小图标的网站上。实现方法：</p>\n<ul>\n<li>使用生成器将多张图片打包成一张雪碧图，并为其生成合适的 CSS。</li>\n<li>每张图片都有相应的 CSS 类，该类定义了 <code>background-image</code>、<code>background-position</code> 和 <code>background-size</code> 属性。</li>\n<li>使用图片时，将相应的类添加到你的元素中。</li>\n</ul>\n</li>\n<li>\n<p>好处：</p>\n<ul>\n<li>减少加载多张图片的 HTTP 请求数。但是对于 HTTP2.0 而言，加载多张图片不再是问题。</li>\n<li>提前加载资源，防止在需要时才在开始下载引发的问题，比如只出现在 :hover 伪类中的图片，不会出现闪烁。</li>\n</ul>\n</li>\n<li>\n<p>缺点：</p>\n<ul>\n<li>CSS Sprite维护成本较高，如果⻚面背景有少许改动，一般就要改这张合并的图片</li>\n<li>加载速度优势在http2开启后荡然无存，HTTP2多路复用，多张图片也可以重复利用一个连接通道搞定</li>\n</ul>\n</li>\n</ul>\n<h3 id="css-%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8%E5%92%8C%E5%90%8E%E5%A4%84%E7%90%86%E5%99%A8">CSS 预处理器和后处理器？<a class="anchor" href="#css-%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8%E5%92%8C%E5%90%8E%E5%A4%84%E7%90%86%E5%99%A8">§</a></h3>\n<ul>\n<li>预处理器\n<ul>\n<li>\n<p>优点：</p>\n<ul>\n<li>提高 CSS 可维护性。</li>\n<li>易于编写嵌套选择器。</li>\n<li>引入变量，增添主题功能。可以在不同的项目中共享主题文件。</li>\n<li>通过混合(Mixins)生成重复的 CSS。</li>\n<li>将代码分割成多个文件。不进行预处理的 CSS，虽然也可以分割成多个文件，但需要建立多个 HTTP 请求加载这些文件。</li>\n</ul>\n</li>\n<li>\n<p>缺点：</p>\n<ul>\n<li>需要预处理工具。</li>\n<li>重新编译的时间可能会很慢。</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>less,sass,stylus 三者之间的不同点</li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-169223577-1" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "CSS \u8FDB\u9636"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="css-%E5%93%8D%E5%BA%94%E5%BC%8F">CSS 响应式<a class="anchor" href="#css-%E5%93%8D%E5%BA%94%E5%BC%8F">§</a></h2>\n<blockquote>\n<p>CSS 像素、物理像素、逻辑像素、设备像素比、PPI、Viewport 区别及实现，<a href="https://github.com/jawil/blog/issues/21">https://github.com/jawil/blog/issues/21</a></p>\n</blockquote>\n<h3 id="%E5%93%8D%E5%BA%94%E5%BC%8F%E8%AE%BE%E8%AE%A1%E4%B8%8E%E8%87%AA%E9%80%82%E5%BA%94%E8%AE%BE%E8%AE%A1">响应式设计与自适应设计？<a class="anchor" href="#%E5%93%8D%E5%BA%94%E5%BC%8F%E8%AE%BE%E8%AE%A1%E4%B8%8E%E8%87%AA%E9%80%82%E5%BA%94%E8%AE%BE%E8%AE%A1">§</a></h3>\n<p>响应式设计和自适应设计都以提高不同设备间的用户体验为目标，根据视窗大小、分辨率、使用环境和控制方式等参数进行优化调整。</p>\n<ul>\n<li>响应式设计的适应性原则：网站应该凭借一份代码，在各种设备上都有良好的显示和使用效果。响应式网站通过使用媒体查询，自适应栅格和响应式图片，基于多种因素进行变化，创造出优良的用户体验。就像一个球通过膨胀和收缩，来适应不同大小的篮圈。</li>\n<li>自适应设计更像是渐进式增强的现代解释。与响应式设计单一地去适配不同，自适应设计通过检测设备和其他特征，从早已定义好的一系列视窗大小和其他特性中，选出最恰当的功能和布局。与使用一个球去穿过各种的篮筐不同，自适应设计允许使用多个球，然后根据不同的篮筐大小，去选择最合适的一个。</li>\n</ul>\n<h3 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2">如何理解媒体查询？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2">§</a></h3>\n<blockquote>\n<p><a href="https://www.cnblogs.com/xiaohuochai/p/5848612.html">https://www.cnblogs.com/xiaohuochai/p/5848612.html</a></p>\n</blockquote>\n<ul>\n<li>媒体查询由一个可选的媒体类型和零个或多个使用媒体功能的限制了样式表范围的表达式组成，例如宽度、高度和颜 色。媒体查询，添加自CSS3，允许内容的呈现针对一个特定范围的输出设备而进行裁剪，而不必改变内容本身,非常适 合web网⻚应对不同型号的设备而做出对应的响应适配。</li>\n<li>媒体查询包含一个可选的媒体类型和，满足CSS3规范的条件下，包含零个或多个表达式，这些表达式描述了媒体特 征，最终会被解析为true或false。如果媒体查询中指定的媒体类型匹配展示文档所使用的设备类型，并且所有的表达式 的值都是true，那么该媒体查询的结果为true.那么媒体查询内的样式将会生效。</li>\n</ul>\n<pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- link元素中的CSS媒体查询 --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(max-width: 800px)<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token comment">&lt;!-- 样式表中的CSS媒体查询 --></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> <span class="token number">600</span><span class="token unit">px</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n<span class="token selector"><span class="token class">.facet_sidebar</span></span> <span class="token punctuation">{</span> <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n</code></pre>\n<h3 id="%E4%BB%80%E4%B9%88%E6%98%AF%E8%AE%BE%E5%A4%87%E7%8B%AC%E7%AB%8B%E5%83%8F%E7%B4%A0dip">什么是设备独立像素（DIP）？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E8%AE%BE%E5%A4%87%E7%8B%AC%E7%AB%8B%E5%83%8F%E7%B4%A0dip">§</a></h3>\n<p><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1&quot;&gt;</code>。</p>\n<ul>\n<li>浏览器使用的宽度像素 DIP，并不是你设备真正的硬件宽度像素。</li>\n<li>如果你没有在代码当中指定 viewport，那么，浏览器会默认使用 DIP 为 980px，在手机这种小屏幕设备中，设备宽度会很小，在很小的宽度中显示 980px，所有东西自然都变地很小。</li>\n<li><code>window.devicePixelRatio</code> 查看屏幕密度描述符：<code>&lt;img src=”people_1x.jpg” srcset=”people_1x.jpg 1x, people_2x.jpg 2x” alt=”people”&gt;</code>。</li>\n</ul>\n<h3 id="empxrem-%E5%8C%BA%E5%88%AB">em\px\rem 区别?<a class="anchor" href="#empxrem-%E5%8C%BA%E5%88%AB">§</a></h3>\n<ul>\n<li>px：绝对单位，⻚面按精确像素展示。</li>\n<li>em：相对单位，基准点为父节点字体的大小，如果自身定义了 font-size 按自身来计算(浏览器默认字体是 16px)，整个⻚面内1em不是一个固定的值。</li>\n<li>rem:相对单位，可理解为”root em”, 相对根节点html的字体大小来计算，CSS3新加属性，chrome/firefox/IE9+ 支持</li>\n</ul>\n<h3 id="canvassvgpngjpg-%E7%9A%84%E5%8C%BA%E5%88%AB">Canvas/SVG/PNG/JPG 的区别？<a class="anchor" href="#canvassvgpngjpg-%E7%9A%84%E5%8C%BA%E5%88%AB">§</a></h3>\n<h2 id="css-%E5%8A%A8%E7%94%BB%E5%92%8C-3d">CSS 动画和 3D<a class="anchor" href="#css-%E5%8A%A8%E7%94%BB%E5%92%8C-3d">§</a></h2>\n<blockquote>\n<p><a href="https://www.cnblogs.com/xiaohuochai/p/5391663.html">https://www.cnblogs.com/xiaohuochai/p/5391663.html</a></p>\n<p><a href="https://www.cnblogs.com/xiaohuochai/p/5347930.html">https://www.cnblogs.com/xiaohuochai/p/5347930.html</a></p>\n</blockquote>\n<h3 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-translate">如何理解 translate？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-translate">§</a></h3>\n<blockquote>\n<p><a href="https://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/">https://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/</a></p>\n</blockquote>\n<ul>\n<li>translate()是transform的一个值。改变transform或opacity不会触发浏览器重新布局(reflow)或重绘(repaint)，只会 触发复合(compositions)。而改变绝对定位会触发重新布局，进而触发重绘和复合。transform使浏览器为元素创建一 个 GPU 图层，但改变绝对定位会使用到 CPU。 因此translate()更高效，可以缩短平滑动画的绘制时间。</li>\n<li>而translate改变位置时，元素依然会占据其原始空间，绝对定位就不会发生这种情况。</li>\n</ul>\n<h2 id="css-%E5%B7%A5%E7%A8%8B%E5%AE%9E%E6%88%98">CSS 工程实战<a class="anchor" href="#css-%E5%B7%A5%E7%A8%8B%E5%AE%9E%E6%88%98">§</a></h2>\n<h3 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E6%A0%85%E6%A0%BC%E7%B3%BB%E7%BB%9F">如何理解栅格系统？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E6%A0%85%E6%A0%BC%E7%B3%BB%E7%BB%9F">§</a></h3>\n<h3 id="css-%E6%80%8E%E4%B9%88%E5%BD%B1%E5%93%8D%E6%B5%8F%E8%A7%88%E5%99%A8-reflowrepaintcompositing">CSS 怎么影响浏览器 reflow/repaint/compositing<a class="anchor" href="#css-%E6%80%8E%E4%B9%88%E5%BD%B1%E5%93%8D%E6%B5%8F%E8%A7%88%E5%99%A8-reflowrepaintcompositing">§</a></h3>\n<h3 id="css-hack-%E7%9A%84%E5%88%86%E7%B1%BB">CSS Hack 的分类？<a class="anchor" href="#css-hack-%E7%9A%84%E5%88%86%E7%B1%BB">§</a></h3>\n<ul>\n<li>属性前缀法(即类内部 Hack)：属性前缀法是在 CSS 样式属性名前加上一些只有特定浏览器才能识别的 Hack 前缀，以达到预期的页面展现效果。</li>\n</ul>\n<blockquote>\n<p>说明，在标准模式中：</p>\n<ol>\n<li>&quot;-&quot; 减号是IE6专有的hack</li>\n<li>&quot;\9&quot; IE6/IE7/IE8/IE9/IE10都生效</li>\n<li>&quot;\0&quot; IE8/IE9/IE10都生效，是IE8/9/10的hack</li>\n<li>&quot;\9\0&quot; 只对IE9/IE10生效，是IE9/10的hack</li>\n</ol>\n</blockquote>\n<ul>\n<li>选择器前缀法(即选择器 Hack)：针对一些页面表现不一致或者需要特殊对待的浏览器，在 CSS 选择器前加上一些只有某些特定浏览器才能识别的前缀进行 Hack。例如。</li>\n</ul>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">*</span>html <span class="token operator">*</span>前缀只对 IE6 生效\n<span class="token operator">*</span><span class="token operator">+</span>html <span class="token operator">*</span><span class="token operator">+</span>前缀只对 IE7 生效\n<span class="token variable">@media</span> screen\<span class="token number">9</span>{<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>}只对 IE6<span class="token operator">/</span><span class="token number">7</span> 生效\n<span class="token variable">@media</span> \0screen {body { background<span class="token punctuation">:</span> red<span class="token comment">; }}只对 IE8 有效</span>\n<span class="token variable">@media</span> \0screen\<span class="token punctuation">,</span>screen\<span class="token number">9</span>{body { background<span class="token punctuation">:</span> blue<span class="token comment">; }}只对 IE6/7/8 有效</span>\n<span class="token variable">@media</span> screen\<span class="token number">0</span> {body { background<span class="token punctuation">:</span> green<span class="token comment">; }} 只对 IE8/9/10 有效</span>\n<span class="token variable">@media</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span>min<span class="token operator">-</span>width<span class="token punctuation">:</span><span class="token number">0</span>\<span class="token number">0</span><span class="token punctuation">)</span> {body { background<span class="token punctuation">:</span> gray<span class="token comment">; }} 只对 IE9/10 有效</span>\n<span class="token variable">@media</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token operator">-</span>ms<span class="token operator">-</span>high<span class="token operator">-</span>contrast<span class="token punctuation">:</span> active<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">-</span>ms<span class="token operator">-</span>high<span class="token operator">-</span>contrast<span class="token punctuation">:</span> none<span class="token punctuation">)</span> {body { background<span class="token punctuation">:</span> orange<span class="token comment">; }} 只对 IE10 有效</span>\n等等\n</code></pre>\n<ul>\n<li>IE 条件注释法(即 HTML 条件注释 Hack)：这种方式是 IE 浏览器专有的 Hack 方式，微软官方推荐使用的 Hack 方式。如下。</li>\n</ul>\n<pre class="language-autoit"><code class="language-autoit">只在 IE 下生效\n<span class="token operator">&lt;</span>!<span class="token operator">-</span><span class="token operator">-</span><span class="token punctuation">[</span><span class="token keyword">if</span> IE<span class="token punctuation">]</span><span class="token operator">></span>\n这段文字只在 IE 浏览器显示\n<span class="token operator">&lt;</span>!<span class="token punctuation">[</span><span class="token keyword">endif</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>\n\n只在 IE6 下生效\n<span class="token operator">&lt;</span>!<span class="token operator">-</span><span class="token operator">-</span><span class="token punctuation">[</span><span class="token keyword">if</span> IE <span class="token number">6</span><span class="token punctuation">]</span><span class="token operator">></span>\n这段文字只在 IE6 浏览器显示\n<span class="token operator">&lt;</span>!<span class="token punctuation">[</span><span class="token keyword">endif</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>\n\n只在 IE6 以上版本生效\n<span class="token operator">&lt;</span>!<span class="token operator">-</span><span class="token operator">-</span><span class="token punctuation">[</span><span class="token keyword">if</span> gte IE <span class="token number">6</span><span class="token punctuation">]</span><span class="token operator">></span>\n这段文字只在 IE6 以上<span class="token punctuation">(</span>包括<span class="token punctuation">)</span>版本 IE 浏览器显示\n<span class="token operator">&lt;</span>!<span class="token punctuation">[</span><span class="token keyword">endif</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>\n\n只在 IE8 上不生效\n<span class="token operator">&lt;</span>!<span class="token operator">-</span><span class="token operator">-</span><span class="token punctuation">[</span><span class="token keyword">if</span> ! IE <span class="token number">8</span><span class="token punctuation">]</span><span class="token operator">></span>\n这段文字在非 IE8 浏览器显示\n<span class="token operator">&lt;</span>!<span class="token punctuation">[</span><span class="token keyword">endif</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>\n\n非 IE 浏览器生效\n<span class="token operator">&lt;</span>!<span class="token operator">-</span><span class="token operator">-</span><span class="token punctuation">[</span><span class="token keyword">if</span> !IE<span class="token punctuation">]</span><span class="token operator">></span>\n这段文字只在非 IE 浏览器显示\n<span class="token operator">&lt;</span>!<span class="token punctuation">[</span><span class="token keyword">endif</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>\n</code></pre>\n<h3 id="css-hack-%E6%9C%89%E5%93%AA%E4%BA%9B%E6%8A%80%E5%B7%A7">CSS Hack 有哪些技巧？<a class="anchor" href="#css-hack-%E6%9C%89%E5%93%AA%E4%BA%9B%E6%8A%80%E5%B7%A7">§</a></h3>\n<p>我们把这个针对不同的浏览器或不同版本编写相应 CSS 的过程，叫做 CSS Hack。</p>\n<p>一般情况下，我们尽量避免使用 CSS Hack，但是有些情况为了顾及用户体验实现向下兼容，不得已才使用 Hack。使用 Hack 虽然对页面表现的一致性有好处，但过多的滥用会造成 HTML 文档混乱不堪，增加管理和维护的负担。</p>\n<p>常见的浏览器兼容问题机器 hack 技巧：</p>\n<ul>\n<li>PNG 24位的图片在 IE6 浏览器上出现背景，解决方案是做成 PNG8。</li>\n<li>浏览器默认的 margin 和 padding 不同。解决方案是加一个全局的 <code>*{ margin:0; padding:0;}</code>来统一。</li>\n<li>IE6双边距bug：块属性标签float后，又有横行的 margin 情况下，在 IE6 显示 margin 比设置的大。</li>\n</ul>\n<pre class="language-autoit"><code class="language-autoit"><span class="token punctuation">.</span>bb{\n    background<span class="token operator">-</span>color<span class="token punctuation">:</span> red<span class="token comment">;/* 所有识别 */</span>\n    background<span class="token operator">-</span>color<span class="token punctuation">:</span> #00deff\<span class="token number">9</span><span class="token comment">; /* IE6、7、8 识别*/</span>\n    <span class="token operator">+</span>background<span class="token operator">-</span>color<span class="token punctuation">:</span> #a200ff<span class="token comment">;/* IE6、7 识别*/</span>\n    _background<span class="token operator">-</span>color<span class="token punctuation">:</span> #1e0bd1<span class="token comment">;/* IE6 识别*/</span>\n}\n</code></pre>\n<ul>\n<li>IE 下,可以使用获取常规属性的方法来获取自定义属性，也可以使用 getAttribute() 获取自定义属性;Firefox 下,只能使用 getAttribute() 获取自定义属性。解决方法:统一通过 getAttribute() 获取自定义属性。</li>\n<li>IE下,event 对象有x, y 属性,但是没有pageX, pageY 属性;Firefox 下,event 对象有 pageX, pageY 属性,但是没有 x, y 属性。</li>\n<li>解决方法：(条件注释)缺点是在 IE 浏览器下可能会增加额外的 HTTP 请求数。</li>\n<li>Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示，可通过加入 CSS 属性 <code>-webkit-text-size-adjust: none;</code> 解决。</li>\n<li>超链接访问过后 hover 样式就不出现了 被点击访问过的超链接样式不在具有 hover 和 active 了解决方法是改变 CSS 属性的排列顺序：<code>L-V-H-A : a:link {} a:visited {} a:hover {} a:active {}</code></li>\n</ul>\n<h3 id="css-%E5%A6%82%E4%BD%95%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8">CSS 如何清除浮动？<a class="anchor" href="#css-%E5%A6%82%E4%BD%95%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8">§</a></h3>\n<ul>\n<li>空div方法: <code>&lt;div style=&quot;clear:both;&quot;&gt;&lt;/div&gt;</code></li>\n<li>Clearfix 方法:上文使用.clearfix类已经提到</li>\n<li>overflow: auto或overflow: hidden方法，使用BFC</li>\n</ul>\n<h3 id="css-%E9%9A%90%E8%97%8F%E5%86%85%E5%AE%B9%E7%9A%84%E6%8A%80%E5%B7%A7">CSS 隐藏内容的技巧？<a class="anchor" href="#css-%E9%9A%90%E8%97%8F%E5%86%85%E5%AE%B9%E7%9A%84%E6%8A%80%E5%B7%A7">§</a></h3>\n<p>这些与元素的可访问性有关。</p>\n<ul>\n<li><code>visibility: hidden</code>：元素仍然在页面流中，并占用空间，不可以交互。</li>\n<li><code>overflow: hidden</code>：这个只隐藏元素溢出的部分，但是占据空间且不可交互。</li>\n<li><code>display: none</code>：这个是彻底隐藏了元素，元素从文档流中消失，既不占据空间也不交互，也不影响布局。</li>\n<li><code>width: 0; height: 0</code>：使元素不占用屏幕上的任何空间，导致不显示它。</li>\n<li><code>position: absolute; left: -99999px</code>： 将它置于屏幕之外。</li>\n<li><code>text-indent: -9999px</code>：这只适用于 block 元素中的文本。</li>\n<li><code>opacity: 0</code>：本质上是将元素的透明度将为0，就看起来隐藏了，但是依然占据空间且可以交互。</li>\n<li><code>z-index: -9999</code>：原理是将层级放到底部，这样就被覆盖了，看起来隐藏了。</li>\n<li><code>transform: scale(0, 0)</code>：平面变换，将元素缩放为0，但是依然占据空间，但不可交互。</li>\n<li>更多的 Hack 技巧：还有一些靠绝对定位把元素移到可视区域外，或者用clip-path进行裁剪的操作。</li>\n</ul>\n<h3 id="%E4%BB%80%E4%B9%88%E6%98%AF-css-%E9%9B%AA%E7%A2%A7%E5%9B%BE">什么是 CSS 雪碧图？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-css-%E9%9B%AA%E7%A2%A7%E5%9B%BE">§</a></h3>\n<ul>\n<li>\n<p>雪碧图是把多张图片整合到一张上的图片。它被运用在众多使用了很多小图标的网站上。实现方法：</p>\n<ul>\n<li>使用生成器将多张图片打包成一张雪碧图，并为其生成合适的 CSS。</li>\n<li>每张图片都有相应的 CSS 类，该类定义了 <code>background-image</code>、<code>background-position</code> 和 <code>background-size</code> 属性。</li>\n<li>使用图片时，将相应的类添加到你的元素中。</li>\n</ul>\n</li>\n<li>\n<p>好处：</p>\n<ul>\n<li>减少加载多张图片的 HTTP 请求数。但是对于 HTTP2.0 而言，加载多张图片不再是问题。</li>\n<li>提前加载资源，防止在需要时才在开始下载引发的问题，比如只出现在 :hover 伪类中的图片，不会出现闪烁。</li>\n</ul>\n</li>\n<li>\n<p>缺点：</p>\n<ul>\n<li>CSS Sprite维护成本较高，如果⻚面背景有少许改动，一般就要改这张合并的图片</li>\n<li>加载速度优势在http2开启后荡然无存，HTTP2多路复用，多张图片也可以重复利用一个连接通道搞定</li>\n</ul>\n</li>\n</ul>\n<h3 id="css-%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8%E5%92%8C%E5%90%8E%E5%A4%84%E7%90%86%E5%99%A8">CSS 预处理器和后处理器？<a class="anchor" href="#css-%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8%E5%92%8C%E5%90%8E%E5%A4%84%E7%90%86%E5%99%A8">§</a></h3>\n<ul>\n<li>预处理器\n<ul>\n<li>\n<p>优点：</p>\n<ul>\n<li>提高 CSS 可维护性。</li>\n<li>易于编写嵌套选择器。</li>\n<li>引入变量，增添主题功能。可以在不同的项目中共享主题文件。</li>\n<li>通过混合(Mixins)生成重复的 CSS。</li>\n<li>将代码分割成多个文件。不进行预处理的 CSS，虽然也可以分割成多个文件，但需要建立多个 HTTP 请求加载这些文件。</li>\n</ul>\n</li>\n<li>\n<p>缺点：</p>\n<ul>\n<li>需要预处理工具。</li>\n<li>重新编译的时间可能会很慢。</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>less,sass,stylus 三者之间的不同点</li>\n</ul>'
        } }),
    'contentHasKatex': false,
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#css-%E5%93%8D%E5%BA%94%E5%BC%8F">CSS 响应式</a><ol><li><a href="#%E5%93%8D%E5%BA%94%E5%BC%8F%E8%AE%BE%E8%AE%A1%E4%B8%8E%E8%87%AA%E9%80%82%E5%BA%94%E8%AE%BE%E8%AE%A1">响应式设计与自适应设计？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2">如何理解媒体查询？</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E8%AE%BE%E5%A4%87%E7%8B%AC%E7%AB%8B%E5%83%8F%E7%B4%A0dip">什么是设备独立像素（DIP）？</a></li><li><a href="#empxrem-%E5%8C%BA%E5%88%AB">em\px\rem 区别?</a></li><li><a href="#canvassvgpngjpg-%E7%9A%84%E5%8C%BA%E5%88%AB">Canvas/SVG/PNG/JPG 的区别？</a></li></ol></li><li><a href="#css-%E5%8A%A8%E7%94%BB%E5%92%8C-3d">CSS 动画和 3D</a><ol><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-translate">如何理解 translate？</a></li></ol></li><li><a href="#css-%E5%B7%A5%E7%A8%8B%E5%AE%9E%E6%88%98">CSS 工程实战</a><ol><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E6%A0%85%E6%A0%BC%E7%B3%BB%E7%BB%9F">如何理解栅格系统？</a></li><li><a href="#css-%E6%80%8E%E4%B9%88%E5%BD%B1%E5%93%8D%E6%B5%8F%E8%A7%88%E5%99%A8-reflowrepaintcompositing">CSS 怎么影响浏览器 reflow/repaint/compositing</a></li><li><a href="#css-hack-%E7%9A%84%E5%88%86%E7%B1%BB">CSS Hack 的分类？</a></li><li><a href="#css-hack-%E6%9C%89%E5%93%AA%E4%BA%9B%E6%8A%80%E5%B7%A7">CSS Hack 有哪些技巧？</a></li><li><a href="#css-%E5%A6%82%E4%BD%95%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8">CSS 如何清除浮动？</a></li><li><a href="#css-%E9%9A%90%E8%97%8F%E5%86%85%E5%AE%B9%E7%9A%84%E6%8A%80%E5%B7%A7">CSS 隐藏内容的技巧？</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF-css-%E9%9B%AA%E7%A2%A7%E5%9B%BE">什么是 CSS 雪碧图？</a></li><li><a href="#css-%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8%E5%92%8C%E5%90%8E%E5%A4%84%E7%90%86%E5%99%A8">CSS 预处理器和后处理器？</a></li></ol></li></ol></nav>'
        } }),
    'date': "2020-10-27T07:34:52.000Z",
    'updated': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ]
};
