import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "text": "编程语言",
        "link": "articles/01-Programming/00-language.html"
    },
    'next': {
        "text": "算法",
        "link": "articles/01-Programming/02-algorithms.html"
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
    'pagePath': "articles/01-Programming/01-operating-system.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/01-Programming/01-operating-system.html",
    'title': "操作系统",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>操作系统</h1>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E7%BA%BF%E7%A8%8B%E4%B8%8E%E8%BF%9B%E7%A8%8B">什么是线程与进程？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E7%BA%BF%E7%A8%8B%E4%B8%8E%E8%BF%9B%E7%A8%8B">§</a></h2>\n<ul>\n<li>进程是 CPU 资源分配的最小单位，是能拥有资源和独立运行的最小单位</li>\n<li>线程是 CPU 调度的最小单位，线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程</li>\n</ul>\n<ul>\n<li>进程\n<ul>\n<li>资源分配最小单位</li>\n<li>有自己的独立地址空间，系统会建立数据表来维护代码段、堆栈段和数据段</li>\n<li>进程间的通信需要以通信的方式（IPC）进行</li>\n<li>多进程程序更健壮</li>\n<li>同步：无名管道、有名管道、信号、共享内存、消息队列、信号量</li>\n<li>僵尸进程：子进程退出时父进程没有获取其最新状态的子进程（ps 命令的 defunct 京城状态）</li>\n<li>孤儿进程：父进程运行结束时子进程还在运行时</li>\n</ul>\n</li>\n<li>线程\n<ul>\n<li>程序执行的最小单位</li>\n<li>是共享中的数据，使用相同的地址空间（开销小）</li>\n<li>同一进程下的线程间共享全局变量、静态变量等数据</li>\n<li>多线程见需要处理好同步和互斥，否则一个线程死掉整个进程死掉</li>\n<li>同步：互斥量、读写锁、自旋锁、线程信号、条件变量</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF-cpu-%E5%92%8C-gpu">什么是 CPU 和 GPU？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-cpu-%E5%92%8C-gpu">§</a></h2>\n<ul>\n<li>CPU：每个核心可以处理多个任务</li>\n<li>GPU：图形处理，每个单元只能处理有限的任务，可以工作在多个核心之间</li>\n</ul>\n<h2 id="%E7%BA%BF%E7%A8%8B%E5%92%8C%E5%8D%8F%E7%A8%8B%E5%A6%82%E4%BD%95%E5%AF%B9%E6%AF%94">线程和协程如何对比？<a class="anchor" href="#%E7%BA%BF%E7%A8%8B%E5%92%8C%E5%8D%8F%E7%A8%8B%E5%A6%82%E4%BD%95%E5%AF%B9%E6%AF%94">§</a></h2>\n<ul>\n<li>在计算机科学中还有一个概念叫做 Fiber，英文含义就是“纤维”，意指比 Thread 更细的线，也就是比线程(Thread)控制得更精密的并发处理机制。</li>\n</ul>\n<h2 id="%E5%B9%B6%E8%A1%8C%E5%92%8C%E5%B9%B6%E5%8F%91%E7%9A%84%E6%9C%BA%E5%88%B6%E5%92%8C%E5%8C%BA%E5%88%AB">并行和并发的机制和区别？<a class="anchor" href="#%E5%B9%B6%E8%A1%8C%E5%92%8C%E5%B9%B6%E5%8F%91%E7%9A%84%E6%9C%BA%E5%88%B6%E5%92%8C%E5%8C%BA%E5%88%AB">§</a></h2>\n<ul>\n<li>并行可以是并发，而并发不一定是并行。并行一般需要物理层面的支持。</li>\n</ul>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E7%BA%BF%E7%A8%8B%E4%B8%8E%E8%BF%9B%E7%A8%8B">什么是线程与进程？</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF-cpu-%E5%92%8C-gpu">什么是 CPU 和 GPU？</a></li><li><a href="#%E7%BA%BF%E7%A8%8B%E5%92%8C%E5%8D%8F%E7%A8%8B%E5%A6%82%E4%BD%95%E5%AF%B9%E6%AF%94">线程和协程如何对比？</a></li><li><a href="#%E5%B9%B6%E8%A1%8C%E5%92%8C%E5%B9%B6%E5%8F%91%E7%9A%84%E6%9C%BA%E5%88%B6%E5%92%8C%E5%8C%BA%E5%88%AB">并行和并发的机制和区别？</a></li></ol></nav>'
        } })
};
