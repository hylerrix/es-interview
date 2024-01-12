
## [「React 进阶」 学好这些 React 设计模式，能让你的 React 项目飞起来](https://juejin.cn/post/7007214462813863950)

* React 的**提供者模式**，通过 `context` 保存全局的主题，然后将 `theme` 通过 `Provider` 形式传递下去，需要 theme ，那么消费 context ，就可以了，这样的好处是，只要 theme 改变，消费 context 的组件就会重新更新，达到了切换主题的目的。
* 表单设计场景也需要一定程度上的 React 的设计模式，首先对于表单状态的整体验证需要外层的 `Form` 绑定事件控制，调度表单的状态下发，验证功能。内层对于每一个表单控件还需要 `FormItem` 收集数据，让控件变成受控的。 这样的 `Form` 和 `FormItem` 方式，就是通过**组合模式**实现的。

### 组合模式：容器组件包裹 - Tabs 实现

（Vue 中叫插槽）

* 隐式混入 props：
* 通过 React.cloneElement 向 children 中混入其他的 props
	* 直接在原来的 children 基础上加入新属性不可以，如 `props.children.props.author = 'alien'`。
	* 这样会报错，对于 props ，React 会进行保护，我们无法对 props 进行拓展。所以要想隐式混入 props ，只能通过 `cloneElement` 来实现。

实现类似于 v-if 的代码：

```typescript
export default ()=>{
    return <Groups>
    <Item  isShow name="《React进阶实践指南》" />
    <Item  isShow={false} name="《Nodejs深度学习手册》" />
    <div>hello,world</div>
    { null }
</Groups>
}
```

```typescript
function Item (props){
    return <div> 名称： {props.name} </div>
}
/* Groups 组件 */
function Groups (props){
    const newChildren = []
    React.Children.forEach(props.children,(item)=>{
        const { type ,props } = item || {}
        if(isValidElement(item) && type === Item && props.isShow  ){
            newChildren.push(item)
        }
    })
    return  newChildren
}
```


* 组合模式可以轻松的实现内外层通信的场景，原理就是通过外层组件，向内层组件传递回调函数 `callback` ，内层通过调用 `callback` 来实现两层组合模式的通信关系。
* 给组件函数或者类绑定静态属性，这里可以统一用 **`displayName`** 来标记组件的身份
	* **displayName 主要用于调试，这里要记住组合方式，可以使用子组件的静态属性就可以了**
* 组合模式通过外层组件获取内层组件 children ，通过 cloneElement 传入新的状态，或者控制内层组件渲染。
- 组合模式还可以和其他组件组合，或者是 render props，拓展性很强，实现的功能强大。

### render props 模式

* `render props` 模式和组合模式类似。区别不同的是，用函数的形式代替 `children`。函数的参数，由容器组件提供，这样的好处，将容器组件的状态，提升到当前外层组件中，这个是一个巧妙之处，也是和组合模式相比最大的区别。
* 相比传统的组合模式，render props 还有一个就是灵活性，可以通过容器组件的状态和当前组件的状态结合，派生出新的状态。比如如下
* 接下来我们总结一下 render props 的特点。
	- 容器组件作用是传递状态，执行 children 函数。
	- 外层组件可以根据容器组件回传 props ，进行 props 组合传递给子组件。
	- 外层组件可以使用容器组件回传状态。


### hoc 模式

* hoc 高阶组件模式也是 React 比较常用的一种包装强化模式之一，高阶函数是接收一个函数，返回一个函数，而所谓高阶组件，就是接收一个组件，返回一个组件，返回的组件是根据需要对原始组件的强化。
* hoc 的实现有两种方式，**属性代理**和**反向继承**。
* 属性代理
	* `function HOC(WrapComponent){ return class Advance extends React.Component{}}`
	* 特点
		* ① 正常属性代理可以和业务组件低耦合，零耦合，对于条件渲染和 `props` 属性增强,只负责控制子组件渲染和传递额外的 `props` 就可以，所以无须知道，业务组件做了些什么。所以正向属性代理，更适合做一些开源项目的 `hoc` ，目前开源的 `HOC` 基本都是通过这个模式实现的。
		- ② 同样适用于 `class` 声明组件，和 `function` 声明的组件。
		- ③ 可以完全隔离业务组件的渲染,相比反向继承，属性代理这种模式。可以完全控制业务组件渲染与否，可以避免反向继承带来一些副作用，比如生命周期的执行。
		- ④ 可以嵌套使用，多个 hoc 是可以嵌套使用的，而且一般不会限制包装HOC的先后顺序。
	- 用处
		- 强化 props & 抽离state。
		- 条件渲染，控制渲染，分片渲染，懒加载。
		- 劫持事件和生命周期。
		- ref控制组件实例。
		- 添加事件监听器，日志
