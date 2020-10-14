# 前端打包工具

Webpack、Babel、Parcel、Rollup...

## 什么是 DCE 和 Tree Shaking？

* DCE 是这样做的：直接把整个鸡蛋放到碗里搅拌做蛋糕，蛋糕做完后再慢慢的从里面挑出蛋壳；相反tree-shaking在开始阶段，就不会把蛋壳放进碗里，而是拿出蛋清和蛋黄放进碗里搅拌，蛋壳呢？蛋壳在一开始就已经丢进垃圾桶里了。
* tree-shaking 作为 rollup 的一个杀手级特性，能够利用 ES6 的静态引入规范，减少包的体积，避免不必要的代码引入。
* tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块语法的 静态结构 特性，例如 import 和 export。这个术语和概念实际上是由 ES2015 模块打包工具 rollup 普及起来的。
* 必须遵从的是 ES6 Module 规范
* Tree Shaking 的局限性：
  * 对于未执行到的代码，单独使用 rollup 并不能移除，依然需要依赖 uglifyJs。
  * 对于依赖运行时才能确定是否会使用代码，tree-shaking 无法删除。



## WebPack 是什么？

* 优化的两大方向：速度、体积

## Webpack 5 有哪些新特性？

> 参考资料：[阔别两年，webpack 5 正式发布了！](https://juejin.im/post/6882663278712094727)

* Webpack 5：
  * 整体方向：
    * 尝试用持久性缓存来提高构建性能。
    * 尝试用更好的 Tree Shaking 和代码生成来改善包大小。
    * 尝试改善与网络平台的兼容性。
    * 尝试在不引入任何破坏性变化的情况下，清理那些在实现 v4 功能时处于奇怪状态的内部结构。
    * 试图通过现在引入突破性的变化来为未来的功能做准备，尽可能长时间地保持在 v5 版本上。

## 有哪些常见的 Webpack Loader？

* `raw-loader`：加载文件原始内容（utf-8）。
* `file-loader`：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)。
* `url-loader`：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码 (处理图片和字体)。
* `source-map-loader`：加载额外的 Source Map 文件，以方便断点调试。
* `svg-inline-loader`：将压缩后的 SVG 内容注入代码中。
* `image-loader`：加载并且压缩图片文件。
* `json-loader` 加载 JSON 文件（默认包含）。
* `handlebars-loader`: 将 Handlebars 模版编译成函数并返回。
* `babel-loader`：把 ES6 转换成 ES5。
* `ts-loader`: 将 TypeScript 转换成 JavaScript。
* `awesome-typescript-loader`：将 TypeScript 转换成 JavaScript，性能优于 ts-loader。
* `sass-loader`：将SCSS/SASS代码转换成CSS。
* `css-loader`：加载 CSS，支持模块化、压缩、文件导入等特性。
* `style-loader`：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。
* `postcss-loader`：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀。
* `eslint-loader`：通过 ESLint 检查 JavaScript 代码。
* `tslint-loader`：通过 TSLint 检查 TypeScript 代码。
* `mocha-loader`：加载 Mocha 测试用例的代码。
* `coverjs-loader`：计算测试的覆盖率。
* `vue-loader`：加载 Vue.js 单文件组件。
* `i18n-loader`: 国际化。
* `cache-loader`: 可以在一些性能开销较大的 Loader 之前添加，目的是将结果缓存到磁盘里。

## 有哪些常见的 Webpack Plugin

