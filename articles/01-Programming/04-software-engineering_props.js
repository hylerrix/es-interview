import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "title": "设计模式",
        "link": "articles/01-Programming/03-design-patterns.html"
    },
    'next': {
        "title": "测试",
        "link": "articles/01-Programming/05-software-test.html"
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
    'pagePath': "articles/01-Programming/04-software-engineering.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/01-Programming/04-software-engineering.html",
    'title': "软件工程",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>软件工程</h1>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-cicd">如何理解 CI/CD？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-cicd">§</a></h2>\n<blockquote>\n<p><a href="https://www.redhat.com/zh/topics/devops/what-is-ci-cd">https://www.redhat.com/zh/topics/devops/what-is-ci-cd</a></p>\n<p><a href="http://ruanyifeng.com/blog/2015/09/continuous-integration.html">ruanyifeng.com/blog/2015/09/continuous-integration.html</a></p>\n</blockquote>\n<ul>\n<li>\n<p>CI/CD 是一种通过在应用开发阶段引入自动化来频繁向客户交付应用的方法。CI/CD 的核心概念是持续集成、持续交付和持续部署。作为一个面向开发和运营团队的解决方案，CI/CD 主要针对在集成新代码时所引发的问题（亦称：“集成地狱”）。</p>\n</li>\n<li>\n<p>持续集成：频繁地将多个分支的代码集成到主干分支。集成前必须全部通过自动化测试。</p>\n<ul>\n<li>特点\n<ul>\n<li>构建 &gt; 单元测试。</li>\n<li>快速发现错误。每完成一点更新，就集成到主干，可以快速发现错误，定位错误也比较容易。</li>\n<li>防止分支大幅偏离主干。如果不是经常集成，主干又在不断更新，会导致以后集成的难度变大，甚至难以集成。</li>\n</ul>\n</li>\n<li>现代应用开发的目标是让多位开发人员同时处理同一应用的不同功能。但是，如果企业安排在一天内将所有分支源代码合并在一起（称为“合并日”），最终可能造成工作繁琐、耗时，而且需要手动完成。这是因为当一位独立工作的开发人员对应用进行更改时，有可能会与其他开发人员同时进行的更改发生冲突。如果每个开发人员都自定义自己的本地集成开发环境（IDE），而不是让团队就一个基于云的 IDE 达成一致，那么就会让问题更加雪上加霜。</li>\n<li>持续集成（CI）可以帮助开发人员更加频繁地（有时甚至每天）将代码更改合并到共享分支或“主干”中。一旦开发人员对应用所做的更改被合并，系统就会通过自动构建应用并运行不同级别的自动化测试（通常是单元测试和集成测试）来验证这些更改，确保这些更改没有对应用造成破坏。这意味着测试内容涵盖了从类和函数到构成整个应用的不同模块。如果自动化测试发现新代码和现有代码之间存在冲突，CI 可以更加轻松地快速修复这些错误。</li>\n</ul>\n</li>\n<li>\n<p>持续交付：频繁地将软件的新版本交付给质量团队或者用户，以供评审。</p>\n<ul>\n<li>构建 &gt; 单元测试 &gt; 测试环境部署 &gt; 测试（不涉及生产环境的自动化部署，只能手动部署）。</li>\n<li>完成 CI 中构建及单元测试和集成测试的自动化流程后，持续交付可自动将已验证的代码发布到存储库。为了实现高效的持续交付流程，务必要确保 CI 已内置于开发管道。持续交付的目标是拥有一个可随时部署到生产环境的代码库。</li>\n<li>在持续交付中，每个阶段（从代码更改的合并，到生产就绪型构建版本的交付）都涉及测试自动化和代码发布自动化。在流程结束时，运维团队可以快速、轻松地将应用部署到生产环境中。</li>\n</ul>\n</li>\n<li>\n<p>持续部署：代码通过评审以后，自动部署到生产环境。</p>\n<ul>\n<li>构建 &gt; 单元测试 &gt; 测试环境部署 &gt; 测试 &gt; 生产环境部署 &gt; 生产环境测试（全流程自动化）。</li>\n<li>相比持续交付，多一步自动化部署生产环境。</li>\n<li>对于一个成熟的 CI/CD 管道来说，最后的阶段是持续部署。作为持续交付——自动将生产就绪型构建版本发布到代码存储库——的延伸，持续部署可以自动将应用发布到生产环境。由于在生产之前的管道阶段没有手动门控，因此持续部署在很大程度上都得依赖精心设计的测试自动化。</li>\n<li>实际上，持续部署意味着开发人员对应用的更改在编写后的几分钟内就能生效（假设它通过了自动化测试）。这更加便于持续接收和整合用户反馈。总而言之，所有这些 CI/CD 的关联步骤都有助于降低应用的部署风险，因此更便于以小件的方式（而非一次性）发布对应用的更改。不过，由于还需要编写自动化测试以适应 CI/CD 管道中的各种测试和发布阶段，因此前期投资还是会很大。</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0-cicd">如何实现 CI/CD？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0-cicd">§</a></h2>\n<ul>\n<li><a href="https://www.jenkins.io/">Jenkins</a></li>\n<li><a href="https://travis-ci.com/">Travis</a></li>\n<li><a href="https://www.codeship.io/">Codeship</a></li>\n<li><a href="http://stridercd.com/">Strider</a></li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95%E7%AB%AF%E5%AF%B9%E7%AB%AF%E6%B5%8B%E8%AF%95">如何理解单元测试/集成测试/端对端测试？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95%E7%AB%AF%E5%AF%B9%E7%AB%AF%E6%B5%8B%E8%AF%95">§</a></h2>\n<ul>\n<li>单元测试：针对函数或模块的测试</li>\n<li>集成测试：针对整体产品的某个功能的测试，又称功能测试</li>\n<li>端对端测试：从用户界面直达数据库的全链路测试</li>\n</ul>\n<h2 id="docker-%E6%98%AF%E4%BB%80%E4%B9%88">Docker 是什么？<a class="anchor" href="#docker-%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h2>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-169223577-1" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u8F6F\u4EF6\u5DE5\u7A0B"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-cicd">如何理解 CI/CD？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-cicd">§</a></h2>\n<blockquote>\n<p><a href="https://www.redhat.com/zh/topics/devops/what-is-ci-cd">https://www.redhat.com/zh/topics/devops/what-is-ci-cd</a></p>\n<p><a href="http://ruanyifeng.com/blog/2015/09/continuous-integration.html">ruanyifeng.com/blog/2015/09/continuous-integration.html</a></p>\n</blockquote>\n<ul>\n<li>\n<p>CI/CD 是一种通过在应用开发阶段引入自动化来频繁向客户交付应用的方法。CI/CD 的核心概念是持续集成、持续交付和持续部署。作为一个面向开发和运营团队的解决方案，CI/CD 主要针对在集成新代码时所引发的问题（亦称：“集成地狱”）。</p>\n</li>\n<li>\n<p>持续集成：频繁地将多个分支的代码集成到主干分支。集成前必须全部通过自动化测试。</p>\n<ul>\n<li>特点\n<ul>\n<li>构建 &gt; 单元测试。</li>\n<li>快速发现错误。每完成一点更新，就集成到主干，可以快速发现错误，定位错误也比较容易。</li>\n<li>防止分支大幅偏离主干。如果不是经常集成，主干又在不断更新，会导致以后集成的难度变大，甚至难以集成。</li>\n</ul>\n</li>\n<li>现代应用开发的目标是让多位开发人员同时处理同一应用的不同功能。但是，如果企业安排在一天内将所有分支源代码合并在一起（称为“合并日”），最终可能造成工作繁琐、耗时，而且需要手动完成。这是因为当一位独立工作的开发人员对应用进行更改时，有可能会与其他开发人员同时进行的更改发生冲突。如果每个开发人员都自定义自己的本地集成开发环境（IDE），而不是让团队就一个基于云的 IDE 达成一致，那么就会让问题更加雪上加霜。</li>\n<li>持续集成（CI）可以帮助开发人员更加频繁地（有时甚至每天）将代码更改合并到共享分支或“主干”中。一旦开发人员对应用所做的更改被合并，系统就会通过自动构建应用并运行不同级别的自动化测试（通常是单元测试和集成测试）来验证这些更改，确保这些更改没有对应用造成破坏。这意味着测试内容涵盖了从类和函数到构成整个应用的不同模块。如果自动化测试发现新代码和现有代码之间存在冲突，CI 可以更加轻松地快速修复这些错误。</li>\n</ul>\n</li>\n<li>\n<p>持续交付：频繁地将软件的新版本交付给质量团队或者用户，以供评审。</p>\n<ul>\n<li>构建 &gt; 单元测试 &gt; 测试环境部署 &gt; 测试（不涉及生产环境的自动化部署，只能手动部署）。</li>\n<li>完成 CI 中构建及单元测试和集成测试的自动化流程后，持续交付可自动将已验证的代码发布到存储库。为了实现高效的持续交付流程，务必要确保 CI 已内置于开发管道。持续交付的目标是拥有一个可随时部署到生产环境的代码库。</li>\n<li>在持续交付中，每个阶段（从代码更改的合并，到生产就绪型构建版本的交付）都涉及测试自动化和代码发布自动化。在流程结束时，运维团队可以快速、轻松地将应用部署到生产环境中。</li>\n</ul>\n</li>\n<li>\n<p>持续部署：代码通过评审以后，自动部署到生产环境。</p>\n<ul>\n<li>构建 &gt; 单元测试 &gt; 测试环境部署 &gt; 测试 &gt; 生产环境部署 &gt; 生产环境测试（全流程自动化）。</li>\n<li>相比持续交付，多一步自动化部署生产环境。</li>\n<li>对于一个成熟的 CI/CD 管道来说，最后的阶段是持续部署。作为持续交付——自动将生产就绪型构建版本发布到代码存储库——的延伸，持续部署可以自动将应用发布到生产环境。由于在生产之前的管道阶段没有手动门控，因此持续部署在很大程度上都得依赖精心设计的测试自动化。</li>\n<li>实际上，持续部署意味着开发人员对应用的更改在编写后的几分钟内就能生效（假设它通过了自动化测试）。这更加便于持续接收和整合用户反馈。总而言之，所有这些 CI/CD 的关联步骤都有助于降低应用的部署风险，因此更便于以小件的方式（而非一次性）发布对应用的更改。不过，由于还需要编写自动化测试以适应 CI/CD 管道中的各种测试和发布阶段，因此前期投资还是会很大。</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0-cicd">如何实现 CI/CD？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0-cicd">§</a></h2>\n<ul>\n<li><a href="https://www.jenkins.io/">Jenkins</a></li>\n<li><a href="https://travis-ci.com/">Travis</a></li>\n<li><a href="https://www.codeship.io/">Codeship</a></li>\n<li><a href="http://stridercd.com/">Strider</a></li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95%E7%AB%AF%E5%AF%B9%E7%AB%AF%E6%B5%8B%E8%AF%95">如何理解单元测试/集成测试/端对端测试？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95%E7%AB%AF%E5%AF%B9%E7%AB%AF%E6%B5%8B%E8%AF%95">§</a></h2>\n<ul>\n<li>单元测试：针对函数或模块的测试</li>\n<li>集成测试：针对整体产品的某个功能的测试，又称功能测试</li>\n<li>端对端测试：从用户界面直达数据库的全链路测试</li>\n</ul>\n<h2 id="docker-%E6%98%AF%E4%BB%80%E4%B9%88">Docker 是什么？<a class="anchor" href="#docker-%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h2>'
        } }),
    'contentHasKatex': false,
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-cicd">如何理解 CI/CD？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0-cicd">如何实现 CI/CD？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95%E7%AB%AF%E5%AF%B9%E7%AB%AF%E6%B5%8B%E8%AF%95">如何理解单元测试/集成测试/端对端测试？</a></li><li><a href="#docker-%E6%98%AF%E4%BB%80%E4%B9%88">Docker 是什么？</a></li></ol></nav>'
        } }),
    'date': "2020-10-25T07:04:16.000Z",
    'updated': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ]
};
