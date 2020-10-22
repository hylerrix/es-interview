# JavaScript 基础知识

> 重点关注从 ES 到 JS，与众不同的地方。即从标准逐步走向应用层，但不涉及具体实战。

## 基础数据类型

### 基础数据类型都有哪些？

* undefiend 没有定义数据类型
* number 数值数据类型，例如 10 或者 1 或者 5.5
  * NaN 是一种特殊的 number
* string 字符串数据类型用来描述文本，例如 "你的姓名"
  * string 的内置属性和方法：
  * 构造函数 String()
* boolean 布尔类型 true | false ，不是正就是反
  * boolean 的内置属性和方法：
  * 构造函数
* object 对象类型，复杂的一组描述信息的集合
  * null 是一种特殊的 object
  * object 的内置属性和方法：
  * 构造函数
  * Object.prototype
* function 函数类型
  * 函数的内置属性和方法：
  * 构造函数
  * Function.prototype

### String 有哪些操作？

### Boolean 有哪些操作？

### Undifined/NULL 有哪些操作？

### Function 有哪些操作？

### Object 有哪些操作？

### Number 有哪些操作？

* 浮点？

### Array 有哪些操作？

* Array 静态方法：`Array.from(); Array.isArray(); Array.of();`。
* Array 原型方法：
  * `.concat(); .copyWithin(); .entries(); .every();`。
  * `.fill(); .filter(); .find(); .findIndex(); .flat(); .flatMap(); .forEach();`。
  * `.includes(); .indexOf(); .join(); .keys(); .lastIndexOf(); .map(); .pop(); .push(); `。
  * `.reduce(); .reduceRight(); .reverse(); .shift(); .slice(); .some(); .sort(); .splice(); `。
  * `.toLocaleString(); .toSource(); .toString(); .unshift(); .values();`。
  * `Array.prototype[@@iterator](); get Array[@@species]`。
* Array 常见考题：
  * 数组拷贝。
  * 数组展开。
  * 用 reduce 实现 map 的功能
  * 类数组转化成数组的方法
  * 实现数组 flatten
* Object 常见考题：
  * 深拷贝、浅拷贝
  * 如何判断一个对象是不是空对象？
* 类数组和数组的互相转换？
* Number & BigInt 常见考题：
  * 大数操作
  * 0.1+0.2 == 0.3？原因？
* 链式调用：add(2, 5)，add(2)(5)，add(1)(1)(5) 的结果都为 7

## 重点实战概念

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

### 关联数组有哪些操作？

> 其它多数语言里，数组分为索引数组和关联数组，索引数组又分为一维数组、二维数组和多维数组。
>
> 引用：“JavaScript 里面没有关联数组和索引数组这两种不同的区分，一切对象都是键值对，数组也是对象，数组也可以看作是键值对。”
>
> 自我感悟，存疑：JavaScript 还是有索引数组和关联数组的微小差异。索引数组和 length 属性直接挂钩，关联数组其实访问的是数组上的属性及其值，length 一般都是 0(没有真正的数据内容)。

在计算机科学中，关联数组（英语：Associative Array），又称映射（Map）、字典（Dictionary）是一个抽象的数据结构，它包含着类似于（键，值）的有序对。一个关联数组中的有序对可以重复（如C中的 multimap）也可以不重复（如 C 中的 map）。这种数据结构包含以下几种常见的操作：

- 向关联数组添加配对
- 从关联数组内删除配对
- 修改关联数组内的配对
- 根据已知的键寻找配对

> 字典问题是设计一种能够具备关联数组特性的数据结构。解决字典问题的常用方法，是利用散列表，但有些情况下，也可以直接使用二叉查找树或其他结构。
>
> 许多程序设计语言内置基本的数据类型，提供对关联数组的支持。而内容定址存储器则是硬件层面上实现对关联数组的支持。

属性值和键值的异同

