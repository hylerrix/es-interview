# CSS

> 设计：字体、Logo、颜色、语音、图标、可访问性
>
> 常见的字体有哪些？如何安装字体？浏览器通用字体？
>
> CSS 选择器背后的原理？
>
> 哪些 CSS 特性和 GPU 有关？其是如何工作的？
>
> * 清除浮动有哪些方法
> * div / :after = clear: both;
> * 父级 overflow: hidden;
>
> 字体的知识，排版的知识
>
> CSS 如何实现十列布局
>
> 如何实现通过不同的类名，来控制它的均分？比如我传 col2，那么这一列就占 20%，col3 就占 30%
>
> 让元素横着排列，除了 flex 还可以怎么做？
>
> flex 主轴与交叉轴的方向用哪个属性定义？如何颠倒这些属性？
>
> * 说一下 flex 中，你常用的属性？
> * flex 溢出换行用的哪个属性？
> * 说一下 flex-grow 怎么使用？
>
> opengl，webgl，canvas，svg，css3几个的关系区别，啥场景用啥
>
> 如何进行媒体查询
>
> 定位元素的常见方法
>
> 如何用 CSS 实现 hr 标签

## CSS 基础和规范

### 什么是样式表？

* 样式表是一种将网页的内容和表示分离的网页设计形式，在网页设计中网页标记(HTML 或 XHTML)包含页面的语义内容和结构，但没有定义其可视化布局(风格)。相反，风格的定义是在一个外部的样式表文件中，使用如 CSS、XSLT 样式表语言。这种设计方法被认为是一种“分离”，因为它在很大程度上取代了以前风格和结构在一起的定义方法。 这种方法背后的哲学是一种关注点的分离。
  * 优点：速度、可维护性、可访问性、定制、一致性、可移植性
  * 缺点：没有解析和生成工具导致应用范围小

* 其它样式表语言有：
  * 1998.5.12 CSS2 发布，推行内容和表现分离，表格布局开始落寞
  * 2007 CSS2.1 发布
  * 从 CSS2+ 开始，前端技术更加关注图片和文字的呈现。

### CSS3 有哪些新特性？

* 文本类：
  * `text-shadow`： 给文本应用阴影
  * `word-wrap`:  强制文本进行换行
  * `@font-face` 字体规则； 可以用来加载字体样式，还可将该字体文件存放到 web 服务器上，它会在需要时被自动下载到用户的计算机上。
* css3 边框：
  * border-radius 圆角
  * border-image 使用图片创建边框
  * box-shadow 给边框添加阴影
* css3 背景：
  * background-size 规定背景图片的尺寸；
  * background-origin 属性规定背景图片的定位区域(content/padding/border)
* 2D/3D 转化：
  * 2D转化：translate(left,top) 方法使元素从其当前位置移动等
  * 3d转化：rotateX() 等方法使元素围绕其 坐标轴以给定的度数进行旋转
* 过渡：通过把效果添加到某个具体的 css 属性上并规定效果时长来使得元素从一种样式逐渐改变为另一种的效果
* 动画：在 @keyframes  中规定某项 CSS 样式，就能创建由当前样式逐渐改为新样式的动画效果
* 多列布局：
  * column-count 属性规定元素应该被分隔的列数
  * column-gap 属性规定列之间的间隔
  * column-rule 属性设置列之间的宽度、样式和颜色规则
* 新的用户界面属性:
  * `box-sizing`：允许以特定的方式定义匹配某个区域的特定元素,例如值设置为border-box则为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制z
  * `outline-offset`：对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓
  * `resize`：属性规定是否可由用户调整元素尺寸

### CSS 各种数值单位？

* 整数值、数值、百分比值、长度值、颜色值、字符串值
* CSS3：角度值、频率值、时间值
* 属性值：
  * 属性值可以由单一内容构成，也可以由“值 + 关键字 +功能符”构成。
  * 属性值：声明、声明块、规则、规则集、选择器
* 长度单位：
  * 相对长度单位
    * 相对字体长度单位：em、ex，CSS3：rem、ch
    * 相对视区长度单位：vh、vw、vmin、vmax
  * 绝对长度单位
    * px
    * 不常用的：pt、cm、mm、pc
* 颜色单位：
  * 十六进制色。
  * RGB 颜色：每个参数 (red、green 以及 blue) 定义颜色的强度，可以是介于 0 与 255 之间的整数，或者是百分比值（从 0% 到 100%）。
  * RGBA 颜色：`rgba(red, green, blue, alpha)`。alpha 参数是介于 0.0（完全透明）与 1.0（完全不透明）的数字。
  * HSL 颜色：`hsl(hue, saturation, lightness)`。色度，饱和度，亮度。
  * HSLA 颜色：在 HSL 基础上，多了透明度。

### CSS Resetting 和 CSS Normalizing？

* 重置，Resetting：意味着出去所有的浏览器默认样式，对于页面所有元素必须重新定义各种元素的样式。可用在非常个性化的网页设计上。
* 标准化，Normalizing：标准化没有去掉所有的默认样式，而是保留了有用的一部分，同时还纠正了一些常见的错误。

### 什么是 CSS 的 BEM、BNF 规范？

BEM(Block Element Modifier)原则上建议为独立的 CSS 类命名，并且在需要层级关系时，将关系也体现在命名中，这自然会使选择器高效且易于覆盖。

## 选择器与属性

### 如何获取所有/指定元素 CSS 属性列表？

```markdown
# w3 动态数据源，但是没有 -webkit 等前缀特殊元素
https://www.w3.org/Style/CSS/all-properties.en.json
https://www.w3.org/Style/CSS/all-properties.en.html
# MDN
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
https://developer.mozilla.org/en-US/docs/Web/CSS/WebKit_Extensions
https://developer.mozilla.org/en-US/docs/Web/CSS/Mozilla_Extensions
https://developer.mozilla.org/en-US/docs/Web/CSS/Microsoft_Extensions
# 从 Opera 15开始，不再支持 Opera 11 和 12 的扩展格式，而是改用 Chromium 的扩展模型。
```

