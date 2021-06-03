# HTML

## 基础

### HTML5 有哪些新特性？

* 主要是关于图像，位置，存储，多任务等功能的增加。
* 文件类型声明只有一种：`<!DOCTYPE HTML>`。
* 新增特性：
  * 新增的语义化标签：`header / nav / article/ section/ aside / footer / progress / meter / command /datalist / details / embed / figcaption / figure /  hgroup / keygen / mark / output / rp / rt / ruby / source / summary / wbr`。
  * 表单控件: `calendar`、`date`、`time`、`email`、`url`、`search`。
  * 用于媒介回放的 `video` 和 `audio` 元素。
  * 定义图形的 `canvas` 元素。
  * 新的技术：`webworker, websocket, Geolocation`。
  * 新的局部属性：`ping (用于 a 与 area)`、`charset (用于 meta)`、`async (用于 script)`。
  * 新的全局属性：`id`、`tabindex`、`repeat`、`contextmenu`、`draggable`、`dropzone`、`hidden`、`spellcheck`。
  * 提供了本地存储方案：
    * `localStorage` 用于持久化的本地存储，数据永远不会过期，关闭浏览器也不会丢失。
    * `sessionStorage` 同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此 sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。
* 移除特性：
  * 纯表现的元素：
    * `<basefont>; <font>; <center>; <u>; <big>; <strike>; <tt>` 
  * 框架集：`<frameset>; <noframes>; <frame>;`
  * `acronym`、`applet` 、`dir`、`isindex`。
* 如何区分 HTML 和 HTML5
  * 文档类型声明方式 DocType 不同：HTML4.01 和 XHTML1.0 有三种模式的写法；HTML 只有一种。
  * 结构语义：html 4.0 没有体现结构语义化的标签，html5 添加了许多具有语义化的标签。
  * html5 具有特色功能，比如直接在网页用 video、audio 播放多媒体等。

### 行内元素、块级元素、空元素都有哪些？

> 待补充：https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories

* 常用块级元素：`<h1~h6>; <p>; <div>; <form>; <ol>; <ul>; <table>; <vedio>; <audio>; <header>; <footer>`。
* 常用行内元素：`button; input; span; a; img; lable; select; textarea; i`。
* 空元素(没有内容的 HTML 元素)：`<br>; <link>; <meta>; <img>; <input>; <hr>; <col>`。
* 块级元素和行内元素的区别：
  * 块级元素默认情况下会以新行开始，块级元素占据其父元素（容器）的整个空间，可以设置宽高；
  * 行内元素只占据它对应标签的边框所包含的空间，默认情况下不会以新行开始，不可以设置宽高。
* 块级元素和行内元素的切换：通过修改 display 属性来切换块级元素和行内元素。
  * `display:inline;` 属性则变为行内元素。
  * `display:block;` 属性则变为块级元素。

### HTML5 语义化标签有哪些？

* 语义化让页面具有良好的结构和含义。
* 语义化的好处：
  * 开发者友好：使用语义类标签增强了可读性，开发者也能够清晰地看出网页的结构，也更为便于团队的开发和维护
  * 机器友好：带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，语义类还可以支持读屏软件，根据文章可以自动生成目录。

