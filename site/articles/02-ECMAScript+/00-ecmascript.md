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

## 数据类型

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

* JS 的 Number 类型遵循的是 IEEE 754 标准，使用的是 64 位固定⻓度来表示。

* IEEE 754 浮点数由三个域组成，分别为 sign bit (符号位)、exponent bias (指数偏移值) 和 fraction (分数值)。64 位中，sign bit 占 1 位，exponent bias 占 11 位，fraction 占 52 位。
* 以 0.1 转换为 IEEE 754 标准表示为例解释一下如何求 exponent bias 和 fraction。转换过程主要经历 3 个过程：
  * 将 0.1 转换为二进制表示。
  * 将转换后的二进制通过科学计数法表示。
  * 将通过科学计数法表示的二进制转换为 IEEE 754 标准表示。

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

### BigInt 有哪些操作？

* JavaScript中Number.MAX_SAFE_INTEGER表示最大安全数字,计算结果是9007199254740991，即在这个数范围内不会出现精度丢失(小数除外)。 但是一旦超过这个范围，js就会出现计算不准确的情况，这在大数计算的时候不得不依靠一些第三方库进行解决，因此官方提出了BigInt来解决此问题。

### 什么是关联数组？

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

关联数组和索引数组的遍历效率问题。

遍历赋值以下数组时，第一次耗费时间差不多，浏览器默认优化之后，arr2 作为 Array 而非 Object 存取速度更快。

```javascript
var arr = new Array(50000000);
var arr2 = {};
```

### 什么是 JSON？

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

### JS 常见类型 与 JSON 的区别？

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