getComputedStyle 获取所有/指定元素 CSS 属性

```html
<!-- 获取指定元素的 CSS 值，这里是 
  document.defaultView.getComputedStyle(up, null)
67-->
<!DOCTYPE HTML>
<html>

<head>
	<title>
		Getting all the CSS styles
		of an element using jQuery
	</title>
</head>

<body style="text-align:center;">
	<h1>GeeksForGeeks</h1>
	<p id="GFG_UP"></p>
	<button onclick="GFG_Fun();">
		Click Here
	</button>
	<p id="GFG_DOWN"></p>

	<script>
		var up = document.getElementById('GFG_UP');
		var down = document.getElementById('GFG_DOWN');
		
		up.innerHTML = "Click on the buttob "
			+ "to get the all CSS styles "
			+ "associated with the element.";
		function GFG_Fun() {
			var ar = document.defaultView
				.getComputedStyle(document.body, null);
      console.log('ar', ar)
			var str = "";
			for (var key in ar) {
				str = str + key + ': ' + ar[key] + "<br />";
			}
      console.log('str', str)
			down.innerHTML = str;
		}
	</script>
</body>
</html>
```

### CSS 选择器的分类？

* 通用元素选择器
* 标签选择器
* 类选择器ID 选择器
* 属选择器性：为拥有指定属性的 HTML 元素设置样式（例如:[title]{...}）
* 伪类选择器
* 伪元素选择器
* 子元素选择器：选择某个元素的子元素(h1 > em {..})
* 关系选择器
  * 后代选择器：可以选择作为某元素后代的元素（h1 em {..}）
  * 相邻后代选择器
  * 兄弟选择器
  * 相邻兄弟选择器：选择紧接在另一个元素后的元素(h1 + p{..})

CSS 基本选择器

| 序号 | 选择器  | 含义                                                | 定义在版本 |
| ---- | ------- | --------------------------------------------------- | ---------- |
| 1.   | *       | 通用元素选择器，匹配任何元素                        | 2          |
| 2.   | E       | 标签选择器，匹配所有使用 E 标签的元素               | 1          |
| 3.   | .info   | class 选择器，匹配所有 class 属性中包含 info 的元素 | 1          |
| 4.   | #footer | id 选择器，匹配所有 id 属性等于 footer 的元素       | 1          |

CSS 多元素的组合选择器

| 序号 | 选择器 | 含义                                                         | 定义在版本 |
| ---- | ------ | ------------------------------------------------------------ | ---------- |
| 5.   | E, F   | 多元素选择器，同时匹配所有 E 元素或 F 元素，E 和 F 之间用逗号分隔 | 1          |
| 6.   | E F    | 后代元素选择器，匹配所有属于 E 元素后代的 F 元素，E 和 F 之间用空格分隔 | 1          |
| 7.   | E > F  | 子元素选择器，匹配所有 E 元素的子元素 F                      | 2          |
| 8.   | E + F  | 毗邻元素选择器，匹配所有紧随 E 元素之后的同级元素 F          | 2          |

CSS 2.1 属性选择器

| 序号 | 选择器       | 含义                                                         | 定义在版本 |
| ---- | ------------ | ------------------------------------------------------------ | ---------- |
| 9.   | E[att]       | 匹配所有具有 att 属性的 E 元素，不考虑它的值。（注意：E 在此处可以省略，比如"[cheacked]"。以下同。） | 2          |
| 10.  | E[att=val]   | 匹配所有 att 属性等于"val"的 E 元素                          | 2          |
| 11.  | E[att~=val]  | 匹配所有 att 属性具有多个空格分隔的值、其中一个值等于"val"的 E 元素 | 2          |
| 12.  | E[att\|=val] | 匹配所有 att 属性具有多个连字号分隔（hyphen-separated）的值、其中一个值以"val"开头的 E 元素，主要用于 lang 属性，比如"en"、"en-us"、"en-gb"等等 | 2          |

CSS 3 的同级元素通用选择器

| 序号 | 选择器 | 含义                             | 定义在版本 |
| ---- | ------ | -------------------------------- | ---------- |
| 24.  | E ~ F  | 匹配任何在 E 元素之后的同级F元素 | 3          |

CSS 3 属性选择器

| 序号 | 选择器        | 含义                               | 定义在版本 |
| ---- | ------------- | ---------------------------------- | ---------- |
| 25.  | E[att^="val"] | 属性 att 的值以"val"开头的元素     | 3          |
| 26.  | E[att$="val"] | 属性 att 的值以"val"结尾的元素     | 3          |
| 27.  | E[att*="val"] | 属性 att 的值包含"val"字符串的元素 | 3          |

### CSS 选择器的优先级是怎样的？

* CSS 优先级，是指 CSS 样式在浏览器中被解析的先后顺序。在比较样式的优先级时，只需统计选择符中的 ID、class 和标签名的个数，然后把相应的权值相加即可，最后根据结果排出优先级。权值较大的优先级越高；权值相同的，后定义的优先级较高。

* 优先级特点：
  * 当同一个元素有多个声明的时候，优先级才会有意义；
  * 而当优先级与多个 CSS 声明中任意一个声明的优先级相等的时候，CSS 中最后的那个声明将会被应用到元素上。
  * 每一个直接作用于元素的 CSS 规则总是会覆盖该元素从祖先元素继承而来的规则
  * 文档树中元素的接近度 （Proximity of elements）对优先级没有影响
  * 通配选择符（universal selector）(*), 关系选择符（combinators） (+, >, ~, ' ')  和 否定伪类（negation pseudo-class）(:not()) 对优先级没有影响。（但是，在 :not() 内部声明的选择器是会影响优先级。

