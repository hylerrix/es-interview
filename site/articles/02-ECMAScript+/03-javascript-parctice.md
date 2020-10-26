# JavaScript 常见实战题

## 面向对象

### 实现 InstanceOf

```javascript
// L 表示左表达式，R 表示右表达式
function instance_of(L, R) {
    var O = R.prototype;
  L = L.__proto__;
  while (true) {
        if (L === null){
            return false;
        }
        // 这里重点：当 O 严格等于 L 时，返回 true
        if (O === L) {
            return true;
        }
        L = L.__proto__;
  }
}
```

### 实现 JavaScript 继承

```javascript
// 原型链继承
function myExtend(C, P) {
    var F = function(){};
    F.prototype = P.prototype;
    C.prototype = new F();
    C.prototype.constructor = C;
    C.super = P.prototype;
}
```

### 实现 JavaScript 函数重载？

方法 1，通过非严格模式下的 arguments：

```javascript
function overLoading() {
　　// 根据 arguments.length，对不同的值进行不同的操作
　　switch(arguments.length) {
　　　　case 0:
　　　　　　/*操作1的代码写在这里*/
　　　　　　break;
　　　　case 1:
　　　　　　/*操作2的代码写在这里*/
　　　　　　break;
　　　　default:
　　　　    break;
    }
}
```

方法 2：

```javascript
// addMethod
function addMethod(object, name, fn) {
　　var old = object[name]; // 把前一次添加的方法存在一个临时变量 old 里面
　　object[name] = function() { // 重写了 object[name] 的方法
　　　　// 如果调用 object[name] 方法时，传入的参数个数跟预期的一致，则直接调用
　　　　if(fn.length === arguments.length) {
　　　　　　return fn.apply(this, arguments);
　　　　// 否则，判断 old 是否是函数，如果是，就调用 old
　　　　} else if(typeof old === "function") {
　　　　　　return old.apply(this, arguments);
　　　　}
　　}
}

var people = {
　　values: ["Dean Edwards", "Alex Russell", "Dean Tom"]
};
 
/* 下面开始通过 addMethod 来实现对 people.find 方法的重载 */
 
// 不传参数时，返回 peopld.values 里面的所有元素
addMethod(people, "find", function() {
　　return this.values;
});
 
// 传一个参数时，按 first-name 的匹配进行返回
addMethod(people, "find", function(firstName) {
　　var ret = [];
　　for(var i = 0; i < this.values.length; i++) {
　　　　if(this.values[i].indexOf(firstName) === 0) {
　　　　　　ret.push(this.values[i]);
　　　　}
　　}
　　return ret;
});
 
// 传两个参数时，返回 first-name 和 last-name 都匹配的元素
addMethod(people, "find", function(firstName, lastName) {
　　var ret = [];
　　for(var i = 0; i < this.values.length; i++) {
　　　　if(this.values[i] === (firstName + " " + lastName)) {
　　　　　　ret.push(this.values[i]);
　　　　}
　　}
　　return ret;
});
 
// 测试：
console.log(people.find()); //["Dean Edwards", "Alex Russell", "Dean Tom"]
console.log(people.find("Dean")); //["Dean Edwards", "Dean Tom"]
console.log(people.find("Dean Edwards")); //["Dean Edwards"]
```

## 对象

### 如何区分 Object 和 Array

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

- 通过 instanceof 运算符来判断(instanceof 运算符左边是子对象，即待测对象，右边是父构造函数，这里是 Array)。instance 实例：凡是用 new 构造函数创建出的对象，都称为是构造函数的实例。

