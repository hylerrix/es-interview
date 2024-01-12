## CSS

[css篇--100道近两万字帮你巩固css知识点 (juejin.cn)](https://juejin.cn/post/6844904185847087111#heading-0)

### 1. 选择器

##### 常用选择器

​	元素选择器：p、div									

​	id选择器：#id

​	类选择器：.class

​	通配选择器：* (选中所有元素)

##### 复合选择器

​	交集选择器： 例：div.class名交集选择器用 . 隔开

​	并集选择器:	例：div,p 并集选择器用 , 隔开

##### 关系选择器

​	子元素选择器：div>p

​	后代元素选择器：div p 两选择器用空格键分开

​	兄弟元素选择器：div中有span p且两个元素紧挨着 则 span+p选中， 若要选中span后所有p则 span~p

##### 属性选择器

​	如：a[属性名=属性值]，a[rel = "external"]

​		    p[属性名]

​      	  p[属性名=属性值]

​      	  p[属性名^属性值]选定以属性值开头的元素

​            p[属性名$属性值]选定以属性值结尾的元素

​      	  p[属性名\*属性值]选定存在属性值的元素

##### 伪类选择器

​	**:root** 选择文档的根元素，等同于`html`元素

​	**:empty** 选择没有子元素的元素

​	**:first-child** 第一个子元素

​	**:last-child** 最后一个子元素

​	**:nth-child（n）** 匹配父元素下指定子元素，在所有子元素中排序第`n` n表示第n个元素 ,2n表示选择偶数元素, even偶数 2n+1奇数位元素, odd奇数位元素

​	**:first-of-type** 	

​	**:last-of-type**

​	**:nth-of-type（n）** 匹配父元素下指定子元素，在所有子元素中排序第n

​	**:not()** 否定伪类，将符合条件的元素从选择器中去除

​	**:after** 在该元素之后添加内容（伪元素）

​	**:before** 在该元素之前添加内容（伪元素）

​	**超链接伪类:**	**:link** 用来表示未访问的链接

​						    **:visited** 表示访问过的链接

​							**:hover** 表示鼠标移入的状态

​							**:active** 表示鼠标点击的状态

##### 伪元素选择器

​		表示页面中一些特殊的并不真实存在的元素（特殊的位置）

​        伪元素使用 :: 开头

​     	 ::first-letter 表示第一个字母

​     	 ::first-line 表示第一行

​	  	::selection 表示选中的内容

​      	::before 元素的开始

​      	::after 元素的最后

​     	 before 和 after必须结合content属性使用

##### 伪类和伪元素的区别

伪类是用于为当前元素处于某种状态时，为其添加样式，这个状态是根据用户行为而动态变化的，**在处于dom树无法描述的状态下才能为元素添加样式**，则将其称为伪类。

伪元素其实并不是DOM中的真实元素，但是会存在于最终的渲染中，可以为其添加样式，比如::before

##### 选择器的优先级

!important > 内联样式 = 外联样式 > ID选择器 > 类选择器 = 伪类选择器 = 属性选择器 > 元素选择器 = 伪元素选择器 > 通配选择器 = 后代选择器 = 兄弟选择器



### 2. BFC和IFC

[什么是BFC? (juejin.cn)](https://juejin.cn/post/6844903544726749198)

##### 1.BFC

###### 1. 为什么要用BFC（BFC应用场景）

在浮动布局中，父元素的高度默认是被子元素内容撑开的，当给子元素设置float之后，子元素将会完全脱离文档流，这时候子元素将无法撑起父元素的高度，导致父元素发生**高度塌陷问题**，父元素高度塌陷以后，其下的元素就会自动上移，导致页面的布局混乱

###### 2. BFC是什么

BFC (Block Formatting Context) 块级格式化环境，开启BFC之后就会变成一个独立的布局空间，使得空间内的子元素不会影响到外面的布局，外面的布局也不会影响到独立空间的布局，所以说**BFC实际上就是一个完全独立的布局环境**

###### 3. 如何开启BFC

float：不为none

overflow：不为visible

position：不为relative/static

display：inline-block / table-cell / tabel-caption

###### 4. BFC的作用

**解决高度塌陷 **：  **为父元素开启BFC**

**不和浮动元素重叠：**如果一个浮动元素后面跟一个非浮动元素，就会发生重叠。因为浮动元素脱离文档流，不再占用文档流中的位置，所以后面的自动就往上顶，发生了覆盖。**为后面元素开启BFC**

**防止垂直方向的外边距（margin）重叠：**Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。因此要解决margin重叠问题，只要让它们不在同一个BFC就行了，但是对于两个相邻元素来说，意义不大，没有必要给它们加个外壳，但是对于嵌套元素来说就很有必要了**，只要把父元素设为BFC就可以了。这样子元素的margin就不会和父元素的margin发生重叠了。**

##### 2. IFC

[常用布局之IFC布局_问白的博客-CSDN博客](https://blog.csdn.net/weixin_38080573/article/details/79364754?utm_medium=distribute.pc_relevant_t0.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-1.control&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-1.control)

IFC(Inline-Formatting-Contexts) 内敛格式化环境、开启IFC的条件就是，在一个块级元素中仅包含内敛级别的元素

IFC的特点：子元素只会计算横向样式空间( margin padding border)，而不会计算垂直方向的空间，但是如果是替换元素，可以设置高宽，如input、img、select

​					替换元素的高只能用line-height来决定

​					float元素会优先排列,float或者绝对定位会转换成block

​					vertical-align生效



### 3. 清除浮动(clearfix)

**clearfix 这个样式可以同时解决高度塌陷和外边距重叠的问题**

```css
.clearfix::before,
.clearfix::after{
    content: '';
    display: block;
    clear: both;
       			 }
```



### 4. Position

[CSS定位属性详解 (juejin.cn)](https://juejin.cn/post/6844903516897542158)

[CSS中容易被忽视的 position属性sticky (juejin.cn)](https://juejin.cn/post/6844904087486464007)

**position：static**  默认值，元素是静止的，没有设置定位

**position：inherit** 继承父元素的定位

**position：relative** 相对定位 

​					相对定位的参照物是它本身

**position：absolute** 绝对定位

​					开启绝对定位后，如果不设置偏移量 元素的位置不会发生变化

​          		  开启绝对定位后，元素会从文档流中脱离，块的宽高被内容撑开

​         		   绝对定位会改变元素的性质，行内变成块

​         		   绝对定位会使元素提升一个层级

​          		  相对于该元素最近的已定位的祖先元素，如果没有一个祖先元素设置定位，那么参照物是body层

**position：fixed** 固定定位

​       			固定定位也是一种绝对定位 固定定位大部分特点都和绝对定位一样

​         		  唯一不同的是，固定定位永远参照于浏览器的视口进行定位

​         		  固定定位的元素不会随网页的滚动条滚动

**position：sticky** 粘滞定位 [使用 position:sticky 实现粘性布局 - ChokCoco - 博客园 (cnblogs.com)](https://www.cnblogs.com/coco1s/p/6402723.html)

​					基于用户的滚动位置来定位

​					粘滞定位和相对定位的特点基本一致， 不同的是粘滞定位可以在元素到达某个位置时将其固定

​					元素固定的相对偏移是相对于离它最近的具有滚动框的祖先元素，如果祖先元素都不可以滚动，那么是相对于viewport来计					算元素的偏移量。



### 5. flex

[Flex 布局教程：语法篇 - 阮一峰的网络日志 (ruanyifeng.com)](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

弹性盒，用来代替浮动实现弹性布局。可以通过**display:flex**来设置

##### 弹性容器的属性

**flex-direction:** row | row-reverse | column | column-reverse  	决定主轴的排列方向

**flex-wrap:** nowrap | wrap | wrap-reverse			换行

**flex-flow**  flex-direction属性和flex-wrap属性的简写形式，默认值为row  nowrap

**justify-content:** flex-start | flex-end | center | space-between | space-around				主轴上的对齐方式

**align-items:** flex-start | flex-end | center | baseline | stretch 				侧轴上的对齐方式

**align-content:** flex-start | flex-end | center | space-between | space-around | stretch	定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用

##### 弹性元素的属性

**order:** 整数	 定义弹性元素的排列顺序。数值越小，排列越靠前，默认为0

**flex-grow:**  数字	定义弹性元素的放大倍数，默认为0

**flex-shrink:** 数字	定义弹性元素的缩小倍数，默认为1，负值对该属性无效

**flex-basis：**<length> | auto	默认值为auto，可以设为跟`width`或`height`属性一样的值（比如350px），则该弹性元素将占据固定空间

**flex**：flex-grow、 flex-shrink、flex-basis的简写，默认值为0,1，auto

**align-self:** auto | flex-start | flex-end | center | baseline | stretch	该属性允许此弹性元素和其他弹性元素不一样的对齐方式，默认值为auto，即继承父元素的排列，如果没有父元素，默认值等同于stretch



### 6. 媒体查询

[CSS3之媒体查询（响应式布局）_很小白的小白的博客-CSDN博客_css媒体查询](https://blog.csdn.net/qq_35401191/article/details/81517494)

媒体查询是为了解决移动端不同设备的不同屏幕显示大小上显示网页的功能

首先通过link引入, 这里媒体类型可以是 all、print、screen、speech等

```css
<link rel="stylesheet" media="screen and (max-width:800px)" href="./demo.css">
```

然后再在style中引入使用

```css
@media screen and (max-width: 400px) {
 
	.wrapper div{
 
	 width: 100%;
	}
}
```



### 7. transition 过渡

**transition:** all 0 ease 0  默认属性    transition为过渡，通过过渡可以指定一个属性发生变化时的切换方式， 指定过渡属性多个属性间需要   **，**隔开，如果所有属性都需要过渡，则使用all，大部分属性都支持过渡效果，过渡时必须从一个有效数值向另外一个有效数值进行过渡

- **transition-property**   			指定设置过渡效果的 CSS 属性的名称。
- **transition-duration**               规定完成过渡效果需要多少秒或毫秒。
- **transition-timing-function**   规定速度效果的速度曲线。
  - linear 	匀速
  - ease（默认值） 慢速开始 先加速再减速
  - ease - in              加速运动
  - ease-out              减速运动
  - ease-in-out          先加速后减速
  - cubic-bezier()      函数中定义自己的值。可能的值是 0 至 1 之间的数值。
- **transition-delay**                     定义过渡效果何时开始。



### 8. animation 动画

**animation：**none  0 ease 0 1 normal 	通过定义animation属性加下面的代码实行动画操作

```css
@keyframes test{
            /* from表示动画的开始位置 */
            from{}
            
            /* to动画结束的位置 */
            to{}
        }
//使用
@keyframes myfirst
{
0%   {background:red; left:0px; top:0px;}
25%  {background:yellow; left:200px; top:0px;}
50%  {background:blue; left:200px; top:200px;}
75%  {background:green; left:0px; top:200px;}
100% {background:red; left:0px; top:0px;}
}

```

- **animation-name**									动画名称（自定义）
- **animation-duration**                               动画执行时间
- **animation-timing-function**                   动画加速效果
- **animation-delay**                                     动画开始执行时间
- **animation-iteration-count:** n|infinite                   动画播放的次数
- **animation-direction:** normal|alternate               规定动画是否轮流反向播放



### 9. transform 变形

平移	transform：translateX(deg) 	translateY(deg)	translateZ(deg)

旋转	transform：rotateX(deg)		rotateY(deg)		rotateZ(deg)

缩放	transform: scaleX(n) 	scaleY(n)  	scaleZ(n)

**transform-origin**:20px,20px 	变形原点

可以用transform来实现**居中**

```css
.css {
    	left:50%
			top:50%
      transform ：translateX（-50%） translateY（-50%）
}
```



### 10. display

**display:** **inline**	(默认值，将元素设置为行内元素)

**none**	(此元素不会在页面中显示)

**block**	(将元素设置为块元素)

**inline-block**	(行内块元素，属于块元素，既可以设置宽高，又不会独占一行)

**table**	(将元素设置为块级表格元素)

**inline-table**	(行内表格元素)

**table-cell**	(元素会作为一个表格单元格显示)

**table-caption**	(元素会作为表格标题显示)

**inherit**	(继承父类display属性)



### 11. font字体

font：font-size/line-height   font-family

字体相关样式

**font-size**  设置字体大小，和font-size相关的属性单位：em和rem，都是相对长度单位，em相当于当前元素的font-size，而rem相对于是html根元素的font-size

**font-family **可以同时指定多个字体，多个字体间使用 **，** 隔开，优先使用第一个生效的字体

**font-weight** 	字体粗细

**font-style**		 字体风格

**@font-face** 可以将服务器中的字体直接提供给用户使用，例：

```css
@font-face {
  font-family: myFirstFont;
  src: url(sansation_bold.woff);
  font-weight: bold;//加粗
  font-style：italic //斜体
}
```

**line-height**: 	行高，可以用line-height来设置行间距	行间距 = 行高 - 字体大小

normal（默认，设置合理行间距）

数字 （ 设置数字，此数字会与当前的字体尺寸相乘来设置行间距）

百分比	（基于当前字体尺寸的百分比行间距）

长度  （设置固定的行间距）

inherit	（继承父元素的行间距）

### 12. text

**vertical-align:** baseline（默认值，与父元素的基线对齐）|top|middle|bottom|sub|super，vertical-align属性设置元素的垂直对齐方式，只对行内和表格元素起效，对块级元素无效

**text-align**：left|right|center|justify（两端对齐）	文本水平对齐

**text-decoration**：none|underline（下划线）|line-through（删除线）|overline（上划线）



### 13. CSS画各种几何图形

##### 1. 画一个三角形

```css
        .a {
              width: 0px;
              height: 0px;
              border-bottom: 60px solid #bfa;
              border-left: 60px solid transparent;
              border-right: 60px solid transparent;
           }
```

##### 2. 画一个等腰梯形

```css
        .b{
            width: 60px;
            height: 0px;
            border-bottom: 60px solid blue;
            border-left: 60px solid transparent;
            border-right: 60px solid transparent ;
        }
```

##### 3. 画一个扇形

```css
        .c{
            width: 0px;
            height: 0px;
            border-bottom: 60px solid pink ;
            border-left: 60px solid transparent;
            border-right: 60px solid transparent;
            border-radius: 50%;
        }
```

##### 4. 画一个半圆

```css
        .d{
            width: 120px;
            height: 60px;
            background-color: tomato;
            border-top-left-radius: 60px;
            border-top-right-radius: 60px;
        }
```

##### 5. 画一个圆

```css
        .e{
            width: 60px;
            height: 60px;
            background-color: turquoise;
            border-radius: 50%;
        }
```

##### 6. 画一个椭圆

```
        .f{
            width: 120px;
            height: 60px;
            background-color: wheat;
            border-radius: 50%;
        }
```

##### 7. 画一条曲线

[如何用CSS画曲线 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/64203097)

```css
.g {
            width: 200px;
            height: 200px;
            background: radial-gradient(circle at 200px 0px, transparent 160px, black 161px, transparent 162px),
                radial-gradient(circle at 0px 0px, transparent 160px, black 161px, transparent 162px),
                radial-gradient(circle at 0px 200px, transparent 160px, black 161px, transparent 162px),
                radial-gradient(circle at 200px 200px, transparent 160px, black 161px, transparent 162px);
        }
```



### 14. 元素水平垂直居中的方案

[一起搞懂 CSS 水平居中与垂直居中的16个方法 (juejin.cn)](https://juejin.cn/post/6844903799446831117)

##### 1. 水平居中

###### 	1. 行内元素

```css
.parent{
	text-align:center;
}
```

###### 	2. 块级元素

​		**1.一般块级元素**

```css
.son{
	margin：0 auto
}
```

​		**2.含浮动的块元素**

```
.parent{
    width:fit-content;
    margin:0 auto;
}
.son {
    float: left;
```

​		**3.元素固定宽，用position+负margin**

```css
.parent{
	 	 height: 900px;
     background-color: pink;
     position: relative;
}
.son{
	position:absolute;
	width:400px;
	left：50%;
	margin-left： -200px;
}
```

​		**4.定位+ transform**

```css
.parent{
	height：900px
	position: relative
}
.son{
	position：absolute
	left:50%
	transform:translateX(-50%)
}
```

​		**5.定位+ left/right 0**

```css
.parent{
	height：900px
	position: relative
}
.son{ 
	position：absolute
	left:0
	right：0
	margin：0 auto
}
```

​		**6.flex**

```css
.parent{
	display：flex
	justify-content：center
}
```



##### 2. 垂直居中

###### 1.行内元素

​	**1.子元素 line-height 值为父元素 height 值**

```
.parent {
    height: 高度;
}
.son {
    line-height: 高度;
}
```

###### 2.块级元素

​	**1. 元素固定宽高  position+负margin**

```css
.parent{
	 height: 900px;
     background-color: pink;
     position: relative;
}
.son{
	position:absolute;
	height:400px;
	top：50%；
	margin-top： -200px;
}
```

​		**2. 定位+ top/bottom 0**

```css
.parent{
	 height: 900px;
     background-color: pink;
     position: relative;
}
.son{
	position:absolute;
	height:400px;
	top：0
	bottom：0
	margin：auto 0
}
```

​	**3. 定位+transform**

```css
.parent{
	 height: 900px;
     background-color: pink;
     position: relative;
}
.son{
	position:absolute;
	height:400px;
	top：50%；
	transform：translateY(-50%)
}
```

​	**4. 行内块级元素**

```css
.parent::after, .son{
    display:inline-block;
    vertical-align:middle;
}
.parent::after{
    content:'';
    height:100%;
}
```

​	**5. 利用table**

```css
.parent {
  display: table;
}
.son {
  display: table-cell;
  vertical-align: middle;
}
```

​	**6. flex**

```
.parent {
    display: flex;
    align-items: center;
}
```



##### 3. 水平垂直居中

###### 	1. 元素固定宽高

​		**定位+负margin**

```css
    <style>
        .wrapper {
            height: 900px;
            background-color: pink;
            position: relative;
        }

        .content {
            width: 400px;
            height: 400px;
            background-color: white;
        }

        .content {
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -200px;
            margin-top: -200px;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div class="content">
        </div>
    </div>
</body>
```

###### 	2. 元素不固定宽高

​		**1. 定位 + transform**

```css
        .wrapper {
            height: 900px;
            background-color: pink;
            position: relative;
        }

        .content {
            background-color: white;
        }

        .content {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
```

​		**2. 定位 + margin:auto**

```css
        .wrapper {
            height: 900px;
            background-color: gray;
            position: relative;
        }
        .content {
            background-color: red;
            width: 300px;
            height: 300px;
        }
        .content {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            margin: auto;
        }
```

​		**3. display:flex**

```css
        .wrapper {
            height: 900px;
            background-color: pink;
            display: flex;
            justify-content: center;
            align-items: center;
        
        }
        .content {
            background-color: white;
            width: 300px;
            height: 300px;
        }
```

​		**4. display:table-cell + vertical-align:middle** 	**需要父元素固定宽高**

```css
        .wrapper {
            width: 900px;
            height: 900px;
            background-color: pink;
            display: table-cell;
            vertical-align: middle;
        }
        .content {
            background-color: white;
            width: 300px;
            height: 300px;
            margin: 0 auto;
        }
```



### 15. 双栏布局方案

[CSS实现两栏布局 - 天空003 - 博客园 (cnblogs.com)](https://www.cnblogs.com/yaya-003/p/12673428.html)

双栏布局就是左边栏固定宽，右边栏宽度自适应

##### 1. float+父元素BFC

```css
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .box {
            overflow: hidden;
        }

        .left {
            width: 200px;
            height: 400px;
            float: left;
            background-color: coral;
        }

        .right {
            height: 400px;
            margin-left: 200px;
            background-color: cornflowerblue;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="left"></div>
        <div class="right"></div>
    </div>
</body>
```

##### 2. 绝对定位+BFC

```css
        * {
            margin: 0;
            padding: 0;
        }

        .box {
            overflow: hidden;
            position: relative;
        }

        .left {
            width: 200px;
            height: 400px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: coral;
        }

        .right {
            height: 400px;
            margin-left: 200px;
            background-color: cornflowerblue;
        }
```

##### 3. flex布局

```css
        * {
            margin: 0;
            padding: 0;
        }

        .box {
            display: flex;
        }

        .left {
            width: 200px;
            height: 400px;
            background-color: coral;
        }

        .right {
            height: 400px;
            background-color: cornflowerblue;
            flex: 1; //自动放大占满剩余空间
        }
```

##### 4. 使用table布局

```
        * {
            margin: 0;
            padding: 0;
        }

        .box {
            display: table;
            width: 100%;
        }

        .left {
            display: table-cell;
            width: 200px;
            height: 400px;
            background-color: coral;
        }

        .right {
            display: table-cell;
            height: 400px;
            background-color: cornflowerblue;
        }
```



### 16. 三栏布局方案

[css布局篇——双栏布局与三栏布局 (juejin.cn)](https://juejin.cn/post/6844904062224171021#heading-15)

三栏布局特点就是左右栏定宽，中间自适应

##### 1. float

```css
    <style>
        .box{
            overflow: hidden;
        }
        .left{
            float: left;
            width: 200px;
            height: 200px;
            background-color: royalblue;
        }
        .right{
            float: right;
            width: 200px;
            height: 200px;
            background-color: salmon;
        }
        .middle{
            height: 200px;
            margin-left: 200px;
            margin-right: 200px;
            background-color: skyblue;
        }

    </style>
</head>

<body>
    <div class="box">
        <div class="left">左边</div>
        <div class="right">右边</div>
        <div class="middle">中间</div>		//middle只能放到最后
    </div>
</body>
```

**float布局有一个缺点，就是必须把middle放到最下面，否则会出错**



##### 2. 绝对定位+BFC

```css
    <style>
        .box{
            overflow: hidden;
            position: relative;
        }
        .left{
            position: absolute;
            top: 0;
            left: 0;
            width: 200px;
            height: 200px;
            background-color: royalblue;
        }
        .right{
            position: absolute;
            top: 0;
            right: 0;
            width: 200px;
            height: 200px;
            background-color: salmon;
        }
        .middle{
            height: 200px;
            margin-left: 200px;
            margin-right: 200px;
            background-color: skyblue;
        }

    </style>
</head>

<body>
    <div class="box">
        <div class="left">左边</div>
        <div class="middle">中间</div>  //middle可以放到中间
        <div class="right">右边</div>
        
    </div>
</body>
```



##### 3. flex

```css
    <style>
        .box {
            display: flex;
        }
        .left {
            width: 200px;
            height: 200px;
            background-color: tan;
        }
        .middle {
            flex: 1;
            height: 200px;
            background-color: thistle;
        }
        .right{
            width: 200px;
            height: 200px;
            background-color: tomato;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="left">左边</div>
				<div class="middle">中间</div>
        <div class="right">右边</div>
    </div>
</body>
```



##### 4. 圣杯布局

思路：1.左中右分别设置为float:left，左右设置为相对定位

​			2.父元素开启BFC，设置左右padding 预留空间

​			3.middle优先渲染，设置width为100%

​			4.左边margin-left设置为-100%，left  负宽度

​			5.右边margin-left 设置为负宽度，right为负宽度

```css
    <style>
        header {
            width: 100%;
            height: 100px;
            background-color: thistle;
        }
        .box {
            overflow: hidden;
            padding: 0px 200px;
        }

        .middle {
            float: left;
            width: 100%;       				//关键
            height: 200px;
            background-color: skyblue;
        }

        .left {
            float: left;
            position: relative;
            width: 200px;
            height: 200px;
            left: -200px;
            margin-left: -100%;					//关键
            background-color: springgreen;
        }

        .right {
            float: left;
            position: relative;
            width: 200px;
            height: 200px;
            right: -200px;
            margin-left: -200px;				//关键
            background-color: tan;
        }
        footer {
            width: 100%;
            height: 50px;
            background-color: yellow;
        }
    </style>
</head>

<body>
	<header></header>
    <div class="box">
        <div class="middle">中间</div> 	//middle 要优先渲染
        <div class="left">左边</div>
        <div class="right">右边</div>
    </div>
	<footer></footer>
</body>
```

##### 5. 圣杯布局( flex实现 )

```css
    <style>
        .box {
            display: flex;
        }

        .middle {
            flex: 1;
            height: 200px;
            background-color: thistle;
        }

        .left {
            order: -1;
            width: 200px;
            height: 200px;
            background-color: tan;
        }
        .right{
            width: 200px;
            height: 200px;
            background-color: tomato;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="middle">中间</div>
        <div class="left">左边</div>
        <div class="right">右边</div>
    </div>
</body>
```

##### 6. 双飞翼布局

思路：1. 先对左中右元素进行float：left，同时对父元素开启BFC

​			2.对中间元素middle设置width：100%

​			3.对中间内部元素content设置margin：0 200px  将外层撑开留位置

​			4.左边元素设置 margin-left: -100%;

​			5.右边元素margin-left设置为负宽度

```css
    <style>
        .box {
            overflow: hidden;
        }

        .middle {
            float: left;
            width: 100%;
        }

        .middle .content {
            height: 200px;
            margin: 0 200px;
            background-color: gray
        }

        .left {
            float: left;
            margin-left: -100%;
            width: 200px;
            height: 200px;
            background-color: turquoise;
        }

        .right {
            float: left;
            margin-left: -200px;
            width: 200px;
            height: 200px;
            background-color: tomato;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="middle">
            <div class="content">中间</div>
        </div>
        <div class="left">左边</div>
        <div class="right">右边</div>
    </div>

<body>
```



### 盒子模型

标准盒模型的宽度：标准盒模型下定义的width指的是内容区的宽度也就是content，所以标准盒模型的宽度大小是content(width)+padding+border+margin

IE盒模型的宽度：IE盒模型的width指的是整个盒模型的大小也就是（content+padding+border），所以IE盒模型的大小就是width+margin













------



## javaScript

### JS数据类型

**基本数据类型**：Number、String、Boolean、Undefined、Null、Symbol（ES6新增）、BigInt（ES10新增）

**引用数据类型**：Object（Object、Function、Array、Date、RegExp、Math）

- **基本数据类型**：基础类型存储在栈内存，被引用或拷贝时，会创建一个完全相等的变量；占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储
- **引用数据类型**：引用类型存储在堆内存，存储的是地址，多个引用指向同一个地址，这里会涉及一个“共享”的概念；占据空间大、大小不固定。引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体

### 1. type of 和instance of 检测数据类型有什么区别？

相同点：他们都能判断一个数据的类型

区别：typeof主要用来判断一个变量的数据类型，可以判断基本数据类型的类型，并且返回字符串表示，但是typeof判断null会被判断为是一个object 这是因为’object‘是用000开头存储的，null是一串0，所以会被误判

typeof 在判断对象类型的时候，除了function 都会返回object

instance of 只能判断一个对象是否属于一个构造函数的实例，在继承关系中用来判断一个实例是否属于他的父类型或者祖先类型的实例

##### **手写instance of**

```javascript
function myIncetanceof(left, right) {
    if (left === null | left !== 'object') {
        return false
    }
    let left = left.__proto__
    let prototype = right.prototype
    while (true) {
        if (left === null) {
            return false
        }
        if (left = prototype) {
            return true
        }
        left = left.__proto__
    }
}
```

##### Object.prototype.toString.call( )（如何判断一个变量是对象还是数组）

[从深入到通俗：Object.prototype.toString.call() - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/118793721)

使用**Object.prototype.toString.call( )**方法，会返回一个形如"[object XXX]" ，toString() 是Object的原型方法，对于 Object 对象，直接调用 toString() 就能返回 ‘[Object Object]’ 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。Object.prototype.toString.call( )可以判断所有数据类型。

##### **hasOwnProperty**( )

[hasOwnProperty() 方法详解_a791226606的博客-CSDN博客_hasownproperty](https://blog.csdn.net/a791226606/article/details/110679991)

顾名思义，就是只判断自己身上存在的属性，子元素和原型上的属性不会判断，如果有返回true，没有返回false

##### isPrototypeOf( )

[Object.prototype.isPrototypeOf() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf)

判断一个对象是否在另一个对象的原型链上，在的话返回true，不在返回false



### 2. 深拷贝和浅拷贝

**浅拷贝**指的是：当我们在复制一个引用类型数据的时候，只是复制到了引用数据类型保存的内存地址，所以说复制后也会发生引用，如果原地址中对象发生改变了，那么浅复制出来的对象也会发生改变。

**深拷贝实现方法：**

展开运算符（...），但是只能解决第一层属性的拷贝

可以使用**object.assgin**( )来实现：当对象中只有一级属性，没有二级属性的时候，此方法为深拷贝，但是对象中有对象的时候，此方法，在二级属性以后就是浅拷贝。**object.assgin**(target，source )：将source复制到target上（[Object.assign() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)）

创建一个新对象，属性中的其他对象也会被复制，且会产生一个新的内存地址，不会指向原地址。一般实现深拷贝可以使用**JSON.parse（JSON.stringfy( )）**但是该方法有一定的缺陷，就是如果复制对象中存在属性是undefined、函数或者是symbol的时候，它会自动忽略。

递归实现

```javascript
function deepclone(obj,copyobj){
    let copyobj=copyobj||{};
    for (let keys in obj) { //使用for..in进行遍历   数组的话keys为0,1..... keys是string类型
        if(obj.hasOwnProperty(keys)){//剥离原型链的数据
            if((typeof(obj[keys])) ==='object' && obj[keys]!==null){//判断是否为引用数据类型
                if (Object.prototype.toString.call(obj[keys]) === '[object Array]') {      //Object原型方法得到类型
                    copyobj[keys]=[];
                }else{
                    copyobj[keys]={};
                }
                deepclone(obj[keys],copyobj[keys]);
            }else{
                copyobj[keys]=obj[keys];
            }
        }
    }
    return copyobj;
}
```



### 3. es6的新特性都有哪些？  

（1）引入了let 来声明变量，let拥有块级作用域，没有变量提升。而且let 定义的变量不能跟var和 const声明的重名  

（2）引入了const 来声明变量，const也拥有块级作用域，没有变量提升。const声明变量的时候必须要赋初始值，且const声明的变量数据不能再被改变，但是如果是const声明了一个对象或者是数组，对象和数组中的值可以改变

（3）引入了展开运算符  …

（4）可以对数组和对象使用解构赋值

（5）ES6可以对函数形参设置默认值 

（6）引入了箭头函数。箭头函数其实相当于一个匿名函数。

​			箭头函数的特点：

​					箭头函数没有自己的this值，它的this是继承当前上下文中的this

​					箭头函数没有arguments，取而代之用...剩余运算符解决

​					箭头函数也没有自己的原型prototype

（7）引入了Symbol基础类型，表示独一无二的值，最大的用法是用来定义对象的唯一属性名。**Symbol 函数栈不能用 new 命令，因为 Symbol 是原始数据类型，不是对象**。可以接受一个字符串作为参数，为新创建的 Symbol 提供描述，用来显示在控制台或者作为字符串的时候使用，便于区分。[2.3 ES6 Symbol | 菜鸟教程 (runoob.com)](https://www.runoob.com/w3cnote/es6-symbol.html)

Symbol作为属性名，该属性不会出现在 **for in, for of** 循环中，也不会被 **Object.keys()、Object.getOwnPropertyNames()** 返回。但他也不是私有属性，有一个**Object.getOwnPropertySymbols** 方法可以获取对象的所有 Symbol 属性。

```javascript
let sy = Symbol("KK");
console.log(sy);   // Symbol(KK)
typeof(sy);        // "symbol"
 
// 相同参数 Symbol() 返回的值不相等
let sy1 = Symbol("kk"); 
sy === sy1;       // false


let syObject = {};
let sy = Symbol('key')
syObject[sy] = "kk";
 
syObject[sy];  // "kk"
syObject.sy;   // undefined
console.log(syObject);    // {Symbol(key): "kk"}
```



### 4. ==和===和Object.is()区别是什么？

= 赋值

== 返回的是一个布尔值，==两边不同的数据类型也可以进行比较，如果是不同的数据类型进行比较的话，那么他就会默认进行数据类型的转换  如果是引用数据类型的话，就比较的是引用数据类型的地址。 

​	注意： null == undefined 返回true

​				字符串和数字比较，会把字符串转化为数字进行比较

=== 只要两边类型不同，就一定不相等，返回false  NaN！== NaN

Object.is(NaN,NaN)返回true，Object.is(-0,+0)返回false其余用法和===相同



### 5. 常见的设计模式有哪些？

工厂模式	

构造函数模式

JS原型模式

构造函数+原型的JS混合模式

构造函数+原型的动态原型模式

观察者模式

发布订阅模式



### 6. call  apply  bind的区别？

首先call apply bind都是可以改变this的指向，call跟apply用法基本相同，第一个接受的参数就是指定的this指向，但是call在第一个参数之后返回的是参数列表，apply只有两个参数，第二个参数是一个数组。bind的参数传入和apply相同，bind和前两者不同的是，bind传入参数后不会立即执行，而是会返回this被改变的函数。利用bind可以实现柯里化。

##### 手写call( )方法

```javascript
Function.prototype.myCall = function (context) {
    let context = context || window
    context.fn = this
    let args = [...arguments].slice(1)
    let result = context.fn(...args)
    delete context.fn
    return result
}
```



##### 手写apply( )方法

```javascript
Function.prototype.myApply = function (context) {
    let context = context || window
    context.fn = this
    let result
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}
```



##### 手写bind( )

```javascript
Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('erro')
    }
    let self = this
    let args = [...arguments].slice(1)
    return function F() {
        if (this instanceof F) {
            return new self(...args, ...arguments)
        }
        return self.apply(context, args.concat(...arguments))
    }
}
```



### 7. new的实现原理

new的实现原理是 新生成了一个对象，然后将新对象链接到构造函数的原型上去，接着绑定this，返回一个新对象

##### 手写new

```javascript
Function.prototype.myNew = function () {
    let obj = new Object()
    let Con = [].shift.call(arguments)
    obj.__proto__ = Con.prototype
    let result = Con.apply(obj, arguments)
    return typeof result === 'object' ? result : obj
}
```



### 8. js继承方式有哪些？

[链接]: https://segmentfault.com/a/1190000016708006

##### 1. 原型链继承

​		子类型的原型为父类型的原型对象 如：

```javascript
		Student.prototype = new Person( )
```

​	 	优点：简单易于实现，来自原型对象的所有属性都能被访问到

​		 缺点：无法实现多继承；创建子类实例时，无法向父类构造函数传参；来自原型对象的所有属性被所有子类实例共享

##### 2. 构造函数继承

​		在子类的构造函数中利用call方法调用父类构造函数 如：

```javascript
		Person.call(this, name, age) //当前this为子类构造函数中的this
```

​		优点:  创建子类实例时，可以向父类传参；可以实现多继承（call多个父类对象)；解决了原型链继承中子类实例共享父类引用属性的问题

​		缺点：只能继承父类的实例属性和方法，不能继承父类原型上的属性和方法

​					无法实现函数复用，影响性能

##### 3. 组合继承

​	**1. 原型链+借用构造函数的组合继承**

​			属于上面两种方式的结合，首先在子类的构造函数中用call方法来调用父类继承父类属性，这样就能解决无法传参的问题，然后再将父类型的实例作为子类型的原型，这样就可以实现函数复用并可以访问到父类原型上的方法。

​			缺点：调用了两次父类构造函数，生成了两份实例

​	**2.组合继承优化1**

​			还是基于上面的方法。这种方法通过父类的原型和子类原型指向同一个对象。如：

```javascript
		Student.prototype = Person.prototype
```

​			解决了初始化两次实例方法，避免了组合继承的缺点			

​			缺点：没办法辨别实例是子类还是父类创造的

​	**3.组合继承优化2**

​			借助原型可以基于已有的对象来创建对象，如：

```javascript
        Student.prototype = Object.create(Person.prototype)//核心代码
        Student.prototype.constructor = Student//核心代码
```

​			最完美的继承方法

##### 4. ES6的继承方法

​			运用ES6新语法 class  extends  和super来共同实现，如：

```javascript
        class Student extends Person {
                    constructor(name, age, salary) {
                        super(name, age)//通过super调用父类的构造方法
                        this.salary = salary
                    }
```



### new 和 Object.create() 的区别

[New 和 Object.create()的区别_DepressedPrince的博客-CSDN博客](https://blog.csdn.net/DepressedPrince/article/details/80909636)

1. new的作用对象是一个构造函数，Object.create( )作用对象是函数或者对象
2. new出来的新对象的_ _proto_ _指向构造函数的prototype，而Object.create( )指向参数本身
3. new出来的对象保留原构造函数的属性，而Object.create( )会丢失(因为新建的对象的_ _proto_ _指向的是参数本身，没在原型链上)



### 9. 原型和原型链

[深度解析原型中的各个难点 · Issue #2 · KieSun/Dream · GitHub](https://github.com/KieSun/Dream/issues/2)

每个函数在创建的时候，都会创建一个prototype的属性（除了Function.prototype.bind( )），即为原型，原型也是一个对象。每个对象都有一个 __ proto __  指向了创建该对象的构造函数的原型。对象可以通过 __ proto __ 来寻找不属于该对象的属性， __ proto __ 将对象连接起来组成了原型链。



![img](https://camo.githubusercontent.com/b887b2f0a7f51c8d5ce2d42879bb0291c6efff4c0cc3fc81be921e087081f8be/68747470733a2f2f79636b2d313235343236333432322e636f732e61702d7368616e676861692e6d7971636c6f75642e636f6d2f626c6f672f323031392d30362d30312d3033333932352e706e67)



所有的函数的 __ proto __ 都指向 Function.prototype

所有对象的 __ proto __ 都指向Object.prototype

Function.prototype和 Object.prototype是两个特殊的对象，他们由引擎来创建

除了以上两个特殊对象，其他对象都是通过构造器 new 出来的

### 10. 正则表达式

[JS | 前端进阶之道 (yuchengkai.cn)](https://yuchengkai.cn/docs/frontend/#正则表达式)

[js正则表达式及练习（超详细）_小生听雨园的博客-CSDN博客_js正则练习](https://blog.csdn.net/weixin_44154094/article/details/112685412?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_baidulandingword-0&spm=1001.2101.3001.4242)

##### 正则的匹配规则

​	修饰语

​		**i**：忽略大小写	**g**：全局匹配	**m**：多行

​	元字符

​		**|** 或		 **[ ]**括号里表示为或			**[a-z]** 任意小写字母			**[A-Z]** 任意大写字母	**[A-z]**任意字母		**[0-9]** 任意数字			**[^]** 除了...之外

​		**ab{1,3}**  b出现1到3次		 **(ab){1,3}** ab出现1到3次		**{m，}** 出现m次以上			**+ **  至少一个				*****  0个或多个

​		**?** 一个或0个	 		**^**  以...开头			**$**  以...结尾

​	字符简写  

​		**\w** 匹配字母数字或下划线		**\W** 匹配非字母数字或下划线

​		**\s**   匹配空格		**\S**   匹配非空格

​		**\d**   匹配数字		**\D**  匹配非数字

​		**\b  \b** 匹配单词	**\B\B**  相反

##### 正则表达式创建

```javascript
let a = new RegExp('正则表达式'，'匹配模式')
let a = /a/ i
```

##### 正则表达式的方法

match( )：匹配字符串，返回符合条件的字符串封装在一个**数组**中

```javascript
let str1 = "aBcd125efgh1ijk4561lmnopqrst145uvwxyz";
let res1 = str1.match(/[A-z]/gi);
console.log(res1); //输出['a', 'B', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x','y', 'z']
```

search( ): 寻找符合条件的字符串，找到就返回索引，找不到就返回-1

```javascript
let str2 = "abc def ghi jjk";
let res2 = str2.search(/g[hjkl]i/);
console.log(res2); //输出8
```

replace( )：替换字符串中的内容  接受参数第一个为被替换的内容，第二个参数为新内容

```javascript
// 去除两端空格
let str = "    hell oo   i    ";
str = str.replace(/^\s*|\s*$/g,"");		
console.log(str); 
```

split( )： 把匹配到的字符串剔除，然后将字符串剩余的内容返回一个新数组

```javascript
var str3 = "1a2b3c4d5e6f7";
var res3 = str3.split(/[a-z]/i);
console.log(res3); // 输出[ '1', '2', '3','4', '5', '6','7']
```



### **防抖和节流**

[浅谈 JS 防抖和节流 - SegmentFault 思否](https://segmentfault.com/a/1190000018428170)

##### 函数防抖

​	函数的防抖就是当任务频繁触发时，只有任务触发时间间隔超过指定时间间隔，任务才会执行（指定时间间隔内只执行一次）

​	**手写防抖函数**

```javascript
// 函数防抖
function debunce(func, wait) {
    let timer = 0
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }else{
        // 先看这里
        timer = setTimeout(() => {
            func.apply(this, args)
        }, wait)}
    }
}
```

##### 函数节流

​	函数节流是本质上是稀释了函数在一定时间内的执行次数，间隔一段时间会执行一次

​	手写函数节流

```javascript
function throttle(func, wait) {
    let state = true
    return function (...args) {
        if (!state) {
            return
        } else {
            state = false
            setTimeout(() => {
                func.apply(this, args)
                state = true
            }, wait)
        }
    }
}
```

##### 防抖和节流的区别

节流只是稀释了一定时间内事件的执行次数，中间还是会执行，但是防抖是必须得等最后一次事件执行完毕，触发函数。 比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。

### 11. 作用域

##### 全局作用域

​	浏览器打开一个页面的时候，会为JS代码提供一个全局的运行环境，这个运行环境就是全局作用域。全局作用域下会创建一个window对象，这个对象是全局作用域下最大的内置对象（全局作用域下定义的函数和变量都会存储在window下），如果声明一个全局变量，就会在window下新增加一个键值对，属性名为变量名，值就是变量值。如果是var一个变量，则可以在window下找到变量名，属性值为undefined。全局作用域下无法获取变量。

##### 私有作用域（函数作用域）

​	函数执行时会产生一个私有作用域，执行多次会产生多个私有作用域。私有作用域在全局作用域中形成，具有包含关系。在私有作用域中定义的变量和形参也是私有变量，函数体中通过function创建的函数也是私有的函数，私有作用域下的变量和函数可以访问全局作用域中的变量和参数。

##### 块级作用域

​	ES6中引入的一种作用域。if、for、switch case、while、try、catch都是块级作用域，块级作用域中的变量不能被重复声明。块级作用域变量可访问全局作用域中的变量和参数。如果块级作用域中有var声明的，那么外面依然可以访问到，私有作用域则不能。

##### 上级作用域（作用域链）

​	函数在哪里定义那么他的上级作用域就在哪，和函数在哪里执行没有关系。

​	作用域链：要获取变量的值时，先看这个变量是否为私有变量，如果不是私有变量，则向他的上级作用域中寻找，如果还是没找到，则再向上级中找，最后直到找到window还没有就报错。这样一级一级向上查找的就会形成作用域链。



### 12.this

[彻底搞懂 JS 中 this 机制 - SegmentFault 思否](https://segmentfault.com/a/1190000014224541)

##### 	**绑定规则优先级**

​		数是否在new绑定，如果是就指向new创建的对象    	 **new绑定**

​		数是否使用call apply这种显示绑定，如果有直接绑定   **显示绑定**

​		数是否有上下文（有没有. 有.的话就是指向.前面的）	**隐式绑定**

​		如果都不是则使用默认绑定，默认绑定则是使用严格模式的话就是undefined，否则绑定到window   **默认绑定**

##### 	**绑定注意**

​		题目：[JavaScript深入之史上最全--5种this绑定全面解析 | 木易杨前端进阶 (muyiy.cn)](https://muyiy.cn/blog/3/3.1.html#本期思考题)

​				   [JavaScript深入之重新认识箭头函数的this | 木易杨前端进阶 (muyiy.cn)](https://muyiy.cn/blog/3/3.2.html#题目1)

​		全局作用域下this指向window

​		函数中的this，要看函数执行前有没有 . , 有 . 的话，点前面是谁，this就指向谁，如果没有点，指向window

​		定时器中this指向window（默认，除非显示绑定）

​		自执行函数的this永远指向window，高阶函数this指向window

​		构造函数中的this指向当前实例

​		call、apply、bind改变this，如果这三个方法中的第一个参数传入null或者undefined则使用**默认绑定**

​		箭头函数中的this指向上级作用域，如果上级是new实例的对象，则指向实例对象



### 前端事件流

事件流就是从页面中接受事件的执行顺序，分为事件捕获阶段，目标阶段，事件冒泡阶段

##### 事件冒泡

事件冒泡就是如果有<div><p></div>，如果两个元素都有点击事件，那么执行顺序是**p -> div -> body -> html -> document** DOM0级的时候，用on+事件名，默认为事件冒泡。在DOM2级的时候，采用了addEventListener(event, function, useCapture)，当useCapture参数设置为false时为冒泡（默认为false）

##### 事件捕获

事件捕获执行顺序是相反的即为**document -> html -> body -> div -> p**。在DOM2级的时候，采用了addEventListener(event, function, useCapture)，当useCapture参数设置为true时即为事件捕获

**阻止冒泡事件**

**event.stopPropagation()、event.preventDefault()**  和在事件处理函数中加  **return false** ，**stopImmediatePropagation** 同样也能实现阻止事件，但是还能阻止该事件目标执行别的注册事件

##### 事件目标

**event.target** 表示当前事件发生的元素

**event.currentTarget** 表示事件绑定的元素

##### 事件委托

[你真的理解 事件冒泡 和 事件捕获 吗？ (juejin.cn)](https://juejin.cn/post/6844903834075021326#heading-4)

由于事件冒泡机制，点击了 li 后会冒泡到 ul ，此时就会触发绑定在 ul 上的点击事件，再利用 target 找到事件实际发生的元素，就可以达到预期的效果。target 指的是实际事件发生的元素，不一定是绑定的元素

```javascript
var elementUl = document.querySelector('ul');
function fn(event) {
    var el = event.target;
    while (el.tagName !== 'LI') {
        if (el === elementUl){
            el =null;
            break;
        }
        el = el.parentNode;//返回當前元素的父节点
    }

    if (el) {
        console.log(el)
    }
}
elementUl.addEventListener('click', fn);
//动态绑定
addButton.onclick = function(){
  
  var li = document.createElement('li')
  li.textContent = 'new'
  
  document.querySelector('ul').appendChild(li)
}

document.querySelector('ul').onclick = function(e){
  console.log(e.target)
}
```

**使用事件委托的优点：**

1. 可以大量节省内存空间，当有成千上万个节点时，不必再循环遍历添加事件监听，只需要给共同的父元素添加就行

2. 当在列表元素中添加新元素时，也不必再一次循环给每一个元素绑定事件，直接修改事件代理的事件处理函数即可

**使用事件委托的缺点：**

​	事件委托基于冒泡，对于不冒泡的事件不支持（focus、blur、mouseleave、mouseenter、load、scroll）(焦点事件，鼠标移动事件)

### 13. JS中同步和异步

​	**同步**：JS是单线程语言，所以只能同步执行

​	**异步**：JS运行在浏览器中，浏览器是多线程的，可以同一时间执行多个任务。

​	**JS中常见的异步任务**：定时器，promise，async await，回调函数，事件绑定。



### 14. 事件循环Event Loop

[JS笔试题之Event Loop详解_weixin_34102807的博客-CSDN博客](https://blog.csdn.net/weixin_34102807/article/details/93177726?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-0&spm=1001.2101.3001.4242)

由于JS是单线程语言，所以只能同步执行。浏览器在执行代码时，先执行同步代码，也就是宏任务，接着宏任务执行完后，执行栈为空，这时候看有没有微任务要执行，接着执行所有微任务，必要的话渲染UI然后开始下一轮的Event Loop，执行宏任务中的异步代码

- macro-task(宏任务)：包括整体代码script、setTimeout、setInterval、I/O、UI交互事件，可以理解是每次执行栈执行的代码就是一个宏任务；
- micro-task(微任务)：Promise，process.nextTick，且process.nextTick优先级大于promise.then。可以理解是在当前 task 执行结束后立即执行的任务；
- await实际上是一个让出线程的标志。**await后面的表达式会先执行一遍，将await后面的代码加入到microtask中**，然后就会跳出整个async函数来执行后面的代码
- 因为async await 本身就是promise+generator的语法糖。所以await后面的代码是microtask。



### Iterator接口

[核心基础篇 | 面试指南 (poetries.top)](https://blog.poetries.top/FE-Interview-Questions/docs/simply.html#_14-iterator迭代器)

**Iterator为各种不同的数据结构提供统一的访问机制**。任何数据结构只要部署`Iterator`接口，就可以完成遍历操作（即依次处理该数据结构的所有成员)

```js
const obj = {
    [Symbol.iterator]:function(){}
}
```

`[Symbol.iterator]` 属性名是固定的写法，只要拥有了该属性的对象，就能够用迭代器的方式进行遍历。

- 迭代器的遍历方法是首先获得一个迭代器的指针，初始时该指针指向第一条数据之前，接着通过调用 next 方法，改变指针的指向，让其指向下一条数据
- 每一次的**next**都会返回一个对象，该对象有两个属性
  - `value` 代表想要获取的数据
  - `done` 布尔值，false表示当前指针指向的数据有值，true表示遍历已经结束

```js
let arr = [{num:1},2,3]
let it = arr[Symbol.iterator]() // 获取数组中的迭代器
console.log(it.next())  // { value: Object { num: 1 }, done: false }
console.log(it.next())  // { value: 2, done: false }
console.log(it.next())  // { value: 3, done: false }
console.log(it.next())  // { value: undefined, done: true }
```

- 一个数据结构只要有Symbol.iterator属性，就可以认为是“可遍历的”
- 原型部署了Iterator接口的数据结构有三种，具体包含四种，分别是数组，类似数组的对象，Set和Map结构



### Promise

##### Promise定义

Promise是ES6新增的一个语法，目的是在执行异步编程的时候解决回调地狱的问题。有了promise对象就异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。Promise有三个状态，初始为pending状态，可以通过resolve和reject函数更新为resolved和rejected，状态一旦发生改变，就不会再变化。

##### Promise的静态方法   

**Promise.all**

​		接受一个数组作为参数，数组中包含多个promise实例，如果数组中的实例状态均为resolved，那么就会执行成功的回调，并将成功的结果保存在数组中，如果其中有一个为rejected，则返回第一个失败的结果。

​		**如何在reject之后依旧返回resolve？**	

​			对数组进行map，catch出reject的值，使得resolve函数得以继续执行

```javascript
Promise.all([p1, p2, p3].map(p => p.catch(e => '出错后返回的值' )))
  .then(values => {
    console.log(values);
  }).catch(err => {
    console.log(err);
  })
```

**Promise.race**

​		谁先执行的快就先返回谁，所以返回的是实际上第一个成功或者失败的值,直接返回，返回后后面的promise对象也不再执行了。

**Promise.resolve( value)**

​		value: **如果传入参数为非Promise类型的对象**，如字符串、undefined、number等，则返回一个新的promise对象，对象的状态为成功；**如果传入参数为一个promise对象**，则参数的结果决定了resolve的结果 （也就是说，如果传入的这个promise执行的是resolve，则外层返回成功，结果就是里面的结果，如果是失败同理）

​	**返回一个成功或失败的对象**，所以可以利用Promise.resolve来创建一个新的promise对象

**Promise.reject ( reason )**

​	reason:  无论传入什么，返回的结果都是一个失败的promise对象。

​	返回一个失败的promise对象	

##### 手写Promise.all

```javascript
Promise.prototype.all = function (promises) {
    let results = [];
    let promiseCount = 0;
    let promisesLength = promises.length;
    return new Promise(function (resolve, reject) {
        for (let val of promises) {
            Promise.resolve(val).then(function (res) {
                promiseCount++;
                results.push(res);
                if (promiseCount === promisesLength) {
                    return resolve(results);
                }
            }, function (err) {
                return reject(err);
            });
        }
    });
}
```



### Generator

`Generator` 是 `ES6`中新增的语法，和 `Promise` 一样，都可以用来异步编程。Generator函数可以说是Iterator接口的具体实现方式。Generator 最大的特点就是可以控制函数的执行。**`Generator`函数是`ES6`提供的一种异步编程解决方案。通过`yield`标识位和`next()`方法调用，实现函数的分段执行**

- `function` 用来声明一个函数是生成器函数，它比普通的函数声明多了一个`*`,`*`的位置比较随意可以挨着 `function` 关键字，也可以挨着函数名
- `yield` 产出的意思，这个关键字只能出现在生成器函数体内，但是生成器中也可以没有`yield` 关键字，函数遇到 `yield` 的时候会暂停，并把 `yield` 后面的表达式结果抛出去
- `next`作用是将代码的控制权交还给生成器函数

```js
function *foo(x) {
  let y = 2 * (yield (x + 1))
  let z = yield (y / 3)
  return (x + y + z)
}
let it = foo(5)
console.log(it.next())   // => {value: 6, done: false}
console.log(it.next(12)) // => {value: 8, done: false}
console.log(it.next(13)) // => {value: 42, done: true}
```

- 首先 Generator 函数调用时它会返回一个迭代器
- 当执行第一次 next 时，传参会被忽略，并且函数暂停在 yield (x + 1) 处，所以返回 5 + 1 = 6
- 当执行第二次 next 时，传入的参数等于上一个 yield 的返回值，如果你不传参，yield 永远返回 undefined。此时 let y = 2 * 12，所以第二个 yield 等于 2 * 12 / 3 = 8
- 当执行第三次 next 时，传入的参数会传递给 z，所以 z = 13, x = 5, y = 24，相加等于 42

`yield`实际就是**暂缓执行**的标识，每执行一次`next()`，相当于指针移动到下一个`yield`位置



### async await

[async和await - 简书 (jianshu.com)](https://www.jianshu.com/p/b4fd76c61dc9)

1. await后面接一个会return new promise的函数并执行它

2. await只能放在async函数里

3. async函数会返回一个promise，并且Promise对象的状态值是resolved（成功的）

- 如果你没有在async函数中写return，那么Promise对象resolve的值就是是undefined
- 如果你写了return，那么return的值就会作为你成功的时候传入的值

### DOM diff

[让虚拟DOM和DOM-diff不再成为你的绊脚石 (juejin.cn)](https://juejin.cn/post/6844903806132568072#heading-7)

##### 虚拟DOM 

​	虚拟DOM就是JS模仿DOM结构来创建一个DOM的树形结构，这个主要通过createElement方法来实现，createElement主要包含三个参数 type，props，children。创建完虚拟DOM之后再通过render去渲染真实DOM

​			type: 指定元素的标签类型，如'li', 'div', 'a'等

​			props：表示指定元素身上的属性，如class、style等

​			children：表示指定元素是否有子节点，参数以数组形式传入

<img src="/Users/wangquan/Library/Application Support/typora-user-images/image-20210608155959398.png" alt="image-20210608155959398" style="zoom:75%;" />

##### DOM-diff算法

​	DOM-diff主要是采用先序优先遍历的方法来比较两棵树的不同，然后根据不同渲染真实DOM。如果新老节点是文本的话，则比较文本的内容，如果不同就发生替换。如果是元素则首先对比元素类型，如果元素类型不同则直接替换，如果元素类型相同，则比较其属性，比较属性时先比较属性中的key，如果key不同则替换，接着再比较其他属性，如果有子节点就再继续上面方法来对子节点进行比较



### 12. 闭包

闭包简单来说就是一个函数内部又声明了一个函数，并且子函数用到了父函数的局部变量，这时就形成了一个闭包。闭包的作用主要有两个：一个是形成闭包后，子函数可以访问父函数的所有局部变量，另一个就是保护变量不受外界污染，使其一直存在内存中，不会被垃圾回收机制回收。 由于闭包太消耗内存，在实际中还是少用。**可以用闭包来创建私有变量**。



### 数组

##### for... in  

[js中的四种for循环 - Lynn_z - 博客园 (cnblogs.com)](https://www.cnblogs.com/lynn-z/p/13068866.html)

for(keys in arr),for in其实遍历的是每一项的属性（还可以遍历原型链上的属性），keys是一个字符串类型，for in只会遍历存在的属性

##### map( )和forEach( )的相同点和区别

​	相同点：

​		都是遍历数组中的每一项，支持三个参数：item（当前元素），index（索引），arr（原数组）

​	区别：

​		forEach( )没有返回值，所以forEach( )方法会修改原数组，而map( )方法会返回一个新数组，不会改变原数组

##### slice( )和splice( )

​	**slice(start,end)**: 该方法从指定索引选取片段，然后返回一个新数组，包含从start到end（不包含该元素）的数组方法

​	该方法不会改变原数组，会返回一个新数组，**如果只有一个参数**，就是返回从这个参数（包含这个参数）以后的所有元素，**如果没有参数则返回原数组**

​	**splice(index, howmany, item1,...itemx )**：**index（必须）索引**，使用负数，从数组尾部规定位置，**howmany（必须）**删除几个， **item1,...itemx（可选）**为添加的元素，该方法会改变原数组

##### reduce( )

​	[JS中reduce方法_菜鸟搬砖记-CSDN博客_js reduce方法](https://blog.csdn.net/hope93/article/details/86528183)

​	reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值, **不会改变原数组的值**

​    reduce() 对于空数组是不会执行回调函数的

​	**reduce(function ( prev，cur，curIndex，arr), initiaValue )**方法接受一个函数和一个 **initiaValue** 初始值作为参数，函数中的参数 **prev** 函数传进来的初始值或上一次回调的返回值，**cur**数组中当前处理的元素值，**curIndex**当前元素索引，**arr**原数组。可以用来做累加求和等操作

```js
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
       const sum = arr.reduce(function (prev, current) {
         return prev+current
       }, 0)
       console.log(sum) //55
```

##### filter( )

​	[JS中filter()方法的使用_u010227042的博客-CSDN博客](https://blog.csdn.net/u010227042/article/details/106872539)

​	方法创建一个新数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。它里面通过function去做处理,filter()不会对空数组	进行检测、不会改变原始数组

##### some( )

​	**一真则真**，方法接受一个回调函数作为参数，返回值为一个Boolean，some会遍历数组中的每个元素，让每个值都执行一遍回调函数，如果有一个元素满足条件，返回true , 剩余的元素不会再执行检测，如果遍历完没有满足条件的元素，则返回false

##### every( )

​	**一假则假**，方法使用和some相同，只不过只要碰到不满足条件的元素就返回false，后面的元素不会再执行检测，如果所有元素都满足条件，返回true

##### find（）

​	遍历数组中每一个元素的值，返回第一个符合条件的那个的值

##### findIndex( )

​	遍历数组中每一个元素的值，返回第一个符合条件的那个的索引

**from( )**

​	[ES6之Array.from()方法 - 江峰★ - 博客园 (cnblogs.com)](https://www.cnblogs.com/jf-67/p/8440758.html)

​	Array.from( )就是把一个类数组对象或者一个可遍历对象转换成一个真正的数组（该类数组对象的属性名必须为数值型或字符串型的数字，而且必须要有length属性），如果Array.from( )中参数是一个数组，那么就会返回一个一模一样的数组（可用来实现数组的深拷贝）

##### 数组展平的方法

1. 普通方法（递归）

```js
function flattenMd() {
    let result = []
    return function flatten(arr) {
        arr.forEach((item) => {
            if (Array.isArray(item)) {
                flatten(item)
            } else {
                result.push(item)
            }
        })
        return result
    }

```

2. concat +递归

```js
function flattenMd(arr) {
    let result = []
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            result = result.concat(flattenMd(item))
        } else {
            result.push(item)
        }
    })
    return result
}
```

3. reduce+递归

```js
function flattenMd(arr) {
    return arr.reduce((prev, item) => {
        Array.isArray(item) ? prev.concat(flattenMd(item)) : item
    }, [])
}
```

4. 展开运算符

```js
function flattenMd(arr) {
    let flatten = arr => [].concat(...arr)//可去掉一层[]
    return flatten(arr.map(item => Array.isArray(item) ? flattenMd(item) : item))
}
```

5. join和split组合（只适合字符串数组）

```js
function flattenMd(arr){
    return arr.join().split(',')
}
```

##### 类数组和数组的区别与转换

类数组对象，有arguments对象、NodeList 对象等，类数组对象**有length属性，可以通过数组下标取值**，但是**类数组对象不能调用数组原型上的方法**

**转换方法**：Array.prototype.slice.call(arguments)

​					let args = [...arguments]

​					Array.from(arguments)



### 字符串

​	[快速掌握JavaScript字符串方法 (juejin.cn)](https://juejin.cn/post/6921593483757092878)

​	**indexof( str，index)** 返回字符串索引，第二个参数是只从第几个索引开始查找，找不到返回-1

​	**substring(start，end )**  提取指定索引之间的字符串

​	**substr( start，howmany)** 方法可在字符串中抽取从指定下标开始的指定数目的字符，也就是说第一个参数是下标，第二个参数是长											         度,	该方法不会改变原字符串

​	**slice(start，end ) **提取指定索引之间的字符串(支持复数)

​	**split(' ')** 该方法是字符串分割为数组,参数是以什么方式分割。同样不会改变原字符串

​	**toLowerCase( )、toUpperCase( )**转换大小写

​	**match( str )** 匹配字符串,查找到返回一个数组对象,数组对象里有 匹配的值 查找字符串的下标 和 原字符串内容,找不到返回null

​	**includes( str，index)** 返回一个布尔值



### Ajax

ajax get请求

```javascript
var xhr = XMLHttpRequest
xhr.open('get', url, true) // 初始化请求参数，还没发送请求   true表示异步
xhr.send(null) // 向服务器发送请求,但是不带有数据发送过去,一般在get方式发送时候多使用这个方式
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) { //状态4表示请求已发送且服务器完成返回响应，浏览器已完成下载响应内容
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) { // 服务端 状态码
            console.log(xhr.responseText) //服务器返回的响应文本
        } else {
            console.log(xhr.statusText) //状态码的文本描述，如200的statusText是ok
        }
    }
}
```



### addEventListener()和onClick()的区别

1. 如果给一个DOM对象绑定两个onClick，那么第一个绑定的会被覆盖掉，但是addEventListener的话可以同时绑定两个事件
2. addEventListener('click' ,function,caption)可以控制事件的冒泡和捕获(caption=TRUE为捕获)，caption默认为false
3. addEventListener( )对任何DOM都是有效的，但是onClick仅限于HTML元素





### 函数柯里化的实现

函数柯里化实际上就是实现给函数分步传参，每次传递一部分的参数，会返回一个更具体的函数接受剩余参数

```javascript
function currying(func, args = []) {
    let len = func.length;
    return function (..._args) {
        _args.unshift(...args);
        if(_args.length < len) {
            return currying.call(null, func, _args);
        }
        return func(..._args);
    }
}
```



### 模块化

##### 模块化方案

- 第一种是 CommonJS 方案，它通过 require 来引入模块，通过 module.exports 定义模块的输出接口。这种模块加载方案是服务器端的解决方案，它是以同步的方式来引入模块的，因为在服务端文件都存储在本地磁盘，所以读取非常快，所以以同步的方式加载没有问题。但如果是在浏览器端，由于模块的加载是使用网络请求，因此使用异步加载的方式更加合适。
- 第二种是 AMD 方案，这种方案采用异步加载的方式来加载模块，模块的加载不影响后面语句的执行，所有依赖这个模块的语句都定义在一个回调函数里，等到加载完成后再执行回调函数。require.js 实现了 AMD 规范
- 第三种是 CMD 方案，这种方案和 AMD 方案都是为了解决异步模块加载的问题，sea.js 实现了 CMD 规范。它和require.js的区别在于模块定义时对依赖的处理不同和对依赖模块的执行时机的处理不同。
- 第四种方案是 ES6 提出的方案，使用 import 和 export 的形式来导入导出模块

##### CommonJS与ES6模块的差异

[ES6 模块与commonJS模块的差异 - 简书 (jianshu.com)](https://www.jianshu.com/p/81ddebfbc202)

- 前者支持动态导入，也就是 `require(${path}/xx.js)`，后者目前不支持，但是已有提案,前者是同步导入，因为用于服务端，文件都在本地，同步导入即使卡住主线程影响也不大。
- 而后者是异步导入，因为用于浏览器，需要下载文件，如果也采用同步导入会对渲染有很大影响
- CommonJS输出的是一个值的复制，ES6模块输出的是一个值的引用，也就是说使用了require引用之后，无论引用的模块内部如何变化，他的值都不会再做改变，而import的话，由于输出的是一个值的引用，所以一旦当引入模块内部值发生了改变，引入也会发生改变
- 后者会编译成 `require/exports` 来执行的

##### **AMD 和 CMD 规范的区别？**

- 第一个方面是在模块定义时对依赖的处理不同。AMD推崇依赖前置，在定义模块的时候就要声明其依赖的模块。而 CMD 推崇就近依赖，只有在用到某个模块的时候再去 require。
- 第二个方面是对依赖模块的执行时机处理不同。首先 AMD 和 CMD 对于模块的加载方式都是异步加载，不过它们的区别在于模块的执行时机，AMD 在依赖模块加载完成后就直接执行依赖模块，依赖模块的执行顺序和我们书写的顺序不一定一致。而 CMD在依赖模块加载完成后并不执行，只是下载而已，等到所有的依赖模块都加载好后，进入回调函数逻辑，遇到 require 语句的时候才执行对应的模块，这样模块的执行顺序就和我们书写的顺序保持一致了。

#####  四种模块化方案的特点

- **AMD**：`requirejs` 在推广过程中对模块定义的规范化产出，提前执行，推崇依赖前置
- **CMD**：`seajs` 在推广过程中对模块定义的规范化产出，延迟执行，推崇依赖就近
- **CommonJs**：模块输出的是一个值的 `copy`，运行时加载，加载的是一个对象（`module.exports` 属性），该对象只有在脚本运行完才会生成
- **ES6 Module**：模块输出的是一个值的引用，编译时输出接口，`ES6`模块不是对象，它对外接口只是一种静态定义，在代码静态解析阶段就会生成。







------



## 计算机网络



### OSI七层模型

[OSI参考模型各层功能及其协议_次元代码的博客-CSDN博客_osi参考模型各层协议](https://blog.csdn.net/weixin_45961055/article/details/108568799)

应用层：应用层是用户与网络的界面，即所有能与用户交互并且产生网络流量的程序（HTTP、DNS、FTP、SMTP）

表示层：定义数据格式和加密(ASCII)

会话层：建立、管理、终止会话(ASP)

传输层：负责两个主机进程之间的通讯，即端到端的通讯。传输单位是报文段或用户数据报（TCP、UDP）

网络层：把分组从源端传输到目的端，为分组交换网上的不同主机提供通讯服务，传输单位是数据报（IP、ICMP）

数据链路层：把网络层的传下来的数据报组装成帧。链路层的传输单位是帧（PPP、STP）

物理层：主要是在物理媒体上实现比特流的透明传输，物理层传输的单位是比特（Rj45）



### TCP/IP 模型

物理层、数据链路层、网络层、传输层、应用层



### HTTP头部

1. 通用头部：cache-control、connection：keep-alive	date（报文创建时间）
2. 请求头：if-modify-since、if-none-match、accept(表示客户端接收的媒体类型) 、user-agent(浏览器的身份标识符)
3. 响应头：Etage、Age创建响应时间
4. 实体头部：expires、last-modified、Content-Type（通常用来设置简单请求还是非简单请求）



### HTTP方法

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1105df43f3da4ec0b5ff3f77cdf6e297~tplv-k3u1fbpfcp-watermark.image)



### HTTP与HTTPs的工作方式

##### 1. HTTP

HTTP是一种简单的请求-响应连接，是基于TCP来进行连接的，而且默认端口为80，作用于浏览器和服务器之间。一旦连接建立，客户端就可以通过套接字接口来发送请求和接受响应，同样的服务器端也通过套接字来接受HTTP请求和发送响应，其通信方式为明文通信，当通信结束则断开连接

##### 2. HTTPs

HTTPS是以安全为目标的 HTTP 协议，在 HTTP 的基础上通过传输加密和身份认证的方式保证了传输过程的安全性。其工作流程如下：

1. 客户端发送HTTPS请求，并连接到服务端443端口，请求 中表示了自己所支持的加密算法列表和密钥长度等
2. 服务端接收到了请求，然后对加密算法列表和密钥进行比对，然后选中一种算法，并将算法和密钥组件一起发送给客户端
3. 服务端向客户端发送一个数字证书的报文，报文包含了数字证书的机构、过期时间、服务端的公钥等
4. 服务端向客户端发送一个完成报文，告诉客户端SSL第一阶段结束
5. 在SSL第一阶段结束之后，客户端向服务端发送一个回应报文，报文中包含一个客户端生成的随机密码串，称为 pre_master_secre，并且该报文是经过证书中的公钥加密过的
6. 接着客户端再向服务端发送一个报文，告诉服务端接下来的通信都是以pre_master_secre加密的方式发送的
7. 客户端发送一个finish报文，此报文包含了从第一次握手至今的所有报文的校验值，最终协商是否成功取决于服务端能否成功用私钥解密
8. 服务端同样发送与第 ⑥ 步中相同作用的报文，让客户端进行确认，最后发送 finish 报文告诉客户端自己能够正确解密报文

当服务端和客户端的 finish 报文交换完成之后，SSL 连接就算建立完成了，之后就进行和 HTTP 相同的通信过程，唯一不同的是在 HTTP 通信过程中并不是采用明文传输，而是采用对称加密的方式，其中对称密钥已经在 SSL 的建立过程中协商好了



### HTTP和HTTPS的区别

​	1.  HTTPS需要CA证书

​	2. HTTP连接是建立在TCP连接之上的，传输的内容都是明文，而HTTPS是通过SSL/TLS连接上的，SSL/TLS又运行在TCP连接上，所有内容传输都经过加密

​	3. HTTP和HTTPS采用的是两种完全不同的连接方式，HTTP端口80，HTTPS端口443

​	4. HTTPS可以有效防止运营商劫持 

​	5. HTTP 页面响应比 HTTPS 快，主要因为 HTTP 使用 3 次握手建立连接，客户端和服务器需要握手 3 次，而 HTTPS 除了 TCP 的 3 次握手，还需要经历一个 SSL 协商过程。



### HTTPS 的加密方式

HTTPS采用了**对称加密和非对称加密相结合**的方式，在SSL/TLS协议进行**非对称加密**（证书的公钥和私钥），在SSL/TLS协议完成之后，浏览器和服务器协定了通信传输共同使用的密钥来进行**对称加密**，后续所有信息都通过该对称密钥进行加密解密，完成整个的HTTPS流程



### 对称加密和非对称加密的区别

**加密和解密的过程不同**：对称加密和解密过程使用同一个密钥；非对称加密中加密和解密采用公钥和私钥两个密钥，一般使用公钥进行加密，使用私钥进行解密。

**加密和解密的速度不同**：对称加密和解密速度较快，当数据量比较大时适合使用；非对称加密和解密时间较长，速度相对较慢，适合少量数据传输的场景。

**传输的安全性不同**：采用对称加密方式进行通信时，收发双方在数据传送前需要协定好密钥，而这个密钥还有可能被第三方窃听到的，一旦密钥泄漏，之后的通信就完全暴漏给攻击者了；非对称加密采用公钥加密和私钥解密的方式，其中私钥是基于不同的算法生成的随机数，公钥可以通过私钥通过一定的算法推导得出，并且私钥到公钥的推导过程是不可逆的，也就是说公钥无法反推导出私钥，即使攻击者窃听到传输的公钥，也无法正确解出数据，所以安全性较高。



### 客户端为什么信任第三方证书

1. **证书无法被篡改**，假如中间人拿到并篡改了证书原文，由于中间人没有私钥，所以无法得到此时加密后的签名，因此无法篡改签名，当客户端收到证书后解密后发现，原文与签名不一致，所以知道证书被篡改不可信，从而终止向服务器传输信息
2. **对比请求域名不同**，如果中间人拿到了服务端传输的证书，这时候中间人把CA证书替换成自己的证书，从而想拿到服务端的数据，这时客户端收到证书解析后发现与自己请求的服务器的域名不同，知道了自己证书被掉包，从而终止向服务端传输信息



### HTTP1.0/1.1/2.0/3.0

[谈谈HTTP1.0,HTTP1.1和HTTP2.0区别 - SegmentFault 思否](https://segmentfault.com/a/1190000016496448?utm_source=sf-similar-article)

[HTTP1.0 HTTP1.1 HTTP2.0 主要特性对比 - SegmentFault 思否](https://segmentfault.com/a/1190000013028798?utm_source=tag-newest)

Http: 服务器与本地浏览器之间的超文本传输协议


#####  1. HTTP1.0和HTTP 1.1的区别

​	**缓存处理（缓存头）：**HTTP1.0使用的是 expries 和 If-Modified-Since 来作为缓存判断的标准，HTTP 1.1则引入了ETag、If-None-Match等更多可供选择的**缓存头**来控制缓存策略。

​	**错误通知管理**：HTTP1.1添加了24个错误状态响应码，409表示请求的资源与资源的当前状态发生冲突，410表示服务器上的某个资源被永久删除

​	**长连接**：HTTP1.0每次请求都会新创建一个连接，结束后断开。而HTTP1.1引入了长连接和流水线处理，可以建立通过**connection：keep-Alive** 来建立长连接，允许在一次TCP连接中发送多个请求和响应，中间不会断开

​	**Host头处理**：HTTP1.0默认一个服务器都绑定唯一一个IP地址。HTTP1.1引入了HOST头域（使得多个虚拟站点可以共用一个ip地址）

​	**带宽优化及网络连接的使用**：HTTP1.0中存在带宽资源浪费现象，如只想请求对象的某一部分，结果却返回了整个对象。HTTP1.1引入了 range头域，可以允许只请求资源的一部分，即返回206


##### 2. HTTP1.1和HTTP2.0的区别

​	**多路复用**：HTTP2.0 通过在传输层和应用层之间引入了一个二进制分帧层来实现多路复用。多路复用即允许并行发送多个请求，如要向服务器请求css和js资源，可以同时发送两个请求。在发送请求时，会将所有的消息分割为帧并且对它们采用二进制编码，其中头部信息会保存到header frame里，请求体则保存在data frame里，header frame中保存着帧所属的流的id来让服务器识别到。**HTTP2.0**的多路复用可以使所有的数据流全都共用一个连接，解决了tcp慢启动的问题，大大提高了传输速度。

​	**服务器推送**：在服务器响应一个浏览器请求之后，可以无需浏览器明确要求，开始向浏览器推送资源

​	**头部压缩：**像cookie这些附着在头部上每次都发送给服务器且比较大的，会使得传输变慢，所以HTTP2.0使用了一种头部压缩方案，即通过浏览器和服务器共同维护一份静态字典、动态字典和静态哈夫曼表的哈夫曼编码来压缩，在每次 HTTP 传输时只需要传头字段在表中的索引即可，大大减小了重传次数和数据量。

##### 3. HTTP 3.0

**QUIC协议**

QUIC协议为快速UDP网络连接，其主要目的是解决采用传输层 TCP 协议存在的问题，同时满足传输层和应用层对多连接、低延迟等的需求。该协议融合了 TCP, TLS, HTTP/2 等协议的特性，并基于 UDP传输。该协议带来的主要提升有：

1. **低延迟连接**，由于基于UDP连接，所以不需要TCP三次握手过程，建立连接过程更快
2. **解决队头阻塞**，因为是基于UDP连接并且采用 了HTTP2.0的多路复用功能，所以说可以避免HTTP2.0存在的队头阻塞问题
3. **安全性**，QUIC的报文是经过加密和认证的，除了少量的报文，其它所有的 QUIC 报文头部都经过了认证，报文主体经过了加密。只要有攻击者篡改 QUIC 报文，接收端都能及时发现
4. **向前纠错机制**，每个包都携带了除本身数据包之外的其他数据包的数据，使其在丢包时减少重传次数，通过牺牲单个包所携带的有效数据大小来换来更少的重传次数，这在丢包数量较小的场景下能够带来一定程度的性能提升

**HTTP 3.0**是基于UDP和QUIC协议的协议，其底层使用UDP进行数据传输，上层依然使用HTTP2.0

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ef086415a1b455d98f8b4a74daff170~tplv-k3u1fbpfcp-watermark.image)

HTTP3.0的主要特点：

1. 基于UDP作为传输层进行通信

2. 在UDP之上的QUIC协议保证了连接的安全性，QUIC在建立连接的过程中就完成了TLS的加密

3. 建立连接快

4. 使用QPACK进行头部压缩，在HTTP2.0中HPACK要求传输过程有序，这会导致队头阻塞，HTTP3.0没有这个问题

5. 不和具体底层连接绑定，QUIC 为每个连接的两端分别分配了一个唯一 ID，上层连接只认这对逻辑 ID。只要ID不变就不会产生影响，网络切换或者断连时，只需要继续发送数据包即可完成连接的建立

   

### Keep-Alive 和非 Keep-Alive 区别

1. **区别**

![img](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/10194b7d0e304fd786bebda28fb69718~tplv-k3u1fbpfcp-watermark.image)

在**HTTP1.0**版本采用**短连接即非Keep-Alive**，每次发送HTTP请求都与服务器建立一个新的TCP连接，服务器完成请求处理后会立即断开TCP连接，下次请求时再建立，完成时再断连，然而创建和关闭连接的过程十分的消耗资源和时间，为了减少资源消耗，缩短响应时间就在**HTTP1.1**中采用了**Keep-Alive，长连接**，可以一次建立连接之后发送多次请求和响应，这样就减少了不断创建和断开的资源消耗。但是**Keep-Alive**也有一定的缺陷，比如当连接一直保持时，会导致系统资源被无效占用，所以可以通过设置**Keep-Alive timeout**参数来设置延时时间，当TCP连接在传送完最后一个HTTP响应，该连接就会保持**timeout**秒，之后就会断开这个连接

2. **应用场景**
   1. 长连接：多用于操作频繁，点对点的通讯，如即时通讯、网络游戏
   2. 短连接：电商网站如淘宝、亚马逊，需要同时处理大量的用户请求，如果采用长连接，会导致大量的服务端资源被无效占用，所以一般采用短连接



###  V8下的垃圾回收机制

V8的垃圾回收机制采用了分代回收机制，所以v8将内存分为了新生代和老生代

**新生代**：新生代中的对象一般存活时间比较短，使用Scavenge GC算法

​	新生代包含了两部分内存空间，分别是From和To。在这两个空间中，必定有一个空间在使用，另一个空闲。新创建的对象会先放到From内存空间中存储，如果From空间满了，这是垃圾回收就开始了，算法检查From空间中所有失活的对象并将他们清除，然后将剩余的存活对象复制到To空间中。当完成复制之后，From和To空间互换，GC结束。

**老生代**：老生代中的对象一般存活时间比较长，而且数量比较多。使用了两个算法，分别是标记清除算法和标记压缩算法。

​	两种情况下对象会出现在老生代中

​			如果对象经历过了一次Scavenge GC算法，那么对象就会来到老生代空间中

​			另一种就是如果To空间的对象超过了25%，为了不影响内存分配，会把对象转移到老生代空间

​	**标记清除算法**：

​			有几种情况下会使用标记清除算法：

​					当空间中的对象超过了限制

​					空间中的内存无法保证对象从新生代到老生代的移动

​					某一个空间没有分块时

​			标记清除算法具体流程：遍历所有对象，把活的对象都标记，在标记完成后，将所有没有标记的对象清除。但是如果标记内存过大时扫描标记时长过长，会导致页面的停顿，所以后来提出了并发标记，这种标记就能使标记的同时还能执行JS代码

​	**标记压缩算法**：

​			在标记清除完之后，内存会出现许多的碎片情况，当碎片超过一定的限制就启用自动压缩算法。

​			标记压缩算法具体流程：在压缩过程中，把所有的活的对象向一端移动，然后清除剩余不需要的内存。



### 内存泄露

内存泄露就是在某些情况下，**不再使用到的变量所占用内存没有及时释放**，导致程序运行中，内存越占越大，极端情况下可以导致系统崩溃，服务器宕机。

会造成内存泄露的操作：

	1. 意外的全局变量: 无法被回收
	2. 定时器：没有被正确关闭，导致定时器一直开着占用内存
	3. 事件监听：没有销毁
	4. `dom` 引用: `dom` 元素被删除时，内存中的引用未被正确清空
	5. 控制台`console.log`打印的东西
	6. 闭包：
	  	1. 第一种情况是我们由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。
	  	2. 第二种情况是我们设置了setInterval定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。
	  	3. 第三种情况是我们获取一个DOM元素的引用，而后面这个元素被删除，由于我们一直保留了对这个元素的引用，所以它也无法被回收。
	  	4. 第四种情况是不合理的使用闭包，从而导致某些变量一直被留在内存当中。



### 浏览器渲染的主要流程是什么？

​		1.浏览器将html代码进行深度优先遍历来生成DOM树

​		2.下载CSS文件，文件下载完成后进行渲染，形成对应的CSSOM树

​		3.将DOM树和CSSOM树合并构成渲染树

​		4.根据渲染树来布局，计算各个元素的几何信息

​		5.在屏幕中渲染像素，绘制节点。



### 从输入url地址到页面相应都发生了什么？

1. DNS解析url中的IP

​			1.首先查看缓存中是否缓存了该域名的ip

​			2.查看host文件中是否存在该域名的ip

​			3.正式开始DNS解析(看下面)

2. 三次握手，根据IP建立TCP连接

 	3. http发送请求
     1. 请求由应用层发送到传输层，TCP对发出的数据进行处理，如果数据量过大，TCP将数据切分成包，并给包标记序列号，加上TCP头部(源端口号、目标端口号)，总共大小不能超过1480字节
     2. TCP将包传给网络层进行处理，IP在TCP包头部加上IP头部(源IP地址、目标IP地址)，IP头部通常20字节，数据包的大小不得超过1500字节
     3. 数据包交给数据链路层进行处理，数据链路层将数据包封装成帧，加上源MAC地址和下一个路由器的MAC地址，添加帧首部标记和帧结束标记
     4. 最后交给物理层，物理层将数据包转换成电信号发出去

4. 服务器接受并处理请求，浏览器接收http响应

5. 收到数据后渲染页面，构建DOM树

6. 四次挥手，断开TCP连接



### DNS

DNS 域名系统，用于TCP/IP网络

##### DNS的作用

​	DNS主要是实现了主机名到ip地址转换，域名系统将域名和ip建立映射，使得我们可以更加便捷的访问互联网

##### DNS 域名解析原理

​	DNS域名系统采用了分布式的设计方案，是一种层次结构，如下展示了部分层次结构，从上到下分别是根域名服务器、顶级域名服务器、权威域名服务器，

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86c84543fb6c40149ec721b5f015247d~tplv-k3u1fbpfcp-watermark.image)

除此之外，还有一种更关键的DNS服务器，本地DNS服务器。本地DNS服务器虽然不属于层次结构，但是跟层次结构紧密相连。本地DNS服务器就是每个网络服务提供商（ISP）都会提供一个本地DNS服务器，当一个客户的主机跟ISP建立连接时，ISP会提供一个主机的IP地址，这个主机里有一个或者多个本地DNS服务器的IP地址，当客户的主机发送DNS请求时，该请求会发送到本地DNS服务器上，本地DNS服务器起代理作用，将请求转发到DNS服务器层次结构中。

**DNS解析原理**，假设主机 A（IP 地址为 abc.xyz.edu） 想知道主机 B 的 IP 地址 （def.mn.edu），

先从浏览器缓存中寻找，有没有DNS解析过的ip地址缓存，然后再在本地操作系统缓存中寻找，如果还没有则到路由器缓存，如果上面都没找到，则执行下图的过程：

首先，主机A发送DNS查询报文，查询报文中包含被转换的主机名def.mn.edu，然后本地DNS服务器接受到了该报文，然后将该报文转发到根DNS服务器上，根 DNS 服务器注意到查询的 IP 地址前缀为 edu 后向本地服务器返回了负责edu的顶级域名处理器的ip地址列表，然后本地DNS服务器向IP列表中的顶级域名服务器发送查询报文，该顶级域名服务器发现了mn.edu的前缀，然后顶级域名服务器就用权威DNS服务器的IP进行响应，然后本地服务器接着向这些权威DNS服务器发送查询请求，通常情况下，顶级域名服务器并不总是知道每台主机的权威 DNS 服务器的 IP 地址，而只知道中间的某个服务器，该中间 DNS 服务器依次能找到用于相应主机的 IP 地址，我们假设中间经历了权威服务器 ① 和 ②，最后找到了负责 def.mn.edu 的权威 DNS 服务器 ③，之后，本地 DNS 服务器直接向该服务器发送查询报文从而获得主机 B 的IP 地址。



![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f6dba7c39fd1418aa3f8b007771b0953~tplv-k3u1fbpfcp-watermark.image)

##### 域名解析查询的两种方式

**递归查询**：如果主机询问的ip地址本地DNS服务器不知道，那么本地DNS服务器就以客户端DNS的身份继续向根域名服务器发送查询请求，而不是让客户端主机查询（相当于代理）

**迭代查询**：当本地DNS服务器向根DNS服务器发送查询请求时，根DNS服务器要么返回IP地址，要么告诉本地DNS服务器接下来要发送查询报文的服务器列表，使得本地DNS服务器能继续接下来的查询（如步骤2-9）



### Socket( )套接字

1. 套接字是什么

    套接字就是在网络中不同主机的应用进程之间进行双向通信的**端点**，网络进程通信的一端就是一个套接字，例如**TCP的套接字就是ip地址+端口号**

2. 套接字的类型
   1. 流套接字：**流套接字面向TCP传输协议**，主要用于提供面向无连接的、可靠的TCP数据传输服务，由于TCP协议的特点，使用流套接字通信时要**保证可靠性**，必须要保证数据无差错、无重复传送、并按顺序接收
   2. 数据报套接字：**数据报套接字主要面向的是UDP传输协议**，主要用于提供面向无连接的UDP传输服务，所以数据报套接字**无法保证数据传输的可靠性**，而且不要求接收过程有序。通信两端不需要建立长时间的连接关系，当 UDP 客户端发送一个数据给服务器后，其可以通过同一个套接字给另一个服务器发送数据
   3. 原始套接字：由于流套接字和数据报套接字只能读取 TCP 和 UDP 协议的数据，当需要传送非传输层数据包（例如 Ping 命令时用的 ICMP 协议数据包）或者遇到操作系统无法处理的数据包时，此时就需要建立原始套接字来发送



###  状态码

##### 2×× 	2开头代表成功

​	200 请求成功

​	201 用户修改数据成功

​	202 一个请求成功被后台接收

​	204 用户删除数据成功

##### 3××	

​	301 永久重定向

​	302 临时转移

​	304 读取缓存（表示浏览器有缓存且服务端没有更新，不再向服务端请求资源，返回304）与协商缓存有关

##### 4×× 	4开头跟客户端错误有关

​	400 数据或格式错误

​	401 用户无权限

​	403 用户得到授权 但是访问被禁止

​	404 文件路径错误，找不到文件

​	409 表示请求的资源与资源的当前状态发生冲突

​	410 表示服务器上的某个资源被永久删除

##### 5××	5开头跟服务器错误有关

​	500 服务器发生错误

​	503 服务器目前无法使用（服务器超载或者是暂停使用）



### 缓存

缓存对于前端优化来说非常重要，配置好的缓存策略可以降低资源的重复加载提高网页的整体加载速度。

缓存一般分为两种类型：强缓存和协商缓存

##### **强缓存**

指的是缓存期间不需要请求，状态码为200，通常可以使用两种响应头实现：expires和Cathe-Control

expires 有一个缺点就是如果在本地修改了时间，可能会造成缓存失效

Cahthe-Control优先级高于expries

##### **协商缓存**

指的是如果缓存过期了，可以使用协商缓存来处理。协商缓存需要请求，状态码为304，协商缓存需要服务端和客户端共同实现。

​	协商缓存有两种实现方式：

​	**if-modified-since和last-Modified** 。last-Modified 表示本地文件最后的修改时间，if-modified-since将last-Modified发送给服务器，询问在该时间之后资源是否有更新，如果有就把资源发送回来。但是如果本地打开了缓存文件，last-Modified的值会被修改。

​	**ETag和if-none-match**，ETag类似于文件指纹。if-none-match将Etag发送给服务器进行比对，如果有变动则把新的资源返回回来。

##### 缓存策略

对于大部分的场景都可以使用强缓存配合协商缓存解决，但是在一些特殊的地方可能需要选择特殊的缓存策略

- 对于某些不需要缓存的资源，可以使用 `Cache-control: no-store` ，表示该资源不需要缓存
- 对于频繁变动的资源，可以使用 `Cache-Control: no-cache` 并配合 `ETag` 使用，表示该资源已被缓存，但是每次都会发送请求询问资源是否更新
- 对于代码文件来说，通常使用 `Cache-Control: max-age=31536000` （单位为秒 s，31536000秒即为365天 一年）并配合策略缓存使用，然后对文件进行指纹处理，一旦文件名变动就会立刻下载新的文件



### TCP和UDP的区别

[一文搞懂TCP与UDP的区别 - Fundebug - 博客园 (cnblogs.com)](https://www.cnblogs.com/fundebug/p/differences-of-tcp-and-udp.html)

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e26ed2859b241b3be1eb930ec32f356~tplv-k3u1fbpfcp-watermark.image" alt="img" style="zoom:67%;" />



### TCP的三次握手和四次挥手

#### TCP的三次握手

第一次：客户端发送一个SYN给服务器，请求建立数据连接

第二次：服务器收到SYN，并自己处理一个SYN，叫SYN+ACK确认包发送给客户端

第三次：客户端再次发送一个ACK给服务器，服务器验证ACK没有问题，则建立起连接

<img src="/Users/wangquan/Library/Application Support/typora-user-images/image-20210608160054633.png" alt="image-20210608160054633" style="zoom:75%;" />



##### 为什么不是两次握手？

​	**防止失效的客户端请求连接被服务器接受而产生错误。**例如：如果网络堵塞，客户端发送了请求给服务器，但是迟迟得不到服务器的确认，客户端这边等待超时之后就再发送一个连接给服务器，这时候服务器收到了，由于只有两次握手，便建立了连接。但是在之后收到了之前的失效连接请求，这时服务器就会一直等待或者主动发送报文，但是客户端已经建立连接状态closed了，就会造成服务器资源的浪费。

##### 为什么不是四次握手？

​	因为没有必要将ACK+SYN拆开发送

##### 第二次握手传回了ACK，为什么还要传回SYN？

​	传回ACK是为了确认从客户端和服务端之间的通信是正常的，传回SYN是为了建立并确认从服务端到客户端的通信

##### 第三次没有收到ACK包会怎样？

​	如果服务端没有收到ACK的包，那么服务端会重新发送SYN+ACK给客户端（默认重发五次，之后自动关闭连接），客户端收到后重新发送ACK给服务端

##### 如果已经建立了连接，但客户端出现了故障怎么办？

​	服务器每接受到一次客户端的请求都会复位一个计时器，这个计时器一般为2小时，如果超过2小时服务器没收到客户端的数据就会发送一个探测报文，以后每隔75秒发送一次，一共发送10次之后还没响应，则服务器就会认为客户端出现故障，接着关闭连接

#### TCP的四次挥手

第一次：客户端发送FIN报文，通知服务器数据已经传输完毕，想要断开连接

第二次：服务器接收到之后，发送ACK给客户端，表示服务器收到了客户端数据的想要断开连接的请求，但是数据还没传输完成

第三次：服务器数据传输完毕后，服务器发送FIN给客户端，表示数据已经传输完毕

第四次：客户端发送ACK给服务端，为了告诉服务端我收到了你数据传输完成的消息，然后进入TIME_WAIT状态，随后服务端和客户端关闭连接

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d9f6dd8c3c14e4fb2f3c6f303df5e8e~tplv-k3u1fbpfcp-watermark.image)

##### 为什么建立连接是三次握手，而断开连接是四次挥手呢?

​	在建立连接时，服务器是在LISTEN状态下，收到客户端的SYN后，将SYN和ACK放在一个报文里发送给客户端。但是在断开连接时，服务器突然接到客户端的FIN报文，说数据已经传输完成，但是此时服务器可能还在接收数据或者正在传输数据，所以先返回一个ACK来跟客户端确认收到了客户端的请求，等待数据处理完成后，服务器再发送FIN来表示同意关闭连接，所以ACK和FIN分了两次发送，最后多了一次



### TCP如何保证可靠性

1. **数据分段**：应用数据被TCP分割成TCP觉得合适的大小进行发送
2. **序列号和确认应答**：TCP发送的每一个包都带有编号，在发送之后，每次接收方接收到数据都会返回一个确认应答即ACK，每个ACK都带有一个序列号，告诉发送方自己接收到了哪些数据并从哪里接着发送数据。除此之外，接收方会将数据根据序列号进行排序发送给应用层，并丢弃重复数据
3. **流量控制**：发送方和接受方在连接时都有一个固定大小的缓冲区，发送方发送的的数据不能超过接收方缓冲区的大小，当接收方来不及处理数据，就会告诉发送方降低传输速率，防止产生丢包。TCP通过滑动窗口协议来支持流量控制协议
4. **拥塞控制**：当网络节点发生拥塞时，减少数据发送。在实际的网络通信系统中，除了发送方和接收方外，还有路由器，交换机等复杂的网络传输线路，此时就需要拥塞控制。拥塞控制是作用于网络的，它是防止过多的数据注入到网络中，避免出现网络负载过大的情况。常用的解决方法有：慢开始和拥塞避免、快重传和快恢复。
5. **超时重传**：当 TCP 发出一个报文段后，它启动一个定时器，等待目的端确认收到这个报文段，如果超过某个时间还没有收到确认，将重新发送这个报文段



### UDP为什么是不可靠的？

UDP 只有一个socket接收缓冲区，而没有socket发送缓冲区，所以只要一有数据就发，不管对方的缓冲区满没满，当UDP发送的数据超过接收方缓冲区大小时，数据就会发生丢失。而且UDP传输也没有流量控制、拥塞控制和重传机制，所以说UDP传输是不可靠的



### bind 和 connect 对于 UDP 的作用是什么

和 TCP 建立连接时采用三次握手不同，UDP 中调用 connect 只是把对端的 IP 和 端口号记录下来，并且 UDP 可多次调用 connect 来指定一个新的 IP 和端口号，或者断开旧的 IP 和端口号（通过设置 connect 函数的第二个参数）。和普通的 UDP 相**比，调用 connect 的 UDP 会提升效率，并且在高并发服务中会增加系统稳定性**。

当 UDP 的发送端调用 bind 函数时，就会将这个套接字指定一个端口，若不调用 bind 函数，系统内核会随机分配一个端口给该套接字。当手动绑定时，能够**避免内核来执行这一操作**，从而在一定程度上**提高性能。**



### TCP滑动窗口协议

[TCP面试题之滑动窗口原理_weixin_30446197的博客-CSDN博客](https://blog.csdn.net/weixin_30446197/article/details/99809939?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_baidulandingword-0&spm=1001.2101.3001.4242)

**窗口滑动协议是TCP使用的一种流量控制方法**，该协议允许发送方在停止并等待接收确认报文前可以连续发送多个分组。由于发送方不必每发一个分组就停下来等待确认，因此该协议可以加速数据的传输。只有在接收窗口向前滑动时（与此同时也发送了确认），发送窗口才有可能向前滑动。收发两端的窗口按照以上规律不断地向前滑动，因此这种协议又称为滑动窗口协议

**滑动窗口实际上就是 发送方和服务器接收端都有一个窗口，发送方的为发送窗口，接收端为接受窗口，每次接收端发送ACK给发送方都带有自己的接受窗口大小的信息，发送方在接收到服务端的ACK后，知道了服务端接收窗口大小，调整发送方窗口大小，同时滑动窗口（接收到ACK之后就滑动窗口，将下面的数据继续发送），当接收方滑动窗口满了，那么接收方返回给发送方的ACK包中的大小则为0，当不为0时，发送方再继续发送数据**

**滑动窗口超时重传机制**：在发送方发送数据之后可能会产生丢包现象，这时候服务端会不断发送ACK，发送方发现服务端发送的ACK还跟之前的一样，就说明发生了丢包现象，转而再把之前的包重新发送一次



### TCP 超时重传的原理

发送方在发送一次数据后就开启一个定时器，在一定时间内如果没有得到发送数据包的 ACK 报文，那么就重新发送数据，在达到一定次数还没有成功的话就放弃重传并发送一个复位信号。其中超时时间的计算是超时的核心，而定时时间的确定往往需要进行适当的权衡，因为当定时时间过长会造成网络利用率不高，定时太短会造成多次重传，使得网络阻塞。在 TCP 连接过程中，会参考当前的网络状况从而找到一个合适的超时时间。



### TCP 拥塞控制采用的四种算法

1. ##### 慢启动

   当发送方发送数据时，由于预先不知道网络的负荷情况，所以发送方在一开始时会先发送一小段数据来试探一下网络状况，即由小到大增大拥塞窗口(cwnd)，慢开始就是只一开始cwnd一开始为1，然后收到确认后增大到2，接着每收到一次应答cwnd*2，但是为了防止拥塞窗口过大引起网络阻塞，另外设置了一个慢开始的阈值ssthresh：

   ​	当cwnd < ssthresh，使用上述的慢开始算法

   ​	当cwnd > ssthresh，停止使用慢开始，转而使用拥塞避免算法

   ​	当cwnd = ssthresh，两者皆可

2. ##### 拥塞避免

   **拥塞避免**就是控制cwnd的扩大，发送方每经过一次发送的往返时间，cwnd+1而不是*2，这样就cwnd拥塞窗口线性增加，防止很快就进入到网络拥塞状态

   **当网络拥塞发生时**，把新的ssthresh设置为拥塞发生时ssthresh的一半，同时把cwnd重置为1，然后再重复两种算法（慢启动和拥塞避免），这时一瞬间会将网络中的数据量大量降低

3. ##### 快重传

   快重传算法要求接收方每收到一个失序的报文就立即发送重复确认，而不要等到自己发送数据时才捎带进行确认，由于TCP采用的是累计确认机制，即当接收端收到比期望序号大的报文段时，便会重复发送最近一次确认的报文段的确认信号，假定发送方发送了 Msg 1 ~ Msg 4 这 4 个报文，已知接收方收到了 Msg 1，Msg 3 和 Msg 4 报文，此时因为接收到收到了失序的数据包，当发现Msg2丢失时，便会直接返回Msg1 的确认，于是在接收方收到 Msg 4 报文的时候，向发送方发送的仍然是 Msg 1 的重复确认。这样，发送方就收到了 3 次 Msg 1 的重复确认，于是立即重传对方未收到的 Msg 报文。由于发送方尽早重传未被确认的报文段，因此，快重传算法可以提高网络的吞吐量。

4. ##### 快恢复

   1. 由于收到了三个相同的重复确认，**cwnd乘法减小，让ssthresh减半**
   2. 由于发送方可能认为网络没有发生拥塞，所以不**会把cwnd窗口设为1，而是设置为 ssthresh 减半后的值**，然后启用拥塞避免算法，线性增大cwnd



### TCP 粘包问题

1. **TCP拆包**：当发送方写入的数据大于套接字缓冲区的大小，此时将发生拆包

   ​				  进行 MSS （最大报文长度）大小的 TCP 分段，当 TCP 报文的数据部分大于 MSS 的时候将发生拆包。

2. **TCP粘包**：发送方写入的数据小于套接字缓冲区大小，由于 TCP 默认使用 Nagle 算法，只有当收到一个确认后，才将分组发送给对         端，当发送方收集了多个较小的分组，就会一起发送给对端，这将会发生粘包

   ​				   发送方发送的数据太快，接收方处理数据的速度赶不上发送端的速度，将发生粘包

3. **解决方法**：
   
   1. 在消息的头部添加消息长度字段，服务端获取消息头的时候解析消息长度，然后向后读取相应长度的内容
   2.  固定消息数据的长度，服务端每次读取既定长度的内容作为一条完整消息，当消息不够长时，空位补上固定字符。但是该方法会浪费网络资源
   3.  设置消息边界，也可以理解为分隔符，服务端从数据流中按消息边界分离出消息内容，一般使用换行符
   
4. **什么时候需要处理粘包问题**

​	当接收端接收到多个分组，并且这些包之间毫无关系时，需要处理粘包，当多个分组属于同一数据的不同部分时，不需要处理粘包



###  get和post的区别

1. get一般用来请求数据，post一般用来发送数据

2. get 方式需要使用 Request.QueryString 来取得变量的值，而 post 方式通过 Request.Form 来获取

3. get安全性较低，例如在用户登录时，通过get提交的数据get会将用户名密码会直接出现在url中，post安全性较高

4. get请求如果需要传递参数，默认会将参数拼接到url后发送给服务器，post请求会将参数放入请求体中发送给服务器

5. get请求发送时会有大小限制，浏览器的地址栏有大小限制，而post将请求参数放入到了请求体中，没有大小限制

6. get请求默认会走缓存，post请求不走缓存

7. get产生一个TCP数据包, post产生两个TCP数据包（get会将header和data合并发送，而post会先发送header再发送data）



### Cookie  Session WebStorage  indexDB

[cookie和session的详解与区别 - 测试开发喵 - 博客园 (cnblogs.com)](https://www.cnblogs.com/l199616j/p/11195667.html)

##### 1. cookie

cookie实际上就是一个服务器给客户端颁发的通行证，由于http是无状态连接，在每次断连之后再次连接会无法识别用户，所以服务器给客户端发送一个唯一的值cookie用来用户认证。当服务器发送响应时，会在响应头中设置**set-cookie**字段，用来存储客户端的状态信息，然后客户端解析出响应头中的字段信息，根据生命周期来设置cookie，这样的话每次客户端发送请求都会携带cookie信息来进行状态保持，**基于 Cookie 的会话保持与基于 Session 实现的会话保持最主要的区别是前者完全将会话状态信息存储在浏览器 Cookie 中**

**优点：**服务器不用保存状态信息，减轻服务器的存储压力

**缺点：**该方式不够安全，因为状态信息保存在客户端，这意味着会话过程中不能传递机密信息，而且客户端每次发送请求都会携带额外的cookie，会占用带宽

**cookie的属性**

**name**：该Cookie的名称。Cookie一旦创建，名称便不可更改

**value**：该Cookie的值。如果值为Unicode字符，需要为字符编码。如果值为二进制数据，则需要使用BASE64编码，如果用于保存用户登录态，应该将该值加密，不能使用明文的用户标识

**maxAge**：表示cookie失效的时间，正值表示在多长时间之后失效，如果为负值则表示关闭浏览器则会失效，如果为0则表示删除cookie，默认值为-1

**secure**：Boolean值，表示是否仅使用于安全协议传输，如HTTPS、SSL等，默认值为false

**domain**：可以访问该Cookie的域名。如果设置为“.google.com”，则所有以“google.com”结尾的域名都可以访问该Cookie。注意第一个字符必须为“.”

**same-site**：Boolean，规定浏览器只能在同一域名下携带cookie

**http-only**：不能通过JS访问cookie，减少XSS攻击

**cookie的应用场景**

1. 判断用户是否登陆过网站，保存用户名密码，下次实现自动登录(或者记住密码)，如果删除cookie，则每次登录必须重新填写登录的相关信息

2. 保存上次登录的时间

3. 保存上次查看的页面

4. 浏览计数

##### 2. Session

Session是服务器端用来认证用户状态的，相当于后端的cookie，如果说cookie是服务器给用户颁发的通行证，那么Session就是用户的档案，session要确定客户的身份，所以每次服务器会给客户端发送一个SESSION的cookie，当中携带session id，Session依据该Cookie来识别是否为同一用户。

 Session在用户第一次访问服务器的时候自动创建，后续只要用户再次访问，服务器就会更新session的最后更新时间，并维护session

由于为了获得更高的存取速度，所以**服务器把Session保存到内存中**（实际上session 可以放在 文件、数据库、或内存中都可以），每个用户都会有一个独立的Session，当大量用户访问时，会导致内存溢出，所以说，为了防止内存溢出，服务器会把长时间没有活跃的session从内存中删除，这个时间就是session超时时间，如果超过了超时时间，服务器将会把session从内存中删除，**超时时间属性为maxInactiveInterval**，可以通过设置setMaxInactiveInterval( )修改

当浏览器禁止cookie时，没办法返回session id，session无法确立身份，这时候可以通过**重写url**，将session id添加到url上发送给服务器，**HttpServletResponse类提供了encodeURL(Stringurl)实现URL地址重写**，该方法会自动判断客户端是否支持Cookie。如果客户端支持Cookie，会将URL原封不动地输出来。如果客户端不支持Cookie，则会将用户Session的id重写到URL中。

**优点：**安全性较高，session保存在服务端

**缺点：**由于大型网站一般采用分布式的服务器，浏览器发送请求一般要经过负载均衡器才能到达具体的后台服务器，如果浏览器发送两次HTTP请求到达了不同的服务器，那么基于session的会话保持就不能持续了 

 **解决方法**：可以利用中间件Redis，将Session信息保存在Redis中，使得每个服务器都可以访问到之前的状态信息

**session的应用场景**

1. 网上商城购物车
2. 保存用户的登录信息
3. 将某些数据放入session中，供同一个用户的不同页面使用
4. 防止用户非法登录

##### 3. cookie和session的区别

1. 数据存放位置不同：cookie数据存放在客户的浏览器上，session数据存储在服务器端上

2. 安全程度不同：cookie数据不是很安全，别人可以分析存放在本地的cookie并进行cookie欺骗，而且存在跨域问题，session相对比较安全，因为session在服务器上都是独立存放，服务器不存在跨域问题，所以互不影响

3. 性能使用程度不同：session会在一定时间内保存在服务器上，当用户访问量增大时，session会比较多的占用服务器的性能，所以如果是考虑到减轻服务器压力上的性能优化，用cookie
4. 数据存储大小不同：单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie，而session则存储于服务端，浏览器对其没有限制
5. 会话机制不同：session的会话机制是一种服务器端的会话机制，采用类似于哈希表的结构将信息保存，而cookie的会话机制则是，cookie是服务器端保存在本地的一小块文本，并随每次请求发送到同一服务器上，服务器端使用http标头将cookie发送给客户端，浏览器将cookie信息进行解析保存在本地文件，该文件将自动把来自同一个服务器的任何请求都绑定到这些cookie上

##### 4. WebStorage

[cookies、sessionStorage和localStorage解释及区别 - pengc - 博客园 (cnblogs.com)](https://www.cnblogs.com/pengc/p/8714475.html)

WebStorage是html5提出的一种克服cookie存储缺陷的一种存储策略。Webstorage分为localStorage（本地存储）和sessionStorage（会话存储），WebStorage不会随着HTTP header发送到服务器端，所以安全性相对于cookie来说比较高一些，不会担心截获，但是仍然存在伪造问题

**sessionStorage**：将数据保存在session对象中，指的是**每次会话期间**，sessionStorge会保存需要保存的数据

**localStorage**：将数据保存在客户端本地的硬件设备中，即使浏览器被关闭了，该数据仍然存在，下次打开浏览器访问网站时仍然可以继续使用

![image-20210609210731437](/Users/wangquan/Library/Application Support/typora-user-images/image-20210609210731437.png)

**应用场景**：localStoragese：常用于长期登录（+判断用户是否已登录），适合长期保存在本地的数据。sessionStorage：敏感账号一次性登录



### HTTP报文结构

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/36ad4ec349134a269d47a4236eb5c456~tplv-k3u1fbpfcp-watermark.image)



​	

### 同源策略 跨域方案

[同源策略及其解决方案 | Sillywa's Blog](https://sillywa.com/2018/12/06/同源策略/)

**同源策略：**目的是保证信息安全，防止恶意网站窃取数据，同源必须满足 **协议相同、域名相同、端口号相同**

如果是非同源的，那么**cookie、localStorage和IndexDB将无法读取**，**DOM无法获取**、**AJAX请求无法发送**

**跨域方法：**

##### 1. Window.postMessage()

​	Window.postMessage()方法是HTML5引入的一种解决窗口通讯问题的api，父子窗口可以通过监听message事件来监听对方消息，事件event有三个属性：

​	event.source 发送消息的窗口

​	event.origin 消息发送的网址

​	event.data  消息内容

```javascript
window.addEventListener('message', receiveMessage);
function receiveMessage(event) {
  event.source.postMessage('Nice to see you!', '*'); //子窗口通过event.source属性引用父窗口，然后发送消息
}
```

##### **2. JSONP**

​	JSONP就是利用script标签的可以跨域的特性，动态插入**script**标签，向服务器请求**json**数据，返回的数据将在回调函数里获得

**实现一个jsonp**

```javascript
function addScriptTag(src) {
  var script = document.createElement('script');
  script.setAttribute("type","text/javascript");
  script.src = src;
  document.body.appendChild(script);
}
// 定义回调函数
function foo(data) {
  console.log('Your public IP address is: ' + data.ip);
};

window.onload = function () {
  addScriptTag('http://example.com/ip?callback=foo');
}
```

**封装一个jsonp**

```javascript
// 封装一个 jsonp
function jsonp(url, params={}) {
    return new Promise((resolve, reject) => {
        window.__fn__ = data => resolve(data)
 
        // 获取参数
        let paramStr = Object.entries(params).map(item => `${item[0]}=${item[1]}`).join("&")
 
        // 动态添加 script 标签
        let script = document.createElement("script")
 
        script.scr = paramStr ? `${url}?callback=__fn__&${paramStr}` : `${url}?callback=__fn__`
 
        script.onerror= () => reject("error")
        document.body.appendChild(script)
        document.body.removeChild(script)
    })
}


```

#####  3. CORS

[跨域资源共享 CORS 详解 - 阮一峰的网络日志 (ruanyifeng.com)](http://www.ruanyifeng.com/blog/2016/04/cors.html)

CORS也是一种解决跨域问题的方案，CORS相比JSONP更加强大，JSONP只能发送GET请求，CORS可以发送任何请求。CORS的过程：

1. 首先CORS会判断请求是简单请求还是非简单请求，简单请求就是Head、Get、Post这些请求，如果是简单请求，则浏览器发送时头部会带一个origin字段，origin字段来说明请求来自哪个源，服务器根据这个值来表示是否同意，如果同意则服务器会返回一个**Access-Control-Allow-Origin**字段，如果不同意则没有这个字段，抛出错误
2. 如果是非简单请求，非简单请求就是例如**Put、Deleate**这种，非简单请求会在正式通信之前先进行预检，预检请求为**OPTIONS**，通常表示询问，浏览器带着自己的origin询问是否在服务器允许的范围内，如果允许则返回**Access-Control-Allow-Origin**字段，如果不允许则不返回这个字段。在预检完之后，接下来就发送正式的XMLHttpRequest请求（跟简单请求过程相同）

##### 4. WebSocket

Websocket不同于http，是一种双向通讯，客户端向服务器端发送数据，服务器端也能向客户端发送数据

WebSocket的原理主要就是利用了WebSocket使用**ws:\//（非加密）**和**wss:\//（加密**）作为协议前缀，这个协议前缀不被同源策略限制，所以可把url写入，当成功建立连接时，则可以发送数据

```javascript
var scoket = new WebScoket("ws://www.example.com/server.php")
scoket.send('hello word')
```

WebSocket只能发送纯文本数据，所以当发送的数据复杂时，先转换为JSON字符串再发送

```javascript
var message = {
    name: 'sillywa'
}
scoket.send(JSON.stringify(message))
```

当服务器端发送来消息时，可以使用message来进行捕获

```javascript
scoket.onmessage = function(event) {
    console.log(event.data)
}
```



### Service Worker

`Service workers` 本质上充当Web应用程序与浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理。它们旨在能够创建有效的离线体验，拦截网络请求并基于网络是否可用以及更新的资源是否驻留在服务器上来采取适当的动作。他们还允许访问推送通知和后台同步API，**目前该技术通常用来做缓存文件，提高首屏速度**

**浏览器对 ServiceWorker 做了很多限制**

- 在 `ServiceWorker` 中无法直接访问 `DOM`，但可以通过 `postMessage` 接口发送的消息来与其控制的页面进行通信
- `ServiceWorker` 只能在本地环境下或 `HTTPS` 网站中使用
- `ServiceWorker` 有作用域的限制，一个 `ServiceWorker` 脚本只能作用于当前路径及其子路径



### 浏览器进程及重要的线程

[浅谈浏览器多进程与JS线程 - SegmentFault 思否](https://segmentfault.com/a/1190000013083967)

##### 1. 浏览器的进程

1. **浏览器主进程**：负责协调和控制浏览器各个页面
2. **插件进程**：浏览器安装的插件，每运行一个插件就创建一个进程
3. **GPU进程**：负责渲染UI
4. **浏览器渲染进程(浏览器内核)**：主要负责执行JS代码、页面渲染、事件处理等
5. **网络进程**。主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立出来，成为一个单独的进程

##### 2. 浏览器渲染进程(浏览器内核)

​	浏览器渲染进程就是常说的浏览器内核，可以负责处理JS代码、事件循环、页面渲染等任务，该进程下包含多个线程有：

<img src="https://segmentfault.com/img/bV23V5?w=287&h=577/view" alt="preview" style="zoom:80%;" />

1. 图形用户界面 **GUI 渲染线程**

   可以对浏览器页面渲染，解析HTML，构建DOM树、render树、布局、绘制，这些过程都靠GUI渲染线程来执行，还有当页面引发回流时，也会调用GUI渲染线程

2. **JS引擎线程**

   负责执行JS代码，由于是单线程，所以只能排队一个一个执行

3. **事件触发线程**

   事件循环就是在这个线程处理的。当JS引擎执行鼠标点击、setTimeout、Ajax请求这些代码块时，会将对应任务放到该线程中。当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待 JS 引擎的处理

4. **定时器触发线程**

   setInterval 和 setTimeout 所在线程，定时器计时并不是由 JS 引擎计时的，因为 JS 引擎是单线程的，如果 JS 引擎处于堵塞状态，那么会影响到计时的准确性，当计时完成被触发，事件会被添加到事件队列，等待 JS 引擎空闲了执行

5. **异步HTTP请求线程**

   当XMLHttpRequest连接成功后建立的一个线程，线程如果检测到了请求状态的变更，如果有回调函数，则把回调函数添加到事件队列，等待JS引擎空闲开始执行

##### 3. 为什么JS引擎是单线程的 

​	因为如果JS引擎设计成多线程的，那么就会存在两个线程同时操作一个DOM节点，DOM就成为了一种临界资源，就需要实现访问互斥才能解决，反而使得JS引擎变得更加复杂

##### 4. 为什么GUI渲染进程和JS引擎线程互斥

​	因为如果GUI渲染线程和JS引擎线程不互斥，JS和页面渲染就会同时进行，这时候如果JS在修改了一个DOM节点的同时，GUI页面也对DOM进行了渲染，那么就会出现JS引擎操作DOM后的结果不一致，造成页面混乱。所以GUI渲染进程和JS引擎线程需要互斥，在JS代码执行时，阻塞页面渲染

##### 5. JS 引擎线程与事件触发线程、定时器触发线程、异步 HTTP 请求线程

事件触发线程、定时器触发线程、异步 HTTP 请求线程有一个共同特点就是都是使用回调函数的形式，当满足条件之后，回调函数会被浏览器当做一个事件，加入到事件队列中，等待JS引擎空闲执行。JS引擎对事件队列（宏任务）和JS引擎内的任务（微任务）有先后执行顺序，先执行事件队列中的任务，执行完后会检测JS引擎内部的任务(微任务)如果有就执行



### 进程和线程

**进程**：进程是程序的一次执行过程，是一个动态概念，是程序在执行过程中分配和管理资源的基本单位，每一个进程都有一个自己的地址空间，至少有 5 种基本状态，它们是：初始态，执行态，等待状态，就绪状态，终止状态

**线程**：线程是CPU调度和分派的基本单位，它可与同属一个进程的其他的线程共享进程所拥有的全部资源

**联系**：线程是进程的一部分，一个线程只能属于一个进程，而一个进程可以有多个线程，但至少有一个线程

**区别**：

​	**根本区别**：进程是操作系统资源分配的基本单位，而线程是任务调度和执行的基本单位

​	**在开销方面**：每个进程都有独立的代码和数据空间（程序上下文），程序之间的切换会有较大的开销；线程可以看做轻量级的进程，同一类线程共享代码和数据空间，每个线程都有自己独立的运行栈和程序计数器（PC），线程之间切换的开销小

​	**所处环境**：在操作系统中能同时运行多个进程（程序）；而在同一个进程（程序）中有多个线程同时执行（通过CPU调度，在每个时间片中只有一个线程执行）

​	**内存分配方面**：系统在运行的时候会为每个进程分配不同的内存空间；而对线程而言，除了CPU外，系统不会为线程分配内存（线程所使用的资源来自其所属进程的资源），线程组之间只能共享资源

​	**包含关系**：没有线程的进程可以看做是单线程的，如果一个进程内有多个线程，则执行过程不是一条线的，而是多条线（线程）共同完成的；线程是进程的一部分，所以线程也被称为轻权进程或者轻量级进程



### 前端性能优化

1. 资源压缩与合并：减小文件体积，提升加载速度

2. 减少Http请求，利用**浏览器缓存**提升二次访问速度

3. 图片懒加载、懒执行

   ​	**懒加载：**懒加载就是优先加载可视区域内的资源，提高首屏加载速度，其他内容等进入可视区域之后再加载如果要对一张图片实现懒加载的原理：img的属性src进行控制，在img标签没加进入可视区域之前，不给src赋值，当img一旦进入可视区域，则给src赋值，此时需要三个api

   ```javascript
   document.documentElement.clientHeight  //表示可视区域的高度
   document.documentElement.scroollTop		//滚动条滚动的距离
   document.documentElement.querySelectorAll("img[src]") 获取带有src属性的img元素
   ```

   利用这三个api，当浏览器滚动条超出可视区域的高度，则给img的src进行动态赋值

   ​	**懒执行：**懒执行实际上就是将一些逻辑延迟到使用时再计算，懒执行需要唤醒，一般可以通过定时器(自动唤醒)或事件的调用(手动唤醒)来唤醒(onClick、hover)

4. 预渲染和预加载

   预渲染：把下载的资源在后台预先渲染

   ```javascript
   <link rel = 'prerender' href = 'url'
   ```

   预加载：预先加载将要用到的资源(不同的是prefetch可能会在浏览器忙的时候被忽略，而preload则一定会被加载)

   ```javascript
   <link rel="preload/prefetch" as="script" href="super-important.js">
   ```

5. DNS预解析

   ```javascript
   <link rel="dns-prefetch" href="//blog.poetries.top">
   ```

6. preconnect 让浏览器在一个 HTTP 请求正式发给服务器前预先执行一些操作，这包括`DNS 解析、TLS 协商、TCP 握手`，通过消除往返延迟来为用户节省时间

   ```
   <link rel="preconnect" href="//blog.poetries.top">
   ```

7. 将JS文件放到尾部，CSS文件放到头部，因为JS代码会阻塞浏览器渲染页面，所以放到尾部，CSS文件放头部是因为想让用户可以尽快看到页面效果，如果想要把JS代码放到头部，可以在script标签上添加defer属性，实现异步加载，延迟执行

8. 减少回流和重绘

9. 使用CDN

   CDN，Content Delivery Network，是内容分发网络，CDN就是通过将静态资源来缓存到离用户很近的相同运营商的CDN节点上，不但能提升用户的访问速度，还能节省服务器的带宽损耗

   CDN的原理就是，CDN服务商会在全国各个网站上部署计算节点，CDN加速将网站的内容缓存到网络的边缘，不同地区的用户就会访问到离自己最近的相同线路上的CDN节点。当请求到达CDN节点之后，节点会先看自己的的缓存内容是否还有效，如果有效，则立即把缓存的内容响应给用户，如果无效，它就会根据服务器配置去内容源服务器获取最先的资源响应给用户，并将内容缓存下来以便响应后续访问的用户

   所以，一个地区内只要有一个用户先加载资源，在CDN中建立了缓存，该地区其他用户访问相同的资源时就可以使用缓存了

10. 图片优化，减少像素点、减少每个像素点能显示的颜色



### defer和async的区别

[defer和async的区别 - SegmentFault 思否](https://segmentfault.com/q/1010000000640869)

defer和async都属于异步加载，不同的是加载完后的执行时间不一样，async是加载完后立即执行(不管声明顺序如何，只要加载完了就立马执行，所以可能会造成执行顺序混乱的问题)，而defer是等所有页面解析完毕之后再执行(会按照加载顺序执行脚本)

<img src="http://segmentfault.com/img/bVcQV0" alt="preview" style="zoom:150%;" />



### 浏览器渲染与服务器渲染(SSR)

[SSR（服务端渲染）_qq593249106的博客-CSDN博客_ssr开发](https://blog.csdn.net/qq593249106/article/details/83240805)

浏览器渲染：页面上的内容主要是通过JS代码来进行渲染的，JS代码运行在浏览器上，服务器只返回一个HTML模版，如果在解析中发现ajax请求，继续向服务器发起请求，所以浏览器渲染的话可能会引起多次请求

服务器渲染(SSR)：页面的内容是通过服务器渲染出来的，浏览器直接显示服务器返回的HTML文件，只需要一次请求

区别：

1. 服务器渲染可以利于SEO优化(搜索引擎优化)，因为浏览器渲染的话，搜索引擎爬虫可能只能得到部分数据，而服务器渲染，网络爬虫可以抓取到页面的完整信息
2. 服务器渲染利于首屏优化，服务器返回的是渲染过的HTML文件，不再依赖于JS代码了，所有页面显示更快

应用场景：一般电商网站展示商品列表时，会采用服务器渲染，目的就是SEO优化，而商品评论列表这些，不需要SEO优化也不在首屏，所以一般采用浏览器渲染，两者可结合使用







## WebPack

[高频考点 | 面试指南 (poetries.top)](https://blog.poetries.top/FE-Interview-Questions/docs/excellent.html#_25-1-减少-webpack-打包时间)







## 安全

### XSS攻击

xss攻击分为三种**存储型、反射型、DOM型**三种

1. **存储型XSS**

   存储型XSS主要用于用户评论、用户私信、商品评价等，主要步骤：

   1. 攻击者将恶意代码上传到服务端上保存，
   2. 当用户访问网站时，发送http请求，这时网站服务端将恶意代码取出拼接在html中返回给浏览器
   3. 用户浏览器接收到响应之后解析执行，恶意代码也被执行
   4. 这时候恶意代码就能窃取到用户数据发送给攻击者的网站，或者冒充用户，执行攻击者指定操作（如通过document.cookie来获取cookie值）

2. **反射型XSS**

   反射型XSS主要是在网站搜索、跳转等运用，由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击

   1. 攻击者构造出特殊的URL，其中包含恶意代码
   2. 用户打开带有恶意代码的URL时，网站服务端将恶意代码从URL中取出拼接到HTML中返回给浏览器
   3. 用户浏览器接收到响应之后解析执行，恶意代码也被执行
   4. 这时候恶意代码就能窃取到用户数据发送给攻击者的网站，或者冒充用户，执行攻击者指定操作

3. **DOM型XSS**

   DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。

   1. 攻击者构造出特殊的 URL，其中包含恶意代码
   2. 用户打开带有恶意代码的 URL
   3. 用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行
   4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作

**如何防范XSS攻击**

1. 最普遍的做法是转义输入输出的内容，对于引号，尖括号，斜杠进行转义
2. 对于显示内容较多的情况，可以使用白名单过滤
3. CSP内容安全策略：CSP 本质上也是建立白名单，规定了浏览器只能够执行特定来源的代码，通常通过HTTP头部中的Content-security-policy来开启

```http
Content-Security-Policy: default-src ‘self’      只允许加载本站资源
Content-Security-Policy: img-src https://*		 只允许加载HTTPS协议图片
Content-Security-Policy: child-src 'none'		 允许加载任何来源框架
```

4. 设置cookie安全，如设置http-only，使得不能通过JS来获取cookie



### CSRF

CSRF实际上就是利用用户的登录态发起恶意请求

![img](https://pic002.cnblogs.com/img/hyddd/200904/2009040916453171.jpg)

**如何攻击**

假设网站中有一个通过 Get 请求提交用户评论的接口，那么攻击者可以在恶意网站中添加一张图片，图片的地址就是评论接口

```html
<img src="http://www.domain.com/xxx?comment='attack'" />
```

如果网站用POST请求提交评论，那么攻击者就用一个表单来提交接口

```html
<form action="http://www.domain.com/xxx" id="CSRF" method="post">
  <input name="comment" value="attack" type="hidden" />
</form>
```

**如何防御**

1. 不用GET请求修改数据
3. 阻止第三方网站请求接口
4. 请求时附带验证信息，比如验证码或者token
5. 不让第三方网站访问到用户Cookie，对cookie设置 **SameSite**属性，该属性设置 Cookie 不随着跨域请求发送
6. **验证Referer** 对于需要防范 CSRF 的请求，我们可以通过验证 Referer 来判断该请求是否为第三方网站发起的
7. **Token** 服务器下发一个随机Token，每次请求时将Token携带上，服务器验证Token是否有效



### SYN FLOOD 

SYN Flood 是种典型的 DoS（拒绝服务）攻击，其目的是通过消耗服务器所有可用资源使服务器无法用于处理合法请求。通过重复发送初始连接请求（SYN）数据包，攻击者能够压倒目标服务器上的所有可用端口，导致目标设备根本不响应合法请求。

在 TCP 建立连接的过程中，因为服务端不确定自己发给客户端的 SYN-ACK 消息或客户端反馈的 ACK 消息是否会丢在半路，所以会给每个待完成的半开连接状态设一个定时器，如果超过时间还没有收到客户端的 ACK 消息，则重新发送一次 SYN-ACK 消息给客户端，直到重试超过一定次数时才会放弃。

服务端为了维持半开连接状态，需要分配内核资源维护半开连接。当攻击者伪造海量的虚假 IP 向服务端发送 SYN 包时，就形成了 SYN FLOOD 攻击。攻击者故意不响应 ACK 消息，导致服务端被大量注定不能完成的半开连接占据，直到资源耗尽，停止响应正常的连接请求。

**解决方法**

**SYN Cache**：该方法首先构造一个全局 Hash Table，用来缓存系统当前所有的半开连接信息。在 Hash Table 中的每个桶的容量大小是有限制的，当桶满时，会主动丢掉早来的信息。当服务端收到一个 SYN 消息后，会通过一个映射函数生成一个相应的 Key 值，使得当前半连接信息存入相应的桶中。当收到客户端正确的确认报文后，服务端才开始分配传输资源块，并将相应的半开连接信息从表中删除。和服务器传输资源相比，维护表的开销要小得多。

**SYN Cookies**：该方案原理和 HTTP Cookies 技术类似，服务端通过特定的算法将半开连接信息编码成序列号或者时间戳，用作服务端给客户端的消息编号，随 SYN-ACK 消息一同返回给连接发起方，这样在连接建立完成前服务端不保存任何信息，直到发送方发送 ACK 确认报文并且服务端成功验证编码信息后，服务端才开始分配传输资源。若请求方是攻击者，则不会向服务端会 ACK 消息，由于未成功建立连接，因此服务端并没有花费任何额外的开销。( **其实就是为了限制恶意用户故意不回复ACK包，迫使客户端发送ACK之后再返回数据**)[SYN Cookie的原理和实现_zhangskd的专栏-CSDN博客](https://blog.csdn.net/zhangskd/article/details/16986931)

**SYN Proxy**：在客户端和服务器之间部署一个代理服务器，类似于防火墙的作用。通过代理服务器与客户端进行建立连接的过程，之后代理服务器充当客户端将成功建立连接的客户端信息发送给服务器。这种方法基本不消耗服务器的资源，但是建立连接的时间变长了（总共需要 6 次握手）









### 



















------



## jQuery

jQuery常见api

[jQuery 常用API_云果龙的博客-CSDN博客](https://blog.csdn.net/weixin_45129218/article/details/115337889?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_baidulandingword-4&spm=1001.2101.3001.4242)



------



## MVC和MVVM

[MVVM 模式和MVC模式的区别 (juejin.cn)](https://juejin.cn/post/6870870526341054478)

##### 1. MVVM

在**MVVM**框架下视图和模型是不能直接通信的，只能通过**ViewModel**进行交互，它能够监听到数据的变化，然后通知视图进行自动更新，而当用户操作视图时，**VM**也能监听到视图的变化，然后通知数据做相应改动，这实际上就实现了数据的**双向绑定**。并且**V和VM**可以进行通信。

![img](https://poetries1.gitee.io/img-repo/2020/07/fe/28.png)

优点：

​	**低耦合**: `View`可以独立于`Model`变化和修改,一个`ViewModel`可以绑定到不同的`View`上,当`View`变化的时候`Model`可以不变,当`Model`变化的时候`View`也可以不变。

​	**可重用性**: 可以把一些视图逻辑放在一个`ViewModel`里面,让很多`View`重用这段视图逻辑。

​	**独立开发**: 开发人员可以专注于业务逻辑和数据的开发,设计人员可以专注于页面的设计。

​	**可测试**：界面素来是比较难于测试的，而现在测试可以针对`ViewModel`来写。

##### 2. MVC

MVC即为**Model、View、Controller**,  **Controller**是  **Model 和 View **的协调者, **View 和 Model** 不直接联系。基本都是单向联系MVC是**单向通信**。也就是 View 跟 Model 必须通过 **Controller** 来承上启下。

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a86c349b74f7422fbc392c081179b9bd~tplv-k3u1fbpfcp-watermark.awebp)

##### 3. MVC与MVVM的区别

- MVC中Controller演变成MVVM中的ViewModel
- MVVM通过数据来显示视图层而不是节点操作
- MVVM主要解决了MVC中大量的dom操作使页面渲染性能降低,加载速度变慢,影响用户体验

------



## React以及项目

### React如何防止注入攻击

React DOM在渲染所有输入内容之前，默认会进行转义。所有的内容在渲染之前都被转换成了字符串，可以有效地防止XSS攻击



### setState()是异步的还是同步的

**异步更新，同步执行**,**setState 并非真异步，只是看上去像异步。在源码中，通过 `isBatchingUpdates` 来判断**

- `setState` 是先存进 `state` 队列还是直接更新，如果值为 true 则执行异步操作，为 false 则直接更新。
- 那么什么情况下 `isBatchingUpdates` 会为 `true` 呢？在 React 可以控制的地方，就为 true，比如在 React 生命周期事件和合成事件中，都会走合并操作，延迟更新的策略。可以通过 setState 的第二个参数中的 callback 拿到更新后的结果
- 但在 React 无法控制的地方，比如原生事件，具体就是在 `addEventListener、`setTimeout`、`setInterval` 等事件中，就只能同步更新。



### React Fiber

`React Fiber`是对核心算法的一次重新实现。`React Fiber`把更新过程碎片化，把一个耗时长的任务分成很多小片，每一个小片的运行时间很短，虽然总时间依然很长，但是在每个小片执行完之后，都给其他任务一个执行的机会，这样唯一的线程就不会被独占，其他任务依然有运行的机会

`React Fiber`改变了之前`react`的组件渲染机制，新的架构使原来同步渲染的组件现在可以异步化，可中途中断渲染，执行更高优先级的任务。释放浏览器主线程，**Fiber 会使原本同步的渲染过程变成异步的**。

**关键新特性**：

- 增量渲染（把渲染任务拆分成块，匀到多帧）
- 更新时能够暂停，终止，复用渲染任务
- 给不同类型的更新赋予优先级
- 并发方面新的基础能力











![image-20210608160113705](/Users/wangquan/Library/Application Support/typora-user-images/image-20210608160113705.png)

## 手写实现总结