* `define-plugin`：定义环境变量 (Webpack4 之后指定 mode 会自动配置)
* `ignore-plugin`：忽略部分文件
* `html-webpack-plugin`：简化 HTML 文件创建 (依赖于 html-loader)
* `web-webpack-plugin`：可方便地为单页应用输出 HTML，比 html-webpack-plugin 好用
* `uglifyjs-webpack-plugin`：不支持 ES6 压缩 (Webpack4 以前)
* `terser-webpack-plugin`: 支持压缩 ES6 (Webpack4)
* `webpack-parallel-uglify-plugin`: 多进程执行代码压缩，提升构建速度
* `mini-css-extract-plugin`: 分离样式文件，CSS 提取为独立文件，支持按需加载 (替代extract-text-webpack-plugin)
* `serviceworker-webpack-plugin`：为网页应用增加离线缓存功能
* `clean-webpack-plugin`: 目录清理
* `ModuleConcatenationPlugin`: 开启 Scope Hoisting
* `speed-measure-webpack-plugin`: 可以看到每个 Loader 和 Plugin 执行耗时 (整个打包耗时、每个 Plugin 和 Loader 耗时)
* `webpack-bundle-analyzer`: 可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)

## Loader 和 Plugin 的区别与实现？

Loader：

* `Loader` 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。
* `Loader` 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。
* 编写 Loader 的思路：
  * Loader 支持链式调用，所以开发上需要严格遵循“单一职责”，每个 Loader 只负责自己需要负责的事情。
  * Loader 运行在 Node.js 中，我们可以调用任意 Node.js 自带的 API 或者安装第三方模块进行调用
  * Webpack 传给 Loader 的原内容都是 UTF-8 格式编码的字符串，当某些场景下 Loader 处理二进制文件时，需要通过 exports.raw = true 告诉 Webpack 该 Loader 是否需要二进制数据
  * 尽可能的异步化 Loader，如果计算量很小，同步也可以
  * Loader 是无状态的，我们不应该在 Loader 中保留状态
  * 使用 loader-utils 和 schema-utils 为我们提供的实用工具
  * 加载本地 Loader 方法
    * Npm link
    * ResolveLoader

Plugin：

* `Plugin` 就是插件，基于事件流框架 `Tapable`，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
* `Plugin` 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。
* 编写 Plugin 的思路：
  * Webpack 在运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在特定的阶段钩入想要添加的自定义功能。Webpack 的 Tapable 事件流机制保证了插件的有序性，使得整个系统扩展性良好。
  * compiler 暴露了和 Webpack 整个生命周期相关的钩子
  * compilation 暴露了与模块和依赖有关的粒度更小的事件钩子
  * 插件需要在其原型上绑定apply方法，才能访问 compiler 实例
  * 传给每个插件的 compiler 和 compilation对象都是同一个引用，若在一个插件中修改了它们身上的属性，会影响后面的插件
  * 找出合适的事件点去完成想要的功能
    * emit 事件发生时，可以读取到最终输出的资源、代码块、模块及其依赖，并进行修改(emit 事件是修改 Webpack 输出资源的最后时机)
    * watch-run 当依赖的文件发生变化时会触发
  * 异步的事件需要在插件处理完任务时调用回调函数通知 Webpack 进入下一个流程，不然会卡住

## Webpack 构建流程？

Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：

* 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数。
* 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译。
* 确定入口：根据配置中的 entry 找出所有的入口文件。
* 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
* 完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。
* 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会。
* 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。

## Webpack 的事件流、声明周期和 Tapabel？

* Webpack 本质上一种基于事件流的编程范例，其实就是一系列的插件运行。
* Webpack 主要使用 Compiler 和 Compilation 两个类来控制 Webpack 的整个生命周期。他们都继承了 Tapabel 并且通过 Tapabel 来注册了生命周期中的每一个流程需要触发的事件。
* Tapabel 是一个类似于 Node.js 的 EventEmitter 的库，主要是控制钩子函数的发布与订阅，是 Webpack 插件系统的大管家。

```javascript
const {
    SyncHook,                   // 同步钩子
    SyncBailHook,               // 同步熔断钩子
    SyncWaterfallHook,          // 同步流水钩子
    SyncLoopHook,               // 同步循环钩子
    AsyncParalleHook,           // 异步并发钩子
    AsyncParallelBailHook,      // 异步并发熔断钩子
    AsyncSeriesHook,            // 异步串行钩子
    AsyncSeriesBailHook,        // 异步串行熔断钩子
    AsyncSeriesWaterfallHook     // 异步串行流水钩子
} = require("tapable");
```

