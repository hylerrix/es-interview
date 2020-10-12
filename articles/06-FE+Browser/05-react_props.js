import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "text": "移动端 Web 开发",
        "link": "articles/06-FE+Browser/04-fe-mobile.html"
    },
    'next': {
        "link": "articles/07-BE+Server/index.html",
        "text": "后端应用开发 + 服务器"
    },
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'sidebar': [
        {
            "text": "ESMAScript+ 面试宝典",
            "link": "articles/index.html",
            "pagePath": "articles/README.md"
        },
        {
            "text": "前端大事记",
            "link": "articles/es-timeline.html",
            "pagePath": "articles/es-timeline.md"
        },
        {
            "text": "职业 & 成长",
            "link": "articles/00-Profession/index.html",
            "pagePath": "articles/00-Profession/README.md"
        },
        {
            "link": "articles/01-Programming/index.html",
            "title": "编程基础",
            "children": [
                {
                    "text": "编程语言",
                    "link": "articles/01-Programming/00-language.html",
                    "pagePath": "articles/01-Programming/00-language.md"
                },
                {
                    "text": "操作系统",
                    "link": "articles/01-Programming/01-operating-system.html",
                    "pagePath": "articles/01-Programming/01-operating-system.md"
                },
                {
                    "text": "算法",
                    "link": "articles/01-Programming/02-algorithms.html",
                    "pagePath": "articles/01-Programming/02-algorithms.md"
                },
                {
                    "text": "设计模式",
                    "link": "articles/01-Programming/03-design-patterns.html",
                    "pagePath": "articles/01-Programming/03-design-patterns.md"
                },
                {
                    "text": "工程化",
                    "link": "articles/01-Programming/04-software-engineering.html",
                    "pagePath": "articles/01-Programming/04-software-engineering.md"
                },
                {
                    "text": "安全",
                    "link": "articles/01-Programming/05-network-security.html",
                    "pagePath": "articles/01-Programming/05-network-security.md"
                },
                {
                    "text": "测试",
                    "link": "articles/01-Programming/06-software-test.html",
                    "pagePath": "articles/01-Programming/06-software-test.md"
                },
                {
                    "text": "版本控制",
                    "link": "articles/01-Programming/07-version-control.html",
                    "pagePath": "articles/01-Programming/07-version-control.md"
                }
            ],
            "text": "编程基础",
            "pagePath": "articles/01-Programming/README.md"
        },
        {
            "link": "articles/02-ECMAScript+/index.html",
            "title": "ECMAScript+",
            "children": [
                {
                    "text": "ECMAScript",
                    "link": "articles/02-ECMAScript+/00-ecmascript.html",
                    "pagePath": "articles/02-ECMAScript+/00-ecmascript.md"
                },
                {
                    "text": "JavaScript 基础知识",
                    "link": "articles/02-ECMAScript+/01-javascript.html",
                    "pagePath": "articles/02-ECMAScript+/01-javascript.md"
                },
                {
                    "text": "TypeScript",
                    "link": "articles/02-ECMAScript+/02-typescript.html",
                    "pagePath": "articles/02-ECMAScript+/02-typescript.md"
                },
                {
                    "text": "JavaScript 常见实战题",
                    "link": "articles/02-ECMAScript+/03-javascript-parctice.html",
                    "pagePath": "articles/02-ECMAScript+/03-javascript-parctice.md"
                }
            ],
            "text": "ECMAScript+",
            "pagePath": "articles/02-ECMAScript+/README.md"
        },
        {
            "link": "articles/03-HTML+CSS/index.html",
            "title": "HTML + CSS",
            "children": [
                {
                    "text": "HTML",
                    "link": "articles/03-HTML+CSS/00-html.html",
                    "pagePath": "articles/03-HTML+CSS/00-html.md"
                },
                {
                    "text": "CSS",
                    "link": "articles/03-HTML+CSS/01-css-design.html",
                    "pagePath": "articles/03-HTML+CSS/01-css-design.md"
                },
                {
                    "text": "HTML + CSS 实战",
                    "link": "articles/03-HTML+CSS/02-html-css-practice.html",
                    "pagePath": "articles/03-HTML+CSS/02-html-css-practice.md"
                }
            ],
            "text": "HTML + CSS",
            "pagePath": "articles/03-HTML+CSS/README.md"
        },
        {
            "link": "articles/04-Network+API/index.html",
            "title": "网络 + 前后端协作",
            "children": [
                {
                    "text": "网络",
                    "link": "articles/04-Network+API/00-network.html",
                    "pagePath": "articles/04-Network+API/00-network.md"
                },
                {
                    "text": "前后端协作",
                    "link": "articles/04-Network+API/01-fe-be-api.html",
                    "pagePath": "articles/04-Network+API/01-fe-be-api.md"
                },
                {
                    "text": "登录",
                    "link": "articles/04-Network+API/02-login.html",
                    "pagePath": "articles/04-Network+API/02-login.md"
                }
            ],
            "text": "网络 + 前后端协作",
            "pagePath": "articles/04-Network+API/README.md"
        },
        {
            "link": "articles/05-V8+Runtime/index.html",
            "title": "V8 + JavaScript 运行时",
            "children": [
                {
                    "text": "V8",
                    "link": "articles/05-V8+Runtime/00-v8.html",
                    "pagePath": "articles/05-V8+Runtime/00-v8.md"
                },
                {
                    "text": "Node",
                    "link": "articles/05-V8+Runtime/01-node.html",
                    "pagePath": "articles/05-V8+Runtime/01-node.md"
                },
                {
                    "text": "Deno",
                    "link": "articles/05-V8+Runtime/02-deno.html",
                    "pagePath": "articles/05-V8+Runtime/02-deno.md"
                }
            ],
            "text": "V8 + JavaScript 运行时",
            "pagePath": "articles/05-V8+Runtime/README.md"
        },
        {
            "link": "articles/06-FE+Browser/index.html",
            "title": "前端应用开发 + 浏览器",
            "children": [
                {
                    "text": "浏览器",
                    "link": "articles/06-FE+Browser/00-browser.html",
                    "pagePath": "articles/06-FE+Browser/00-browser.md"
                },
                {
                    "text": "前端",
                    "link": "articles/06-FE+Browser/01-fe-framework.html",
                    "pagePath": "articles/06-FE+Browser/01-fe-framework.md"
                },
                {
                    "text": "前端工具链",
                    "link": "articles/06-FE+Browser/02-fe-tooltain.html",
                    "pagePath": "articles/06-FE+Browser/02-fe-tooltain.md"
                },
                {
                    "text": "前端打包工具",
                    "link": "articles/06-FE+Browser/03-pack-tool.html",
                    "pagePath": "articles/06-FE+Browser/03-pack-tool.md"
                },
                {
                    "text": "移动端 Web 开发",
                    "link": "articles/06-FE+Browser/04-fe-mobile.html",
                    "pagePath": "articles/06-FE+Browser/04-fe-mobile.md"
                },
                {
                    "text": "React",
                    "link": "articles/06-FE+Browser/05-react.html",
                    "pagePath": "articles/06-FE+Browser/05-react.md"
                }
            ],
            "text": "前端应用开发 + 浏览器",
            "pagePath": "articles/06-FE+Browser/README.md"
        },
        {
            "link": "articles/07-BE+Server/index.html",
            "title": "后端应用开发 + 服务器",
            "children": [
                {
                    "text": "Linux + Nginx + 数据库",
                    "link": "articles/07-BE+Server/00-linux-nginx-database.html",
                    "pagePath": "articles/07-BE+Server/00-linux-nginx-database.md"
                },
                {
                    "text": "Node 框架",
                    "link": "articles/07-BE+Server/01-node-framework.html",
                    "pagePath": "articles/07-BE+Server/01-node-framework.md"
                }
            ],
            "text": "后端应用开发 + 服务器",
            "pagePath": "articles/07-BE+Server/README.md"
        }
    ],
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['undefined'] },
    'pagePath': "articles/06-FE+Browser/05-react.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/06-FE+Browser/05-react.html",
    'title': "React",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>React</h1>\n<ul>\n<li>Redux</li>\n<li>性能优化：function component + redux、immutable、pure component , shouldComponentUpdate ...</li>\n<li>这就是为什么 <code>react</code> 包那么重要而不用关心你的目标平台是什么。它的所有导出，例如 <code>React.Component</code>、<code>React.createElement</code>、<code>React.Children</code>还有<a href="https://reactjs.org/docs/hooks-intro.html">Hooks</a>，都是独立于目标平台的。不管你是运行在 React DOM、React DOM Server、或者 React Native 中，你的组件都将以相同的方式导入，使用。</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E6%9D%83%E9%99%90%E7%BB%84%E4%BB%B6%E7%9A%84%E8%AE%BE%E8%AE%A1">如何进行权限组件的设计？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E6%9D%83%E9%99%90%E7%BB%84%E4%BB%B6%E7%9A%84%E8%AE%BE%E8%AE%A1">§</a></h2>\n<ul>\n<li>路由级</li>\n<li>模块级：<code>export default withAuth({ authorities: [\'admin\', \'user\'], })(BasicList);</code></li>\n<li>按钮级：<code>&lt;Auth authorities={[\'admin\', \'user\']}&gt;&lt;Button&gt;auth&lt;/Button&gt;&lt;/Auth&gt;;</code></li>\n<li>接口级</li>\n</ul>\n<h2 id="react-%E7%9A%84%E5%86%85%E9%83%A8%E5%88%86%E5%B1%82">React 的内部分层？<a class="anchor" href="#react-%E7%9A%84%E5%86%85%E9%83%A8%E5%88%86%E5%B1%82">§</a></h2>\n<ul>\n<li>Virtual DOM</li>\n<li>Recociler：\n<ul>\n<li>v15 时是 Stack Reconciler：不能被打断、递归渲染、用 JS 自身的函数调用栈</li>\n<li>v16 时是 Fiber Reconciler：\n<ul>\n<li>实现自己的调用栈、以链表形式遍历组件树、灵活执行任务</li>\n<li>调用生命周期、Diff 运算</li>\n<li>加入了时间片调度，Fiber Reconciler 每执行一段时间，控制权交给浏览器，以分段执行</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Render：React DOM、React Native</li>\n</ul>\n<h2 id="react-1517-%E7%9A%84%E6%96%B0%E7%89%B9%E6%80%A7">React 15~17 的新特性？<a class="anchor" href="#react-1517-%E7%9A%84%E6%96%B0%E7%89%B9%E6%80%A7">§</a></h2>\n<ul>\n<li>\n<p>React v15：</p>\n<ul>\n<li>生命周期：\n<ul>\n<li><code>componentDidMount</code>：render 阶段触发一次，用来 ajax 调用。</li>\n<li><code>componentDidUpdate(prevProps, prevState, snapShot)</code>：updating 阶段触发，此时 setState 容易无限循环。</li>\n<li><code>shouldComponentUpdate(nextProps, nextState)</code>：改善性能，慎用，尽量用 PureComponent 替换。</li>\n</ul>\n</li>\n<li>渲染机制 - 同步：\n<ul>\n<li>首次渲染：<code>willMount -&gt; render -&gt; didMount</code>。</li>\n<li>props 更新：<code>receiveProps -&gt; shouldUpdate -&gt; willUpdate -&gt; render -&gt; didUpdate</code>。</li>\n<li>state 更新：<code>shouldUpdate -&gt; willUpdate -&gt; render -&gt; didUpdate</code>。</li>\n<li>卸载：<code>willUnmount</code>。</li>\n</ul>\n</li>\n<li>受控组件：组件没有 state，受控于父组件</li>\n<li>非受控组件：组件自身有 state</li>\n</ul>\n</li>\n<li>\n<p>React v16：</p>\n<ul>\n<li>生命周期（v16.4）：\n<ul>\n<li>挂载时：<code>constructor -&gt; getDerivedStateFromProps -&gt; render -&gt; React 更新 DOM 和 refs -&gt; componnentDidMound</code>。</li>\n<li>更新时：\n<ul>\n<li>New props 和 setState()：<code>getDerivedStateFromProps -&gt; shouldComponentUpdate -&gt; render -&gt; getSnapShotBeforeUpdat -&gt; React 更新 DOM 和 refs -&gt; componnentDidMound</code>。</li>\n<li>forceUpdate()：<code>getDerivedStateFromProps -&gt; render -&gt; getSnapShotBeforeUpdat -&gt; React 更新 DOM 和 refs -&gt; componnentDidUpdate</code>。</li>\n</ul>\n</li>\n<li>卸载时：<code>componnentDidUnmount</code>。</li>\n</ul>\n</li>\n<li>生命周期改动：\n<ul>\n<li>删除如下三个生命周期组件（都发生在 render 之前，不再安全且无法预测）：<code>componentWillReceiveProps; componentWillMonunt; componentWillUpdate</code>。</li>\n<li>新增 <code>getDerivedStateFromProps(nexttProp, prevState)</code>：尽量别用；derivedState 是受 props 影响后的 state。</li>\n<li>新增 <code>getSnapshotBeforeUpdate(prevProp, prevState)</code>：render 之后、DOM 更新前触发，是 <code>componentWillUpdate</code> 的安全办，尽量别用。</li>\n</ul>\n</li>\n<li>渲染机制：从同步到异步 React Fiber</li>\n</ul>\n</li>\n<li>\n<p>React v17：</p>\n<ul>\n<li>支持逐步升级（在应用中嵌套不同版本的 React），为未来版本作为垫脚石（React 嵌入到其它技术构建的应用程序）</li>\n<li>全新的 JSX 转换改进（与 Babel 合作）：\n<ul>\n<li>旧版使用：<code>React.createElement</code>。过于依赖 React 本身，难以性能优化</li>\n<li>v17 新版使用：<code>import jsx from \'react/jsx-runtime\'</code>。抽离出独立的包</li>\n</ul>\n</li>\n<li>根事件处理器从 document 变为 React 树的 DOM 容器中：\n<ul>\n<li><code>document.addEventListener</code> -&gt; <code>root.addEventListener</code></li>\n<li><code>document.addEventListener</code> 监听时不再被触发设置为捕获时会触发</li>\n</ul>\n</li>\n<li>对标浏览器，优化事件系统</li>\n<li>去除事件池</li>\n<li>渲染机制优化：v17 后，调度机制不定期中断执行更高优先度的任务。</li>\n<li>副作用清理函数异步执行：v17 后，将在运行任何副作用前执行所有副作用清理函数</li>\n<li>返回一致的 undefined 错误：v17 后，forwardRef 和 memo 组件的行为也会在此时报错</li>\n<li>原生组件栈：\n<ul>\n<li>v16 时引入组件栈信息来排错，不通知报错的具体位置且生产环境上很难使用</li>\n<li>v17 中新调用栈机制，环境更友好</li>\n</ul>\n</li>\n<li>移除私有导出</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-react-hooks">如何理解 React Hooks？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-react-hooks">§</a></h2>\n<ul>\n<li>生命周期：\n<ul>\n<li>挂载阶段：<code>Run lazy innitializers -&gt; Render -&gt; React updates DOM -&gt; Run LayoutEffects -&gt; Browser paints screen -&gt; Run Effects</code>。</li>\n<li>更新阶段：<code>Render -&gt; React updates DOM -&gt; Cleanup LayoutEffects -&gt; Run LayoutEffects -&gt; Browser paints screen -&gt; Cleanup Effects -&gt; Run Effects</code>。</li>\n<li>卸载阶段：<code>Cleanup LayoutEffects -&gt; Cleanup Effects</code>。</li>\n</ul>\n</li>\n<li>Hook 于 v16.8 引入，特性：\n<ul>\n<li>不使用 class 的情况下也可以使用 state 和 React 其它特性（生命周期）。</li>\n<li>没有破坏性，完全可选的，100% 向后兼容</li>\n<li>复用状态逻辑，但不复用 state 本身，每次调用都有一个完全独立的 state</li>\n<li>Hooks 可以按用途分离代码块，无需关注生命周期函数。</li>\n<li>React 树中，其元素类型与 key 值不变时，重用该组件，否则会销毁再创建</li>\n<li>函数式组件：\n<ul>\n<li>在一个函数中返回 React Element</li>\n<li>render 函数每次调用，都使用独立的变量，可以类比为一“帧”。</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>须知：\n<ul>\n<li>目前还没有 <code>getSnapShotBeforeUpdate; getDerivedStateFromError; componentDidCatch</code> 的等价 Hook。</li>\n<li>通过 HOok 规范，每个组件内部都有一个 [记忆单元格]，顺序地保存每个 Hook 值</li>\n<li>Hook 组件中的 state 会替换值，class 中的 setState 会合并值，推荐拆分 state 来替换之前的值。</li>\n</ul>\n</li>\n<li>class 缺点：容易使优化措施无效，不能很好的压缩，并且会使热重载出现不稳定的情况</li>\n<li>额外规则：\n<ul>\n<li>只能在函数最外层调用 Hook</li>\n<li>useState 根据调用顺序来定位具体变量</li>\n<li>只能在 React 函数中调用</li>\n</ul>\n</li>\n</ul>\n<h2 id="react-%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E5%86%85%E7%BD%AE-hooks">React 都有哪些内置 Hooks？<a class="anchor" href="#react-%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E5%86%85%E7%BD%AE-hooks">§</a></h2>\n<ul>\n<li>\n<p>基础 Hook：<code>useState; useEffect; useContext</code>。</p>\n</li>\n<li>\n<p>额外 Hook：除了基础 Hook 外的 Hook，是基础 Hook 的变体，只用于特殊情况</p>\n</li>\n<li>\n<p><code>useState</code>：</p>\n<ul>\n<li>React 假设多次调用 useState 时，能保证每次渲染它们的调用顺序是不变的。</li>\n</ul>\n</li>\n<li>\n<p><code>useEffect</code>：</p>\n<ul>\n<li>是异步的不阻塞浏览器，同步可以使用 <code>useLayouttEffect</code>。</li>\n<li>React 会等浏览器完成画面渲染之后延迟调用 useEffect</li>\n<li>给函数组件增加操作副作用的能力\n<ul>\n<li>副作用包括网络请求、订阅、手动修改 DOM 等，分为需要和不需要消除的。</li>\n</ul>\n</li>\n<li>会在每次渲染完成后调用副作用处理函数</li>\n<li>返回一个函数来指定如何清理副作用</li>\n<li>可以看作是 <code>componentDidMount; componentDidUpdate; componentWillUnmount</code> 的结合。useState：React 假设多次调用 useState 时，能保证每次渲染它们的调用顺序是不变的useEffect：是异步的不阻塞浏览器，同步可以使用 <code>useLayouttEffect</code>。React 会等浏览器完成画面渲染之后延迟调用 useEffect给函数组件增加操作副作用的能力副作用包括网络请求、订阅、手动修改 DOM 等，分为需要和不需要消除的。会在每次渲染完成后调用副作用处理函数返回一个函数来指定如何清理副作用可以看作是 <code>componentDidMount; componentDidUpdate; componentWillUnmount</code> 的结合。</li>\n</ul>\n</li>\n<li>\n<p><code>useContent</code>：</p>\n<ul>\n<li>调用了 useContext 的组件总会在 context 值改变时重新渲染。</li>\n<li><code>useContext(MyContent)</code> 相当于<code>static contextType = MyContext 或 &lt;MyContext.Consumer&gt;</code>。</li>\n</ul>\n</li>\n<li>\n<p><code>useReducer</code>：</p>\n<ul>\n<li>useState 替代方案：<code>connst [state, dispatch] = useReducer(reducer, initialArg, init)</code>。</li>\n<li>state 逻辑较为复杂且包含多个子值，或下一个 state 依赖于上一个 state 时适用。</li>\n<li>适用 useReducer 还能给那些会触发深更新的组件做性能优化。</li>\n</ul>\n</li>\n<li>\n<p><code>useCallback</code>：可以用于 useRef 实现。</p>\n<ul>\n<li>允许在重新渲染之间保持对相同的回调引用以使 shouldComponentUpdate 工作。</li>\n<li>把内联回调函数及依赖项数组作为参数传入，useCallback 将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。</li>\n<li>当把回调函数传递给经过优化并使用引用相等性的非必要渲染的子组件时很有用。</li>\n<li><code>useCallback(fn, deps)</code> 相当于 <code>useMemp(() =&gt; fn, deps)</code>。</li>\n</ul>\n</li>\n<li>\n<p><code>useMemo</code>：可以用于 useRef 实现。</p>\n<ul>\n<li>仅在某个依赖项改变时，重新计算 memoized 值 =&gt; 优化每次渲染时的高开销计算。</li>\n<li>传入 useMemo 的函数会在渲染期间执行，不要传入与渲染无关的操作（如副作用）。</li>\n</ul>\n</li>\n<li>\n<p><code>useRef</code>：ref 可以用来保存上一次渲染的值 -&gt; usePrevious。</p>\n<ul>\n<li>返回一个可变的 ref 对象，其 <code>.current</code> 属性被初始化为传入的参数。</li>\n<li>返回的 ref 对象在组件的整个生命周期内保持不变。</li>\n<li>本质上，useRef 就像是可以在其 <code>.current</code> 属性中保存一个可变值的“盒子”。</li>\n<li><code>&lt;div ref={myRef} /&gt;</code> 形式传入组件，则无论该节点如何改变，<code>.current</code> 都是对应的 DOM</li>\n<li>useRef 与 ref 属性更有用，可以方便保存任何可变值，类似于 class 中使用那个实例字段方式。</li>\n<li>useRef 和自建一个 <code>{ currrent: ... }</code> 对象唯一的区别是，useRef 会在每次渲染时返回同一个 ref 对象</li>\n</ul>\n</li>\n<li>\n<p><code>useImperativeHandle</code>：</p>\n<ul>\n<li>使用 ref 时，自定义暴露给父组件的实例值。</li>\n<li>与 forwardRef 一起使用。</li>\n</ul>\n</li>\n<li>\n<p><code>useLayoutEffect</code>：</p>\n<ul>\n<li>DOM 变更后同步触发渲染，尽可能别用。</li>\n<li>服务端渲染时，无论 useLayoutEffect 还是 useEffect 都无法在 JS 加载完成前执行</li>\n</ul>\n</li>\n<li>\n<p><code>useDebugValue</code>：</p>\n<ul>\n<li>用于在 React 开发者工具中显示自定义 Hook 的标签。</li>\n<li>第二个参数，格式化函数，只有在 Hook 被检查时会被调用。</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%80%E4%B8%AA-useloading-hook">自定义一个 useLoading Hook<a class="anchor" href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%80%E4%B8%AA-useloading-hook">§</a></h2>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">*</span><span class="token operator">*</span>\n <span class="token operator">*</span> 功能同 createThrowable<span class="token punctuation">,</span> 优化了一个点<span class="token punctuation">:</span> 在函数内处理了 loading状态\n <span class="token operator">*</span> 用法同 React<span class="token punctuation">.</span>useXxx 会返回一个数组<span class="token punctuation">,</span> 第一个参数是 函数<span class="token punctuation">,</span> 第二个是 loading状态\n <span class="token operator">*</span> <span class="token variable">@param</span> fn\n <span class="token operator">*</span> <span class="token variable">@param</span> errorTitle\n <span class="token operator">*</span> <span class="token variable">@return</span> <span class="token punctuation">[</span>处理异常函数<span class="token punctuation">,</span> loading状态<span class="token punctuation">]</span>\n <span class="token operator">*</span><span class="token operator">/</span>\nexport <span class="token keyword">const</span> useLoadingThrowable <span class="token operator">=</span>\n  function <span class="token punctuation">(</span>fn<span class="token punctuation">:</span> <span class="token punctuation">(</span>args<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> Promise<span class="token operator">&lt;</span>any<span class="token operator">></span><span class="token punctuation">,</span> errorTitle <span class="token operator">=</span> <span class="token string">\'操作失败\'</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>args<span class="token operator">?</span><span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> any<span class="token punctuation">,</span> boolean<span class="token punctuation">]</span> {\n    <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n    return <span class="token punctuation">[</span>\n      function <span class="token punctuation">(</span>args<span class="token punctuation">:</span> any<span class="token punctuation">)</span> {\n        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n        <span class="token function">fn</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n            <span class="token operator">/</span><span class="token operator">/</span> 忽略 axios 取消造成的请求错误\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">&amp;</span><span class="token operator">&amp;</span> e<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> e<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">\'Cancel\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> {\n              return\n            }\n            <span class="token function">notificationErrorLog</span><span class="token punctuation">(</span>errorTitle<span class="token punctuation">,</span> e<span class="token punctuation">)</span>\n          }<span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      }<span class="token punctuation">,</span>\n      loading<span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n  }\n\n<span class="token keyword">const</span> <span class="token punctuation">[</span>getPartsAvlList<span class="token punctuation">,</span> loadingPartsAvl<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useLoadingThrowable</span><span class="token punctuation">(</span>async <span class="token punctuation">(</span>pagination<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n        <span class="token keyword">const</span> {data<span class="token punctuation">:</span> {aaData<span class="token punctuation">,</span> success<span class="token punctuation">,</span> msg<span class="token punctuation">,</span> recordsFiltered}} <span class="token operator">=</span> await <span class="token function">getAvlList</span><span class="token punctuation">(</span>{}<span class="token punctuation">)</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> {\n            <span class="token function">setAvlList</span><span class="token punctuation">(</span>aaData<span class="token punctuation">)</span>\n            <span class="token function">setPagination</span><span class="token punctuation">(</span>{current<span class="token punctuation">:</span> pagination<span class="token punctuation">.</span>current<span class="token punctuation">,</span> pageSize<span class="token punctuation">:</span> pagination<span class="token punctuation">.</span>pageSize<span class="token punctuation">,</span> total<span class="token punctuation">:</span> recordsFiltered<span class="token punctuation">,</span>showSizeChanger<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                showQuickJumper<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>showTotal<span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span>{return <span class="token function">showTotal</span><span class="token punctuation">(</span>recordsFiltered<span class="token punctuation">)</span>}<span class="token punctuation">,</span>pageSizeOptions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'10\'</span><span class="token punctuation">,</span> <span class="token string">\'50\'</span><span class="token punctuation">,</span> <span class="token string">\'100\'</span><span class="token punctuation">,</span> <span class="token string">\'200\'</span><span class="token punctuation">]</span>}<span class="token punctuation">)</span>\n        } <span class="token keyword">else</span>\n            throw msg\n    }<span class="token punctuation">,</span> <span class="token string">"获取AVL列表信息失败"</span><span class="token punctuation">)</span>\n\nReact<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>{\n        <span class="token function">getPartsAvlList</span><span class="token punctuation">(</span>pagination<span class="token punctuation">)</span>\n}<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>}\n</code></pre>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-jsx">如何理解 JSX？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-jsx">§</a></h2>\n<ul>\n<li>React v16 时，JSX 编译的本质是对 React.createElement 的调用</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E8%99%9A%E6%8B%9F-dom">如何理解虚拟 DOM？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E8%99%9A%E6%8B%9F-dom">§</a></h2>\n<ul>\n<li>前端性能优化的一个秘诀就是尽可能少地直接操作 DOM（DOM 慢，容易引发回重绘）、多人协作会隐藏更多 BUG</li>\n<li>实现 Virtual DOM 的关键步骤\n<ul>\n<li>构建 Virtual DOM 节点的数据结构</li>\n<li>构建 Virtual DOM Tree</li>\n<li>定义一个函数处理 Virtual DOM 和真实 DOM 的转换</li>\n<li>定义一个函数比较 Virtual DOM 的 diff\n<ul>\n<li>通常情况下很少会出现跨层级的 DOM 更新，时间复杂度是 O(n)</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="setstate-%E8%83%8C%E5%90%8E%E7%9A%84%E6%B7%B1%E5%85%A5%E5%8E%9F%E7%90%86">setState 背后的深入原理？<a class="anchor" href="#setstate-%E8%83%8C%E5%90%8E%E7%9A%84%E6%B7%B1%E5%85%A5%E5%8E%9F%E7%90%86">§</a></h2>\n<ul>\n<li>React v15 同步机制：当我们调用 <code>setState</code> 更新页面的时候，React 会遍历应用的所有节点，计算出差异，然后再更新 UI。整个过程是一气呵成，不能被打断的。如果页面元素很多，整个过程占用的时机就可能超过 16 毫秒，就容易出现掉帧的现象。\n<ul>\n<li>在 React 生命周期内，也可以理解主线程中 setState 就是异步的；子线程或者说异步任务中，例如 setInterval、setTimeout 里，setState 就是同步更新的。</li>\n</ul>\n</li>\n<li>任何 state 的更新都会导致 React 进行重新渲染。<code>props</code> 也会导致 React 进行重新渲染。组件与父组件的更改同样也会引起 React 的重新渲染。<code>shouldComponentUpdate</code> 来控制 React 是否需要渲染。</li>\n<li>setState可能会引发不必要的渲染(renders)。</li>\n<li>setState无法完全掌控应用中所有组件的状态。</li>\n<li>setState本质是通过一个队列机制实现state更新的。 执行setState时，会将需要更新的state合并后放入状态队列，而不会立刻更新state，队列机制可以批量更新state。 如果不通过setState而直接修改this.state，那么这个state不会放入状态队列中，下次调用setState时对状态队列进行合并时，会忽略之前直接被修改的state，这样我们就无法合并了，而且实际也没有把你想要的state更新上去。</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-react-fiber">如何理解 React Fiber？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-react-fiber">§</a></h2>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword module">export</span> type <span class="token maybe-class-name">Fiber</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Fiber 类型信息</span>\n  type<span class="token operator">:</span> any<span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n  <span class="token comment">// ⚛️ 链表结构</span>\n  <span class="token comment">// 指向父节点，或者render该节点的组件</span>\n  <span class="token keyword control-flow">return</span><span class="token operator">:</span> <span class="token maybe-class-name">Fiber</span> <span class="token operator">|</span> <span class="token keyword null nil">null</span><span class="token punctuation">,</span>\n  <span class="token comment">// 指向第一个子节点</span>\n  child<span class="token operator">:</span> <span class="token maybe-class-name">Fiber</span> <span class="token operator">|</span> <span class="token keyword null nil">null</span><span class="token punctuation">,</span>\n  <span class="token comment">// 指向下一个兄弟节点</span>\n  sibling<span class="token operator">:</span> <span class="token maybe-class-name">Fiber</span> <span class="token operator">|</span> <span class="token keyword null nil">null</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<ul>\n<li>React Fiber是对核心算法的一次重新实现，是 Render/Reconciliation 的最小单位</li>\n<li>同步的缺点：\n<ul>\n<li>默认情况下，JS 运算、页面布局和页面绘制都是运行在浏览器的主线程当中，他们之间是互斥的关系。如果 JS 运算持续占用主线程，页面就没法得到及时的更新。</li>\n<li>当 React 决定要加载或者更新组件树时，会做很多事，比如调用各个组件的生命周期函数，计算和比对 Virtual DOM，最后更新 DOM 树，这整个过程是同步进行的，任务繁多，容易页面卡顿</li>\n</ul>\n</li>\n<li>旧版 React：通过递归的方式进行渲染，使用的是 JS 引擎自身的函数调用栈，它会一直执行到栈空为止。</li>\n<li>React Fiber：实现了自己的组件调用栈，它以链表的形式遍历组件树，可以灵活的暂停、继续和丢弃执行的任务。实现方式是使用了浏览器的 <code>requestIdleCallback </code>这一 API</li>\n<li>React Fiber 异步：分片机制，维护每一个分片的数据结构，就是 Fiber。\n<ul>\n<li>把一个耗时长的任务分成很多小片，虽然总时间很长，但是在每个小片执行完成后，就把控制权交还给 React 负责任务协调的模块，给其它任务一个机会去做更紧急的任务，这样唯一的线程不会被独占。</li>\n</ul>\n</li>\n<li>React 更新过程分为两个阶段（因为一个更新过程可能被打断，导致低优先级更新任务所做的工作则会完全作废）：\n<ul>\n<li>第一个阶段 Reconciliation Phase：React Fiber 会找出需要更新哪些 DOM，这个阶段是可以被打断的。可能会调用：\n<ul>\n<li><code>componentWillMount; componentWillReceiveProps; shouldComponentUpdate; componentWillUpdate;</code></li>\n</ul>\n</li>\n<li>第二阶段 Commit Phase：一鼓作气把 DOM 更新完，绝不会被打断。可能会调用：\n<ul>\n<li><code>componentDidMount; componentDidUpdate; componentWillUnmount</code></li>\n</ul>\n</li>\n<li>由于分片导致的打断，部分运算需要重新执行，所以：\n<ul>\n<li>旧版 React：每个生命周期函数在一个加载或者更新过程中绝对只会被调用一次</li>\n<li>React Fiber：第一阶段中的生命周期函数在一次加载和更新过程中可能会被多次调用</li>\n</ul>\n</li>\n<li><code>componentWillMount</code> 和 <code>componentWillUpdate</code> 副作用多，使用 React Fiber 的时候一定要重点看这两个函数的实现。</li>\n</ul>\n</li>\n<li>任务的优先级有六种：\n<ul>\n<li>synchronous，与之前的 Stack Reconciler 操作一样，同步执行</li>\n<li>task，在 next tick 之前执行</li>\n<li>animation，下一帧之前执行</li>\n<li>high，在不久的将来立即执行</li>\n<li>low，稍微延迟执行也没关系</li>\n<li>offscreen，下一次 render 时或 scroll 时才执行</li>\n</ul>\n</li>\n<li>Fiber 树：\n<ul>\n<li>Fiber Reconciler 在阶段一进行 Diff 计算的时候，会生成一棵 Fiber 树。这棵树是在 Virtual DOM 树的基础上增加额外的信息来生成的，它本质来说是一个链表。</li>\n<li>Fiber 树在首次渲染的时候会一次过生成。在后续需要 Diff 的时候，会根据已有树和最新 Virtual DOM 的信息，生成一棵新的树。这颗新树每生成一个新的节点，都会将控制权交回给主线程，去检查有没有优先级更高的任务需要执行。如果没有，则继续构建树的过程。</li>\n</ul>\n</li>\n</ul>\n<p>函数调用栈 Fiber   基本单位 函数 Virtual DOM 节点  输入 函数参数 Props  本地状态 本地变量 State  输出 函数返回值 React Element  下级 嵌套函数调用 子节点(child)  上级引用 返回地址 父节点(return)</p>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-react-concurren-mode">如何理解 React Concurren Mode？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-react-concurren-mode">§</a></h2>\n<ul>\n<li>Concurrent Mode 是 Async Mode 的 重新定义，来凸显出 React 在不同优先级上的执行能力，与其它的异步渲染方式进行区分。</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-purecomponent">如何理解 PureComponent？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-purecomponent">§</a></h2>\n<ul>\n<li><code>PureComponent</code> 也就是纯组件，取代其前身 <code>PureRenderMixin</code>，<code>PureComponent</code> 是优化 <code>React</code> 应用程序最重要的方法之一。</li>\n<li>可以减少不必要的 <code>render</code> 操作的次数，从而提高性能，而且可以少写 <code>shouldComponentUpdate</code> 函数，节省了点代码。</li>\n<li>当组件更新时，如果组件的 <code>props</code> 和 <code>state</code> 都没发生改变，<code>render</code> 方法就不会触发，省去 <code>Virtual DOM</code> 的生成和比对过程，达到提升性能的目的。当 <code>props</code> 或者 <code>state</code> 改变时，<code>PureComponent</code> 将对 <code>props</code> 和 <code>state</code> 进行浅比较。\n<ul>\n<li>浅比较将检查原始值是否有相同的值（例如：<code>1 == 1</code> 或者 <code>ture==true</code>）,数组和对象引用是否相同。</li>\n<li>深比较时，可以通过使用 es6 的 assign 方法或者数组的扩展运算符或者使用第三方库，强制返回一个新的对象。</li>\n</ul>\n</li>\n<li>注意：\n<ul>\n<li>不要在 render 的函数中绑定值</li>\n<li>不要在 render 方法里派生数据</li>\n</ul>\n</li>\n</ul>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// React 自动帮我们做了一层浅比较</span>\n<span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">_compositeType</span> <span class="token operator">===</span> <span class="token maybe-class-name">CompositeTypes</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">PureClass</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  shouldUpdate <span class="token operator">=</span> <span class="token operator">!</span><span class="token function">shallowEqual</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">,</span> nextProps<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">shallowEqual</span><span class="token punctuation">(</span>inst<span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">,</span> nextState<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h2 id="react-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E6%87%92%E5%8A%A0%E8%BD%BD">React 如何实现懒加载？<a class="anchor" href="#react-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E6%87%92%E5%8A%A0%E8%BD%BD">§</a></h2>\n<ul>\n<li>React 16.6 添加了一个新的特性：React.lazy()，它可以让代码分割更加容易。\n<ul>\n<li>避免大体积的代码包，增加首屏的加载速度。</li>\n</ul>\n</li>\n<li>React.lazy()</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-react-suspense">如何理解 React Suspense<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-react-suspense">§</a></h2>\n<ul>\n<li>React 捕获到异常之后，会判断异常是不是一个 thenable，如果是则会找到 SuspenseComponent ，如果 thenable 处于 pending 状态，则会将其 children 都渲染成 fallback 的值，一旦 thenable 被 resolve 则 SuspenseComponent 的子组件会重新渲染一次。</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E6%89%B9%E9%87%8F%E6%9B%B4%E6%96%B0batchingstrategytransaction">如何理解批量更新（BatchingStrategy/transaction）？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E6%89%B9%E9%87%8F%E6%9B%B4%E6%96%B0batchingstrategytransaction">§</a></h2>\n<ul>\n<li>事务（Transaction），是一个操作序列，这些操作要么都执行，要么都不执行，它是一个不可分割的工作单位。\n<ul>\n<li>sql server 用来处理批量操作的一个机制。当所有操作均执行成功，即可以 commit transaction；若有一个操作失败，则执行rollback</li>\n</ul>\n</li>\n<li>React 中 setstate 是异步的，在 <code>didmount</code> 中多次 setstate 会在最后转为一次更新。</li>\n<li>transaction 大致可以理解为一些要按照顺序执行的操作的集合\n<ul>\n<li>React 中就是调用 perform 方法进入一个事务，该方法中会传入一个 method 参数。</li>\n<li>执行 perform 时先执行 initializeAll 方法按顺序执行一系列 initialize 的操作，例如一些初始化操作等等</li>\n<li>然后执行传入的method，method 执行完后就执行 closeAll 方法按顺序执行一系列 close 操作然后结束这次事务。</li>\n</ul>\n</li>\n</ul>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E6%9D%83%E9%99%90%E7%BB%84%E4%BB%B6%E7%9A%84%E8%AE%BE%E8%AE%A1">如何进行权限组件的设计？</a></li><li><a href="#react-%E7%9A%84%E5%86%85%E9%83%A8%E5%88%86%E5%B1%82">React 的内部分层？</a></li><li><a href="#react-1517-%E7%9A%84%E6%96%B0%E7%89%B9%E6%80%A7">React 15~17 的新特性？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-react-hooks">如何理解 React Hooks？</a></li><li><a href="#react-%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E5%86%85%E7%BD%AE-hooks">React 都有哪些内置 Hooks？</a></li><li><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%80%E4%B8%AA-useloading-hook">自定义一个 useLoading Hook</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-jsx">如何理解 JSX？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E8%99%9A%E6%8B%9F-dom">如何理解虚拟 DOM？</a></li><li><a href="#setstate-%E8%83%8C%E5%90%8E%E7%9A%84%E6%B7%B1%E5%85%A5%E5%8E%9F%E7%90%86">setState 背后的深入原理？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-react-fiber">如何理解 React Fiber？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-react-concurren-mode">如何理解 React Concurren Mode？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-purecomponent">如何理解 PureComponent？</a></li><li><a href="#react-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E6%87%92%E5%8A%A0%E8%BD%BD">React 如何实现懒加载？</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-react-suspense">如何理解 React Suspense</a></li><li><a href="#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E6%89%B9%E9%87%8F%E6%9B%B4%E6%96%B0batchingstrategytransaction">如何理解批量更新（BatchingStrategy/transaction）？</a></li></ol></nav>'
        } })
};
