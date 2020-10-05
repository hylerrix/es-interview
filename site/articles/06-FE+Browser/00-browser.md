# 浏览器

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