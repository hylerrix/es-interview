# ECMAScript

> 重点关注标准本身
>
> Promise retry
>
> 时间 API Date API、Intl API、Temporal API，moment.js 和 date-fns
>
> promise 内部实现
>
> ​	promise 是微任务；dom, 回调, ajax, 定时器 是宏任务
>
> new FormData() 如何使用？
>
> 如何看待 console.log 一个对象后赋值该对象，其值在终端打印结果为赋值后的值？
>
> proxy 的缺点是什么？proxy 为什么比 Object.defineProperty 快？

## 标准基础

### ES 标准及其流程？

* ECMAScript 是 ECMA 制定的标准化脚本语言。

* ECMA 规范最终由 TC39 敲定。TC39 由包括浏览器厂商在内的各方组成，他们开会推动 JavaScript 提案沿着一条严格的发展道路前进。

* TC39 的新特性提案：https://github.com/tc39/proposals
* ECMAScript 新闻：https://www.ecma-international.org/news/index.html
* 从提案到入选ECMA规范主要有以下几个阶段：
  * Stage 0: strawman——最初想法的提交。
  * Stage 1: proposal（提案）——由 TC39 至少一名成员倡导的正式提案文件，该文件包括 API 示例。
  * Stage 2: draft（草案）——功能规范的初始版本，该版本包含功能规范的两个实验实现。
  * Stage 3: candidate（候选）——提案规范通过审查并从厂商那里收集反馈。
  * Stage 4: finished（完成）——提案准备加入 ECMAScript，但是到浏览器或者 Nodejs 中可能需要更长的时间。

### 关键字与保留字都有哪些？

* null：表示尚未存在的对象，是一种特殊的 object
  * 作为函数的参数，表示该函数的参数不是对象。
  * 作为对象原型链的终点。

ECMA-262 定义了 ECMAScript 支持的一套关键字和一套保留字。如果把关键字用作变量名或函数名，可能得到诸如 "Identifier Expected"（应该有标识符、期望标识符）这样的错误消息。其中，关键字标识了 ECMAScript 语句的开头和/或结尾，保留字在某种意思上是为将来的关键字而保留的单词，因此关键字与保留字军不能被用作变量名或函数名。

| JavaScript 关键字 | (待做待加入 ES6+) |             |             |            |
| ----------------- | ----------------- | ----------- | ----------- | ---------- |
| break             | case              | catch       | continue    | default    |
| delete            | do                | else        | finally     | for        |
| function          | if                | in          | instanceof  | new        |
| return            | switch            | this        | throw       | try        |
| typeof            | var               | void        | while       | with       |
| class(ES5)        | enum(ES5)         | export(ES5) | import(ES5) | super(ES5) |
| extends(ES5)      |                   |             |             |            |

| JavaScript 保留字 | (待做待加入 ES6+) |           |           |          |
| ----------------- | ----------------- | --------- | --------- | -------- |
| abstract          | boolean           | byte      | char      | const    |
| debugger          | double            | final     | float     | goto     |
| implements        | int               | interface | long      | native   |
| package           | private           | protected | public    | short    |
| static            | synchronized      | throws    | transient | volatile |

### 标识符命名的避免原则？

- 避免使用一些 Java 对象和属性作为 JavaScript 标识符。

| Java 关键字示例 |            |             |
| --------------- | ---------- | ----------- |
| getClass        | java       | JavaArray   |
| javaClass       | JavaObject | JavaPackage |

- 避免使用 HTML 和 Windows 对象属性和名称作为 JavaScript 标识符。

