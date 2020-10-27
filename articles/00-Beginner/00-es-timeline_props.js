import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "link": "articles/00-Beginner/index.html",
        "title": "一切的起源"
    },
    'next': {
        "title": "ES 方向 & 谁在招人？",
        "link": "articles/00-Beginner/01-es-direction.html"
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
    'pagePath': "articles/00-Beginner/00-es-timeline.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/00-Beginner/00-es-timeline.html",
    'title': "前端大事记",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>前端大事记</h1>\n<blockquote>\n<p>不保证完全正确，欢迎共建。</p>\n</blockquote>\n<h2 id="2016">2016<a class="anchor" href="#2016">§</a></h2>\n<ul>\n<li>2016年6月，《ECMAScript 2016 标准》发布。与前一年发布的版本相比，它只增加了两个较小的特性。</li>\n</ul>\n<h2 id="2015">2015<a class="anchor" href="#2015">§</a></h2>\n<ul>\n<li>2015年3月，Facebook公司发布了React Native项目，将React框架移植到了手机端，可以用来开发手机App。它会将JavaScript代码转为iOS平台的Objective-C代码，或者Android平台的Java代码，从而为JavaScript语言开发高性能的原生App打开了一条道路。</li>\n<li>2015年4月，Angular框架宣布，2.0版将基于微软公司的TypeScript语言开发，这等于为JavaScript语言引入了强类型。</li>\n<li>2015年5月，Node模块管理器npm超越CPAN，标志着JavaScript成为世界上软件模块最多的语言。</li>\n<li>2015年5月，Google公司的Polymer框架发布1.0版。该项目的目标是生产环境可以使用WebComponent组件，如果能够达到目标，Web开发将进入一个全新的以组件为开发基础的阶段。</li>\n<li>2015年6月，ECMA标准化组织正式批准了ECMAScript 6语言标准，定名为《ECMAScript 2015 标准》。JavaScript语言正式进入了下一个阶段，成为一种企业级的、开发大规模应用的语言。这个标准从提出到批准，历时10年，而JavaScript语言从诞生至今也已经20年了。</li>\n<li>2015年6月，Mozilla在asm.js的基础上发布WebAssembly项目。这是一种JavaScript语言编译后的二进制格式，类似于Java的字节码，有利于移动设备加载JavaScript脚本，解析速度提高了20+倍。这意味着将来的软件，会发布JavaScript二进制包。</li>\n</ul>\n<h2 id="2014">2014<a class="anchor" href="#2014">§</a></h2>\n<ul>\n<li>2014年，微软推出JavaScript的Windows库WinJS，标志微软公司全面支持JavaScript与Windows操作系统的融合。</li>\n<li>2014年11月，由于对Joyent公司垄断Node项目、以及该项目进展缓慢的不满，一部分核心开发者离开了Node.js，创造了io.js项目，这是一个更开放、更新更频繁的Node.js版本，很短时间内就发布到了2.0版。三个月后，Joyent公司宣布放弃对Node项目的控制，将其转交给新成立的开放性质的Node基金会。随后，io.js项目宣布回归Node，两个版本将合并。</li>\n</ul>\n<h2 id="2013">2013<a class="anchor" href="#2013">§</a></h2>\n<ul>\n<li>2013年，Mozilla基金会发布手机操作系统Firefox OS，该操作系统的整个用户界面都使用JavaScript。</li>\n<li>2013年，ECMA正式推出JSON的<a href="http://www.ecma-international.org/publications/standards/Ecma-404.htm">国际标准</a>，这意味着JSON格式已经变得与XML格式一样重要和正式了。</li>\n<li>2013年5月，Facebook发布UI框架库React，引入了新的JSX语法，使得UI层可以用组件开发。</li>\n</ul>\n<h2 id="2012">2012<a class="anchor" href="#2012">§</a></h2>\n<ul>\n<li>2012年，单页面应用程序框架（single-page app framework）开始崛起，AngularJS项目和Ember项目都发布了1.0版本。</li>\n<li>2012年，微软发布TypeScript语言。该语言被设计成JavaScript的超集，这意味着所有JavaScipt程序，都可以不经修改地在TypeScript中运行。同时，TypeScript添加了很多新的语法特性，主要目的是为了开发大型程序，然后还可以被编译成JavaScript运行。</li>\n<li>2012年，Mozilla基金会提出<a href="http://asmjs.org/">asm.js</a>规格。asm.js是JavaScript的一个子集，所有符合asm.js的程序都可以在浏览器中运行，它的特殊之处在于语法有严格限定，可以被快速编译成性能良好的机器码。这样做的目的，是为了给其他语言提供一个编译规范，使其可以被编译成高效的JavaScript代码。同时，Mozilla基金会还发起了<a href="https://github.com/kripken/emscripten/wiki">Emscripten</a>项目，目标就是提供一个跨语言的编译器，能够将LLVM的位代码（bitcode）转为JavaScript代码，在浏览器中运行。因为大部分LLVM位代码都是从C / C语言生成的，这意味着C / C将可以在浏览器中运行。此外，Mozilla旗下还有<a href="http://mbebenita.github.io/LLJS/">LLJS</a>（将JavaScript转为C代码）项目和<a href="https://github.com/RiverTrail/RiverTrail/wiki">River Trail</a>（一个用于多核心处理器的ECMAScript扩展）项目。目前，在可以被编译成JavaScript的<a href="https://github.com/jashkenas/coffee-script/wiki/List-of-languages-that-compile-to-JS">语言列表</a>上，共有将近40种语言。</li>\n</ul>\n<h2 id="2011">2011<a class="anchor" href="#2011">§</a></h2>\n<ul>\n<li>2011年，微软公司发布Windows 8操作系统，将JavaScript作为应用程序的开发语言之一，直接提供系统支持。</li>\n<li>2011年，Google发布了Dart语言，目的是为了结束JavaScript语言在浏览器中的垄断，提供更合理、更强大的语法和功能。Chromium浏览器有内置的Dart虚拟机，可以运行Dart程序，但Dart程序也可以被编译成JavaScript程序运行。</li>\n<li>2011年，微软工程师<a href="http://www.hanselman.com/blog/JavaScriptIsAssemblyLanguageForTheWebSematicMarkupIsDeadCleanVsMachinecodedHTML.aspx">Scott Hanselman</a>提出，JavaScript将是互联网的汇编语言。因为它无所不在，而且正在变得越来越快。其他语言的程序可以被转成JavaScript语言，然后在浏览器中运行。</li>\n</ul>\n<h2 id="2010">2010<a class="anchor" href="#2010">§</a></h2>\n<ul>\n<li>2010年，三个重要的项目诞生，分别是NPM、BackboneJS和RequireJS，标志着JavaScript进入模块化开发的时代。</li>\n</ul>\n<h2 id="2009">2009<a class="anchor" href="#2009">§</a></h2>\n<ul>\n<li>2009年，Node.js项目诞生，创始人为Ryan Dahl，它标志着JavaScript可以用于服务器端编程，从此网站的前端和后端可以使用同一种语言开发。并且，Node.js可以承受很大的并发流量，使得开发某些互联网大规模的实时应用变得容易。</li>\n<li>2009年，Jeremy Ashkenas发布了CoffeeScript的最初版本。CoffeeScript可以被转化为JavaScript运行，但是语法要比JavaScript简洁。这开启了其他语言转为JavaScript的风潮。</li>\n<li>2009年，PhoneGap项目诞生，它将HTML5和JavaScript引入移动设备的应用程序开发，主要针对iOS和Android平台，使得JavaScript可以用于跨平台的应用程序开发。</li>\n<li>2009，Google发布Chrome OS，号称是以浏览器为基础发展成的操作系统，允许直接使用JavaScript编写应用程序。类似的项目还有Mozilla的Firefox OS。</li>\n</ul>\n<h2 id="2008">2008<a class="anchor" href="#2008">§</a></h2>\n<ul>\n<li>2008年，V8编译器诞生。这是Google公司为Chrome浏览器而开发的，它的特点是让JavaScript的运行变得非常快。它提高了JavaScript的性能，推动了语法的改进和标准化，改变外界对JavaScript的不佳印象。同时，V8是开源的，任何人想要一种快速的嵌入式脚本语言，都可以采用V8，这拓展了JavaScript的应用领域。</li>\n</ul>\n<h2 id="2007">2007<a class="anchor" href="#2007">§</a></h2>\n<ul>\n<li>2007年，Webkit引擎在iPhone手机中得到部署。它最初基于KDE项目，2003年苹果公司首先采用，2005年开源。这标志着JavaScript语言开始能在手机中使用了，意味着有可能写出在桌面电脑和手机中都能使用的程序。</li>\n<li>2007年，Douglas Crockford发表了名为《JavaScript: The good parts》的演讲，次年由O’Reilly出版社出版。这标志着软件行业开始严肃对待JavaScript语言，对它的语法开始重新认识。</li>\n</ul>\n<h2 id="2006">2006<a class="anchor" href="#2006">§</a></h2>\n<ul>\n<li>2006年，jQuery函数库诞生，作者为John Resig。jQuery为操作网页DOM结构提供了非常强大易用的接口，成为了使用最广泛的函数库，并且让JavaScript语言的应用难度大大降低，推动了这种语言的流行。</li>\n<li>2006年，微软公司发布IE 7，标志重新开始启动浏览器的开发。</li>\n<li>2006年，Google推出 Google Web Toolkit 项目（缩写为GWT），提供Java编译成JavaScript的功能，开创了将其他语言转为JavaScript的先河。</li>\n</ul>\n<h2 id="2005">2005<a class="anchor" href="#2005">§</a></h2>\n<ul>\n<li>2005年，苹果公司在KHTML引擎基础上，建立了WebKit引擎。</li>\n<li>2005年，Ajax方法（Asynchronous JavaScript and XML）正式诞生，Jesse James Garrett发明了这个词汇。它开始流行的标志是，2月份发布的Google Maps项目大量采用该方法。它几乎成了新一代网站的标准做法，促成了Web 2.0时代的来临。</li>\n<li>2005年，Apache基金会发布了CouchDB数据库。这是一个基于JSON格式的数据库，可以用JavaScript函数定义视图和索引。它在本质上有别于传统的关系型数据库，标识着NoSQL类型的数据库诞生。</li>\n</ul>\n<h2 id="2004">2004<a class="anchor" href="#2004">§</a></h2>\n<ul>\n<li><code>2004</code>。Google公司发布了Gmail，促成了互联网应用程序（Web Application）这个概念的诞生。由于Gmail是在4月1日发布的，很多人起初以为这只是一个玩笑。</li>\n<li><code>2004</code>。Dojo框架诞生，为不同浏览器提供了同一接口，并为主要功能提供了便利的调用方法。这标志着JavaScript编程框架的时代开始来临。</li>\n<li><code>2004</code>。WHATWG组织成立，致力于加速HTML语言的标准化进程。</li>\n<li><code>2004</code>。IE vs Mozilla Firefox vs Chrome...</li>\n</ul>\n<h2 id="2003">2003<a class="anchor" href="#2003">§</a></h2>\n<ul>\n<li>2003年，苹果公司发布了Safari浏览器的第一版。</li>\n</ul>\n<h2 id="2002">2002<a class="anchor" href="#2002">§</a></h2>\n<ul>\n<li>2002 年，Mozilla项目发布了它的浏览器的第一版，后来起名为 Firefox。</li>\n</ul>\n<h2 id="2001">2001<a class="anchor" href="#2001">§</a></h2>\n<ul>\n<li>2001 年，微软公司时隔5年之后，发布了IE浏览器的下一个版本Internet Explorer 6。这是当时最先进的浏览器，它后来统治了浏览器市场多年。</li>\n<li>2001 年，Douglas Crockford提出了JSON格式，用于取代XML格式，进行服务器和网页之间的数据交换。JavaScript可以原生支持这种格式，不需要额外部署代码。</li>\n</ul>\n<h2 id="2000">2000<a class="anchor" href="#2000">§</a></h2>\n<ul>\n<li>2000 年，KDE项目重写了浏览器引擎KHTML，为后来的WebKit和Blink引擎打下基础。这一年的10月23日，KDE 2.0发布，第一次将KHTML浏览器包括其中。</li>\n</ul>\n<h2 id="1999">1999<a class="anchor" href="#1999">§</a></h2>\n<ul>\n<li>1999年，IE 5部署了XMLHttpRequest接口，允许JavaScript发出HTTP请求，为后来大行其道的Ajax应用创造了条件。</li>\n</ul>\n<h2 id="1998">1998<a class="anchor" href="#1998">§</a></h2>\n<ul>\n<li>1998年，Netscape公司开源了浏览器套件，这导致了Mozilla项目的诞生。几个月后，美国在线（AOL）宣布并购Netscape。</li>\n</ul>\n<h2 id="1997">1997<a class="anchor" href="#1997">§</a></h2>\n<ul>\n<li>1997年，DHTML（Dynamic HTML，动态HTML）发布，允许动态改变网页内容。这标志着DOM模式（Document Object Model，文档对象模型）正式应用。</li>\n<li><code>1997.1</code>。HTTP/1.1，成为主流</li>\n</ul>\n<h2 id="1996">1996<a class="anchor" href="#1996">§</a></h2>\n<ul>\n<li>1996年，样式表标准 CSS 第一版发布。</li>\n<li><code>1996.5</code>。HTTTP/1.0</li>\n</ul>\n<h2 id="1995">1995<a class="anchor" href="#1995">§</a></h2>\n<ul>\n<li><code>1995</code>。微软 IE 1.0/2.0，微软 vs 网景（2020 年左右，微软大体胜利）</li>\n<li><code>1995</code>。Apache 0.2</li>\n<li><code>1995</code>。HTML 2.0</li>\n</ul>\n<h2 id="1994">1994<a class="anchor" href="#1994">§</a></h2>\n<ul>\n<li><code>1994.12</code>。网景 Netscape Navigator 1.0。</li>\n</ul>\n<h2 id="1993">1993<a class="anchor" href="#1993">§</a></h2>\n<ul>\n<li><code>1993.1</code>。NCSA（美国国家超级计算机中心） 研发出第一个浏览器 Mosaic</li>\n<li><code>1993</code>。Mosaic for windows &amp; macintosh</li>\n<li><code>1993</code>。NCSA httpd 1.0</li>\n</ul>\n<h2 id="1990">1990<a class="anchor" href="#1990">§</a></h2>\n<ul>\n<li><code>1990.11</code>。CERN（Tim Berners-Lee）研发出第一台 Web Client、Web Server。</li>\n<li><code>1990</code>。HTTP/0.9</li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-169223577-1" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u524D\u7AEF\u5927\u4E8B\u8BB0"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<blockquote>\n<p>不保证完全正确，欢迎共建。</p>\n</blockquote>\n<h2 id="2016">2016<a class="anchor" href="#2016">§</a></h2>\n<ul>\n<li>2016年6月，《ECMAScript 2016 标准》发布。与前一年发布的版本相比，它只增加了两个较小的特性。</li>\n</ul>\n<h2 id="2015">2015<a class="anchor" href="#2015">§</a></h2>\n<ul>\n<li>2015年3月，Facebook公司发布了React Native项目，将React框架移植到了手机端，可以用来开发手机App。它会将JavaScript代码转为iOS平台的Objective-C代码，或者Android平台的Java代码，从而为JavaScript语言开发高性能的原生App打开了一条道路。</li>\n<li>2015年4月，Angular框架宣布，2.0版将基于微软公司的TypeScript语言开发，这等于为JavaScript语言引入了强类型。</li>\n<li>2015年5月，Node模块管理器npm超越CPAN，标志着JavaScript成为世界上软件模块最多的语言。</li>\n<li>2015年5月，Google公司的Polymer框架发布1.0版。该项目的目标是生产环境可以使用WebComponent组件，如果能够达到目标，Web开发将进入一个全新的以组件为开发基础的阶段。</li>\n<li>2015年6月，ECMA标准化组织正式批准了ECMAScript 6语言标准，定名为《ECMAScript 2015 标准》。JavaScript语言正式进入了下一个阶段，成为一种企业级的、开发大规模应用的语言。这个标准从提出到批准，历时10年，而JavaScript语言从诞生至今也已经20年了。</li>\n<li>2015年6月，Mozilla在asm.js的基础上发布WebAssembly项目。这是一种JavaScript语言编译后的二进制格式，类似于Java的字节码，有利于移动设备加载JavaScript脚本，解析速度提高了20+倍。这意味着将来的软件，会发布JavaScript二进制包。</li>\n</ul>\n<h2 id="2014">2014<a class="anchor" href="#2014">§</a></h2>\n<ul>\n<li>2014年，微软推出JavaScript的Windows库WinJS，标志微软公司全面支持JavaScript与Windows操作系统的融合。</li>\n<li>2014年11月，由于对Joyent公司垄断Node项目、以及该项目进展缓慢的不满，一部分核心开发者离开了Node.js，创造了io.js项目，这是一个更开放、更新更频繁的Node.js版本，很短时间内就发布到了2.0版。三个月后，Joyent公司宣布放弃对Node项目的控制，将其转交给新成立的开放性质的Node基金会。随后，io.js项目宣布回归Node，两个版本将合并。</li>\n</ul>\n<h2 id="2013">2013<a class="anchor" href="#2013">§</a></h2>\n<ul>\n<li>2013年，Mozilla基金会发布手机操作系统Firefox OS，该操作系统的整个用户界面都使用JavaScript。</li>\n<li>2013年，ECMA正式推出JSON的<a href="http://www.ecma-international.org/publications/standards/Ecma-404.htm">国际标准</a>，这意味着JSON格式已经变得与XML格式一样重要和正式了。</li>\n<li>2013年5月，Facebook发布UI框架库React，引入了新的JSX语法，使得UI层可以用组件开发。</li>\n</ul>\n<h2 id="2012">2012<a class="anchor" href="#2012">§</a></h2>\n<ul>\n<li>2012年，单页面应用程序框架（single-page app framework）开始崛起，AngularJS项目和Ember项目都发布了1.0版本。</li>\n<li>2012年，微软发布TypeScript语言。该语言被设计成JavaScript的超集，这意味着所有JavaScipt程序，都可以不经修改地在TypeScript中运行。同时，TypeScript添加了很多新的语法特性，主要目的是为了开发大型程序，然后还可以被编译成JavaScript运行。</li>\n<li>2012年，Mozilla基金会提出<a href="http://asmjs.org/">asm.js</a>规格。asm.js是JavaScript的一个子集，所有符合asm.js的程序都可以在浏览器中运行，它的特殊之处在于语法有严格限定，可以被快速编译成性能良好的机器码。这样做的目的，是为了给其他语言提供一个编译规范，使其可以被编译成高效的JavaScript代码。同时，Mozilla基金会还发起了<a href="https://github.com/kripken/emscripten/wiki">Emscripten</a>项目，目标就是提供一个跨语言的编译器，能够将LLVM的位代码（bitcode）转为JavaScript代码，在浏览器中运行。因为大部分LLVM位代码都是从C / C语言生成的，这意味着C / C将可以在浏览器中运行。此外，Mozilla旗下还有<a href="http://mbebenita.github.io/LLJS/">LLJS</a>（将JavaScript转为C代码）项目和<a href="https://github.com/RiverTrail/RiverTrail/wiki">River Trail</a>（一个用于多核心处理器的ECMAScript扩展）项目。目前，在可以被编译成JavaScript的<a href="https://github.com/jashkenas/coffee-script/wiki/List-of-languages-that-compile-to-JS">语言列表</a>上，共有将近40种语言。</li>\n</ul>\n<h2 id="2011">2011<a class="anchor" href="#2011">§</a></h2>\n<ul>\n<li>2011年，微软公司发布Windows 8操作系统，将JavaScript作为应用程序的开发语言之一，直接提供系统支持。</li>\n<li>2011年，Google发布了Dart语言，目的是为了结束JavaScript语言在浏览器中的垄断，提供更合理、更强大的语法和功能。Chromium浏览器有内置的Dart虚拟机，可以运行Dart程序，但Dart程序也可以被编译成JavaScript程序运行。</li>\n<li>2011年，微软工程师<a href="http://www.hanselman.com/blog/JavaScriptIsAssemblyLanguageForTheWebSematicMarkupIsDeadCleanVsMachinecodedHTML.aspx">Scott Hanselman</a>提出，JavaScript将是互联网的汇编语言。因为它无所不在，而且正在变得越来越快。其他语言的程序可以被转成JavaScript语言，然后在浏览器中运行。</li>\n</ul>\n<h2 id="2010">2010<a class="anchor" href="#2010">§</a></h2>\n<ul>\n<li>2010年，三个重要的项目诞生，分别是NPM、BackboneJS和RequireJS，标志着JavaScript进入模块化开发的时代。</li>\n</ul>\n<h2 id="2009">2009<a class="anchor" href="#2009">§</a></h2>\n<ul>\n<li>2009年，Node.js项目诞生，创始人为Ryan Dahl，它标志着JavaScript可以用于服务器端编程，从此网站的前端和后端可以使用同一种语言开发。并且，Node.js可以承受很大的并发流量，使得开发某些互联网大规模的实时应用变得容易。</li>\n<li>2009年，Jeremy Ashkenas发布了CoffeeScript的最初版本。CoffeeScript可以被转化为JavaScript运行，但是语法要比JavaScript简洁。这开启了其他语言转为JavaScript的风潮。</li>\n<li>2009年，PhoneGap项目诞生，它将HTML5和JavaScript引入移动设备的应用程序开发，主要针对iOS和Android平台，使得JavaScript可以用于跨平台的应用程序开发。</li>\n<li>2009，Google发布Chrome OS，号称是以浏览器为基础发展成的操作系统，允许直接使用JavaScript编写应用程序。类似的项目还有Mozilla的Firefox OS。</li>\n</ul>\n<h2 id="2008">2008<a class="anchor" href="#2008">§</a></h2>\n<ul>\n<li>2008年，V8编译器诞生。这是Google公司为Chrome浏览器而开发的，它的特点是让JavaScript的运行变得非常快。它提高了JavaScript的性能，推动了语法的改进和标准化，改变外界对JavaScript的不佳印象。同时，V8是开源的，任何人想要一种快速的嵌入式脚本语言，都可以采用V8，这拓展了JavaScript的应用领域。</li>\n</ul>\n<h2 id="2007">2007<a class="anchor" href="#2007">§</a></h2>\n<ul>\n<li>2007年，Webkit引擎在iPhone手机中得到部署。它最初基于KDE项目，2003年苹果公司首先采用，2005年开源。这标志着JavaScript语言开始能在手机中使用了，意味着有可能写出在桌面电脑和手机中都能使用的程序。</li>\n<li>2007年，Douglas Crockford发表了名为《JavaScript: The good parts》的演讲，次年由O’Reilly出版社出版。这标志着软件行业开始严肃对待JavaScript语言，对它的语法开始重新认识。</li>\n</ul>\n<h2 id="2006">2006<a class="anchor" href="#2006">§</a></h2>\n<ul>\n<li>2006年，jQuery函数库诞生，作者为John Resig。jQuery为操作网页DOM结构提供了非常强大易用的接口，成为了使用最广泛的函数库，并且让JavaScript语言的应用难度大大降低，推动了这种语言的流行。</li>\n<li>2006年，微软公司发布IE 7，标志重新开始启动浏览器的开发。</li>\n<li>2006年，Google推出 Google Web Toolkit 项目（缩写为GWT），提供Java编译成JavaScript的功能，开创了将其他语言转为JavaScript的先河。</li>\n</ul>\n<h2 id="2005">2005<a class="anchor" href="#2005">§</a></h2>\n<ul>\n<li>2005年，苹果公司在KHTML引擎基础上，建立了WebKit引擎。</li>\n<li>2005年，Ajax方法（Asynchronous JavaScript and XML）正式诞生，Jesse James Garrett发明了这个词汇。它开始流行的标志是，2月份发布的Google Maps项目大量采用该方法。它几乎成了新一代网站的标准做法，促成了Web 2.0时代的来临。</li>\n<li>2005年，Apache基金会发布了CouchDB数据库。这是一个基于JSON格式的数据库，可以用JavaScript函数定义视图和索引。它在本质上有别于传统的关系型数据库，标识着NoSQL类型的数据库诞生。</li>\n</ul>\n<h2 id="2004">2004<a class="anchor" href="#2004">§</a></h2>\n<ul>\n<li><code>2004</code>。Google公司发布了Gmail，促成了互联网应用程序（Web Application）这个概念的诞生。由于Gmail是在4月1日发布的，很多人起初以为这只是一个玩笑。</li>\n<li><code>2004</code>。Dojo框架诞生，为不同浏览器提供了同一接口，并为主要功能提供了便利的调用方法。这标志着JavaScript编程框架的时代开始来临。</li>\n<li><code>2004</code>。WHATWG组织成立，致力于加速HTML语言的标准化进程。</li>\n<li><code>2004</code>。IE vs Mozilla Firefox vs Chrome...</li>\n</ul>\n<h2 id="2003">2003<a class="anchor" href="#2003">§</a></h2>\n<ul>\n<li>2003年，苹果公司发布了Safari浏览器的第一版。</li>\n</ul>\n<h2 id="2002">2002<a class="anchor" href="#2002">§</a></h2>\n<ul>\n<li>2002 年，Mozilla项目发布了它的浏览器的第一版，后来起名为 Firefox。</li>\n</ul>\n<h2 id="2001">2001<a class="anchor" href="#2001">§</a></h2>\n<ul>\n<li>2001 年，微软公司时隔5年之后，发布了IE浏览器的下一个版本Internet Explorer 6。这是当时最先进的浏览器，它后来统治了浏览器市场多年。</li>\n<li>2001 年，Douglas Crockford提出了JSON格式，用于取代XML格式，进行服务器和网页之间的数据交换。JavaScript可以原生支持这种格式，不需要额外部署代码。</li>\n</ul>\n<h2 id="2000">2000<a class="anchor" href="#2000">§</a></h2>\n<ul>\n<li>2000 年，KDE项目重写了浏览器引擎KHTML，为后来的WebKit和Blink引擎打下基础。这一年的10月23日，KDE 2.0发布，第一次将KHTML浏览器包括其中。</li>\n</ul>\n<h2 id="1999">1999<a class="anchor" href="#1999">§</a></h2>\n<ul>\n<li>1999年，IE 5部署了XMLHttpRequest接口，允许JavaScript发出HTTP请求，为后来大行其道的Ajax应用创造了条件。</li>\n</ul>\n<h2 id="1998">1998<a class="anchor" href="#1998">§</a></h2>\n<ul>\n<li>1998年，Netscape公司开源了浏览器套件，这导致了Mozilla项目的诞生。几个月后，美国在线（AOL）宣布并购Netscape。</li>\n</ul>\n<h2 id="1997">1997<a class="anchor" href="#1997">§</a></h2>\n<ul>\n<li>1997年，DHTML（Dynamic HTML，动态HTML）发布，允许动态改变网页内容。这标志着DOM模式（Document Object Model，文档对象模型）正式应用。</li>\n<li><code>1997.1</code>。HTTP/1.1，成为主流</li>\n</ul>\n<h2 id="1996">1996<a class="anchor" href="#1996">§</a></h2>\n<ul>\n<li>1996年，样式表标准 CSS 第一版发布。</li>\n<li><code>1996.5</code>。HTTTP/1.0</li>\n</ul>\n<h2 id="1995">1995<a class="anchor" href="#1995">§</a></h2>\n<ul>\n<li><code>1995</code>。微软 IE 1.0/2.0，微软 vs 网景（2020 年左右，微软大体胜利）</li>\n<li><code>1995</code>。Apache 0.2</li>\n<li><code>1995</code>。HTML 2.0</li>\n</ul>\n<h2 id="1994">1994<a class="anchor" href="#1994">§</a></h2>\n<ul>\n<li><code>1994.12</code>。网景 Netscape Navigator 1.0。</li>\n</ul>\n<h2 id="1993">1993<a class="anchor" href="#1993">§</a></h2>\n<ul>\n<li><code>1993.1</code>。NCSA（美国国家超级计算机中心） 研发出第一个浏览器 Mosaic</li>\n<li><code>1993</code>。Mosaic for windows &amp; macintosh</li>\n<li><code>1993</code>。NCSA httpd 1.0</li>\n</ul>\n<h2 id="1990">1990<a class="anchor" href="#1990">§</a></h2>\n<ul>\n<li><code>1990.11</code>。CERN（Tim Berners-Lee）研发出第一台 Web Client、Web Server。</li>\n<li><code>1990</code>。HTTP/0.9</li>\n</ul>'
        } }),
    'contentHasKatex': false,
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#2016">2016</a></li><li><a href="#2015">2015</a></li><li><a href="#2014">2014</a></li><li><a href="#2013">2013</a></li><li><a href="#2012">2012</a></li><li><a href="#2011">2011</a></li><li><a href="#2010">2010</a></li><li><a href="#2009">2009</a></li><li><a href="#2008">2008</a></li><li><a href="#2007">2007</a></li><li><a href="#2006">2006</a></li><li><a href="#2005">2005</a></li><li><a href="#2004">2004</a></li><li><a href="#2003">2003</a></li><li><a href="#2002">2002</a></li><li><a href="#2001">2001</a></li><li><a href="#2000">2000</a></li><li><a href="#1999">1999</a></li><li><a href="#1998">1998</a></li><li><a href="#1997">1997</a></li><li><a href="#1996">1996</a></li><li><a href="#1995">1995</a></li><li><a href="#1994">1994</a></li><li><a href="#1993">1993</a></li><li><a href="#1990">1990</a></li></ol></nav>'
        } }),
    'date': "2020-10-27T07:34:52.000Z",
    'updated': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ]
};
