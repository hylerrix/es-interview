
## [React18 新特性解读 & 完整版升级指南](https://juejin.cn/post/7094037148088664078  )

* concurrent renderer，concurrent mode
* ReactDOM.unmountComponentAtNode(root) -> root.unmount()

```typescript
// React 17
const root = document.getElementById('root')!;
ReactDOM.render(<App />, root, () => {
  console.log('渲染完成');
});

// React 18
const AppWithCallback: React.FC = () => {
  useEffect(() => {
    console.log('渲染完成');
  }, []);
  return <App />;
};
const root = document.getElementById('root')!;
ReactDOM.createRoot(root).render(<AppWithCallback />);

// ReactDOM.hydrateRoot(root, <App />); // SSR
```

* 现在在定义`props`类型时，如果需要获取子组件`children`，那么你需要`显式的定义`
* `React 18` 通过在默认情况下执行批处理来实现了开箱即用的性能改进。
	* 在`React 18 之前`，我们只在 `React 事件处理函数` 中进行批处理更新。默认情况下，在`promise`、`setTimeout`、`原生事件处理函数`中、或`任何其它事件内`的更新都不会进行批处理
* Warning: Can't perform a React state update on an unmonted component.
	* 无法对未挂载（已卸载）的组件执行状态更新。这是一个无效操作，并且表明我们的代码中存在内存泄漏。
	* 常出现：
		* 在 useEffect 里面设置了定时器，或者订阅了某个事件，从而在组件内部产生了副作用，而且忘记 return 一个函数清除副作用；
		* 发送了一个异步请求，在异步函数还没有被 resolve 或者被 reject 的时候，我们就卸载了组件
	* 已经被 React 18 删除此报错
* const id = useId(); 支持同一个组件在客户端和服务端生成相同的唯一的 ID，避免 `hydration` 的不兼容，这解决了在 `React 17` 及 `17` 以下版本中已经存在的问题。因为我们的服务器渲染时提供的 `HTML` 是`无序的`，`useId` 的原理就是每个 `id` 代表该组件在组件树中的层级结构。
* useSyncExternalStore 由 `useMutableSource` 改变而来，主要用来解决外部数据撕裂问题。
	* 强制同步更新数据让 React 组件在 CM 下安全地有效地读取外接数据源。 在 Concurrent Mode 下，React 一次渲染会分片执行（以 fiber 为单位），中间可能穿插优先级更高的更新。
	* 假如在高优先级的更新中改变了公共数据（比如 redux 中的数据），那之前低优先的渲染必须要重新开始执行，否则就会出现前后状态不一致的情况。
	* 一般是三方状态管理库使用，我们在日常业务中不需要关注。因为 `React` 自身的 `useState` 已经原生的解决的并发特性下的 `tear（撕裂）`问题。
	* `redux` 在控制状态时可能并非直接使用的 `React` 的 `state`，而是自己在外部维护了一个 `store` 对象，用`发布订阅模式`实现了数据更新，脱离了 `React` 的管理，也就无法依靠 `React` 自动解决撕裂问题
* useInsertionEffect 只建议在 css-in-js 库来使用，执行时机在 `DOM` 生成之后，`useLayoutEffect` 之前，工作原理大致和 `useLayoutEffect` 相同，只是此时无法访问 `DOM` 节点的引用，一般用于提前注入 `<style>` 脚本
* 并发模式
	* 并发模式可帮助应用保持响应，并根据用户的设备性能和网速进行适当的调整
	* 该模式通过使渲染可中断来修复`阻塞渲染`限制
	* 在 `Concurrent` 模式中，`React` 可以同时更新多个状态
	* `React 17` 和 `React 18` 的区别就是：从`同步不可中断更新`变成了`异步可中断更新`。
		* Stack Reconciler -> Fiber Reconciler
	* 开启并发模式才能使用的特性：`useDeferredValue`、`useTransition`
* `startTransition`
	* 主要为了能在大量的任务下也能保持 UI 响应。这个新的 API 可以通过将特定更新标记为`“过渡”`来显著改善用户交互
	* 简单来说，就是被 `startTransition` 回调包裹的 `setState` 触发的渲染被标记为不紧急渲染，这些渲染可能被其他`紧急渲染`所抢占。