| 语义化标签  | 作用                                                         | 示例                                                         |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| article     | 装载显示一个独立的文章内容，可以嵌套                         | 一篇完整的论坛帖子、一则网站新闻、一篇博客文章               |
| section     | 定义文档中的节/区段                                          | 章节、页眉、页脚                                             |
| aside       | 用来装载非正文类的内容                                       | 广告、成组的链接、侧边栏                                     |
| hgroup      | 用于对网页或区段的标题元素(h1-h6)进行组合                    | 连续的 h 系列的标签元素可以用  hgroup 将他们括起来           |
| header      | 定义文档的页面组合                                           | 一些引导和导航信息                                           |
| footer      | 定义 section 或 document 的页脚                              | 典型时可包含创作者的姓名、文档的创作日期以及/或者联系信息。  |
| nav         | 定义显示导航链接。不是所有的成组的超级链接都需要放在nav标签里。nav标签里应该放入一些当前页面的主要导航链接 | 在页脚显示一个站点的导航链接(如首页，服务信息页面，版权信息页面等等) |
| time        | 定义公历的时间(24 小时制)或日期，时间和时区偏移是可选的。该元素能够以机器可读的方式对日期和时间进行编码 | 用户代理能够把生日提醒或排定的事件添加到用户日程表中，搜索引擎也能够生成更智能的搜索结果 |
| mark        | 定义带有记号的文本                                           | 请在需要突出显示文本时使用 标签                              |
| figure      | 规定独立的流内容。figure 元素的内容应该与主内容相关，但如果被删除，则不应对文档流产生影响。 | 独立流内容如图像、图表、照片、代码等等                       |
| figcaption  | 定义 figure 元素的标题（caption）                            | "figcaption" 元素应该被置于 "figure" 元素的第一个或最后一个子元素的位置 |
| contextmenu | 添加到系统右键菜单                                           | 貌似这个功能只有 firefox 支持                                |

### src 和 href 的区别？

* src：
  * 指向外部资源的位置
  * 指向的内容会嵌入到文档中当前标签所在的位置
  * 在请求 src 资源时会将其指向的资源下载应用到文档内（如 js 脚本、img 图片、frame 元素等）
  * 当浏览器解析到该元素时，一般会暂停其它资源的下载和处理，知道将该资源加载、编译、执行完毕，所以一般 js 脚本会放在底部而不是头部。（script 标签下的 defer 和 async 时例外）
* href：指向网络资源所在位置的超链接，用来建立和当前元素或文档之前的连接，当浏览器识别到它指向的文件时，就会并行下载资源，不会停止对当前文档的处理。

### 什么是 SGML/XML/XHTML？

* SGML：
  * HTML5 开始不再基于 SGML

* HTML 与 XHTML（可拓展超文本标记语言） 的区别
  * XHTML 元素必须被正确地嵌套，HTML 不需要被正确嵌套也不会报错
  * XHTML 元素必须被关闭(空标签也必须被关闭)，HTML 空标签不需要被关闭
  * XHTML标签名必须用小写字母，HTML 可以大写
  * XHTML 文档必须拥有根元素
* XML：可拓展标记语言
  * 主要用于存储数据和结构，可扩展。

## 标签

### DocType 标签的用途？

* DOCTYPE 是 Document Type 的缩写，是一种标准通用标记语言的文档类型声明。
* 对 HTML 文件来说，浏览器使用文件开头的 DOCTYPE 来决定用怪异模式处理或是用标准模式处理；为了确保页面使用标准模式，需要引入 DocType。混杂模式服务于旧式规则，而严格模式服务于标准规则。
  * `标准模式`： 行为即为由 HTML 与 CSS 的规范描述的行为。
  * `怪异模式`： 排版会模拟 Navigator 4 与 IE5 的非标准行为
  * `接近标准模式`：只有少数的怪异行为被实现。
  * 如果说只存在严格模式，那么许多旧网站必然受到影响，如果只存在混杂模式，那么会回到当时浏览器大战时的混乱，每个浏览器都有自己的解析模式。
* 不同版本的声明方式：
  * HTML 4.01 基于 SGML(标准通用标记语言)。分为严格模式、过渡模式、框架模式。
  * HTML 5 不基于 SGML，不需要对 DTD 进行引用,只有一种声明方式。

### Script 标签的用途？

