# 前端工程化

> JS 项目如何在编译阶段进行优化
>
> 同构渲染 = 同一份代码 + ssr + 客户端激活 (client-side hydration, csh)
>
> 同构渲染中的服务端性能指标：Node.js 指标的监控、日志的记录、错误的收集、崩溃机制、renderToString 时间
>
> 模板和 virtual dom 有什么异同
>
> ​	都是一层抽象；模板的方式是 F 只执行一遍，而组件方式则为每次 data 改变都会再执行一遍。
>
> 单体应用、微服务、云原生
>
> 处理上传/下载的原理及其多种方式？
>
>   \* https://blog.csdn.net/weixin_43660626/article/details/103619106
>
>   \* Blob、FileReade、FIleList、Base64、Buffer
>
>   \* window.URL.createObjectURL
>
>   \* 超大文件的分片长传、断点续传与下载
>
>   \* 自定义 csv 通用库
>
>   \* CSV 如何处理逗号
>
> 前端处理视频流媒体
>
> \* 如何理解 JAM Stack
>
>   \* 如何搭建自己的静态服务器
>
>   \* https://dev.to/simonholdorf/10-things-front-end-developers-should-learn-in-2021-d23
>
> Serverless 如何赋能前端开发？
>
> 如何实现微前端？
>
> 如何封装 Try Catch 及后端 success: false 在函数外面？
>
> 如何封装 Loading 状态在函数外面？
>
> 关于js优化。自己会熟练使用js profiler吗？甚至是否是从未使用过？做过ms级别的优化吗？自己问的问题是否真的需要在js trick层面进行优化？

## 前端架构

- SSR、SPA、双向绑定、懒加载、MVVM：Proxy 与 object.defineProperty
- DIFF 算法
- CSS 框架和 UI 框架、前端框架、后端框架、全栈框架有什么区别？
  * **CSS 框架**：交互无关，纯提供一种风格的 CSS 编排方式
    * CSS in JS、Atom CSS、Styled Component、Sass、postCSS
    * Tailwind、Bootstrap Core（当年开天辟地开启了前端布局栅格系统）
  * **UI 框架**：常常封装 UI 库（react 等）并封装好了自己的 CSS 骨架
    * Material UI、Chakra UI、Ant Design
    * Bootstrap（包含交互的那部分）
  * **前端框架**：Angular、React 生态、Vue 生态
    * UI 框架 + 各种工程化生态
  * **全栈基石**：既可以赋能前端，也可以纯后端，主要是基石，还得自己继续封装改造
    * 偏前端：Nextjs 封装 React，但更专注 SSR 等特性
    * 偏后端：Koa、Express
  * **后端框架**：纯后端，提供 API
    * Nest
  * **全栈框架**：monorepo 单体架构，同时封装了前端和后端，开箱即用全栈
    * Blitz：Nextjs + React + Prisma...
  * **运行时**：Node、Deno、V8
- 前端架构：monorepo、monolithic、mircoservice、fullstack(js)、fullstack(mutl-lang)、isomorphic、spa/mpa、serverless、多仓库联动、npm package 联动、JAMStack

## MV* 设计模式与框架？

* MV\* 框架
  * MVC：模型、视图、控制器
  * MVP：模型、视图、表示器
  * MVVM：模型、视图、视图模型
* 为什么要使用 MV\* 框架：关注点分离、简化日常任务、提升生产率、标准化、更高效的合作、独立代码更容易更改、更干净的单元测试。
* MVVM：它萌芽于2005年微软推出的基于 Windows 的用户界面框架 WPF ，前端最早的 MVVM 框架 knockout 在2010年发布。
  * 分层：
    * Model 层：对应数据层的域模型，它主要做域模型的同步。通过 Ajax/fetch 等 API 完成客户端和服务端业务 Model 的同 步。在层间关系里，它主要用于抽象出 ViewModel 中视图的 Model。
    * View 层：为视图模板存在，在 MVVM 里，整个 View 是一个动态模板。除了定义结构、布局外，它展示的是 ViewModel 层的数据和状态。View 层不负责处理状态，View 层做的是 数据绑定的声明、 指令的声明、 事件绑定的声 明。
    * ViewModel 层：把 View 需要的层数据暴露，并对 View 层的 数据绑定声明、 指令声明、 事件绑定声明负责，也就是处理 View 层的具体业务逻辑。ViewModel 底层会做好绑定属性的监听。当 ViewModel 中数据变化，View 层会得到更 新;而当 View 中声明了数据的双向绑定(通常是表单元素)，框架也会监听 View 层(表单)值的变化。一旦值变 化，View 层绑定的 ViewModel 中的数据也会得到自动更新。
  * 优点：
    * 分离视图(View)和模型(Model),降低代码耦合，提高视图或者逻辑的重用性: 比如视图(View)可以独立于 Model变化和修改，一个ViewModel可以绑定不同的"View"上，当View变化的时候Model不可以不变，当Model变化 的时候View也可以不变。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑
    * 提高可测试性: ViewModel的存在可以帮助开发者更好地编写测试代码
    * 自动更新dom: 利用双向绑定,数据更新后视图自动更新,让开发者从繁琐的手动dom中解放
  * 缺点：
    * Bug很难被调试: 因为使用双向绑定的模式，当你看到界面异常了，有可能是你View的代码有Bug，也可能是Model 的代码有问题。数据绑定使得一个位置的Bug被快速传递到别的位置，要定位原始出问题的地方就变得不那么容易 了。另外，数据绑定的声明是指令式地写在View的模版当中的，这些内容是没办法去打断点debug的
    * 一个大的模块中model也会很大，虽然使用方便了也很容易保证了数据的一致性，当时⻓期持有，不释放内存就造 成了花费更多的内存
    * 对于大型的图形应用程序，视图状态较多，ViewModel的构建和维护的成本都会比较高