## Webpack 的 HMR 热更新原理

* `Webpack` 的热更新又称热替换（`Hot Module Replacement`），缩写为 `HMR`。
* 为什么需要 HMR：
  * Webapck HMR 不会刷新浏览器，而是运行时对模块进行热替换，保证了应用状态不会丢失，提升了开发效率。
  * 自动监听、自动打包、自动刷新页面。
  * HMR 兼容市面上大多前端框架或库。
* HMR 的流程：
  * HMR的核心就是客户端从服务端拉去更新后的文件，准确的说是 chunk diff (chunk 需要更新的部分)。
  * 实际上 WDS 与浏览器之间维护了一个 `Websocket`，当本地资源发生变化时，WDS 会向浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对比。
  * 客户端对比出差异后会向 WDS 发起 `Ajax` 请求来获取更改内容(文件列表、hash)，这样客户端就可以再借助这些信息继续向 WDS 发起 `jsonp` 请求获取该chunk的增量更新。
  * 后续的部分(拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？)由 `HotModulePlugin` 来完成，提供了相关 API 以供开发者针对自身场景进行处理，像`react-hot-loader` 和 `vue-loader` 都是借助这些 API 实现 HMR。

## Webpack 构建速度如何优化？

* 使用 `高版本` 的 Webpack 和 Node.js
* `多进程/多实例构建`：HappyPack(不维护了)、thread-loader
* `压缩代码`
  - 多进程并行压缩
    - webpack-paralle-uglify-plugin
    - uglifyjs-webpack-plugin 开启 parallel 参数 (不支持ES6)
    - terser-webpack-plugin 开启 parallel 参数
  - 通过 mini-css-extract-plugin 提取 Chunk 中的 CSS 代码到单独文件，通过 css-loader 的 minimize 选项开启 cssnano 压缩 CSS。
* `图片压缩`
  - 使用基于 Node 库的 imagemin (很多定制选项、可以处理多种图片格式)
  - 配置 image-webpack-loader
* `缩小打包作用域`：
  - exclude/include (确定 loader 规则范围)
  - resolve.modules 指明第三方模块的绝对路径 (减少不必要的查找)
  - resolve.mainFields 只采用 main 字段作为入口文件描述字段 (减少搜索步骤，需要考虑到所有运行时依赖的第三方模块的入口文件描述字段)
  - resolve.extensions 尽可能减少后缀尝试的可能性
  - noParse 对完全不需要解析的库进行忽略 (不去解析但仍会打包到 bundle 中，注意被忽略掉的文件里不应该包含 import、require、define 等模块化语句)
  - IgnorePlugin (完全排除模块)
  - 合理使用alias
* `提取页面公共资源`：
  - 基础包分离：
    - 使用 html-webpack-externals-plugin，将基础包通过 CDN 引入，不打入 bundle 中
    - 使用 SplitChunksPlugin 进行(公共脚本、基础包、页面公共文件)分离(Webpack4内置) ，替代了 CommonsChunkPlugin 插件
* `DLL`：
  - 使用 DllPlugin 进行分包，使用 DllReferencePlugin(索引链接) 对 manifest.json 引用，让一些基本不会改动的代码先打包成静态资源，避免反复编译浪费时间。
  - HashedModuleIdsPlugin 可以解决模块数字id问题
* `充分利用缓存提升二次构建速度`：
  - babel-loader 开启缓存
  - terser-webpack-plugin 开启缓存
  - 使用 cache-loader 或者 hard-source-webpack-plugin