* 一种排序：
  * 样式值含有！important，优先级最高（尽量别使用，破坏了样式表中的固有的级联规则）；
  * ID 选择器优先级很高，权值为 100；
  * 类选择器、属性选择器和伪类选择器的权值为 10；
  * 标签选择器权值为 1。
* 另一种排序：

  * 优先级通过 4 个维度指标确定，我们假定以 a、b、c、d 命名，分别代表以下含义：
  * a 表示是否使用内联样式。如果使用，a 为 1，否则为 0。
  * b 表示 ID 选择器数量。
  * c 表示类选择器、属性选择器和伪类选择器数量之和。
  * d 表示标签(类型)选择器和伪元素选择器之和。
  * 优先级的结果并非通过以上四个值生成一个得分，而是每个值分开比较。a、b、c、d 权重从左到右，依次减小。判断优先级时，从左到右，一一比较，直到比较出最大值，即可停止。所以，如果b的值不同，那么 c 和 d 不管多大，都不会对结果产生影响。比如 0，1，0，0的优先级高于 0，0，10，10。
  * 当出现优先级相等的情况时，最晚出现的样式规则会被采纳。如果你在样式表里写了相同的规则（无论是在该文件内部还是其它样式文件中），那么最后出现的（在文件底部的）样式优先级更高，因此会被采纳。
  * 在写样式时，我会使用较低的优先级，这样这些样式可以轻易地覆盖掉。尤其对写 UI 组件的时候更为重要，这样使用者就不需要通过非常复杂的优先级规则或使用 !important 的方式，去覆盖组件的样式了。

### CSS 选择器查询原则及优化准则

浏览器是如何查找元素的呢？浏览器 CSS 匹配不是从左到右进行查找，而是从右到左进行查找。

比如 `#divBox p span.red {color: red;}` 浏览器的查找顺序如下：先查找 HTML 中所有 class='red' 的 span 元素，找到后，再查找其父辈元素中是否有 p 元素，再判断 p 的父元素中是否有 ID 为 divBox 的 DIV 元素，如果都存在则匹配上。

浏览器从右到左进行查找的好处是为了尽早过滤掉一些无关的样式规则和元素。

优化目的是减少 CSS 文件大小，提高维护性和可读性。优化准则如下。

- 不要在 ID 选择器前使用标签名
- 不要在 class 选择器前使用标签名
- 尽量少使用层级关系
- 使用 class 代替层级关系
- 在 CSS 渲染效率中 ID 和 class 的效率是基本相当的
- 使用属性简写
- 移除 CSS 框架中多余的内容
- 将 CSS 文件的声明用注释分隔开并进行排版
- 拆分布局风格：给每种布局一个单独的CSS文件
- 养成为 CSS 写注释的习惯
- 上线时压缩使用

### CSS 伪类与伪元素都有哪些？

伪类是加在选择器后面的用来指定元素状态的关键字。比如，:hover 会在鼠标悬停在选中元素上时应用相应的样式

- `:first-of-type/:last-of-type/:only-of-type`： 选择属于其父元素的首/最后/唯一的一个xx元素的每个 xx元素
- `:only-child`： 选择属于其父元素的唯一子元素的每个xx 元素
- `:empty`： 选择没有子元素的每个xx元素
- `:root`: 选择文档的根元素
- `::selection`： 选择被用户选取的元素部分
- `:checked/:disabled`： 选择每个被选中/禁用的xx元素

CSS 2.1 中的伪类

| 序号 | 选择器        | 含义                                    | 定义在版本 |
| ---- | ------------- | --------------------------------------- | ---------- |
| 13.  | E:first-child | 匹配父元素的第一个子元素                | 2          |
| 14.  | E:link        | 匹配所有未被点击的链接                  | 1          |
| 15.  | E:visited     | 匹配所有已被点击的链接                  | 1          |
| 16.  | E:active      | 匹配鼠标已经其上按下、还没有释放的E元素 | 1          |
| 17.  | E:hover       | 匹配鼠标悬停其上的 E 元素               | 1          |
| 18.  | E:focus       | 匹配获得当前焦点的 E 元素               | 2          |
| 19.  | E:lang(c)     | 匹配 lang 属性等于 c 的 E 元素          | 2          |

CSS 2.1 中的伪元素

| 序号 | 选择器         | 含义                        | 定义在版本 |
| ---- | -------------- | --------------------------- | ---------- |
| 20.  | E:first-line   | 匹配 E 元素的第一行         | 1          |
| 21.  | E:first-letter | 匹配 E 元素的第一个字母     | 1          |
| 22.  | E:before       | 在 E 元素之前插入生成的内容 | 2          |
| 23.  | E:after        | 在 E 元素之后插入生成的内容 | 2          |

CSS 3 中与用户界面有关的伪类

| 序号 | 选择器       | 含义                                                        | 定义在版本 |
| ---- | ------------ | ----------------------------------------------------------- | ---------- |
| 28.  | E:enabled    | 匹配表单中激活的元素                                        | 3          |
| 29.  | E:disabled   | 匹配表单中禁用的元素                                        | 3          |
| 30.  | E:checked    | 匹配表单中被选中的 radio（单选框）或 checkbox（复选框）元素 | 3          |
| 31.  | E::selection | 匹配用户当前选中的元素                                      | 3          |

CSS 3 中的结构性伪类

