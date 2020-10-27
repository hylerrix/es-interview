# React 实战

## React SSR？

```javascript
import ReactDOMServer from 'react-dom/server'
import App from './App'

ReactDOMServer.renderToString(<App />)
```

```javascript
// using Express
import { renderToString } from 'react-dom/server'
import MyPage from './MyPage'

app.get('/', (req, res) => {
  res.write('<!DOCTYPE html><html><head><title>My Page</title></head><body>')
  res.write('<div id="content">')
  res.write(renderToString(<MyPage/>))
  res.write('</div></body></html>')
  res.end()
})
```

## 如何进行权限组件的设计？

* 路由级
* 模块级：`export default withAuth({ authorities: ['admin', 'user'], })(BasicList);`
* 按钮级：`<Auth authorities={['admin', 'user']}><Button>auth</Button></Auth>;`
* 接口级

## React 组件如何通信？

* 父组件向子组件通讯: 父组件可以向子组件通过传 props 的方式，向子组件进行通讯
* 子组件向父组件通讯: props+回调的方式,父组件向子组件传递props进行通讯，此props为作用域为父组件自身的函 数，子组件调用该函数，将子组件想要传递的信息，作为参数，传递到父组件的作用域中
* 兄弟组件通信: 找到这两个兄弟节点共同的父节点,结合上面两种方式由父节点转发信息进行通信
* 跨层级通信: Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题 或首选语言,对于跨越多层的全局数据通过 Context 通信再适合不过
* 发布订阅模式: 发布者发布事件，订阅者监听事件并做出反应,我们可以通过引入event模块进行通信 全局状态管理工具: 借助Redux或者Mobx等全局状态管理工具进行通信,这种工具会维护一个全局状态中心Store,并 根据不同的事件产生新的状态

## React 如何实现对象的 watch？

* componentWillUpdate(object nextProps, object nextState)
* componentDidUpdate(object prevProps, object prevState)
* Hooks

## React 如何实现懒加载？

* React 16.6 添加了一个新的特性：React.lazy()，它可以让代码分割更加容易。
  * 避免大体积的代码包，增加首屏的加载速度。
* React.lazy()

## React 如何进行性能优化？

function component + redux、immutable、pure component , shouldComponentUpdate ...

## 自定义一个 useLoading Hook

```react
/**
 * 功能同 createThrowable, 优化了一个点: 在函数内处理了 loading状态
 * 用法同 React.useXxx 会返回一个数组, 第一个参数是 函数, 第二个是 loading状态
 * @param fn
 * @param errorTitle
 * @return [处理异常函数, loading状态]
 */
export const useLoadingThrowable =
  function (fn: (args: any) => Promise<any>, errorTitle = '操作失败'): [(args?: any) => any, boolean] {
    const [loading, setLoading] = useState(false)
    return [
      function (args: any) {
        setLoading(true)
        fn(args)
          .catch((e) => {
            // 忽略 axios 取消造成的请求错误
            if (e && e.toString() && e.toString().includes('Cancel')) {
              return
            }
            notificationErrorLog(errorTitle, e)
          })
          .finally(() => setLoading(false))
      },
      loading,
    ]
  }

const [getPartsAvlList, loadingPartsAvl] = useLoadingThrowable(async (pagination) => {
        const {data: {aaData, success, msg, recordsFiltered}} = await getAvlList({})
        if (success) {
            setAvlList(aaData)
            setPagination({current: pagination.current, pageSize: pagination.pageSize, total: recordsFiltered,showSizeChanger: true,
                showQuickJumper: true,showTotal:()=>{return showTotal(recordsFiltered)},pageSizeOptions: ['10', '50', '100', '200']})
        } else
            throw msg
    }, "获取AVL列表信息失败")

React.useEffect(() =>{
        getPartsAvlList(pagination)
}, []}
```

## Redux/React-Redux.MobX？

