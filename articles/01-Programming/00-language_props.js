import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "link": "articles/01-Programming/index.html",
        "title": "编程基础"
    },
    'next': {
        "title": "操作系统",
        "link": "articles/01-Programming/01-operating-system.html"
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
    'pagePath': "articles/01-Programming/00-language.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/01-Programming/00-language.html",
    'title': "编程语言",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>编程语言</h1>\n<ul>\n<li>面向过程、面向对象（封装、多态、继承）、函数式</li>\n<li>堆、栈、队列</li>\n<li>纯函数、柯里化</li>\n<li>正则表达式</li>\n</ul>\n<h2 id="%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86-%E4%BB%80%E4%B9%88%E6%98%AF-ast">[编译原理] 什么是 AST？<a class="anchor" href="#%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86-%E4%BB%80%E4%B9%88%E6%98%AF-ast">§</a></h2>\n<blockquote>\n<ul>\n<li>AST Explorer：<a href="https://astexplorer.net/">https://astexplorer.net/</a></li>\n</ul>\n</blockquote>\n<ul>\n<li>AST 的过程中有两个关键步骤：\n<ul>\n<li>词法分析: 将代码(字符串)分割为 token 流,即语法单元成的数组</li>\n<li>语法分析: 分析 token 流(上面生成的数组)并生成 AST</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E5%85%83%E7%BC%96%E7%A8%8B">什么是元编程？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%85%83%E7%BC%96%E7%A8%8B">§</a></h2>\n<ul>\n<li>对编程语言进行编程，如 JavaScript 里的 Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改。</li>\n</ul>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B">什么是面向对象编程？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B">§</a></h2>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E5%87%BD%E6%95%B0%E5%BC%8F">什么是函数式？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%87%BD%E6%95%B0%E5%BC%8F">§</a></h2>\n<h3 id="%E4%BB%80%E4%B9%88%E6%98%AF%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0">什么是高阶函数？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0">§</a></h3>\n<p>高阶函数是将一个或多个函数作为参数的函数，它用于数据处理，也可能将函数作为返回结果。高阶函数是为了抽象一些重复执行的操作。如 map、forEach、filter、reduce 等。</p>\n<p><code>.apply()、.bind()、.call()</code></p>\n<p>.apply() 和 .call() 都用于调用函数，第一个参数将用作函数内 this 的值。然而 .call 接受逗号分隔的参数作为后面的参数，而 .apply 接受一个参数数组作为后面的参数。</p>\n<pre class="language-autoit"><code class="language-autoit">function add <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> {\n    return a <span class="token operator">+</span> b<span class="token comment">;</span>\n}\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>add<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token number">3</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>add<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token number">3</span>\n</code></pre>\n<p>.bind() 方法创建一个新的函数，当被调用时，将其 this 关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。这种将 this 的值绑定到想要传递给其他函数的类的方法中是非常有用的。</p>\n<h3 id="%E4%BB%80%E4%B9%88%E6%98%AF%E6%9F%AF%E9%87%8C%E5%8C%96">什么是柯里化？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9F%AF%E9%87%8C%E5%8C%96">§</a></h3>\n<ul>\n<li>\n<p>柯里化，currying，是一种模式，其中具有多个参数的函数被分解为多个函数，当被串联调用时，将一次一个地累积所有需要的参数。这种技术帮助编写函数式风格的代码，使代码更易读、紧凑。值得注意的是，对于需要被 curry 的函数，它需要从一个函数开始，然后分解成一系列函数，每个函数都需要一个参数。</p>\n</li>\n<li>\n<p>Currying 为实现多参函数提供了一个递归降解的实现思路——把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数，在某些编程语言中（如 Haskell），是通过 Currying 技术支持多参函数这一语言特性的。所以 <strong>Currying 原本是一门编译原理层面的技术，用途是实现多参函数。</strong></p>\n</li>\n<li>\n<p>Curry 的使用场景：</p>\n<ul>\n<li>参数复用</li>\n<li>延迟执行（bind 和箭头函数也能实现同样的功能）</li>\n</ul>\n</li>\n</ul>\n<h3 id="%E4%BB%80%E4%B9%88%E6%98%AF-aop-%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%BC%96%E7%A8%8B">什么是 AOP 面向切面编程？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-aop-%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%BC%96%E7%A8%8B">§</a></h3>\n<ul>\n<li>AOP 即面向切面编程，简单来说就是可以通过编译期或者运行时在不修改源代码的情况下给程序动态增加功能的一种技术。</li>\n<li>AOP 应用场景：日志记录、性能监控、埋点上报、异常处理等等。对于业务无关的附加功能，直接写到业务代码中也可以实现，但这显然不是一个有&quot;洁癖&quot;程序员的作风；而且这些功能往往需求多变，或者会污染业务代码的实现，掺杂在一起难以维护。无侵入的 AOP 才是&quot;附加功能&quot;的最佳选择。</li>\n</ul>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF-asciiunicodeutf8base64-%E7%AD%89%E7%BC%96%E7%A0%81%E6%A0%BC%E5%BC%8F">什么是 ASCII/UNICODE/UTF8/BASE64 等编码格式？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-asciiunicodeutf8base64-%E7%AD%89%E7%BC%96%E7%A0%81%E6%A0%BC%E5%BC%8F">§</a></h2>\n<ul>\n<li>\n<p>ASCII：</p>\n<ul>\n<li>ASCII（American Standard Code for Information Interchange，美国信息交换标准代码）是基于的一套电脑编码系统，主要用于显示现代<a href="https://baike.baidu.com/item/%E8%8B%B1%E8%AF%AD/109997">英语</a>和其他<a href="https://baike.baidu.com/item/%E8%A5%BF%E6%AC%A7">西欧</a>语言。它是现今最通用的单<a href="https://baike.baidu.com/item/%E5%AD%97%E8%8A%82">字节</a><a href="https://baike.baidu.com/item/%E7%BC%96%E7%A0%81">编码</a>系统，并等同于<a href="https://baike.baidu.com/item/%E5%9B%BD%E9%99%85">国际</a>标准ISO/IEC 646。—— <a href="https://baike.baidu.com/item/ASCII/309296">百度百科</a></li>\n<li>ASCII 码使用指定的 7 位或 8 位<a href="https://baike.baidu.com/item/%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%95%B0">二进制数</a>组合来表示 128 或 256 种可能的<a href="https://baike.baidu.com/item/%E5%AD%97%E7%AC%A6">字符</a>。标准 ASCII 码也叫基础ASCII 码，使用7 位<a href="https://baike.baidu.com/item/%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%95%B0">二进制数</a>（剩下的1位二进制为0）来表示所有的大写和小写字母，数字 0 到 9、标点符号， 以及在美式英语中使用的特殊<a href="https://baike.baidu.com/item/%E6%8E%A7%E5%88%B6%E5%AD%97%E7%AC%A6">控制字符</a>。</li>\n<li>**0～31及127(共33个)是控制字符或通信专用字符（其余为可显示字符），**如控制符：LF（换行）、CR（回车）、FF（换页）、DEL（删除）等。</li>\n<li>32～126 (共95个) 是字符 (32是空格），其中 48～57 为 0 到 9 十个阿拉伯数字。</li>\n<li>65～90 为 26 个大写英文字母，97～122 号为 26 个小写英文字母，其余为一些标点符号、运算符号等。</li>\n<li>后 128 个称为<a href="https://baike.baidu.com/item/%E6%89%A9%E5%B1%95ASCII">扩展ASCII</a>码。许多基于<a href="https://baike.baidu.com/item/x86">x86</a>的系统都支持使用扩展 ASCII。扩展 ASCII 码允许将每个字符的第 8 位用于确定附加的 128 个特殊符号字符、外来语字母和图形符号。</li>\n</ul>\n</li>\n<li>\n<p>unicode</p>\n<ul>\n<li>Unicode，Universal Multiple-Octet Coded Character Set（<a href="https://baike.baidu.com/item/%E7%BB%9F%E4%B8%80%E7%A0%81">统一码</a>、万国码、单一码）是计算机科学领域里的一项业界标准，包括字符集、编码方案等。Unicode 是为了解决传统的字符编码方案的局限而产生的，它为每种语言中的每个字符设定了统一并且唯一的<a href="https://baike.baidu.com/item/%E4%BA%8C%E8%BF%9B%E5%88%B6">二进制</a>编码，以满足跨语言、跨平台进行文本转换、处理的要求。—— <a href="https://baike.baidu.com/item/Unicode">百度百科</a></li>\n</ul>\n</li>\n<li>\n<p>UTF8</p>\n<ul>\n<li>UTF-8（8-bit Unicode Transformation Format）是一种针对 Unicode 的可变长度字符编码，又称万国码。由Ken Thompson于1992年创建。现在已经标准化为RFC 3629。</li>\n<li>UTF-8 就是以 8 位为单元对 UCS 进行编码，而 UTF-8 不使用大尾序和小尾序的形式，每个使用 UTF-8 存储的字符，除了第一个字节外，其余字节的头两个比特都是以 &quot;10&quot; 开始，使文字处理器能够较快地找出每个字符的开始位置。</li>\n<li>Unicode 和 UTF-8 之间有转换关系表。</li>\n</ul>\n</li>\n<li>\n<p>Base64 编码：</p>\n<ul>\n<li><strong>Base64</strong>是一种基于64个可打印字符来表示<a href="https://zh.wikipedia.org/wiki/%E4%BA%8C%E8%BF%9B%E5%88%B6">二进制数据</a>的表示方法。由于 2^6=64，所以每6个<a href="https://zh.wikipedia.org/wiki/%E4%BD%8D%E5%85%83">比特</a>为一个单元，对应某个可打印字符。3个<a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E8%8A%82">字节</a>有24个比特，对应于4个Base64单元，即3个字节可表示4个可打印字符。它可用来作为<a href="https://zh.wikipedia.org/wiki/%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6">电子邮件</a>的传输<a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E7%AC%A6%E7%BC%96%E7%A0%81">编码</a>。在Base64中的可打印字符包括<a href="https://zh.wikipedia.org/wiki/%E6%8B%89%E4%B8%81%E5%AD%97%E6%AF%8D">字母</a><code>A-Z</code>、<code>a-z</code>、<a href="https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%97">数字</a><code>0-9</code>，这样共有62个字符，此外两个可打印符号在不同的系统中而不同。Base64常用于在通常处理文本<a href="https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE">数据</a>的场合，表示、传输、存储一些二进制数据，包括<a href="https://zh.wikipedia.org/wiki/MIME">MIME</a>的<a href="https://zh.wikipedia.org/wiki/%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6">电子邮件</a>及<a href="https://zh.wikipedia.org/wiki/XML">XML</a>的一些复杂数据。 —— <a href="https://zh.wikipedia.org/wiki/Base64">维基百科</a></li>\n</ul>\n</li>\n</ul>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E5%AD%97%E8%8A%82%E5%AF%B9%E9%BD%90">什么是字节对齐？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%AD%97%E8%8A%82%E5%AF%B9%E9%BD%90">§</a></h2>\n<ul>\n<li>\n<p>各种类型的数据按照一定的规则在空间上排列（数据的存放起始地址 %N== 0）。</p>\n</li>\n<li>\n<p>各个硬件平台对存储空间的处理上有很大的不同。一些平台对某些特定类型的数据只能从某些特定地址开始存取。比如有些架构的 CPU，诸如 SPARC 在访问一个没有进行对齐的变量的时候会发生错误，那么在这种架构上必须编程必须保证字节对齐，<strong>而有些平台对于没有进行对齐的数据进行存取时会产生效率的下降</strong>。</p>\n</li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-169223577-1" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u7F16\u7A0B\u8BED\u8A00"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ul>\n<li>面向过程、面向对象（封装、多态、继承）、函数式</li>\n<li>堆、栈、队列</li>\n<li>纯函数、柯里化</li>\n<li>正则表达式</li>\n</ul>\n<h2 id="%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86-%E4%BB%80%E4%B9%88%E6%98%AF-ast">[编译原理] 什么是 AST？<a class="anchor" href="#%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86-%E4%BB%80%E4%B9%88%E6%98%AF-ast">§</a></h2>\n<blockquote>\n<ul>\n<li>AST Explorer：<a href="https://astexplorer.net/">https://astexplorer.net/</a></li>\n</ul>\n</blockquote>\n<ul>\n<li>AST 的过程中有两个关键步骤：\n<ul>\n<li>词法分析: 将代码(字符串)分割为 token 流,即语法单元成的数组</li>\n<li>语法分析: 分析 token 流(上面生成的数组)并生成 AST</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E5%85%83%E7%BC%96%E7%A8%8B">什么是元编程？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%85%83%E7%BC%96%E7%A8%8B">§</a></h2>\n<ul>\n<li>对编程语言进行编程，如 JavaScript 里的 Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改。</li>\n</ul>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B">什么是面向对象编程？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B">§</a></h2>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E5%87%BD%E6%95%B0%E5%BC%8F">什么是函数式？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%87%BD%E6%95%B0%E5%BC%8F">§</a></h2>\n<h3 id="%E4%BB%80%E4%B9%88%E6%98%AF%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0">什么是高阶函数？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0">§</a></h3>\n<p>高阶函数是将一个或多个函数作为参数的函数，它用于数据处理，也可能将函数作为返回结果。高阶函数是为了抽象一些重复执行的操作。如 map、forEach、filter、reduce 等。</p>\n<p><code>.apply()、.bind()、.call()</code></p>\n<p>.apply() 和 .call() 都用于调用函数，第一个参数将用作函数内 this 的值。然而 .call 接受逗号分隔的参数作为后面的参数，而 .apply 接受一个参数数组作为后面的参数。</p>\n<pre class="language-autoit"><code class="language-autoit">function add <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> {\n    return a <span class="token operator">+</span> b<span class="token comment">;</span>\n}\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>add<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token number">3</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>add<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token number">3</span>\n</code></pre>\n<p>.bind() 方法创建一个新的函数，当被调用时，将其 this 关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。这种将 this 的值绑定到想要传递给其他函数的类的方法中是非常有用的。</p>\n<h3 id="%E4%BB%80%E4%B9%88%E6%98%AF%E6%9F%AF%E9%87%8C%E5%8C%96">什么是柯里化？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9F%AF%E9%87%8C%E5%8C%96">§</a></h3>\n<ul>\n<li>\n<p>柯里化，currying，是一种模式，其中具有多个参数的函数被分解为多个函数，当被串联调用时，将一次一个地累积所有需要的参数。这种技术帮助编写函数式风格的代码，使代码更易读、紧凑。值得注意的是，对于需要被 curry 的函数，它需要从一个函数开始，然后分解成一系列函数，每个函数都需要一个参数。</p>\n</li>\n<li>\n<p>Currying 为实现多参函数提供了一个递归降解的实现思路——把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数，在某些编程语言中（如 Haskell），是通过 Currying 技术支持多参函数这一语言特性的。所以 <strong>Currying 原本是一门编译原理层面的技术，用途是实现多参函数。</strong></p>\n</li>\n<li>\n<p>Curry 的使用场景：</p>\n<ul>\n<li>参数复用</li>\n<li>延迟执行（bind 和箭头函数也能实现同样的功能）</li>\n</ul>\n</li>\n</ul>\n<h3 id="%E4%BB%80%E4%B9%88%E6%98%AF-aop-%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%BC%96%E7%A8%8B">什么是 AOP 面向切面编程？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-aop-%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%BC%96%E7%A8%8B">§</a></h3>\n<ul>\n<li>AOP 即面向切面编程，简单来说就是可以通过编译期或者运行时在不修改源代码的情况下给程序动态增加功能的一种技术。</li>\n<li>AOP 应用场景：日志记录、性能监控、埋点上报、异常处理等等。对于业务无关的附加功能，直接写到业务代码中也可以实现，但这显然不是一个有&quot;洁癖&quot;程序员的作风；而且这些功能往往需求多变，或者会污染业务代码的实现，掺杂在一起难以维护。无侵入的 AOP 才是&quot;附加功能&quot;的最佳选择。</li>\n</ul>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF-asciiunicodeutf8base64-%E7%AD%89%E7%BC%96%E7%A0%81%E6%A0%BC%E5%BC%8F">什么是 ASCII/UNICODE/UTF8/BASE64 等编码格式？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-asciiunicodeutf8base64-%E7%AD%89%E7%BC%96%E7%A0%81%E6%A0%BC%E5%BC%8F">§</a></h2>\n<ul>\n<li>\n<p>ASCII：</p>\n<ul>\n<li>ASCII（American Standard Code for Information Interchange，美国信息交换标准代码）是基于的一套电脑编码系统，主要用于显示现代<a href="https://baike.baidu.com/item/%E8%8B%B1%E8%AF%AD/109997">英语</a>和其他<a href="https://baike.baidu.com/item/%E8%A5%BF%E6%AC%A7">西欧</a>语言。它是现今最通用的单<a href="https://baike.baidu.com/item/%E5%AD%97%E8%8A%82">字节</a><a href="https://baike.baidu.com/item/%E7%BC%96%E7%A0%81">编码</a>系统，并等同于<a href="https://baike.baidu.com/item/%E5%9B%BD%E9%99%85">国际</a>标准ISO/IEC 646。—— <a href="https://baike.baidu.com/item/ASCII/309296">百度百科</a></li>\n<li>ASCII 码使用指定的 7 位或 8 位<a href="https://baike.baidu.com/item/%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%95%B0">二进制数</a>组合来表示 128 或 256 种可能的<a href="https://baike.baidu.com/item/%E5%AD%97%E7%AC%A6">字符</a>。标准 ASCII 码也叫基础ASCII 码，使用7 位<a href="https://baike.baidu.com/item/%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%95%B0">二进制数</a>（剩下的1位二进制为0）来表示所有的大写和小写字母，数字 0 到 9、标点符号， 以及在美式英语中使用的特殊<a href="https://baike.baidu.com/item/%E6%8E%A7%E5%88%B6%E5%AD%97%E7%AC%A6">控制字符</a>。</li>\n<li>**0～31及127(共33个)是控制字符或通信专用字符（其余为可显示字符），**如控制符：LF（换行）、CR（回车）、FF（换页）、DEL（删除）等。</li>\n<li>32～126 (共95个) 是字符 (32是空格），其中 48～57 为 0 到 9 十个阿拉伯数字。</li>\n<li>65～90 为 26 个大写英文字母，97～122 号为 26 个小写英文字母，其余为一些标点符号、运算符号等。</li>\n<li>后 128 个称为<a href="https://baike.baidu.com/item/%E6%89%A9%E5%B1%95ASCII">扩展ASCII</a>码。许多基于<a href="https://baike.baidu.com/item/x86">x86</a>的系统都支持使用扩展 ASCII。扩展 ASCII 码允许将每个字符的第 8 位用于确定附加的 128 个特殊符号字符、外来语字母和图形符号。</li>\n</ul>\n</li>\n<li>\n<p>unicode</p>\n<ul>\n<li>Unicode，Universal Multiple-Octet Coded Character Set（<a href="https://baike.baidu.com/item/%E7%BB%9F%E4%B8%80%E7%A0%81">统一码</a>、万国码、单一码）是计算机科学领域里的一项业界标准，包括字符集、编码方案等。Unicode 是为了解决传统的字符编码方案的局限而产生的，它为每种语言中的每个字符设定了统一并且唯一的<a href="https://baike.baidu.com/item/%E4%BA%8C%E8%BF%9B%E5%88%B6">二进制</a>编码，以满足跨语言、跨平台进行文本转换、处理的要求。—— <a href="https://baike.baidu.com/item/Unicode">百度百科</a></li>\n</ul>\n</li>\n<li>\n<p>UTF8</p>\n<ul>\n<li>UTF-8（8-bit Unicode Transformation Format）是一种针对 Unicode 的可变长度字符编码，又称万国码。由Ken Thompson于1992年创建。现在已经标准化为RFC 3629。</li>\n<li>UTF-8 就是以 8 位为单元对 UCS 进行编码，而 UTF-8 不使用大尾序和小尾序的形式，每个使用 UTF-8 存储的字符，除了第一个字节外，其余字节的头两个比特都是以 &quot;10&quot; 开始，使文字处理器能够较快地找出每个字符的开始位置。</li>\n<li>Unicode 和 UTF-8 之间有转换关系表。</li>\n</ul>\n</li>\n<li>\n<p>Base64 编码：</p>\n<ul>\n<li><strong>Base64</strong>是一种基于64个可打印字符来表示<a href="https://zh.wikipedia.org/wiki/%E4%BA%8C%E8%BF%9B%E5%88%B6">二进制数据</a>的表示方法。由于 2^6=64，所以每6个<a href="https://zh.wikipedia.org/wiki/%E4%BD%8D%E5%85%83">比特</a>为一个单元，对应某个可打印字符。3个<a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E8%8A%82">字节</a>有24个比特，对应于4个Base64单元，即3个字节可表示4个可打印字符。它可用来作为<a href="https://zh.wikipedia.org/wiki/%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6">电子邮件</a>的传输<a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E7%AC%A6%E7%BC%96%E7%A0%81">编码</a>。在Base64中的可打印字符包括<a href="https://zh.wikipedia.org/wiki/%E6%8B%89%E4%B8%81%E5%AD%97%E6%AF%8D">字母</a><code>A-Z</code>、<code>a-z</code>、<a href="https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%97">数字</a><code>0-9</code>，这样共有62个字符，此外两个可打印符号在不同的系统中而不同。Base64常用于在通常处理文本<a href="https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE">数据</a>的场合，表示、传输、存储一些二进制数据，包括<a href="https://zh.wikipedia.org/wiki/MIME">MIME</a>的<a href="https://zh.wikipedia.org/wiki/%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6">电子邮件</a>及<a href="https://zh.wikipedia.org/wiki/XML">XML</a>的一些复杂数据。 —— <a href="https://zh.wikipedia.org/wiki/Base64">维基百科</a></li>\n</ul>\n</li>\n</ul>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E5%AD%97%E8%8A%82%E5%AF%B9%E9%BD%90">什么是字节对齐？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%AD%97%E8%8A%82%E5%AF%B9%E9%BD%90">§</a></h2>\n<ul>\n<li>\n<p>各种类型的数据按照一定的规则在空间上排列（数据的存放起始地址 %N== 0）。</p>\n</li>\n<li>\n<p>各个硬件平台对存储空间的处理上有很大的不同。一些平台对某些特定类型的数据只能从某些特定地址开始存取。比如有些架构的 CPU，诸如 SPARC 在访问一个没有进行对齐的变量的时候会发生错误，那么在这种架构上必须编程必须保证字节对齐，<strong>而有些平台对于没有进行对齐的数据进行存取时会产生效率的下降</strong>。</p>\n</li>\n</ul>'
        } }),
    'contentHasKatex': false,
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86-%E4%BB%80%E4%B9%88%E6%98%AF-ast">[编译原理] 什么是 AST？</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%85%83%E7%BC%96%E7%A8%8B">什么是元编程？</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B">什么是面向对象编程？</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%87%BD%E6%95%B0%E5%BC%8F">什么是函数式？</a><ol><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0">什么是高阶函数？</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9F%AF%E9%87%8C%E5%8C%96">什么是柯里化？</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF-aop-%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%BC%96%E7%A8%8B">什么是 AOP 面向切面编程？</a></li></ol></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF-asciiunicodeutf8base64-%E7%AD%89%E7%BC%96%E7%A0%81%E6%A0%BC%E5%BC%8F">什么是 ASCII/UNICODE/UTF8/BASE64 等编码格式？</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%AD%97%E8%8A%82%E5%AF%B9%E9%BD%90">什么是字节对齐？</a></li></ol></nav>'
        } }),
    'date': "2020-10-25T07:04:16.000Z",
    'updated': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ]
};
