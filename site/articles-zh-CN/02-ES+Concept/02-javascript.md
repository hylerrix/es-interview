# JavaScript 基础知识

> 重点关注异步、跨域、JS 基础知识、疑难对比
>
> `const x = 1 + 1` 发生了什么？-> 找一个更大的场景，来测基本操作符和变量提升等知识
>
> 原型链、作用域链的查找如何委托给 JS 引擎
>
> 哪些标签可以避免同源策略
>
> 声明函数，使用 function 好还是 const 好？分别针对什么场景用什么更好？https://www.freecodecamp.org/news/constant-confusion-why-i-still-use-javascript-function-statements-984ece0b72fd/
>
> *>* 区分清楚：layerX, layerY；clientX, clientY；pageX, pageY；movementX, movementY；offsetX, offsetY；screenX, screenY；tiltX, tiltY；x, y

## 内置对象

### JavaScript 内置全局对象有哪些？

没有 Web 浏览器宿主环境的条件下，对于任何 JavaScript 程序，在程序开始之前，JavaScript 解释器都会初始化一个全局对象供程序使用，通过使用该 JavaScript 全局对象，可以访问所有预定义的全局属性、全局普通函数、全局构造函数和全局对象。这些预定义的全局 XX 都是“JS全局对象”的属性。此“JS全局对象”没有名称，可以在全局作用域内使用 this 关键字或引用“JavaScript 全局对象”。

- 基本对象
  - 内置异常：`EvalError`、`RangeError`、`ReferenceError`、`SyntaxError`、`TypeError`、`URIError`。
  - `Object`、`Function`、`Boolean`。
- 反射：`Proxy`、`Reflect`。
- 控制对象：`Generator`、`GeneratorFunction`、`Iterable`、`Promise`。
- 数值和时间：`Date`、`Math`、`Number`。
- 文本处理：`RegExp`、`String`。
- 结构化数据：`ArrayBuffer`、`DataView`、`JSON`。
- 键值对集合：`Map`、`Set`、`WeakMap`、`WeakSet`。
- 索引集合：`Array`、`TypedArray`、`Float32Array`、`Float64Array`、`Int16Array`、`Int32Array`、`Int8Array`、`Uint16Array`、`Uint32Array`、`Uint8Array`、`Uint8ClampedArray`。
- 全局对象
  - 全局对象的值属性：`Infinity`、`NaN`、`undefined`
  - 全局对象的其它属性：`JSON`、`Math`、`Reflect`
  - 全局对象的构造器属性：`Array`、`ArrayBuffer`、`Boolean`、`DataView`、`Date`、`Error`、`EvalError`、`Float32Array`、`Float64Array`、`Function`、`Int16Array`、`Int32Array`、`Int8Array`、`Map`、`Number`、`Object`、`Promise`、`Proxy`、`RangeError`、`ReferenceError`、`RegExp`、`Set`、`String`、`Symbol`、`SyntaxError`、`TypeError`、`Uint16Array`、`Uint32Array`、`Uint8Array`、`Uint8ClampedArray`、`URIError`、`WeakMap`、`WeakSet`。

Web 浏览器这个宿主环境中特有的 JavaScript 全局对象为“window 全局对象”，“window 全局对象” 提供了与当前窗口、页面有关的诸多属性与方法。除了这些与浏览器有关的全局属性和方法，window 对象还封装了“JavaScript 内置全局对象”，并向外暴露“JavaScript 内置全局对象的属性与接口”。因此，当进行浏览器端 JavaScript 编程时，只需关心“window 全局对象”即可。

### Window 全局内置的属性和方法？

## 重点基础概念

### 如何理解闭包和 IIFE？

* IIFE
  * IIFE 可以达到不暴露私有成员的目的
  * 能够在 IIFE 完成执行后任维系着内部功能的生存期。
  * IIFE，Immediately Invoked Function Expressions，代表立即执行函数。
  * IIFE 的外层括号不是必须的，因为 IIFE 是一个函数表达式。
* 闭包
  * 闭包，closure，概念最早提出在 1964 年，1975 年最早实现，是函数和声明该函数的词法环境的组合。词法作用域中使用的域，是变量在代码中声明的位置所决定的。
  * 闭包就是能够读取其他函数内部变量的函数。
  * Javascript语言的特殊之处，就在于函数内部可以直接读取全局变量。另一方面，在函数外部自然无法读取函数内的局部变量。本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
  * 为什么使用闭包：
    * 利用闭包实现数据私有化或模拟私有方法，这个方式也称为模块模式。
    * 部分参数函数柯里化。
  * 如何从外部读取局部变量？
    * 那就是在函数的内部，再定义一个函数。这就是 JavaScript 语言特有的"链式作用域"结构(chain scop)，子对象会一级一级地向上寻找所有父对象的变量。
  * 使用闭包的注意点
    * 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
    * 闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