* 反向继承
	* `function HOC (Component){ return class wrapComponent extends Component{}}`
	* 当前高阶组件就是继承后，加强型的业务组件。这种方式类似于组件的强化
	* 特点
		* ① 方便获取组件内部状态，比如 state，props, 生命周期, 绑定的事件函数等
		- ② es6 继承可以良好继承静态属性。我们无须对静态属性和方法进行额外的处理
	- 用处
		- 劫持渲染，操纵渲染树。
		- 控制/替换生命周期，直接获取组件状态，绑定事件。
- 注意事项
	- 1 谨慎修改原型链。
	- 2 继承静态属性，这里推荐一个库 `hoist-non-react-statics` 自动拷贝所有的静态方法。
	- 3 跨层级捕获 `ref`，通过 `forwardRef`转发 `ref`。
	- 4 render 中不要声明 `HOC`，如果在 render 声明 hoc，可能会造成组件反复挂载情况发生。

### 提供者模式 - ContextProvider

* 提供者永远要在消费者上层，正所谓水往低处流，提供者一定要是消费者的某一层父级*
* 全局传递状态，保存状态


### 类组件继承


* React 有十分强大的组合模式。我们推荐使用组合而非继承来实现组件间的代码重用
* 虽然 React 官方推荐**用组合方式**，而**非继承方式**。但是也不是说明继承这种方式没有用武之地，继承方式还是有很多应用场景的。
* 继承优势：
	* 可以控制父类 render，还可以添加一些其他的渲染内容；
	- 可以共享父类方法，还可以添加额外的方法和属性。

## 更多

* 有些 hook 被设计为：依赖项数组 + 回调的形式，比如： useEffect useMemo
* 在正常情况下，一次更新，同一个组件只会`render`一次。但还有两种情况，一次更新同一个组件可能`render`多次：
	* 情况 1 并发更新：
		* 在并发更新下，存在**低优先级更新进行到中途，被高优先级更新打断**的情况，这种情况下，同一个组件可能经历2次更新
		* 低优先级更新（被打断）、高优先级更新（没打断）
	* 情况 2 unwind情况：
		* 在React中，有一类组件，在render时是不能确定渲染内容的——
		* `Error Boundray`：在`render`进行到此时，`React`不知道是否应该渲染**报错对应的UI**，只有继续遍历`Error Boundray`的子孙组件，遇到了报错，才知道最近的`Error Boundray`需要渲染成**报错对应的UI**。
		* `Suspense`：更新进行到`Suspense`时，是不知道是否应该渲染**fallback对应的UI**，只有继续遍历`A`、`B`，发生挂起后，才知道`Suspense`需要渲染成**fallback对应的UI**。
	* 对于上述两种情况，`React`中存在一种**在同一个更新中的回溯，重试机制**，被称为`unwind`流程。
* Preact 引入了 Signals，提供了快速的响应式状态原语（或者叫原子吧）
	* 感觉上像是使用原始数据结构
	- 能根据值的变化自动更新
	- 直接更新 DOM （换句话来说无 VDOM）
	- 没有依赖数组
	- Signals 跳过了数据在组件树中的传递，而是直接更新所引用的组件。这样开发者就能降低使用心智，保证性能最佳。
- Signals 比 Hooks 好的几点
	- 默认惰性求值（lazy evaluate）- 只有被使用到的才会被监听和更新
	- 最佳更新策略
	- 最佳依赖追踪策略 - 不像 hooks 需要指定依赖
	- 直接访问状态值，不需要 selector 或其他 hooks
- Signals 可以单独[品尝使用](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fpreactjs%2Fsignals "https://github.com/preactjs/signals")，不用依附 UI 框架
	- SolidJS 响应式也是也 Signal 作为基础
	- 一方面可以将 Signal 作为组件的 local state，也可以定义为 global State
	- SolidJS 与 Mobx 和 Vue 的响应式非常相似，但是不会处理 VDOM，而是直接更新 DOM。所以 SolidJS 的性能表现也比较不错
- Observables(Mobx等)，Atoms(Recoil,Jotai等)，Refs(Vue等)。不过基本意思都一样，表示一个响应式数据的单元。
	- Effect 也就是在数据更新时的监听器，作为响应式数据的基础，也是必不可少的一环
	- 衍生: Derivations 是指数据的衍生状态，本质上也可以认为是 Signals 的变种，常见命令可能有 computed, memo 等
	- 衍生能缓存计算结果，避免重复的计算，并且也能自动追踪依赖以及同步更新。
- 响应式数据管理会存储不同节点之间的链接关系，当每次节点更新之后，会重新检查链接关系。如果不在关联，就会解绑链接，取消依赖。
	- 另外响应式还有一点就是同步更新，同步更新避免了状态不一致的问题，也提高了更好的预测性和可测试性。
