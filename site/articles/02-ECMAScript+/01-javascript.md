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
  // 绑定 this
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

> 参考：[进击的前端面试 - 知乎专栏](https://www.zhihu.com/column/c_1155423857010659328)

* call：【显示调用】传入多个参数，第一个参数是 this 的指向，之后的参数都是函数的参数。
* call 做了三件事：`person.fullName.call(person1, "Hello, ");`。
  * 显示地改变 this 的指向为第一个参数。
  * 从 call 的第二个参数开始，都传递给调用 call 的函数中。
  * 不改变调用函数本身内部，调用函数不使用 call 时会和 call 不再有关系。
* `foo.call(this, arg1, arg2, arg3) == foo.apply(this, arguments) == this.foo(arg1, arg2, arg3);`。
* call 的使用场景：
  * 让类数组使用数组的方法：`Array.prototype.slice.call(arguments)`

```javascript
Function.prototype.myOwnCall = function(context) {
  context = context || window;
  // 给想让 this 指向的对象临时添加一个 fn，while 来确保此 fn 是独特的。
  var uniqueID = "00" + Math.random();
  while (context.hasOwnProperty(uniqueID)) {
    uniqueID = "00" + Math.random();
  }
  context[uniqueID] = this;
  // 使用 eval 而不使用新特性 …Array.from(arguments).slice(1) 时。
  var args = [];
  for (var i = 1; i < arguments.length; i++) {  
    args.push("arguments[" + i + "]");
  }
  var result = eval("context[uniqueID](" + args + ")");
  // 由于不能改变想让 this 指向的对象，再次删掉临时建立的属性。
  delete context[uniqueID];
  return result;
}

var person = {
  fullName: function(txt) {
    console.log(txt + this.firstName + " " + this.lastName);
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.call(person1, "Hello, ");  // 输出 "Hello, John Doe"
person.fullName.myOwnCall(person1, "Hello, ");  // 输出 "Hello, John Doe"
```

* apply：【显示调用】传入两个参数，第一个参数是 this 的指向，第二个参数是函数参数组成的数组。
  * 在 ES6 解构赋值之前，可以用 apply 给函数传入参数数组。

```javascript
// myOwnApply，相比 myOwnCall，只需要注意一下，第二个参数是否存在就可以。
Function.prototype.myOwnApply = function(context, arr) {
  context = context || window
  var uniqueID = "00" + Math.random();
  while (context.hasOwnProperty(uniqueID)) {
    uniqueID = "00" + Math.random();
  }
  context[uniqueID] = this;

  var args = [];
  var result = null;
 
  if (!arr) {
    result = context[uniqueID]();
  } else {
    for (var i = 0; i < arr.length; i++) { 
      args.push("arr[" + i + "]");
    }
    result = eval("context[uniqueID](" + args + ")");
  }
  delete context[uniqueID];
  return result;
}
```

* bind：【隐式调用】创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被 bind 的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。
* bind 做了四件事：`greeting.bind(obj, 'the world')('JS')`。
  * 改变调用者中 this 的指向，之后返回一个函数。
  * 调用 bind 时，除了第一个代表 this 的指向，还能传递参数给调用者。
  * 调用生成的“绑定函数”时，再传入剩余参数。
  * 生成的“绑定函数”也可以使用 new 运算符构造，提供的 this 值会被忽略，但前置参数仍会提供给模拟函数。

```javascript
Function.prototype.myBind = function() {
  // this 保存在 thatFunc，否则 this 的指向会根据场景的不同而改变。
  // 取出 thatArg。
  var thatFunc = this,
      thatArg = arguments[0];
  // 获取除第一个外的参数列表，继续传入到返回的参数中。
  var args = Array.prototype.slice.call(arguments, 1);
  // 确保 thatFunc 是个函数，否则报错。
  if (typeof thatFunc !== 'function') {
    throw new TypeError('Function.prototype.bind - ' +
      'what is trying to be bound is not callable');
  }
  // 由于 bind 不是立即执行的，所以要返回一个函数。
  var fBound  = function() {
    // 使用了 apply 改变指向
    // 如果是在 new 关键字调用情况下，会指向 newObj，而 newObj 就是 fBound 的实例，this instanceof fBound 就是true，我们不再使用 thatArg 作为 greeting 的 this，而是直接使用 newObj 作为 greeting 的 this。
    // 而当做普通函数调用的时候，this instanceof fBound 就是 false，greeting 中的 this 依然指向 thatArg。
    return thatFunc.apply(this instanceof fBound
      ? this·
      : thatArg,
      // 拼凑
      args.concat(Array.prototype.slice.call(arguments)));
  };
  // 中间变量 fNOP 空函数，来维护原型关系，并让 fBound.prototype 与 thatFunc.prototype 不再指向同一个原型函数。
  // 确保 fBound 的 prototype 修改时，greeting 的 prototype 不会被修改。
  var fNOP = function() {};
  if (thatFunc.prototype) {
    // 把 fBound 的 prototype 修改为绑定函数的 prototype，这样 newObj 就可以“继承”自 greeting 了。
    fNOP.prototype = thatFunc.prototype; 
  }
  fBound.prototype = new fNOP();
  return fBound;
}

var obj = { name:"Smiley" };
var greeting = function(str, lang){
    this.value = 'greetingValue';
    console.log("Welcome "+this.name+" to "+str+" in "+lang);
};
// var objGreeting = greeting.bind(obj, 'the world');
var objGreeting = greeting.myBind(obj, 'the world'); 
objGreeting('JS'); // Welcome Smiley to the world in JS
```

## Promise 的原理与实现？



## 闭包和 IIFE 的概念与实战？

* IIFE 可以达到不暴露私有成员的目的
* 能够在 IIFE 完成执行后任维系着内部功能的生存期。
* IIFE，Immediately Invoked Function Expressions，代表立即执行函数。
* IIFE 的外层括号不是必须的，因为 IIFE 是一个函数表达式。

闭包，closure，概念最早提出在 1964 年，1975 年最早实现，是函数和声明该函数的词法环境的组合。词法作用域中使用的域，是变量在代码中声明的位置所决定的。

闭包就是能够读取其他函数内部变量的函数。

Javascript语言的特殊之处，就在于函数内部可以直接读取全局变量。另一方面，在函数外部自然无法读取函数内的局部变量。本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

* 为什么使用闭包：
  * 利用闭包实现数据私有化或模拟私有方法，这个方式也称为模块模式。
  * 部分参数函数柯里化。
* 如何从外部读取局部变量？
  * 那就是在函数的内部，再定义一个函数。这就是 JavaScript 语言特有的"链式作用域"结构(chain scop)，子对象会一级一级地向上寻找所有父对象的变量。
* 使用闭包的注意点
  * 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
  * 闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

## 待做

* DOM 冒泡机制

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



## 基础类型 - Object

## 基础结构 - 数组

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



## 高阶函数的原理及 map/filter/reduce 实现？

高阶函数是至少满足下列一个条件的函数：

* 接受一个或多个函数作为输入
* 输出一个函数

```javascript
Array.prototype.myMap = function(func) {
  let results = [];
  for (let i=0;i<this.length;i++) {
    results.push(func(this[i], i, this));
  }
  return results;
}
const array = [1, 4, 9, 16];
const map1 = array.myMap(x => x * 2);
console.log(map1);
const map2 = array.map(x => x * 2);
console.log(map2);
```

```javascript
Array.prototype.myFilter = function(func) {
  let results = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      results.push(this[i]);
    }
  }
  return results;
}
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result1 = words.myFilter(word => word.length > 6);
console.log(result1);
const result2 = words.filter(word => word.length > 6);
console.log(result2);
```

```javascript
Array.prototype.myReduce = function(func, init) {
  let accum = init;
  for (let i=0;i<this.length;i++) {
    accum = func(accum, this[i], i, this);
  }
  return accum;
}
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// 5 + 1 + 2 + 3 + 4
console.log(array1.myReduce(reducer, 5));
```

## 函数柯里化及其实现？

柯里化是把接受多个参数的函数变换成接受一个单一参数的函数，并且返回接受余下参数的新函数的技术。`sum(2, 3); sum(2)(3);`。

```javascript
function curry(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var innerArgs = Array.prototype.slice.call(arguments);
    var finalArgs = args.concat(innerArgs);
    return fn.apply(null, finalArgs);
  }
}

// 自动检测参数是否传递完毕
function curry(fn) {
  return function currify() {
    const args = Array.prototype.slice.call(arguments);
    return args.length >= fn.length ?
      fn.apply(null, args) :
    currify.bind(null, ...args);
  }
}
```

## 数组扁平化操作？

```javascript
// 递归
function flatten(arr) {
    if (!Array.isArray(arr)) {
        return [arr];
    }
    let res = [];
    for (let i=0;i<arr.length;i++) {
        res.push(...flatten(arr[i]));
   }
   return res;
}

const arr = [1, [2, [3, 4, [5]]]];
console.log(flatten(arr));
```

```javascript
// 迭代
function flatten2(arr) {
  const stack = [...arr];
  const res = [];
  while (stack.length) {
    // 从栈里取出
    const next = stack.pop();
    if (Array.isArray(next)) {
      // 把next扁平化，然后放入stack中
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // reverse to restore input order
  return res.reverse();
}

console.log(flatten2(arr));
```

```javascript
// generator 异步迭代
function* flatten3(arr) {
    let length = arr.length;
    for (let i=0; i<length; i++) {
        let item = arr[i];
        if (Array.isArray(item)) {
    	    yield* flatten3(item);
        } else {
    	    yield item;
        }
    }
} 

let res = [];
for (let f of flatten3 (arr)) {
    res.push(f);
}
console.log(res);
```



## 单线程模型是怎么样的？



## 消息队列与事件机制是什么？



## XMLHttpRequest 实现 Ajax

```javascript
function ajax(url, fnSucc, fnFaild) {
  var xhttp;
  // 第一步：创建 XMLHttpRequest 对象
  if (window.XMLHttpRequest) {
      // 现代浏览器
      xhttp = new XMLHttpRequest();
   } else {
      // IE6 等老版本浏览器
      xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  // 第四步：处理响应
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        fnSucc(xhttp.responseText)
      } else {
      	if (fnFaild) fnFaild(xhttp.responseText)
      }
    } 
  };
  // 第二步：初始化 XMLHttpRequest 方法
  xhttp.open('GET', url);
  // 第三步：XMLHttpRequest 向服务器发送请求
  xhttp.send();
}

ajax('/smileyFace', mySuccessFunc, myFailFunc);
```

## 怎么理解原型链？

```javascript
console.log(Person === Person.prototype.constructor);
console.log(person.__proto__ === Person.prototype);
```

## 怎么理解作用域链？

## 节流和防抖怎么实现？

```javascript
// https://zhuanlan.zhihu.com/p/87591677
function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};
 
  var later = function() {
    previous = options.leading === false? 0: Date.now(); 
    timeout = null;
    result = func.apply(context, args);
  };
 
  var throttled = function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
  	context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  }
  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };
  return throttled;
}
```

```javascript
// https://zhuanlan.zhihu.com/p/86426949
function debounce(func, wait, immediate) {
  var timeout, result;
  var debounced = function() {
  var context = this;
  var args = arguments;
  if (timeout) clearTimeout(timeout);
    var later = function() {
      timeout = null;
      if (!immediate) result = func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    timeout = setTimeout(later, wait);
    if (callNow) result = func.apply(this, args);
    return result;
  }
  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };
  return debounced;
}
```

## JavaScript 内置全局对象有哪些？

没有 Web 浏览器宿主环境的条件下，对于任何 JavaScript 程序，在程序开始之前，JavaScript 解释器都会初始化一个全局对象供程序使用，通过使用该 JavaScript 全局对象，可以访问所有预定义的全局属性、全局普通函数、全局构造函数和全局对象。这些预定义的全局 XX 都是“JS全局对象”的属性。此“JS全局对象”没有名称，可以在全局作用域内使用 this 关键字或引用“JavaScript 全局对象”。

- 基本对象
  - 内置异常：EvalError、RangeError、ReferenceError、SyntaxError、TypeError、URIErro
  - Object、Function、Boolean
- 反射：Proxy、Reflect
- 控制对象：Generator、GeneratorFunction、Iterable、Promise
- 数值和时间：Date、Math、Number
- 文本处理：RegExp、String
- 结构化数据：ArrayBuffer、DataView、JSON
- 键值对集合：Map、Set、WeakMap、WeakSet
- 索引集合：Array、TypedArray：Float32Array、Float64Array、Int16Array、Int32Array、Int8Array、Uint16Array、Uint32Array、Uint8Array、Uint8ClampedArray
- 全局对象
  - 全局对象的值属性：Infinity、NaN、undefined
  - 全局对象的其它属性：JSON、Math、Reflect
  - 全局对象的构造器属性：Array、ArrayBuffer、Boolean、DataView、Date、Error、EvalError、Float32Array、Float64Array、Function、Int16Array、Int32Array、Int8Array、Map、Number、Object、Promise、Proxy、RangeError、ReferenceError、RegExp、Set、String、Symbol、SyntaxError、TypeError、Uint16Array、Uint32Array、Uint8Array、Uint8ClampedArray、URIError、WeakMap、WeakSet

Web 浏览器这个宿主环境中特有的 JavaScript 全局对象为“window 全局对象”，“window 全局对象” 提供了与当前窗口、页面有关的诸多属性与方法。除了这些与浏览器有关的全局属性和方法，window 对象还封装了“JavaScript 内置全局对象”，并向外暴露“JavaScript 内置全局对象的属性与接口”。因此，当进行浏览器端 JavaScript 编程时，只需关心“window 全局对象”即可。

## JSON 是什么？

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

## 什么是 JavaScript 关联数组？

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

##### 关联数组和索引数组的遍历效率问题

遍历赋值以下数组时，第一次耗费时间差不多，浏览器默认优化之后，arr2 作为 Array 而非 Object 存取速度更快。

```javascript
var arr = new Array(50000000);
var arr2 = {};
```

## 如何区分 Object 和 Array

- 利用 toString() 方法

```javascript
function isArrayOne (arr) {  
    return Object.prototype.toString.call(arr) === "[object Array]"
}  
var obj = {"k1":"v1"};  
var arr = [1,2];  
console.log("对象的结果："+isArrayOne(obj));  // false
console.log("数组的结果："+isArrayOne(arr));  // true
```

- 利用 isArray，使用 Javascript 1.8.5(ECMAScript 5)，变量名字.isArray( ) 可以实现这个目的，前提是支持这一函数。其实 isArray() 就是利用 toString() 方法的封装使用。

```javascript
function isArray(obj) {  //obj 是待检测的对象，如果返回 true 则为数组
    if (Array.isArray) {  
        return Array.isArray(obj);  
    } else {  
     return Object.prototype.toString.call(obj)==="[object Array]";  
    }  
}
```

- 通过 instanceof 运算符来判断(instanceof运算符左边是子对象，即待测对象，右边是父构造函数，这里是 Array)。instance 实例：凡是用 new 构造函数创建出的对象，都称为是构造函数的实例。

```javascript
var obj = {"k1":"v1"};  
var arr = [1,2];
console.log("Instanceof处理对象的结果："+(obj instanceof Array));  
console.log("Instanceof处理数组的结果："+(arr instanceof Array));
```

- 使用 isPrototypeOf() 函数检测一个对象是否是 Array 的原型，或处于原型链中。不但可检测直接父对象，还可检测整个原型链上的所有父对象。

```javascript
Array.prototype.isPrototypeOf(arr) // true 表示是数组，false 不是数组
```

- 利用构造函数 constructor

```javascript
var obj = {'k':'v'};  
var t1 = new Array(1);  
var t2 = t1;  
console.log(obj.constructor == Array);  // false
console.log(t1.constructor == Array);  // true
console.log(t2.constructor == Array);  // true
```

- 使用 typeof + arr.concat 结合判断，局限性在于如果开发者定义了 concat 属性，便会引起冲突

```javascript
function isArrayFour (arr) {  
    if (typeof(arr)==="object") {  
        if (arr.concat) {  
            return "This is Array";  
        } else {  
            return "This Not Array";  
        }  
    }  
}  
var arr = [1];  
var obj = {'k':'v'};  
console.log(typeof(arr));  
console.log(typeof(obj));  
console.log(isArrayFour(arr));  
console.log(isArrayFour(obj));
```

## 如何遍历对象和数组

* 对象遍历
  - for in 循环：`for (var property in obj) { console.log(property); }`。但这会遍历到它的继承属性，在使用前需要加入 `obj.hasOwnProperty(property)` 检查。
  - Object.keys()：`Object.keys(obj).forEach(function (property) { ... })`。
  - Object.getOwnPropertyNames()：`Object.getOwnPropertyNames(obj).forEach(function (property) { ... })`。Object.getOwnPropertyNames() 方法返回一个由指定对象的所有自身属性的属性名(包括不可枚举属性但不包括 Symbol 值作为名称的属性)组成的数组。
* 数组遍历
  - for loop：`for (var i = 0; i < arr.length; i++)`。这里的常见错误是 var 是函数作用域而不是块级作用域。ES2015 引入了块级作用域 let，建议使用。
  - forEach：`arr.forEach(function (el, index) { ... })`。这个语句结构有时会更精简，不必使用 index。还有 every 和 some 方法可以提前终止遍历。

## 浅拷贝与深拷贝

- 数组浅拷贝

```javascript
var a = [1, 1],
    b = a;
console.log(a === b) // true
```

- 数组深拷贝

```javascript
function cloneObj(obj) {
    var tempObj = {};
    
    if (obj instanceof Array) {
        tempObj = [];
    }
    
    for (var prop in obj) {
        if (typeof prop === 'Object') {
            cloneObj(prop);
        }
        
        tempObj[prop] = obj[prop];
    }
    
    return tempObj;
}

var myCountry = {
    name: 'China',
    birth: 1949
}

var country = cloneObj(myCountry);

console.log(country === myCountry); // false
```

## JavaScript 事件机制

> 事件冒泡、事件捕获和事件委托

**事件流**：

* 事件流被分为三个阶段(15)捕获过程、(56)目标过程、(6~10)冒泡过程。

* IE 提出的是冒泡流，而网景提出的是捕获流，后来在 W3C 组织的统一之下，JS 支持了冒泡流和捕获流，但是目前低版本的 IE 浏览器还是只能支持冒泡流(IE6, IE7, IE8 均只支持冒泡流)，所以为了能够兼容更多的浏览器，建议大家使用冒泡流。

* 从事件传播的过程能够看出来，当点击鼠标后，会先发生事件的捕获
  * 捕获阶段：首先 window 会获捕获到事件，之后 document、documentElement、body 会捕获到，再之后就是在 body 中 DOM 元素一层一层的捕获到事件，有 wrapDiv、innerP。
    *目标阶段：真正点击的元素textSpan的事件发生了两次，因为在上面的JavaScript代码中，textSapn既在捕获阶段绑定了事件，又在冒泡阶段绑定了事件，所以发生了两次。但是这里有一点是需要注意，在目标阶段并不一定先发生在捕获阶段所绑定的事件，而是先绑定的事件发生，一会会解释一下。
  * 冒泡阶段：会和捕获阶段相反的步骤将事件一步一步的冒泡到window

**JavaScript 事件冒泡**：

* 当触发子元素时，事件会沿着 DOM 向上冒泡。事件冒泡是实现事件委托的原理。阻止冒泡示例：

```
var btn = document.getElementById('btn')
btn.addEventListener('click', function (event) {
    // event.preventDefault() // 阻止默认行为
    event.stopPropagation() // 阻止冒泡
    console.log('clicked')
})
```

**JavaScript 事件委托(事件代理)**：

事件委托是将事件监听器添加到父元素，而不是每个子元素单独设置事件监听器。当触发子元素时，事件会冒泡到父元素，监听器就会触发，这种技术的好处如下。

- 内存占用减少，因为只需要一个父元素的事件处理程序，而不必为每个后代都添加事件处理程序。
- 无需从已删除的元素中解绑处理程序，也不许将处理程序绑定到新元素上。

示例目标：为 div 下的每个 a 标签绑定点击事件：

```javascript
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

**JavaScript 事件循环**：

事件循环是一个单线程循环，用于监视调用堆栈并检查是否有工作即将在任务队列中完成。如果调用堆栈为空并且任务队列中有回调函数，则将回调函数出队并推送到调用堆栈中执行。

- JavaScript 分为同步任务和异步任务
- 同步任务都在主线程上执行，形成一个执行栈
- 主线程之外，事件触发线程管理着一个任务队列，只要异步任务有了运行结果，就在任务队列之中放置一个事件。
- 一旦执行栈中的所有同步任务执行完毕，此时 JavaScript 引擎空闲，系统就会读取任务队列，将可运行的异步任务添加到可执行栈中，开始执行。

## 宏任务与微任务

JavaScript 中分为两种任务类型：macrotask 和 microtask，在 ECMAScript 中，microtask 称为 jobs，macrotask 可称为 task。

- macrotask 宏任务，可以理解是每次执行栈执行的代码就是一个宏任务，包括每次从事件队列中获取一个事件回调并放到执行栈中执行

- - 每一个 task 会从头到尾将这个任务执行完毕，不会执行其它
  - 浏览器为了能够使得 JavaScript 内部 task 与 DOM 任务能够有序的执行，会在一个 task 执行结束后，在下一个 task 执行开始前，对页面进行重新渲染。

- microtask 微任务，可以理解是在当前 task 执行结束后立即执行的任务

- - 在当前 task 任务后，下一个 task 之前，在渲染之前
  - 所以它的响应速度相比 setTimeout(setTimeout 是 task)会更快，因为无需等渲染
  - 在某一个 macrotask 执行完后，就会将在它执行期间产生的所有 microtask 都执行完毕(在渲染前)。

分别什么场景会用到 macrotask 和 microtask？

- macrotask：主代码块，setTimeout，setInterval 等(可以看到，事件队列中的每一个事件都是一个 macrotask)
- microtask：Promise，process.nextTick 等

> 在node环境下，process.nextTick 的优先级高于 Promise__，也就是可以简单理解为：在宏任务结束后会先执行微任务队列中的 nextTickQueue 部分，然后才会执行微任务中的 Promise 部分。

从线程角度重新理解：

- macrotask 中的事件都是放在一个事件队列中的，而这个队列由事件触发线程维护
- microtask 中的所有微任务都是添加到微任务队列 Job Queues 中，等待当前 macrotask 执行完毕后执行，而这个队列由 JavaScript 引擎线程维护

所以，总结下运行机制：

- 执行一个宏任务（栈中没有就从事件队列中获取）
- 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
- 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
- 当前宏任务执行完毕，开始检查渲染，然后 GUI 线程接管渲染
- 渲染完毕后，JavaScript 线程继续接管，开始下一个宏任务（从事件队列中获取）

另外，请注意下 Promise 的 polyfill 与官方版本的区别：

- 官方版本中，是标准的 microtask 形式
- polyfill，一般都是通过 setTimeout 模拟的，所以是 macrotask 形式

> 注意，有一些浏览器执行结果不一样，因为它们可能把 microtask 当成macrotask来执行了。

## Promise 机制是怎样的？

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

## CORS 的实现原理？

CORS 是一个 W3C 标准，全称是"跨域资源共享"(Cross-origin resource sharing)。它允许浏览器向跨源服务器，发出 XMLHttpRequest 请求，从而克服了 AJAX 只能同源使用的限制。

基本上目前所有的浏览器都实现了 CORS 标准,其实目前几乎所有的浏览器 ajax 请求都是基于 CORS 机制的。

浏览器将CORS请求分成两类：简单请求(simple request)和非简单请求(not-so-simple request)。只要同时满足以下两大条件，就属于简单请求。

* 请求方法是以下三种方法之一：HEAD, GET, POST
* HTTP的头信息不超出以下几种字段：
* Accept
* Accept-Language
* Content-Language
* Last-Event-ID
* Content-Type(只限于三个值application/x-www-form-urlencoded、 multipart/form-data、text/plain)

凡是不同时满足上面两个条件，就属于非简单请求。

## JSONP 的实现原理？

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

## AJAX（XMLHttpRequest） 怎么使用及优缺点？

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

## Fetch API 怎么使用？

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

## 同源策略的机制是什么？

同源策略可防止 JavaScript 发起跨域请求。源被定义为 URI、主机名和端口号的组合。此策略可防止页面上的恶意脚本通过该页面的文档对象模型，访问另一个网页上的敏感数据。

## 客户端存储机制是怎样的？

* localStorage、sessionStorage、Storage 的方法及属性：clear()、getItem()、key()、removeItem()、setItem()、constructor()、length

Cookie、LocalStorage、SessionStorage 都是客户端以键值对存储的存储机制，并且只能将值存储为字符串。

|                                    | Cookie                              | LocalStorage | SessionStorage |
| ---------------------------------- | ----------------------------------- | ------------ | -------------- |
| 由谁初始化                         | 服务器(Set-Cookie 请求头)或客户端   | 客户端       | 客户端         |
| 过期时间                           | 手动设置                            | 永不过期     | 当前页面关闭时 |
| 在当前浏览器会话中是否保持不变     | 取决于是否设置过期时间              | 是           | 否             |
| 是否与域名相关联                   | 是                                  | 否           | 否             |
| 是否随着每个 HTTP 请求发送给服务器 | 是，Cookie 会自动设置 Cookie 请求头 | 否           | 否             |
| 每个域名容量                       | 4kb                                 | 5mb          | 5mb            |
| 访问权限                           | 任一窗口                            | 任一窗口     | 当前页面窗口   |