* 通常情况下，`<script>` 标签最好放在 `</body>` 之前，这样可以保证 HTML 文档首先完成解析，将页面尽早呈现给用户。解决方案是使用 `<script>` 标签的 defer、async 属性，具体区别如下。
  * 没有 defer、async 时，HTML 解析中断，脚本被提取并立即执行。执行结束后，HTML 解析继续。
  * 只有 **defer** 时：立即下载，按照原来的标签顺序延迟执行
    - 脚本仅提取过程与 HTML 解析过程并行，脚本的执行将在 HTML 解析完毕后进行。
    - 如果含有多个 defer 脚本，脚本的执行顺序将按照在 document 中出现的位置，从上到下顺序执行。
  * 只有 **async** 时：异步下载完成后就执行，先下载完成的先执行。
    - 脚本的提取、执行的过程与 HTML 解析过程并行，脚本执行完毕可能在 HTML 解析完毕之前。
    - 当脚本与页面其它脚本相互独立时，可以使用 async，比如用作页面统计。
  * 注意：没有 src 属性的脚本，defer、async 属性将会被忽略。

### Meta 标签的用途？

* meta 标签由 name 和 content 两个属性来定义，来描述一个 HTML 网页文档的属性，例如作者、日期和时间、网页描述、关键词、页面刷新等，除了一些 HTTP 标准规定了一些 name 外，也可以自定义 name。
* chaset：用于描述 HTML 文档的编码形式。
  * `<meta charset="UTF-8">`。
* http-equiv：相当于 HTTP 的头文件作用，如设置  HTTP 的缓存过期日期。
  * `<meta http-equiv="expires" content="Wed, 20 Jun 2019 22:33:00 GMT">`。
* viewport，移动端支持，可以控制视口的大小和比例。
  * `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">`。
* apple-mobile-web-app-status-bar-style，PWA 相关。
  * `<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">`。


### Link 标签的用途（含 @import）？

* 通常情况下，`<link>` 标签最好放在 `<head></head>` 中，这是规范要求的内容。这样做可以让页面逐步呈现，防止呈现给用户的是空白页面或没有样式的内容，提高了用户体验。
* `@import` 与 link 的区别：
  * `@import` 用于从其他样式表导入样式规则，语法： `@import url`。
  * 从属关系区别：link 属于 XHTML 标签，除了加载 CSS 外，还能用于定义 RSS，定义 rel 属性等作用；@import 是 CSS 提供的，用于引入外部文件。
  * 加载顺序区别：link 标签引入的 CSS 被同时加载，@import 引入的 CSS 将在页面加载完毕后被加载（更耗时）。
  * DOM可控性区别：当使用 JavaScript 控制 DOM 去改变样式的时候，只能使用 Link 标签，无法使用 @import 的方式插入样式。
* link 标签可定义的常用属性：
  * rel：指明被链接文档与当前文档的关系(如stylesheet)
  * href：指定被链接资源的URL
  * type：定义链接内容的类型（text/css）
* 属性 href 与 src 的区别
  * `href` 用来建立当前元素和文档之间的链接，它的内容与该页面有关联，表示引用。用在 `link; a` 等元素上。
  * `src` 会将其指向的资源下载并应用到文档中；它指向的内容是页面必不可少的一部分，表示引入。用在 `img，script，iframe` 等元素上。

### Canvas 标签的用途？

* canvas 可以通过使用 JavaScript 中的脚本来绘制 2/3D 图形，制作照片、创建动画等。
* 如何使用 `<canvas>` 绘图：
  * 大多数 Canvas 绘图 API 都没有定义在`<canvas>` 元素本身上，而是定义在通过画布的 `getContext()` 方法获得的一个“绘图环境”对象上。
  * Canvas API 也使用了路径的表示法。路径由一系列的方法调用来定义，比如调用 beginPath() 和 arc() 方法。一旦定义了路径，其他的方法，如 fill()，都是对此路径操作。
* 和 SVG 以及 VML 之间的差异
  * `<canvas>` 有一个基于 JavaScript 的绘图 API，而 SVG 和 VML 使用一个 XML 文档来描述绘图。
  * SVG 绘图很容易编辑，只要从其描述中移除元素就行。而要从同一图形的一个 `<canvas>` 标记中移除元素，需要擦掉绘图重绘。