| 序号 | 选择器                | 含义                                                         | 定义在版本 |
| ---- | --------------------- | ------------------------------------------------------------ | ---------- |
| 32.  | E:root                | 匹配文档的根元素，对于 HTML 文档，就是 HTML 元素             | 3          |
| 33.  | E:nth-child(n)        | 匹配其父元素的第 n 个子元素，第一个编号为 1                  | 3          |
| 34.  | E:nth-last-child(n)   | 匹配其父元素的倒数第 n 个子元素，第一个编号为 1              | 3          |
| 35.  | E:nth-of-type(n)      | 与 :nth-child() 作用类似，但是仅匹配使用同种标签的元素       | 3          |
| 36.  | E:nth-last-of-type(n) | 与 :nth-last-child() 作用类似，但是仅匹配使用同种标签的元素  | 3          |
| 37.  | E:last-child          | 匹配父元素的最后一个子元素，等同于 :nth-last-child(1)        | 3          |
| 38.  | E:first-of-type       | 匹配父元素下使用同种标签的第一个子元素，等同于 :nth-of-type(1) | 3          |
| 39.  | E:last-of-type        | 匹配父元素下使用同种标签的最后一个子元素，等同于 :nth-last-of-type(1) | 3          |
| 40.  | E:only-child          | 匹配父元素下仅有的一个子元素，等同于 :first-child :last-child或 :nth-child(1) :nth-last-child(1) | 3          |
| 41.  | E:only-of-type        | 匹配父元素下使用同种标签的唯一一个子元素，等同于 :first-of-type :last-of-type 或 :nth-of-type(1) :nth-last-of-type(1) | 3          |
| 42.  | E:empty               | 匹配一个不包含任何子元素的元素，注意，文本节点也被看作子元素 | 3          |


CSS3 的反选伪类

| 序号 | 选择器   | 含义                           | 定义在版本 |
| ---- | -------- | ------------------------------ | ---------- |
| 43.  | E:not(s) | 匹配不符合当前选择器的任何元素 | 3          |

CSS3 中的 :target 伪类

| 序号 | 选择器   | 含义                           | 定义在版本 |
| ---- | -------- | ------------------------------ | ---------- |
| 44.  | E:target | 匹配文档中特定"id"点击后的效果 | 3          |

### CSS 中哪些属性可以被继承？

* 所有元素可以继承的属性：
  * visibility: 规定元素是否可见
  * cursor（发音为keser）:规定要显示的光标的类型（auto/pointer等）
* 块级元素可以继承的属性：text-indent、text-align
* 内联元素可以继承的属性：
  * 字体系列属性
  * 除 text-indent、text-align 之外的文本系列属性
* 字体，文本属性中：
  * font、font-size、font-variant
  * color
  * line-height：行高
  * word-spacing：增加或减少单词间的空白（即字间隔）
  * letter-spacing: 增加或减少字符间的空白
  * text-indent：文本缩进
  * text-transform：控制文本大小写

* 布局相关的：list-style

### position 属性都有哪些值？

经过定位的元素，其 position 属性值必然是 relative、fixed、absolute 或 static。

| 值       | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| static   | 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。inherit 规定应该从父元素继承 position 属性的值。 |
|          | 默认定位属性值。该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。 |
| relative | 生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。 |
|           | 该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。 |
| absolute | 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 |
|          | 不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。|
| fixed    | 生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。老 IE 不支持。 |
|          | 不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。fixed 属性会创建新的层叠上下文。当元素祖先的 transform 属性非 none 时，容器由视口改为该祖先。 |
| sticky   | 盒位置根据正常流计算(这称为正常流动中的位置)，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。在所有情况下（即便被定位元素为 table 时），该元素定位均不对后续元素造成影响。当元素 B 被粘性定位时，后续元素的位置仍按照 B 未定位时的位置来确定。position: sticky 对 table 元素的效果与 position: relative 相同。                         |
| inherit  | 规定从父元素继承 position 属性的值。                         |

### display 属性都有哪些值？

| 值                 | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| none               | 此元素不会被显示。                                           |
| block              | 此元素将显示为块级元素，此元素前后会带有换行符。             |
| inline             | 默认。此元素会被显示为内联元素，元素前后没有换行符。         |
| inline-block       | 行内块元素。（CSS2.1 新增的值）                              |
| list-item          | 此元素会作为列表显示。                                       |
| run-in             | 此元素会根据上下文作为块级元素或内联元素显示。               |
| compact            | CSS 中有值 compact，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。 |
| marker             | CSS 中有值 marker，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。 |
| table              | 此元素会作为块级表格来显示（类似 `<table>`），表格前后带有换行符。 |
| inline-table       | 此元素会作为内联表格来显示（类似 `<table>`），表格前后没有换行符。 |
| table-row-group    | 此元素会作为一个或多个行的分组来显示（类似 `<tbody>`）。     |
| table-header-group | 此元素会作为一个或多个行的分组来显示（类似 `<thead>`）。     |
| table-footer-group | 此元素会作为一个或多个行的分组来显示（类似 `<tfoot>`）。     |
| table-row          | 此元素会作为一个表格行显示（类似 `<tr>`）。                  |
| table-column-group | 此元素会作为一个或多个列的分组来显示（类似 `<colgroup>`）。  |
| table-column       | 此元素会作为一个单元格列显示（类似 `<col>`）                 |
| table-cell         | 此元素会作为一个表格单元格显示（类似 `<td>` 和 `<th>`）      |
| table-caption      | 此元素会作为一个表格标题显示（类似 `<caption>`）             |
| inherit            | 规定应该从父元素继承 display 属性的值。                      |

其中，`inline`、`inline-block`、`block` 的区别是：

|                              | block                                                   | inline-block                               | inline                                                       |
| ---------------------------- | ------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------ |
| 大小                         | 填充其父容器的宽度。                                    | 取决于内容。                               | 取决于内容。                                                 |
| 定位                         | 从新的一行开始，并且不允许旁边有 HTML 元素(除非是float) | 与其他内容一起流动，并允许旁边有其他元素。 | 与其他内容一起流动，并允许旁边有其他元素。                   |
| 能否设置 width 和 height     | 能                                                      | 能                                         | 不能。设置会被忽略。                                         |
| 可以使用 vertical-align 对齐 | 不可以                                                  | 可以                                       | 可以                                                         |
| 边距(margin)和填充(padding)  | 各个方向都存在                                          | 各个方向都存在                             | 只有水平方向存在。垂直方向会被忽略。尽管 border 和 padding 在 content 周围，但垂直方向上的空间取决于 'line-height' |
| 浮动(float)                  | -                                                       | -                                          | 就像一个 block 元素，可以设置垂直边距和填充。                |

