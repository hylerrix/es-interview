# React 基础

> https://github.com/semlinker/reactjs-interview-questions
>
> redux-saga，redux-rhunk
>
> 如何封装自己的 Hooks？
>
> react 时间切片和帧率，fiber 分段机制
>
> Create React App Webpack 配置原理，react-app-rewired 注入原理
>
> 如何合并多个 setSate 后使用新的值进行下一步操作
>
> React 的 render 方法原理 -> createElement() 方法创建了 ReactElement 类对象
>
> React console.log(一个包含若干子组件的组件对象) 后能看到什么？
>
> 继承了哪些类，原型上有什么方法
> 关于[react diff](https://www.zhihu.com/search?q=react diff&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A1870290555})。react的diff与vue2的diff有什么区别？与vue3呢？仅仅是lis吗？
> 关于react fiber。fiber的引入究竟对react有什么架构层面的影响，[double fiber tree](https://www.zhihu.com/search?q=double fiber tree&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A1870290555})是否有必要存在？
> 关于[react schedule](https://www.zhihu.com/search?q=react schedule&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A1870290555})。schedule究竟以一个什么形式，什么规律来运行，中断和恢复呢？lane解决了什么问题？

reactive core有自己实现过吗？为什么要做这种启发式的aot？slot的实现？

* React
  * 比如，在一个异步接口中 setHook，后立马访问该值，该值是否已更新？
    * 比如 setLoading(true)
  * React 是如何精准的捕获数据的变动的
  * 如何通过 Key 值强制刷新一个组件
  * 如何深入理解 ref 和 dom 的关系，并在 React 中实战
* React Router
  * 单页面应用Router的实现机制？
  * 为什么 React Router 中使用 Switch 关键字 ？
  * React Router 与常规路由有何不同？
  * 它是怎么实现跳转不刷新页面的？
  * React 路由的底层实现原理是怎样的？

<!--

* React 中的合成事件是什么?
  * `SyntheticEvent` 是对浏览器原生事件的跨浏览器包装。它的 API 与浏览器的原生事件相同，包括 `stopPropagation()` 和 `preventDefault()`，除了事件在所有浏览器中的工作方式相同。

-->

## React 的内部分层？

* Virtual DOM
* Recociler：
  * v15 时是 Stack Reconciler：不能被打断、递归渲染、用 JS 自身的函数调用栈
  * v16 时是 Fiber Reconciler：
    * 实现自己的调用栈、以链表形式遍历组件树、灵活执行任务
    * 调用生命周期、Diff 运算
    * 加入了时间片调度，Fiber Reconciler 每执行一段时间，控制权交给浏览器，以分段执行
* Render：React DOM、React Native

## React 15~17 的新特性（生命周期）？

* React v15：
  * 生命周期：
    * `componentDidMount`：render 阶段触发一次，用来 ajax 调用。
    * `componentDidUpdate(prevProps, prevState, snapShot)`：updating 阶段触发，此时 setState 容易无限循环。
    * `shouldComponentUpdate(nextProps, nextState)`：改善性能，慎用，尽量用 PureComponent 替换。
    * componentWillMount、componentWillReceiveProps、componentWillUpdate、componentWillUnmount
  * 渲染机制 - 同步：
    * 首次渲染：`willMount -> render -> didMount`。
    * props 更新：`receiveProps -> shouldUpdate -> willUpdate -> render -> didUpdate`。
    * state 更新：`shouldUpdate -> willUpdate -> render -> didUpdate`。
    * 卸载：`willUnmount`。
  * 受控组件：组件没有 state，受控于父组件
* 非受控组件：组件自身有 state
  
* React v16：
  * 生命周期（v16.4）：
    * **getDerivedStateFromProps:** 在调用`render()`之前调用，并在 *每次* 渲染时调用。 需要使用派生状态的情况是很罕见得。值得阅读 [如果你需要派生状态](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html).
    * **componentDidMount:** 首次渲染后调用，所有得 Ajax 请求、DOM 或状态更新、设置事件监听器都应该在此处发生。
    * **shouldComponentUpdate:** 确定组件是否应该更新。 默认情况下，它返回`true`。 如果你确定在更新状态或属性后不需要渲染组件，则可以返回`false`值。 它是一个提高性能的好地方，因为它允许你在组件接收新属性时阻止重新渲染。
    * **getSnapshotBeforeUpdate:** 在最新的渲染输出提交给 DOM 前将会立即调用，这对于从 DOM 捕获信息（比如：滚动位置）很有用。
    * **componentDidUpdate:** 它主要用于更新 DOM 以响应 prop 或 state 更改。 如果`shouldComponentUpdate()`返回`false`，则不会触发。
    * **componentWillUnmount** 当一个组件被从 DOM 中移除时，该方法被调用，取消网络请求或者移除与该组件相关的事件监听程序等应该在这里进行。
  * 生命周期触发流程（v16.3+）
    * 挂载时：`constructor -> getDerivedStateFromProps -> render -> React 更新 DOM 和 refs -> componnentDidMound`。
    * 更新时：
      * New props 和 setState()：`getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapShotBeforeUpdat -> React 更新 DOM 和 refs -> componnentDidMound`。
      * forceUpdate()：`getDerivedStateFromProps -> render -> getSnapShotBeforeUpdat -> React 更新 DOM 和 refs -> componnentDidUpdate`。
    * 卸载时：`componnentDidUnmount`。
  * 生命周期改动：
    * 删除如下三个生命周期组件（都发生在 render 之前，不再安全且无法预测）：`componentWillReceiveProps; componentWillMonunt; componentWillUpdate`。
    * 新增 `getDerivedStateFromProps(nexttProp, prevState)`：尽量别用；derivedState 是受 props 影响后的 state。
    * 新增 `getSnapshotBeforeUpdate(prevProp, prevState)`：render 之后、DOM 更新前触发，是 `componentWillUpdate` 的安全办，尽量别用。
  * 渲染机制：从同步到异步 React Fiber

* React v17：
  * 支持逐步升级（在应用中嵌套不同版本的 React），为未来版本作为垫脚石（React 嵌入到其它技术构建的应用程序）
  * 全新的 JSX 转换改进（与 Babel 合作）：
    * 旧版使用：`React.createElement`。过于依赖 React 本身，难以性能优化
    * v17 新版使用：`import jsx from 'react/jsx-runtime'`。抽离出独立的包
  * 根事件处理器从 document 变为 React 树的 DOM 容器中：
    * `document.addEventListener` -> `root.addEventListener`
    * `document.addEventListener` 监听时不再被触发设置为捕获时会触发
  * 对标浏览器，优化事件系统
  * 去除事件池
  * 渲染机制优化：v17 后，调度机制不定期中断执行更高优先度的任务。
  * 副作用清理函数异步执行：v17 后，将在运行任何副作用前执行所有副作用清理函数
  * 返回一致的 undefined 错误：v17 后，forwardRef 和 memo 组件的行为也会在此时报错
  * 原生组件栈：
    * v16 时引入组件栈信息来排错，不通知报错的具体位置且生产环境上很难使用
    * v17 中新调用栈机制，环境更友好
  * 移除私有导出

## 如何理解 React Hooks？

* 生命周期：
  * 挂载阶段：`Run lazy innitializers -> Render -> React updates DOM -> Run LayoutEffects -> Browser paints screen -> Run Effects`。
  * 更新阶段：`Render -> React updates DOM -> Cleanup LayoutEffects -> Run LayoutEffects -> Browser paints screen -> Cleanup Effects -> Run Effects`。
  * 卸载阶段：`Cleanup LayoutEffects -> Cleanup Effects`。
* Hook 于 v16.8 引入，特性：
  * 不使用 class 的情况下也可以使用 state 和 React 其它特性（生命周期）。
  * 没有破坏性，完全可选的，100% 向后兼容
  * 复用状态逻辑，但不复用 state 本身，每次调用都有一个完全独立的 state
  * Hooks 可以按用途分离代码块，无需关注生命周期函数。
  * React 树中，其元素类型与 key 值不变时，重用该组件，否则会销毁再创建
  * 函数式组件：
    * 在一个函数中返回 React Element
    * render 函数每次调用，都使用独立的变量，可以类比为一“帧”。
* 须知：
  * 目前还没有 `getSnapShotBeforeUpdate; getDerivedStateFromError; componentDidCatch` 的等价 Hook。
  * 通过 HOok 规范，每个组件内部都有一个 \[记忆单元格\]，顺序地保存每个 Hook 值
  * Hook 组件中的 state 会替换值，class 中的 setState 会合并值，推荐拆分 state 来替换之前的值。
* class 缺点：容易使优化措施无效，不能很好的压缩，并且会使热重载出现不稳定的情况
* 额外规则：
  * 只能在函数最外层调用 Hook
  * useState 根据调用顺序来定位具体变量
  * 只能在 React 函数中调用

## React 都有哪些内置 Hooks？

* 基础 Hook：`useState; useEffect; useContext`。
* 额外 Hook：除了基础 Hook 外的 Hook，是基础 Hook 的变体，只用于特殊情况

* `useState`：
  * React 假设多次调用 useState 时，能保证每次渲染它们的调用顺序是不变的。
* `useEffect`：
  * 是异步的不阻塞浏览器，同步可以使用 `useLayouttEffect`。
  * React 会等浏览器完成画面渲染之后延迟调用 useEffect
  * 给函数组件增加操作副作用的能力
    * 副作用包括网络请求、订阅、手动修改 DOM 等，分为需要和不需要消除的。
  * 会在每次渲染完成后调用副作用处理函数
  * 返回一个函数来指定如何清理副作用
  * 可以看作是 `componentDidMount; componentDidUpdate; componentWillUnmount` 的结合。useState：React 假设多次调用 useState 时，能保证每次渲染它们的调用顺序是不变的useEffect：是异步的不阻塞浏览器，同步可以使用 `useLayouttEffect`。React 会等浏览器完成画面渲染之后延迟调用 useEffect给函数组件增加操作副作用的能力副作用包括网络请求、订阅、手动修改 DOM 等，分为需要和不需要消除的。会在每次渲染完成后调用副作用处理函数返回一个函数来指定如何清理副作用可以看作是 `componentDidMount; componentDidUpdate; componentWillUnmount` 的结合。
* `useContent`：
  * 调用了 useContext 的组件总会在 context 值改变时重新渲染。
  * `useContext(MyContent)` 相当于`static contextType = MyContext 或 <MyContext.Consumer>`。
* `useReducer`：
  * useState 替代方案：`connst [state, dispatch] = useReducer(reducer, initialArg, init)`。
  * state 逻辑较为复杂且包含多个子值，或下一个 state 依赖于上一个 state 时适用。
  * 适用 useReducer 还能给那些会触发深更新的组件做性能优化。
* `useCallback`：可以用于 useRef 实现。
  * 允许在重新渲染之间保持对相同的回调引用以使 shouldComponentUpdate 工作。
  * 把内联回调函数及依赖项数组作为参数传入，useCallback 将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。
  * 当把回调函数传递给经过优化并使用引用相等性的非必要渲染的子组件时很有用。
  * `useCallback(fn, deps)` 相当于 `useMemp(() => fn, deps)`。
* `useMemo`：可以用于 useRef 实现。
  * 仅在某个依赖项改变时，重新计算 memoized 值 => 优化每次渲染时的高开销计算。
  * 传入 useMemo 的函数会在渲染期间执行，不要传入与渲染无关的操作（如副作用）。
* `useRef`：ref 可以用来保存上一次渲染的值 -> usePrevious。
  * 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数。
  * 返回的 ref 对象在组件的整个生命周期内保持不变。
  * 本质上，useRef 就像是可以在其 `.current` 属性中保存一个可变值的“盒子”。
  * `<div ref={myRef} />` 形式传入组件，则无论该节点如何改变，`.current` 都是对应的 DOM
  * useRef 与 ref 属性更有用，可以方便保存任何可变值，类似于 class 中使用那个实例字段方式。
  * useRef 和自建一个 `{ currrent: ... }` 对象唯一的区别是，useRef 会在每次渲染时返回同一个 ref 对象
* `useImperativeHandle`：
  * 使用 ref 时，自定义暴露给父组件的实例值。
  * 与 forwardRef 一起使用。
* `useLayoutEffect`：
  * DOM 变更后同步触发渲染，尽可能别用。
  * 服务端渲染时，无论 useLayoutEffect 还是 useEffect 都无法在 JS 加载完成前执行
* `useDebugValue`：
  * 用于在 React 开发者工具中显示自定义 Hook 的标签。
  * 第二个参数，格式化函数，只有在 Hook 被检查时会被调用。


## 如何理解 JSX？

* React v16 时，JSX 编译的本质是对 React.createElement 的调用

## 如何理解虚拟 DOM？

* 前端性能优化的一个秘诀就是尽可能少地直接操作 DOM（DOM 慢，容易引发回重绘）、多人协作会隐藏更多 BUG
* 实现 Virtual DOM 的关键步骤
  * 构建 Virtual DOM 节点的数据结构
  * 构建 Virtual DOM Tree
  * 定义一个函数处理 Virtual DOM 和真实 DOM 的转换
  * 定义一个函数比较 Virtual DOM 的 diff
    * 通常情况下很少会出现跨层级的 DOM 更新，时间复杂度是 O(n)
* Virtual DOM 分为三个简单的步骤。
  * 每当任何底层数据发生更改时，整个 UI 都将以 Virtual DOM 的形式重新渲染。
  * 然后计算先前 Virtual DOM 对象和新的 Virtual DOM 对象之间的差异。
  * 一旦计算完成，真实的 DOM 将只更新实际更改的内容。
* Shadow DOM 和 Virtual DOM
  * [Shadow DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=zh-cn) 是一种浏览器技术，它解决了构建网络应用的脆弱性问题。Shadow DOM 修复了 CSS 和 DOM。它在网络平台中引入作用域样式。 无需工具或命名约定，你即可使用原生 JavaScript 捆绑 CSS 和标记、隐藏实现详情以及编写独立的组件。*Virtual DOM* 是一个由 JavaScript 库在浏览器 API 之上实现的概念。
| Real DOM                     | Virtual DOM              |
| ---------------------------- | ------------------------ |
| 更新较慢                     | 更新较快                 |
| 可以直接更新 HTML            | 无法直接更新 HTML        |
| 如果元素更新，则创建新的 DOM | 如果元素更新，则更新 JSX |
| DOM 操作非常昂贵             | DOM 操作非常简单         |
| 较多的内存浪费               | 没有内存浪费             |

## setState 背后的深入原理？

* React v15 同步机制：当我们调用 `setState` 更新页面的时候，React 会遍历应用的所有节点，计算出差异，然后再更新 UI。整个过程是一气呵成，不能被打断的。如果页面元素很多，整个过程占用的时机就可能超过 16 毫秒，就容易出现掉帧的现象。
  * 在 React 生命周期内，也可以理解主线程中 setState 就是异步的；子线程或者说异步任务中，例如 setInterval、setTimeout 里，setState 就是同步更新的。
* 任何 state 的更新都会导致 React 进行重新渲染。`props` 也会导致 React 进行重新渲染。组件与父组件的更改同样也会引起 React 的重新渲染。`shouldComponentUpdate` 来控制 React 是否需要渲染。
* setState可能会引发不必要的渲染(renders)。
* setState无法完全掌控应用中所有组件的状态。
* setState本质是通过一个队列机制实现state更新的。 执行setState时，会将需要更新的state合并后放入状态队列，而不会立刻更新state，队列机制可以批量更新state。 如果不通过setState而直接修改this.state，那么这个state不会放入状态队列中，下次调用setState时对状态队列进行合并时，会忽略之前直接被修改的state，这样我们就无法合并了，而且实际也没有把你想要的state更新上去。
* setState 有时同步有时异步：
  * 只在合成事件和钩子函数中是**“**异步**”**的，在原生事件和 **setTimeout** 中都是同步的。 的**“**异步**”**并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子
  * 函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立⻢拿到更新后的值，形成了所谓的**“**异步**”**，当然 可以通过第二个参数 **setState(partialState, callback)** 中的 **callback** 拿到更新后的结果。
  * **setState** 的批量更新优化也是建立在**“**异步**”**(合成事件、钩子函数)之上的，在原生事件和**setTimeout** 中不会 批量更新，在**“**异步**”**中如果对同一个值进行多次 **setState** ， **setState** 的批量更新策略会对其进行覆盖，取最后一 次的执行，如果是同时 **setState** 多个不同的值，在更新时会对其进行合并批量更新。

## 如何理解 React Fiber？

```javascript
export type Fiber = {
  // Fiber 类型信息
  type: any,
  // ...
  // ⚛️ 链表结构
  // 指向父节点，或者render该节点的组件
  return: Fiber | null,
  // 指向第一个子节点
  child: Fiber | null,
  // 指向下一个兄弟节点
  sibling: Fiber | null,
}
```

* React Fiber是对核心算法的一次重新实现，是 Render/Reconciliation 的最小单位。
* React Fiber 的目标是提高其在动画、布局和手势等领域的适用性。它的主要特性是 incremental rendering: 将渲染任务拆分为小的任务块并将任务分配到多个帧上的能力。
* 同步的缺点：
  * 默认情况下，JS 运算、页面布局和页面绘制都是运行在浏览器的主线程当中，他们之间是互斥的关系。如果 JS 运算持续占用主线程，页面就没法得到及时的更新。
  * 当 React 决定要加载或者更新组件树时，会做很多事，比如调用各个组件的生命周期函数，计算和比对 Virtual DOM，最后更新 DOM 树，这整个过程是同步进行的，任务繁多，容易页面卡顿
* 旧版 React：通过递归的方式进行渲染，使用的是 JS 引擎自身的函数调用栈，它会一直执行到栈空为止。
* React Fiber：实现了自己的组件调用栈，它以链表的形式遍历组件树，可以灵活的暂停、继续和丢弃执行的任务。实现方式是使用了浏览器的 `requestIdleCallback `这一 API
* React Fiber 异步：分片机制，维护每一个分片的数据结构，就是 Fiber。
  * 把一个耗时长的任务分成很多小片，虽然总时间很长，但是在每个小片执行完成后，就把控制权交还给 React 负责任务协调的模块，给其它任务一个机会去做更紧急的任务，这样唯一的线程不会被独占。
* React 更新过程分为两个阶段（因为一个更新过程可能被打断，导致低优先级更新任务所做的工作则会完全作废）：
  * 第一个阶段 Reconciliation Phase：React Fiber 会找出需要更新哪些 DOM，这个阶段是可以被打断的。可能会调用：
    * `componentWillMount; componentWillReceiveProps; shouldComponentUpdate; componentWillUpdate;`
  * 第二阶段 Commit Phase：一鼓作气把 DOM 更新完，绝不会被打断。可能会调用：
    * `componentDidMount; componentDidUpdate; componentWillUnmount`
  * 由于分片导致的打断，部分运算需要重新执行，所以：
    * 旧版 React：每个生命周期函数在一个加载或者更新过程中绝对只会被调用一次
    * React Fiber：第一阶段中的生命周期函数在一次加载和更新过程中可能会被多次调用
  * `componentWillMount` 和 `componentWillUpdate` 副作用多，使用 React Fiber 的时候一定要重点看这两个函数的实现。
* 任务的优先级有六种：
  * synchronous，与之前的 Stack Reconciler 操作一样，同步执行
  * task，在 next tick 之前执行
  * animation，下一帧之前执行
  * high，在不久的将来立即执行
  * low，稍微延迟执行也没关系
  * offscreen，下一次 render 时或 scroll 时才执行
* Fiber 树：
  * Fiber Reconciler 在阶段一进行 Diff 计算的时候，会生成一棵 Fiber 树。这棵树是在 Virtual DOM 树的基础上增加额外的信息来生成的，它本质来说是一个链表。
  * Fiber 树在首次渲染的时候会一次过生成。在后续需要 Diff 的时候，会根据已有树和最新 Virtual DOM 的信息，生成一棵新的树。这颗新树每生成一个新的节点，都会将控制权交回给主线程，去检查有没有优先级更高的任务需要执行。如果没有，则继续构建树的过程。

函数调用栈 Fiber   基本单位 函数 Virtual DOM 节点  输入 函数参数 Props  本地状态 本地变量 State  输出 函数返回值 React Element  下级 嵌套函数调用 子节点(child)  上级引用 返回地址 父节点(return)

## 如何理解 React Concurrent Mode？

* Concurrent Mode 是 Async Mode 的 重新定义，来凸显出 React 在不同优先级上的执行能力，与其它的异步渲染方式进行区分。

## 如何理解 Context 上下文

*Context* 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递`props`。比如，需要在应用中许多组件需要访问登录用户信息、地区偏好、UI主题等。

```jsx
// 创建一个 theme Context,  默认 theme 的值为 light
const ThemeContext = React.createContext('light');

function ThemedButton(props) {
  // ThemedButton 组件从 context 接收 theme
  return (
    <ThemeContext.Consumer>
      {theme => <Button {...props} theme={theme} />}
    </ThemeContext.Consumer>
  );
}

// 中间组件
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}
```

## 如何理解 PureComponent？

* `PureComponent` 也就是纯组件，取代其前身 `PureRenderMixin`，`PureComponent` 是优化 `React` 应用程序最重要的方法之一。
* 可以减少不必要的 `render` 操作的次数，从而提高性能，而且可以少写 `shouldComponentUpdate` 函数，节省了点代码。
* 当组件更新时，如果组件的 `props` 和 `state` 都没发生改变，`render` 方法就不会触发，省去 `Virtual DOM` 的生成和比对过程，达到提升性能的目的。当 `props` 或者 `state` 改变时，`PureComponent` 将对 `props` 和 `state` 进行浅比较。
  * 浅比较将检查原始值是否有相同的值（例如：`1 == 1` 或者 `ture==true`）,数组和对象引用是否相同。
  * 深比较时，可以通过使用 es6 的 assign 方法或者数组的扩展运算符或者使用第三方库，强制返回一个新的对象。
* 注意：
  * 不要在 render 的函数中绑定值
  * 不要在 render 方法里派生数据

```javascript
// React 自动帮我们做了一层浅比较
if (this._compositeType === CompositeTypes.PureClass) {
  shouldUpdate = !shallowEqual(prevProps, nextProps) || !shallowEqual(inst.state, nextState);
}
```

## 如何理解 React Suspense

* React 捕获到异常之后，会判断异常是不是一个 thenable，如果是则会找到 SuspenseComponent ，如果 thenable 处于 pending 状态，则会将其 children 都渲染成 fallback 的值，一旦 thenable 被 resolve 则 SuspenseComponent 的子组件会重新渲染一次。

## 如何理解批量更新（BatchingStrategy/transaction）？

* 事务（Transaction），是一个操作序列，这些操作要么都执行，要么都不执行，它是一个不可分割的工作单位。
  * sql server 用来处理批量操作的一个机制。当所有操作均执行成功，即可以 commit transaction；若有一个操作失败，则执行rollback
* React 中 setstate 是异步的，在 `didmount` 中多次 setstate 会在最后转为一次更新。
* transaction 大致可以理解为一些要按照顺序执行的操作的集合
  * React 中就是调用 perform 方法进入一个事务，该方法中会传入一个 method 参数。
  * 执行 perform 时先执行 initializeAll 方法按顺序执行一系列 initialize 的操作，例如一些初始化操作等等
  * 然后执行传入的method，method 执行完后就执行 closeAll 方法按顺序执行一系列 close 操作然后结束这次事务。

## 如何理解 Time Slice 时间分片？

* 时间分片：
  * React 在渲染的时候，不会阻塞现在的线程
  * 基于可随时打断、重启的 Fiber 架构
  * 可打断当前任务，优先处理紧急且重要的任务，保证页面的流畅运行。
* 同步模式：
* Debounce 模式：延迟渲染

## mixin/hoc/render props/hooks 对比？

* Mixin 缺陷：
  * 组件与 Mixin 之间存在隐式依赖（Mixin 经常以来组件的特定方法，但在定义组件时并不知道这种依赖关系）。
  * 多个 Mixin 之间可能冲突（比如定义了相同的 state 字段）
  * Mixin 倾向于增加更多状态，降低了应用的可预测性，导致复杂度剧增
  * 隐式依赖导致依赖关系不透明，维护成本和理解成本迅速攀升：
    * 难以快速理解组件行为，需要全盘了解所有依赖 Mixin 的拓展行为，及其之间的相互影响。
    * 组件自身的方法和 state 不敢轻易删改，因为难以确定有没有 Mixin 依赖它
    * Mixin 也难以维护，因为 Mixin 逻辑最后会被打平合并到一起，很难搞清楚一个 Mixin 的输入输出。
* HOC：
  * 优势：
    * HOC 外层组件通过 Props 影响内层组件的状态，而不是直接改变其 state，不存在冲突和互相干扰，降低了耦合度。
    * 不同于 Mixin 的打平 + 合并，HOC 具有天然的层级结构（组件树结构），降低了复杂度。
  * 缺陷：
    * 扩展性限制：HOC 无法从外部访问子组件的 State。因此无法通过 shouldComponentUpdate 过滤掉不必要的更新。React 在支持 ES6 Class 之后提供了 React.PureComponent 来解决这个问题。
    * Ref 传递问题：Ref 被隔断后，后来的 React.forwardRef 来解决这个问题。
    * Wrapper Hell：HOC 可能出现多层包裹组件的情况，多层抽象同样增加了复杂度和理解成本。
    * 命名冲突：如果高阶组件多次嵌套，没有使用命名空间的话会产生冲突，然后覆盖老属性。
    * 不可见性：HOC 相当于在原有组件外层再包装一个组件，外层对内层来说是“黑盒”。
* Render Props：
  * 优点：HOC 的缺点 Render Props 都能解决
  * 缺陷：
    * 使用繁琐：HOC 使用只需要借助装饰器语法，一行代码就可以服用，Render Props 无法做到这么简单。
    * 嵌套过深：Render Props 虽然摆脱了组件多层嵌套的问题，但是转化为了函数回调的嵌套
  * 优点：
* Hooks：
  * 优点：
    * 简洁：React Hooks 解决了 HOC 和 Render Props 的嵌套问题，更加简洁。
    * 解耦：React Hooks 可以更方便地把 UI 和状态分离，做到更彻底的解耦。
    * 组合：Hooks 中可以引用另外的 Hooks，组合千变万化
    * 函数友好：React Hooks 为函数组件而生，从而解决了类组件的几大问题：
      * this 指向容易错误。
      * 分割在不同生命周期中的逻辑使得代码难以理解和维护。
      * 代码复用成本高（高阶组件容易使代码量剧增）
  * 缺陷：
    * 额外的学习成本（函数式组件和类组件之间的学习成本）
    * 写法上有限制（不能出现在条件、循环中），并且写法限制增加了重构成本。
    * 破坏了 PureComponent、React.memo 浅比较的性能优化结果
      * （为了取最新的 props 和 state，每次 render() 都需要重新创建事件处理函数）
    * 在闭包场景可能会遇到旧的 state、props 值
    * 内部实现上不直观（依赖一份可变的全局状态，以至不“纯”）
    * React.memo 并不能完全替代 shouldComponentUpdate（因为拿不到 state change，只针对 props change）

## 类组件/函数式组件？

* 如果组件需要使用**状态或生命周期方法**，那么使用类组件，否则使用函数组件。

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>{`Hello, ${this.props.message}`}</h1>
  }
}

function Greeting({ message }) {
  return <h1>{`Hello, ${message}`}</h1>
}
```

## 如何理解高阶函数组件？

*高阶组件*(*HOC*) 就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件，它只是一种模式，这种模式是由`react`自身的组合性质必然产生的。

我们将它们称为**纯组件**，因为它们可以接受任何动态提供的子组件，但它们不会修改或复制其输入组件中的任何行为。

```
const EnhancedComponent = higherOrderComponent(WrappedComponent)
```

HOC 有很多用例：

1. 代码复用，逻辑抽象化
2. 渲染劫持
3. 抽象化和操作状态（`state`）
4. 操作属性（`props`）

```jsx
// 可以使用属性代理模式向输入组件增加或编辑属性（props）
function HOC(WrappedComponent) {
  return class Test extends Component {
    render() {
      const newProps = {
        title: 'New Header',
        footer: false,
        showFeatureX: false,
        showFeatureY: true
      };

      return <WrappedComponent {...this.props} {...newProps} />
    }
  }
}
```

## State 和 Props？

state 和 props 都是普通的 JavaScript 对象。虽然它们都保存着影响渲染输出的信息，但它们在组件方面的功能不同。Props 以类似于函数参数的方式传递给组件，而状态则类似于在函数内声明变量并对它进行管理。

| Conditions           | States | Props |
| -------------------- | ------ | ----- |
| 可从父组件接收初始值 | 是     | 是    |
| 可在父组件中改变其值 | 否     | 是    |
| 在组件内设置默认值   | 是     | 是    |
| 在组件内可改变       | 是     | 否    |
| 可作为子组件的初始值 | 是     | 是    |

## 深入 key

* `key` 是一个特殊的字符串属性，你在创建元素数组时需要包含它。Keys 帮助 React 识别哪些项已更改、添加或删除。

## 深入 ref/forward ref/callback ref？

* Ref forwarding 是一个特性，它允许一些组件获取接收到 ref 对象并将它进一步传递给子组件。

## 受控组件/非受控组件？

* 在随后的用户输入中，能够控制表单中输入元素的组件被称为受控组件，即每个状态更改都有一个相关联的处理程序。
* 非受控组件是在内部存储其自身状态的组件，当需要时，可以使用 ref 查询 DOM 并查找其当前值。这有点像传统的 HTML。