## 不同场景下前端集成的解决方案有什么思路？

## 前端如何实现即时通信？

* 短轮询：每隔一段时间客户端就发出一个请求，去获取服务器最新的数据，一定程度上模拟实现了及时通信。
  * 优点：兼容性强，实现非常简单。
  * 缺点：延迟性高，非常消耗请求资源，影响性能。
* Comet：
  * 基于 AJAX 的长轮询：
    * 优点：兼容性好，资源浪费较小。
    * 缺点：服务器 hold 连接会消耗资源，返回数据顺序无保证，难于管理维护。
  * 基于 iframe 及 htmlfile 的流方式（streaming）
* SSE（Server-Sent Event），服务端推送事件：
  * 优点：基于 HTTP 而生，因此不需要太多改造就能使用，使用方便
  * 缺点：基于文本传输效率没有 WebSocket 高，不是严格的双向通信，客户端向服务端发送请求无法复用之前的连接，需要重新发出独立的请求。
* WebSocket：全新、独立的协议，基于 TCP 协议，与 HTTP 协议兼容，却不会融入 HTTP 协议，仅仅作为 HTML5 的一部分，其作用就是在服务器和客户端之间建立实时的双向通信。
  * 优点：真正意义上的双向通信，性能好、延迟低
  * 缺点：独立于 HTTP 协议，因此需要额外的项目改造，使用复杂度高，必须引入成熟的库，无法兼容低版本浏览器。
* Web Worker：为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运。
* Service Worker：本质上充当Web应用程序与浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理，创建有效的离线体验。

## 如何理解前端微服务？

## 前端性能优化

- 图片懒加载？
- 给页面注入50万个li怎么做提升性能？
- Base64

> 网页很卡的原因

- 带宽不足、硬件配置低、CPU 或者是内存被占满。
- HTTP 请求次数太多。
- 接收数据时间过长，如下载资源过大。
- JS 脚本过大，阻塞了页面的加载。
- 网页资源过多、接受数据时间长、加载某个资源慢。
- DNS 解析速度。

> 性能优化的方法

- 资源压缩、文件合并
- 非核心代码异步加载（script 标签的 defer 和 async 属性）
- 资源预加载：预解析DNS

## 前端部署

- 如何保证打包文件替换过程中，用户体验不断
- 前端的多集群分布式部署？

## 前端 + 浏览器安全性

- Xss csrf

## 移动端开发

- React Native、Flutter

## SPA 单页面应用有什么特点？

“网络应用”相较于“网站”，具有高度的交互性和动态性，允许用户执行操作并接收他们的操作响应。

- 在过去，浏览器从服务器接收 HTML 并渲染。当用户导航到其它 URL 时，需要整页刷新，服务器会为新页面发送新的 HTML，这被称为服务器端渲染。
- 在现代的 SPA 中，客户端渲染取而代之，浏览器从服务器加载初始页面，以及整个应用程序所需的脚本(框架、库、应用代码)和样式表。当用户导航到其他页面时，不会触发页面刷新。该页面的 URL 通过 HTML5 History API 进行更新。浏览器通过 AJAX 请求向服务器检索新页面所需的数据(通常 JSON 格式)
- SPA 带来了：
  - 应用的表现层从服务器端脱离出来，在浏览器管理
  - 提升应用设计、代码维护和开发时间等方面的效率
  - 服务端的事务处理仅限于数据
  - 解决整页刷新、请求重复、重负荷事物处理等问题
  - 嵌入脚本

* 好处：
  * 用户感知响应快，用户切换页面时，不再看到因页面刷新而导致的白屏。
  * 对服务器进行的 HTTP 请求减少，因为对于每个页面加载，不必再次下载相同的资源。
  * 客户端和服务器之间的关注点分离。可以为不同平台(手机、聊天机器人、智能手表)建立新的客户端，而无需修改服务器代码。只要 API 没有修改，可以单独修改客户端和服务器上的代码。

* 缺点：
  * 由于加载了多个页面所需的框架、应用和资源，导致初始页面加载时间较长。
  * 服务器还需要进行额外的工作，需要将所有请求路由配置到单个入口点，然后由客户端接管路由。
  * SPA 依赖于 JavaScript 来呈现内容，但并非所有搜索引擎都在抓取过程中执行 JavaScript，他们可能会在你的页面上看到空的内容。这无意中损害了应用的搜索引擎优化(SEO)。然而，当你构建应用时，大多情况下，搜索引擎优化并不是最重要的因素，因为并非所有内容都需要通过搜索引擎进行索引。为了解决这个问题，可以在服务器端渲染你的应用，或者使用诸如 Prerender 的服务来“在浏览器中呈现你的 JavaScript，保存静态 HTML，将其返回给爬虫”
