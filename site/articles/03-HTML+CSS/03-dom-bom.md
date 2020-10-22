# DOM

### DOM 和 BOM 是什么？

* **BOM 浏览器对象模型**：根节点是 `window`。
  * navigator 对象：`appCodeName; appName; appVersion; cookieEnabled; platform; userAgent;`。
  * screen 对象：`availHeight; availWidth; height; width; colorDepth;`。
  * history 对象：`back; forward; go;`。
  * location 对象：
    * 属性：`hash; host; hostName; href; pathname; port; portocol; `。
    * 方法：`assign; reload; replace`。
  * document 对象：
    * 集合：`anchors; images; links; forms;`。
    * 属性：`cookie; domain; referrer; title; URL;`。
    * 方法：`open; close; write; writeIn;`。
  * 窗口控制：`moveBy; moveTo; resizeBy; resizeTo; scrollBy; scrollTo;`。
  * 焦点控制：`focus; blur;`。
  * 打开关闭窗口：`open; close;`。
  * 定时器：`setTimeout; clearTimeout; setInterval; clearInterval`。
  * 对话框：`alert; confirm; prompt;`。
  * 属性：
    * 状态栏：`defaultStatus; status`。
    * 窗口位置 - IE：`screenLeft; screenTop;`。
    * 窗口位置 - !IE：`screenX; screenY; pageXOffset; pageYOffset;`。
    * 窗口位置 - FF：`innerHeight; innerWidth; outerHeight; outerWidth;`。
    * 其它：`opener; close; name; self;`。
* **DOM 文档对象模型**：W3C 标准。根节点是 `window.document`。
  * 获取节点：
    * document：`getElementById; getElementsByName; getElementsByTagName; `。
    * 节点指针：`firstChild; lastChild; childNodes; previousSibling; nextSibling; parentNode;`。
  * 节点操作：
    * 创建节点：`createElement; createAttribute; createTextNode;`。
    * 插入节点：`appendChild; insertBefore;`。
    * 替换节点：`replaceChild;`。
    * 复制节点：`cloneNode;`。
    * 删除节点：`removeChild;`。
  * 属性操作（获取/设置/删除）：`getAttribute; setAttribute; removeAttribute`。
  * 文本操作：`insertData; appendData, deleteData, replaceData; spliceData; substring;`。

## 如何理解 DOM Lever？

* DOM 一级
* DOM 二级
* DOM 三级

## 如何理解事件流/冒泡/捕获/委托？

**事件流**：

* 事件流被分为三个阶段(15)捕获过程、(56)目标过程、(6~10)冒泡过程。

* IE 提出的是冒泡流，而网景提出的是捕获流，后来在 W3C 组织的统一之下，JS 支持了冒泡流和捕获流，但是目前低版本的 IE 浏览器还是只能支持冒泡流(IE6, IE7, IE8 均只支持冒泡流)，所以为了能够兼容更多的浏览器，建议大家使用冒泡流。

* 从事件传播的过程能够看出来，当点击鼠标后，会先发生事件的捕获
  * 捕获阶段：首先 window 会获捕获到事件，之后 document、documentElement、body 会捕获到，再之后就是在 body 中 DOM 元素一层一层的捕获到事件，有 wrapDiv、innerP。
    *目标阶段：真正点击的元素textSpan的事件发生了两次，因为在上面的JavaScript代码中，textSapn既在捕获阶段绑定了事件，又在冒泡阶段绑定了事件，所以发生了两次。但是这里有一点是需要注意，在目标阶段并不一定先发生在捕获阶段所绑定的事件，而是先绑定的事件发生，一会会解释一下。
  * 冒泡阶段：会和捕获阶段相反的步骤将事件一步一步的冒泡到window

**JavaScript 事件冒泡**：

* 当触发子元素时，事件会沿着 DOM 向上冒泡。事件冒泡是实现事件委托的原理。阻止冒泡示例：

```javascript
var btn = document.getElementById('btn')
btn.addEventListener('click', function (event) {
    // event.preventDefault() // 阻止默认行为
    event.stopPropagation() // 阻止冒泡
    console.log('clicked')
})
```

**JavaScript 事件委托(事件代理)**：