```javascript
var obj = {"k1":"v1"};  
var arr = [1,2];
console.log("Instanceof 处理对象的结果："+(obj instanceof Array));  
console.log("Instanceof 处理数组的结果："+(arr instanceof Array));
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

### 一个函数实现 add(1)(2)(3)、add(1, 2, 3)

```javascript
function add(){
  let args = [].slice.apply(arguments)
  function resultFn() {
    args = args.concat([].slice.apply(arguments))
    if(args.length>=3){
        return args.slice(0,3).reduce(function(acc,next){ return acc + next},0) //will only sum first 3 arguments
    }
    return resultFn
  }
  return resultFn()
}
console.log(add(10)(10)(20))
```

### 动手实现 new

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

### 动手实现 Object.create()

```javascript
function create =  function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
};
```

### JavaScript 如何实现封装？

### JavaScript 如何实现多态？

### JavaScript 如何实现继承？

**类式继承**：

```javascript
// 声明父类
function Animal() {
  this.name = 'animal';
  this.type = ['pig', 'cat'];
}
// 为父类添加共有方法
Animal.prototype.greet = function(sound) {
  console.log(sound);
}
// 声明子类
function Dog() {
  this.name = 'dog';
}
// 继承父类
Dog.prototype = new Animal();
var dog = new Dog();
dog.greet('汪汪');  //  "汪汪"
console.log(dog.type); // ["pig", "cat"]
```

**构造函数继承**：

```javascript
// 声明父类
function Animal(color) {
  this.name = 'animal';
  this.type = ['pig','cat'];
  this.color = color;
}
// 添加共有方法
Animal.prototype.greet = function(sound) {
  console.log(sound);
}
// 声明子类
function Dog(color) {
  Animal.apply(this, arguments);
}
var dog = new Dog('白色');
var dog2 = new Dog('黑色');
dog.type.push('dog');
console.log(dog.color);  // "白色"
console.log(dog.type);  // ["pig", "cat", "dog"]
console.log(dog2.type);  // ["pig", "cat"]
console.log(dog2.color);  // "黑色"
```

**组合继承**：将类式继承和构造函数继承组合在一起

```javascript
// 声明父类
function Animal(color) {    
  this.name = 'animal';    
  this.type = ['pig','cat'];    
  this.color = color;   
}     
// 添加共有方法  
Animal.prototype.greet = function(sound) {    
  console.log(sound);   
}     
// 声明子类   
function Dog(color) { 
  // 构造函数继承    
  Animal.apply(this, arguments);   
}   
// 类式继承
Dog.prototype = new Animal();   
var dog = new Dog('白色');   
var dog2 = new Dog('黑色');     
dog.type.push('dog');   
console.log(dog.color); // "白色"
console.log(dog.type);  // ["pig", "cat", "dog"]
console.log(dog2.type); // ["pig", "cat"]
console.log(dog2.color);  // "黑色"
dog.greet('汪汪');  // "汪汪"
```

**寄生组合式继承**：强化的部分就是在组合继承的基础上减少一次多余的调用父类的构造函数

```javascript
function Animal(color) {
  this.color = color;
  this.name = 'animal';
  this.type = ['pig', 'cat'];
}
Animal.prototype.greet = function(sound) {
  console.log(sound);
}
function Dog(color) {
  Animal.apply(this, arguments);
  this.name = 'dog';
}
/* 注意下面两行 */
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.getName = function() {
  console.log(this.name);
}
var dog = new Dog('白色');   
var dog2 = new Dog('黑色');     
dog.type.push('dog');   
console.log(dog.color);   // "白色"
console.log(dog.type);   // ["pig", "cat", "dog"]
console.log(dog2.type);  // ["pig", "cat"]
console.log(dog2.color);  // "黑色"
dog.greet('汪汪');  //  "汪汪"
```

extends 继承：ES6

```javascript
class Animal {   
  constructor(color) {   
    this.color = color;   
  }   
  greet(sound) {   
    console.log(sound);   
  }  
}   
class Dog extends Animal {   
  constructor(color) {   
    super(color);   
    this.color = color;   
  }  
}   
let dog = new Dog('黑色');  
dog.greet('汪汪');  // "汪汪"
console.log(dog.color); // "黑色"
```

### JS 如何实现 public/private/protected？

### JS 如何使用原型模拟类的？

* private：因为javascript函数级作用域的特性（在函数中定义的属性和方法外界访问不到），所以我们在函数内部直接定义的属性和方法都是私有的。
* public：通过new关键词实例化时，this定义的属性和变量都会被复制一遍，所以通过this定义的属性和方法就是公有的。通过prototype创建的属性在类的实例化之后类的实例化对象也是可以访问到的，所以也是公有的。
* protected：在函数的内部，我们可以通过this定义的方法访问到一些类的私有属性和方法，在实例化的时候就可以初始化对象的一些属性了。

## 常见方法

### 动手实现 call()、bind()、apply()

```javascript
Function.prototype.myCall = function(context) {
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
person.fullName.myCall(person1, "Hello, ");  // 输出 "Hello, John Doe"
```

```javascript
// myApply，相比 myCall，只需要注意一下，第二个参数是否存在就可以。
Function.prototype.myApply = function(context, arr) {
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

### 动手实现 map()、filter()、reduce()

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

// 用数组的 reduce 方法实现
Array.prototype.myMap2 = function(callback, thisArg) {
  let result = this.reduce((accumulator, currentValue, index, array) => {
    accumulator.push(callback.call(thisArg, currentValue, index, array));
    return accumulator;
  }, []);
  return result;
};
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

### 使用 MutationObserver 实现 microtask

MutationObserver 可以用来实现 microtask，它属于 microtask，优先级小于 Promise，一般是 Promise 不支持时才会这样做。

它是 HTML5 中的新特性，作用是：监听一个 DOM 变动，

当 DOM 对象树发生任何变动时，Mutation Observer 会得到通知。

像以前的 Vue 源码中就是利用它来模拟 nextTick 的，具体原理是，创建一个 TextNode 并监听内容变化，

然后要 nextTick 的时候去改一下这个节点的文本内容。

```javascript
var counter = 1
var observer = new MutationObserver(nextTickHandler)
var textNode = document.createTextNode(String(counter))

observer.observe(textNode, {
    characterData: true
})
timerFunc = () => {
    counter = (counter + 1) % 2
    textNode.data = String(counter)
}
```

不过，现在的 Vue 2.5+ 的 nextTick 实现移除了 MutationObserver 的方式(据说是兼容性原因)，取而代之的是使用 MessageChannel

(当然，默认情况仍然是 Promise，不支持才兼容的)。

MessageChannel 属于宏任务，优先级是：MessageChannel->setTimeout，所以 Vue 2.5+ 内部的 nextTick 与 2.4 及之前的实现是不一样的，需要注意下。

### 动手实现柯里化函数

```javascript
function myCurry(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var innerArgs = Array.prototype.slice.call(arguments);
    var finalArgs = args.concat(innerArgs);
    return fn.apply(null, finalArgs);
  }
}

// 自动检测参数是否传递完毕
function myCurry(fn) {
  return function currify() {
    const args = Array.prototype.slice.call(arguments);
    return args.length >= fn.length ?
      fn.apply(null, args) :
    currify.bind(null, ...args);
  }
}
```

### 动手实现 JavaScript AOP

> https://juejin.im/post/6844903858649432078

```javascript
let emptyFunc = () => {
};

let findPointCut = (target, pointCut) => {
    if (typeof pointCut === 'string') {
        let func = target.prototype[pointCut];
        // 暂不支持属性的aop
        if (typeof func === 'function') {
            return func;
        }
    }
    // 暂不支持模糊匹配切点
    return null;
};
let advice = (target, pointCut, advice = {}) => {
    let old = findPointCut(target, pointCut);
    if (old) {
        target.prototype[pointCut] = function () {
            let self = this;
            let args = arguments;
            let joinPoint = {
                target,
                method: old,
                args,
                self
            };
            let {before, round, after, afterReturn, afterThrow} = advice;
            // 前置增强
            before && before.apply(self, joinPoint);
            // 环绕增强
            let roundJoinPoint = joinPoint;
            if (round) {
                roundJoinPoint = Object.assign(joinPoint, {
                    handle: () => {
                        return old.apply(self, arguments || args);
                    }
                });
            } else {
                // 没有声明round增强,直接执行原方法
                round = () => {
                    old.apply(self, args);
                };
            }
            if (after || afterReturn || afterThrow) {
                let result = null;
                let error = null;
                try {
                    result = round.apply(self, roundJoinPoint);
                    // 返回增强
                    return afterReturn && afterReturn.call(self, joinPoint, result) || result;
                } catch (e) {
                    error = e;
                    // 异常增强
                    let shouldIntercept = afterThrow && afterThrow.call(self, joinPoint, e);
                    if (!shouldIntercept) {
                        throw e;
                    }
                } finally {
                    // 后置增强
                    after && after.call(self, joinPoint, result, error);
                }
            } else {
                // 未定义任何后置增强,直接执行原方法
                return round.call(self, roundJoinPoint);
            }
        };
    }
};

let aop = {
    before(target, pointCut, before = emptyFunc) {
        advice(target, pointCut, {before});
    },
    after(target, pointCut, after = emptyFunc) {
        advice(target, pointCut, {after});
    },
    afterReturn(target, pointCut, afterReturn = emptyFunc) {
        advice(target, pointCut, {afterReturn});
    },
    afterThrow(target, pointCut, afterThrow = emptyFunc) {
        advice(target, pointCut, {afterThrow});
    },
    round(target, pointCut, round = emptyFunc) {
        advice(target, pointCut, {round});
    }
};

export default aop;
```

### 动手实现防抖和节流？

* 防抖 debounce：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。
  * search搜索联想，用户在不断输入值时，用防抖来节约请求资源。
  * 频繁操作点赞和取消点赞，因此需要获取最后一次操作结果并发送给服务器
* 节流 throttle：当持续触发事件时，保证一定时间段内只调用一次事件处理函数。
  * 拖拽场景：鼠标不断点击触发，mousedown(单位时间内只触发一次)
  * 缩放场景：window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次。
  * 动画场景：避免短时间内多次触发动画引起性能问题。

```javascript
// 防抖简化版
const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
```

```javascript
// 节流简化版
const throttle = (fn, delay = 500) => {
  let flag = true;
  return (...args) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
};
```

```javascript
// 防抖复杂版
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

```javascript
// 节流复杂版
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

### 模板引擎的简单实现

```javascript
let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}
render(template, data);// 我是姓名，年龄18，性别undefined

function render(template, data) {
  const reg = /\{\{(\w+)\}\}/; // 模板字符串正则
  if (reg.test(template)) { // 判断模板里是否有模板字符串
    const name = reg.exec(template)[1]; // 查找当前模板里第一个模板字符串的字段
    template = template.replace(reg, data[name]); // 将第一个模板字符串渲染
    return render(template, data); // 递归的渲染并返回渲染后的结构
  }
  return template; // 如果模板没有模板字符串直接返回
}
```

## 异步实战

### 动手实现 Promise

```javascript
// 判断变量否为function
const isFunction = variable => typeof variable === 'function'
// 定义Promise的三种状态常量
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class MyPromise {
  constructor (handle) {
    if (!isFunction(handle)) {
      throw new Error('MyPromise must accept a function as a parameter')
    }
    // 添加状态
    this._status = PENDING
    // 添加状态
    this._value = undefined
    // 添加成功回调函数队列
    this._fulfilledQueues = []
    // 添加失败回调函数队列
    this._rejectedQueues = []
    // 执行handle
    try {
      handle(this._resolve.bind(this), this._reject.bind(this)) 
    } catch (err) {
      this._reject(err)
    }
  }
  // 添加resovle时执行的函数
  _resolve (val) {
    const run = () => {
      if (this._status !== PENDING) return
      // 依次执行成功队列中的函数，并清空队列
      const runFulfilled = (value) => {
        let cb;
        while (cb = this._fulfilledQueues.shift()) {
          cb(value)
        }
      }
      // 依次执行失败队列中的函数，并清空队列
      const runRejected = (error) => {
        let cb;
        while (cb = this._rejectedQueues.shift()) {
          cb(error)
        }
      }
      /* 如果resolve的参数为Promise对象，则必须等待该Promise对象状态改变后,
          当前Promsie的状态才会改变，且状态取决于参数Promsie对象的状态
        */
      if (val instanceof MyPromise) {
        val.then(value => {
          this._value = value
          this._status = FULFILLED
          runFulfilled(value)
        }, err => {
          this._value = err
          this._status = REJECTED
          runRejected(err)
        })
      } else {
        this._value = val
        this._status = FULFILLED
        runFulfilled(val)
      }
    }
    // 为了支持同步的Promise，这里采用异步调用
    setTimeout(run, 0)
  }
  // 添加reject时执行的函数
  _reject (err) { 
    if (this._status !== PENDING) return
    // 依次执行失败队列中的函数，并清空队列
    const run = () => {
      this._status = REJECTED
      this._value = err
      let cb;
      while (cb = this._rejectedQueues.shift()) {
        cb(err)
      }
    }
    // 为了支持同步的Promise，这里采用异步调用
    setTimeout(run, 0)
  }
  // 添加then方法
  then (onFulfilled, onRejected) {
    const { _value, _status } = this
    // 返回一个新的Promise对象
    return new MyPromise((onFulfilledNext, onRejectedNext) => {
      // 封装一个成功时执行的函数
      let fulfilled = value => {
        try {
          if (!isFunction(onFulfilled)) {
            onFulfilledNext(value)
          } else {
            let res =  onFulfilled(value);
            if (res instanceof MyPromise) {
              // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
              res.then(onFulfilledNext, onRejectedNext)
            } else {
              //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
              onFulfilledNext(res)
            }
          }
        } catch (err) {
          // 如果函数执行出错，新的Promise对象的状态为失败
          onRejectedNext(err)
        }
      }
      // 封装一个失败时执行的函数
      let rejected = error => {
        try {
          if (!isFunction(onRejected)) {
            onRejectedNext(error)
          } else {
            let res = onRejected(error);
            if (res instanceof MyPromise) {
              // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
              res.then(onFulfilledNext, onRejectedNext)
            } else {
              //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
              onFulfilledNext(res)
            }
          }
        } catch (err) {
          // 如果函数执行出错，新的Promise对象的状态为失败
          onRejectedNext(err)
        }
      }
      switch (_status) {
          // 当状态为pending时，将then方法回调函数加入执行队列等待执行
        case PENDING:
          this._fulfilledQueues.push(fulfilled)
          this._rejectedQueues.push(rejected)
          break
          // 当状态已经改变时，立即执行对应的回调函数
        case FULFILLED:
          fulfilled(_value)
          break
        case REJECTED:
          rejected(_value)
          break
      }
    })
  }
  // 添加catch方法
  catch (onRejected) {
    return this.then(undefined, onRejected)
  }
  // 添加静态resolve方法
  static resolve (value) {
    // 如果参数是MyPromise实例，直接返回这个实例
    if (value instanceof MyPromise) return value
    return new MyPromise(resolve => resolve(value))
  }
  // 添加静态reject方法
  static reject (value) {
    return new MyPromise((resolve ,reject) => reject(value))
  }
  // 添加静态all方法
  static all (list) {
    return new MyPromise((resolve, reject) => {
      /**
         * 返回值的集合
         */
      let values = []
      let count = 0
      for (let [i, p] of list.entries()) {
        // 数组参数如果不是MyPromise实例，先调用MyPromise.resolve
        this.resolve(p).then(res => {
          values[i] = res
          count++
          // 所有状态都变成fulfilled时返回的MyPromise状态就变成fulfilled
          if (count === list.length) resolve(values)
        }, err => {
          // 有一个被rejected时返回的MyPromise状态就变成rejected
          reject(err)
        })
      }
    })
  }
  // 添加静态race方法
  static race (list) {
    return new MyPromise((resolve, reject) => {
      for (let p of list) {
        // 只要有一个实例率先改变状态，新的MyPromise的状态就跟着改变
        this.resolve(p).then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
      }
    })
  }
  finally (cb) {
    return this.then(
      value  => MyPromise.resolve(cb()).then(() => value),
      reason => MyPromise.resolve(cb()).then(() => { throw reason })
    );
  }
}
```

### 实现 async/await

```javascript
// 就是利用 generator（生成器）分割代码片段。然后我们使用一个函数让其自迭代，每一个yield 用 promise 包裹起来。执行下一步的时机由 promise 来控制
function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    // 将返回值promise化
    return new Promise(function(resolve, reject) {
      // 获取迭代器实例
      var gen = fn.apply(self, args);
      // 执行下一步
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      // 抛出异常
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      // 第一次触发
      _next(undefined);
    });
  };
}
```

### 动手实现 XMLHttpRequest

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

### 实现多个异步的并发控制

请实现如下的函数，可以批量请求数据，所有的URL地址在urls参数中，同时可以通过max参数 控制请求的并发度。当所有的请求结束后，需要执行callback回调。发请求的函数可以直接使用fetch。

```javascript
function sendRequest(arr, max, callback) {
        let fetchArr = [],  // 存储并发max的promise数组
            i = 0;

        function toFetch() {
            if (i === arr.length) {   // 所有的都处理完了， 返回一个resolve
                return Promise.resolve();
            }
            let one = fetch(arr[i++]); // 取出第i个url， 放入fetch里面 , 每取一次i++
            one.then( () => {fetchArr.splice(fetchArr.indexOf(one), 1)}); // 当promise执行完毕后，从数组删除
            fetchArr.push(one);  //将当前的promise存入并发数组中       其实将这个push放到上一行会更好理解，那样就是我们同步的思维顺序，先push进去，再等promise执行完了之后再删除。  但由于then是异步的，所以怎么放都可以。
            let p = Promise.resolve();
            if (fetchArr.length >= max) {     // 当并行数量达到最大后， 用race比较 第一个完成的， 然后再调用一下函数自身。
                p = Promise.race(fetchArr);
            }
            return p.then(() => toFetch());
        }

        // arr循环完后， 现在fetchArr里面剩下最后max个promise对象， 使用all等待所有的都完成之后执行callback
        toFetch().then(() => Promise.all(fetchArr)).then(() => {
            callback();
        })
}
```

## 特性 API

### 使用 Proxy 拓展构造函数

```js
function extend(sup, base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype, "constructor"
  );
  base.prototype = Object.create(sup.prototype);
  var handler = {
    construct: function(target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply: function(target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    }
  };
  var proxy = new Proxy(base, handler);
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, "constructor", descriptor);
  return proxy;
}

var Person = function (name) {
  this.name = name
};

var Boy = extend(Person, function (name, age) {
  this.age = age;
});

Boy.prototype.sex = "M";

var Peter = new Boy("Peter", 13);
console.log(Peter.sex);  // "M"
console.log(Peter.name); // "Peter"
console.log(Peter.age);  // 13
```

### 动手实现 JSON

```javascript
if (!window.JSON) {
  window.JSON = {
    parse: function(sJSON) { return eval('(' + sJSON + ')'); },
    stringify: (function () {
      var toString = Object.prototype.toString;
      var isArray = Array.isArray || function (a) { return toString.call(a) === '[object Array]'; };
      var escMap = {'"': '\\"', '\\': '\\\\', '\b': '\\b', '\f': '\\f', '\n': '\\n', '\r': '\\r', '\t': '\\t'};
      var escFunc = function (m) { return escMap[m] || '\\u' + (m.charCodeAt(0) + 0x10000).toString(16).substr(1); };
      var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
      return function stringify(value) {
        if (value == null) {
          return 'null';
        } else if (typeof value === 'number') {
          return isFinite(value) ? value.toString() : 'null';
        } else if (typeof value === 'boolean') {
          return value.toString();
        } else if (typeof value === 'object') {
          if (typeof value.toJSON === 'function') {
            return stringify(value.toJSON());
          } else if (isArray(value)) {
            var res = '[';
            for (var i = 0; i < value.length; i++)
              res += (i ? ', ' : '') + stringify(value[i]);
            return res + ']';
          } else if (toString.call(value) === '[object Object]') {
            var tmp = [];
            for (var k in value) {
              if (value.hasOwnProperty(k))
                tmp.push(stringify(k) + ': ' + stringify(value[k]));
            }
            return '{' + tmp.join(', ') + '}';
          }
        }
        return '"' + value.toString().replace(escRE, escFunc) + '"';
      };
    })()
  };
}
```

### 