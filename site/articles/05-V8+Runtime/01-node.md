# Node

- nodejs I/O 模型、事件模型、高并发
  - Node 的 nexttick 以及事件循环每个 stage 做了啥。比如 poll 阶段， timer阶段， check阶段之间的差异
  - 轮询机制，六个阶段、libuv、process.nextTick
- express 中间件
- child_process 模块，父子进程的通信机制
- 写一个 http server，并且处理 POST 请求
- mongoose
- 何判断一个IP是不是国内IP？

## Node 的异步性有什么特点？



## Node 进程通信的方式都有哪些？

- 通过 stdin/stdout 传递
- Node 原生 IPC 支持
- 通过 Sockets
- 借助 Message Queue

## Node 的事件模型？



## Node 模块化

- Node 中每个 js 文件模块会包含在隐藏的函数中运行
  - function (exports, require, module, __filename, __dirname) {}
  - 其中，module 代表模块本身，module.exports 可以统一导出
  - exports 是形参，指向 module.exports 的值，但是不能统一导出

## 如何理解 BFF 层？



## 动手实现中间件

```javascript
const app = {
  fns: [],
  calback(ctx) {
    console.log(ctx)
  },
  use(fn) {
    this.fns.push(fn)
  },
  go(ctx) {
    let index = 0;
    const next = () => { index++ }
    this.fns.map((fn, i) => {
      if (index == i) fn(ctx, next)
    })
    index === this.fns.length && this.callback(ctx)
  }
}
```



## 动手实现 EventEmmiter？

```javascript
// 简单实现
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(type, listener, isUnshift) {
    // 因为其他的类可能继承自 EventEmitter，子类的events可能为空，保证子类必须存在此实例属性
    if(!this.events) {
      this.events = {};
    }
    if(this.events[type]) {
      if(isUnshift) {
        this.events[type].unshift(listener);
      } else {
        this.events[type].push(listener);
      }
    } else {
      this.events[type] = [listener]
    }

    if(type !== 'newListener') {
      // node的EventEmitter模块自带的特殊事件，该事件在添加新事件监听器的时候触发
      this.emit('newListener', type);
    }
  }
  emit(type, ...args) {
    if(this.events[type]) {
      this.events[type].forEach(fn => fn.call(this, ...args));
    }
  }
  // 只绑定一次，然后解绑
  once(type, listener) {
    const me = this;
    function oneTime(...args) {
      listener.call(this, ...args);
      me.off(type, oneTime);
    }
    me.on(type, oneTime)
  }
  off(type, listener) {
    if(this.events[type]) {
      const index = this.events[type].indexOf(listener);
      this.events[type].splice(index, 1);
    }
  }
}

// 运行示例
let event = new EventEmitter();

event.on('say',function(str) {
  console.log(str);
});

event.once('say', function(str) {
  console.log('这是 once:' + str)
})

event.emit('say','visa');
event.emit('say','visa222');
event.emit('say','visa333');
```



```javascript
(function() {
    var root = (typeof self == 'object' && self.self == self && self) ||
        (typeof global == 'object' && global.global == global && global) ||
        this || {};

    function isValidListener(listener) {
        if (typeof listener === 'function') {
            return true
        } else if (listener && typeof listener === 'object') {
            return isValidListener(listener.listener)
        } else {
            return false
        }
    }

    function indexOf(array, item) {
        var result = -1
        item = typeof item === 'object'
            ? item.listener
            : item

        for (var i = 0, len = array.length; i < len; i++) {
            if (array[i].listener === item) {
                result = i
                break
            }
        }

        return result
    }

    function EventEmitter() {
        this.__events = {}
    }

    EventEmitter.VERSION = '1.0.0';

    var proto = EventEmitter.prototype;

    /**
     * 添加事件
     * @param  {String} eventName 事件名称
     * @param  {Function} listener 监听器函数
     * @return {Object} 可链式调用
     */
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) return;

        if (!isValidListener(listener)) {
            throw new TypeError('listener must be a function');
        }

        var events = this.__events;
        var listeners = events[eventName] = events[eventName] || [];
        var listenerIsWrapped = typeof listener === 'object';

        // 不重复添加事件
        if (indexOf(listeners, listener) === -1) {
            listeners.push(listenerIsWrapped ? listener : {
                listener: listener,
                once: false
            });
        }

        return this;
    };

    /**
     * 添加事件，该事件只能被执行一次
     * @param  {String} eventName 事件名称
     * @param  {Function} listener 监听器函数
     * @return {Object} 可链式调用
     */
    proto.once = function(eventName, listener) {
        return this.on(eventName, {
            listener: listener,
            once: true
        })
    };

    /**
     * 删除事件
     * @param  {String} eventName 事件名称
     * @param  {Function} listener 监听器函数
     * @return {Object} 可链式调用
     */
    proto.off = function(eventName, listener) {
        var listeners = this.__events[eventName];
        if (!listeners) return;

        var index;
        for (var i = 0, len = listeners.length; i < len; i++) {
            if (listeners[i] && listeners[i].listener === listener) {
                index = i;
                break;
            }
        }

        if (typeof index !== 'undefined') {
            listeners.splice(index, 1, null)
        }

        return this;
    };

    /**
     * 触发事件
     * @param  {String} eventName 事件名称
     * @param  {Array} args 传入监听器函数的参数，使用数组形式传入
     * @return {Object} 可链式调用
     */
    proto.emit = function(eventName, args) {
        var listeners = this.__events[eventName];
        if (!listeners) return;

        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i];
            if (listener) {
                listener.listener.apply(this, args || []);
                if (listener.once) {
                    this.off(eventName, listener.listener)
                }
            }

        }

        return this;

    };

    /**
     * 删除某一个类型的所有事件或者所有事件
     * @param  {String[]} eventName 事件名称
     */
    proto.allOff = function(eventName) {
        if (eventName && this.__events[eventName]) {
            this.__events[eventName] = []
        } else {
            this.__events = {}
        }
    };

    if (typeof exports != 'undefined' && !exports.nodeType) {
        if (typeof module != 'undefined' && !module.nodeType && module.exports) {
            exports = module.exports = EventEmitter;
        }
        exports.EventEmitter = EventEmitter;
    } else {
        root.EventEmitter = EventEmitter;
    }

}());
```



```javascript
var emitter = new EventEmitter();

function handleOne(a, b, c) {
    console.log('第一个监听函数', a, b, c)
}

function handleSecond(a, b, c) {
    console.log('第二个监听函数', a, b, c)
}

function handleThird(a, b, c) {
    console.log('第三个监听函数', a, b, c)
}

emitter.on("demo", handleOne)
       .once("demo", handleSecond)
       .on("demo", handleThird);

emitter.emit('demo', [1, 2, 3]);
// => 第一个监听函数 1 2 3
// => 第二个监听函数 1 2 3
// => 第三个监听函数 1 2 3

emitter.off('demo', handleThird);
emitter.emit('demo', [1, 2, 3]);
// => 第一个监听函数 1 2 3

emitter.allOff();
emitter.emit('demo', [1, 2, 3]);
// nothing
```



## NPM 的常见操作？



## 编写 NPM 包都需要注意什么？



## 如何发布私有 NPM 包？