- `React-Query`的定位是**前端缓存库**。
	- **渲染任务逐渐移向后端**就是指`SSR`
	- 传统的SSR主要应用在数据的首屏渲染。当首屏渲染完成，数据的后续同步操作还是发生在前端。所以，React-Query还是有用武之地。
	- `HTML`结构可以直接渲染，很方便，但也失去了灵活性（不好更新）。所以传统`SSR`主要应用在**首屏渲染**这样的一次性过程。
- 随着`SSR`框架开始支持**序列化数据**，这一切都变了。
	- 在`React Server Component`中，同样的`JSX`结构经由后端序列化后，传递给前端的是`Content-Type`为`text/x-component`的——序列化数据
	- `1:["$","p",null,{"children":["你好，卡颂"]}]`
	- 反序列化后`React`可以识别；每行一条数据，方便流式传输
	- 序列化数据可以显著提高`SSR`的灵活性。
	- **序列化数据**方案还有个好处 —— 凡是能够序列化的模块，都能将逻辑放在后端执行。
- `function-calling`功能极大扩展了`LLM`的应用场景（`chatGPT`的插件功能就是通过`function-calling`实现的）
	- 只受限于`openAI`的模型，其他模型（比如`Llama 2`）没有该功能    
	- `LLM`的响应只有一个函数调用，无法在一次响应中调用多个函数
	- 函数的类型声明对开发者不够友好，内部实现比较黑盒，当返回的函数调用不符合预期时，不好纠错
- TypeChat
	- 可以认为`TypeChat`是使用`TS`定义类型的`function-calling`
	- `TypeChat`不和任何`LLM`绑定，只要能同时理解自然语言与编程语言的`LLM`都可以使用`TypeChat`。
	- `TypeChat`最大的亮点在于 —— 他能够对输出结果自动纠错。
	- 因为我们有**输出结果的TS类型声明**，所以可以用`TS编译器`检查输出结果是否符合类型声明，如果不符合，`TypeChat`可以将**TS报错信息**连同**输出结果**再次输入给`LLM`，让他纠错后重新输出。
	- `TypeChat`会将上述报错信息连同输出结果再输入给`LLM`让他纠错。
- 浏览器原生的`View Transitions API`比`React`中的`useTransition` 更强大
	- 本质来说，操作视图的是`React`，而不是开发者。所以，开发者很难控制过渡效果。
	- 要说缺点，`View Transitions API`是`Web`平台独有的，且兼容性不好，而`useTransition`依赖`React`核心的并发更新能力，是跨端的。
- 虽然`CRA`开箱即用，但他提供的能力并不全面，比如他并不提供：
	- 状态管理方案
	- 路由方案
	- 数据请求方案
- 组件的请求瀑布问题 - 组件渲染后才能请求数据，子组件的渲染更排后
	- 这个问题常见的解决方法是 —— 将请求数据的逻辑收敛到路由方案中。
- **RSC协议**中**id映射**的完整过程：
	- 业务开发时通过`.server ｜ client`后缀区分组件类型
	- 后端代码编译时，所有`RCC`（即`.client`后缀文件）会编译出独立文件（这一步是[react-server-dom-webpack](https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Freact-server-dom-webpack "https://www.npmjs.com/package/react-server-dom-webpack")插件做的，对于`Vite`，也有人提了[Vite插件的实现 PR](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Ffacebook%2Freact%2Fpull%2F26926 "https://github.com/facebook/react/pull/26926")）
	- `React`后端返回给前端的`RSC`数据中包含了组件树（`J标记`）等按行表示的数据
	- `React`前端根据`J标记`对应数据渲染组件树，遇到**引用RCC**（形如`M[id]`）时，根据`id`发起`JSONP`请求
	- 请求返回该`RCC`对应组件代码，请求过程的`pending`状态由`<Suspense/>`展示
- 不同于一些rpc协议会基于TCP或UDP实现，RSC协议直接基于HTTP协议实现，其Content-Type为text/x-component。
- `Module Component`（即函数组件返回带有`render`属性的对象）。
- 在`v18`中，只有使用并发特性（比如`useTransiton`）触发的更新才是并发更新，其他情况触发的更新都是同步更新。
- 在`React`、`ReactDOM`中都存在变量`__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED`，这个变量的作用是 —— 在不同包之间共享数据。



## [数据流 2022](https://mp.weixin.qq.com/s/26_yYH5fbDyMTEKOMcNxtA)

