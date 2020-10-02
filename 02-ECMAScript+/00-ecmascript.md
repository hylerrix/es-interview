# ECMAScript

> 重点关注标准和版本特性

## ES 标准及其流程？

* ECMAScript 是 ECMA 制定的标准化脚本语言。

* ECMA 规范最终由 TC39 敲定。TC39 由包括浏览器厂商在内的各方组成，他们开会推动 JavaScript 提案沿着一条严格的发展道路前进。

* TC39 的新特性提案：https://github.com/tc39/proposals
* ECMAScript 新闻：https://www.ecma-international.org/news/index.html
* 从提案到入选ECMA规范主要有以下几个阶段：
  * Stage 0: strawman——最初想法的提交。
  * Stage 1: proposal（提案）——由 TC39 至少一名成员倡导的正式提案文件，该文件包括 API 示例。
  * Stage 2: draft（草案）——功能规范的初始版本，该版本包含功能规范的两个实验实现。
  * Stage 3: candidate（候选）——提案规范通过审查并从厂商那里收集反馈。
  * Stage 4: finished（完成）——提案准备加入ECMAScript，但是到浏览器或者Nodejs中可能需要更长的时间。

## 关键字与保留字？

## ES ~5 特性发展史？

## ES 6+ 新特性概要？

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

## ECMAScript 模块化发展史



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

## ES 模块化的具体区别

import, require 有什么不同的表现形式？

## this 与箭头函数的特点？

* this 有四种绑定：和调用位置有关，和定义位置无关
  * 默认绑定：在非严格模式下，this 就是全局对象，否则是 undefined。`foo()`。
  * 隐式绑定：`o.foo()`。
  * 显示绑定：如果 foo 是通过 call、apply 或者 bind 调用的，那么这种调用就是显式绑定。`foo.call(obj)`。
  * new 关键字绑定。
* 箭头函数的特点：和定义位置有关，和调用位置无关
  * 无视 this 的四种绑定规则。
  * this 的值就是函数创建时候所在的 lexical scope 中的 this，而和调用方式无关。
* 绑定规则优先级：箭头函数 > 关键字 new 调用 > 显式绑定 > 隐式绑定 > 默认绑定

## 变量提升？



## setTimeOut 和 setInterval 原理？