### 如何理解全局/函数/块级作用域？

* 全局作用域：在代码中任何地方都能访问到的对象拥有全局作用域，一般来说以下几种情形拥有全局作用域：
  * 最外层函数 和在最外层函数外面定义的变量拥有全局作用域
  * 所有末定义直接赋值的变量自动声明为拥有全局作用域
  * 所有 window 对象的属性拥有全局作用域
* 函数作用域：
  * 是指声明在函数内部的变量，和全局作用域相反，局部作用域一般只在固定的代码片段内可访问到
* eval 作用域：严格模式中引入
* 块级作用域：ES6 引入
  * let, const
  * if、for 语句里面的 {} 也属于块级作用域

### 如何理解作用域链/执行上下文？

> 词法作用域

* JavaScript 在执行过程中会创造可执行上下文，可执行上下文中的词法环境中含有外部词法环境的引用，我们 可以通过这个引用获取外部词法环境的变量、声明等，这些引用串联起来一直指向全局的词法环境，因此形成了作用域 链。
* 找不到想要访问的变量的时候，会向上一层层查找，这一层层组成了作用域链。
* 作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突。
* JavaScript 的两个执行阶段：
  * 解释阶段：
  * 词法分析
  * 语法分析
  * 作用域规则确定
* 执行阶段：
* 创建执行上下文
* 执行函数代码
* 垃圾回收

### var/let/const 与变量提升？

* 编译器预编译的时候，第一步只会记录变量和函数的定义，第二步才会执行程序。
  * 所有这些函数和变量声明都被添加到名为词法环境的 JavaScript 数据结构内的内存中。
* var 会变量提升，初始值为 undefined，不能跨函数访问
* let 和 const 相比 var
  * 都会被提升，但是不会被初始化，不能被引用
  * 只在块级作用域中有效
  * 不允许重复声明
  * 不会绑定全局作用域
* let 和 const 区别
  * const 定义的指针不能修改，但是指向的对象属性可以修改

### 如何理解原型链？

所有 JavaScript 对象都有一个 prototype 属性，指向它的原型对象。当试图访问一个对象的属性时，如果没有在该对象上找到，它还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。这种行为是在模拟经典的继承，与其说是继承，不如说是委托。

- 每个对象都有 `__proto__` 属性。
- 函数有 `prototype`，定义在 ES 规范里。
- 实例继承构造函数 prototype 的所有属性和方法
  - 实例的 `__proto__` 指向构造函数的 prototype
  - 对象具有属性 `__proto__`，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型，这也保证了实例能够访问在构造函数原型中定义的属性和方法。
- 几乎所有的 JavaScript 对象都是 Object 的实例。
  - 一个典型的对象继承了 Object.prototype 的属性（包括方法），尽管这些属性可能被遮蔽（也被称为覆盖）。
  - 但是有时候可能故意创建不具有典型原型链继承的对象，比如通过 Object.create(null) 创建的对象，或者通过 Object.setPrototypeOf 方法改变原型链。
  - 改变 Object 原型，会通过原型链，而改变所有对象；除非这些属性和方法被其他对原型链更里层的改动所覆盖。这提供了一个非常强大的、但有潜在危险的机制，来覆盖或扩展对象行为。
- 所有的构造器的 constructor 都指向 Function
- Function 的 prototype 指向一个特殊匿名函数，而这个特殊匿名函数的 `__proto__` 指向Object.prototype

```javascript
Function instanceof Object; // true
Object instanceof Function; // true

//①构造器Function的构造器是它自身
Function.constructor=== Function;//true
//②构造器Object的构造器是Function（由此可知所有构造器的constructor都指向Function）
Object.constructor === Function;//true
//③构造器Function的__proto__是一个特殊的匿名函数function() {}
console.log(Function.__proto__);//function() {}
//④这个特殊的匿名函数的__proto__指向Object的prototype原型。
Function.__proto__.__proto__ === Object.prototype//true
//⑤Object的__proto__指向Function的prototype，也就是上面③中所述的特殊匿名函数
Object.__proto__ === Function.prototype;//true
Function.prototype === Function.__proto__;//true
```