### font 属性如何设置字体？

- 属性值
  - font-style:  设置字体风格(正常normal/斜体italic/倾斜oblique)
  - font-variant: 设置字体变形(设定小型大写字母)
  - font-weight: 设置文本的粗细（bold粗/或用关键字 100 ~ 900 给字体指定了 9 级加粗度）
  - font-size: 设置文本的大小(1em=16px 相当于普通文本的默认大小)
  - line-height:设置行间的距离（行高）--不能使用负值
  - font-family: 设置字体类型(5种通用字体/指定字体)
- 注意事项
  - 除了使用关键字的情况之外，该属性必须同时设置 `font-size` 和 `font-family` 属性值。
  - 并非所有的 `font-variant` 属性值是被允许的。只有在 CSS 2.1 里规定的值才被允许使用，它们是 `normal` 和 `small-caps`。
  - 属性值的顺序并非完全自由：如需设置 `font-style`， `font-variant` 和 `font-weight` 中任意一个或几个的值，它们必须要放在 `font-size` 值的前面。
  - `line-height` 值必须紧跟在 `font-size` 之后，并且要在属性值前面加上。
  - `font-family` 是必不可少的，且必须放在最后（inherit 值是无效的）
- 关键字用于表示某个特定的系统字体
  - `caption`	用于标题控件（如按钮，下拉列表等）的字体。
  - `icon` 用于标签图标的字体。

### Link 和 @import 的区别？

* link属于XHTML标签，而@import是CSS提供的。 ⻚面被加载时，link会同时被加载，而@import引用的CSS会等到⻚面被加载完再加载。
* import只在IE 5以上才能识别，而link是XHTML标签，无兼容问题。
* link方式的样式权重高于@import的权重。 使用dom控制样式时的差别。当使用javascript控制dom去改变样式的时候，只能使用link标签，因为@import不是 dom可以控制的。

### 如何理解 z-index？

* CSS 中的z-index属性控制重叠元素的垂直叠加顺序
* 默认元素的z-index为0
* 我们可以修改z-index来控制元素的图层 位置
* 而且z-index只能影响设置了position值的元素。

### 如何理解 float？

## CSS 布局

### CSS 盒模型及其规则？

* CSS 盒模型描述了以文档树中的元素而生成的矩形框，并根据排版模式进行布局。
* 盒模型 content、padding、border、margin 组成。
* CSS盒模型负责计算：
  * 块级元素占用多少空间。
  * 边框是否重叠，边距是否合并。
  * 盒子的尺寸。
* 盒模型有以下规则：
  * 块级元素的大小由width、height、padding、border和margin决定。
  * 如果没有指定height，则块级元素的高度等于其包含子元素的内容高度加上padding（除非有浮动元素，请参阅下文）。
  * 如果没有指定width，则非浮动块级元素的宽度等于其父元素的宽度减去父元素的padding。
  * 元素的height是由内容的height来计算的。
  * 元素的width是由内容的width来计算的。
  * 默认情况下，padding和border不是元素width和height的组成部分。
* 标准盒子模型：
  * 在W3C标准下，我们定义元素的width值即为盒模型中的content的宽度值，height值即为盒模型中的content的高度值。
  * 元素的宽度 = margin-left + border-left + padding-left + width + padding-right + border-right + margin-right
* 怪异盒模型：
  * 而IE怪异盒模型(IE8以下)width的宽度并不是content的宽度，而是border-left + padding-left + content的宽度值 + padding-right + border-right之和，height同理。
  * 元素占据的宽度 = margin-left + width + margin-right

### CSS 可视化格式模型（FC）是什么？

* 说到底，CSS 的可视化格式模型就是规定了浏览器在页面中如何处理文档树。
  * CSS中规定每一个元素都有自己的盒子模型(相当于规定了这个元素如何显示)
  * 然后可视化格式模型则是把这些盒子按照规则摆放到页面上，也就是如何布局
  * 换句话说，盒子模型规定了怎么在页面里摆放盒子，盒子的相互作用等等
* CSS 有三种定位机制：普通流，浮动，绝对定位，如无特别提及，一般都是针对普通流中的

关键字：

* 包含块(Containing Block)：一个元素的 box 的定位和尺寸，会与某一矩形框有关，这个框就称之为包含块。元素会为它的子孙元素创建包含块，但是，并不是说元素的包含块就是它的父元素，元素的包含块与它的祖先元素的样式等有关系。
  * 根元素是最顶端的元素，它没有父节点，它的包含块就是初始包含块
  * static 和 relative 的包含块由它最近的块级、单元格或者行内块祖先元素的内容框(content)创建
  * fixed的包含块是当前可视窗口
  * absolute 的包含块由它最近的 position 属性为 absolute、relative 或者 fixed 的祖先元素创建
  * 如果其祖先元素是行内元素，则包含块取决于其祖先元素的 direction 特性
  * 如果祖先元素不是行内元素，那么包含块的区域应该是祖先元素的内边距边界
* 控制框(Controlling Box)：
  * 块级元素和块框以及行内元素和行框的相关概念。
  * 如果一个框里，有一个块级元素，那么这个框里的内容都会被当作块框来进行格式化，因为只要出现了块级元素，就会将里面的内容分块几块，每一块独占一行。出现行内可以用匿名块框解决。
  * 如果一个框里，没有任何块级元素，那么这个框里的内容会被当成行内框来格式化，因为里面的内容是按照顺序成行的排列。
* 块框：
  * 块级元素会生成一个块框 Block Box，块框会占据一整行，用来包含子 box 和生成的内容
  * 块框同时也是一个块包含框 Containing Box，里面要么只包含块框，要么只包含行内框(不能混杂)，如果块框内部有块级元素也有行内元素，那么行内元素会被匿名块框包围