- 属性和键值不一样，给数组新增一个属性，其依然为数组，length 不变，新增的被读取时将是属性值，而非键值。

```javascript
var a = [1,2,3]; // 定义一个数组
console.log(a);
console.log(a.length); // 结果为3

a["name"] = "xiaoming"; // 我们再给它赋值，这是给 a 数组增加了一个属性叫 name，而不是在数组里添加数据。
console.log(a); // [1, 2, 3, aaa: 1]，a 依然是数组
console.log(a.length); // 结果还是为 3

a.push(4);
console.log(a) // [1, 2, 3, 4, aaa: 1]，a 依然是数组
console.log(a.length); // 结果为4
```

- 以下两种写法效果是一样的，但 j2 符合 JSON 风格，当 JSON 对象作为 Map(映射、关联数组) 时使用。
  - JSON 对象和 JSON Map 在运行时看起来是一样的；这个特性与 API 设计相关。当 JSON 对象被当作 Map 使用时，API 文件应当做出说明。
  - Map 的键名不一定要遵循属性名称的命名准则。键名可以包含任意的 Unicode 字符。客户端可使用 Map 熟悉的方括号来访问这些属性。

```javascript
var j1 = {
    name: 'j1',
    age: 18,
    fun: function () {
        console.log(1)
    }
}

var j2 = {
    "name": "j2",
    "age": 18,
    "fun": function () {
        console.log(1)
    }
}
```

遍历关联数组

```javascript
for (var key in array){  
    console.log("键:",key);  
    console.log("值:",array[key]); 
}
```

关联数组和索引数组的遍历效率问题

遍历赋值以下数组时，第一次耗费时间差不多，浏览器默认优化之后，arr2 作为 Array 而非 Object 存取速度更快。

```javascript
var arr = new Array(50000000);
var arr2 = {};
```

### 如何理解隐式类型转换？

### new 的原理？

* 创建一个新的空对象
* 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）
* 执行构造函数中的代码（为这个新对象添加属性）
* 如果这个函数有返回值，则返回；否则，就会默认返回新对象。

### call()、apply()、bind() 的原理？

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

### 跨域 CORS 的实现原理？

CORS 是一个 W3C 标准，全称是"跨域资源共享"(Cross-origin resource sharing)。它允许浏览器向跨源服务器，发出 XMLHttpRequest 请求，从而克服了 AJAX 只能同源使用的限制。

基本上目前所有的浏览器都实现了 CORS 标准,其实目前几乎所有的浏览器 ajax 请求都是基于 CORS 机制的。

浏览器将CORS请求分成两类：简单请求(simple request)和非简单请求(not-so-simple request)。只要同时满足以下两大条件，就属于简单请求。

* 请求方法是以下三种方法之一：HEAD, GET, POST
* HTTP的头信息不超出以下几种字段：
* Accept
* Accept-Language
* Content-Language
* Last-Event-ID
* Content-Type(只限于三个值 application/x-www-form-urlencoded、 multipart/form-data、text/plain)

凡是不同时满足上面两个条件，就属于非简单请求。

### 跨域 JSONP 的实现原理？

JSONP 是一种通常用于绕过 Web 浏览器中的跨域限制的方法，因为 Ajax 不允许跨域请求。JSONP 通过 `<script>` 标签发送跨域请求，通常使用 callback 查询参数，例如：https://example.com?callback=printData。然后服务器将数据包装在一个名为 printData 的函数中并将其返回客户端。

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

客户端必须在其全局范围内具有 printData 函数，并且在收到来自跨域的响应时，该函数将由客户端执行。JSONP 可能具有一些安全隐患，因此需要信任 JSONP 数据的提供者。

## 新特性 API

### 如何理解 Promise API？

* 同步函数与异步函数
  - 同步函数阻塞，语句完成后，下一句才执行。
  - 异步函数不阻塞，通常接受回调作为参数，在调用异步函数后立即继续执行下一行。回调函数仅在异步操作完成且调用堆栈为空时调用。
