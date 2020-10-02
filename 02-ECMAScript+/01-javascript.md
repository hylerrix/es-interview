# JavaScript 基础知识

## DOM 和 BOM 是什么？

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
  * 打开关闭窗口：`open; close;`
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



## new 的原理与实现？

* 创建一个新的空对象
* 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）
* 执行构造函数中的代码（为这个新对象添加属性）
* 如果这个函数有返回值，则返回；否则，就会默认返回新对象。

```javascript
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    console.log(this.name)
  }
}

function myNew() {
  // 创建一个空对象
  let obj = {}
  // 获取构造函数
  let Con = [].shift.call(arguments)
  // 设置空对象的原型
  obj.__proto__ = Con.prototype
  // 绑定this
  let res = Con.apply(obj, arguments)
  // 返回新对象
  return res instanceof Object ? res : obj
}

var person = myNew(Person, 'Nicholas', 29, 'Front-end developer');
// var person = new Person('Nicholas', 29, 'Front-end developer'); 

console.log(person.name) // Nicholas
person.sayName();        // Nicholas
console.log(person.__proto__ === Person.prototype);   // true
```

## call()、apply()、bind() 的原理与实现？

* call：传入多个参数，第一个参数是 this 的指向，之后的参数都是函数的参数
* apply：传入两个参数，第一个参数是 this 的指向，第二个参数是函数参数组成的数组
* bind：创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被 bind 的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。
* 场景用途：
  * 在 ES6 解构赋值之前，可以用 apply 给函数传入参数数组。



## 闭包和 IIFE 的概念与实战？



* IIFE 可以达到不暴露私有成员的目的





* DOM 冒泡机制

- this 指针
- 闭包、原型链
- let、const、var 区别及变量提升
- 隐式类型转换、事件代理
- setTimeout、setInterval 与 requestAnimationFrame
- 作用域链与执行上下文
- 异步原理及其发展史
- typeof、instanceof

> 宏任务、微任务

• 宏任务
• 分类：setTimeout、setInterval、requestAnimationFrame、DOM 事件回调、Ajax 回调
• 宏任务队列：第一个宏任务队列中，只有一个任务：执行主线程 js 代码；可以有多个宏任务队列；每次准备取出第一个宏任务执行前，都要将所有的微任务一个一个取出来执行
• 微任务
• 分类new Promise().then(这个回调)、process.nextTick、mutation 回调
• 微任务队列：只有一个微任务队列；在上一个宏任务队列执行完成后如果有微任务队列就会执行微任务队列所有任务

> 闭包

• 密闭的容器，主要存储数据
• 闭包是一个对象，存放数据的格式：key：value
• 形成条件：
• 函数嵌套
• 内部函数引用外部函数的局部变量
• 出现和销毁？ 
• 优点：延长外部函数局部变量的生命周期
• 缺点：容易造成内存泄漏
• 注意：合理使用，用完销毁

> 错误处理

常见的内置错误的类型：

- Error：所有错误的父类型
- Reference：引用的变量不存在
- TypeError：数据类型不正确
- RangeError：数据值不在其所允许的范围内
- SyntaxError：语法错误
- ......

错误处理：

- try catch
- throw error

错误对象

- message 属性：错误相关信息
- stack 属性：函数调用栈记录信息





## 基础类型

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
* apply、bind、call
* Number & BigInt 常见考题：
  * 大数操作
  * 0.1+0.2 == 0.3？原因？
* 链式调用：add(2, 5)，add(2)(5)，add(1)(1)(5) 的结果都为 7

## 特殊关键字

* NaN == NaN，null == undefined
* arguments 的使用
* 实现 stringify 序列化函数

## 面向对象 & 函数式

* JavaScript 继承方式的实现方案？
* 实现柯里化
* function a () {} 和 var a = function () {} 区别、变量提升



## 应用类

* 防抖、节流函数

* setTimeout、promise 的使用
* function request(urls, maxNumber, callback) 要求编写函数实现，根据urls数组内的url地址进行并发网络请求，最大并发数maxNumber,当所有请求完毕后调用callback函数(已知请求网络的方法可以使用fetch api)
* getUrlParams(url,key)