* 匿名块框：如果一个块框在其中包含另外一个块框，那么我们强迫它只能包含块框，因此其它文本内容生成出来的都是匿名块框(而不是匿名行内框)。`<DIV>Some text<P>More text</P></DIV>`。
* 匿名内框：`<P>Some <EM>emphasized</EM> text</P>`。
* FC：格式化上下文，定义框内部的元素渲染规则，比较抽象，譬如：
  * FC 像是一个大箱子，里面装有很多元素
  * 箱子可以隔开里面的元素和外面的元素(所以外部不会影响 FC 内部渲染)
  * 内部的规则可以是：如何定位，宽高计算，margin 折叠等
  * 不同类型的框参与的 FC 类型不同，譬如块级框对应 BFC，行内框对应 IFC。并不是所有框都会产生 FC，而需符合特定条件。
* BFC(Block Formatting Context)：块格式化上下文
  * 在 BFC 中，每一个元素左外边与包含块的左边相接触(对于从右到左的格式化，右外边接触包含块的右边)，即使清除浮动也是如此，除非这个元素也创建了一个新的 BFC。浮动元素一般会直接贴近它的包含块的左边，与普通元素重合。
    * Box: CSS布局的基本单位，Box 是 CSS 布局的对象和基本单位， 直观点来说，就是一个⻚面是由很多个 Box 组成的，实际就是上个问题说的盒模型。
    * Formatting context:块级上下文格式化，它是⻚面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素 将如何定位，以及和其他元素的关系和相互作用
  * 特点：
    * 内部 box 在垂直方向，一个接一个的放置
    * box 的垂直方向由 margin 决定，属于同一个 BFC 的两个 box 间的 margin 会重叠
    * BFC 区域不会与 float box 重叠（可用于排版)
    * BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此
    * 计算 BFC 的高度时，浮动元素也参与计算(不会浮动坍塌)
  * 如何触发：
    * 根元素
    * float 属性不为 none
    * position 为 absolute 或 fixed
    * display 为 inline-block, flex, inline-flex，table，table-cell，table-caption
    * overflow 不为 visible
    
  * 注：display: table 本身不产生 BFC，但是会产生匿名框，而这个匿名框产生 BFC。匿名框包含 display: table-cell 的框
* IFC(Inline Formatting Context)：行内格式化上下文。
  * 相比 BFC 规则来说，IFC 可能更加抽象——IFC 没有那么条理清晰的规则和触发条件。但总的来说，它就是行内元素自身如何显示以及在框内如何摆放的渲染规则，这样描述应该更容易理解。
  * 规则：
    * 在行内格式化上下文中
    * 框一个接一个地水平排列，起点是包含块的顶部。
    * 水平方向上的 margin，border 和 padding 在框之间得到保留
    * 框在垂直方向上可以以不同的方式对齐：它们的顶部或底部对齐，或根据其中文字的基线对齐
  * 行内元素与 IFC：
    * 行内元素总是会应用 IFC 渲染规则
    * 行内元素会应用 IFC 规则渲染，譬如 text-align 可以用来居中等
    * 块框内部，对于文本这类的匿名元素，会产生匿名行框包围，而行框内部就应用 IFC 渲染规则
    * 行内框内部，对于那些行内元素，一样应用IFC渲染规则
    * inline-block，会在元素外层产生 IFC(所以这个元素是可以通过 text-align 水平居中的)，当然，它内部则按照 BFC 规则渲染
* 行内框：一个行内元素生成一个行内框；行内元素能排在一行，允许左右有其它元素。
* 行框：宽度由它的包含块和其中的浮动元素决定，高度的确定由行高度计算规则决定。行框的规则：
  * 如果几个行内框在水平方向无法放入一个行框内，它们可以分配在两个或多个垂直堆叠的行框中(即行内框的分割)
  * 行框在堆叠时没有垂直方向上的分割且永不重叠
  * 行框的高度总是足够容纳所包含的所有框。不过，它可能高于它包含的最高的框(例如，框对齐会引起基线对齐)
  * 行框的左边接触到其包含块的左边，右边接触到其包含块的右边。
* 定位体系
* 浮动
* ...

display 对不同框的影响：

* block，元素生成一个块框
* inline，元素产生一个或多个的行内框
* inline-block，元素产生一个行内级块框，行内块框的内部会被当作块块来格式化，而此元素本身会被当作行内级框来格式化(这也是为什么会产生BFC)
* none，不生成框，不再格式化结构中，当然了，另一个 visibility: hidden 则会产生一个不可见的框

### 如何理解 CSS 层叠上下文？

> https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/

* 层叠上下文是HTML元素的三维概念，这些HTML元素在一条假想的相对于面向(电脑屏幕的)视窗或者网⻚的用户的z 轴上延伸，HTML元素依据其自身属性按照优先级顺序占用层叠上下文的空间。
* 触发以下条件则会产生层叠上下文：
  * 根元素 (HTML)
  * z-index 值不为 "auto"的 绝对/相对定位，
  * 一个 z-index 值不为 "auto"的 flex 项目 (flex item)，即:父元素 display: flex|inline-flex
  * opacity 属性值小于 1 的元素(参考 the specification for opacity)，
  * transform 属性值不为 "none"的元素，
  * mix-blend-mode 属性值不为 "normal"的元素，
  * filter值不为“none”的元素，
  * perspective值不为“none”的元素，
  * isolation 属性被设置为 "isolate"的元素，
  * position: fixed
  * 在 will-change 中指定了任意 CSS 属性，即便你没有直接指定这些属性的值(参考 这篇文章)
  * -webkit-overflow-scrolling 属性被设置 "touch"的元素

### CSS 布局模型是怎样的？

