# CSS 进阶

## CSS 响应式

> CSS 像素、物理像素、逻辑像素、设备像素比、PPI、Viewport 区别及实现，https://github.com/jawil/blog/issues/21

### 响应式设计与自适应设计？

响应式设计和自适应设计都以提高不同设备间的用户体验为目标，根据视窗大小、分辨率、使用环境和控制方式等参数进行优化调整。

- 响应式设计的适应性原则：网站应该凭借一份代码，在各种设备上都有良好的显示和使用效果。响应式网站通过使用媒体查询，自适应栅格和响应式图片，基于多种因素进行变化，创造出优良的用户体验。就像一个球通过膨胀和收缩，来适应不同大小的篮圈。
- 自适应设计更像是渐进式增强的现代解释。与响应式设计单一地去适配不同，自适应设计通过检测设备和其他特征，从早已定义好的一系列视窗大小和其他特性中，选出最恰当的功能和布局。与使用一个球去穿过各种的篮筐不同，自适应设计允许使用多个球，然后根据不同的篮筐大小，去选择最合适的一个。

### 如何理解媒体查询？

> https://www.cnblogs.com/xiaohuochai/p/5848612.html

* 媒体查询由一个可选的媒体类型和零个或多个使用媒体功能的限制了样式表范围的表达式组成，例如宽度、高度和颜 色。媒体查询，添加自CSS3，允许内容的呈现针对一个特定范围的输出设备而进行裁剪，而不必改变内容本身,非常适 合web网⻚应对不同型号的设备而做出对应的响应适配。
* 媒体查询包含一个可选的媒体类型和，满足CSS3规范的条件下，包含零个或多个表达式，这些表达式描述了媒体特 征，最终会被解析为true或false。如果媒体查询中指定的媒体类型匹配展示文档所使用的设备类型，并且所有的表达式 的值都是true，那么该媒体查询的结果为true.那么媒体查询内的样式将会生效。

```html
<!-- link元素中的CSS媒体查询 -->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />
<!-- 样式表中的CSS媒体查询 --> <style>
@media (max-width: 600px) {
.facet_sidebar { display: none;
} }
</style>
```

### 什么是设备独立像素（DIP）？

`<meta name="viewport" content="width=device-width,initial-scale=1">`。

* 浏览器使用的宽度像素 DIP，并不是你设备真正的硬件宽度像素。
* 如果你没有在代码当中指定 viewport，那么，浏览器会默认使用 DIP 为 980px，在手机这种小屏幕设备中，设备宽度会很小，在很小的宽度中显示 980px，所有东西自然都变地很小。
* `window.devicePixelRatio` 查看屏幕密度描述符：`<img src=”people_1x.jpg” srcset=”people_1x.jpg 1x, people_2x.jpg 2x” alt=”people”>`。

### em\px\rem 区别?

* px：绝对单位，⻚面按精确像素展示。 
* em：相对单位，基准点为父节点字体的大小，如果自身定义了 font-size 按自身来计算(浏览器默认字体是 16px)，整个⻚面内1em不是一个固定的值。
* rem:相对单位，可理解为”root em”, 相对根节点html的字体大小来计算，CSS3新加属性，chrome/firefox/IE9+ 支持

### Canvas/SVG/PNG/JPG 的区别？



## CSS 动画和 3D

> https://www.cnblogs.com/xiaohuochai/p/5391663.html
>
> https://www.cnblogs.com/xiaohuochai/p/5347930.html

### 如何理解 translate？

> https://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/

* translate()是transform的一个值。改变transform或opacity不会触发浏览器重新布局(reflow)或重绘(repaint)，只会 触发复合(compositions)。而改变绝对定位会触发重新布局，进而触发重绘和复合。transform使浏览器为元素创建一 个 GPU 图层，但改变绝对定位会使用到 CPU。 因此translate()更高效，可以缩短平滑动画的绘制时间。
* 而translate改变位置时，元素依然会占据其原始空间，绝对定位就不会发生这种情况。

## CSS 工程实战

### 如何理解栅格系统？

### CSS 怎么影响浏览器 reflow/repaint/compositing

### CSS Hack 的分类？

- 属性前缀法(即类内部 Hack)：属性前缀法是在 CSS 样式属性名前加上一些只有特定浏览器才能识别的 Hack 前缀，以达到预期的页面展现效果。

> 说明，在标准模式中：
>
> 1. "-" 减号是IE6专有的hack
> 2. "\9" IE6/IE7/IE8/IE9/IE10都生效
> 3. "\0" IE8/IE9/IE10都生效，是IE8/9/10的hack
> 4. "\9\0" 只对IE9/IE10生效，是IE9/10的hack

- 选择器前缀法(即选择器 Hack)：针对一些页面表现不一致或者需要特殊对待的浏览器，在 CSS 选择器前加上一些只有某些特定浏览器才能识别的前缀进行 Hack。例如。

```
*html *前缀只对 IE6 生效
*+html *+前缀只对 IE7 生效
@media screen\9{...}只对 IE6/7 生效
@media \0screen {body { background: red; }}只对 IE8 有效
@media \0screen\,screen\9{body { background: blue; }}只对 IE6/7/8 有效
@media screen\0 {body { background: green; }} 只对 IE8/9/10 有效
@media screen and (min-width:0\0) {body { background: gray; }} 只对 IE9/10 有效
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {body { background: orange; }} 只对 IE10 有效
等等
```

- IE 条件注释法(即 HTML 条件注释 Hack)：这种方式是 IE 浏览器专有的 Hack 方式，微软官方推荐使用的 Hack 方式。如下。

