# 灵感

> 竞品：https://github.com/woai3c/Front-end-basic-knowledge
>
> https://github.com/ponkans/F2E
>
> 面试题：https://ahabhgk.github.io/blog/interview-2020-12

* 问自己：你的发展诉求是什么？

* 问面试官：如何评价我，对我有什么建议？你们的技术栈是什么？业务是什么？最老的技术是什么

* 有趣的话题：`const ningo = 1+1` 发生了什么？

* 原型链、作用域链的查找如何委托给 JS 引擎

* 设计：字体、Logo、颜色、语音、图标、可访问性

* 实战问题：VueX 里存一个图片的相对路径变量后，在 .vue 中 :src 绑定到 img 上为什么不能加载成功

  * url-loader, webpack

* https://1loc.dev/

* https://thisthat.dev/

* 浏览器兼容性处理

* 关于时间的 Date API、Intl API、Temporal API

* moment.js 和 date-fns

* Authorization 请求头 -> 值为 Bearer {token}

* 常见的编码表、字符集

* 分析 node modules 嵌套模块图

* React 工程性能分析及优化

* 测试覆盖率报告 lcov：genhtml、overcal

* npm link

* package.json 依赖安全性分析、各个包大小分析

  * https://github.com/pastelsky/bundlephobia
  * https://github.com/webpack-contrib/webpack-bundle-analyzer
  * https://github.com/siddharthkp/cost-of-modules
  * https://arve0.github.io/npm-download-size
  * https://packagephobia.com/

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

* Git
  
  * cherry-pick
  
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



待读：



* [React 架构的演变 - 更新机制](https://mp.weixin.qq.com/s/-a4RayWkOuKOMcRlOj1Few)
* [聊聊 Axios 中值得学习的核心知识点](https://mp.weixin.qq.com/s/KfIbhT5ZubvVzNHEIyiXEA)