* Redux：
  * Store：保存数据的地方，整个应用只能有一个 Store
  * State：Store 对象包含的数据
  * Action：State 的变化，会导致 View 的变化。但是用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了。
  * Action Creator：View要发送多少种消息，就会有多少种Action。如果都手写，会很麻烦，所以我们定义一个函数 来生成Action，这个函数就叫Action Creator。
  * Reducer：Store收到Action以后，必须给出一个新的State，这样View才会发生变化。这种State的计算过程就叫做 Reducer。Reducer是一个函数，它接受Action和当前State作为参数，返回一个新的State。
  * dispatch：是View发出Action的唯一方法。
* Redux 遵循三个基本原则：
  1. **单一数据来源：** 整个应用程序的状态存储在单个对象树中。单状态树可以更容易地跟踪随时间的变化并调试或检查应用程序。
  2. **状态是只读的：** 改变状态的唯一方法是发出一个动作，一个描述发生的事情的对象。这可以确保视图和网络请求都不会直接写入状态。
  3. **使用纯函数进行更改：** 要指定状态树如何通过操作进行转换，您可以编写reducers。Reducers 只是纯函数，它将先前的状态和操作作为参数，并返回下一个状态。
* React-Redux
  * Provider: Provider的作用是从最外部封装了整个应用，并向connect模块传递store
  * connect: 负责连接React和Redux
    * 获取state: connect通过context获取Provider中的store，通过store.getState()获取整个store tree 上所有state
    * 包装原组件: 将state和action通过props的方式传入到原组件内部wrapWithConnect返回一个ReactComponent 对象Connect，Connect重新render外部传入的原组件WrappedComponent，并把connect中传入的 mapStateToProps, mapDispatchToProps与组件上原有的props合并后，通过属性的方式传给 WrappedComponent
    * 监听store tree变化: connect缓存了store tree中state的状态,通过当前state状态和变更前state状态进行比较,从 而确定是否调用 this.setState() 方法触发Connect及其子组件的重新渲染
* Redux 和 Mobx 的区别？
  * redux将数据保存在单一的store中，mobx将数据保存在分散的多个store中
  * redux使用plain object保存数据，需要手动处理变化后的操作;mobx适用observable保存数据，数据变化后自动处 理响应的操作
  * redux使用不可变状态，这意味着状态是只读的，不能直接去修改它，而是应该返回一个新的状态，同时使用纯函 数;mobx中的状态是可变的，可以直接对其进行修改
  * mobx相对来说比较简单，在其中有很多的抽象，mobx更多的使用面向对象的编程思维;redux会比较复杂，因为 其中的函数式编程思想掌握起来不是那么容易，同时需要借助一系列的中间件来处理异步和副作用
  * mobx中有更多的抽象和封装，调试会比较困难，同时结果也难以预测;而redux提供能够进行时间回溯的开发工 具，同时其纯函数以及更少的抽象，让调试变得更加的容易

## React Router

* React Router 是`history`库的包装器，它处理浏览器的`window.history`与浏览器和哈希历史的交互。它还提供了内存历史记录，这对于没有全局历史记录的环境非常有用，例如移动应用程序开发（React Native）和使用 Node 进行单元测试。
* React Router v4 提供了以下三种类型的 `<Router>` 组件:
  1. `<BrowserRouter>`
  2. `<HashRouter>`
  3. `<MemoryRouter>`

## Redux 异步与社区中间件

* Redux 异步操作：
  * 不用 Redux 的话，可以直接在 componentDidMount 中操作
  * Redux 中，可以接触 redux-thunk 或 redux-saga。
* redux-thunk
  * 优点：
    * 体积小，redux-thunk 的实现方式很简单，只有不到 20 行代码
    * 使用简单：redux-thunk 没有引入像 redux-saga 活着 redux-observable 额外的范式，上手简单。
  * 缺点：
    * 样板代码过多：与 redux 本身一样，通常一个请求需要大量的代码，而且很多都是重复性质的
    * 耦合严重：异步操作与 redux 的 action 耦合在一起，不方便管理
    * 功能孱弱：有一些实际开发中常用的功能需要自己进行封装
