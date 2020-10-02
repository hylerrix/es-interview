# 4️⃣ 前端应用开发 + 浏览器

## 浏览器

- localStorage、sessionStorage、cookie、Session
- Web Worker，Web Storage
- 跨域：jsonp、CORS、nginx 代理...
- http 长链接，浏览器缓存
- 浏览器渲染流程
- 浏览器多进程与 JavaScript 单线程
- 浏览器抓包
- 三次握手、四次挥手
- 跨域、同源策略：jsonp、cors、服务器代理、document.domain、postMessage
- 存储：cookie、sessionStorage、localStorage、indexDB、ServiceWorker
- 渲染、重绘

> 浏览器多线程

GUI 渲染线程

JS 引擎线程

事件触发线程

异步 HTTP 请求线程

Web Worker

> 浏览器多标签页之间的通信

WebSocket

LocalStorage：事件监听，无关跨域

SharedWorker：但必须是同源的

## 常见浏览器内核及其组成？

* 常见的浏览器内核：
  * Trident 内核：IE、360、搜狗浏览器、MaxThon、TT、The World 等。[又称 MSHTML]。
  * Gecko 内核：火狐、FF、MozillaSuite、SeaMonkey 等。
  * Presto 内核：Opera7 及以上。[Opera 内核原为：Presto，现为：Blink]。
  * Webkit 内核：Safari、Chrome 等。 [ Chrome 的：Blink（WebKit 的分支）]。
* 浏览器内核的组成：
  * 渲染引擎。
  * JavaScript 引擎。

## 前端架构

- 权限组件的设计
- SSR
- SPA
- 双向绑定
- 懒加载
- MVVM：Proxy 与 object.defineProperty

## React

- React v15, v16, v17
- 生命周期（v15 到 v16）、组件化
- React -> Hooks、useEffect、setState
- 懒加载
- 虚拟 DOM
- Redux
- Fiber
- Concurrent
- 性能优化：function component + redux、immutable、pure component , shouldComponentUpdate ...

## Vue

> nexttick

> React 和 Vue 的区别

相同点

- 都有组件化开发和Virtual DOM
- 都支持props进行父子组件间数据通信
- 都支持数据驱动视图, 不直接操作真实DOM, 更新状态数据界面就自动更新
- 都支持服务器端渲染
- 都有支持native的方案,React的React Native,Vue的Weex

不同点

- 数据绑定: vue实现了数据的双向绑定,react数据流动是单向的
- 组件写法不一样, React推荐的做法是 JSX , 也就是把HTML和CSS全都写进JavaScript了,即'all in js'; Vue推荐的做法是webpack+vue-loader的单文件组件格式,即html,css,js写在同一个文件
- state对象在react应用中不可变的,需要使用setState方法更新状态;在vue中,state对象不是必须的,数据由data属性在vue对象中管理
- virtual DOM不一样,vue会跟踪每一个组件的依赖关系,不需要重新渲染整个组件树.而对于React而言,每当应用的状态被改变时,全部组件都会重新渲染,所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制
- React严格上只针对MVC的view层,Vue则是MVVM模式

概念

- 组件通信：父向子、子向父、隔代、兄弟
- 实现通信方式

- - props：父向子传递一般属性、子向父传递函数属性；缺点隔代不好
  - vue 自定义事件：Vue 内置，代替函数类型的 props【绑定监听 @、触发事件 emit】
  - 消息订阅与发布：常见订阅库 pubsub-js，适用于任意关系组件
  - vuex：相比 pubsub 管理起来更集中方便
  - slot：专门用来实现父向子传递带数据的标签

## WebPack + Babel

- 优化的两大方向：速度、体积

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
- 浏览器缓存：强缓存、协商缓存
- CDN
- 资源预加载：预解析DNS

## 前端部署

- 如何保证打包文件替换过程中，用户体验不断
- 前端的多集群分布式部署？

## 前端 + 浏览器安全性

- Xss csrf

## 移动端开发

- React Native、Flutter
