import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "title": "编程语言",
        "link": "articles/01-Programming/00-language.html"
    },
    'next': {
        "title": "算法",
        "link": "articles/01-Programming/02-algorithms.html"
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
    'pagePath': "articles/01-Programming/01-operating-system.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/01-Programming/01-operating-system.html",
    'title': "操作系统",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>操作系统</h1>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E7%BA%BF%E7%A8%8B%E4%B8%8E%E8%BF%9B%E7%A8%8B">什么是线程与进程？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E7%BA%BF%E7%A8%8B%E4%B8%8E%E8%BF%9B%E7%A8%8B">§</a></h2>\n<ul>\n<li>进程是 CPU 资源分配的最小单位，是能拥有资源和独立运行的最小单位</li>\n<li>线程是 CPU 调度的最小单位，线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程</li>\n</ul>\n<ul>\n<li>进程\n<ul>\n<li>资源分配最小单位</li>\n<li>有自己的独立地址空间，系统会建立数据表来维护代码段、堆栈段和数据段</li>\n<li>进程间的通信需要以通信的方式（IPC）进行</li>\n<li>多进程程序更健壮</li>\n<li>同步：无名管道、有名管道、信号、共享内存、消息队列、信号量</li>\n<li>僵尸进程：子进程退出时父进程没有获取其最新状态的子进程（ps 命令的 defunct 京城状态）</li>\n<li>孤儿进程：父进程运行结束时子进程还在运行时</li>\n</ul>\n</li>\n<li>线程\n<ul>\n<li>程序执行的最小单位</li>\n<li>是共享中的数据，使用相同的地址空间（开销小）</li>\n<li>同一进程下的线程间共享全局变量、静态变量等数据</li>\n<li>多线程见需要处理好同步和互斥，否则一个线程死掉整个进程死掉</li>\n<li>同步：互斥量、读写锁、自旋锁、线程信号、条件变量</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E8%BF%9B%E7%A8%8B%E9%80%9A%E4%BF%A1%E7%9A%84%E5%85%B7%E4%BD%93%E6%96%B9%E5%BC%8F%E6%9C%89%E5%93%AA%E4%BA%9B">进程通信的具体方式有哪些？<a class="anchor" href="#%E8%BF%9B%E7%A8%8B%E9%80%9A%E4%BF%A1%E7%9A%84%E5%85%B7%E4%BD%93%E6%96%B9%E5%BC%8F%E6%9C%89%E5%93%AA%E4%BA%9B">§</a></h2>\n<ul>\n<li>管道通信</li>\n<li>信号及信号量通信</li>\n<li>共享内存</li>\n<li>socket</li>\n</ul>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF-cpu-%E5%92%8C-gpu">什么是 CPU 和 GPU？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-cpu-%E5%92%8C-gpu">§</a></h2>\n<ul>\n<li>CPU：每个核心可以处理多个任务</li>\n<li>GPU：图形处理，每个单元只能处理有限的任务，可以工作在多个核心之间</li>\n</ul>\n<h2 id="%E7%BA%BF%E7%A8%8B%E5%92%8C%E5%8D%8F%E7%A8%8B%E5%A6%82%E4%BD%95%E5%AF%B9%E6%AF%94">线程和协程如何对比？<a class="anchor" href="#%E7%BA%BF%E7%A8%8B%E5%92%8C%E5%8D%8F%E7%A8%8B%E5%A6%82%E4%BD%95%E5%AF%B9%E6%AF%94">§</a></h2>\n<ul>\n<li>在计算机科学中还有一个概念叫做 Fiber，英文含义就是“纤维”，意指比 Thread 更细的线，也就是比线程(Thread)控制得更精密的并发处理机制。</li>\n</ul>\n<h2 id="%E5%B9%B6%E8%A1%8C%E5%92%8C%E5%B9%B6%E5%8F%91%E7%9A%84%E6%9C%BA%E5%88%B6%E5%92%8C%E5%8C%BA%E5%88%AB">并行和并发的机制和区别？<a class="anchor" href="#%E5%B9%B6%E8%A1%8C%E5%92%8C%E5%B9%B6%E5%8F%91%E7%9A%84%E6%9C%BA%E5%88%B6%E5%92%8C%E5%8C%BA%E5%88%AB">§</a></h2>\n<ul>\n<li>并行可以是并发，而并发不一定是并行。并行一般需要物理层面的支持。</li>\n</ul>\n<h2 id="bsd-unix-%E7%9A%84%E8%BF%9B%E7%A8%8B%E9%80%9A%E4%BF%A1%E6%9C%BA%E5%88%B6">BSD UNIX 的进程通信机制？<a class="anchor" href="#bsd-unix-%E7%9A%84%E8%BF%9B%E7%A8%8B%E9%80%9A%E4%BF%A1%E6%9C%BA%E5%88%B6">§</a></h2>\n<blockquote>\n<p>Socket的英文原义是“孔”或“插座”。作为BSD UNIX的<a href="https://baike.baidu.com/item/%E8%BF%9B%E7%A8%8B%E9%80%9A%E4%BF%A1">进程通信</a>机制，取后一种意思。通常也称作&quot;<a href="https://baike.baidu.com/item/%E5%A5%97%E6%8E%A5%E5%AD%97">套接字</a>&quot;，用于描述IP地址和端口，是一个通信链的句柄，可以用来实现不同虚拟机或不同计算机之间的通信。在Internet上的<a href="https://baike.baidu.com/item/%E4%B8%BB%E6%9C%BA">主机</a>一般运行了多个服务软件，同时提供几种服务。每种服务都打开一个Socket，并绑定到一个端口上，不同的端口对应于不同的服务。Socket正如其英文原义那样，像一个多孔插座。一台主机犹如布满各种插座的房间，每个插座有一个编号，有的插座提供220伏交流电， 有的提供110伏交流电，有的则提供有线电视节目。 客户软件将插头插到不同编号的插座，就可以得到不同的服务。—— <a href="https://baike.baidu.com/item/socket/281150">百度百科</a></p>\n</blockquote>\n<ul>\n<li>Socket API 原本是为网络通讯设计的，但后来在 socket 的框架上发展出一种 IPC （Inter-Process Communication）机制，就是 UNIX Domain Socket 也称为本地域。虽然网络 socket 也可用于同一台主机的进程间通讯（通过loopback地址127.0.0.1），但是 UNIX Domain Socket 用于 IPC 更有效率：<strong>不需要经过网络协议栈，不需要打包拆包、计算校验和、维护序号和应答等，只是将应用层数据从一个进程拷贝到另一个进程</strong>。这是因为，IPC 机制本质上是可靠的通讯，而网络协议是为不可靠的通讯设计的。UNIX Domain Socket 也提供面向流和面向数据包两种 API 接口，类似于 TCP 和 UDP，但是面向消息的 UNIX Domain Socket 也是可靠的，消息既不会丢失也不会顺序错乱。</li>\n<li></li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E5%8C%BA%E5%88%86%E7%94%A8%E6%88%B7%E6%80%81%E5%92%8C%E5%86%85%E6%A0%B8%E6%80%81">如何区分用户态和内核态？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E5%8C%BA%E5%88%86%E7%94%A8%E6%88%B7%E6%80%81%E5%92%8C%E5%86%85%E6%A0%B8%E6%80%81">§</a></h2>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-169223577-1" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u64CD\u4F5C\u7CFB\u7EDF"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E7%BA%BF%E7%A8%8B%E4%B8%8E%E8%BF%9B%E7%A8%8B">什么是线程与进程？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E7%BA%BF%E7%A8%8B%E4%B8%8E%E8%BF%9B%E7%A8%8B">§</a></h2>\n<ul>\n<li>进程是 CPU 资源分配的最小单位，是能拥有资源和独立运行的最小单位</li>\n<li>线程是 CPU 调度的最小单位，线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程</li>\n</ul>\n<ul>\n<li>进程\n<ul>\n<li>资源分配最小单位</li>\n<li>有自己的独立地址空间，系统会建立数据表来维护代码段、堆栈段和数据段</li>\n<li>进程间的通信需要以通信的方式（IPC）进行</li>\n<li>多进程程序更健壮</li>\n<li>同步：无名管道、有名管道、信号、共享内存、消息队列、信号量</li>\n<li>僵尸进程：子进程退出时父进程没有获取其最新状态的子进程（ps 命令的 defunct 京城状态）</li>\n<li>孤儿进程：父进程运行结束时子进程还在运行时</li>\n</ul>\n</li>\n<li>线程\n<ul>\n<li>程序执行的最小单位</li>\n<li>是共享中的数据，使用相同的地址空间（开销小）</li>\n<li>同一进程下的线程间共享全局变量、静态变量等数据</li>\n<li>多线程见需要处理好同步和互斥，否则一个线程死掉整个进程死掉</li>\n<li>同步：互斥量、读写锁、自旋锁、线程信号、条件变量</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E8%BF%9B%E7%A8%8B%E9%80%9A%E4%BF%A1%E7%9A%84%E5%85%B7%E4%BD%93%E6%96%B9%E5%BC%8F%E6%9C%89%E5%93%AA%E4%BA%9B">进程通信的具体方式有哪些？<a class="anchor" href="#%E8%BF%9B%E7%A8%8B%E9%80%9A%E4%BF%A1%E7%9A%84%E5%85%B7%E4%BD%93%E6%96%B9%E5%BC%8F%E6%9C%89%E5%93%AA%E4%BA%9B">§</a></h2>\n<ul>\n<li>管道通信</li>\n<li>信号及信号量通信</li>\n<li>共享内存</li>\n<li>socket</li>\n</ul>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF-cpu-%E5%92%8C-gpu">什么是 CPU 和 GPU？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-cpu-%E5%92%8C-gpu">§</a></h2>\n<ul>\n<li>CPU：每个核心可以处理多个任务</li>\n<li>GPU：图形处理，每个单元只能处理有限的任务，可以工作在多个核心之间</li>\n</ul>\n<h2 id="%E7%BA%BF%E7%A8%8B%E5%92%8C%E5%8D%8F%E7%A8%8B%E5%A6%82%E4%BD%95%E5%AF%B9%E6%AF%94">线程和协程如何对比？<a class="anchor" href="#%E7%BA%BF%E7%A8%8B%E5%92%8C%E5%8D%8F%E7%A8%8B%E5%A6%82%E4%BD%95%E5%AF%B9%E6%AF%94">§</a></h2>\n<ul>\n<li>在计算机科学中还有一个概念叫做 Fiber，英文含义就是“纤维”，意指比 Thread 更细的线，也就是比线程(Thread)控制得更精密的并发处理机制。</li>\n</ul>\n<h2 id="%E5%B9%B6%E8%A1%8C%E5%92%8C%E5%B9%B6%E5%8F%91%E7%9A%84%E6%9C%BA%E5%88%B6%E5%92%8C%E5%8C%BA%E5%88%AB">并行和并发的机制和区别？<a class="anchor" href="#%E5%B9%B6%E8%A1%8C%E5%92%8C%E5%B9%B6%E5%8F%91%E7%9A%84%E6%9C%BA%E5%88%B6%E5%92%8C%E5%8C%BA%E5%88%AB">§</a></h2>\n<ul>\n<li>并行可以是并发，而并发不一定是并行。并行一般需要物理层面的支持。</li>\n</ul>\n<h2 id="bsd-unix-%E7%9A%84%E8%BF%9B%E7%A8%8B%E9%80%9A%E4%BF%A1%E6%9C%BA%E5%88%B6">BSD UNIX 的进程通信机制？<a class="anchor" href="#bsd-unix-%E7%9A%84%E8%BF%9B%E7%A8%8B%E9%80%9A%E4%BF%A1%E6%9C%BA%E5%88%B6">§</a></h2>\n<blockquote>\n<p>Socket的英文原义是“孔”或“插座”。作为BSD UNIX的<a href="https://baike.baidu.com/item/%E8%BF%9B%E7%A8%8B%E9%80%9A%E4%BF%A1">进程通信</a>机制，取后一种意思。通常也称作&quot;<a href="https://baike.baidu.com/item/%E5%A5%97%E6%8E%A5%E5%AD%97">套接字</a>&quot;，用于描述IP地址和端口，是一个通信链的句柄，可以用来实现不同虚拟机或不同计算机之间的通信。在Internet上的<a href="https://baike.baidu.com/item/%E4%B8%BB%E6%9C%BA">主机</a>一般运行了多个服务软件，同时提供几种服务。每种服务都打开一个Socket，并绑定到一个端口上，不同的端口对应于不同的服务。Socket正如其英文原义那样，像一个多孔插座。一台主机犹如布满各种插座的房间，每个插座有一个编号，有的插座提供220伏交流电， 有的提供110伏交流电，有的则提供有线电视节目。 客户软件将插头插到不同编号的插座，就可以得到不同的服务。—— <a href="https://baike.baidu.com/item/socket/281150">百度百科</a></p>\n</blockquote>\n<ul>\n<li>Socket API 原本是为网络通讯设计的，但后来在 socket 的框架上发展出一种 IPC （Inter-Process Communication）机制，就是 UNIX Domain Socket 也称为本地域。虽然网络 socket 也可用于同一台主机的进程间通讯（通过loopback地址127.0.0.1），但是 UNIX Domain Socket 用于 IPC 更有效率：<strong>不需要经过网络协议栈，不需要打包拆包、计算校验和、维护序号和应答等，只是将应用层数据从一个进程拷贝到另一个进程</strong>。这是因为，IPC 机制本质上是可靠的通讯，而网络协议是为不可靠的通讯设计的。UNIX Domain Socket 也提供面向流和面向数据包两种 API 接口，类似于 TCP 和 UDP，但是面向消息的 UNIX Domain Socket 也是可靠的，消息既不会丢失也不会顺序错乱。</li>\n<li></li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E5%8C%BA%E5%88%86%E7%94%A8%E6%88%B7%E6%80%81%E5%92%8C%E5%86%85%E6%A0%B8%E6%80%81">如何区分用户态和内核态？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E5%8C%BA%E5%88%86%E7%94%A8%E6%88%B7%E6%80%81%E5%92%8C%E5%86%85%E6%A0%B8%E6%80%81">§</a></h2>'
        } }),
    'contentHasKatex': false,
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E7%BA%BF%E7%A8%8B%E4%B8%8E%E8%BF%9B%E7%A8%8B">什么是线程与进程？</a></li><li><a href="#%E8%BF%9B%E7%A8%8B%E9%80%9A%E4%BF%A1%E7%9A%84%E5%85%B7%E4%BD%93%E6%96%B9%E5%BC%8F%E6%9C%89%E5%93%AA%E4%BA%9B">进程通信的具体方式有哪些？</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF-cpu-%E5%92%8C-gpu">什么是 CPU 和 GPU？</a></li><li><a href="#%E7%BA%BF%E7%A8%8B%E5%92%8C%E5%8D%8F%E7%A8%8B%E5%A6%82%E4%BD%95%E5%AF%B9%E6%AF%94">线程和协程如何对比？</a></li><li><a href="#%E5%B9%B6%E8%A1%8C%E5%92%8C%E5%B9%B6%E5%8F%91%E7%9A%84%E6%9C%BA%E5%88%B6%E5%92%8C%E5%8C%BA%E5%88%AB">并行和并发的机制和区别？</a></li><li><a href="#bsd-unix-%E7%9A%84%E8%BF%9B%E7%A8%8B%E9%80%9A%E4%BF%A1%E6%9C%BA%E5%88%B6">BSD UNIX 的进程通信机制？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E5%8C%BA%E5%88%86%E7%94%A8%E6%88%B7%E6%80%81%E5%92%8C%E5%86%85%E6%A0%B8%E6%80%81">如何区分用户态和内核态？</a></li></ol></nav>'
        } }),
    'date': "2020-10-25T07:04:16.000Z",
    'updated': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ]
};