* useDeferredValue
	* 返回一个延迟响应的值，可以让一个`state` 延迟生效，只有当前没有紧急更新时，该值才会变为最新值。
	* 同：和 `startTransition` 一样，都是标记了一次非紧急更新。
	* 不同：`useTransition` 是把更新任务变成了延迟更新任务，而 `useDeferredValue` 是产生一个新的值，这个值作为延时状态。（一个用来包装方法，一个用来包装值）
	* 此时我们的任务被拆分到每一帧不同的 `task` 中，`JS脚本`执行时间大体在`5ms`左右，这样浏览器就有剩余时间执行**样式布局**和**样式绘制**，减少掉帧的可能性。

```typescript
useEffect(() => {
  // 使用了并发特性，开启并发更新
  startTransition(() => { setList(new Array(10000).fill(null)); });
}, []);

// ---

useEffect(() => {
  setList(new Array(10000).fill(null));
}, []);
// 使用了并发特性，开启并发更新
const deferredList = useDeferredValue(list);
```

* `fiber`为状态更新提供了可中断的能力
	* 并发更新的意义就是`交替执行`不同的任务，当预留的时间不够用时，`React` 将线程控制权交还给浏览器，等待下一帧时间到来，然后继续被中断的工作
	* 作为架构来说
		* 在旧的架构中，`Reconciler（协调器）`采用递归的方式执行，无法中断，节点数据保存在递归的调用栈中，被称为 `Stack Reconciler`，stack 就是调用栈；
		* 在新的架构中，`Reconciler（协调器）`是基于fiber实现的，节点数据保存在fiber中，所以被称为 `fiber Reconciler`。
	* 作为静态`数据结构`来说，每个fiber对应一个组件，保存了这个组件的类型对应的dom节点信息，这个时候，fiber节点就是我们所说的`虚拟DOM`。
	* 作为动态`工作单元`来说，fiber节点保存了该节点需要更新的状态，以及需要执行的副作用。

## 更多

* `useLayoutEffect`可以在绘制之前强制提前刷新`effect`。而像如下也会触发相同的行为。
	- ref `<div ref={HERE}>`
	- `requestAnimationFrame`
	- 从 `useLayoutEffect` 调度的微任务
- React团队的发展方向逐渐变化 —— 从面向开发者的前端框架变为面向上层框架的元框架—— `useTransition`、`useId`、`useMutableSource`、`useMutableSource`、`useFormStatus`
- 2023-06-02：react 包导出了 21 个 hooks，react-dom 包导出了 1 个 useFormStatus
- RSC规范属于React特性，来自于React Canary。规范的落地可以通过react-server-dom-webpack包实现。整个工作流程包括三个阶段：
	- 服务端编译时，对应 `react-server-dom-webpack/plugin`
	- 服务端运行时，对应 `react-server-dom-webpack/server` 
	- 客户端运行时，对应 `react-server-dom-webpack/client`
	- 在`Next.js`中，`RSC`规范的落地被集成到框架内部，做到了开箱即用的`RSC`，并在此基础上衍生出更完善的功能（`App Router`）。
- Next.js SSR 的页面请求新前端组件时，需要以`JSONP`的形式请求回组件代码再渲染。
- `using`关键字是`tc39`提案[ECMAScript Explicit Resource Management](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftc39%2Fproposal-explicit-resource-management "https://github.com/tc39/proposal-explicit-resource-management")提出的，用于为各种资源（内存、`I/O`等）提供统一的生命周期管理（何时分配、何时释放等）。
	- `TS v5.2`率先引入了这个关键
	- 配合`async await`使用，可以降低由于忘记释放资源造成内存泄漏的可能性。
- `React v18.3`之后发布的新原生`hook` —— `use`
	- 这个`hook`可以接收两种类型数据：`React Context` 和 Promise
	- 此时如果这个`promise`处于`pending`状态，则最近一个祖先`<Suspense/>`组件可以渲染`fallback`。