## 属性

### `data-` 属性是什么？

在 JavaScript 框架流行前，常用 `data-` 属性把额外数据存储在 DOM 自身中。现在鼓励将数据模型存放在 JavaScript 本身中，并利用框架提供的数据绑定，使之与 DOM 保持更新。

## 进阶

### 如何理解 HTML 的可访问性？

- Metadata： 例如通过使用 Schema.org，RDF 和 JSON-LD。
- WAI-ARIA：如何增加网页可访问性的 W3C 技术规范。
  即使 WAI-ARIA 是理想的解决方案，我也会采用绝对定位方法，因为它具有最少的注意事项，适用于大多数元素，而且使用起来非常简单。

### 如何实现响应式图片？

* `<img>` 的 srcset 属性配合 sizes 属性。
  * serset 定义了我们允许浏览器选择的图像集，以及每个图像的大小。
  * sizes 定义了一组媒体条件（例如屏幕宽度）并且指明当某些媒体条件为真时，什么样的图片尺寸是最佳选择。
  * 浏览器遇到该属性后的处理过程：
    * 查看设备宽度
    * 检查 sizes 列表中哪个媒体条件是第一个为真
    * 查看给予该媒体查询的槽大小
    * 加载 srcset 列表中引用的最接近所选的槽大小的图像
* `<picture>` 通过包含零或多个 `<source>` 元素和一个 `<img>` 元素来为不同的显示/设备场景提供图像版本。
  * 浏览器会选择最匹配的子 `<source>` 元素，如果没有匹配的，就选择 `<img>` 元素的 src 属性中的 URL。

```html
<picture>
  <source srcset="/media/examples/surfer-240-200.jpg" media="(min-width: 800px)">
  <img src="/media/examples/painted-hand-298-332.jpg" />
</picture>
```

### HTML5 新标签如何兼容老浏览器

### HTML 的渐进式渲染

渐进式渲染是用于提高网页性能(尤其是提高用户感知的加载速度)，以尽快呈现页面的技术。该技术在以前互联网宽带小时常常需要使用，现虽移动终端盛行，但移动网络不稳定，仍然有用武之地。举例如下：

- 图片懒加载。页面上的图片不会一次性全部加载。当用户滚动页面到图片部分时，JavaScript 将加载并显示图像。
- 确定显示内容的优先级(分层次渲染)。为了尽快将页面呈现给用户，页面只包含基本的最少量 CSS、脚本和内容，然后可以使用延迟加载脚本或监听 DOMContentLoaded/Load 事件加载其他资源和内容。
- 异步加载分段 HTML。当页面通过后台渲染时，把 HTML 拆分，通过异步请求，分块发送给浏览器。

### HTML 的 SEO 优化策略都有哪些？

### HTML 模板引擎是怎样工作的？

### HTML 网页搭配多语言

客户端可在发送 HTTP 请求时，使用 `Accept-Language` 请求头，让服务器返回相匹配语言的 HTML 文档。返回的文档还应在 `<html>` 标签中声明 lang 属性。后台不同的语言，多以 YML 或 JSON 格式存储，并动态的生成指定的 HTML 页面，整个过程通常需要借助后台框架实现。

在开发多语言网站时，应注意如下事项：

- 在 HTML 中使用 lang 属性。
- 引导用户切换到自己的母语。
- 在图片中展示文本会阻碍网站规模增长。
- 限制词语或句子的长度。网页内容在使用其他语言时，文字长度会发生变化，设计时应多加考虑。
- 注意颜色的使用。不同语言和文化中，颜色的意义、感受是不同的。
- 日期和货币的格式化。
- 不要使用连接的翻译字符串。如不使用 `I will travel on {% date %}`。
- 注意语言阅读方向。如英语从左向右，传统日语从右向左。