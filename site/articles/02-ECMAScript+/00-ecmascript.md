# ECMAScript

> 重点关注标准本身

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

## 模块化

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

```
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

## 重点基础概念

### 如何理解闭包？

* 特点：
  * 用来包装私有变量
  * 形成一个不销毁的栈环境
  * 匿名函数可以访问父级作用域的变量
* 缺点：容易内存泄漏
* 场景：内部计数器

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

### 如何理解作用域链？

### 如何理解变量提升（var/let/const）？

* 编译器预编译的时候，第一步只会记录变量和函数的定义，第二步才会执行程序。
  * 所有这些函数和变量声明都被添加到名为词法环境的 JavaScript 数据结构内的内存中。
* var 会变量提升，初始值为 undefined
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

### 如何理解 JSON？

* JSON 对象包含两个方法：

  * 用于解析 JavaScript Object Notation  (JSON) 的 parse() 方法
  * 以及将对象/值转换为 JSON 字符串的 stringify() 方法。
  * 除了这两个方法, JSON 这个对象本身并没有其他作用，也不能被调用或者作为构造函数调用。
  * 把数据结构或者对象转换成某种格式的过程称为「序列化」
  * 而将序列化过程的结果反向转换回某种数据结构或对象的过程称为「反序列化」。

* JSON 的本质

  * JSON 指的是 JavaScript 对象表示法（JavaScript Object Notation）
  * JSON 是轻量级的文本数据交换格式
  * JSON 独立于语言，JSON 解析器和 JSON 库支持许多不同的编程语言。
  * JSON 具有自我描述性，更易理解

* JSON 风格指南：

  * 所有的属性名必须在双引号内。
  * JSON对象中不包含注释。
  * JSON中的数据元素应以扁平化方式呈现。不能为了方便而将数据任意分组。
  * 选择有意义的属性名。

  - - 属性名应该是具有定义语义的有意义的名称。
    - 属性名必须是驼峰式的，ASCII 码字符串。
    - 首字符必须是字母，下划线(_)或美元符号($)。
    - 随后的其他字符可以是字母，数字，下划线(_)或美元符号($)。
    - 应该避免使用 Javascript 中的保留关键字

  - 在 JSON Map 中键名可以使用任意 Unicode 字符。

JS 常见类型 与 JSON 的区别：

| JavaScript类型 | JSON 的不同点                                                |
| -------------- | ------------------------------------------------------------ |
| 对象和数组     | 属性名称必须是双引号括起来的字符串；最后一个属性后不能有逗号。 |
| 数值           | 禁止出现前导零（ JSON.stringify 方法自动忽略前导零，而在 JSON.parse 方法中将会抛出 SyntaxError）；如果有小数点, 则后面至少跟着一位数字。 |
| 字符串         | 只有有限的一些字符可能会被转义；禁止某些控制字符； Unicode 行分隔符 （U+2028）和段分隔符 （U+2029）被允许 ; 字符串必须用双引号括起来。请参考下面的示例，可以看到 JSON.parse() 能够正常解析，但将其当作JavaScript解析时会抛出 SyntaxError 错误： |

```
let code = '"\u2028\u2029"';
JSON.parse(code);  // 正常
eval(code);  // 错误
```

* JSON.parse()：解析 JSON 字符串并返回对应的值，可以额外传入一个转换函数，用来将生成的值和其属性, 在返回之前进行某些修改。
* JSON.stringify()：返回与指定值对应的JSON字符串，可以通过额外的参数, 控制仅包含某些属性, 或者以自定义方法来替换某些 key 对应的属性值。
* JSON Polyfill：JSON 对象可能不被老版本的浏览器支持。可以将下面的代码放到JS脚本最开始的位置，这样就可以在没有原生支持 JSON 对象的浏览器（如IE6）中使用 JSON 对象。

## 疑难对比

### setTimeOut/setInterval/requestAnimationFrame？

### constructor/typeof/instanceof 的区别？

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

### 对象字面量 vs 构造函数创建对象的对比？

> 在 JavaScript 中，我们可以通过 new 关键字、Object.create() 函数创建一个对象，或者使用字面量记法(也称对象初始化器材——object initializer)。字面量记法使用花括号定义对象，对象的 Property 与值以名称 - 值对的方式组织，用冒号分隔。我们还需要在每个名称 - 值对的最后加上逗号(除了最后一个名称 - 值对)。值可以包含变量、函数，或者其他对象。
>
> —— 《 SPA 设计与架构 》

字面量的优势：

- 它的代码量更少，更易读；
- 它可以强调对象就是一个简单的可变的散列表，而不必一定派生自某个类；
- 对象字面量运行速度更快，因为它们可以在解析的时候被优化：它们不需要"作用域解析(scope resolution)"；因为存在我们创建了一个同名的构造函数 Object() 的可能，当我们调用 Object() 的时候，解析器需要顺着作用域链从当前作用域开始查找，如果在当前作用域找到了名为Object()的函数就执行，如果没找到，就继续顺着作用域链往上照，直到找到全局 Object() 构造函数为止
- Object() 构造函数可以接收参数，通过这个参数可以把对象实例的创建过程委托给另一个内置构造函数，并返回另外一个对象实例，而这往往不是你想要的。

### this 与箭头函数的规则和特点？

* this 有四种绑定：和调用位置有关，和定义位置无关
  * 默认绑定：在非严格模式下，this 就是全局对象，否则是 undefined。`foo()`。
  * 隐式绑定：`o.foo()`。
  * 显示绑定：如果 foo 是通过 call、apply 或者 bind 调用的，那么这种调用就是显式绑定。`foo.call(obj)`。
  * new 关键字绑定：构造函数中。
* 箭头函数的特点：和定义位置有关，和调用位置无关
  * 无视 this 的四种绑定规则。
  * this 的值就是函数创建时候所在的 lexical scope 中的 this，而和调用方式无关。
  * 箭头函数中无法使用 `function.arguments` 对象。
* 绑定规则优先级：箭头函数 > 关键字 new 调用 > 显式绑定 > 隐式绑定 > 默认绑定

* this 是 JavaScript 语言的一个关键字，函数调用的方式决定了 this 的值，this 取值符合以下标准：
  * 在调用函数时使用 new 关键字，函数内的 this 是一个全新的对象。
  * 如果 apply、call 或 bind 方法用于调用、创建一个函数，函数内的 this 就是作为参数传入这些方法的对象。
  * 当函数作为对象里的方法被调用时，函数内的 this 时调用该函数的对象。比如当 obj.method() 被调用时，函数内的 this 将绑定到 obj 对象。
  * 如果调用函数不符合上述规则，那么 this 的值指向全局对象。浏览器环境下 this 的值指向 window 对象，但是在严格模式下('use strict')，this 的值为 undefined。
  * 如果符合上述多个规则，则较高的规则(1 号最高，4 号最低)将决定 this 的值。
  * 如果该函数是 ES2015 中的箭头函数，将忽略上面的所有规则，this 被设置为它被创建时的上下文。