```
只在 IE 下生效
<!--[if IE]>
这段文字只在 IE 浏览器显示
<![endif]-->

只在 IE6 下生效
<!--[if IE 6]>
这段文字只在 IE6 浏览器显示
<![endif]-->

只在 IE6 以上版本生效
<!--[if gte IE 6]>
这段文字只在 IE6 以上(包括)版本 IE 浏览器显示
<![endif]-->

只在 IE8 上不生效
<!--[if ! IE 8]>
这段文字在非 IE8 浏览器显示
<![endif]-->

非 IE 浏览器生效
<!--[if !IE]>
这段文字只在非 IE 浏览器显示
<![endif]-->
```

### CSS Hack 有哪些技巧？

我们把这个针对不同的浏览器或不同版本编写相应 CSS 的过程，叫做 CSS Hack。

一般情况下，我们尽量避免使用 CSS Hack，但是有些情况为了顾及用户体验实现向下兼容，不得已才使用 Hack。使用 Hack 虽然对页面表现的一致性有好处，但过多的滥用会造成 HTML 文档混乱不堪，增加管理和维护的负担。

常见的浏览器兼容问题机器 hack 技巧：

- PNG 24位的图片在 IE6 浏览器上出现背景，解决方案是做成 PNG8。
- 浏览器默认的 margin 和 padding 不同。解决方案是加一个全局的 `*{ margin:0; padding:0;}`来统一。
- IE6双边距bug：块属性标签float后，又有横行的 margin 情况下，在 IE6 显示 margin 比设置的大。

```
.bb{
    background-color: red;/* 所有识别 */
    background-color: #00deff\9; /* IE6、7、8 识别*/
    +background-color: #a200ff;/* IE6、7 识别*/
    _background-color: #1e0bd1;/* IE6 识别*/
}
```

- IE 下,可以使用获取常规属性的方法来获取自定义属性，也可以使用 getAttribute() 获取自定义属性;Firefox 下,只能使用 getAttribute() 获取自定义属性。解决方法:统一通过 getAttribute() 获取自定义属性。
- IE下,event 对象有x, y 属性,但是没有pageX, pageY 属性;Firefox 下,event 对象有 pageX, pageY 属性,但是没有 x, y 属性。
- 解决方法：(条件注释)缺点是在 IE 浏览器下可能会增加额外的 HTTP 请求数。
- Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示，可通过加入 CSS 属性 `-webkit-text-size-adjust: none;` 解决。
- 超链接访问过后 hover 样式就不出现了 被点击访问过的超链接样式不在具有 hover 和 active 了解决方法是改变 CSS 属性的排列顺序：`L-V-H-A : a:link {} a:visited {} a:hover {} a:active {}`

### CSS 如何清除浮动？

* 空div方法: `<div style="clear:both;"></div>`
* Clearfix 方法:上文使用.clearfix类已经提到
* overflow: auto或overflow: hidden方法，使用BFC

### CSS 隐藏内容的技巧？

这些与元素的可访问性有关。

- `visibility: hidden`：元素仍然在页面流中，并占用空间，不可以交互。
- `overflow: hidden`：这个只隐藏元素溢出的部分，但是占据空间且不可交互。
- `display: none`：这个是彻底隐藏了元素，元素从文档流中消失，既不占据空间也不交互，也不影响布局。
- `width: 0; height: 0`：使元素不占用屏幕上的任何空间，导致不显示它。
- `position: absolute; left: -99999px`： 将它置于屏幕之外。
- `text-indent: -9999px`：这只适用于 block 元素中的文本。
- `opacity: 0`：本质上是将元素的透明度将为0，就看起来隐藏了，但是依然占据空间且可以交互。
- `z-index: -9999`：原理是将层级放到底部，这样就被覆盖了，看起来隐藏了。
- `transform: scale(0, 0)`：平面变换，将元素缩放为0，但是依然占据空间，但不可交互。
- 更多的 Hack 技巧：还有一些靠绝对定位把元素移到可视区域外，或者用clip-path进行裁剪的操作。

### 什么是 CSS 雪碧图？

* 雪碧图是把多张图片整合到一张上的图片。它被运用在众多使用了很多小图标的网站上。实现方法：
  * 使用生成器将多张图片打包成一张雪碧图，并为其生成合适的 CSS。
  * 每张图片都有相应的 CSS 类，该类定义了 `background-image`、`background-position` 和 `background-size` 属性。
  * 使用图片时，将相应的类添加到你的元素中。

* 好处：
  * 减少加载多张图片的 HTTP 请求数。但是对于 HTTP2.0 而言，加载多张图片不再是问题。
  * 提前加载资源，防止在需要时才在开始下载引发的问题，比如只出现在 :hover 伪类中的图片，不会出现闪烁。
* 缺点：
  - CSS Sprite维护成本较高，如果⻚面背景有少许改动，一般就要改这张合并的图片
  - 加载速度优势在http2开启后荡然无存，HTTP2多路复用，多张图片也可以重复利用一个连接通道搞定

### CSS 预处理器和后处理器？

* 预处理器
  * 优点：
    * 提高 CSS 可维护性。
    * 易于编写嵌套选择器。
    * 引入变量，增添主题功能。可以在不同的项目中共享主题文件。
    * 通过混合(Mixins)生成重复的 CSS。
    * 将代码分割成多个文件。不进行预处理的 CSS，虽然也可以分割成多个文件，但需要建立多个 HTTP 请求加载这些文件。

  * 缺点：
    * 需要预处理工具。
    * 重新编译的时间可能会很慢。
* less,sass,stylus 三者之间的不同点

