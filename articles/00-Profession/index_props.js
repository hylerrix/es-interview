import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "text": "前端大事记",
        "link": "articles/es-timeline.html"
    },
    'next': {
        "link": "articles/01-Programming/index.html",
        "text": "编程基础"
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
    'pagePath': "articles/00-Profession/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/00-Profession/index.html",
    'title': "职业 & 成长",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>职业 &amp; 成长</h1>\n<blockquote>\n<p>JavaScript 不限技术方向，但这里先重点编写“前端方向”的职业发展道路。</p>\n</blockquote>\n<h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E5%AD%A6%E4%B9%A0%E5%89%8D%E7%AB%AF%E5%AF%B9%E5%89%8D%E7%AB%AF%E6%9C%89%E4%BB%80%E4%B9%88%E7%9C%8B%E6%B3%95">为什么学习前端？对前端有什么看法？<a class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E5%AD%A6%E4%B9%A0%E5%89%8D%E7%AB%AF%E5%AF%B9%E5%89%8D%E7%AB%AF%E6%9C%89%E4%BB%80%E4%B9%88%E7%9C%8B%E6%B3%95">§</a></h2>\n<h2 id="%E5%B9%B3%E6%97%B6%E6%98%AF%E6%80%8E%E4%B9%88%E5%AD%A6%E4%B9%A0%E7%9A%84">平时是怎么学习的？<a class="anchor" href="#%E5%B9%B3%E6%97%B6%E6%98%AF%E6%80%8E%E4%B9%88%E5%AD%A6%E4%B9%A0%E7%9A%84">§</a></h2>\n<h2 id="%E5%85%AC%E5%8F%B8%E5%81%9A%E4%BA%86%E5%93%AA%E4%BA%9B%E9%A1%B9%E7%9B%AE%E9%9A%BE%E7%82%B9%E6%98%AF%E6%80%8E%E4%B9%88%E5%85%8B%E6%9C%8D%E7%9A%84%E6%80%BB%E7%BB%93">公司做了哪些项目？难点是怎么克服的？总结？<a class="anchor" href="#%E5%85%AC%E5%8F%B8%E5%81%9A%E4%BA%86%E5%93%AA%E4%BA%9B%E9%A1%B9%E7%9B%AE%E9%9A%BE%E7%82%B9%E6%98%AF%E6%80%8E%E4%B9%88%E5%85%8B%E6%9C%8D%E7%9A%84%E6%80%BB%E7%BB%93">§</a></h2>\n<h2 id="%E4%BD%A0%E5%AF%B9%E6%9C%AA%E6%9D%A5%E7%9A%84%E8%81%8C%E4%B8%9A%E5%8F%91%E5%B1%95%E6%9C%89%E4%BB%80%E4%B9%88%E6%83%B3%E6%B3%95">你对未来的职业发展有什么想法？<a class="anchor" href="#%E4%BD%A0%E5%AF%B9%E6%9C%AA%E6%9D%A5%E7%9A%84%E8%81%8C%E4%B8%9A%E5%8F%91%E5%B1%95%E6%9C%89%E4%BB%80%E4%B9%88%E6%83%B3%E6%B3%95">§</a></h2>\n<p>初级前端：</p>\n<p>高级前端：</p>\n<p>资深前端：</p>\n<p>前端架构师：</p>\n<h2 id="%E5%BC%80%E6%BA%90%E8%B4%A1%E7%8C%AE%E5%92%8C%E6%94%B6%E8%8E%B7">开源贡献和收获？<a class="anchor" href="#%E5%BC%80%E6%BA%90%E8%B4%A1%E7%8C%AE%E5%92%8C%E6%94%B6%E8%8E%B7">§</a></h2>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E5%AD%A6%E4%B9%A0%E5%89%8D%E7%AB%AF%E5%AF%B9%E5%89%8D%E7%AB%AF%E6%9C%89%E4%BB%80%E4%B9%88%E7%9C%8B%E6%B3%95">为什么学习前端？对前端有什么看法？</a></li><li><a href="#%E5%B9%B3%E6%97%B6%E6%98%AF%E6%80%8E%E4%B9%88%E5%AD%A6%E4%B9%A0%E7%9A%84">平时是怎么学习的？</a></li><li><a href="#%E5%85%AC%E5%8F%B8%E5%81%9A%E4%BA%86%E5%93%AA%E4%BA%9B%E9%A1%B9%E7%9B%AE%E9%9A%BE%E7%82%B9%E6%98%AF%E6%80%8E%E4%B9%88%E5%85%8B%E6%9C%8D%E7%9A%84%E6%80%BB%E7%BB%93">公司做了哪些项目？难点是怎么克服的？总结？</a></li><li><a href="#%E4%BD%A0%E5%AF%B9%E6%9C%AA%E6%9D%A5%E7%9A%84%E8%81%8C%E4%B8%9A%E5%8F%91%E5%B1%95%E6%9C%89%E4%BB%80%E4%B9%88%E6%83%B3%E6%B3%95">你对未来的职业发展有什么想法？</a></li><li><a href="#%E5%BC%80%E6%BA%90%E8%B4%A1%E7%8C%AE%E5%92%8C%E6%94%B6%E8%8E%B7">开源贡献和收获？</a></li></ol></nav>'
        } })
};