* SPA 技术要点：
  * 组织项目(文件结构)
  * 创建可维护的松耦合 UI
  * 使用 JavaScript 模块
  * 执行 SPA 导航：SPA 布局 = Shell 页面 + Region 容器
  * 创建视图组成与布局
  * 模块通信：pub/sub 设计模式
  * 与服务器通信
  * 执行单元测试
  * 客户端自动化技术
* SPA 模型
  - 隐式模型：v-model、v-bind
  - 显式模型：Backbone.js
  * 模型的绑定
    - 用来自由混入模板的 HTML 代码
    - 绑定类型
      - 属性：ng-bind、v-bind
      - 表达式：{{ aaa }}、<%= aaa %>
    - 定向绑定
      - 单向绑定：ng-bind、v-bind
      - 单次绑定：渲染期间只发生一次
      - 双向绑定，与 UI 控件关联，采用观察者模式，需要付出开销代价：ng-model、v-model
* SPA 模板
  - 模板引擎：在 MV* 中将模板和模型数据结合起来
  - 模板：HTML 片段——可额外包含多种绑定及其他指令
  - 模板渲染
  - 模板存放位置
    - 内嵌模板：SPA 初始下载，type="text/template"
    - 局部模板：按需下载
- SPA 模块：模块模式、模块化编程等

## SPA 路由的原理？

* 客户端路由器
  * 侦测浏览器位置发生的变化，监听特定事件
  * 管理 SPA 视图、数据以及业务事物状态
  * 浏览器导航控制
* 路由术语
  * 名称：路由标识
  * 动词：get、put、on、when
  * 路径：URL 部分，建立路由/路由处理程序之间的链接
  * 功能：可能执行的相关代码(控制器、回调函数)
* 路由配置
  * 路由语法
  * 路由配置项：当路由找到匹配 URL 时，该如何动作
  * 路由参数：在路由路径中定义的变量
  * 缺省路由
* 客户端路由器的工作机制
  - 片段标识符方式，# 为前缀，使用 location 的 onhashchange 时间
  - HTML 历史 API 方式，兼容性差，使用片段标识符作为回退方案
    - pushState、replaceState、pospstate
    - 三个参数：状态对象、标题、URL
    - 基准链接：服务器端调整(重定向)、移除 hash

## 虚拟 DOM 的原理是什么？

近年来，前端的框架主要发展方向就是解放DOM操作的复杂性。虚拟的 DOM 的核心思想是：对复杂的文档 DOM 结构，提供一种方便的工具，进行最小化地 DOM 操作。

* 算法实现
  1. 用 JS 对象模拟 DOM 树
  2. 比较两棵虚拟 DOM 树的差异
  3. 把差异应用到真正的 DOM 树上
* DOM patching，DOM 修补
* DOM diff

## 前端性能优化需要注意什么？

> 火焰图？

* 最大限度地减少 HTTP 请求：
* 使用内容分发网络
* headers 添加一个 Expires 或Cache-Control 头
* 用 gzip 的压缩内容
* 将样式表在顶部
* JS 代码放在底部
* 避免使用 CSS 表达式
* JavaScript 和 CSS 放在外部
* 减少 DNS 查找
* 缩小 JavaScript 和 CSS
* 避免重定向
* 删除重复的脚本和样式
* 减少 DOM 元素的数量
* CSS 雪碧图
* HTTP 缓存
* 尽量避免回流
* 复合层、简单层与硬件加速
* 工程化打包
* 复合层与性能优化

静态资源域名拆分（HTTP 2.0 不需要）

- 将静态资源分组，分别放到不同的域名下(如static.base.com)
- 而 page.base.com(页面所在域名)下请求时，是不会带上 static.base.com 域名的 cookie 的，所以就避免了浪费
- 在移动端，如果请求的域名数过多，会降低请求速度(因为域名整套解析流程是很耗费时间的，而且移动端一般带宽都比不上pc)，此时就需要用到一种优化方案：dns-prefetch(让浏览器空闲时提前解析dns域名，不过也请合理使用，勿滥用)

## 前端项目如何部署到 CDN 上？

## 常见的终端维护前端项目状态的命令都有哪些。

* 查看端口占用
* 查看进程状态
* 查看 host、nginx 状态

## 前端都可以怎么压缩？

GZip 压缩

- 是一种压缩格式，需要浏览器支持才有效(不过一般现在浏览器都支持)， 而且 GZip 压缩效率很好(高达70%左右)
- 然后 GZip 一般是由 Apache、Tomcat 等 Web 服务器开启
- 服务器除了 GZip 外，也还会有其它压缩格式(如 deflate，没有 gzip 高效，且不流行)
- 一般只需要在服务器上开启了 GZip 压缩，然后之后的请求就都是基于 GZip 压缩格式的, 非常方便。
