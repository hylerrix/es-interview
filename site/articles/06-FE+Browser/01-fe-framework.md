# 前端

## 前端架构

- SSR、SPA、双向绑定、懒加载、MVVM：Proxy 与 object.defineProperty

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

## 实现 Vue 的双向绑定

Vue 2.x 的 Object.defineProperty 版本

```javascript
// 数据
const data = {
  text: 'default'
};
const input = document.getElementById('input');
const span = document.getElementById('span');
// 数据劫持
Object.defineProperty(data, 'text', {
  // 数据变化 —> 修改视图
  set(newVal) {
    input.value = newVal;
    span.innerHTML = newVal;
  }
});
// 视图更改 --> 数据变化
input.addEventListener('keyup', function(e) {
  data.text = e.target.value;
});
```

Vue 3.x 的 proxy 版本

```javascript
// 数据
const data = {
  text: 'default'
};
const input = document.getElementById('input');
const span = document.getElementById('span');
// 数据劫持
const handler = {
  set(target, key, value) {
    target[key] = value;
    // 数据变化 —> 修改视图
    input.value = value;
    span.innerHTML = value;
    return value;
  }
};
const proxy = new Proxy(data, handler);

// 视图更改 --> 数据变化
input.addEventListener('keyup', function(e) {
  proxy.text = e.target.value;
});
```

## 如何解决 getter/setter 不能监听数组变异方法

## 监听的回调和事件怎么解耦的

## watcher 去重怎么做的

## DOM批更新怎么做的



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

## MV* 框架都有哪些及其特点？

* MV\* 框架
  * MVC：模型、视图、控制器
  * MVP：模型、视图、表示器
  * MVVM：模型、视图、视图模型

* 为什么要使用 MV\* 框架：关注点分离、简化日常任务、提升生产率、标准化、更高效的合作、独立代码更容易更改、更干净的单元测试。

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

## 前端都可以怎么压缩？

GZip 压缩

- 是一种压缩格式，需要浏览器支持才有效(不过一般现在浏览器都支持)， 而且 GZip 压缩效率很好(高达70%左右)
- 然后 GZip 一般是由 Apache、Tomcat 等 Web 服务器开启
- 服务器除了 GZip 外，也还会有其它压缩格式(如 deflate，没有 gzip 高效，且不流行)
- 一般只需要在服务器上开启了 GZip 压缩，然后之后的请求就都是基于 GZip 压缩格式的, 非常方便。

