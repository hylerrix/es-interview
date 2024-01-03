# Deno

## 为什么是 Deno？

* 安全的 JavaScript 和 TypeScript 运行时，底层基于 V8 和 Rust。
* 默认安全。除非明确的赋予权限，否则程序默认没有文件、网络和环境的访问权限。
* 开箱即用 TypeScript 语言。
* 内置多个官方维护的工具包。如 `fmt; info;` 等。
* 内置多个官方维护的标准库。如 `async; fs; http` 等。
* 可以直接从 URL 上导入包。

## Deno 的生态现在是怎样的？



## Deno 内置了哪些工具包及其用途？

> 同步自：[《Deno 钻研之术》](https://deno-tutorial.js.org/)。最后同步时间：2020-10-06

内置工具包

| 序号 | 名称       | 命令             | 功能                                                         |
| :--- | :--------- | :--------------- | :----------------------------------------------------------- |
| 01   | 运行器     | deno run         | 运行指定文件名或 URL 程序。 使用“-”作为文件名从标准输入中读取 |
| 02   | 脚本安装器 | deno install     | 将脚本安装为可执行文件                                       |
| 03   | 打包器     | deno bundle      | 将模块和依赖项打包到单个文件中                               |
| 04   | 缓存器     | deno cache       | 缓存依赖                                                     |
| 05   | 文档生成器 | deno doc         | 显示某模块的文档                                             |
| 06   | 执行器     | deno eval        | 执行一段脚本                                                 |
| 07   | 格式化器   | deno fmt         | 格式化源文件                                                 |
| 08   | 依赖检查器 | deno info        | 显示有关缓存的信息或与源文件相关的信息                       |
| 09   | 规范器     | deno lint        | 规范化源文件                                                 |
| 10   | 测试器     | deno test        | 执行测试                                                     |
| 11   | 类型器     | deno types       | 打印运行时 TypeScript 声明                                   |
| 12   | 补全器     | deno completions | 生成 Shell 补全信息                                          |
| 13   | 升级器     | deno upgrade     | 将 Deno 可执行文件升级到给定版本                             |
| 14   | REPL 器    | deo repl         | 读取/执行/打印/循环                                          |

通用指令

| 01   | -h, --help                           | 全部                                                         | 打印帮助信息                                                 |
| ---- | ------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 02   | -L, --log-level                      | 全部                                                         | 设置日志级别 [可能的值: debug, info]                         |
| 03   | -q, --quiet                          | 全部                                                         | 禁止诊断输出；默认情况下，子命令会将可读性友好的诊断消息打印到 stderr；如果设置了这个标志，则将这些消息限制为 errors |
| 04   | -A, --allow-all                      | run, install, test                                           | 允许所有权限，这将禁用所有安全限制                           |
| 05   | --allow-env                          | run, install, test                                           | 允许环境访问，例如读取和设置环境变量                         |
| 06   | --allow-hrtime                       | run, install, test                                           | 允许高精度时间测量，高精度时间能够在计时攻击和特征识别中使用 |
| 07   | --allow-net=                         | run, install, test                                           | 允许网络访问。可以指定一系列用逗号分隔的域名，来提供域名白名单 |
| 08   | --allow-plugin                       | run, install, test                                           | 允许加载插件。请注意：这目前是一个不稳定功能                 |
| 09   | --allow-read=                        | run, install, test                                           | 允许读取文件系统。可以指定一系列用逗号分隔的目录或文件，来提供文件系统白名单。 |
| 10   | --allow-run                          | run, install, test                                           | 允许运行子进程。请注意，子进程不在沙箱中运行，因此没有与 deno 进程相同的安全限制，请谨慎使用 |
| 11   | --allow-write=                       | run, install, test                                           | 允许写入文件系统。您可以指定一系列用逗号分隔的目录或文件，来提供文件系统白名单 |
| 12   | --cert                               | run, install, bundle, chche, eval, info, test, upgrade, repl | 从 PEM 编码的文件中加载证书颁发机构                          |
| 13   | -c, --config                         | run, install, budle, cache, test                             | 读取 tsconfig.json 配置文件                                  |
| 14   | --unstable                           | run, install, bundle, cache, doc, eval, fmt, info, lint, test, types, repl | 开启不稳定的 APIs 支持                                       |
| 15   | --inspect=[HOST:PORT](host:PORT)     | run, eval, test, repl                                        | 激活监听器 主机:端口 (默认: 127.0.0.1:9229)                  |
| 16   | --inspect-brk=[HOST:PORT](host:PORT) | run, eval, test, repl                                        | 在 主机:端口 上激活监听器，并在用户脚本启动时中断            |
| 17   | --v8-flags=                          | run, eval, test, repl                                        | 设置 V8 命令行选项。帮助： --v8-flags=--help                 |
| 18   | --cached-only                        | run, test                                                    | 要求远程依赖项已经被缓存                                     |
| 19   | -r, --reload=<CACHE_BLOCKLIST>       | run, cache, doc, test                                        | 重新加载源代码缓存（重新编译TypeScript）。重新加载全部/仅标准模块/特定模块 |
| 20   | --lock                               | run, bundle, cache, test                                     | 检查指定的锁文件                                             |
| 21   | --lock-write                         | run, bundle, cache, test                                     | 写入锁文件，和 --lock 一起使用                               |
| 22   | --no-check                           | run, cache, info, test                                       | 禁用 TypeScript 的类型检查，这会大大减少程序的启动时间       |
| 23   | --no-remote                          | run, cache, test                                             | 不解析远程模块                                               |
| 24   | --seed                               | run, test                                                    | Math.random() 种子                                           |
| 25   | --importmap                          | run, install, bundle, test                                   | 不稳定：读取 import map 文件                                 |
| 26   | --json                               | doc, info                                                    | 以 JSON 格式输出文档                                         |

内置环境变量

| 01   | DENO_DIR          | 设置缓存目录                      |                         |
| ---- | ----------------- | --------------------------------- | ----------------------- |
| 02   | DENO_INSTALL_ROOT | 设置 Deno 安装的软件包输入目录    | 默认为 $HOME/.deno/bin  |
| 03   | NO_COLOR          | 设置禁止使用颜色                  |                         |
| 04   | DENO_CERT         | 从 PEM 编码的文件加载证书颁发机构 |                         |
| 05   | HTTP_PROXY        | HTTP 请求的代理地址               | 模块 downloads 和 fetch |
| 06   | HTTPS_PROXY       | HTTPS 请求的代理地址              | 模块 downloads 和 fetch |

## Deno 的异步事件机制是怎样的？



## Deno run url 后都发生了什么？

