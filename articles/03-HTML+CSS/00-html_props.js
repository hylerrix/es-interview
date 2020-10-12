import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "link": "articles/03-HTML+CSS/index.html",
        "text": "HTML + CSS"
    },
    'next': {
        "text": "CSS",
        "link": "articles/03-HTML+CSS/01-css-design.html"
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
    'pagePath': "articles/03-HTML+CSS/00-html.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/03-HTML+CSS/00-html.html",
    'title': "HTML",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>HTML</h1>\n<h2 id="html-%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0%E7%A9%BA%E5%85%83%E7%B4%A0%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">HTML 行内元素、块级元素、空元素都有哪些？<a class="anchor" href="#html-%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0%E7%A9%BA%E5%85%83%E7%B4%A0%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">§</a></h2>\n<ul>\n<li>常用块级元素：<code>&lt;h1~h6&gt;; &lt;p&gt;; &lt;div&gt;; &lt;form&gt;; &lt;ol&gt;; &lt;ul&gt;; &lt;table&gt;; &lt;vedio&gt;; &lt;audio&gt;; &lt;header&gt;; &lt;footer&gt;</code>。</li>\n<li>常用行内元素：<code>button; input; span; a; img; lable; select; textarea; i</code>。</li>\n<li>空元素(没有内容的 HTML 元素)：<code>&lt;br&gt;; &lt;link&gt;; &lt;meta&gt;; &lt;img&gt;; &lt;input&gt;; &lt;hr&gt;; &lt;col&gt;</code>。</li>\n<li>块级元素和行内元素的区别：\n<ul>\n<li>块级元素默认情况下会以新行开始，块级元素占据其父元素（容器）的整个空间，可以设置宽高；</li>\n<li>行内元素只占据它对应标签的边框所包含的空间，默认情况下不会以新行开始，不可以设置宽高。</li>\n</ul>\n</li>\n<li>块级元素和行内元素的切换：通过修改 display 属性来切换块级元素和行内元素。\n<ul>\n<li><code>display:inline;</code> 属性则变为行内元素。</li>\n<li><code>display:block;</code> 属性则变为块级元素。</li>\n</ul>\n</li>\n</ul>\n<h2 id="html5-%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7">HTML5 有哪些新特性？<a class="anchor" href="#html5-%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7">§</a></h2>\n<ul>\n<li>主要是关于图像，位置，存储，多任务等功能的增加。</li>\n<li>新增特性：\n<ul>\n<li>新增的语义化标签：<code>header / nav / article/ section/ aside / footer</code></li>\n<li>表单控件: calendar、date、time、email、url、search</li>\n<li>用于媒介回放的 video和 audio 元素</li>\n<li>定义图形的 <code>canvas</code> 元素</li>\n<li>新的技术：<code>webworker, websocket, Geolocation</code></li>\n<li>提供了本地存储方案：\n<ul>\n<li><code>localStorage</code> 用于持久化的本地存储，数据永远不会过期，关闭浏览器也不会丢失。</li>\n<li><code>sessionStorage</code> 同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此 sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>移除特性：\n<ul>\n<li>纯表现的元素：\n<ul>\n<li><code>&lt;basefont&gt;; &lt;font&gt;; &lt;center&gt;; &lt;u&gt;; &lt;big&gt;; &lt;strike&gt;; &lt;tt&gt;</code></li>\n</ul>\n</li>\n<li>框架集：<code>&lt;frameset&gt;; &lt;noframes&gt;; &lt;frame&gt;;</code></li>\n</ul>\n</li>\n<li>如何区分 HTML 和 HTML5\n<ul>\n<li>文档类型声明方式 DocType 不同：HTML4.01 和 XHTML1.0 有三种模式的写法；HTML 只有一种。</li>\n<li>结构语义：html 4.0 没有体现结构语义化的标签，html5 添加了许多具有语义化的标签。</li>\n<li>html5 具有特色功能，比如直接在网页用 video、audio 播放多媒体等。</li>\n</ul>\n</li>\n</ul>\n<p>HTML5 语义化标签：</p>\n<table>\n<thead>\n<tr>\n<th>语义化标签</th>\n<th>作用</th>\n<th>示例</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>article</td>\n<td>装载显示一个独立的文章内容，可以嵌套</td>\n<td>一篇完整的论坛帖子、一则网站新闻、一篇博客文章</td>\n</tr>\n<tr>\n<td>section</td>\n<td>定义文档中的节/区段</td>\n<td>章节、页眉、页脚</td>\n</tr>\n<tr>\n<td>aside</td>\n<td>用来装载非正文类的内容</td>\n<td>广告、成组的链接、侧边栏</td>\n</tr>\n<tr>\n<td>hgroup</td>\n<td>用于对网页或区段的标题元素(h1-h6)进行组合</td>\n<td>连续的 h 系列的标签元素可以用  hgroup 将他们括起来</td>\n</tr>\n<tr>\n<td>header</td>\n<td>定义文档的页面组合</td>\n<td>一些引导和导航信息</td>\n</tr>\n<tr>\n<td>footer</td>\n<td>定义 section 或 document 的页脚</td>\n<td>典型时可包含创作者的姓名、文档的创作日期以及/或者联系信息。</td>\n</tr>\n<tr>\n<td>nav</td>\n<td>定义显示导航链接。不是所有的成组的超级链接都需要放在nav标签里。nav标签里应该放入一些当前页面的主要导航链接</td>\n<td>在页脚显示一个站点的导航链接(如首页，服务信息页面，版权信息页面等等)</td>\n</tr>\n<tr>\n<td>time</td>\n<td>定义公历的时间(24 小时制)或日期，时间和时区偏移是可选的。该元素能够以机器可读的方式对日期和时间进行编码</td>\n<td>用户代理能够把生日提醒或排定的事件添加到用户日程表中，搜索引擎也能够生成更智能的搜索结果</td>\n</tr>\n<tr>\n<td>mark</td>\n<td>定义带有记号的文本</td>\n<td>请在需要突出显示文本时使用 标签</td>\n</tr>\n<tr>\n<td>figure</td>\n<td>规定独立的流内容。figure 元素的内容应该与主内容相关，但如果被删除，则不应对文档流产生影响。</td>\n<td>独立流内容如图像、图表、照片、代码等等</td>\n</tr>\n<tr>\n<td>figcaption</td>\n<td>定义 figure 元素的标题（caption）</td>\n<td>&quot;figcaption&quot; 元素应该被置于 &quot;figure&quot; 元素的第一个或最后一个子元素的位置</td>\n</tr>\n<tr>\n<td>contextmenu</td>\n<td>添加到系统右键菜单</td>\n<td>貌似这个功能只有 firefox 支持</td>\n</tr>\n</tbody>\n</table>\n<h2 id="html5-%E6%96%B0%E6%A0%87%E7%AD%BE%E5%A6%82%E4%BD%95%E5%85%BC%E5%AE%B9%E8%80%81%E6%B5%8F%E8%A7%88%E5%99%A8">HTML5 新标签如何兼容老浏览器<a class="anchor" href="#html5-%E6%96%B0%E6%A0%87%E7%AD%BE%E5%A6%82%E4%BD%95%E5%85%BC%E5%AE%B9%E8%80%81%E6%B5%8F%E8%A7%88%E5%99%A8">§</a></h2>\n<h2 id="xhtmlxml-%E7%AD%89">XHTML、XML 等<a class="anchor" href="#xhtmlxml-%E7%AD%89">§</a></h2>\n<ul>\n<li>XHTML 元素必须被正确地嵌套，HTML 不需要被正确嵌套也不会报错</li>\n<li>XHTML 元素必须被关闭(空标签也必须被关闭)，HTML 空标签不需要被关闭</li>\n<li>XHTML标签名必须用小写字母，html 可以大写</li>\n<li>XHTML 文档必须拥有根元素</li>\n</ul>\n<h2 id="html-%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E%E6%98%AF%E6%80%8E%E6%A0%B7%E5%B7%A5%E4%BD%9C%E7%9A%84">HTML 模板引擎是怎样工作的？<a class="anchor" href="#html-%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E%E6%98%AF%E6%80%8E%E6%A0%B7%E5%B7%A5%E4%BD%9C%E7%9A%84">§</a></h2>\n<h2 id="doctype-%E6%A0%87%E7%AD%BE%E7%9A%84%E7%94%A8%E9%80%94">DocType 标签的用途？<a class="anchor" href="#doctype-%E6%A0%87%E7%AD%BE%E7%9A%84%E7%94%A8%E9%80%94">§</a></h2>\n<ul>\n<li>DOCTYPE 是 document type 的缩写，是一种标准通用标记语言的文档类型声明：</li>\n<li>对 HTML 文件来说，浏览器使用文件开头的 DOCTYPE 来决定用怪异模式处理或是用标准模式处理；为了确保页面使用标准模式，需要引入 DocType。混杂模式服务于旧式规则，而严格模式服务于标准规则。\n<ul>\n<li><code>标准模式</code>： 行为即为由 HTML 与 CSS 的规范描述的行为。</li>\n<li><code>怪异模式</code>： 排版会模拟 Navigator 4 与 IE5 的非标准行为</li>\n<li><code>接近标准模式</code>：只有少数的怪异行为被实现。</li>\n<li>如果说只存在严格模式，那么许多旧网站必然受到影响，如果只存在混杂模式，那么会回到当时浏览器大战时的混乱，每个浏览器都有自己的解析模式</li>\n</ul>\n</li>\n<li>不同版本的声明方式：\n<ul>\n<li>HTML 4.01 基于 SGML(标准通用标记语言)。分为严格模式、过渡模式、框架模式。</li>\n<li>HTML 5 不基于 SGML，不需要对 DTD 进行引用,只有一种声明方式。</li>\n</ul>\n</li>\n</ul>\n<h2 id="script-%E7%9A%84%E7%94%A8%E9%80%94">Script 的用途？<a class="anchor" href="#script-%E7%9A%84%E7%94%A8%E9%80%94">§</a></h2>\n<ul>\n<li>通常情况下，<code>&lt;script&gt;</code> 标签最好放在 <code>&lt;/body&gt;</code> 之前，这样可以保证 HTML 文档首先完成解析，将页面尽早呈现给用户。解决方案是使用 <code>&lt;script&gt;</code> 标签的 defer、async 属性，具体区别如下：</li>\n<li>没有 defer、async 时，HTML 解析中断，脚本被提取并立即执行。执行结束后，HTML 解析继续。</li>\n<li>只有 defer 时：立即下载，按照原来的标签顺序延迟执行\n<ul>\n<li>脚本仅提取过程与 HTML 解析过程并行，脚本的执行将在 HTML 解析完毕后进行。</li>\n<li>如果含有多个 defer 脚本，脚本的执行顺序将按照在 document 中出现的位置，从上到下顺序执行。</li>\n</ul>\n</li>\n<li>只有 async 时：异步下载完成后就执行，先下载完成的先执行。\n<ul>\n<li>脚本的提取、执行的过程与 HTML 解析过程并行，脚本执行完毕可能在 HTML 解析完毕之前。</li>\n<li>当脚本与页面其它脚本相互独立时，可以使用 async，比如用作页面统计。</li>\n</ul>\n</li>\n<li>注意：没有 src 属性的脚本，defer、async 属性将会被忽略。</li>\n</ul>\n<h2 id="meta-%E6%A0%87%E7%AD%BE%E7%9A%84%E7%94%A8%E9%80%94">Meta 标签的用途？<a class="anchor" href="#meta-%E6%A0%87%E7%AD%BE%E7%9A%84%E7%94%A8%E9%80%94">§</a></h2>\n<h2 id="link-%E6%A0%87%E7%AD%BE%E7%9A%84%E7%94%A8%E9%80%94%E5%90%AB-import">Link 标签的用途（含 @import）？<a class="anchor" href="#link-%E6%A0%87%E7%AD%BE%E7%9A%84%E7%94%A8%E9%80%94%E5%90%AB-import">§</a></h2>\n<ul>\n<li>\n<p>通常情况下，<code>&lt;link&gt;</code> 标签最好放在 <code>&lt;head&gt;&lt;/head&gt;</code> 中，这是规范要求的内容。这样做可以让页面逐步呈现，防止呈现给用户的是空白页面或没有样式的内容，提高了用户体验。</p>\n</li>\n<li>\n<p><code>@import</code> 与 link 的区别：</p>\n<ul>\n<li><code>@import</code> 用于从其他样式表导入样式规则，语法： <code>@import url</code>。</li>\n<li>从属关系区别：link 属于 XHTML 标签，除了加载 CSS 外，还能用于定义 RSS，定义 rel 属性等作用；@import 是 CSS 提供的，用于引入外部文件。</li>\n<li>加载顺序区别：link 标签引入的 CSS 被同时加载，@import 引入的 CSS 将在页面加载完毕后被加载（更耗时）。</li>\n<li>DOM可控性区别：当使用 JavaScript 控制 DOM 去改变样式的时候，只能使用 Link 标签，无法使用 @import 的方式插入样式。</li>\n</ul>\n</li>\n<li>\n<p>link 标签可定义的常用属性：</p>\n<ul>\n<li>rel：指明被链接文档与当前文档的关系(如stylesheet)</li>\n<li>href：指定被链接资源的URL</li>\n<li>type：定义链接内容的类型（text/css）</li>\n</ul>\n</li>\n<li>\n<p>属性 href 与 src 的区别</p>\n<ul>\n<li><code>href</code> 用来建立当前元素和文档之间的链接，它的内容与该页面有关联，表示引用。用在 <code>link; a</code> 等元素上。</li>\n<li><code>src</code> 会将其指向的资源下载并应用到文档中；它指向的内容是页面必不可少的一部分，表示引入。用在 <code>img，script，iframe</code> 等元素上。</li>\n</ul>\n</li>\n</ul>\n<h2 id="img-%E6%A0%87%E7%AD%BE%E7%9A%84%E7%94%A8%E9%80%94">img 标签的用途？<a class="anchor" href="#img-%E6%A0%87%E7%AD%BE%E7%9A%84%E7%94%A8%E9%80%94">§</a></h2>\n<ul>\n<li>响应式图片：srcset 属性配合 sizes 属性。\n<ul>\n<li>serset 定义了我们允许浏览器选择的图像集，以及每个图像的大小。</li>\n<li>sizes 定义了一组媒体条件(例如屏幕宽度)并且指明当某些媒体条件为真时，什么样的图片尺寸是最佳选择。</li>\n<li>浏览器遇到该属性后的处理过程：</li>\n<li>查看设备宽度</li>\n<li>检查 sizes 列表中哪个媒体条件是第一个为真</li>\n<li>查看给予该媒体查询的槽大小</li>\n<li>加载 srcset 列表中引用的最接近所选的槽大小的图像</li>\n</ul>\n</li>\n</ul>\n<h2 id="canvas-%E6%A0%87%E7%AD%BE%E7%9A%84%E7%94%A8%E9%80%94">Canvas 标签的用途？<a class="anchor" href="#canvas-%E6%A0%87%E7%AD%BE%E7%9A%84%E7%94%A8%E9%80%94">§</a></h2>\n<ul>\n<li>\n<p>canvas 可以通过使用 JavaScript 中的脚本来绘制 2/3D 图形，制作照片、创建动画等。</p>\n</li>\n<li>\n<p>如何使用 <code>&lt;canvas&gt;</code> 绘图：</p>\n<ul>\n<li>大多数 Canvas 绘图 API 都没有定义在<code>&lt;canvas&gt;</code> 元素本身上，而是定义在通过画布的 <code>getContext()</code> 方法获得的一个“绘图环境”对象上。</li>\n<li>Canvas API 也使用了路径的表示法。路径由一系列的方法调用来定义，比如调用 beginPath() 和 arc() 方法。一旦定义了路径，其他的方法，如 fill()，都是对此路径操作。</li>\n</ul>\n</li>\n<li>\n<p>和 SVG 以及 VML 之间的差异</p>\n<ul>\n<li><code>&lt;canvas&gt;</code> 有一个基于 JavaScript 的绘图 API，而 SVG 和 VML 使用一个 XML 文档来描述绘图。</li>\n<li>SVG 绘图很容易编辑，只要从其描述中移除元素就行。而要从同一图形的一个 <code>&lt;canvas&gt;</code> 标记中移除元素，需要擦掉绘图重绘。</li>\n</ul>\n</li>\n</ul>\n<h2 id="data--%E5%B1%9E%E6%80%A7%E6%98%AF%E4%BB%80%E4%B9%88"><code>data-</code> 属性是什么？<a class="anchor" href="#data--%E5%B1%9E%E6%80%A7%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h2>\n<p>在 JavaScript 框架流行前，常用 <code>data-</code> 属性把额外数据存储在 DOM 自身中。现在鼓励将数据模型存放在 JavaScript 本身中，并利用框架提供的数据绑定，使之与 DOM 保持更新。</p>\n<h2 id="html-%E7%9A%84%E6%B8%90%E8%BF%9B%E5%BC%8F%E6%B8%B2%E6%9F%93">HTML 的渐进式渲染<a class="anchor" href="#html-%E7%9A%84%E6%B8%90%E8%BF%9B%E5%BC%8F%E6%B8%B2%E6%9F%93">§</a></h2>\n<p>渐进式渲染是用于提高网页性能(尤其是提高用户感知的加载速度)，以尽快呈现页面的技术。该技术在以前互联网宽带小时常常需要使用，现虽移动终端盛行，但移动网络不稳定，仍然有用武之地。举例如下：</p>\n<ul>\n<li>图片懒加载。页面上的图片不会一次性全部加载。当用户滚动页面到图片部分时，JavaScript 将加载并显示图像。</li>\n<li>确定显示内容的优先级(分层次渲染)。为了尽快将页面呈现给用户，页面只包含基本的最少量 CSS、脚本和内容，然后可以使用延迟加载脚本或监听 DOMContentLoaded/Load 事件加载其他资源和内容。</li>\n<li>异步加载分段 HTML。当页面通过后台渲染时，把 HTML 拆分，通过异步请求，分块发送给浏览器。</li>\n</ul>\n<h2 id="html-%E7%BD%91%E9%A1%B5%E6%90%AD%E9%85%8D%E5%A4%9A%E8%AF%AD%E8%A8%80">HTML 网页搭配多语言<a class="anchor" href="#html-%E7%BD%91%E9%A1%B5%E6%90%AD%E9%85%8D%E5%A4%9A%E8%AF%AD%E8%A8%80">§</a></h2>\n<p>客户端可在发送 HTTP 请求时，使用 <code>Accept-Language</code> 请求头，让服务器返回相匹配语言的 HTML 文档。返回的文档还应在 <code>&lt;html&gt;</code> 标签中声明 lang 属性。后台不同的语言，多以 YML 或 JSON 格式存储，并动态的生成指定的 HTML 页面，整个过程通常需要借助后台框架实现。</p>\n<p>在开发多语言网站时，应注意如下事项：</p>\n<ul>\n<li>在 HTML 中使用 lang 属性。</li>\n<li>引导用户切换到自己的母语。</li>\n<li>在图片中展示文本会阻碍网站规模增长。</li>\n<li>限制词语或句子的长度。网页内容在使用其他语言时，文字长度会发生变化，设计时应多加考虑。</li>\n<li>注意颜色的使用。不同语言和文化中，颜色的意义、感受是不同的。</li>\n<li>日期和货币的格式化。</li>\n<li>不要使用连接的翻译字符串。如不使用 <code>I will travel on {% date %}</code>。</li>\n<li>注意语言阅读方向。如英语从左向右，传统日语从右向左。</li>\n</ul>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#html-%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0%E7%A9%BA%E5%85%83%E7%B4%A0%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">HTML 行内元素、块级元素、空元素都有哪些？</a></li><li><a href="#html5-%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7">HTML5 有哪些新特性？</a></li><li><a href="#html5-%E6%96%B0%E6%A0%87%E7%AD%BE%E5%A6%82%E4%BD%95%E5%85%BC%E5%AE%B9%E8%80%81%E6%B5%8F%E8%A7%88%E5%99%A8">HTML5 新标签如何兼容老浏览器</a></li><li><a href="#xhtmlxml-%E7%AD%89">XHTML、XML 等</a></li><li><a href="#html-%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E%E6%98%AF%E6%80%8E%E6%A0%B7%E5%B7%A5%E4%BD%9C%E7%9A%84">HTML 模板引擎是怎样工作的？</a></li><li><a href="#doctype-%E6%A0%87%E7%AD%BE%E7%9A%84%E7%94%A8%E9%80%94">DocType 标签的用途？</a></li><li><a href="#script-%E7%9A%84%E7%94%A8%E9%80%94">Script 的用途？</a></li><li><a href="#meta-%E6%A0%87%E7%AD%BE%E7%9A%84%E7%94%A8%E9%80%94">Meta 标签的用途？</a></li><li><a href="#link-%E6%A0%87%E7%AD%BE%E7%9A%84%E7%94%A8%E9%80%94%E5%90%AB-import">Link 标签的用途（含 @import）？</a></li><li><a href="#img-%E6%A0%87%E7%AD%BE%E7%9A%84%E7%94%A8%E9%80%94">img 标签的用途？</a></li><li><a href="#canvas-%E6%A0%87%E7%AD%BE%E7%9A%84%E7%94%A8%E9%80%94">Canvas 标签的用途？</a></li><li><a href="#data--%E5%B1%9E%E6%80%A7%E6%98%AF%E4%BB%80%E4%B9%88">data- 属性是什么？</a></li><li><a href="#html-%E7%9A%84%E6%B8%90%E8%BF%9B%E5%BC%8F%E6%B8%B2%E6%9F%93">HTML 的渐进式渲染</a></li><li><a href="#html-%E7%BD%91%E9%A1%B5%E6%90%AD%E9%85%8D%E5%A4%9A%E8%AF%AD%E8%A8%80">HTML 网页搭配多语言</a></li></ol></nav>'
        } })
};
