# JavaScript 常见实战题

* 实现 sum(1)(2)(3)

* 写一段匹配 URL 的正则，包括协议、域名、端口、path、hash、querystring

* 树的遍历

* 节流和防抖
* EventLoop 考察

## 实现 JavaScript 函数重载？

方法 1：

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

## 动手实现 JSON

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

## 使用 MutationObserver 实现 microtask

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