* 布局是承上启下的中间环节，渲染树是从 DOM 树映射而来的可布局的层级关系，通过应用布局属性确定视图排版。同时布局更是性能的瓶颈所在，需要灵活运用缓存、线程切换等手段来优化性能。
* 把布局和视图生成两部分从整个架构中抽离出来，也可成为客户端 UI 框架。
* 布局模型的基本属性：
  * CSS 2.1 定义了以下 4 个布局模型。
    * block layout，块级布局。侧重于垂直方向。
    * inline layout，行内布局。侧重于水平方向。
    * table layout，表格布局。
    * positioned layout
  * CSS 3 引入了以下布局模型。
    * flex layout，弹性盒布局。与方向无关。主要适用于应用程序的组件及小规模的布局。
    * CSS Grid Layout。

- 固定布局。通过固定页面高度宽度像素大小来实现。
  - 优点：上手快，大小固定，便于理解。
  - 缺点：大小无法改变，无法动态化适应各个分辨率的终端设备。
- 百分比布局。使用百分比来代替传统 px 作为单位。
  - 优点：很好解决自适应需求。
  - 缺点：不够灵活，当增加更多的百分比元素会导致内容溢出。
- 浮动布局。通过 `display`、`float` 和 `clear` 等属性实现。
  - 优点：在没有 flexbox 时应用广泛。
  - 缺点：不易理解，需要注意清除浮动， 没有垂直居中，没有等高，也没有顺序无关性。
- 定位布局。通过 `postion`、`left`、`top` 等属性实现。
  - 优点：可以绝对定位和相对定位。
- Flexbox 布局。
  - 优点：拥有顺序无关性，良好支持响应式布局，方便垂直居中和等高操作。可以在沿 X 轴排列和沿 Y 轴排列间互相转换 可缩可放，可行可列，还有自适应空间能力。 同一效果可以有多种实现写法
  - 缺点：对旧版本(PC 端、移动端)浏览器兼容性不足，一维布局系统，只适合做局部布局
- Grid 布局。
  - 优点：二维布局系统，通常用于整个页面的规划。
  - 缺点：对一些新浏览器其兼容性也不足。
- 表格布局。通过 `<table>`、`<tr>`、`<td>` 等标签或通过 `display:table` 来实现。
  - 优点：能垂直居中，还能等高。
  - 缺点：没有顺序无关性，边框问题费劲，应对响应式布局能力有限。
- Multi-column 多列布局。
- 流式布局。
- 居中布局
- 全局布局
- 多列等高布局
- 以下混合方案可通过多种布局技术来实现。
  - 基本网格布局(平均布局)。
  - 栅格布局。
  - 流体布局：利用元素“流”的特性实现的各类布局效果。
  - 自适应布局：包括表格布局，凡是具有自适应特性实现的各类布局效果。
  - 圣杯布局。下图左侧为圣杯布局模型，右侧为响应式结果。
  - 双飞翼布局。

### CSS 布局模型的算法思想？

一个对象的布局由位置和尺寸这两个要素唯一确定，但实际使用中很少需要为其赋予绝对值来指定排版，而是通过指定相对位置、相对宽高、相互关系来间接实现。所以布局要做的就是从这些相对信息中推算出每个对象的绝对信息，通过多次从根节点开始向下遍历，以及从子节点向上回溯，不断估计、修正，计算出树上每个节点的唯一布局。

无论何种框架，要实现通过用网页的规范或自定义的模板规范来达到动态控制原生 UI，都会包含以下过程：

- HTML 或模板解析，构建 DOM 树
- CSS 样式解析，并转换为原生系统属性
- 动态数据解析及注入
- 从 DOM 树构建渲染树
- 对渲染树各节点应用样式，并计算布局
- 对渲染树各节点绑定事件，实现 JS 和原生方法之间的互相调用
- 从渲染树生成视图，最终显示

React-Native 和 Weex 的核心布局算法都采用 Facebook 开源的 CSSLayout 算法，CSSLayout 基于 W3C 标准的 Flexbox 模型对页面元素排版，同时也支持相对布局和绝对布局，iOS 和 Andriod 平台都适用。

CSSLayout 对容器可应用 `FlexDirection`、`FlexWrap`、`JustifiyContent`、`AlignItems`、`AlignContent` 属性。对元素可应用 `Flex`、`AlignSelf` 属性（除了 Flex 属性，还支持普通的 Position 和 Overflow 属性）。

布局算法把外部传入的计算属性先转化为对应的数组，通过下标访问具体值，而下标又是通过主轴、交叉轴构造的映射关系表来获取。

计算过程用到的样式属性如下。

* crossAxis、mainAxis、margin、padding、leading、trailing
* minHeight、height、maxHeight、minWidth、width、maxWidth

计算过程中用到的布局属性如下。

- 位置 position，包括 left、top、right、bottom 四个定位值。
- 尺寸 dimension，包括 width 和 height。
- 估计尺寸 measuredDimension，包括 width 和 height，measuredDimension 是计算过程中的中间变量，几次迭代后得到最终的 dimension。

CSSLayout 算法首先对内容节点、叶子节点和非布局节点这三种情况进行预处理，提前返回，减少走完整个流程的次数，尽可能的减少计算量。

CSSLayout 算法中的缓存分为两个层次，如下。

- `cached_layout` 把渲染树中所有节点的布局结果和估计结果都缓存起来，内部通过 `CSSCachedMeasurement` 数据结构来维护，只有当两棵渲染树计算条件完全匹配时才会触发，复用要求高。
- `cachedMeasurement`  把中间的估算结果缓存起来，内部缓存最近 16 次的计算结果， 在渲染树增量更新、插入节点等部分更新情况下避免重复估算尺寸，复用要求低。

### Flexbox 基础概念？

> 时代背景：随着终端设备的多样化发展，需要拥有足够的定义来支持那些必须随用户代理(user agent)不同或设备方向从水平转为垂直等各种变化而变换方向、调整大小、拉伸、收缩的应用程序组件。