* `Tree shaking`
  - 打包过程中检测工程中没有引用过的模块并进行标记，在资源压缩时将它们从最终的bundle中去掉(只能对ES6 Modlue生效) 开发中尽可能使用ES6 Module的模块，提高tree shaking效率
  - 禁用 babel-loader 的模块依赖解析，否则 Webpack 接收到的就都是转换过的 CommonJS 形式的模块，无法进行 tree-shaking
  - 使用 PurifyCSS(不在维护) 或者 uncss 去除无用 CSS 代码
    - purgecss-webpack-plugin 和 mini-css-extract-plugin配合使用(建议)
* `Scope hoisting`
  - 构建后的代码会存在大量闭包，造成体积增大，运行代码时创建的函数作用域变多，内存开销变大。Scope hoisting 将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防止变量名冲突
  - 必须是ES6的语法，因为有很多第三方库仍采用 CommonJS 语法，为了充分发挥 Scope hoisting 的作用，需要配置 mainFields 对第三方模块优先采用 jsnext:main 中指向的ES6模块化语法
* `动态Polyfill`
  - 建议采用 polyfill-service 只给用户返回需要的polyfill，社区维护。 (部分国内奇葩浏览器UA可能无法识别，但可以降级返回所需全部polyfill)

## Webpack 如何进行可视化分析？

* VSCode 插件 `Import Cost`
* `bundlesize` 工具包
* 使用 `webpack-bundle-analyzer` 生成 `bundle` 的模块组成图
* `speed-measure-webpack-plugin`
* `webpack-bundle-analyzer`

## Webpack 的打包速度如何优化？

* HappyPack、Cache-loader、排除 node_modules、多线程压缩甚至可以采用分布式编译

## Webpack 5 有哪些新特性？

* 模块联邦：让代码直接在项目间利用 CDN 直接共享
  * 早期共享模块的三种方式： 
    * NPM 方式共享模块：抽离需要复用的模块为一个单独的 NPM 包。即使使用 Monorepo 可以一定程度解决重复安装和修改困难的问题，但依然需要走本地编译。
    * UMD 方式共享模块：模块用 Webpack UMD 模式打包，并输出到其他项目中。最常见。缺点：包体积无法达到本地编译时的优化效果，且库之间容易冲突。
    * 微前端方式共享模块：分为子应用独立打包和整体应用一起打包。模块复用外，需额外关注样式冲突、生命周期管理。
  * 模块联邦直接将一个应用的包应用于另一个应用，同时具备整体应用一起打包的公共依赖抽取能力。
  * 使用“中心应用”在线动态分发 Runtime 子模块，并不直接提供给用户使用。
* 使用持久化缓存提高构建性能。
* 使用更好的算法和默认值改进长期缓存。

## Babel 的原理？

使用 Babel：

* Babel 是一个通用的多用途 JavaScript 编译器。通过 Babel 你可以使用（并创建）下一代的 JavaScript，以及下一代的 JavaScript 工具。在得到 JavaScript 新特性广泛普及之前，Babel 能够让你提前（甚至数年）使用它们。
* ES6 代码输入 -> babylon 进行解析 -> 得到 AST -> plugin 用 babel-traverse 包对 AST 树进行遍历转译 -> 得到新的 AST 树 -> 用 babel-generator 通过 AST 树生成 ES5 代码。
* babel 只是转译新标准引入的新语法（箭头函数），而新标准引入的新原生对象以及部分对象新增的原型方法（Proxy、Set），需要 polyfill
* 转义：“源码到源码”编译

为 Babel 编写插件：

* Babel 解析源码为成 AST，然后插件更改 AST，最后由 Babel 输出代码。

## Babel 和 TypeScript 的异同？

* 相同：
  * 都可以将更高前沿的 JavaScript 新特性编译为普通版本的 JavaScript 代码从而兼容各大浏览器。
* 不同：
  * TypeScript 只专注 TS 语言本身的新特性，Babel 可以通过各种自定义的插件编译各种主流标准下的 JavaScript 代码。
  * 
* 联姻：
  * Babel 推出了编译 TypeScript 的插件：@babel/preset-typescript

## Babel 7 的新特性？




## 参考资料

* https://juejin.im/post/6844904094281236487