事件委托是将事件监听器添加到父元素，而不是每个子元素单独设置事件监听器。当触发子元素时，事件会冒泡到父元素，监听器就会触发，这种技术的好处如下。

- 优点：
  - 内存占用减少，因为只需要一个父元素的事件处理程序，而不必为每个后代都添加事件处理程序。
  - 无需从已删除的元素中解绑处理程序，也不许将处理程序绑定到新元素上。
- 局限性：
  - focus、blur 之类的事件本身没有事件冒泡机制，所以无法委托
  - mousemove、mouseout 这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，不适 合事件委托

示例目标：为 div 下的每个 a 标签绑定点击事件：

```html
<div id="div1">
    <a href="#" id="a1">a1</a>
    <a href="#">a2</a>
    <a href="#">a3</a>
    <a href="#">a4</a>
</div>
<button>点击增加一个 a 标签</button>
```

示例原理：监听 div 下的事件触发点是不是 a 标签：

```javascript
function bindEvent(elem, type, selector, fn) {
    // 这样可以实现重载
    if (fn == null) {
        fn = selector
        selector = null
    }
    // 绑定事件
    elem.addEventListener(type, function (e) {
        var target
        // 有 selector 说明需要做事件代理
        if (selector) {
            // 获取触发事件的元素，即 e.target
            target = e.target
            // 看是否符合 selector 这个条件
            if (target.matches(selector)) {
                fn.call(target, e)
            }
        } else {
            // 无 selector，说明不需要事件代理
            fn(e)
        }
    })
}
```

使用示例：

```javascript
// 使用代理 bindEvent 多一个 'a' 参数
var div = document.getElementById('div')
bindEvent(div1, 'click', 'a', function (e) {
    console.log(this.innerHTML)
})

// 不使用代理
var a1 = document.getElementById('a1')
bindEvent(div, 'click', function (e) {
    console.log(a1.innerHTML)
})
```

## DOM 的事件模型？

* DOM之事件模型分脚本模型、内联模型(同类一个，后者覆盖)、动态绑定(同类多个)
* 事件就是文档或浏览器窗口中发生的一些特定的交互瞬间，而事件流(又叫事件传播)描述的是从⻚面中接收事件的顺序。
* 事件流：
  * 事件就是文档或浏览器窗口中发生的一些特定的交互瞬间，而事件流(又叫事件传播)描述的是从⻚面中接收事件的顺 序。
  * 事件冒泡：即事件开始时由最具体的元素(文档中嵌套层次最深的那个节点)接收，然后逐级向上传播到 较为不具体的节点。
  * 事件捕获：事件捕获的思想是不太具体的节点应该更早接收到事件，而最具体的节点应该最后接收到事件。事件捕获的用意在于在。事件到达预定目标之前就捕获它。
* 事件流又称为事件传播，DOM2级事件规定的事件流包括三个阶段：
  * 事件捕获阶段(capture phase)
  * 处于目标阶段 (target phase)
  * 事件冒泡阶段(bubbling phase)

```html
<body>
<!--行内绑定:脚本模型-->
<button onclick="javascrpt:alert('Hello')">Hello1</button> <!--内联模型-->
<button onclick="showHello()">Hello2</button> <!--动态绑定-->
<button id="btn3">Hello3</button>
</body>
<script>
/*DOM0:同一个元素，同类事件只能添加一个，如果添加多个，
* 后面添加的会覆盖之前添加的*/
function shoeHello() {
alert("Hello");
}
var btn3 = document.getElementById("btn3");
btn3.onclick = function () {
alert("Hello");
}
/*DOM2:可以给同一个元素添加多个同类事件*/ btn3.addEventListener("click",function () { alert("hello1");
});
btn3.addEventListener("click",function () { alert("hello2");
})
if (btn3.attachEvent){
/*IE*/
btn3.attachEvent("onclick",function () {
alert("IE Hello1");
})
}else {
/*W3C*/
btn3.addEventListener("click",function () {
alert("W3C Hello");
})
}
</script>
```

## DOM 的实现机制？

* 当初始的 HTML 文档完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载。
* window 的 load 事件仅在 DOM 和所有相关资源全部完成加载后才会触发。