| HTML、Windows 对象属性和名称 |                    |             |                    |                    |
| ---------------------------- | ------------------ | ----------- | ------------------ | ------------------ |
| alert                        | all                | anchor      | anchors            | area               |
| assign                       | blur               | button      | checkbox           | clearInterval      |
| clearTimeout                 | clientInformation  | close       | closed             | confirm            |
| constructor                  | crypto             | decodeURI   | decodeURIComponent | defaultStatus      |
| document                     | element            | elements    | embed              | embeds             |
| encodeURI                    | encodeURIComponent | escape      | event              | fileUpload         |
| focus                        | form               | forms       | frame              | innerHeight        |
| innerWidth                   | layer              | layers      | link               | location           |
| mimeTypes                    | navigate           | navigator   | frames             | frameRate          |
| hidden                       | history            | image       | images             | offscreenBuffering |
| open                         | opener             | option      | outerHeight        | outerWidth         |
| packages                     | pageXOffset        | pageYOffset | parent             | parseFloat         |
| parseInt                     | password           | pkcs11      | plugin             | prompt             |
| propertyIsEnum               | radio              | reset       | screenX            | screenY            |
| scroll                       | secure             | select      | self               | setInterval        |
| setTimeout                   | status             | submit      | taint              | text               |
| textarea                     | top                | unescape    | untaint            | window             |

- 避免使用 HTML 事件句柄作为 JavaScript 标识符。

|           |            |             |             |
| --------- | ---------- | ----------- | ----------- |
| onblur    | onclick    | onerror     | onfocus     |
| onkeydown | onkeypress | onkeyup     | onmouseover |
| onload    | onmouseup  | onmousedown | onsubmit    |

- 避免使用非标准 JavaScript 的关键字

一个实例是 const 关键字，用于定义变量。一些 JavaScript 引擎把 const 当作 var 的同义词。另一些引擎则把 const 当作只读变量的定义。Const 是 JavaScript 的扩展。JavaScript 引擎支持它用在 Firefox 和 Chrome 中。但是它并不是 JavaScript 标准 ES3 或 ES5 的组成部分。建议：不要使用它。

### ES ~5 特性发展史？

### ES 6+ 新特性概要？

> 以下特性摘抄自博客，尚未和 ES 标准精确配对，可能会出现特性和版本不一致。