* Promise 是一个可能在未来某个时间产生结果的对象：操作成功的结果或失败的原因。Promise 可能处于以下三种状态之一：fulfilled、rejected、pending。用户可以对 Promise 添加回调函数来处理操作成功的结果或失败的原因。
* Promise 代替回调函数的优点：
  - 避免可读性极差的回调地狱。
  - 使用 .then() 编写的顺序异步代码，既简单又易读。
  - 使用 Promise.all() 编写异步代码变得很容易。
* Promise 代替回调函数的缺点：

- 在不支持 ES2015 的旧版浏览器中，需要引入 Polyfill 才能使用。

### 如何理解 Fetch API？

Fetch 支 持headers 定义，通过 headers 自定义可以方便地实现多种请求方法(PUT、GET、POST 等)、请求头(包括跨域)和 cache 策略等；除此之外还支持 response（返回数据）多种类型，比如支持二进制文件、字符串和 formData 等。

```javascript
fetch('some/api/data.json', {
  method:'POST', // 请求类型 GET、POST
  headers:{}, // 请求的头信息，形式为 Headers 对象或 ByteString
  body:{}, // 请求发送的数据 blob、BufferSource、FormData、URLSearchParams(get 或 head 方法中不能包含 body)
  mode:'', // 请求的模式，是否跨域等，如 cors、 no-cors 或 same-origin
  credentials:'', // cookie 的跨域策略，如 omit、same-origin 或 include
  cache:'', // 请求的 cache 模式: default、no-store、reload、no-cache、 force-cache 或 only-if-cached
}).then(function(response) { ... });...
```

### 如何理解 Proxy API？

* Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。
* Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
* `var proxy = new Proxy(target, handler);`。
* Proxy 实例也可以作为其他对象的原型对象。
* 13 种 Proxy 支持的拦截操作：
  * `get(target, propKey, receiver)`：拦截对象属性的读取，比如 `proxy.foo` 和 `proxy['foo']`。
  * `set(target, propKey, value, receiver)`：拦截对象属性的设置，比如 `proxy.foo = v` 或 `proxy['foo'] = v`，返回一个布尔值。
  * `has(target, propKey)`：拦截 `propKey in proxy` 的操作，返回一个布尔值。
  * `deleteProperty(target, propKey)`：拦截 `delete proxy[propKey]` 的操作，返回一个布尔值。
  * `ownKeys(target)`：拦截 `Object.getOwnPropertyNames(proxy)`、`Object.getOwnPropertySymbols(proxy)`、`Object.keys(proxy)`、`for...in` 循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而 `Object.keys()` 的返回结果仅包括目标对象自身的可遍历属性。
  * `getOwnPropertyDescriptor(target, propKey)`：拦截 `Object.getOwnPropertyDescriptor(proxy, propKey)`，返回属性的描述对象。
  * `defineProperty(target, propKey, propDesc)`：拦截 `Object.defineProperty(proxy, propKey, propDesc)`。
  * `Object.defineProperties(proxy, propDescs)`，返回一个布尔值。
  * `preventExtensions(target)`：拦截 `Object.preventExtensions(proxy)`，返回一个布尔值。
  * `getPrototypeOf(target)`：拦截 `Object.getPrototypeOf(proxy)`，返回一个对象。
  * `isExtensible(target)`：拦截 `Object.isExtensible(proxy)`，返回一个布尔值。
  * `setPrototypeOf(target, proto)`：拦截 `Object.setPrototypeOf(proxy, proto)`，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
  * `apply(target, object, args)`：拦截 Proxy 实例作为函数调用的操作，比如 `proxy(...args); proxy.call(object, ...args)、proxy.apply(...)`。
  * `construct(target, args)`：拦截 Proxy 实例作为构造函数调用的操作，比如 `new proxy(...args)`。

```
var obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
});
```