* redux-saga
  * 优点：
    * 异步解耦：异步操作被被转移到单独 saga.js 中，不再是掺杂在 action.js 或 component.js 中
    * action摆脱thunk function: dispatch 的参数依然是一个纯粹的 action (FSA)，而不是充满 “黑魔法” thunk function
    * 异常处理：受益于 generator function 的 saga 实现，代码异常/请求失败 都可以直接通过 try/catch 语法直接捕获处 理
    * 功能强大：redux-saga提供了大量的Saga 辅助函数和Effect 创建器供开发者使用,开发者无须封装或者简单封装即 可使用
    * 灵活：redux-saga可以将多个Saga可以串行/并行组合起来,形成一个非常实用的异步flow
    * 易测试，提供了各种case的测试方案，包括mock task，分支覆盖等等
  * 缺点：
    * 额外的学习成本: redux-saga不仅在使用难以理解的 generator function,而且有数十个API,学习成本远超redux- thunk,最重要的是你的额外学习成本是只服务于这个库的,与redux-observable不同,redux-observable虽然也有额外 学习成本但是背后是rxjs和一整套思想
    * 体积庞大: 体积略大,代码近2000行，min版25KB左右
    * 功能过剩: 实际上并发控制等功能很难用到,但是我们依然需要引入这些代码
    * ts支持不友好: yield无法返回TS类型
* redux-observable
  * 优点：
    * 功能最强: 由于背靠rxjs这个强大的响应式编程的库,借助rxjs的操作符,你可以几乎做任何你能想到的异步处理
    * 背靠rxjs: 由于有rxjs的加持,如果你已经学习了rxjs,redux-observable的学习成本并不高,而且随着rxjs的升级redux- observable也会变得更强大
  * 缺点：
    * 学习成本奇高: 如果你不会rxjs,则需要额外学习两个复杂的库
    * 社区一般: redux-observable的下载量只有redux-saga的1/5,社区也不够活跃,在复杂异步流中间件这个层面redux- saga仍处于领导地位

## React DOM

* `react` 包中包含 `React.createElement()`, `React.Component`, `React.Children`，以及与元素和组件类相关的其他帮助程序。你可以将这些视为构建组件所需的同构或通用帮助程序。`react-dom` 包中包含了 `ReactDOM.render()`，在 `react-dom/server` 包中有支持服务端渲染的 `ReactDOMServer.renderToString()` 和 `ReactDOMServer.renderToStaticMarkup()` 方法。
* React 团队致力于将所有的与 DOM 相关的特性抽取到一个名为 ReactDOM 的独立库中。React v0.14 是第一个拆分后的版本。通过查看一些软件包，`react-native`，`react-art`，`react-canvas`，和 `react-three`，很明显，React 的优雅和本质与浏览器或 DOM 无关。为了构建更多 React 能应用的环境，React 团队计划将主要的 React 包拆分成两个：`react` 和 `react-dom`。这为编写可以在 React 和 React Native 的 Web 版本之间共享的组件铺平了道路。

## React 如何实现单元测试？

* Jest：零配置、快照、隔离、优秀的 API

```javascript
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
```

## React 组件中生命周期的编写顺序推荐？

从 *mounting* 到 *render stage* 阶段推荐的方法顺序：

1. `static` 方法
2. `constructor()`
3. `getChildContext()`
4. `componentWillMount()`
5. `componentDidMount()`
6. `componentWillReceiveProps()`
7. `shouldComponentUpdate()`
8. `componentWillUpdate()`
9. `componentDidUpdate()`
10. `componentWillUnmount()`
11. 点击处理程序或事件处理程序，如 `onClickSubmit()` 或 `onChangeDescription()`
12. 用于渲染的getter方法，如 `getSelectReason()` 或 `getFooterContent()`
13. 可选的渲染方法，如 `renderNavigation()` 或 `renderProfilePicture()`
14. `render()`

## 监听浏览器大小的改变组件

```jsx
class WindowDimensions extends React.Component {
  componentWillMount() {
    this.updateDimensions()
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  updateDimensions() {
    this.setState({width: $(window).width(), height: $(window).height()})
  }

  render() {
    return <span>{this.state.width} x {this.state.height}</span>
  }
}
```

