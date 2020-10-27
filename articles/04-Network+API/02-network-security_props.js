import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "title": "前后端协作",
        "link": "articles/04-Network+API/01-fe-be-api.html"
    },
    'next': {
        "link": "articles/05-V8+Runtime/index.html",
        "title": "V8 + JavaScript 运行时"
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
    'pagePath': "articles/04-Network+API/02-network-security.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/04-Network+API/02-network-security.html",
    'title': "网络安全",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>网络安全</h1>\n<h2 id="%E6%9C%89%E5%93%AA%E4%BA%9B%E5%8F%AF%E8%83%BD%E5%BC%95%E8%B5%B7%E5%89%8D%E7%AB%AF%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%89%E5%85%A8%E7%9A%84%E9%97%AE%E9%A2%98">有哪些可能引起前端/浏览器安全的问题？<a class="anchor" href="#%E6%9C%89%E5%93%AA%E4%BA%9B%E5%8F%AF%E8%83%BD%E5%BC%95%E8%B5%B7%E5%89%8D%E7%AB%AF%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%89%E5%85%A8%E7%9A%84%E9%97%AE%E9%A2%98">§</a></h2>\n<ul>\n<li>跨站脚本 (Cross-Site Scripting, XSS)：一种代码注入方式, 为了与 CSS 区分所以被称作 XSS. 早期常⻅于网络论坛, 起因是网站没有对用户的输入进行严格的限制, 使得攻击者可以将脚本上传到帖子让其他人浏览到有恶意脚本的⻚ 面, 其注入方式很简单包括但不限于 JavaScript / VBScript / CSS / Flash 等</li>\n<li>iframe的滥用：iframe中的内容是由第三方来提供的，默认情况下他们不受我们的控制，他们可以在iframe中运行 JavaScirpt脚本、Flash插件、弹出对话框等等，这可能会破坏前端用户体验</li>\n<li>跨站点请求伪造(Cross-Site Request Forgeries，CSRF)：指攻击者通过设置好的陷阱，强制对已完成认证的用 户进行非预期的个人信息或设定信息等某些状态更新，属于被动攻击</li>\n<li>恶意第三方库：无论是后端服务器应用还是前端应用开发，绝大多数时候我们都是在借助开发框架和各种类库进行 快速开发,一旦第三方库被植入恶意代码很容易引起安全问题,比如event-stream的恶意代码事件,2018年11月21日， 名为 FallingSnow的用户在知名JavaScript应用库event-stream在github Issuse中发布了针对植入的恶意代码的疑 问，表示event-stream中存在用于窃取用户数字钱包的恶意代码</li>\n</ul>\n<h2 id="xss-%E5%88%86%E4%B8%BA%E5%87%A0%E7%B1%BB">XSS 分为几类？<a class="anchor" href="#xss-%E5%88%86%E4%B8%BA%E5%87%A0%E7%B1%BB">§</a></h2>\n<ul>\n<li>根据攻击的来源，XSS 攻击可分为存储型、反射型和 DOM 型三种。\n<ul>\n<li>存储区：恶意代码存放的位置。</li>\n<li>插入点：由谁取得恶意代码，并插入到网⻚上。</li>\n</ul>\n</li>\n<li>存储型 XSS\n<ul>\n<li>存储型 XSS 的攻击步骤：\n<ul>\n<li>攻击者将恶意代码提交到目标网站的数据库中。</li>\n<li>用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器。</li>\n<li>用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。</li>\n<li>恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。</li>\n</ul>\n</li>\n<li>这种攻击常⻅于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。</li>\n</ul>\n</li>\n<li>反射型 XSS\n<ul>\n<li>反射型 XSS 的攻击步骤：\n<ul>\n<li>攻击者构造出特殊的 URL，其中包含恶意代码。</li>\n<li>用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。</li>\n<li>用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。</li>\n<li>恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。</li>\n</ul>\n</li>\n<li>反射型 XSS 跟存储型 XSS 的区别是：存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里。</li>\n<li>反射型 XSS 漏洞常⻅于通过 URL 传递参数的功能，如网站搜索、跳转等。</li>\n<li>由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。</li>\n<li>POST 的内容也可以触发反射型 XSS，只不过其触发条件比较苛刻(需要构造表单提交⻚面，并引导用户点击)，所 以非常少⻅。</li>\n</ul>\n</li>\n<li>DOM 型 XSS\n<ul>\n<li>DOM 型 XSS 的攻击步骤：\n<ul>\n<li>攻击者构造出特殊的 URL，其中包含恶意代码。</li>\n<li>用户打开带有恶意代码的 URL。</li>\n<li>用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行。</li>\n<li>恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。</li>\n</ul>\n</li>\n<li>DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E9%A2%84%E9%98%B2-xss">如何预防 XSS？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E9%A2%84%E9%98%B2-xss">§</a></h2>\n<ul>\n<li>XSS 的攻击有两大要素：\n<ul>\n<li>攻击者提交恶意代码</li>\n<li>浏览器执行恶意代码</li>\n</ul>\n</li>\n<li>输入过滤：前后端均进行输入验证，但要注意乱码问题，转义过程中局限性很强。</li>\n<li>预防存储型和反射型 XSS 攻击：\n<ul>\n<li>存储型和反射型 XSS 都是在服务端取出恶意代码后，插入到响应 HTML 里的，攻击者刻意编写的“数据”被内嵌到“代码”中，被浏览器执行。</li>\n<li>预防的两种方式：\n<ul>\n<li>改成纯前端渲染，把代码和数据分开。</li>\n<li>对 HTML 进行充分的转义</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>纯前端渲染：\n<ul>\n<li>过程：\n<ul>\n<li>浏览器先加载一个静态 HTML，此 HTML 中不包括任何跟业务相关的数据。</li>\n<li>然后浏览器执行 HTML 中的 JavaScript。</li>\n<li>JavaScript 通过 Ajax 加载业务数据，调用 DOM API 更新到页面上。</li>\n</ul>\n</li>\n<li>纯前端渲染会明确进行 DOM 操作，很难让浏览器执行预期外的代码。</li>\n<li>还需要注意避免 DOM 型 XSS 漏洞。</li>\n<li>对于性能要求较高，有 SEO 需求的页面，仍需要拼接 HTML。</li>\n</ul>\n</li>\n<li>转移 HTML：\n<ul>\n<li>当拼接 HTML 片段很必要时，需要采用合适的转义库，对 HTML 模板各处插入点进行充分的转义。</li>\n<li>HTML 的编码是较为复杂的，要对转义过程进行充分的考量。</li>\n</ul>\n</li>\n<li>预防 DOM 型 XSS 攻击：\n<ul>\n<li>在使用 <code>.innerHTML</code>、<code>.outerHTML</code>、<code>document.write()</code> 时要特别小心，不要把不可信的数据插入到 HTML 页面上，应尽量使用 <code>.textContent</code>、<code>.setAttribute</code> 等。</li>\n<li>如果使用 React/Vue 技术栈，并且不使用 <code>dangerouslySetInnerHTML/v-html</code> 功能，就在前端 render 阶段避免 <code>innerHTML</code>、<code>outerHTML</code> 的 XSS 隐患。</li>\n<li>DOM 中的内联事件监听器，如 <code>location</code>、<code>onclick</code>、<code>onerror</code>、<code>onload</code>、<code>onmouseover</code> 等，<code>&lt;a&gt;</code> 标签的 <code>&lt;href&gt;</code> 属性，JavaScript 中的 <code>eval()</code>、<code>setTimeout()</code>、<code>setInterval()</code> 等，都能把字符串作为代码运行。如果不可信的数据拼接到字符串中传递给这些 API，很容易产生安全隐患，请务必避免。</li>\n</ul>\n</li>\n<li>Content Security Policy\n<ul>\n<li>严格的 CSP 在 XSS 的防范重可以起到如下作用：\n<ul>\n<li>禁止加载外域代码，防止复杂的攻击逻辑。</li>\n<li>禁止外域提交，网站被攻击后，用户的数据不会泄露到外域。</li>\n<li>禁止内联脚本执行（规则较严格，目前发现 Github 使用）。</li>\n<li>禁止未授权的脚本执行（新特性，Google Map 移动端使用）</li>\n<li>合理使用上报功能可以及时发现 XSS，利于尽快修复问题。</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>输入内容长度控制：对于不受信任的输入，都应该限定一个合理的长度。虽然无法完全防止 XSS 发生，但可以增加 XSS 攻击的难度。</li>\n<li>HTTP-only Cookie：禁止 JavaScript 读取某些敏感 Cookie，攻击者完成 XSS 注入后也无法窃取此 Cookie。</li>\n<li>验证码：防止脚本冒充用户提交危险操作。</li>\n</ul>\n<h2 id="csrf-%E5%8F%8A%E5%85%B6%E6%94%BB%E5%87%BB%E7%B1%BB%E5%9E%8B">CSRF 及其攻击类型？<a class="anchor" href="#csrf-%E5%8F%8A%E5%85%B6%E6%94%BB%E5%87%BB%E7%B1%BB%E5%9E%8B">§</a></h2>\n<ul>\n<li>CSRF，跨站点请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网 站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站 执行某项操作的目的。</li>\n<li>一个典型的CSRF攻击有着如下的流程：\n<ul>\n<li>受害者登录 <a href="http://a.com">a.com</a> ，并保留了登录凭证(Cookie) 攻击者引诱受害者访问了 <a href="http://b.com">b.com</a></li>\n<li><a href="http://b.com">b.com</a> 向 <a href="http://a.com">a.com</a> 发送了一个请求: <a href="http://a.com/act=xx">a.com/act=xx</a> 浏览器会默认携带a.com的Cookie <a href="http://a.com">a.com</a></li>\n<li>接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求</li>\n<li>a.com以受害者的名义执行了act=xx 攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让a.com执行了自己定义的操作</li>\n</ul>\n</li>\n<li>CSRF 的攻击类型：\n<ul>\n<li>GET 类型的 CSRF：悄悄调用一次 GET 请求（如请求某个图片带上参数）</li>\n<li>POST 类型的 CSRF：悄悄调用一次 POST 请求（如隐藏表单）</li>\n<li>链接类型的 CSRF：需要用户主动点击链接才会触发。</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E9%A2%84%E9%98%B2-csrf">如何预防 CSRF？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E9%A2%84%E9%98%B2-csrf">§</a></h2>\n<ul>\n<li>CSRF 通常从第三方网站发起，被攻击的网站无法防止攻击的发生，只能通过增强自己网站针对 CSRF 的防护能力来提升安全性。</li>\n<li>CSRF 的特点 1 - CSRF 通常发生在第三方域名。\n<ul>\n<li>防范：阻止不明外域的访问：\n<ul>\n<li>同源策略：直接禁止外域（不受信任的域名）对我们发起请求：\n<ul>\n<li>使用Origin Header确定来源域名：在部分与CSRF有关的请求中，请求的Header中会携带Origin字段,如果Origin存 在，那么直接使用Origin中的字段确认来源域名就可以。</li>\n<li>使用Referer Header确定来源域名：根据HTTP协议，在HTTP头中有一个字段叫Referer，记录了该HTTP请求的来 源地址。</li>\n</ul>\n</li>\n<li>Samesite Cookie</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>CSRF 的特点 2 - CSRF 攻击者不能获取到 Cookie 等信息，只是使用。\n<ul>\n<li>防范：\n<ul>\n<li>CSRF Token：\n<ul>\n<li>可以要求所有的 用户请求都携带一个CSRF攻击者无法获取到的Token。服务器通过校验请求是否携带正确的Token，来把正常的请求 和攻击的请求区分开，也可以防范CSRF的攻击。</li>\n<li>CSRF Token的防护策略分为三个步骤：\n<ul>\n<li>将CSRF Token输出到⻚面中</li>\n<li>⻚面提交的请求携带这个Token</li>\n<li>服务器验证Token是否正确</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>双重 Cookie 验证：\n<ul>\n<li>要求 Ajax 和表单请求携带一个 Cookie 中的值</li>\n<li>流程：\n<ul>\n<li>在用户访问网站⻚面时，向请求域名注入一个Cookie，内容为随机字符串(例如 <code>csrfcookie=123456</code>)。</li>\n<li>在前端向后端发起请求时，取出Cookie，并添加到URL的参数中</li>\n<li>后端接口验证Cookie中的字段与URL参数中的字段是否一致，不一致则拒绝。</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF-samesite-cookie-%E5%B1%9E%E6%80%A7">什么是 Samesite Cookie 属性？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-samesite-cookie-%E5%B1%9E%E6%80%A7">§</a></h2>\n<ul>\n<li>Google起草了一份草案来改进HTTP协议，那就是为Set-Cookie响应头新增Samesite属性，它用来标明这个 Cookie是个“同站 Cookie”，同站Cookie只能作为第一方Cookie，不能作为第三方Cookie，Samesite 有两个属性值:\n<ul>\n<li>Samesite=Strict: 这种称为严格模式，表明这个 Cookie 在任何情况下都不可能作为第三方 Cookie</li>\n<li>Samesite=Lax: 这种称为宽松模式，比 Strict 放宽了点限制,假如这个请求是这种请求且同时是个GET请求，则这个 Cookie可以作为第三方Cookie</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E7%BD%91%E7%BB%9C%E5%8A%AB%E6%8C%81">如何理解网络劫持？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E7%BD%91%E7%BB%9C%E5%8A%AB%E6%8C%81">§</a></h2>\n<ul>\n<li>分为两类：\n<ul>\n<li>DNS 劫持（强制跳转）\n<ul>\n<li>DNS 强制解析：通过修改运营商的本地 DNS 记录，来引导用户流量到缓存服务器</li>\n<li>302 跳转的方式：通过监控网络出口的流量，分析判断哪些内容可以进行劫持处理，再对劫持的内存发起 302 跳转的回复，引导用户获取内容。</li>\n</ul>\n</li>\n<li>HTTP 劫持（注入广告）：\n<ul>\n<li>由于 HTTP 明文传输，运营商可能会修改 HTTP 响应内容。如注入广告</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>应对网络劫持：\n<ul>\n<li>DNS劫持由于涉嫌违法,已经被监管起来,现在很少会有DNS劫持,而http劫持依然非常盛行。</li>\n<li>最有效的办法就是全站HTTPS,将HTTP加密,这使得运营商无法获取明文,就无法劫持你的响应内容。</li>\n</ul>\n</li>\n</ul>\n<h2 id="https-%E4%B8%80%E5%AE%9A%E6%98%AF%E5%AE%89%E5%85%A8%E7%9A%84%E5%90%97">HTTPS 一定是安全的吗？<a class="anchor" href="#https-%E4%B8%80%E5%AE%9A%E6%98%AF%E5%AE%89%E5%85%A8%E7%9A%84%E5%90%97">§</a></h2>\n<ul>\n<li>非全站 HTTPS 并不安全</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB">如何理解中间人攻击？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB">§</a></h2>\n<ul>\n<li>中间人 (Man-in-the-middle attack, MITM) 是指攻击者与通讯的两端分别创建独立的联系, 并交换其所收到的数据, 使通 讯的两端认为他们正在通过一个私密的连接与对方直接对话, 但事实上整个会话都被攻击者完全控制. 在中间人攻击中, 攻击者可以拦截通讯双方的通话并插入新的内容。</li>\n<li>一般的过程如下：\n<ul>\n<li>客户端发送请求到服务端，请求被中间人截获</li>\n<li>服务器向客户端发送公钥</li>\n<li>中间人截获公钥，保留在自己手上。然后自己生成一个【伪造的】公钥，发给客户端</li>\n<li>客户端收到伪造的公钥后，生成加密hash值发给服务器</li>\n<li>中间人获得加密hash值，用自己的私钥解密获得真秘钥,同时生成假的加密hash值，发给服务器</li>\n<li>服务器用私钥解密获得假密钥,然后加密数据传输给客户端</li>\n</ul>\n</li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-169223577-1" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u7F51\u7EDC\u5B89\u5168"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E6%9C%89%E5%93%AA%E4%BA%9B%E5%8F%AF%E8%83%BD%E5%BC%95%E8%B5%B7%E5%89%8D%E7%AB%AF%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%89%E5%85%A8%E7%9A%84%E9%97%AE%E9%A2%98">有哪些可能引起前端/浏览器安全的问题？<a class="anchor" href="#%E6%9C%89%E5%93%AA%E4%BA%9B%E5%8F%AF%E8%83%BD%E5%BC%95%E8%B5%B7%E5%89%8D%E7%AB%AF%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%89%E5%85%A8%E7%9A%84%E9%97%AE%E9%A2%98">§</a></h2>\n<ul>\n<li>跨站脚本 (Cross-Site Scripting, XSS)：一种代码注入方式, 为了与 CSS 区分所以被称作 XSS. 早期常⻅于网络论坛, 起因是网站没有对用户的输入进行严格的限制, 使得攻击者可以将脚本上传到帖子让其他人浏览到有恶意脚本的⻚ 面, 其注入方式很简单包括但不限于 JavaScript / VBScript / CSS / Flash 等</li>\n<li>iframe的滥用：iframe中的内容是由第三方来提供的，默认情况下他们不受我们的控制，他们可以在iframe中运行 JavaScirpt脚本、Flash插件、弹出对话框等等，这可能会破坏前端用户体验</li>\n<li>跨站点请求伪造(Cross-Site Request Forgeries，CSRF)：指攻击者通过设置好的陷阱，强制对已完成认证的用 户进行非预期的个人信息或设定信息等某些状态更新，属于被动攻击</li>\n<li>恶意第三方库：无论是后端服务器应用还是前端应用开发，绝大多数时候我们都是在借助开发框架和各种类库进行 快速开发,一旦第三方库被植入恶意代码很容易引起安全问题,比如event-stream的恶意代码事件,2018年11月21日， 名为 FallingSnow的用户在知名JavaScript应用库event-stream在github Issuse中发布了针对植入的恶意代码的疑 问，表示event-stream中存在用于窃取用户数字钱包的恶意代码</li>\n</ul>\n<h2 id="xss-%E5%88%86%E4%B8%BA%E5%87%A0%E7%B1%BB">XSS 分为几类？<a class="anchor" href="#xss-%E5%88%86%E4%B8%BA%E5%87%A0%E7%B1%BB">§</a></h2>\n<ul>\n<li>根据攻击的来源，XSS 攻击可分为存储型、反射型和 DOM 型三种。\n<ul>\n<li>存储区：恶意代码存放的位置。</li>\n<li>插入点：由谁取得恶意代码，并插入到网⻚上。</li>\n</ul>\n</li>\n<li>存储型 XSS\n<ul>\n<li>存储型 XSS 的攻击步骤：\n<ul>\n<li>攻击者将恶意代码提交到目标网站的数据库中。</li>\n<li>用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器。</li>\n<li>用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。</li>\n<li>恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。</li>\n</ul>\n</li>\n<li>这种攻击常⻅于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。</li>\n</ul>\n</li>\n<li>反射型 XSS\n<ul>\n<li>反射型 XSS 的攻击步骤：\n<ul>\n<li>攻击者构造出特殊的 URL，其中包含恶意代码。</li>\n<li>用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。</li>\n<li>用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。</li>\n<li>恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。</li>\n</ul>\n</li>\n<li>反射型 XSS 跟存储型 XSS 的区别是：存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里。</li>\n<li>反射型 XSS 漏洞常⻅于通过 URL 传递参数的功能，如网站搜索、跳转等。</li>\n<li>由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。</li>\n<li>POST 的内容也可以触发反射型 XSS，只不过其触发条件比较苛刻(需要构造表单提交⻚面，并引导用户点击)，所 以非常少⻅。</li>\n</ul>\n</li>\n<li>DOM 型 XSS\n<ul>\n<li>DOM 型 XSS 的攻击步骤：\n<ul>\n<li>攻击者构造出特殊的 URL，其中包含恶意代码。</li>\n<li>用户打开带有恶意代码的 URL。</li>\n<li>用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行。</li>\n<li>恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。</li>\n</ul>\n</li>\n<li>DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E9%A2%84%E9%98%B2-xss">如何预防 XSS？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E9%A2%84%E9%98%B2-xss">§</a></h2>\n<ul>\n<li>XSS 的攻击有两大要素：\n<ul>\n<li>攻击者提交恶意代码</li>\n<li>浏览器执行恶意代码</li>\n</ul>\n</li>\n<li>输入过滤：前后端均进行输入验证，但要注意乱码问题，转义过程中局限性很强。</li>\n<li>预防存储型和反射型 XSS 攻击：\n<ul>\n<li>存储型和反射型 XSS 都是在服务端取出恶意代码后，插入到响应 HTML 里的，攻击者刻意编写的“数据”被内嵌到“代码”中，被浏览器执行。</li>\n<li>预防的两种方式：\n<ul>\n<li>改成纯前端渲染，把代码和数据分开。</li>\n<li>对 HTML 进行充分的转义</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>纯前端渲染：\n<ul>\n<li>过程：\n<ul>\n<li>浏览器先加载一个静态 HTML，此 HTML 中不包括任何跟业务相关的数据。</li>\n<li>然后浏览器执行 HTML 中的 JavaScript。</li>\n<li>JavaScript 通过 Ajax 加载业务数据，调用 DOM API 更新到页面上。</li>\n</ul>\n</li>\n<li>纯前端渲染会明确进行 DOM 操作，很难让浏览器执行预期外的代码。</li>\n<li>还需要注意避免 DOM 型 XSS 漏洞。</li>\n<li>对于性能要求较高，有 SEO 需求的页面，仍需要拼接 HTML。</li>\n</ul>\n</li>\n<li>转移 HTML：\n<ul>\n<li>当拼接 HTML 片段很必要时，需要采用合适的转义库，对 HTML 模板各处插入点进行充分的转义。</li>\n<li>HTML 的编码是较为复杂的，要对转义过程进行充分的考量。</li>\n</ul>\n</li>\n<li>预防 DOM 型 XSS 攻击：\n<ul>\n<li>在使用 <code>.innerHTML</code>、<code>.outerHTML</code>、<code>document.write()</code> 时要特别小心，不要把不可信的数据插入到 HTML 页面上，应尽量使用 <code>.textContent</code>、<code>.setAttribute</code> 等。</li>\n<li>如果使用 React/Vue 技术栈，并且不使用 <code>dangerouslySetInnerHTML/v-html</code> 功能，就在前端 render 阶段避免 <code>innerHTML</code>、<code>outerHTML</code> 的 XSS 隐患。</li>\n<li>DOM 中的内联事件监听器，如 <code>location</code>、<code>onclick</code>、<code>onerror</code>、<code>onload</code>、<code>onmouseover</code> 等，<code>&lt;a&gt;</code> 标签的 <code>&lt;href&gt;</code> 属性，JavaScript 中的 <code>eval()</code>、<code>setTimeout()</code>、<code>setInterval()</code> 等，都能把字符串作为代码运行。如果不可信的数据拼接到字符串中传递给这些 API，很容易产生安全隐患，请务必避免。</li>\n</ul>\n</li>\n<li>Content Security Policy\n<ul>\n<li>严格的 CSP 在 XSS 的防范重可以起到如下作用：\n<ul>\n<li>禁止加载外域代码，防止复杂的攻击逻辑。</li>\n<li>禁止外域提交，网站被攻击后，用户的数据不会泄露到外域。</li>\n<li>禁止内联脚本执行（规则较严格，目前发现 Github 使用）。</li>\n<li>禁止未授权的脚本执行（新特性，Google Map 移动端使用）</li>\n<li>合理使用上报功能可以及时发现 XSS，利于尽快修复问题。</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>输入内容长度控制：对于不受信任的输入，都应该限定一个合理的长度。虽然无法完全防止 XSS 发生，但可以增加 XSS 攻击的难度。</li>\n<li>HTTP-only Cookie：禁止 JavaScript 读取某些敏感 Cookie，攻击者完成 XSS 注入后也无法窃取此 Cookie。</li>\n<li>验证码：防止脚本冒充用户提交危险操作。</li>\n</ul>\n<h2 id="csrf-%E5%8F%8A%E5%85%B6%E6%94%BB%E5%87%BB%E7%B1%BB%E5%9E%8B">CSRF 及其攻击类型？<a class="anchor" href="#csrf-%E5%8F%8A%E5%85%B6%E6%94%BB%E5%87%BB%E7%B1%BB%E5%9E%8B">§</a></h2>\n<ul>\n<li>CSRF，跨站点请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网 站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站 执行某项操作的目的。</li>\n<li>一个典型的CSRF攻击有着如下的流程：\n<ul>\n<li>受害者登录 <a href="http://a.com">a.com</a> ，并保留了登录凭证(Cookie) 攻击者引诱受害者访问了 <a href="http://b.com">b.com</a></li>\n<li><a href="http://b.com">b.com</a> 向 <a href="http://a.com">a.com</a> 发送了一个请求: <a href="http://a.com/act=xx">a.com/act=xx</a> 浏览器会默认携带a.com的Cookie <a href="http://a.com">a.com</a></li>\n<li>接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求</li>\n<li>a.com以受害者的名义执行了act=xx 攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让a.com执行了自己定义的操作</li>\n</ul>\n</li>\n<li>CSRF 的攻击类型：\n<ul>\n<li>GET 类型的 CSRF：悄悄调用一次 GET 请求（如请求某个图片带上参数）</li>\n<li>POST 类型的 CSRF：悄悄调用一次 POST 请求（如隐藏表单）</li>\n<li>链接类型的 CSRF：需要用户主动点击链接才会触发。</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E9%A2%84%E9%98%B2-csrf">如何预防 CSRF？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E9%A2%84%E9%98%B2-csrf">§</a></h2>\n<ul>\n<li>CSRF 通常从第三方网站发起，被攻击的网站无法防止攻击的发生，只能通过增强自己网站针对 CSRF 的防护能力来提升安全性。</li>\n<li>CSRF 的特点 1 - CSRF 通常发生在第三方域名。\n<ul>\n<li>防范：阻止不明外域的访问：\n<ul>\n<li>同源策略：直接禁止外域（不受信任的域名）对我们发起请求：\n<ul>\n<li>使用Origin Header确定来源域名：在部分与CSRF有关的请求中，请求的Header中会携带Origin字段,如果Origin存 在，那么直接使用Origin中的字段确认来源域名就可以。</li>\n<li>使用Referer Header确定来源域名：根据HTTP协议，在HTTP头中有一个字段叫Referer，记录了该HTTP请求的来 源地址。</li>\n</ul>\n</li>\n<li>Samesite Cookie</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>CSRF 的特点 2 - CSRF 攻击者不能获取到 Cookie 等信息，只是使用。\n<ul>\n<li>防范：\n<ul>\n<li>CSRF Token：\n<ul>\n<li>可以要求所有的 用户请求都携带一个CSRF攻击者无法获取到的Token。服务器通过校验请求是否携带正确的Token，来把正常的请求 和攻击的请求区分开，也可以防范CSRF的攻击。</li>\n<li>CSRF Token的防护策略分为三个步骤：\n<ul>\n<li>将CSRF Token输出到⻚面中</li>\n<li>⻚面提交的请求携带这个Token</li>\n<li>服务器验证Token是否正确</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>双重 Cookie 验证：\n<ul>\n<li>要求 Ajax 和表单请求携带一个 Cookie 中的值</li>\n<li>流程：\n<ul>\n<li>在用户访问网站⻚面时，向请求域名注入一个Cookie，内容为随机字符串(例如 <code>csrfcookie=123456</code>)。</li>\n<li>在前端向后端发起请求时，取出Cookie，并添加到URL的参数中</li>\n<li>后端接口验证Cookie中的字段与URL参数中的字段是否一致，不一致则拒绝。</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF-samesite-cookie-%E5%B1%9E%E6%80%A7">什么是 Samesite Cookie 属性？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-samesite-cookie-%E5%B1%9E%E6%80%A7">§</a></h2>\n<ul>\n<li>Google起草了一份草案来改进HTTP协议，那就是为Set-Cookie响应头新增Samesite属性，它用来标明这个 Cookie是个“同站 Cookie”，同站Cookie只能作为第一方Cookie，不能作为第三方Cookie，Samesite 有两个属性值:\n<ul>\n<li>Samesite=Strict: 这种称为严格模式，表明这个 Cookie 在任何情况下都不可能作为第三方 Cookie</li>\n<li>Samesite=Lax: 这种称为宽松模式，比 Strict 放宽了点限制,假如这个请求是这种请求且同时是个GET请求，则这个 Cookie可以作为第三方Cookie</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E7%BD%91%E7%BB%9C%E5%8A%AB%E6%8C%81">如何理解网络劫持？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E7%BD%91%E7%BB%9C%E5%8A%AB%E6%8C%81">§</a></h2>\n<ul>\n<li>分为两类：\n<ul>\n<li>DNS 劫持（强制跳转）\n<ul>\n<li>DNS 强制解析：通过修改运营商的本地 DNS 记录，来引导用户流量到缓存服务器</li>\n<li>302 跳转的方式：通过监控网络出口的流量，分析判断哪些内容可以进行劫持处理，再对劫持的内存发起 302 跳转的回复，引导用户获取内容。</li>\n</ul>\n</li>\n<li>HTTP 劫持（注入广告）：\n<ul>\n<li>由于 HTTP 明文传输，运营商可能会修改 HTTP 响应内容。如注入广告</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>应对网络劫持：\n<ul>\n<li>DNS劫持由于涉嫌违法,已经被监管起来,现在很少会有DNS劫持,而http劫持依然非常盛行。</li>\n<li>最有效的办法就是全站HTTPS,将HTTP加密,这使得运营商无法获取明文,就无法劫持你的响应内容。</li>\n</ul>\n</li>\n</ul>\n<h2 id="https-%E4%B8%80%E5%AE%9A%E6%98%AF%E5%AE%89%E5%85%A8%E7%9A%84%E5%90%97">HTTPS 一定是安全的吗？<a class="anchor" href="#https-%E4%B8%80%E5%AE%9A%E6%98%AF%E5%AE%89%E5%85%A8%E7%9A%84%E5%90%97">§</a></h2>\n<ul>\n<li>非全站 HTTPS 并不安全</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB">如何理解中间人攻击？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB">§</a></h2>\n<ul>\n<li>中间人 (Man-in-the-middle attack, MITM) 是指攻击者与通讯的两端分别创建独立的联系, 并交换其所收到的数据, 使通 讯的两端认为他们正在通过一个私密的连接与对方直接对话, 但事实上整个会话都被攻击者完全控制. 在中间人攻击中, 攻击者可以拦截通讯双方的通话并插入新的内容。</li>\n<li>一般的过程如下：\n<ul>\n<li>客户端发送请求到服务端，请求被中间人截获</li>\n<li>服务器向客户端发送公钥</li>\n<li>中间人截获公钥，保留在自己手上。然后自己生成一个【伪造的】公钥，发给客户端</li>\n<li>客户端收到伪造的公钥后，生成加密hash值发给服务器</li>\n<li>中间人获得加密hash值，用自己的私钥解密获得真秘钥,同时生成假的加密hash值，发给服务器</li>\n<li>服务器用私钥解密获得假密钥,然后加密数据传输给客户端</li>\n</ul>\n</li>\n</ul>'
        } }),
    'contentHasKatex': false,
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E6%9C%89%E5%93%AA%E4%BA%9B%E5%8F%AF%E8%83%BD%E5%BC%95%E8%B5%B7%E5%89%8D%E7%AB%AF%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%89%E5%85%A8%E7%9A%84%E9%97%AE%E9%A2%98">有哪些可能引起前端/浏览器安全的问题？</a></li><li><a href="#xss-%E5%88%86%E4%B8%BA%E5%87%A0%E7%B1%BB">XSS 分为几类？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E9%A2%84%E9%98%B2-xss">如何预防 XSS？</a></li><li><a href="#csrf-%E5%8F%8A%E5%85%B6%E6%94%BB%E5%87%BB%E7%B1%BB%E5%9E%8B">CSRF 及其攻击类型？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E9%A2%84%E9%98%B2-csrf">如何预防 CSRF？</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF-samesite-cookie-%E5%B1%9E%E6%80%A7">什么是 Samesite Cookie 属性？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E7%BD%91%E7%BB%9C%E5%8A%AB%E6%8C%81">如何理解网络劫持？</a></li><li><a href="#https-%E4%B8%80%E5%AE%9A%E6%98%AF%E5%AE%89%E5%85%A8%E7%9A%84%E5%90%97">HTTPS 一定是安全的吗？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB">如何理解中间人攻击？</a></li></ol></nav>'
        } }),
    'date': "2020-10-27T07:34:52.000Z",
    'updated': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ]
};