### 如何理解显示/隐式类型转换？

* 在if语句、逻辑语句、数学运算逻辑、==等情况下都可能出现隐式类型转换。

### 如何理解属性的枚举？

* js中基本包装类型的原型属性是不可枚举的，如Object, Array, Number等
* 枚举性的 作用：for in、Object.keys()、JSON.stringify()

### 如何实现不可变数据？

## 异步与事件机制

### 如何理解 JS 单线程模型与事件机制？

* 事件循环是一个单线程循环，用于监视调用堆栈并检查是否有工作即将在任务队列中完成。如果调用堆栈为空并且任务队列中有回调函数，则将回调函数出队并推送到调用堆栈中执行。
  * JavaScript 分为同步任务和异步任务
  * 同步任务都在主线程上执行，形成一个执行栈
  * 主线程之外，事件触发线程管理着一个任务队列，只要异步任务有了运行结果，就在任务队列之中放置一个事件。
  * 一旦执行栈中的所有同步任务执行完毕，此时 JavaScript 引擎空闲，系统就会读取任务队列，将可运行的异步任务添加到可执行栈中，开始执行。

### 如何理解宏任务与微任务？

* JavaScript 中分为两种任务类型：macrotask 和 microtask，在 ECMAScript 中，microtask 称为 jobs，macrotask 可称为 task。

- macrotask 宏任务，可以理解是每次执行栈执行的代码就是一个宏任务，包括每次从事件队列中获取一个事件回调并放到执行栈中执行
  - 每一个 task 会从头到尾将这个任务执行完毕，不会执行其它
  - 浏览器为了能够使得 JavaScript 内部 task 与 DOM 任务能够有序的执行，会在一个 task 执行结束后，在下一个 task 执行开始前，对页面进行重新渲染。
- microtask 微任务，可以理解是在当前 task 执行结束后立即执行的任务
  - 在当前 task 任务后，下一个 task 之前，在渲染之前
  - 所以它的响应速度相比 setTimeout(setTimeout 是 task)会更快，因为无需等渲染
  - 在某一个 macrotask 执行完后，就会将在它执行期间产生的所有 microtask 都执行完毕(在渲染前)。

* 分别什么场景会用到 macrotask 和 microtask？
  - macrotask：主代码块，setTimeout，setInterval 等(可以看到，事件队列中的每一个事件都是一个 macrotask)
  - microtask：Promise，process.nextTick 等
* 在node环境下，process.nextTick 的优先级高于 Promise__，也就是可以简单理解为：在宏任务结束后会先执行微任务队列中的 nextTickQueue 部分，然后才会执行微任务中的 Promise 部分。
* 从线程角度重新理解：
  * macrotask 中的事件都是放在一个事件队列中的，而这个队列由事件触发线程维护
  * microtask 中的所有微任务都是添加到微任务队列 Job Queues 中，等待当前 macrotask 执行完毕后执行，而这个队列由 JavaScript 引擎线程维护
* 所以，总结下运行机制：
  * 执行一个宏任务（栈中没有就从事件队列中获取）
  * 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
  * 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
  * 当前宏任务执行完毕，开始检查渲染，然后 GUI 线程接管渲染
  * 渲染完毕后，JavaScript 线程继续接管，开始下一个宏任务（从事件队列中获取）
* 另外，请注意下 Promise 的 polyfill 与官方版本的区别：
  * 官方版本中，是标准的 microtask 形式
  * polyfill，一般都是通过 setTimeout 模拟的，所以是 macrotask 形式
* 注意，有一些浏览器执行结果不一样，因为它们可能把 microtask 当成macrotask来执行了。

### 如何理解 AJAX？

Ajax 是创建异步 Web 应用的一种 Web 开发技术，起源于 IE 的 Active X 控件，并以 XMLHTTPRequest API 方式提供编程接口。借助 Ajax，Web 应用可以异步(在后台)向服务器发送数据和从服务器检索数据，而不会干扰现有页面的现实和行为。现在通常将 JSON 替换为 XML，因为 JavaScript 对 JSON 由原生支持优势。

优点：

- 交互性更好，来自服务器的新内容可以动态更改，不许重新加载整个页面。
- 减少与服务器的链接，因为脚本和样式只需要被请求一次。
- 状态可以维护在一个页面上，JavaScript 变量和 DOM 状态将得到保持，因为主容器页面未被重新加载。
- 基本上包括大部分 SPA 的优点。

缺点：

