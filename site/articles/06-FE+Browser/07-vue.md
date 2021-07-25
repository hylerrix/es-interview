
# Vue

## Vue Router

### What’s its features and what’s the most use scenarios 

* **Main Site**
	* Nested route/view mapping
	* Modular, component-based router configuration
	* Route params, query, wildcards
	* View transition effects powered by Vue.js' transition system
	* Fine-grained navigation control
	* Links with automatic active CSS classes
	* HTML5 history mode or hash mode, with auto-fallback in IE9
	* Customizable Scroll Behavior
* Essentials
	* Dynamic Route Matching
	* Nested Routes
	* Programmatic Navigation
	* Named Routes
	* Named Views
	* Redirect and Alias
	* Passing Props to Route Components
	* HTML5 History Mode
* Advanced
	* Navigation Guard
	* Route Meta Fields
	* Transitions
	* Data Fetching
	* Scroll Behavior
	* Lazy loading Routes
	* Navigation Failures

### Registration

 `Vue({ router: { routes: { components } } })`

1. `const app = new Vue({ router }).$mount(‘#app’)`
	2. `const router = new VueRouter({ routes })`
	3. `const routes = [{ path: ‘/foo’, component: Foo }]`
	4. `const Foo = { template: ‘<div>foo</div>’ }`

### Root Usage

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <router-view></router-view>
</div>
```

* ` <router-link>`:
	* rendered as `<a>` tag by default
	* a `<router-link>` automatically gets the `.router-link-active` class when its target route is matched

### `.vue` file converted to what object?

### Inside VueRouter class

### How `Vue.use(router)` register Vue Router

* And why `<script src=“…/vue-router”>` after `<script src=“…/vue”>`  can automatically register vue router?

### What’s inside `this.$route`

* How is it mounted to global this?
* Why it can be watched?
* How can we implement equivalent functions by importing router object without using `this.$router`?
	* _Keep in mind that this.$router is exactly the same as using router. The reason we use this.$router is because we don't want to import the router in every single component that needs to manipulate routing._

### When two routes using the same components, will the component lifecycle hooks recalled by switching within these routes?

No. Since both routes render the same component, this is more efficient than destroying the old instance and then creating a new one.

To react to Paramus changes in the same component, you can simply watch the `$route` object or use the `beforeRouteUpdate` navigation guard.

### How does `<router-view>` worked?

The `<router-view>` is a top-level outlet. It renders the component matched by a top level route. Similarly, a rendered component can also contain its own, nested \<router-view\>. 

To render components into this nested outlet, we need to use the `children` option in `VueRouter` constructor config.

### What’s different between declarative navigation and programmatic navigation

* declarative navigation: `<router-link :to="{ ... }">`
* programmatically navigation: `router.push(location, onComplete?, onAbort?)`, `router.replace(location, onComplete?, onAbort?)`, `router.go(n)`.

### What is Browser History API? How to manipulate it?

The History interface allows manipulation of the browser session history, that is the pages visited in the tab or frame that the current page is loaded in.

* properties: `length`, `scrollRestoration`, `state`
* methods: `back()`, `forward()`, `go()`, `pushState()`, `replaceState()`

`router.push`, `router.replace` and `router.go` are counterparts of `window.history.pushState`, `window.history.replaceState` and `window.history.go`

### What ’s the difference between HTML5 History Mode and Hash Mode

* hash mode: default, with `#`
* html5 history mode: SPA client need server configuration

### How many build-in guards can hooks into route navigation process?

> [Navigation Guards][1]

> Remember that params or query changes won't trigger enter/leave navigation guards. You can either watch the $route object to react to those changes, or use the beforeRouteUpdate in-component guard.

* Global Before Guards
	* `const router = new VueRouter({ ... })`
	* `router.beforeEach((to, from, next) => {}`
	* Global before guards are called in creation order, whenever a navigation is triggered.
	* Guards may be resolved asynchronously, and the navigation is considered pending before all hooks have been resolved.
* Global Resolve Guards
	* similar to `router.beforeEach`, with the difference that resolve guards will be called right before the navigation is confirmed, after **all in-component guards and async route components are resolved**.
* Global After Hooks
	* unlike guards, these hooks do not get a `next` function and cannot affect the navigation
* Pre-Route Guard
	* define `beforeEnter` guards directly on a route's configuration object
	* These guards have the exact same signature as global before guards.
* In-Component Guards
	* directly define route navigation guards inside route components (the ones passed to the router configuration) with the following options:
		* beforeRouteEnter
			* you can access the instance by passing a callback to `next`. The callback will be called when the navigation is confirmed. and the component instance will be passed to the callback as the argument
			*  is the only guard that supports passing a callback to `next`
		* beforeRouteUpdate
		* BeforeRouteLeave
			* usually used to prevent the user from accidentally leaving the route with unsaved edits
			* The navigation can be canceled by calling `next(false)`

```js
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
  },
  beforeRouteUpdate(to, from, next) {
    // called when the route that renders this component has changed.
    // This component being reused (by using an explicit `key`) in the new route or not doesn't change anything.
    // For example, for a route with dynamic params `/foo/:id`, when we
    // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
    // will be reused (unless you provided a `key` to `<router-view>`), and this hook will be called when that happens.
    // has access to `this` component instance.
  },
  beforeRouteLeave(to, from, next) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
  }
}
```

### When change a router on one page, what happened? Router lifecycle called flow?

> The Full Navigation Resolution Flow
> route abort, router redirection, router error?

* Navigation triggered.
* Call `beforeRouteLeave` guards in deactivated components.
* Call global `beforeEach` guards.
* Call `beforeRouteUpdate` guards in reused components.
* Call `beforeEnter` in route configs.
* Resolve async route components.
* Call `beforeRouteEnter` in activated components.
* Call global `beforeResolve` guards.
* Navigation confirmed.
* Call global `afterEach` hooks.
* DOM updates triggered.
* Call callbacks passed to `next` in `beforeRouteEnter` guards with instantiated instances.

### What router strategy can be used in Data Fetching?

* **Fetching After Navigation**: fetch data in the incoming component’s lifecycle hook. Display a loading state while data is being fetched
	* fetch data in components‘s `created` hook
* **Fetching Before Navigation**: perform the navigation after data has been fetched
	* perform the data fetching in the `beforeRouteEnter` guard in the incoming component, and only call `next` when the fetch is complete
	* The user will stay on the previous view while the resource is being fetched for the incoming view. It is therefore recommended to display a progress bar or some kind of indicator while the data is being fetched. If the data fetch fails, it's also necessary to display some kind of global warning message.

## Similarities and Differences between `<keep-alive>` and `<transition>`

## What‘s the differences between `this.$variable` and `window.variable`

how to access each variable from different place?

## How to set Timer and clear Timer in Vue?

## What is mixin?

[1]:	https://router.vuejs.org/guide/advanced/navigation-guards.html "Navigation Guards"