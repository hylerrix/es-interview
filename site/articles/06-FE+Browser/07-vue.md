# Vue

> [vue 269 个知识点（面试题）为你保驾护航](https://juejin.im/post/6844903876231954446)。

> 如何理解 watch deep, watch immediate?

## React 和 Vue 的区别？

相同点

- 都有组件化开发和Virtual DOM
- 都支持props进行父子组件间数据通信
- 都支持数据驱动视图, 不直接操作真实DOM, 更新状态数据界面就自动更新
- 都支持服务器端渲染
- 都有支持native的方案,React的React Native,Vue的Weex

不同点

- 数据绑定: vue实现了数据的双向绑定,react数据流动是单向的
- 组件写法不一样, React推荐的做法是 JSX , 也就是把HTML和CSS全都写进JavaScript了,即'all in js'; Vue推荐的做法是webpack+vue-loader的单文件组件格式,即html,css,js写在同一个文件
- state对象在react应用中不可变的,需要使用setState方法更新状态;在vue中,state对象不是必须的,数据由data属性在vue对象中管理
- virtual DOM不一样,vue会跟踪每一个组件的依赖关系,不需要重新渲染整个组件树.而对于React而言,每当应用的状态被改变时,全部组件都会重新渲染,所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制
- React严格上只针对MVC的view层,Vue则是MVVM模式

概念

- 组件通信：父向子、子向父、隔代、兄弟
- 实现通信方式

- - props：父向子传递一般属性、子向父传递函数属性；缺点隔代不好
  - vue 自定义事件：Vue 内置，代替函数类型的 props【绑定监听 @、触发事件 emit】
  - 消息订阅与发布：常见订阅库 pubsub-js，适用于任意关系组件
  - vuex：相比 pubsub 管理起来更集中方便
  - slot：专门用来实现父向子传递带数据的标签

## Vue 1~3 的版本特性

> [从 Vue 1.x 迁移到 V2](https://cn.vuejs.org/v2/guide/migration.html)

* Vue1：
  * 生命周期：`init; created; beforeCompile; compiled; ready; beforeDestroy; destroyed; `。
  * 提高循环性能需添加 `track-by='$index'`
  * `v-for="(index,val) in array"`
  * transition 只是一个属性
  * `<a v-link="{path:'/home'}">我是主页</a>`

* Vue 2：
  * 生命周期：
    * `beforeCreate; created; beforeMount; mounted; beforeUpdate; updated; beforeDestroy; destroyed;`。
    * 移除：`beforeCompile; attached; detached; `
    * 替换：`compiled, ready -> mounted`
    * 重新命名：`init -> beforeCreate`
  * Virtual-DOM
    * 渲染层开始基于轻量级的 Virtual DOM 实现，大多数情况下初始化渲染速度和内存消耗都提升了 2~4 倍
    * 从模板到 Virtual DOM 的编译阶段使用了一些高阶优化：
      * 它会检测出静态的 class 名和 attributes 这样它们在初始化渲染之后就永远都不会再被比对。
      * 它会检测出最大静态子树 (就是不需要动态性的子树) 并且从渲染函数中萃取出来。这样在每次重渲染的时候，它就会直接重用完全相同的 virtual nodes 同时跳过比对。
    * 新的渲染系统同时允许你通过简单的冻结数据来禁用响应式转换，配以手动的强制更新，这意味着你对于重渲染的流程实际上有着完全的控制权。
  * 可选支持 JSX
  * 支持服务端渲染，相比同时期的同步 SSR React，Vue 2 提供了内建的流式 SSR：在渲染组件时返回一个可读的 stream，然后直接 pipe 到 HTTP response。流式渲染能够确保服务端的响应度，也能让用户更快地获得渲染内容。
  * 不支持片段代码，`template` 下只接受一个根节点。
  * 提高循环性能可不添加 `:key="index"`
  * transition 是一个组件
  * `<router-link to="/home">我是主页</router-link>`

## Vue 的生命周期

* beforeCreate：组件实例被创建之初，组件的属性生效之前
* created：组件实例已经完全创建，属性也绑定，但真实dom还没有生成， $el 还不可用
* beforeMount：在挂载开始之前被调用:相关的 render 函数首次被调用
* mounted el：被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
* beforeUpdate：组件数据更新之前调用，发生在虚拟 DOM 打补丁之前
* update：组件数据更新之后
* activited：keep-alive专属，组件被激活时调用
* deadctivated：keep-alive专属，组件被销毁时调用
* beforeDestory：组件销毁前调用
* destoryed：组件销毁后调用

## 实现 Vue 的双向绑定

Vue 2.x 的 Object.defineProperty 版本

```javascript
// 数据
const data = {
  text: 'default'
};
const input = document.getElementById('input');
const span = document.getElementById('span');
// 数据劫持
Object.defineProperty(data, 'text', {
  // 数据变化 —> 修改视图
  set(newVal) {
    input.value = newVal;
    span.innerHTML = newVal;
  }
});
// 视图更改 --> 数据变化
input.addEventListener('keyup', function(e) {
  data.text = e.target.value;
});
```

Vue 3.x 的 proxy 版本

```javascript
// 数据
const data = {
  text: 'default'
};
const input = document.getElementById('input');
const span = document.getElementById('span');
// 数据劫持
const handler = {
  set(target, key, value) {
    target[key] = value;
    // 数据变化 —> 修改视图
    input.value = value;
    span.innerHTML = value;
    return value;
  }
};
const proxy = new Proxy(data, handler);

// 视图更改 --> 数据变化
input.addEventListener('keyup', function(e) {
  proxy.text = e.target.value;
});
```

## Vue 组件如何通信？

* props/$emit+v-on: 通过props将数据自上而下传递，而通过$emit和v-on来向上传递信息。
* EventBus: 通过EventBus进行信息的发布与订阅
* vuex: 是全局数据管理库，可以通过vuex管理全局的数据流
* $attrs/$listeners: Vue2.4中加入的$attrs/$listeners可以进行跨级的组件通信
* provide/inject:以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成 立的时间里始终生效，这成为了跨组件通信的基础
* 还有用 solt 插槽或 ref 实例进行通信

## computed 和 Watch 有什么区别？

* computed：
  * computed 是计算属性，也就是计算值，它更多用于计算值的场景。
  * computed 具有缓存性，computed 的值在 getter 执行后会缓存，只有在它依赖的属性值改变之后，下一次获取 computed 的值才会重新调用对应的 getter 来计算。
  * computed 适用于计算比较消耗性能的计算场景。
* watch：
  * 更多的是观察的作用，监听回调。
  * 无缓存性，页面重新渲染时值不变化也会执行
* 当我们进行数值计算，而且依赖于其它数据时，用 computed
* 如果需要在某个数据变化时做一些事情，使用 watch 来观察这个数据的变化。

## Vue 如何实现双向绑定？

* 利用 Object.defineProperty 劫持对象的访问器，在属性值发生变化时获取变化后响应。
* Vue 3 中通过 Proxy 代理对象进行类似的操作。

## 如何理解 Vue 的 $nextTick？

* 比如不写在 $nextTick 里的话 this.$ref.chart 会 undefined

## 如何理解 Vue 响应式系统？

* 任何一个 Vue Component 都有一个与之对应的 Watcher 实例。
* Vue 的 data 上的属性会被添加 getter 和 setter 属性。
* 当 Vue Component render 函数被执行的时候，data 上会被触碰（被读），getter 会被调用，此时 Vue 会记录此 Vue Component 所依赖的所有 data。（依赖收集）
* data 被改动时，setter 会被调用，此时 Vue 会去通知所有依赖此 data 的组件去调用他们的 render 函数进行更新。

## 如何理解 Vue 的依赖收集？

## 如何理解 Vue 的变化侦测原理？

* Vue 已经可以数据劫持后，为什么还需要虚拟 DOM 进行 diff 检测差异？
  * 现代前端框架有两种方式侦测变化,一种是pull一种是push
  * pull: 其代表为React,我们可以回忆一下React是如何侦测到变化的,我们通常会用 setState API显式更新,然后React会进 行一层层的Virtual Dom Diff操作找出差异,然后Patch到DOM上,React从一开始就不知道到底是哪发生了变化,只是知道 「有变化了」,然后再进行比较暴力的Diff操作查找「哪发生变化了」，另外一个代表就是Angular的脏检查操作。
  * push: Vue的响应式系统则是push的代表,当Vue程序初始化的时候就会对数据data进行依赖的收集,一但数据发生变化,响 应式系统就会立刻得知,因此Vue是一开始就知道是「在哪发生变化了」,但是这又会产生一个问题,如果你熟悉Vue的响 应式系统就知道,通常一个绑定一个数据就需要一个Watcher,一但我们的绑定细粒度过高就会产生大量的Watcher,这会 带来内存以及依赖追踪的开销,而细粒度过低会无法精准侦测变化,因此Vue的设计是选择中等细粒度的方案,在组件级别 进行push侦测的方式,也就是那套响应式系统,通常我们会第一时间侦测到发生变化的组件,然后在组件内部进行Virtual Dom Diff获取更加具体的差异,而Virtual Dom Diff则是pull操作,Vue是push+pull结合的方式进行变化侦测的。
* Vue 中为什么没有类似的 shouldComponentUpdate？
  * React是pull的方式侦测变化,当React知道发生变化后,会使用Virtual Dom Diff进行差异检测,但是很多组件实际上是肯定 不会发生变化的,这个时候需要用shouldComponentUpdate进行手动操作来减少diff,从而提高程序整体的性能.
  * Vue是pull+push的方式侦测变化的,在一开始就知道那个组件发生了变化,因此在push的阶段并不需要手动控制diff,而组 件内部采用的diff方式实际上是可以引入类似于shouldComponentUpdate相关生命周期的,但是通常合理大小的组件不会 有过量的diff,手动优化的价值有限,因此目前Vue并没有考虑引入shouldComponentUpdate这种手动优化的生命周期.

## 如何理解 Vue 的 Keep-Alive？

## 如何解决 getter/setter 不能监听数组变异方法

## 监听的回调和事件怎么解耦的

## watcher 去重怎么做的

## DOM批更新怎么做的