- 动态网页很难收藏。
- 如果 JavaScript 已在浏览器中被禁用，则不起作用。
- 有些网络爬虫不执行 JavaScript，也不会看到 JavaScript 加载的内容。
- 基本上包括大部分 SPA 的缺点。

```javascript
var xhr = new XMLHttpRequest()
xhr.open("GET", "/api", false)
xhr.onreadystatechange = function () {
    // 这里的函数异步执行，可参考之前 JS 基础中的异步模块
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            alert(xhr.responseText)
        }
    }
}
xhr.send(null)
```

xhr.readyState 的状态码说明：

- 0 - (未初始化）还没有调用send()方法
- 1 -（载入）已调用send()方法，正在发送请求
- 2 -（载入完成）send()方法执行完成，已经接收到全部响应内容
- 3 -（交互）正在解析响应内容
- 4 -（完成）响应内容解析完成，可以在客户端调用了

### 如何实现跨域请求？

* 同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。
* 同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源。
* 不受跨域限制的标签：`<img src=xxx>`、`<link href=xxx>`、`<script src=xxx>`。
* CORS

  * CORS 是一个 W3C 标准，全称是"跨域资源共享"(Cross-origin resource sharing)。它允许浏览器向跨源服务器，发出 XMLHttpRequest 请求，从而克服了 AJAX 只能同源使用的限制。
  * 基本上目前所有的浏览器都实现了 CORS 标准,其实目前几乎所有的浏览器 ajax 请求都是基于 CORS 机制的。
  * 浏览器将CORS请求分成两类：简单请求(simple request)和非简单请求(not-so-simple request)。只要同时满足以下两大条件，就属于简单请求。
    * 请求方法是以下三种方法之一：HEAD, GET, POST
    * HTTP的头信息不超出以下几种字段：
    * Accept
    * Accept-Language
    * Content-Language
    * Last-Event-ID
    * Content-Type(只限于三个值 application/x-www-form-urlencoded、 multipart/form-data、text/plain)
  * 凡是不同时满足上面两个条件，就属于非简单请求。
* JSONP：
  * JSONP 是一种通常用于绕过 Web 浏览器中的跨域限制的方法，因为 Ajax 不允许跨域请求。JSONP 通过 `<script>` 标签发送跨域请求，通常使用 callback 查询参数，例如：https://example.com?callback=printData。然后服务器将数据包装在一个名为 printData 的函数中并将其返回客户端。
  * 客户端必须在其全局范围内具有 printData 函数，并且在收到来自跨域的响应时，该函数将由客户端执行。JSONP 可能具有一些安全隐患，因此需要信任 JSONP 数据的提供者。
* Nginx：反向代理来解决跨域问题。
* 其他跨域方案：
  * HTML5 XMLHttpRequest 有一个API，postMessage()方法允许来自不同源的脚本采用异步方式进行有限的通信， 可以实现跨文本档、多窗口、跨域消息传递。
  * WebSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数 据，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了，因此可以跨域。
  * window.name + iframe:window.name属性值在不同的⻚面(甚至不同域名)加载后依旧存在，并且可以支持非常 ⻓的 name 值，我们可以利用这个特点进行跨域。
  * location.hash + iframe:a.html欲与c.html跨域相互通信，通过中间⻚b.html来实现。 三个⻚面，不同域之间利用 iframe的location.hash传值，相同域之间直接js访问来通信。
  * document.domain + iframe: 该方式只能用于二级域名相同的情况下，比如 a.test.com 和 b.test.com 适用于该方 式，我们只需要给⻚面添加 document.domain ='test.com' 表示二级域名都相同就可以实现跨域，两个⻚面都通过js 强制设置document.domain为基础主域，就实现了同域。

```html
<script>
function printData (data) {
    console.log('My name is ${data.name}')
}
</script>
<script src="https://example.com?callback=printData"></script>
// 文件加载自 https://example.com?callback=printData
printData({ name: 'Yang shun'} )
```

## 特性深入

### new/this/箭头函数？

* new 一个对象的过程：
  * 创建一个新的空对象
  * 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）
  * 执行构造函数中的代码（为这个新对象添加属性）
  * 如果这个函数有返回值，则返回；否则，就会默认返回新对象。

* this 有四种绑定：和调用位置有关，和定义位置无关
  * 默认绑定：在非严格模式下，this 就是全局对象，否则是 undefined。`foo()`。
  * 隐式绑定：`o.foo()`。
  * 显示绑定：如果 foo 是通过 call、apply 或者 bind 调用的，那么这种调用就是显式绑定。`foo.call(obj)`。
  * new 关键字绑定：构造函数中。
* 箭头函数的特点：和定义位置有关，和调用位置无关
  * 无视 this 的四种绑定规则。
  * this 的值就是函数创建时候所在的 lexical scope 中的 this，而和调用方式无关。
  * 箭头函数中无法使用 `function.arguments` 对象。
* 绑定规则优先级：箭头函数 > 关键字 new 调用 > 显式绑定 > 隐式绑定 > 默认绑定。

* this 是 JavaScript 语言的一个关键字，函数调用的方式决定了 this 的值，this 取值符合以下标准：
  * 在调用函数时使用 new 关键字，函数内的 this 是一个全新的对象。
  * 如果 apply、call 或 bind 方法用于调用、创建一个函数，函数内的 this 就是作为参数传入这些方法的对象。
  * 当函数作为对象里的方法被调用时，函数内的 this 时调用该函数的对象。比如当 obj.method() 被调用时，函数内的 this 将绑定到 obj 对象。
  * 如果调用函数不符合上述规则，那么 this 的值指向全局对象。浏览器环境下 this 的值指向 window 对象，但是在严格模式下('use strict')，this 的值为 undefined。
  * 如果符合上述多个规则，则较高的规则(1 号最高，4 号最低)将决定 this 的值。
  * 如果该函数是 ES2015 中的箭头函数，将忽略上面的所有规则，this 被设置为它被创建时的上下文。

### call()、apply()、bind()？

> 参考：[进击的前端面试 - 知乎专栏](https://www.zhihu.com/column/c_1155423857010659328)

* call：【显示调用】传入多个参数，第一个参数是 this 的指向，之后的参数都是函数的参数。
* call 做了三件事：`person.fullName.call(person1, "Hello, ");`。
  * 显示地改变 this 的指向为第一个参数。
  * 从 call 的第二个参数开始，都传递给调用 call 的函数中。
  * 不改变调用函数本身内部，调用函数不使用 call 时会和 call 不再有关系。
* `foo.call(this, arg1, arg2, arg3) == foo.apply(this, arguments) == this.foo(arg1, arg2, arg3);`。
* call 的使用场景：
  * 让类数组使用数组的方法：`Array.prototype.slice.call(arguments)`

* apply：【显示调用】传入两个参数，第一个参数是 this 的指向，第二个参数是函数参数组成的数组。
  * 在 ES6 解构赋值之前，可以用 apply 给函数传入参数数组。

* bind：【隐式调用】创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被 bind 的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。
* bind 做了四件事：`greeting.bind(obj, 'the world')('JS')`。
  * 改变调用者中 this 的指向，之后返回一个函数。
  * 调用 bind 时，除了第一个代表 this 的指向，还能传递参数给调用者。
  * 调用生成的“绑定函数”时，再传入剩余参数。
  * 生成的“绑定函数”也可以使用 new 运算符构造，提供的 this 值会被忽略，但前置参数仍会提供给模拟函数。

### setTimeOut/setInterval/requestAnimationFrame？

### constructor/typeof/instanceof？

只要一个对象 a 的内部 prototype 属性或者它的原型链上的任意对象与 b.prototype 是同一个对象,那么 a instanceof b 就返回true。

```javascript
Array instanceof Object // true
Object instanceof Object // true
Array instanceof Array // false
null instanceof Object // false
NaN instanceof Number // false
'str' instanceof String // false
new String('str') instanceof String // true
```

### Proxy 与 Object.defineProperty？

* Proxy 的优势：
  * Proxy 可以直接监听对象而非属性
  * Proxy 可以直接监听数组的变化
  * Proxy 有多达 13 种拦截方法，不限于 apply、ownKeys、deleteProperty、has
  * Proxy 返回的是一个新对象，可以只操作新对象达到目的；Object.defineProperty 只能遍历对象属性直接修改。
  * Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的性能红利
* Object.defineProperty 的优势：
  * 兼容性好，支持 IE9

### 对象字面量 vs 构造函数创建对象？

> 在 JavaScript 中，我们可以通过 new 关键字、Object.create() 函数创建一个对象，或者使用字面量记法(也称对象初始化器材——object initializer)。字面量记法使用花括号定义对象，对象的 Property 与值以名称 - 值对的方式组织，用冒号分隔。我们还需要在每个名称 - 值对的最后加上逗号(除了最后一个名称 - 值对)。值可以包含变量、函数，或者其他对象。
>
> —— 《 SPA 设计与架构 》

字面量的优势：

- 它的代码量更少，更易读；
- 它可以强调对象就是一个简单的可变的散列表，而不必一定派生自某个类；
- 对象字面量运行速度更快，因为它们可以在解析的时候被优化：它们不需要"作用域解析(scope resolution)"；因为存在我们创建了一个同名的构造函数 Object() 的可能，当我们调用 Object() 的时候，解析器需要顺着作用域链从当前作用域开始查找，如果在当前作用域找到了名为Object()的函数就执行，如果没找到，就继续顺着作用域链往上照，直到找到全局 Object() 构造函数为止
- Object() 构造函数可以接收参数，通过这个参数可以把对象实例的创建过程委托给另一个内置构造函数，并返回另外一个对象实例，而这往往不是你想要的。

### toString()/valueOf()？

* toString 方法返回一个表示该对象的字符串，如果是对象会返回 [object type]，其中 type 是对象类型
* valueOf 返回指定对象的原始值，JS 会利用 valueOf() 方法用来把对象转换成原始类型的值（数值、字符串、布尔值）

### Async - Await/Generator/Promise？

* async 函数，就是 Generator 函数的语法糖，它建立在Promises上，并且与所有现有的基于Promise的API兼容。
  * Async—声明一个异步函数(async function someName(){...})
  * 自动将常规函数转换成Promise，返回值也是一个Promise对象
  * 只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数
  * 异步函数内部可以使用await
  * Await—暂停异步的功能执行(var result = await someAsyncCall();)
  * 放置在Promise调用之前，await强制其他代码等待，直到Promise完成并返回结果
  * 只能与Promise一起使用，不适用与回调 4. 只能在async函数内部使用

* Async 相比于 Promise 的优势：
  * 代码读起来更加同步，Promise虽然摆脱了回调地狱，但是then的链式调用也会带来额外的阅读负担
  * Promise传递中间值非常麻烦，而async/await几乎是同步的写法，非常优雅
  * 错误处理友好，async/await可以用成熟的try/catch，Promise的错误捕获非常冗余
  * 调试友好，Promise的调试很差，由于没有代码块，你不能在一个返回表达式的箭头函数中设置断点，如果你在一 个.then代码块中使用调试器的步进(step-over)功能，调试器并不会进入后续的.then代码块，因为调试器只能跟踪 同步代码的『每一步』。

### `prototype` 和 `__proto__`？

* 每个对象都可以有一个原型 `__proto__`，这个原型还可以有自己的原型，以此形成原型链
  * `__proto__` 是原型链查询中实际用到的，它总是指向 prototype，换句话说就是指向构造函数的原型对象，它是对象独有的
* `prototype` 是函数独有的，从一个函数指向一个对象，含义是函数的原型对象。
* 示例：
  * `a.__proto__ === Foo.prototype`
  * `Foo.__proto__ === Function.prototype`
  * `Foo.prototype.__proto__ === Function.prototype.__proto__ === Object.prototype`
  * `Object.__proto__ === null`

### for of、for in、forEach？

* `for (var value of myArray)`
  * for..of适用遍历数/数组对象/字符串/map/set等**拥有迭代器对象**的集合.但是不能遍历对象,因为没有迭代器对象.与forEach()不同的是，它可以正确响应break、continue和return语句
  * 
* `for (var key in myObject)`
  * for-in是为遍历对象而设计的，不适用于遍历数组。(遍历数组的缺点：数组的下标index值是数字，for-in遍历的index值"0","1","2"等是字符串)
* forEach

### 迭代器和生成器？

* 迭代器：
  * 迭代器是一个每次访问集合序列中一个元素的对象，并跟踪该序列中迭代的当前位置。在JavaScript中迭代器是一个对象，这个对象提供了一个 next() 方法，next() 方法返回序列中的下一个元素。当序列中所有元素都遍历完成时，该方法抛出 StopIteration 异常。
* 生成器：
  * 一种更好的方式来构建迭代器 虽然自定义的迭代器是一种很有用的工具，但是创建它们的时候要仔细规划，因为需要显式的维护它们的内部状态。
  *  生成器提供了很强大的功能：它允许你定义一个包含自有迭代算法的函数， 同时它可以自动维护自己的状态。 生
  * 成器是可以作为迭代器工厂的特殊函数。如果一个函数包含了一个或多个 yield 表达式，那么就称它为生成器(译者注：Node.js 还需要在函数名前加 * 来表示)。