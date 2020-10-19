# Vue

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
    * 替换：`compiled, ready -> mounted``
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

## 如何解决 getter/setter 不能监听数组变异方法

## 监听的回调和事件怎么解耦的

## watcher 去重怎么做的

## DOM批更新怎么做的

