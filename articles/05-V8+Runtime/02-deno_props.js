import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "text": "Node",
        "link": "articles/05-V8+Runtime/01-node.html"
    },
    'next': {
        "link": "articles/06-FE+Browser/index.html",
        "text": "前端应用开发 + 浏览器"
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
    'pagePath': "articles/05-V8+Runtime/02-deno.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/05-V8+Runtime/02-deno.html",
    'title': "Deno",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Deno</h1>\n<h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E6%98%AF-deno">为什么是 Deno？<a class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%98%AF-deno">§</a></h2>\n<ul>\n<li>安全的 JavaScript 和 TypeScript 运行时，底层基于 V8 和 Rust。</li>\n<li>默认安全。除非明确的赋予权限，否则程序默认没有文件、网络和环境的访问权限。</li>\n<li>开箱即用 TypeScript 语言。</li>\n<li>内置多个官方维护的工具包。如 <code>fmt; info;</code> 等。</li>\n<li>内置多个官方维护的标准库。如 <code>async; fs; http</code> 等。</li>\n<li>可以直接从 URL 上导入包。</li>\n</ul>\n<h2 id="deno-%E5%86%85%E7%BD%AE%E4%BA%86%E5%93%AA%E4%BA%9B%E5%B7%A5%E5%85%B7%E5%8C%85%E5%8F%8A%E5%85%B6%E7%94%A8%E9%80%94">Deno 内置了哪些工具包及其用途？<a class="anchor" href="#deno-%E5%86%85%E7%BD%AE%E4%BA%86%E5%93%AA%E4%BA%9B%E5%B7%A5%E5%85%B7%E5%8C%85%E5%8F%8A%E5%85%B6%E7%94%A8%E9%80%94">§</a></h2>\n<blockquote>\n<p>同步自：<a href="https://deno-tutorial.js.org/">《Deno 钻研之术》</a>。最后同步时间：2020-10-06</p>\n</blockquote>\n<p>内置工具包</p>\n<table>\n<thead>\n<tr>\n<th style="text-align:left">序号</th>\n<th style="text-align:left">名称</th>\n<th style="text-align:left">命令</th>\n<th style="text-align:left">功能</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:left">01</td>\n<td style="text-align:left">运行器</td>\n<td style="text-align:left">deno run</td>\n<td style="text-align:left">运行指定文件名或 URL 程序。 使用“-”作为文件名从标准输入中读取</td>\n</tr>\n<tr>\n<td style="text-align:left">02</td>\n<td style="text-align:left">脚本安装器</td>\n<td style="text-align:left">deno install</td>\n<td style="text-align:left">将脚本安装为可执行文件</td>\n</tr>\n<tr>\n<td style="text-align:left">03</td>\n<td style="text-align:left">打包器</td>\n<td style="text-align:left">deno bundle</td>\n<td style="text-align:left">将模块和依赖项打包到单个文件中</td>\n</tr>\n<tr>\n<td style="text-align:left">04</td>\n<td style="text-align:left">缓存器</td>\n<td style="text-align:left">deno cache</td>\n<td style="text-align:left">缓存依赖</td>\n</tr>\n<tr>\n<td style="text-align:left">05</td>\n<td style="text-align:left">文档生成器</td>\n<td style="text-align:left">deno doc</td>\n<td style="text-align:left">显示某模块的文档</td>\n</tr>\n<tr>\n<td style="text-align:left">06</td>\n<td style="text-align:left">执行器</td>\n<td style="text-align:left">deno eval</td>\n<td style="text-align:left">执行一段脚本</td>\n</tr>\n<tr>\n<td style="text-align:left">07</td>\n<td style="text-align:left">格式化器</td>\n<td style="text-align:left">deno fmt</td>\n<td style="text-align:left">格式化源文件</td>\n</tr>\n<tr>\n<td style="text-align:left">08</td>\n<td style="text-align:left">依赖检查器</td>\n<td style="text-align:left">deno info</td>\n<td style="text-align:left">显示有关缓存的信息或与源文件相关的信息</td>\n</tr>\n<tr>\n<td style="text-align:left">09</td>\n<td style="text-align:left">规范器</td>\n<td style="text-align:left">deno lint</td>\n<td style="text-align:left">规范化源文件</td>\n</tr>\n<tr>\n<td style="text-align:left">10</td>\n<td style="text-align:left">测试器</td>\n<td style="text-align:left">deno test</td>\n<td style="text-align:left">执行测试</td>\n</tr>\n<tr>\n<td style="text-align:left">11</td>\n<td style="text-align:left">类型器</td>\n<td style="text-align:left">deno types</td>\n<td style="text-align:left">打印运行时 TypeScript 声明</td>\n</tr>\n<tr>\n<td style="text-align:left">12</td>\n<td style="text-align:left">补全器</td>\n<td style="text-align:left">deno completions</td>\n<td style="text-align:left">生成 Shell 补全信息</td>\n</tr>\n<tr>\n<td style="text-align:left">13</td>\n<td style="text-align:left">升级器</td>\n<td style="text-align:left">deno upgrade</td>\n<td style="text-align:left">将 Deno 可执行文件升级到给定版本</td>\n</tr>\n<tr>\n<td style="text-align:left">14</td>\n<td style="text-align:left">REPL 器</td>\n<td style="text-align:left">deo repl</td>\n<td style="text-align:left">读取/执行/打印/循环</td>\n</tr>\n</tbody>\n</table>\n<p>通用指令</p>\n<table>\n<thead>\n<tr>\n<th>01</th>\n<th>-h, --help</th>\n<th>全部</th>\n<th>打印帮助信息</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>02</td>\n<td>-L, --log-level</td>\n<td>全部</td>\n<td>设置日志级别 [可能的值: debug, info]</td>\n</tr>\n<tr>\n<td>03</td>\n<td>-q, --quiet</td>\n<td>全部</td>\n<td>禁止诊断输出；默认情况下，子命令会将可读性友好的诊断消息打印到 stderr；如果设置了这个标志，则将这些消息限制为 errors</td>\n</tr>\n<tr>\n<td>04</td>\n<td>-A, --allow-all</td>\n<td>run, install, test</td>\n<td>允许所有权限，这将禁用所有安全限制</td>\n</tr>\n<tr>\n<td>05</td>\n<td>--allow-env</td>\n<td>run, install, test</td>\n<td>允许环境访问，例如读取和设置环境变量</td>\n</tr>\n<tr>\n<td>06</td>\n<td>--allow-hrtime</td>\n<td>run, install, test</td>\n<td>允许高精度时间测量，高精度时间能够在计时攻击和特征识别中使用</td>\n</tr>\n<tr>\n<td>07</td>\n<td>--allow-net=</td>\n<td>run, install, test</td>\n<td>允许网络访问。可以指定一系列用逗号分隔的域名，来提供域名白名单</td>\n</tr>\n<tr>\n<td>08</td>\n<td>--allow-plugin</td>\n<td>run, install, test</td>\n<td>允许加载插件。请注意：这目前是一个不稳定功能</td>\n</tr>\n<tr>\n<td>09</td>\n<td>--allow-read=</td>\n<td>run, install, test</td>\n<td>允许读取文件系统。可以指定一系列用逗号分隔的目录或文件，来提供文件系统白名单。</td>\n</tr>\n<tr>\n<td>10</td>\n<td>--allow-run</td>\n<td>run, install, test</td>\n<td>允许运行子进程。请注意，子进程不在沙箱中运行，因此没有与 deno 进程相同的安全限制，请谨慎使用</td>\n</tr>\n<tr>\n<td>11</td>\n<td>--allow-write=</td>\n<td>run, install, test</td>\n<td>允许写入文件系统。您可以指定一系列用逗号分隔的目录或文件，来提供文件系统白名单</td>\n</tr>\n<tr>\n<td>12</td>\n<td>--cert</td>\n<td>run, install, bundle, chche, eval, info, test, upgrade, repl</td>\n<td>从 PEM 编码的文件中加载证书颁发机构</td>\n</tr>\n<tr>\n<td>13</td>\n<td>-c, --config</td>\n<td>run, install, budle, cache, test</td>\n<td>读取 tsconfig.json 配置文件</td>\n</tr>\n<tr>\n<td>14</td>\n<td>--unstable</td>\n<td>run, install, bundle, cache, doc, eval, fmt, info, lint, test, types, repl</td>\n<td>开启不稳定的 APIs 支持</td>\n</tr>\n<tr>\n<td>15</td>\n<td>--inspect=<a href="host:PORT">HOST:PORT</a></td>\n<td>run, eval, test, repl</td>\n<td>激活监听器 主机:端口 (默认: 127.0.0.1:9229)</td>\n</tr>\n<tr>\n<td>16</td>\n<td>--inspect-brk=<a href="host:PORT">HOST:PORT</a></td>\n<td>run, eval, test, repl</td>\n<td>在 主机:端口 上激活监听器，并在用户脚本启动时中断</td>\n</tr>\n<tr>\n<td>17</td>\n<td>--v8-flags=</td>\n<td>run, eval, test, repl</td>\n<td>设置 V8 命令行选项。帮助： --v8-flags=--help</td>\n</tr>\n<tr>\n<td>18</td>\n<td>--cached-only</td>\n<td>run, test</td>\n<td>要求远程依赖项已经被缓存</td>\n</tr>\n<tr>\n<td>19</td>\n<td>-r, --reload=&lt;CACHE_BLOCKLIST&gt;</td>\n<td>run, cache, doc, test</td>\n<td>重新加载源代码缓存（重新编译TypeScript）。重新加载全部/仅标准模块/特定模块</td>\n</tr>\n<tr>\n<td>20</td>\n<td>--lock</td>\n<td>run, bundle, cache, test</td>\n<td>检查指定的锁文件</td>\n</tr>\n<tr>\n<td>21</td>\n<td>--lock-write</td>\n<td>run, bundle, cache, test</td>\n<td>写入锁文件，和 --lock 一起使用</td>\n</tr>\n<tr>\n<td>22</td>\n<td>--no-check</td>\n<td>run, cache, info, test</td>\n<td>禁用 TypeScript 的类型检查，这会大大减少程序的启动时间</td>\n</tr>\n<tr>\n<td>23</td>\n<td>--no-remote</td>\n<td>run, cache, test</td>\n<td>不解析远程模块</td>\n</tr>\n<tr>\n<td>24</td>\n<td>--seed</td>\n<td>run, test</td>\n<td>Math.random() 种子</td>\n</tr>\n<tr>\n<td>25</td>\n<td>--importmap</td>\n<td>run, install, bundle, test</td>\n<td>不稳定：读取 import map 文件</td>\n</tr>\n<tr>\n<td>26</td>\n<td>--json</td>\n<td>doc, info</td>\n<td>以 JSON 格式输出文档</td>\n</tr>\n</tbody>\n</table>\n<p>内置环境变量</p>\n<table>\n<thead>\n<tr>\n<th>01</th>\n<th>DENO_DIR</th>\n<th>设置缓存目录</th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>02</td>\n<td>DENO_INSTALL_ROOT</td>\n<td>设置 Deno 安装的软件包输入目录</td>\n<td>默认为 $HOME/.deno/bin</td>\n</tr>\n<tr>\n<td>03</td>\n<td>NO_COLOR</td>\n<td>设置禁止使用颜色</td>\n<td></td>\n</tr>\n<tr>\n<td>04</td>\n<td>DENO_CERT</td>\n<td>从 PEM 编码的文件加载证书颁发机构</td>\n<td></td>\n</tr>\n<tr>\n<td>05</td>\n<td>HTTP_PROXY</td>\n<td>HTTP 请求的代理地址</td>\n<td>模块 downloads 和 fetch</td>\n</tr>\n<tr>\n<td>06</td>\n<td>HTTPS_PROXY</td>\n<td>HTTPS 请求的代理地址</td>\n<td>模块 downloads 和 fetch</td>\n</tr>\n</tbody>\n</table>\n<h2 id="deno-%E7%9A%84%E5%BC%82%E6%AD%A5%E4%BA%8B%E4%BB%B6%E6%9C%BA%E5%88%B6%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84">Deno 的异步事件机制是怎样的？<a class="anchor" href="#deno-%E7%9A%84%E5%BC%82%E6%AD%A5%E4%BA%8B%E4%BB%B6%E6%9C%BA%E5%88%B6%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84">§</a></h2>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%98%AF-deno">为什么是 Deno？</a></li><li><a href="#deno-%E5%86%85%E7%BD%AE%E4%BA%86%E5%93%AA%E4%BA%9B%E5%B7%A5%E5%85%B7%E5%8C%85%E5%8F%8A%E5%85%B6%E7%94%A8%E9%80%94">Deno 内置了哪些工具包及其用途？</a></li><li><a href="#deno-%E7%9A%84%E5%BC%82%E6%AD%A5%E4%BA%8B%E4%BB%B6%E6%9C%BA%E5%88%B6%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84">Deno 的异步事件机制是怎样的？</a></li></ol></nav>'
        } })
};
