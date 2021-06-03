# Node

- nodejs I/O 模型、事件模型、高并发
  - Node 的 nexttick 以及事件循环每个 stage 做了啥。比如 poll 阶段， timer阶段， check阶段之间的差异
  - 轮询机制，六个阶段、libuv、process.nextTick
- express 中间件
- child_process 模块，父子进程的通信机制
- 写一个 http server，并且处理 POST 请求
- mongoose
- 何判断一个IP是不是国内IP？
- libuv
- Require 同步和 import 异步有什么区别？原理？
- 关于node eventloop。在node里，udp和文件api任务什么区别吗？什么是快io什么是慢io？nodejs如何调度快慢io的？node10之前的事件循环是怎么样的？libuv是以一种什么样的趋向去调度io任务的？async task的抽象是什么呢？什么是tickcallback？
- 关于node runtime。node是怎么启动的？node怎么console调试？console什么时候注入node的？
- 关于node addon。node_api是一种什么抽象？jsvalue为什么是Object的二级指针？cpp和js层面的共享内存靠什么实现最为简单？ffi是怎么实现的？

> https://github.com/semlinker/node-deep

## 临时

### Node 内核篇

* 异步机制 EventLoop，[libuv](https://libuv.org/)
  * 阻塞和非阻塞
  * Node.js 在设计上类似于 Ruby 的 [Event Machine](https://github.com/eventmachine/eventmachine) 或 Python 的 [Twisted](https://twistedmatrix.com/trac/) 之类的系统。但 Node.js 更深入地考虑了事件模型，它将[事件循环](https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/)作为一个运行时结构而不是作为一个库来呈现。
  * 在其他系统中，总是有一个阻塞调用来启动事件循环。通常情况下，要执行的行为是通过脚本开始时的回调来定义的，然后通过 `EventMachine::run()` 这样的阻塞调用来启动服务器。而在 Node.js 中，没有这种启动事件循环的调用。Node.js 在执行输入脚本后直接进入事件循环，当没有更多的回调要执行时，Node.js 就会退出事件循环。
  * 存在问题：JavaScript 中的 EventLoop 异步机制
  * 基于 cluster 模块的 Node 多进程机制，负载均衡器
* API
* 架构

## 基础

### Node 进程通信的方式都有哪些？

- 通过 stdin/stdout 传递
- Node 原生 IPC 支持
- 通过 Sockets
- 借助 Message Queue

### 什么是 child_process

在Node.js中，提供了一个 child_process 模块，通过它可以开启多个子进程，在多个子进程之间可以共享内存空间，可以通过子进程的互相通信来实现信息的交换。

### Node cluster 如何多进程通信？

* `nodejs`是单线程的模式，不能充分利用服务器的多核资源。使用node的cluster模块可以监控应用进程，退出后重新启动node应用进程，并可以启动多个node应用进程，做到负载均衡，充分利用资源。
* 如今的机器基本都是多核 cpu。为了能充分利用 cpu 计算能力，node.js V0.8（2012-06-22） 新增了一个内置模块 cluster。它可以通过一个父进程管理一堆子进程的方式来实现集群的功能。
* cluster 底层就是 child_process，master 进程做总控，启动 1 个 agent 和 n 个 worker，agent 来做任务调度，获取任务，并分配给某个空闲的 worker 来做。
* 需要注意的是：每个 worker 进程通过使用 child_process.fork() 函数，基于 IPC（Inter-Process Communication，进程间通信），实现与 master 进程间通信。
* fork 出的子进程拥有和父进程一致的数据空间、堆、栈等资源（fork 当时），但是是独立的，也就是说二者不能共享这些存储空间。 那我们直接用 fork 自己实现不就行了。
* 这样的方式仅仅实现了多进程。多进程运行还涉及父子进程通信，子进程管理，以及负载均衡等问题，这些特性 cluster 帮你实现了。

```javascript
const cluster = require('cluster');
const cpus = require('os').cpus();
const accessLogger = require("../logger").accessLogger();

accessLogger.info('master ' + process.pid + ' is starting.');
cluster.setupMaster({
    /* 应用进程启动文件 */
    exec: 'bin/www'
});
/* 启动应用进程个数和服务器CPU核数一样 */
for (let i = 0; i < cpus.length; i++) {
    cluster.fork();
}

cluster.on('online', function (worker) {
    /* 进程启动成功 */
    accessLogger.info('worker ' + worker.process.pid + ' is online.');
});
cluster.on('exit', function (worker, code, signal) {
    /* 应用进程退出时，记录日志并重启 */
    accessLogger.info('worker ' + worker.process.pid + ' died.');
    cluster.fork();
});
```

### Node worker_threads 多线程

https://juejin.im/post/6844903775937757192

* 直到 Node 10.5.0 的发布，官方才给出了一个实验性质的模块 worker_threads 给 Node 提供真正的多线程能力。
* worker_thread 模块中有 4 个对象和 2 个类。
  * isMainThread: 是否是主线程，源码中是通过 `threadId === 0` 进行判断的。
  * MessagePort: 用于线程之间的通信，继承自 EventEmitter。
  * MessageChannel: 用于创建异步、双向通信的通道实例。
  * threadId: 线程 ID。
  * Worker: 用于在主线程中创建子线程。第一个参数为 filename，表示子线程执行的入口。
  * parentPort: 在 worker 线程里是表示父进程的 MessagePort 类型的对象，在主线程里为 null
  * workerData: 用于在主进程中向子进程传递数据（data 副本）

```javascript
const {
  isMainThread,
  parentPort,
  workerData,
  threadId,
  MessageChannel,
  MessagePort,
  Worker
} = require('worker_threads');

function mainThread() {
  for (let i = 0; i < 5; i++) {
    const worker = new Worker(__filename, { workerData: i });
    worker.on('exit', code => { console.log(`main: worker stopped with exit code ${code}`); });
    worker.on('message', msg => {
      console.log(`main: receive ${msg}`);
      worker.postMessage(msg + 1);
    });
  }
}

function workerThread() {
  console.log(`worker: workerDate ${workerData}`);
  parentPort.on('message', msg => {
    console.log(`worker: receive ${msg}`);
  }),
  parentPort.postMessage(workerData);
}

if (isMainThread) {
  mainThread();
} else {
  workerThread();
}
```

### Node 如何利用多核 CPU？

## 异步

### Node 的事件模型？

> https://www.jianshu.com/p/cc57ec6d5873

* NodeJS的单线程事件循环的优势
  * 处理越来越多的并发客户端请求非常容易
  * 因为事件循环的存在，即使我们的NodeJS应用接收到了越来越多的并发请求，我们也不需要去新建很多的线程
  * NodeJS使用到了较少的线程，所以资源和内存的使用较少

* 单线程事件循环模型流程
  * 客户端发送请求到Web服务器
  * NodeJS的Web服务器在内部维护一个有限的线程池，以便为客户端请求提供服务
  * NodeJS的Web服务器接收这些请求并将它们放入队列中。 它被称为“事件队列”
  * NodeJS的Web服务器内部有一个组件，称为“事件循环”，它使用无限循环来接收请求并处理它们。
  * 事件循环只使用到了一个线程，它是NodeJS的处理模型的核心
  * 事件循环回去检查是否有客户端的请求被放置在事件队列中。如果没有，会一直等待事件队列中存在请求。
  * 如果有，则会从事件队列中拾取一个客户端请求：
    - 开始处理客户端请求
    - 如果该客户端请求不需要任何阻塞IO操作，则处理所有内容，准备响应并将其发送回客户端
    - 如果该客户端请求需要一些阻塞IO操作，例如与数据库，文件系统，外部服务交互，那么它将遵循不同的方法:
      - 从内部线程池检查线程可用性
      - 获取一个线程并将此客户端请求分配给该线程
      - 该线程负责接收该请求，处理该请求，执行阻塞IO操作，准备响应并将其发送回事件循环
      - 事件循环依次将响应发送到相应的客户端

### 如何理解 EventEmmiter？

* 所有能触发事件的对象都是 `EventEmitter` 类的实例。 这些对象开放了一个 `eventEmitter.on()` 函数，允许将一个或多个函数绑定到会被对象触发的命名事件上。 事件名称通常是驼峰式的字符串，但也可以使用任何有效的 JavaScript 属性名。
* 当 EventEmitter 对象触发一个事件时，所有绑定在该事件上的函数都被同步地调用。

### 动手实现 EventEmmiter？

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

## Node 模块化

### 如何理解 Node Module？

- Node 中每个 js 文件模块会包含在隐藏的函数中运行

  - function (exports, require, module, __filename, __dirname) {}
  - 其中，module 代表模块本身，module.exports 可以统一导出
  - exports 是形参，指向 module.exports 的值，但是不能统一导出

- Node 中的模块分类：

  - 底层模块：Node.js 中以 C++ 形式提供的模块，如 tcp_wrap、contextify 等
  - 常量模块：Node.js 中定义常量的模块，用来导出如 signal，openssl 库、文件访问权限等常量的定义。如文件访问权限中的 O_RDONLY，O_CREAT、signal 中的 SIGHUP，SIGINT 等。
  - 原生模块：Node.js 中以 JavaScript 形式提供的模块，如 http、https、fs 等。有些 native module 需要借助于 builtin module 实现背后的功能。**如对于 native 模块 buffer , 还是需要借助 builtin node_buffer.cc 中提供的功能来实现大容量内存申请和管理，目的是能够脱离 V8 内存大小使用限制**。
  - 第三方模块：以上模块可以统称 Node.js 内建模块，除此之外为第三方模块，典型的如 express 模块。

- module 对象：每个模块内部都有，代表当前模块。它有以下属性。

  - `module.id` 模块的识别符，通常是带有绝对路径的模块文件名。
  - `module.filename` 模块的文件名，带有绝对路径。
  - `module.loaded` 返回一个布尔值，表示模块是否已经完成加载。
  - `module.parent` 返回一个对象，表示调用该模块的模块。
  - `module.children` 返回一个数组，表示该模块要用到的其他模块。
  - `module.exports` 表示模块对外输出的值。

- 清除已缓存模块：

  - ```
    //删除指定模块的缓存
    delete require.cache[require.resolve('/*被缓存的模块名称*/')]
    
    // 删除所有模块的缓存
    Object.keys(require.cache).forEach(function(key) {
         delete require.cache[key];
    });
    ```

### 如何理解 require()？

- require 函数支持导入文件：`.js`、`.json`、`.node`。

- require 不会出现死循环，但只会输出相应模块已加载的部分数据。

- 导入模块时，需要经历三个步骤（不论是核心模块还是文件模块，require() 方法对相同模块的二次加载都一律采用缓存优先的方式，这是第一优先级。不同之处在于核心模块的缓存检查优先于文件模块的缓存检查。）：

  - 路径分析：分析 . 或 .. 开始的相对路径文件模块、以 / 开始的绝对路径文件模块、非路径形式的文件模块，如自定义的 connect 模块

  - 文件定位：文件扩展名的分析、目录和包的处理。

    - 扩展名分析：Node 会按 .js、.json、.node 的次序补足扩展名，依次尝试。

    - 目录分析：require() 通过分析文件扩展名之后，可能没有查找到对应文件，但却得到一个目录，这在引入自定义模块和逐个模块路径进行查找时经常会出现，此时 Node 会将目录当做一个包来处理。

    - 包处理：Node 对 CommonJS 包规范进行了一定程度的支持。首先，Node 在当前目录下查找 package.json （CommonJS 包规范定义的包描述文件），通过 JSON.parse() 解析出包描述对象，从中取出 main 属性指定的文件名进行定位。如果文件名缺少扩展名，将会进入扩展名分析的步骤。

      而如果 main 属性指定的文件名错误，或者压根没有 package.json 文件，Node 会将 index 当做默认文件名，依次查找 index.js、index.json、index.node。

  - 编译执行

- require 函数执行的主要流程：

```
从 Y 路径的模块 require(X)
1. 如果 X 是一个核心模块，
   a. 返回核心模块
   b. 结束
2. 如果 X 是以 '/' 开头
   a. 设 Y 为文件系统根目录
3. 如果 X 是以 './' 或 '/' 或 '../' 开头
   a. 加载文件(Y + X)
   b. 加载目录(Y + X)
4. 加载Node模块(X, dirname(Y))
5. 抛出 "未找到"

加载文件(X)
1. 如果 X 是一个文件，加载 X 作为 JavaScript 文本。结束
2. 如果 X.js 是一个文件，加载 X.js 作为 JavaScript 文本。结束
3. 如果 X.json 是一个文件，解析 X.json 成一个 JavaScript 对象。结束
4. 如果 X.node 是一个文件，加载 X.node 作为二进制插件。结束

加载索引(X)
1. 如果 X/index.js 是一个文件，加载 X/index.js 作为 JavaScript 文本。结束
3. 如果 X/index.json  是一个文件，解析 X/index.json 成一个 JavaScript 对象。结束
4. 如果 X/index.node 是一个文件，加载 X/index.node 作为二进制插件。结束

加载目录(X)
1. 如果 X/package.json 是一个文件，
   a. 解析 X/package.json，查找 "main" 字段
   b. let M = X + (json main 字段)
   c. 加载文件(M)
   d. 加载索引(M)
2. 加载索引(X)

加载Node模块(X, START)
1. let DIRS=NODE_MODULES_PATHS(START)
2. for each DIR in DIRS:
   a. 加载文件(DIR/X)
   b. 加载目录(DIR/X)

NODE_MODULES_PATHS(START)
1. let PARTS = path split(START)
2. let I = count of PARTS - 1
3. let DIRS = []
4. while I >= 0,
   a. if PARTS[I] = "node_modules" CONTINUE
   b. DIR = path join(PARTS[0 .. I] + "node_modules")
   c. DIRS = DIRS + DIR
   d. let I = I - 1
5. return DIRS
```

### 如何理解 module.exports/exports？

### 如何理解 node_modules？

### 核心模块的编译原理？

* JavaScript 核心模块的编译过程
* C、C++ 核心模块的编译过程

## Node 内建模块

### 如何理解 ArrayBuffer/Unit8Array/TypedArray？

* ArrayBuffer
  * ArrayBuffer 对象用来表示**通用的、固定长度的**原始二进制数据缓冲区。**ArrayBuffer 不能直接操作，而是要通过[类型数组对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) 或 [`DataView`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView) 对象来操作**，它们会将缓冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。
  * 从 ECMAScript 2015 开始，ArrayBuffer 对象需要用 new 运算符创建。如果调用构造函数时没有使用 new，将会抛出 TypeError 异常。
* Unit8Array
  * Uint8Array 数组类型表示一个 8 位无符号整型数组，创建时内容被初始化为 0。创建完后，可以以**对象的方式或使用数组下标索引的方式**引用数组中的元素。
* 从 ArrayBuffer 到 TypedArray
  * ArrayBuffer 本身只是一个 0 和 1 存放在一行里面的一个集合，ArrayBuffer 不知道第一个和第二个元素在数组中该如何分配。
  * 为了能提供上下文，我们需要将其封装在一个叫做 View 的东西里面。这些在数据上的 View 可以被添加进确定类型的数组，而且我们有很多种确定类型的数据可以使用。
    * 可以使用一个 Int8 的确定类型数组来分离存放 8 位二进制字节。
    * 可以使用一个无符号的 Int16 数组来分离存放 16 位二进制字节，这样如果是一个无符号的整数也能处理。
    * 甚至可以在相同基础的 Buffer 上使用不同的 View，同样的操作不同的 View 会给你不同的结果。
  * 在这种方式中，ArrayBuffer 基本上扮演了一个原生内存的角色，它模拟了像 C 语言才有的那种直接访问内存的方式。**你可能想知道为什么我们不让程序直接访问内存，而是添加了这种抽象层，因为直接访问内存将导致一些安全漏洞**。

### 如何理解 Node Buffer？

* 在 ECMAScript 2015 (ES6) 引入 [`TypedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) 之前，JavaScript 语言没有读取或操作二进制数据流的机制。Buffer 类被引入作为 Node.js API 的一部分，使其可以在 TCP 流或文件系统操作等场景中处理二进制数据流。
* **Buffer 类的实例类似于整数数组，但 Buffer 的大小是固定的、且在 V8 堆外分配物理内存。 Buffer 的大小在被创建时确定，且无法调整。**
* 在 Node.js v6 之前的版本中，Buffer 实例是通过 Buffer 构造函数创建的，它根据提供的参数返回不同的 Buffer：
* Buffer 的内存管理：
  * 8K 内存池：在 Node.js 应用程序启动时，为了方便地、高效地使用 Buffer，会创建一个大小为 8K 的内存池。
  * 当未设置编码的时候，默认使用 utf8 编码；
  * 当字符串所需字节数大于4KB，则直接进行内存分配；
  * 当字符串所需字节数小于4KB，但超过预分配的 8K 内存池的剩余空间，则重新申请 8K 的内存池；
  * 调用 `new FastBuffer(allocPool, poolOffset, length)` 创建 FastBuffer 对象，进行数据存储，数据成功保存后，会进行长度校验、更新 poolOffset 偏移量和字节对齐等操作。
* Array slice() 和 Buffer slice() 的区别：
  * Array slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象，且原始数组不会被修改。
  * Buffer slice() 返回一个指向相同原始内存的新建的 Buffer，但做了偏移且通过 start 和 end 索引进行裁剪。注意，修改这个新建的 Buffer 切片，也会同时修改原始的 Buffer 的内存，因为这两个对象所分配的内存是重叠的。

### 如何理解 Node Stream？

* 流是数据的集合 —— 就像数组或字符串一样。流与它们的不同之处在于，流可能无法立马可用，并且它们不需要全部载入内存中。这种特性使得流能够处理大量数据，或者在一个时刻处理来自外部数据源的数据。
* Node.js 有四种类型的流：
  * Readable：表示数据能够被消费，例如可以通过 `fs.createReadStream()` 方法创建可读流。
    * `HTTP res Client`、`HTTP req Server`、`fs read streams`、`zlib streams`、`crypto streams`、`TCP sockets`、`child process stdout and stderr`
  * Writable：表示数据能被写，例如可以通过 `fs.createWriteStream()` 方法创建可写流。
    * `HTTP req Client`、`HTTP res Server`、`fs write streams`、`zlib streams`、`crypto streams`、`TCP sockets`、`child process stdin`、`process.stdout`、`process.stderr`
  * Duplex：表示既是 Readable 流也是 Writable 流，如 TCP Socket。
  * Transform：也是 Duplex 流，能够用来修改或转换数据。例如 `zlib.createGzip` 方法用来使用 gzip 压缩数据。你可以认为 transform 流是一个函数，它的输入是 Writable 流，输出是 Readable 流。
* 所有的流都是 EventEmitter 的实例，它们能够监听或触发事件，用于控制读取和写入数据。Readable 与 Writable 流支持的常见的事件和方法：
  * Readable Stream
    * Events：`data`、`end`、`error`、`close`、`readble`
    * Functions：
      * `pipe()`、`unpipe()`
      * `read()`、`unshift()`、`resume()`
      * `pause()`、`isPaused()`
      * `setEncoding()`
  * Writable Stream
    * Events：`drain`、`finish`、`error`、`close`、`pipe/unpipe`
    * Functions：`write()`、`end()`、`cork()`、`uncork()`、`setDefaultEncoding()`

### 如何理解 Node Net？

* Node.js 的网络模块架构：在 Node.js 的模块里面，与网络相关的模块有：**Net**、**DNS**、**HTTP**、**TLS/SSL**、**HTTPS**、**UDP/Datagram**，除此之外，还有 v8 底层相关的网络模块有 `tcp_wrap.cc`、`udp_wrap.cc`、`pipe_wrap.cc`、`stream_wrap.cc` 等等，在 JavaScript 层以及 C++ 层之间通过 `process.binding `进行桥接相互通信。
* `net` 模块提供了创建基于流的 TCP 或 [IPC](http://nodejs.cn/api/net.html#net_ipc_support) 服务器 ([`net.createServer()`](http://nodejs.cn/api/net.html#net_net_createserver_options_connectionlistener)) 和客户端 ([`net.createConnection()`](http://nodejs.cn/api/net.html#net_net_createconnection)) 的异步网络 API。

### 如何理解 Node HTTP？

* 一个简单 HTTP 请求的流程
  * 调用 `http.createServer()` 方法创建 server 对象，该对象创建完后，我们调用 `listen()` 方法执行监听操作。
  * 当 server 接收到客户端的连接请求，在成功创建 socket 对象后，会触发 `connection` 事件。
  * 当 `connection` 事件触发后，会执行对应的 `connectionListener` 回调函数。在函数内部会利用 HTTPParser 对象，对请求报文进行解析。
  * 在完成请求头的解析后，会创建 IncomingMessage 对象，并填充相关的属性，比如 url、httpVersion、method 和 headers 等。
  * 在配置完 IncomingMessage 对象后，会调用 parserOnIncoming 函数，在该函数内会构建 ServerResponse 响应对象，如果请求头不包含 expect 字段，则 server 就会触发 `request` 事件，并传递当前的请求对象和响应对象。
  * `request` 事件触发后，就会执行我们设定的 `requestListener` 函数。

## 工程

### 如何理解 BFF 层？



### 动手实现中间件

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

### 如何实现多个 Node 的负载均衡？

### 动手实现一个 UNIX 域套接字服务器？

```javascript
const net = require("net");
const server = net.createServer(c => {
  c.on("end", () => {
    console.log("client disconnected");
  });
  c.write("hello\r\n");
  c.pipe(c);
});
server.on("error", err => {
  throw err;
});
// server.listen(path[, backlog][, callback]) for IPC servers
server.listen("/tmp/echo.sock", () => {
  console.log("server bound");
});
```

```bash
➜  ~ nc -U /tmp/echo.sock
hello
semlinker
semlinker
i love node
i love node
```

## NPM

### NPM 的常见操作？

### 编写 NPM 包都需要注意什么？

### 如何发布私有 NPM 包？

