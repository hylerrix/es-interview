import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "link": "articles/04-Network+API/index.html",
        "text": "网络 + 前后端协作"
    },
    'next': {
        "text": "前后端协作",
        "link": "articles/04-Network+API/01-fe-be-api.html"
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
    'pagePath': "articles/04-Network+API/00-network.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/04-Network+API/00-network.html",
    'title': "网络",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>网络</h1>\n<ul>\n<li>输入网站发生了什么？\n<ul>\n<li>TCP/IP 模型？HTTP 请求/响应体，响应码</li>\n</ul>\n</li>\n<li>HTTP 缓存\n<ul>\n<li>强缓存、协商缓存</li>\n</ul>\n</li>\n<li>同源策略/跨域</li>\n<li>HTTP1.0、HTTP1.1 和 HTTP2.0</li>\n<li>HTTP 方法，302、304</li>\n<li>HTTPS</li>\n<li>CDN</li>\n<li>三次握手、四次挥手</li>\n</ul>\n<blockquote>\n<p>TCP 和 UDP</p>\n</blockquote>\n<ul>\n<li>\n<p>TCP</p>\n</li>\n<li>\n<ul>\n<li>面向连接</li>\n<li>每条连接一对一</li>\n<li>提供可靠的交付服务</li>\n<li>全双工通信</li>\n<li>面向字节流</li>\n</ul>\n</li>\n<li>\n<p>UDP</p>\n</li>\n<li>\n<ul>\n<li>无连接</li>\n<li>不保证可靠交付</li>\n<li>面向报文</li>\n<li>无拥塞控制</li>\n<li>支持一对一、一对多、多对一和多对多的交互通信</li>\n<li>首部开销小：只有四个字段，源端口、目的端口、长度、校验和</li>\n</ul>\n</li>\n</ul>\n<blockquote>\n<p>GET 和 POST 区别</p>\n</blockquote>\n<p>GET在浏览器回退时是无害的，而POST会再次提交请求。</p>\n<p>GET产生的URL地址可以被Bookmark，而POST不可以。</p>\n<p>GET请求会被浏览器主动cache，而POST不会，除非手动设置。</p>\n<p>GET请求只能进行url编码，而POST支持多种编码方式。</p>\n<p>GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。</p>\n<p>GET请求在URL中传送的参数是有长度限制的，而POST么有。</p>\n<p>对参数的数据类型，GET只接受ASCII字符，而POST没有限制。</p>\n<p>GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。</p>\n<p>GET参数通过URL传递，POST放在Request body中。</p>\n<blockquote>\n<p>HTTPS</p>\n</blockquote>\n<ul>\n<li>\n<p>HTTPS = HTTP + SSL(安全套接字, 传输层)</p>\n</li>\n<li>\n<ul>\n<li>443 端口</li>\n<li>加密：公钥（非对称加密算法）和秘钥（对称加密算法）</li>\n<li>HASH 算法用来确认信息没有被篡改，来生成签名</li>\n<li>数字证书：包含证书发布机构、有效期、公钥、证书所有者、签名使用的算法</li>\n<li>数字签名：只存在于验证阶段</li>\n<li>证书链：证书是分级的，拿到上级证书的公钥才能解密本级证书</li>\n<li>验证流程</li>\n</ul>\n</li>\n<li>\n<ul>\n<li>\n<ul>\n<li>客户端发 HTTP 请求，连接到服务器的 443 端口</li>\n<li>服务端把自己的信息以数字证书的形式返回给客户端（证书内容有密钥公钥，网站地址，证书颁发机构，失效日期等）。证书中有一个公钥来加密信息，私钥由服务器持有。</li>\n<li>验证证书的合法性：客户端收到服务器的响应后会先验证证书的合法性（证书中包含的地址与正在访问的地址是否一致，证书是否过期）。</li>\n<li>生成随机密码（RSA签名）：如果验证通过，或用户接受了不受信任的证书，浏览器就会生成一个随机的对称密钥（session key）并用公钥加密，让服务端用私钥解密，解密后就用这个对称密钥进行传输了，并且能够说明服务端确实是私钥的持有者。</li>\n<li>互相用这个对称加密算法来加密和解密通信内容</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<ul>\n<li>GET/POST/PUT/DELETE/OPTIONS 有什么区别？</li>\n</ul>\n<h2 id="url-%E5%92%8C-uri-%E6%98%AF%E4%BB%80%E4%B9%88">URL 和 URI 是什么？<a class="anchor" href="#url-%E5%92%8C-uri-%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h2>\n<ul>\n<li>URL 一般包括几大部分：\n<ul>\n<li>protocol，协议头，譬如有 http、ftp 等</li>\n<li>host，主机域名或 IP 地址</li>\n<li>port，端口号</li>\n<li>path，目录路径</li>\n<li>query，查询参数</li>\n<li>fragment，即 # 后的 hash 值，一般用来定位到某个位置</li>\n</ul>\n</li>\n<li>公式\n<ul>\n<li>URL = 协议 + Web 服务器名(域名或 IP) + 目录名 + 文件名(可选)</li>\n<li>URL = 协议 + Web 服务器名(域名或 IP) + CGI 程序接口名</li>\n</ul>\n</li>\n<li>URL 根据访问目标不同，可以包括：服务器域名；访问的文件路径；收件地址；用户名、密码、服务器端口号；新闻组名。</li>\n</ul>\n<h2 id="http1--http3-%E7%9A%84%E6%96%B0%E7%89%B9%E6%80%A7">HTTP/1 ~ HTTP/3 的新特性？<a class="anchor" href="#http1--http3-%E7%9A%84%E6%96%B0%E7%89%B9%E6%80%A7">§</a></h2>\n<ul>\n<li>HTTP 2.0：不是 HTTPS，它相当于是 HTTP 的下一代规范。使用 HTTP 2.0 时，不需要雪碧图、域名拆分等优化技术。\n<ul>\n<li>多路复用(即一个 TCP/IP 连接可以请求多个资源)</li>\n<li>首部压缩(HTTP 头部压缩，减少体积)</li>\n<li>二进制分帧(在应用层跟传送层之间增加了一个二进制分帧层，改进传输性能，实现低延迟和高吞吐量)</li>\n<li>服务器端推送(服务端可以对客户端的一个请求发出多个响应，可以主动通知客户端)</li>\n<li>请求优先级(如果流被赋予了优先级，它就会基于这个优先级来处理，由服务器决定需要多少资源来处理该请求。)</li>\n</ul>\n</li>\n<li>HTTP 2.0 和 HTTP 1.1 区别\n<ul>\n<li>HTTP 1.1中，每请求一个资源，都是需要开启一个 TCP/IP 连接的，所以对应的结果是，每一个资源对应一个 TCP/IP 请求，由于 TCP/IP 本身有并发数限制，所以当资源一多，速度就显著慢下来。</li>\n<li>HTTP 2.0中，一个 TCP/IP 请求可以请求多个资源，也就是说，只要一次 TCP/IP 请求，就可以请求若干个资源，分割成更小的帧请求，速度明显提升。</li>\n</ul>\n</li>\n</ul>\n<h2 id="https-%E6%98%AF%E4%BB%80%E4%B9%88">HTTPS 是什么？<a class="anchor" href="#https-%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h2>\n<ul>\n<li>HTTPS 就是安全版本的 HTTP，HTTP 请求的安全系数太低。</li>\n<li>HTTPS 在请求前，会建立 SSL 链接，确保接下来的通信都是加密的，无法被轻易截取分析</li>\n<li>升级为 HTTPS\n<ul>\n<li>一般来说，如果要将网站升级成 HTTPS ，需要后端支持(后端需要申请证书等)，然后 HTTPS 的开销也比 HTTP 要大（因为需要额外建立安全链接以及加密等），所以一般来说 HTTP 2.0 配合 HTTPS 的体验更佳(因为 HTTP2.0 更快)</li>\n</ul>\n</li>\n<li>SSL/TLS的握手流程\n<ul>\n<li>浏览器请求建立 SSL 链接，并向服务端发送一个随机数，Client random 和客户端支持的加密方法，比如 RSA 加密，此时是明文传输。</li>\n<li>服务端从中选出一组加密算法与 Hash 算法，回复一个随机数，Server random，并将自己的身份信息以证书的形式发回给浏览器(证书里包含了网站地址，非对称加密的公钥，以及证书颁发机构等信息)</li>\n<li>浏览器收到服务端的证书后\n<ul>\n<li>验证证书的合法性(颁发机构是否合法，证书中包含的网址是否和正在访问的一样)，如果证书信任，则浏览器会显示一个小锁头，否则会有提示。</li>\n<li>用户接收证书后(不管信不信任)，浏览会生产新的随机数–Premaster secret，然后证书中的公钥以及指定的加密方法加密 Premaster secret，发送给服务器。</li>\n<li>利用 Client random、Server random和 Premaster secret 通过一定的算法生成 HTTP 链接数据传输的对称加密 key- session key</li>\n<li>使用约定好的 HASH 算法计算握手消息，并使用生成的 session key 对消息进行加密，最后将之前生成的所有信息发送给服务端。</li>\n</ul>\n</li>\n<li>服务端收到浏览器的回复\n<ul>\n<li>利用已知的加解密方式与自己的私钥进行解密，获取 Premaster secret</li>\n<li>和浏览器相同规则生成 session key</li>\n<li>使用 session key 解密浏览器发来的握手消息，并验证Hash是否与浏览器发来的一致</li>\n<li>使用 session key 加密一段握手消息，发送给浏览器</li>\n</ul>\n</li>\n<li>浏览器解密并计算握手消息的HASH，如果与服务端发来的HASH一致，此时握手过程结束。</li>\n</ul>\n</li>\n</ul>\n<h2 id="http-%E7%9A%84%E4%B8%BB%E8%A6%81%E6%96%B9%E6%B3%95">HTTP 的主要方法？<a class="anchor" href="#http-%E7%9A%84%E4%B8%BB%E8%A6%81%E6%96%B9%E6%B3%95">§</a></h2>\n<p>PUT 和 DELETE 常用于 RESTful API 设计中，App 和后端交互时常用</p>\n<ul>\n<li>GET，获取 URI 指定的信息(文件、CGI 程序)。</li>\n<li>POST，发送数据。</li>\n<li>HEAD，只返回 HTTP 消息头。</li>\n<li>OPTIONS，用于通知或查询通信选项。</li>\n<li>PUT，替换 URI 指定的服务器上文件，若不存在则新建。</li>\n<li>DELETE，删除  URI 指定的服务器上文件，若不存在则新建。</li>\n<li>TRACE，将服务器收到的请求行和头部直接返回。</li>\n<li>CONNECT，代理传输加密消息时使用的方法。</li>\n</ul>\n<h2 id="http-%E6%8A%A5%E6%96%87%E7%BB%93%E6%9E%84%E4%B8%8E%E5%B8%B8%E8%A7%81%E5%AD%97%E6%AE%B5">HTTP 报文结构与常见字段？<a class="anchor" href="#http-%E6%8A%A5%E6%96%87%E7%BB%93%E6%9E%84%E4%B8%8E%E5%B8%B8%E8%A7%81%E5%AD%97%E6%AE%B5">§</a></h2>\n<pre class="language-markdown"><code class="language-markdown"><span class="token title important"><span class="token punctuation">#</span> 请求报文</span>\n<span class="token title important"><span class="token punctuation">#</span> 消息头，从 字段名:字段值 开始，一直延伸到空行。</span>\n<span class="token title important"><span class="token punctuation">#</span> 消息体可以包含 POST 方法要发送的内容等。</span>\n方法<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>空格</span><span class="token punctuation">></span></span>URI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>空格</span><span class="token punctuation">></span></span>HTTP 版本\n字段名:字段值\n...\n空行\n消息体\n<span class="token title important"><span class="token punctuation">#</span> 响应报文</span>\n<span class="token title important"><span class="token punctuation">#</span> 消息体均为二进制：文件中读取的数据、如 CGI 程序输出的数据</span>\nHTTP 版本<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>空格</span><span class="token punctuation">></span></span>状态码<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>空格</span><span class="token punctuation">></span></span>响应短语\n字段名:字段值\n...\n空行\n消息体\n</code></pre>\n<h2 id="%E5%B8%B8%E8%A7%81%E7%9A%84-http-%E7%8A%B6%E6%80%81%E7%A0%81%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">常见的 HTTP 状态码都有哪些？<a class="anchor" href="#%E5%B8%B8%E8%A7%81%E7%9A%84-http-%E7%8A%B6%E6%80%81%E7%A0%81%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">§</a></h2>\n<ul>\n<li>1XX 消息，代表请求已被接受，需要继续处理。这类响应是临时响应，只包含状态行和某些可选的响应头信息，并以空行结束。由于 HTTP/1.0 协议中没有定义任何 1xx 状态码，所以除非在某些试验条件下，服务器禁止向此类客户端发送 1xx 响应。</li>\n<li>2XX 成功，代表请求已成功被服务器接收、理解、并接受。</li>\n<li>3XX 重定向，代表需要客户端采取进一步的操作才能完成请求。通常用来重定向，后续的请求地址(重定向目标)在本次相应的 Location 域中指明。当且仅当后续的请求所使用的方法是 GET 或者 HEAD 时，用户浏览器才可以在没有用户介入的情况下自动提交所需要的后续请求。客户端应当自动监测无限循环重定向(例如：A→B→C→……→A 或 A→A)，因为这会导致服务器和客户端大量不必要的资源消耗。按照 HTTP/1.0 版规范的建议，浏览器不应自动访问超过5次的重定向。</li>\n<li>4XX 客户端错误，代表客户端看起来可能发生了错误，妨碍了服务器的处理。除非响应的是一个HEAD请求，否则服务器就应该返回一个解释当前错误状况的实体，以及这是临时的还是永久性的状况。这些状态码适用于任何请求方法。浏览器应当向用户显示任何包含在此类错误响应中的实体内容。</li>\n<li>5XX 服务器错误，代表了服务器在处理请求的过程中有错误或者异常状态发生，也有可能是服务器意识到以当前的软硬件资源无法完成对请求的处理。除非这是一个 HEAD 请求，否则服务器应当包含一个解释当前错误状态以及这个状况是临时的还是永久的解释信息实体。浏览器应当向用户展示任何在当前响应中被包含的实体。这些状态码适用于任何响应方法。</li>\n</ul>\n<table>\n<thead>\n<tr>\n<th>状态码</th>\n<th>状态码英文名称</th>\n<th>中文描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>100</td>\n<td>Continue</td>\n<td>继续。客户端应继续其请求.</td>\n</tr>\n<tr>\n<td>101</td>\n<td>Switching Protocols</td>\n<td>切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到 HTTP 的新版本协议。</td>\n</tr>\n<tr>\n<td>102</td>\n<td>Processing</td>\n<td>表示服务器已经收到并正在处理请求，但无响应可用。这样可以防止客户端超时，并假设请求丢失。</td>\n</tr>\n</tbody>\n</table>\n<table>\n<thead>\n<tr>\n<th>状态码</th>\n<th>状态码英文名称</th>\n<th>中文描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>200</td>\n<td>OK</td>\n<td>请求成功，请求所希望的响应头或数据体将随此响应返回。一般用于 GET 与 POST 请求。</td>\n</tr>\n<tr>\n<td>201</td>\n<td>Created</td>\n<td>请求已经被实现，而且有一个新的资源已经依据请求的需要而创建，且其 URI 已经随 Location  头信息返回。假如需要的资源无法及时创建的话，应当返回 \'202 Accepted\'。</td>\n</tr>\n<tr>\n<td>202</td>\n<td>Accepted</td>\n<td>服务器已接受请求，但尚未处理。最终该请求可能会也可能不会被执行，并且可能在处理发生时被禁止。</td>\n</tr>\n<tr>\n<td>203</td>\n<td>Non-Authoritative Information</td>\n<td>非授权信息。请求成功。但返回的 meta 信息不在原始的服务器，而返回转换代理服务器上的一个副本</td>\n</tr>\n<tr>\n<td>204</td>\n<td>No Content</td>\n<td>服务器成功处理了请求，没有返回任何内容。在未更新网页的情况下，可确保浏览器继续显示当前文档</td>\n</tr>\n<tr>\n<td>205</td>\n<td>Reset Content</td>\n<td>服务器成功处理了请求，但没有返回任何内容。与204响应不同，此响应要求请求者重置文档视图。可通过此返回码清除浏览器的表单域。</td>\n</tr>\n<tr>\n<td>206</td>\n<td>Partial Content</td>\n<td>服务器已经成功处理了部分 GET 请求。HTTP 下载工具都是使用此类响应实现断点续传或者将一个大文档分解为多个下载段同时下载。</td>\n</tr>\n<tr>\n<td>207</td>\n<td>Multi-Status</td>\n<td>代表之后的消息体将是一个 XML 消息，并且可能依照之前子请求数量的不同，包含一系列独立的响应代码。</td>\n</tr>\n<tr>\n<td>208</td>\n<td>Already Reported</td>\n<td>DAV 绑定的成员已经在(多状态)响应之前的部分被列举，且未被再次包含。</td>\n</tr>\n<tr>\n<td>226</td>\n<td>IM Used</td>\n<td>服务器已经满足了对资源的请求，对实体请求的一个或多个实体操作的结果表示。</td>\n</tr>\n</tbody>\n</table>\n<table>\n<thead>\n<tr>\n<th>状态码</th>\n<th>状态码英文名称</th>\n<th>中文描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>300</td>\n<td>Multiple Choices</td>\n<td>多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端(例如：浏览器)选择</td>\n</tr>\n<tr>\n<td>301</td>\n<td>Moved Permanently</td>\n<td>永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的 URI，浏览器会自动定向到新 URI。今后任何新的请求都应使用新的 URI 代替</td>\n</tr>\n<tr>\n<td>302</td>\n<td>Found</td>\n<td>临时移动。与 301 类似。但资源只是临时被移动。客户端应继续使用原有 URI</td>\n</tr>\n<tr>\n<td>303</td>\n<td>See Other</td>\n<td>查看其它地址。与 301 类似。使用 GET 和 POST 请求查看</td>\n</tr>\n<tr>\n<td>304</td>\n<td>Not Modified</td>\n<td>未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源</td>\n</tr>\n<tr>\n<td>305</td>\n<td>Use Proxy</td>\n<td>使用代理。所请求的资源必须通过代理访问</td>\n</tr>\n<tr>\n<td>306</td>\n<td>Unused</td>\n<td>已经被废弃的 HTTP 状态码</td>\n</tr>\n<tr>\n<td>307</td>\n<td>Temporary Redirect</td>\n<td>临时重定向。与 302 类似。使用 GET 请求重定向</td>\n</tr>\n<tr>\n<td>308</td>\n<td>Permanent Redirect</td>\n<td>状态码</td>\n</tr>\n</tbody>\n</table>\n<table>\n<thead>\n<tr>\n<th>400</th>\n<th>Bad Request</th>\n<th>客户端请求的语法错误，服务器无法理解</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>401</td>\n<td>Unauthorized</td>\n<td>请求要求用户的身份认证</td>\n</tr>\n<tr>\n<td>402</td>\n<td>Payment Required</td>\n<td>保留，将来使用</td>\n</tr>\n<tr>\n<td>403</td>\n<td>Forbidden</td>\n<td>服务器理解请求客户端的请求，但是拒绝执行此请求</td>\n</tr>\n<tr>\n<td>404</td>\n<td>Not Found</td>\n<td>服务器无法根据客户端的请求找到资源(网页)。通过此代码，网站设计人员可设置&quot;您所请求的资源无法找到&quot;的个性页面</td>\n</tr>\n<tr>\n<td>405</td>\n<td>Method Not Allowed</td>\n<td>客户端请求中的方法被禁止</td>\n</tr>\n<tr>\n<td>406</td>\n<td>Not Acceptable</td>\n<td>服务器无法根据客户端请求的内容特性完成请求</td>\n</tr>\n<tr>\n<td>407</td>\n<td>Proxy Authentication Required</td>\n<td>请求要求代理的身份认证，与 401 类似，但请求者应当使用代理进行授权</td>\n</tr>\n<tr>\n<td>408</td>\n<td>Request Time-out</td>\n<td>服务器等待客户端发送的请求时间过长，超时</td>\n</tr>\n<tr>\n<td>409</td>\n<td>Conflict</td>\n<td>服务器完成客户端的 PUT 请求是可能返回此代码，服务器处理请求时发生了冲突</td>\n</tr>\n<tr>\n<td>410</td>\n<td>Gone</td>\n<td>客户端请求的资源已经不存在。410 不同于 404，如果资源以前有现在被永久删除了可使用 410 代码，网站设计人员可通过 301 代码指定资源的新位置</td>\n</tr>\n<tr>\n<td>411</td>\n<td>Length Required</td>\n<td>服务器无法处理客户端发送的不带 Content-Length 的请求信息</td>\n</tr>\n<tr>\n<td>412</td>\n<td>Precondition Failed</td>\n<td>客户端请求信息的先决条件错误</td>\n</tr>\n<tr>\n<td>413</td>\n<td>Request Entity Too Large</td>\n<td>由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个 Retry-After 的响应信息</td>\n</tr>\n<tr>\n<td>414</td>\n<td>Request-URI Too Large</td>\n<td>请求的 URI 过长(URI通常为网址)，服务器无法处理</td>\n</tr>\n<tr>\n<td>415</td>\n<td>Unsupported Media Type</td>\n<td>服务器无法处理请求附带的媒体格式</td>\n</tr>\n<tr>\n<td>416</td>\n<td>Requested range not satisfiable</td>\n<td>客户端请求的范围无效</td>\n</tr>\n<tr>\n<td>417</td>\n<td>Expectation Failed</td>\n<td>服务器无法满足 Expect 的请求头信息</td>\n</tr>\n</tbody>\n</table>\n<table>\n<thead>\n<tr>\n<th>500</th>\n<th>Internal Server Error</th>\n<th>服务器内部错误，无法完成请求</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>501</td>\n<td>Not Implemented</td>\n<td>服务器不支持请求的功能，无法完成请求</td>\n</tr>\n<tr>\n<td>502</td>\n<td>Bad Gateway</td>\n<td>充当网关或代理的服务器，从远端服务器接收到了一个无效的请求</td>\n</tr>\n<tr>\n<td>503</td>\n<td>Service Unavailable</td>\n<td>由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的 Retry-After 头信息中</td>\n</tr>\n<tr>\n<td>504</td>\n<td>Gateway Time-out</td>\n<td>充当网关或代理的服务器，未及时从远端服务器获取请求</td>\n</tr>\n<tr>\n<td>505</td>\n<td>HTTP Version not supported</td>\n<td>服务器不支持请求的 HTTP 协议的版本，无法完成处理</td>\n</tr>\n</tbody>\n</table>\n<h2 id="http-%E7%9A%84%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84">HTTP 的缓存机制是怎样的？<a class="anchor" href="#http-%E7%9A%84%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84">§</a></h2>\n<ul>\n<li>缓存可以简单的划分成两种类型：强缓存(200 from cache)与协商缓存(304)。\n<ul>\n<li>强缓存(200 from cache)时，浏览器如果判断本地缓存未过期，就直接使用，无需发起 HTTP 请求。对于强缓存，在未过期时，必须更新资源路径才能发起新的请求。</li>\n<li>协商缓存(304)时，浏览器会向服务端发起 HTTP 请求，然后服务端告诉浏览器文件未改变，让浏览器使用本地缓存。对于协商缓存，使用 Ctrl + F5 强制刷新可以使得缓存无效。</li>\n</ul>\n</li>\n<li>HTTP 缓存头部\n<ul>\n<li>强缓存和协商缓存通过缓存头部区分。常用的缓存头部有：If-None-Match/E-tag、If-Modified-Since/Last-Modified、Cache-Control/Max-Age、Pragma/Expires。</li>\n<li>属于强缓存控制的：\n<ul>\n<li>(http1.1)Cache-Control/Max-Age，Max-Age 不是一个头部，它是 Cache-Control 头部的值</li>\n<li>(http1.0)Pragma/Expires</li>\n</ul>\n</li>\n<li>属于协商缓存控制的：\n<ul>\n<li>(http1.1)If-None-Match/E-tag</li>\n<li>(http1.0)If-Modified-Since/Last-Modified</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>其实 HTML 页面中也有一个 meta 标签可以控制缓存方案 Pragma，不过，这种方案还是比较少用到，因为支持情况不佳，譬如缓存代理服务器肯定不支持，所以不推荐。<code>&lt;META HTTP-EQUIV=&quot;Pragma&quot; CONTENT=&quot;no-cache&quot;&gt;</code></li>\n</ul>\n<p>Max-Age 与 Expires</p>\n<ul>\n<li>Expires 使用的是服务器端的时间</li>\n<li>但是有时候会有这样一种情况-客户端时间和服务端不同步</li>\n<li>那这样，可能就会出问题了，造成了浏览器本地的缓存无用或者一直无法过期</li>\n<li>所以一般 HTTP 1.1 后不推荐使用 Expires</li>\n<li>而Max-Age使用的是客户端本地时间的计算，因此不会有这个问题</li>\n<li>因此推荐使用Max-Age</li>\n<li>注意，如果同时启用了 Cache-Control 与 Expires，Cache-Control 优先级高</li>\n</ul>\n<p>E-tag 与 Last-Modified</p>\n<ul>\n<li>Last-Modified：\n<ul>\n<li>表明服务端的文件最后何时改变的</li>\n<li>它有一个缺陷就是只能精确到 1s，</li>\n<li>然后还有一个问题就是有的服务端的文件会周期性的改变，导致缓存失效</li>\n</ul>\n</li>\n<li>E-tag：\n<ul>\n<li>是一种指纹机制，代表文件相关指纹</li>\n<li>只有文件变才会变，也只要文件变就会变，</li>\n<li>也没有精确时间的限制，只要文件一遍，立马 E-tag 就不一样了</li>\n</ul>\n</li>\n</ul>\n<p>HTTP 各版本缓存控制头部</p>\n<ul>\n<li>HTTP 1.0 中的缓存控制头部：\n<ul>\n<li><strong>Pragma</strong>：严格来说，它不属于专门的缓存控制头部，但是它设置 no-cache 时可以让本地强缓存失效(属于编译控制，来实现特定的指令，主要是因为兼容 HTTP1.0，所以以前又被大量应用)</li>\n<li><strong>Expires</strong>：服务端配置的，属于强缓存，用来控制在规定的时间之前，浏览器不会发出请求，而是直接使用本地缓存，注意，Expires 一般对应服务器端时间，如 Expires：Fri, 30 Oct 1998 14:19:41</li>\n<li><strong>If-Modified-Since/Last-Modified</strong>：这两个是成对出现的，属于协商缓存的内容，其中浏览器的头部是 If-Modified-Since，而服务端的是 Last-Modified，它的作用是，在发起请求时，如果 If-Modified-Since 和 Last-Modified 匹配，那么代表服务器资源并未改变，因此服务端不会返回资源实体，而是只返回头部，通知浏览器可以使用本地缓存。Last-Modified，顾名思义，指的是文件最后的修改时间，而且只能精确到 1s 以内</li>\n</ul>\n</li>\n<li>HTTP 1.1 中的缓存控制头部：\n<ul>\n<li><strong>Cache-Control</strong>：缓存控制头部，有 no-cache、max-age 等多种取值</li>\n<li><strong>Max-Age</strong>：服务端配置的，用来控制强缓存，在规定的时间之内，浏览器无需发出请求，直接使用本地缓存，注意，Max-Age是Cache-Control头部的值，不是独立的头部，譬如Cache-Control: max-age=3600，而且它值得是绝对时间，由浏览器自己计算</li>\n<li><strong>If-None-Match/E-tag</strong>：这两个是成对出现的，属于协商缓存的内容，其中浏览器的头部是 If-None-Match，而服务端的是 E-tag，同样，发出请求后，如果 If-None-Match 和 E-tag 匹配，则代表内容未变，通知浏览器使用本地缓存，和 Last-Modified 不同，E-tag 更精确，它是类似于指纹一样的东西，基于 FileEtag INode Mtime Size 生成，也就是说，只要文件变，指纹就会变，而且没有 1s 精确度的限制。</li>\n</ul>\n</li>\n</ul>\n<h2 id="tcpip-%E7%9A%84%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E4%B8%8E%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B">TCP/IP 的三次握手与四次挥手？<a class="anchor" href="#tcpip-%E7%9A%84%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E4%B8%8E%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B">§</a></h2>\n<ul>\n<li>三次握手\n<ul>\n<li>client：hello，你是 server 么？</li>\n<li>server：hello，我是 server，你是 client 么？</li>\n<li>client：yes，我是 client</li>\n</ul>\n</li>\n<li>四次挥手\n<ul>\n<li>主动方：我已经关闭向你那边的主动通道了，只能被动接受了</li>\n<li>被动方：收到通道关闭消息</li>\n<li>被动方：那我也告诉你，我这边向你的主动通道也关闭了</li>\n<li>主动方：最后收到数据，之后双方无法通信</li>\n</ul>\n</li>\n</ul>\n<h2 id="tcpip-%E7%9A%84%E9%95%BF%E8%BF%9E%E6%8E%A5%E5%92%8C%E7%9F%AD%E8%BF%9E%E6%8E%A5%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">TCP/IP 的长连接和短连接什么区别？<a class="anchor" href="#tcpip-%E7%9A%84%E9%95%BF%E8%BF%9E%E6%8E%A5%E5%92%8C%E7%9F%AD%E8%BF%9E%E6%8E%A5%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">§</a></h2>\n<blockquote>\n<p>Keep-Alive 不会永远保持，它有一个持续时间，一般在服务器中配置(如 Apache)，另外长连接需要客户端和服务器都支持时才有效</p>\n</blockquote>\n<ul>\n<li>TCP/IP 层面的定义：\n<ul>\n<li>长连接：一个 TCP/IP 连接上可以连续发送多个数据包，在 TCP 连接保持期间，如果没有数据包发送，需要双方发检测包以维持此连接，一般需要自己做在线维持(类似于心跳包)</li>\n<li>短连接：通信双方有数据交互时，就建立一个 TCP 连接，数据发送完成后，则断开此 TCP 连接</li>\n</ul>\n</li>\n<li>HTTP 层面的定义：\n<ul>\n<li>HTTP 1.0 中，默认使用的是短连接，也就是说，浏览器没进行一次 HTTP 操作，就建立一次连接，任务结束就中断连接，譬如每一个静态资源请求时都是一个单独的连接。</li>\n<li>HTTP 1.1 起，默认使用长连接，使用长连接会有这一行 <code>Connection: keep-alive</code>，在长连接的情况下，当一个网页打开完成后，客户端和服务端之间用于传输 HTTP 的 TCP 连接不会关闭，如果客户端再次访问这个服务器的页面，会继续使用这一条已经建立的连接。</li>\n</ul>\n</li>\n</ul>\n<h2 id="ipv4ipv6-%E6%98%AF%E4%BB%80%E4%B9%88%E5%A6%82%E4%BD%95%E5%88%86%E7%B1%BB">IPV4、IPV6 是什么，如何分类？<a class="anchor" href="#ipv4ipv6-%E6%98%AF%E4%BB%80%E4%B9%88%E5%A6%82%E4%BD%95%E5%88%86%E7%B1%BB">§</a></h2>\n<h2 id="dns-%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%9C%BA%E5%88%B6%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84">DNS 服务器的工作机制是怎样的？<a class="anchor" href="#dns-%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%9C%BA%E5%88%B6%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84">§</a></h2>\n<ul>\n<li>DNS 查询得到 IP 的过程：\n<ul>\n<li>如果浏览器有缓存、直接使用浏览器缓存，否则使用本机缓存，再没有的话就是用 host</li>\n<li>如果本地没有，就向 DNS 域名服务器查询，中间过程经过的路由可能也有缓存，查询得到对应的 IP</li>\n</ul>\n</li>\n<li>DNS 查询优化\n<ul>\n<li>解析域名过多时，会让首屏加载速度变得过慢，可以考虑 dns-prefetch 优化。</li>\n</ul>\n</li>\n</ul>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// gethostbyname 返回 IP 地址</span>\n<span class="token operator">&lt;</span>内存地址<span class="token operator">></span> <span class="token operator">=</span> <span class="token function">gethostbyname</span><span class="token punctuation">(</span><span class="token string">"要查询的服务器域名"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ngethostbyname <span class="token punctuation">{</span>\n    生成发送给 <span class="token constant">DNS</span> 服务器的查询信息<span class="token punctuation">;</span>\n    <span class="token comment">// 发送查询消息，需要委托给操作系统内部协议栈</span>\n    向 <span class="token constant">DNS</span> 服务器发送查询消息<span class="token punctuation">;</span>\n    接收 <span class="token constant">DNS</span> 服务器返回的响应消息<span class="token punctuation">;</span>\n    从响应消息中取出 <span class="token constant">IP</span> 地址，存放到 <span class="token operator">&lt;</span>内存地址中<span class="token operator">></span><span class="token punctuation">;</span>\n    返回应用程序<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<ul>\n<li>DNS 预解析：“Google Chrome 浏览器”等现代浏览器还采用了一种称为“DNS 预解析”的技术，可以更快地抓取和载入网页。通过 DNS 查找将网址转换为 IP 地址的过程称为“解析”，反之则称为“反向解析”。“Chrome 浏览器”会通过 DNS 预解析同时查找网页上的其他所有链接，并在后台将这些链接预解析为 IP 地址。因此，当您实际点击网页上的某个链接后，浏览器就能立即将您转到新的网页。</li>\n</ul>\n<h2 id="%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BE%93%E5%85%A5%E7%BD%91%E5%9D%80%E5%88%B0%E6%98%BE%E7%A4%BA%E9%A1%B5%E9%9D%A2%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88">浏览器输入网址到显示页面发生了什么？<a class="anchor" href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BE%93%E5%85%A5%E7%BD%91%E5%9D%80%E5%88%B0%E6%98%BE%E7%A4%BA%E9%A1%B5%E9%9D%A2%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88">§</a></h2>\n<ul>\n<li>\n<p>关键字</p>\n<ul>\n<li>level1: http、后台、浏览器渲染、js 引擎</li>\n<li>level2: http 报文通信、render 树构建流程、layout、paint、复合层与简单层、常用优化方案、JS引擎的变量提升、执行上下文、VO、AO、作用域链、回收机制、http 报文结构、缓存机制、http2.0、https、跨域与安全</li>\n<li>level3: 键盘输入、操作系统交互、屏幕显示原理、网卡等硬件交互、浏览器的多进程和浏览器内核的多县城、网络线程、dns 查询、tcp/ip 链接、五层因特尔协议栈、DNS 优化方案、负载均衡、安全拦截、http 场景头部、cookie、跨域、web 安全、http 缓存、http2..0、https、解析 HTML 词法分析成 DOM 树、解析 CSS 为 CSS 规则树、合并 render 树、layout/painting 渲染、复合层的合成、GPU 绘制、外链处理、加载顺序</li>\n<li>level4: 架构、整体把握、大型工程构建</li>\n</ul>\n</li>\n<li>\n<p>关键名词：Web 浏览器、TCP/IP、网卡驱动、集线器、路由器、接入网、电话局、网络运营商、电话局、接入网、防火墙、缓存服务器、网卡驱动、TCP/IP、Web 服务器程序</p>\n</li>\n<li>\n<p>一种思路</p>\n<ul>\n<li>从浏览器接收url到开启网络请求线程（这一部分可以展开浏览器的机制以及进程与线程之间的关系）</li>\n<li>开启网络线程到发出一个完整的http请求（这一部分涉及到dns查询，tcp/ip请求，五层因特网协议栈等知识）</li>\n<li>从服务器接收到请求到对应后台接收到请求（这一部分可能涉及到负载均衡，安全拦截以及后台内部的处理等等）</li>\n<li>后台和前台的http交互（这一部分包括http头部、响应码、报文结构、cookie等知识，可以提下静态资源的cookie优化，以及编码解码，如gzip压缩等）</li>\n<li>单独拎出来的缓存问题，http的缓存（这部分包括http缓存头部，etag，catch-control等）</li>\n<li>浏览器接收到http数据包后的解析流程（解析html-词法分析然后解析成dom树、解析css生成css规则树、合并成render树，然后layout、painting渲染、复合图层的合成、GPU绘制、外链资源的处理、loaded和domcontentloaded等）</li>\n<li>CSS的可视化格式模型（元素的渲染规则，如包含块，控制框，BFC，IFC等概念）</li>\n<li>JS引擎解析过程（JS的解释阶段，预处理阶段，执行阶段生成执行上下文，VO，作用域链、回收机制等等）</li>\n<li>其它（可以拓展不同的知识模块，如跨域，web安全，hybrid模式等等内容）</li>\n</ul>\n</li>\n<li>\n<p>当初始的 HTML 文档完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载。</p>\n</li>\n<li>\n<p>window 的 load 事件仅在 DOM 和所有相关资源全部完成加载后才会触发。</p>\n</li>\n</ul>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#url-%E5%92%8C-uri-%E6%98%AF%E4%BB%80%E4%B9%88">URL 和 URI 是什么？</a></li><li><a href="#http1--http3-%E7%9A%84%E6%96%B0%E7%89%B9%E6%80%A7">HTTP/1 ~ HTTP/3 的新特性？</a></li><li><a href="#https-%E6%98%AF%E4%BB%80%E4%B9%88">HTTPS 是什么？</a></li><li><a href="#http-%E7%9A%84%E4%B8%BB%E8%A6%81%E6%96%B9%E6%B3%95">HTTP 的主要方法？</a></li><li><a href="#http-%E6%8A%A5%E6%96%87%E7%BB%93%E6%9E%84%E4%B8%8E%E5%B8%B8%E8%A7%81%E5%AD%97%E6%AE%B5">HTTP 报文结构与常见字段？</a></li><li><a href="#%E5%B8%B8%E8%A7%81%E7%9A%84-http-%E7%8A%B6%E6%80%81%E7%A0%81%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">常见的 HTTP 状态码都有哪些？</a></li><li><a href="#http-%E7%9A%84%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84">HTTP 的缓存机制是怎样的？</a></li><li><a href="#tcpip-%E7%9A%84%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E4%B8%8E%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B">TCP/IP 的三次握手与四次挥手？</a></li><li><a href="#tcpip-%E7%9A%84%E9%95%BF%E8%BF%9E%E6%8E%A5%E5%92%8C%E7%9F%AD%E8%BF%9E%E6%8E%A5%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">TCP/IP 的长连接和短连接什么区别？</a></li><li><a href="#ipv4ipv6-%E6%98%AF%E4%BB%80%E4%B9%88%E5%A6%82%E4%BD%95%E5%88%86%E7%B1%BB">IPV4、IPV6 是什么，如何分类？</a></li><li><a href="#dns-%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%9C%BA%E5%88%B6%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84">DNS 服务器的工作机制是怎样的？</a></li><li><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BE%93%E5%85%A5%E7%BD%91%E5%9D%80%E5%88%B0%E6%98%BE%E7%A4%BA%E9%A1%B5%E9%9D%A2%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88">浏览器输入网址到显示页面发生了什么？</a></li></ol></nav>'
        } })
};