* ES6：在 ES5 发布近 6 年（2009-11 至 2015-6）之后才将其标准化。
  * **类**：`class; new; instanceof; constructor;`。
  * **模块化**：`export; import;`。
  * **箭头函数**：箭头函数与包围它的代码共享同一个 this。`() => {}; fun.bind(this);`。
  * **函数参数默认值**：`function foo(h = 50, c = 'red') {};`。
  * **模板字符串**：\`Your name is ${first} ${last}\`;。
  * **解构赋值**：`[a=5, b=7] = [1];  [a, b] = [b, a]; const { n, a } = s;`。
  * **延展操作符**：`[...[1, 2]]; [...obj, '4', ...'hello', 6];`。
  * **对象属性简写**：`student = { name };`。
  * **Promise**：异步编程串行化，避免了回调地狱。`new Promise((resolve, reject) => {});`。
  * **Let 与 Const**：填补块级作用域空白。
* ES7：来说明标准化的过程
  * **Array.prototype.includes()**：判断一个数组是否包含一个指定的值。
  * **指数操作符**：具有与 Math.pow(..) 相同的效果。``console.log(2**10);``。
* ES8：
  * **[升级] 延展操作符**：增加了对对象的支持，`let objClone = { ...obj }; `。
  * **Async/Await**：异步迭代器。
  * **Object.values()**：与 Object.keys() 类似，返回 Object 自身属性的所有值，不包括继承的值。
  * **Object.entries()**：返回一个给定对象自身可枚举属性的键值对的数组。`for(let [k,v] of Object.entries(obj)) {}`。
  * **String padding**：填充字符串达到当前长度。`String.prototype.padStart; String.prototype.padEnd;`。
  * **函数参数列表结尾允许逗号**：git 修改同一个函数减少不必要的行变更。
  * **Object.getOwnPropertyDescriptors()**：获取一个对象的所有自身属性的描述符,如果没有任何自身属性，则返回空对象。
  * **ShareArrayBuffer**：类似于 ArrayBuffer，表示一个通用的，固定长度的原始二进制数据缓冲区，但 SharedArrayBuffer 不能被分离。`new SharedArrayBuffer(length)`。
  * **Atomics**：提供了一组静态方法用来对 SharedArrayBuffer 对象进行原子操作（多线程共同读写时保证符合预期）。Atomics 的所有属性和方法都是静态的（与 Math 对象一样）。
* ES9：
  * **[升级] 异步迭代器**：Async/Await。`for await (let i of arr) {}; arr.forEach(async i => { await fun(i); }); `。
  * **[升级] Promise.finally()**：指定多个 Promise 统一执行完后最终的逻辑，不关注每一个的成功状态。
  * **[升级] Rest/Spread 属性**：允许我们将一个不定数量的参数表示为一个数组，只适用于每个对象的顶层而非嵌套。`restParam(p1, p2, ...p3)`。
  * **正则表达式命名捕获组**：`const reDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2}); const usDate = '2020-10-01'.replace(reDate, '$<month>-$<day>-$<year>');`。
  * **正则表达式反向断言**：分为肯定反向断言，否定反向断言。
  * **正则表达式 dotAll 模式**：`.` 匹配除回车外的任何单字符，标记 `s` 改变这种行为，允许行终止符的出现。`/hello.world/s.test('hello\nworld');`。
  * **正则表达式 Unicode 转义**：添加了 Unicode 属性转义——形式为 `\p{...}` 和 `\P{...}`
  * **非转义序列的模板字符串**。
* [ES10（ES 2019，ECMA-417）](https://ecma-international.org/publications/standards/Ecma-417.htm)：
  * **行分隔符（U + 2028）和段分隔符（U + 2029）**符号现在允许在字符串文字中，与 JSON 匹配。以前这些符号在字符串文字中被视为行终止符，使用它们会导致 SyntaxError 异常。
  * **[升级] JSON.stringify**：和 Unicode 有关。
  * **Array.flat() 和 Array.flatMap()**：本质上就是是归纳（reduce） 与 合并（concat）的操作。
  * **String.trimStart() 和 String.trimEnd()**：分别去除字符串首尾空白字符。
  * **Object.fromEntries()**：`Object.entries()` 返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致。`Object.fromEntries()` 则是 `Object.entries()` 的反转。可以将 Map 或 Array 转化为 Object。
  * **Symbol.prototype.description**：直接访问 Symbol('The description') 后的内容，使用 `sym.description` 而非 `String(sym.desc)`。
  * **String.prototype.matchAll**：查找字符串中所有正则表达式的匹配项和它们的位置。`str.matchAll(regexp)`。
  * **Function.prototype.toString()**：现在返回精确字符，包括空格和注释。`console.log(foo.toString()); // function /* comment */ foo /* another comment */ (){}`。
  * **修改 catch 绑定**：简化 `try {} catch(e) {}` 为 `try {} catch {}`。
  * **BigInt**：新的基本数据类型。创建比 2^53 - 1 还大的数，typeof 值为 bigint。`BigInt(1); 1n`。
  * **globalThis**：统一浏览器的 window 和 node 中的 global。
