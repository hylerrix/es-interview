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
    'pagePath': "articles/04-Network+API/00-network.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/04-Network+API/00-network.html",
    'title': "网络",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>网络</h1>\n<ul>\n<li>输入网站发生了什么？\n<ul>\n<li>TCP/IP 模型？HTTP 请求/响应体，响应码</li>\n<li>GET、POST、预检请求 OPTIONS、...</li>\n</ul>\n</li>\n<li>HTTP 缓存\n<ul>\n<li>强缓存、协商缓存</li>\n</ul>\n</li>\n<li>同源策略/跨域</li>\n<li>HTTP1.0、HTTP1.1 和 HTTP2.0</li>\n<li>HTTP 方法，302、304</li>\n<li>HTTPS</li>\n<li>CDN</li>\n<li>三次握手、四次挥手</li>\n</ul>\n<blockquote>\n<p>TCP 和 UDP</p>\n</blockquote>\n<ul>\n<li>\n<p>TCP</p>\n</li>\n<li>\n<ul>\n<li>面向连接</li>\n<li>每条连接一对一</li>\n<li>提供可靠的交付服务</li>\n<li>全双工通信</li>\n<li>面向字节流</li>\n</ul>\n</li>\n<li>\n<p>UDP</p>\n</li>\n<li>\n<ul>\n<li>无连接</li>\n<li>不保证可靠交付</li>\n<li>面向报文</li>\n<li>无拥塞控制</li>\n<li>支持一对一、一对多、多对一和多对多的交互通信</li>\n<li>首部开销小：只有四个字段，源端口、目的端口、长度、校验和</li>\n</ul>\n</li>\n</ul>\n<blockquote>\n<p>GET 和 POST 区别</p>\n</blockquote>\n<p>GET在浏览器回退时是无害的，而POST会再次提交请求。</p>\n<p>GET产生的URL地址可以被Bookmark，而POST不可以。</p>\n<p>GET请求会被浏览器主动cache，而POST不会，除非手动设置。</p>\n<p>GET请求只能进行url编码，而POST支持多种编码方式。</p>\n<p>GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。</p>\n<p>GET请求在URL中传送的参数是有长度限制的，而POST么有。</p>\n<p>对参数的数据类型，GET只接受ASCII字符，而POST没有限制。</p>\n<p>GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。</p>\n<p>GET参数通过URL传递，POST放在Request body中。</p>\n<blockquote>\n<p>HTTPS</p>\n</blockquote>\n<ul>\n<li>\n<p>HTTPS = HTTP + SSL(安全套接字, 传输层)</p>\n</li>\n<li>\n<ul>\n<li>443 端口</li>\n<li>加密：公钥（非对称加密算法）和秘钥（对称加密算法）</li>\n<li>HASH 算法用来确认信息没有被篡改，来生成签名</li>\n<li>数字证书：包含证书发布机构、有效期、公钥、证书所有者、签名使用的算法</li>\n<li>数字签名：只存在于验证阶段</li>\n<li>证书链：证书是分级的，拿到上级证书的公钥才能解密本级证书</li>\n<li>验证流程</li>\n</ul>\n</li>\n<li>\n<ul>\n<li>\n<ul>\n<li>客户端发 HTTP 请求，连接到服务器的 443 端口</li>\n<li>服务端把自己的信息以数字证书的形式返回给客户端（证书内容有密钥公钥，网站地址，证书颁发机构，失效日期等）。证书中有一个公钥来加密信息，私钥由服务器持有。</li>\n<li>验证证书的合法性：客户端收到服务器的响应后会先验证证书的合法性（证书中包含的地址与正在访问的地址是否一致，证书是否过期）。</li>\n<li>生成随机密码（RSA签名）：如果验证通过，或用户接受了不受信任的证书，浏览器就会生成一个随机的对称密钥（session key）并用公钥加密，让服务端用私钥解密，解密后就用这个对称密钥进行传输了，并且能够说明服务端确实是私钥的持有者。</li>\n<li>互相用这个对称加密算法来加密和解密通信内容</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': null
};