- 说到数据流，大家可能会想到老牌的 Redux、Dva、Mobx、RxJS、XState，也可能会想到新一代的 Recoil、Jotai、Zustand、Valtio、React Tracked、Redux Toolkit，以及还有很多使用度没那么广的方案 use-context-selector、react-easy-state、hox、useModel in umi、icestore、kylva、overmind 等，同时很多简单场景可能会直接裸用 hooks 组织。这些方案大家应该多少都有用过一些，那他们之间有啥区别？又应该如何选择？选择时应该如何考虑呢？
- **数据流方案应该关注啥？** 整理之后发现还是有不少的。比如心智模型、读取数据、写入数据、数据推导、异步 Action、渲染性能优化、Suspense 并发模式支持、SSR 支持、React 之外访问、组件封装、瞬时更新、插件中间件扩展、Redux DevTools 支持、兼容性、多实例和单实例、数据序列化能力、同步/异步更新、内存管理、测试、包尺寸等。（还有啥？）大部分数据流方案都考虑了这些点，区别是实现方式和使用体验上的差异。
- **心智模型**指的是「外部 store」和「内部 store」的区别。外部 store 以数据为中心，设计应用时设计的是数据，从数据角度出发，无需考虑组件，从上到下地组织，比如 Redux、Dva、Zustand 等都属于这类；内部 store 以 React 组件为中心，设计应用时以组件为主，从下到上原子化的组织（原子是一个最小但完整的状态单位，它们是小块的状态，可以连接在一起形成新的派生状态，最终形成了一个图），比如新出的 Recoil、Jotai、React Tracked 都是此类。
- **写入数据**直接影响研发体验，分「immutable」和「mutable」。比如 `state => return { ...state, count: state.count + 1 }` 是 immutable，而 `state => state.count += 1` 是 mutable，后者明显更符合编码直觉，尤其是涉及嵌套结构时，immutable 写起来会比较痛苦。从实现上看，基于 proxy 的通常是 mutable，比如 Valtio、React Tracked、MobX；其他都是 immutable。但由于 immer 的存在，很多 immutable 的方案都可借此实现 mutable 写入数据。那基于 proxy 是不是没优势了？不是的。
- proxy 影响的除了写入数据，还有**渲染优化**。渲染优化分手动、半自动和全自动。手动是通过 selector 实现，比如 Redux 系、Zustand 和 use-context-selector 都属于此类，selector 非常依赖开发者素质，select 多了就可能会导致不必要的渲染；全自动的有 Valtio、react-tracked、react-easy-state，实现方案是基于 Proxy 做的使用追踪，开发者无需关心默认最优渲染性能；半自动比如 Jotai、Recoil 和 Mobx[? 待确认]，需要用户手动声明依赖，实现方式是基于依赖追踪（a 依赖 b，b 更新了会导致 a 更新），有些基于 proxy 有些不是。
- 其他功能点简单说下我的理解。**异步 Action** 已是新一代数据流方案的基础能力，大多是 `async action(){}` 直接声明直接用，除了 Redux Toolkit 的用法还有点搓，但估计也是基于 Redux 方案优化的极限了？**Suspense 大家也已逐步支持**，主要是内部实现挑战，遇到 promise 也要 throw 出来，开发者使用上应该是透明的。**SSR 支持** 对于外部 Store 的数据流来说会稍显复杂，尤其是有多个 store 同时中间还存在共享依赖时会更麻烦，所以 Zustand 和 Valtio 都有 Context 模式以提供初始值。**React 之外访问**可能在 1% 的场景会用到，如果没有可能会形成卡点，据我了解应该就 jotai 不支持。**组件封装**是强需求，这也是单一 store 的 Redux 没落的原因之一，随着业务发展项目变多，肯定会有提取公共组件的需求，这方面 Redux 和 Dva 非常弱，而新出的外部 store 方案都是多 store，无此问题。**瞬时更新** 指拿最新数据但不订阅更新触发 rerender，通常基于 ref 都可实现。**兼容性** 的分水岭是 proxy，基于 proxy 唯一缺点就是兼容性。
- 数据流除了本地状态，还有来自远程服务器的状态需要同步。而很多 CURD 项目的 80% 需求只需要做后者，所以社区涌现出不少**专门解远程状态的库**，比如 React Query（已更名为 TanStack Query）、SWR、Apollo、Relay、RTK Query、use-request 等。广义地看，这些库也是数据流方案。同时不得不提的是，Remix 通过在服务端做数据加载的方式，把下图的数据流环 ui=fn(state) 扩展到了全栈。
- 数据流除了本地状态，还有来自远程服务器的状态需要同步。而很多 CURD 项目的 80% 需求只需要做后者，所以社区涌现出不少**专门解远程状态的库**，比如 React Query（已更名为 TanStack Query）、SWR、Apollo、Relay、RTK Query、use-request 等。广义地看，这些库也是数据流方案。同时不得不提的是，Remix 通过在服务端做数据加载的方式，把下图的数据流环 ui=fn(state) 扩展到了全栈。