* [ES11（ES 2020，ECMA-262）](https://www.ecma-international.org/publications/standards/Ecma-262.htm)：
  * **Optional Chaining 可选链式调用**：`flower.species?.lily; flowers?.[1]; plantFlowers?.()`。
  * **Nullish Coalescing 空值合并**：`number ?? 7`。
  * **Private Fields 私有字段**：ES6 支持类语法，ES11 才引人私有字段，符号为 `#`。
  * **Static Fields 静态字段**：想使用类的方法，必须先实例化一个类，除非此方法为 static。
  * **Top Level Await 顶级 Await**：此前在顶级 await 必须使用 IIFE，现在直接顶级使用。
  * **Promise.allSettled 方法**：可以不关心数组中每个的 Promise 是否成功或失败，统一处理。`Promise.allSettled([a, b]).then(([a, b]) => {})`。
  * **Dynamic Import 动态引入**：`import('').then()`。

### [ES5] 什么是严格模式？

* 'use strict' 是用于对整个脚本或单个函数启用严格模式的语句。严格模式是可选择的一个限制 JavaScript 的变体的一种方式。
* 正常模式下，Javascript语言有两种变量作用域（scope）：全局作用域和函数作用域。严格模式创设了第三种作用域：eval作用域。
  * 严格模式下，eval 语句本身就是一个作用域，不再能够生成全局变量了，它所生成的变量只能用于 eval 内部。
* 诞生目的：
  * 消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为;
  * 消除代码运行的一些不安全之处，保证代码运行的安全；
  * 提高编译器效率，增加运行速度；
  * 为未来新版本的 Javascript 做好铺垫。
* 语法和行为的改变：
  * 全局变量必须显式声明。
  * 某些情况只允许静态绑定，以在编译阶段确定属性和方法的归属：禁止使用 with 语句、创设eval作用域。
  * 增强的安全措施：禁止 this 关键字指向全局对象、禁止在函数内部遍历调用栈。
  * 禁止删除变量。只能删除 configurable 为 true 的对象属性。
  * 显式报错：
    * 会引起静默失效（即不报错也没有任何效果）的赋值抛出异常。
    * 对只读属性进行赋值会显式的报错。
    * 对一个使用 getter 方法读取的属性进行赋值会报错。
    * 对禁止扩展的对象添加新属性会报错。
    * 删除一个不可删除的属性，会报错。只有 configurable 设置为 true 的对象属性，才能被删除。`Object.create(null, { 'x': { configurable: true }});`
  * 重名错误：对象不能有重名的属性、函数不能有重名的参数
  * 禁止八进制表示
  * arguments 对象的限制：
    * 不允许对 arguments 赋值
    * arguments不再追踪参数的变化
    * 禁止使用 arguments.callee
  * 函数必须声明在顶层：不允许在非函数的代码块内声明函数。如 `if` 中。
  * 新增了一些保留字（向后兼容）：implements, interface, let, package, private, protected, public, static, yield。
* 注意：
  * 无法访问 function.caller 和 function.arguments。
  * 以不同严格模式编写的脚本合并后可能导致问题。
    * 解决办法：将整个脚本文件包含在 IIFE 中， 并声明 `"use strict"`。

### 严格模式下知道函数调用关系

```javascript
"use strict"
function debugLine(message) {
  let e = new Error()
  let frame = e.stack.split("\n")[2]
  let lineNumber = frame.split(" ")[5]
  let functionName = frame.split(" ")[5]
  return functionName + ":" + lineNumber + " " + message
}

function myCallingFunction () {
  console.log(debugLine("error_message"))
}

myCallingFunction
```

## 模块化

> 重点关注标准、基础数据类型、新 API 特性

### ES 模块化发展史

* 社区解决方案 - 同步服务端 CommonJS & Node.js：
  * 暴露模块 - `module.exports`。
  * 暴露模块 - `exports`。
  * 加载模块 - `require()`。
* 社区解决方案 - 异步浏览器 AMD & RequireJS：
  * 定义：`define(id?, dependencies?, factory);`。
  * 加载：`require([module], callback);`。
* 社区解决方案 - 异步就近加载 CMD & SeaJS：
  * 定义：`define(id?, dependencies?, factory);`。
  * 依赖就近，用的时候再 `require`。
  * 需要使用把模块变为字符串解析一遍才知道依赖了那些模块。
* 官方解决方案 - ES6 import/export：
  * 导出 - 命名式导出。
  * 导出 - 默认导出：`export default {};`。
  * 导入：对应导出的命名式导出和默认导出。`import $, {each, map} from 'jquery';`。

### ES 模块化的具体特性？

* import, require 有什么不同的表现形式？
* 为什么说 ES6 的模块化是静态可分析的？-> Tree Shaking

```undefined
Module Syntax
Module :
     ModuleBody
ModuleBody :
     ModuleItemList
ModuleItemList :
     ModuleItem
     ModuleItemList ModuleItem
ModuleItem :
     ImportDeclaration
     ExportDeclaration
     StatementListItem
```

* 模块化概念
  - 命名空间：命名空间当前并非 JavaScript 一部分
  - 匿名函数表达式
  - 对象字面量
  - 闭包：从技术角度来讲，所有函数都是闭包
* 模块化意义
  - 避免命名冲突
  - 保护代码完整性
  - 隐藏复杂性
  - 降低代码改变带来的冲击
  - 代码组织
* 模块化缺点：不能测试私有部分、拓展对象
* 模块化编程
  - 重要思想：通过模块模式来内化逻辑复杂性，并提供公有 API，这是 JavaScript 的封装实现方式
  - 模块对于 JavaScript 而言是特殊的构造函数，该类型函数通常被称为 IIFE 立即调用函数表达式
  - 模块内部返回带有公有函数的对象字面量，该对象字面量作为模块的公有 API
  - 典型模块模式：使用全局变量作为模块模式
  - 揭示模式：简化了返回的对象（API）
  - 对于 AMD/CommonJS 模块，不需要赋值给全局变量
  - 广义上，作用域指应用的某部分到相同应用另一部分的可达性
  - 坚持使用 SRP 单一职责原则设计模块
* 模块间交互方式
  - 直接通过模块 API 交互
    - A 直接调用 B 的 API 与 B 交互，B 被称为 A 的依赖
    - 传统模块模式：在模块尾部括号内声明依赖，并通过参数访问列表来访问这些依赖
  - 通过发布/订阅模式的事件聚合模式的方式
    - 基于经典的观察者模式：observable 广播给 observer
    - 发布/订阅模式通常由一个中间服务代表另一个对象发布
    - 分为基本通知类型、带有数据的通知类型
* 模块加载及依赖管理
  - 将模块合并到尽可能少的文件中去
  - 异步模块 AMD
    - define 声明模块
    - require 导入模块
  - RequireJS 基础知识
    - data-main 入口
    - requirejs.config()
    - baseURL
    - path

### 什么是模块模式

- 在模块内部功能与公开功能之间划定了清晰界限
- 可访问性控制
- 创建公有 API
  - 返回对象字面量
  - 让函数立即返回
  - 闭包构造
- 允许全局导入
  - 使得代码易读
  - 加速解释器的变量解释过程
- 优良特性
  - 用模块封装内部代码，避免变量及函数污染全局命名空间
  - 创建应用编程接口，提供对内部功能的访问控制
- 创建模块的命名空间

```javascript
// 创建模块的命名空间
var moduleName = (function () {
    var someVar;
    // 整体闭包构造
    function someFunction () {
    }
    return {
        // 返回 对象字面量
        someFunction: someFunction
    }
})(); // IIFE
```

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

> https://www.ghosind.com/2019/04/13/js-proxy

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

### 如何理解 Symbol？

* Symbol 本质上是一种唯一标识符，可用作对象的唯一属性名，这样其他人就不会改写或覆盖你设置的属性值。
* Symbol 数据类型的特点是唯一性，即使是用同一个变量生成的值也不相等。
* Symbol 数据类型的另一特点是隐藏性，for···in，object.keys() 不能访问。
  * Object.getOwnPropertySymbols 方法会返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
* 作用：
  * 作为属性名避免属性名冲突，
  * 替代代码中多次使用的字符串（例如：abc），多次使用的字符串在代码中不易维护，而这时候定义一个对象的属性（属性名用Symbol格式），值为abc，就可以作为全局变量来使用了。
  * 由于以Symbol值作为名称的属性，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法。
  * 这个有时，我们希望重新使用同一个Symbol值，Symbol.for方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值。

## 如何理解 Web Components？

* 相比第三方框架，原生组件简单直接，符合直觉，不用加载任何外部模块，代码量小。目前，它还在不断发展，但已经可用于生产环境。
* **Custom elements（自定义元素）：**一组JavaScript API，允许您定义custom elements及其行为，然后可以在您的用户界面中按照需要使用它们。
  * 为了区别，自定义元素的名称必须包含连词线.
* **Shadow DOM（影子DOM）**：一组JavaScript API，用于将封装的“影子”DOM树附加到元素（与主文档DOM分开呈现）并控制其关联的功能。通过这种方式，您可以保持元素的功能私有，这样它们就可以被脚本化和样式化，而不用担心与文档的其他部分发生冲突。
  * [Shadow DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=zh-cn) 是一种浏览器技术，它解决了构建网络应用的脆弱性问题。Shadow DOM 修复了 CSS 和 DOM。它在网络平台中引入作用域样式。 无需工具或命名约定，你即可使用原生 JavaScript 捆绑 CSS 和标记、隐藏实现详情以及编写独立的组件。
* **HTML templates（HTML模板）：** [` 和 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/slot) 元素使您可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。