flexbox 是一种布局机制。分为弹性容器(Flex container)和弹性项目(Flex item)，分别有自己的属性。在 flex 中，弹性容器的子元素可以在任何方向上排布，也可以“弹性伸缩”其尺寸，既可以增加尺寸以填满未使用的空间，也可以收缩尺寸以避免父元素溢出。

flexbox 被期望设计为：

- 在任何流动的方向上(包括上下左右)都能进行良好的布局。
- 可以以逆序或者以任意顺序排列布局。
- 可以线性的沿着主轴一字排开 或者 沿着侧轴换行排列。
- 可以弹性的在任意的容器中伸缩大小。
- 可以使子元素们在容器主轴方向上或者在容器侧轴方向上进行对齐。
- 可以动态的 沿着主轴方向伸缩子级的尺寸，与此同时保证父级侧轴方向上的尺寸。

优点：告别使用浮动的 `<div>` 元素、绝对定位和一些 JavaScript hacks，使用仅仅几行 CSS 就可以构建出水平或垂直方向的布局。

缺点：一个 flexbox 一次只能处理一个维度上的元素布局，一行或者一列。

```css
/* Flexbox 容器属性 */
{
  /* flex-direction 决定主轴的方向。 */
  flex-direction: row | row-reverse | column | column-reverse;
  /* flex-wrap 定义如果一条轴线排不下，如何换行。 */
  flex-wrap: nowrap | wrap | wrap-reverse;
  /* flex-flow 是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap。 */
  flex-flow: <flex-direction> || <flex-wrap>;
  /* justify-content 定义了项目在主轴上的对齐方式。 */
  justify-content: flex-start | flex-end | center | space-between | space-around;
  /* align-items 定义项目在交叉轴上如何对齐。 */
  align-items: flex-start | flex-end | center | baseline | stretch;
  /* align-content 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。 */
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}

/* Flexbox 项目属性 */
{
  /* order 定义项目的排列顺序。数值越小，排列越靠前，默认为 0。 */
  order: <integer>;
  /* flex-grow 定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。 */
  flex-grow: <number>; /* default 0 */
  /* flex-shrink 定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。 */
  flex-shrink: <number>; /* default 1 */
  /* flex-basis 定义了在分配多余空间之前，项目占据的主轴空间。 */
  flex-basis: <length> | auto; /* default auto */
  /* flex 是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。 */
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  /* align-self 允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。 */
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

### Flexbox 要点须知？

Flexbox 相关词汇：需要我们从诸如水平/行内轴和垂直/块级轴这些术语中解放出来，用一套新的术语来正确描述此模型。

- Flex container，弹性容器。包含弹性项目的父元素。通过设置 `display` 属性的值为 `flex` 或 `inline-flex` 来定义弹性容器。值 `flex` 使弹性容器成为块级元素。值 `inline-flex` 使弹性容器成为单个不可分的行内级元素。
- Flex item，弹性项目。弹性容器的每个子元素。
- Axis，轴。每个弹性框布局包含两个轴。弹性项目沿其依次排列的那根轴称为主轴(main axis)。垂直于主轴的那根轴称为侧轴(cross axis)。
  - `flex-direction` 确立主轴。
  - `justify-content` 定义了在当前行上，弹性项目沿主轴如何排布。
  - `align-items` 定义了在当前行上，弹性项目沿侧轴默认如何排布。
  - `align-self` 定义了单个弹性项目在侧轴上应当如何对齐，这个定义会覆盖由 `align-items` 所确立的默认值。
- Direction，方向。弹性容器的主轴起点(main start)/主轴终点(main end)和侧轴起点(cross start)/侧轴终点(cross end)描述了弹性项目排布的起点与终点。
  - `order` 属性将元素与序号关联起来，以此决定哪些元素先出现。order 属性并不影响语音和导航的次序。
  - `flex-flow` 属性是 `flex-direction` 和 `flex-wrap` 属性的简写，决定弹性项目如何排布。
- Line，行。根据 `flex-wrap` 属性，弹性项目可以排布在单个行或者多个行中。此属性控制侧轴的方向和新行排列的方向。
- Dimension，尺寸。根据弹性容器的主轴与侧轴，弹性项目的宽和高中，对应主轴的称为主轴尺寸(main size) ，对应侧轴的称为 侧轴尺寸(cross size)。
  - `min-height` 与 `min-width` 属性初始值将为 0。
  - `flex` 属性是 `flex-grow`、`flex-shrink` 和 `flex-basis` 属性的简写，描述弹性项目的整体的伸缩性。

Flexbox 要点须知

* 弹性容器直接包含的文本（除只包含一系列空白符外）将被包覆成匿名弹性单元。
* 对于弹性容器的绝对定位子元素来说，其静态位置参照弹性容器的内容框的主起始角确定，而后依此完成此元素的定位。
* 相邻的弹性元素其外边距不会互相合并。使用 auto 外边距可以吸收掉水平或垂直方向上的额外空间，这可以用于对齐或分隔相邻的弹性项目。
* 不像 CSS 中的其他对齐方法，弹性框的对齐属性将进行“真正的”居中对齐。这意味着即使弹性条目溢出了弹性容器，它依然保持居中。如果溢出超过了页面的上边缘或左边缘，则虽然那些地方确实有内容，却无法滚动到那些位置。在未来的发布版本里，对齐属性将会包含有“安全”选项。
* 多栏布局模块的 `column-*` 属性对弹性项目无效。
* `float` 与 `clear` 对弹性项目无效。使用 `float` 将使元素的 `display` 属性计为 `block`。
* `vertical-align` 对弹性项目的对齐无效。
* 只要 break- 属性的设置值允许，在弹性框布局中是可以存在分页的。CSS3 中的 `break-after`、`break-before` 和 `break-inside`，以及 CSS 2.1 中的 `page-break-before`、`page-break-after` 和 `page-break-inside` 属性在弹性容器上、弹性项目上和弹性项目内均可以使用。

### CSS Grid 如何使用？

