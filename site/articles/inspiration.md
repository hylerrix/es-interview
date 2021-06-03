# 灵感工作台

> 必问
>
> 性能调优经验，perfomance 标签使用情况
> 质量监控有没有
> 跨平台方案的经验
> opengl，webgl，canvas，svg，css3几个的关系区别，啥场景用啥
> node经验有没有，什么叫 stream类型

> 关于[react diff](https://www.zhihu.com/search?q=react diff&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A1870290555})。react的diff与vue2的diff有什么区别？与vue3呢？仅仅是lis吗？
>
> 关于react fiber。fiber的引入究竟对react有什么架构层面的影响，[double fiber tree](https://www.zhihu.com/search?q=double fiber tree&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A1870290555})是否有必要存在？
>
> 关于[react schedule](https://www.zhihu.com/search?q=react schedule&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A1870290555})。schedule究竟以一个什么形式，什么规律来运行，中断和恢复呢？lane解决了什么问题？
>
> 关于vue。reactive core有自己实现过吗？为什么要做这种启发式的aot？slot的实现？
>
> 关于ng。脏检测怎么做到高性能？看过svelte的脏检测吗？ivy是什么？增量dom和virtual dom的区别？ng里模块化和分层di是怎么实现的？
>
> 关于node eventloop。在node里，udp和文件api任务什么区别吗？什么是快io什么是慢io？nodejs如何调度快慢io的？node10之前的事件循环是怎么样的？libuv是以一种什么样的趋向去调度io任务的？async task的抽象是什么呢？什么是tickcallback？
>
> 关于node runtime。node是怎么启动的？node怎么console调试？console什么时候注入node的？
>
> 关于node addon。node_api是一种什么抽象？jsvalue为什么是Object的二级指针？cpp和js层面的共享内存靠什么实现最为简单？ffi是怎么实现的？
>
> 关于v8。什么是isolate？什么是context？值的抽象？v8是怎么管理内存的？怎么直接用v8 api写[node-addon](https://www.zhihu.com/search?q=node-addon&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A1870290555})？
>
> 关于js优化。自己会熟练使用js profiler吗？甚至是否是从未使用过？做过ms级别的优化吗？自己问的问题是否真的需要在js trick层面进行优化？
>
> 关于js-native框架。知道js到native端的详细通信过程吗？做过binding吗？知道jsbridge的实现吗？知道怎么热更新吗？知道热更新的原理吗？知道怎么手写js引擎去做热更新吗？
>
> 关于工程化。webpack5是怎么做持久化储存的？mf是怎么服务于微前端的，又是怎么解决external的问题的？mf的原理是什么？hardsourceplugin的原理是什么，它为什么这么快？lerna的最佳实践？submodule的最佳实践？webpack和gulp怎么配合？tapable究竟是什么抽象？
>
> 浏览器。render object的晋升过程？css和dom的融会时机？slp和raf的时机？什么是rafwithtimeout，存在的意义？vsync影响了什么？为什么不要为滚动增加事件监听？为什么要eval(“debugger”)？

> 区分清楚
>
> layerX, layerY
>
> clientX, clientY
>
> pageX, pageY
>
> movementX, movementY
>
> offsetX, offsetY
>
> screenX, screenY
>
> tiltX, tiltY
>
> x, y



NPM 篇

- [ ] npm link
- [ ] 分析 node modules 嵌套模块图
- [ ] package.json 依赖安全性分析、各个包大小分析
  - https://github.com/pastelsky/bundlephobia
  - https://github.com/webpack-contrib/webpack-bundle-analyzer
  - [source-map-explorer](https://github.com/danvk/source-map-explorer)
  - https://github.com/siddharthkp/cost-of-modules
  - https://arve0.github.io/npm-download-size
  - https://packagephobia.com/



* 问自己：你的发展诉求是什么？（潜在：公司可以给你提供什么样的帮助？你可以回馈公司什么？）

* Promise retry

* 如何理解 vue 的 $nextTick

* 问面试官：如何评价我，对我有什么建议？你们的技术栈是什么？业务是什么？最老的技术是什么

* 有趣的话题：`const ningo = 1+1` 发生了什么？

* 原型链、作用域链的查找如何委托给 JS 引擎

* 设计：字体、Logo、颜色、语音、图标、可访问性

* 实战问题：VueX 里存一个图片的相对路径变量后，在 .vue 中 :src 绑定到 img 上为什么不能加载成功

  * url-loader, webpack

* 常见的字体有哪些？如何安装字体？浏览器通用字体？

* 如何统一监控接口响应时间

* redux-saga，redux-rhunk

* Chrome 调试

* CSS 左固定宽度，右边自适应

* DIFF 算法

* head 标签中有哪些常见的元素 link, meta, title, and style

* HTML 文档的 Doctype 有哪些，其中的含义？

* 如何控制不同类型的 input type?

* form 表单的原理是什么，如今工程化常见的 form 表单是如何实现的（ajax）？

* 如何封装自己的 Hooks？

* 当浏览器 a 标签打开一个 href="_blank" 时，两个窗口的共同进程和线程是如何协作的

* 后端

  * 发送邮件，定时器，进程管理，生成 PDF

* CSS 趣味：纯 CSS 实现卡通人物、动画等

  * https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-css-variables-to-change-several-elements-at-once

* 异步网络请求如何缓存

* 常见的图形绘制，常见动画

* 入职一个公司要思考：工作内容、加班强度、业务前景、职位发展路径、学习发展空间、公司福利、办公环境、团队氛围、企业文化

* getter/setter/装饰器

* 编程中遇到的痛点有哪些？你是如何化解的？

* 灰度发布

* Auth0

* react 时间切片和帧率，fiber 分段机制

* 写单元测试，对你帮助的有：

  1. 场景分析法
  2. 边界值分析法
  3. 等价类划分
  4. 错误推测法

* CSS 框架和 UI 框架、前端框架、后端框架、全栈框架有什么区别？

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

* 前端架构：monorepo、monolithic、mircoservice、fullstack(js)、fullstack(mutl-lang)、isomorphic、spa/mpa、serverless、多仓库联动、npm package 联动、JAMStack

* 服务端接口：RESTful、GraphQL、gRPC

* CSS 选择器背后的原理？

* 哪些 CSS 特性和 GPU 有关？其是如何工作的？

* Npm 和 yarn 是如何管理软件包的？全局软件包/本地软件包

* JavaScript 引擎

  * JavaScriptCore(Apple)、QuickJS、V8

* 移动端 App 性能：页面渲染时间、CPU、内存、帧率

* 设计原则

  * 开闭原则 OCP
  * 单一职责原则 SRP
  * 依赖倒置原则 DIP
  * 接口隔离原则 ISP
  * 里氏替换原则 LSP
  * 组合/聚合复用原则 CARP

* 如何做 Code Review？如何保证代码质量？如何保证重构质量？

* 费曼学习法

* 如何在 Create React App 项目中使用 webpack-bundle-analyzer 分析包大小

* Create React App Webpack 配置原理，react-app-rewired 注入原理

* JS 项目如何在编译阶段进行优化

* npx 是什么

* npm run build 过程发生了什么

* webpack 知识，chunk 是什么，如何定制化 chunk

* https://1loc.dev/

* https://thisthat.dev/

* 浏览器兼容性处理

* 关于时间的 Date API、Intl API、Temporal API

* moment.js 和 date-fns

* Authorization 请求头 -> 值为 Bearer {token}

* 常见的编码表、字符集

* 测试覆盖率报告 lcov：genhtml、overcal

* 同构渲染 = 同一份代码 + ssr + 客户端激活 (client-side hydration, csh)

* jsbrige，webview

* 领域设计模型

* 用户态线程（协程）/内核态线程

* React: hook 中同一个函数 setState 后立马使用新的变量值 -> 还是需要 useEffect 来监听

  * 如何合并多个 setSate 后使用新的值进行下一步操作

* I/O 密集，CPU 密集

* promise 内部实现

  * promise 是微任务
  * dom, 回调, ajax, 定时器 是宏任务

* 清除浮动

  * div / :after = clear: both;
  * 父级 overflow: hidden;

* libuv

* 云、CDN、IDC 有什么区别？

* 如何写 Dockerfile？

* React console.log(一个包含若干子组件的组件对象) 后能看到什么？

  * 继承了哪些类，原型上有什么方法

* React 的 render 方法原理 -> createElement() 方法创建了 ReactElement 类对象

* 业务监控、运维

* serverless

* IDE 插件，LSP

* 面试官：你有什么想问我的？
  * 组里最古老的技术栈是什么？为什么不重构
  * 工作时间怎么样？需要加班吗？上班时间能挤出时间自学吗？开会多吗？
  * 组内有没有造什么有趣的小工具/轮子？
  
* 监控平台、链路追踪

* 同构渲染

  * 同构渲染中的服务端性能指标：Node.js 指标的监控、日志的记录、错误的收集、崩溃机制、renderToString 时间

* 模板和 virtual dom 有什么异同

  * 都是一层抽象
  * 模板的方式是 F 只执行一遍，而组件方式则为每次 data 改变都会再执行一遍。

* 如何理解 Chrome DevTool

* 你都知道哪些 JavaScript 解析器？

  * JavaScript 的解析器包括的实施规范起始于 ESTree 项目，常见的基于 JS 开发的 JavaScript 解析器包括 uglify-js、Esprima、acorn、@babel/parser(babylon)、espree、TypeScript；常见的基于其他语言开发的 JavaScript 解析器包括 sucrase、swc、esbuild；其它 AST 工具包括：recast、jscodeshift、ASTExplorer 等。
  * Babel 的组成和工作原理：parser、traverser、generator

* new FormData() 如何使用？

* 单体应用、微服务、云原生

* Git 里 pull/fetch 区别、GIt Rebase 高阶用法之合并提交记录

* Git 如何取消单个文件的改动

* ssh 协议是怎么连接的

* 如果直接给 useHook 的引用对象赋值而不调用 setXXX 会怎么样？

* 哪些标签可以避免同源策略

* IDE/编辑器
  
  * 如何调试？
  
* 数组扁平化并去重
  
  * const mergeList = (...args) => [...new Set([...args].flat(Infinity))]
  
* 如何看待 console.log 一个对象后赋值该对象，其值在终端打印结果为赋值后的值？

* JS 实践

  * 数值每隔千位加英文逗号、isNumber

  * reduce 对象数值累加、判断 key 是否存在
  
  * 99 乘法表、斐波那契数列
  
  * 如何让 js 同步延迟（Promise + setTimeout）
  
    * ```javascript
      const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
      ```
  
* Set/Array 的转换

* 前端性能分析

  * Perfume.js
  * First Paint ([FP](https://medium.com/@zizzamia/first-contentful-paint-with-a-touch-of-perfume-js-cd11dfd2e18f)), First Contentful Paint ([FCP](https://web.dev/first-contentful-paint/)), Largest Contentful Paint ([LCP](https://web.dev/lcp/)), First Input Delay ([FID](https://web.dev/fid/)), Cumulative Layout Shift ([CLS](https://web.dev/cls/)), Total Blocking Time ([TBT](https://web.dev/tbt/)), Navigation Timing, Resource Timing

* 前端应用问题：处理上传/下载的原理及其多种方式？

  * https://blog.csdn.net/weixin_43660626/article/details/103619106
  * Blob、FileReade、FIleList、Base64、Buffer
  * window.URL.createObjectURL
  * 超大文件的分片长传、断点续传与下载
  * 自定义 csv 通用库
  * CSV 如何处理逗号
  
* var 是函数里变量提升，let 是块级作用域里变量提升；而块级作用域是函数作用域的子集

* Git：cherry-pick
  
* 前端处理视频流媒体

* 节流/防抖

  * 函数节流防抖
    * https://juejin.cn/post/6844903535125987335
  * 变量值节流防抖

* 运维硬件类知识
  * 服务器硬件：HDD、SSD、RAID
  * 计算机硬件组成：硬盘、内存、处理器、电源、显卡、网卡、主板、线材
  * 运营商网络
  * 电脑生产厂商，网络设备生产商，浏览器开发商，IDC机房，CDN服务商，云计算厂商，存储服务器供应商，网络服务提供商，电信运营商
  
* 设计师
  
  * 字体的知识，排版的知识
  
* CSS
  
  * 栅格系统是如何实现的
  
* 如何理解 JAM Stack
  * 如何搭建自己的静态服务器
  * https://dev.to/simonholdorf/10-things-front-end-developers-should-learn-in-2021-d23
  
* Serverless 如何赋能前端开发？

* 如何实现微前端？

* Vue

  * 如何理解 Vue 里的 render "h"
  * v-show 和 v-if 的区别
  * 如何编写自定义的 directives 如 v-resize
  * Vue 如何 watch DOM 的改变
  * 可以 data[index] = newVal 来自动更新视图吗？为什么
  
* js 数组相等

* js 如何让系统同步等待若干秒

  * ```javascript
    const pause = ms => new Promise(resolve => setTimeout(resolve, ms))
    ```

* js 字符串字典排序如：[10 月, 11 月, 1 月]

* React
  * 比如，在一个异步接口中 setHook，后立马访问该值，该值是否已更新？
    * 比如 setLoading(true)
  * React 是如何精准的捕获数据的变动的
  * 如何通过 Key 值强制刷新一个组件
  * 如何深入理解 ref 和 dom 的关系，并在 React 中实战
  
* React Router
  * 单页面应用Router的实现机制？
  * 为什么 React Router 中使用 Switch 关键字 ？
  * React Router 与常规路由有何不同？
  * 它是怎么实现跳转不刷新页面的？
  * React 路由的底层实现原理是怎样的？
  
* 普通对象和 map 对象什么区别

* Best Practise
  * 如何封装 Try Catch 及后端 success: false 在函数外面？
  * 如何封装 Loading 状态在函数外面？
  
* ES

  * Require 同步和 import 异步有什么区别？原理？

* JS 风格：

  * 声明函数，使用 function 好还是 const 好？分别针对什么场景用什么更好？https://www.freecodecamp.org/news/constant-confusion-why-i-still-use-javascript-function-statements-984ece0b72fd/

如何在严格模式下知道调用这个函数的另一个函数的信息

```javascript
"use strict"
function debugLine(message) {
  let e = new Error()
  let frame = e.stack.split("\n")[2]
  let lineNumber = frame.split(" ")[5]
  let functionName = frame.split(" ")[5]
  return functionName + ":" + lineNumber + " " + message
}

function myCallingFunction () {
  console.log(debugLine("error_message"))
}

myCallingFunction
```



```javascript
/**
 * throttle 节流
 * 每delay毫秒执行一次
 *
 * @param callback
 * @param delay
 * @return {function()}
 */
export const throttle = (callback, delay = 100) => {
  let canExec = true
  return function (...args) {
    if (!canExec) {
      return
    }

    // eslint-disable-next-line standard/no-callback-literal
    callback(...args)

    canExec = false
    setTimeout(() => { canExec = true }, delay)
  }
}

export function debounce (fn, wait = 0) {
  let timer

  return () => {
    if (timer) {
      timer && clearTimeout(timer)
      timer = null
    }

    timer = setTimeout(() => {
      fn()
    }, wait)
  }
}

async function batchRequest (data, params, username) {
  let count = Math.ceil(data.total / perDownloadSize)
  count = Math.min(count, 200) // 控制水位，并发数不能超过200
  const promises = []
  for (let i = 2; i <= count; i++) {
    params.page = i
    promises.push(rs.fetchSysService('GET', '/charge/report/account/detail/charge', params, username, true))
  }

  if (!promises.length) return

  await Promise.all(promises).then((allRes) => {
    for (let i = 1; i < count; i++) {
      const res = (allRes[i - 1] && allRes[i - 1].data) || []
      data.data.push(...res)
    }
  })
}
```



```javascript
// 下载
const url = window.URL.createObjectURL(new Blob([data]))
const link = document.createElement('a')
link.href = url
link.setAttribute('download', fileName)
document.body.appendChild(link)
link.click()

downloadTest({
  type: 'get',
  url: 'http://10.79.30.19:8000/charge/report/day/account/export/detail?accountCode=serversystemservice&costDay=2020-10-01&region=9&',
  data: {}
})

downloadTest (option) {
  // var url = '/s1/brand/exportExcel';
  const xhr = new XMLHttpRequest()
  xhr.open(option.type, option.url, true)
  xhr.responseType = 'blob'
  xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
  xhr.onload = function () {
    if (this.status === 200) {
      // var _b = xhr.getResponseHeader('Content-Disposition');
      // var _c = _b.split('filename=')[1];
      // var _d = decodeURIComponent(_c.split('.')[0])+'.'+_c.split('.')[1];
      const blob = this.response
      const a = document.createElement('a')
      const url = window.URL.createObjectURL(blob) // 创建url对象
      a.href = url
      // a.download = _d
      a.download = 'excel.xlsx'
      a.click()
      window.URL.revokeObjectURL(url) // 释放url对象
    }
  }
  xhr.send(JSON.stringify(option.data))
}

import axios from 'axios'

export const downloadFile = (url: string, type: 'GET' | 'POST', params: any, fileName?: string) => {
  axios({
    url: url,
    method: type,
    params: type === 'GET' ? params : undefined,
    data: type === 'POST' ? params : undefined,
    responseType: 'blob',
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', fileName ? fileName : 'resources.xlsx') //or any other extension
    document.body.appendChild(link)
    link.click()
  })
}
```



动态加载 UMD



```javascript
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;

    script.onerror = function () {
      reject(new Error(`Cannot load script at: ${script.src}`));
    };

    (document.head || document.documentElement).appendChild(script);
  });
}
```





待读：



* [React 架构的演变 - 更新机制](https://mp.weixin.qq.com/s/-a4RayWkOuKOMcRlOj1Few)
* [聊聊 Axios 中值得学习的核心知识点](https://mp.weixin.qq.com/s/KfIbhT5ZubvVzNHEIyiXEA)





```
以下表格，点击 `#data .date` 后使表格按日期排序，当前是正序则改为倒序，当前是倒序则改为正序
<table id="data">
    <thead>
    <tr>
        <th class="date">日期</th>
        <th class="total">总次数</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>2017年10月23日</td>
        <td>68,112</td>
    </tr>
    <tr>
        <td>2017年8月6日</td>
        <td>68,020</td>
    </tr>
    <tr>
        <td>2017年11月11日</td>
        <td>69,433</td>
    </tr>
    <tr>
        <td>2016年5月12日</td>
        <td>69,699</td>
    </tr>
    <tr>
        <td>2017年1月18日</td>
        <td>42,565</td>
    </tr>
    </tbody>
</table>
```



* 有没有看过 vue 源码
* Vue 的组件化，你需要用到哪些技术点/你是怎么做组件化开发的
* Vue 3.0 和 Vue 2.0 的区别
* 为什么 Vue 3 用了 Proxy 性能更好呢？
* proxy 的缺点是什么？proxy 为什么比 Object.defineProperty 快？
* Vue 2 的 Object.defineProperty 是一种怎样的机制？
* Object.defineProperty 和 proxy 相比有哪些区别？
* Vue 3 在打包时按需引入是如何做到的，为什么 Vue 2 没有做到？
* 在 Vue 项目中你有没有做性能方面的优化，怎么做的？
* 有没有了解 HTTP 的缓存？
* 硬性缓存是对比的哪个 header 值？
* 说一下什么是协商缓存？协商缓存会在什么时候读？
* 有没有了解资源的缓存策略？html、css、js 的缓存怎么设置？
* Vue 中的插槽机制是怎么样的，如何使用？
* 插槽有哪些 API？插槽的作用域？
* 具名插槽如何使用？
* 自定义组件的双向绑定怎么写？
* 父子组件如何通信？除过 emit 和 eventbus 外你还知道哪些？
* vue 双向绑定的 sync 有了解过吗？
* VUe 组件的响应式，对数组做了额外的处理吗？
* 知道数组有哪些 API 会改变原数组？
* 说一下解构
* 说一下剩余参数，是如何使用的？
* 解构时，如何给一个变量赋默认值？
* 你是怎么使用 Promise 的？
* 如何把一个请求封装成 Promise 方式？
* then 可以接受什么回调，可以接受失败回调吗？
* 说一下 TypeScript 中的泛型，以及他的使用方式与场景？
* 如果接口返回 promise 类型的数据，你如何用 typescript 声明？
* 举一个你在项目中使用 TypeScript 泛型的例子
* 如何使用 TypeScript 的联合类型？
* 说一下 TypeScript 的内置类型
* 说一下 TypeScript 的 pick 类型
* 如何使用 TypeScript 定义一个对象类型？
* 说一下 TypeScript 中的 type 和 interface 的区别
* 说一下 TypeScript 中的交叉类型
* 聊一下 CSS，你用的什么布局多一点
* 说一下 flex 中，你常用的属性？
* flex 溢出换行用的哪个属性？
* 主轴与交叉轴的方向用哪个属性定义？如何颠倒这些属性？
* 说一下 flex-grow 怎么使用？
* 说一下 css 的选择器都有哪些及其优先级？
* css 实现 10 列布局怎么做？
* 如何实现通过不同的类名，来控制它的均分？比如我传 col2，那么这一列就占 20%，col3 就占 30%
* 让元素横着排列，除了 flex 还可以怎么做？
* 你有什么想问我们团队的？



* 程序员的自我修养
  * 通识教育
    * 职业发展：十六种人格；创业
    * 择城买房：经济学
  * 计算机科学
    * 系统
      * 常识：Windows/Linux/macOS 区别
      * 常识：IOS 为什么把你 Android 省电
      * 知识：进程与线程的区别
    * 网络
      * 常识：ping 8.8.8.8 为什么这么快
      * 常识：如何 gg 查资料
      * 知识：7 层协议
    * 算法
      * 常识：WebP、H.265 在什么场景使用
      * 知识：鸡蛋从几楼掉落会碎
    * 硬件
      * 常识：PS5 游戏机为什么比电脑便宜
      * 知识：ARM 和 x86
  * 软件工程
    * 项目管理：瀑布；迭代；敏捷
    * 编程技术
      * 面向对象 OOP
      * 设计模式
      * 代码规范
      * 代码管理：Git/Git 工作流与规范
      * 测试驱动开发 TDD
      * 持续集成 CI
      * 持续部署 CD
      * 云计算架构：云存储；CDN；云服务器；Docker/K8s