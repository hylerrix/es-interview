# TypeScript

> 装饰器、静态类型、类型注解、类型推断、泛型、类型定义文件、模块化、打包编译、装饰器、Metadata、设计模式、元祖

> TS 特有的东西：typeof，keyof， infer

> https://github.com/typescript-exercises/typescript-exercises
>
> * 举一个你在项目中使用 TypeScript 泛型的例子
> * 说一下 TypeScript 中的泛型，以及他的使用方式与场景？
> * 如何使用 TypeScript 的联合类型？
> * 说一下 TypeScript 的内置类型
> * 说一下 TypeScript 的 pick 类型
> * 如何使用 TypeScript 定义一个对象类型？
> * 说一下 TypeScript 中的 type 和 interface 的区别
> * 说一下 TypeScript 中的交叉类型
>
> 如果接口返回 promise 类型的数据，你如何用 typescript 声明？

## 为什么需要 TypeScript

* TypeScript 的基础特性：

* 使用编译为 JavaScript 的更高级的语言优点：
  * 修复了 JavaScript 中一些长期问题，并摒弃了 JavaScript 不好的做法。
  * 在 JavaScript 的基础上提供一些语法糖，使我们能够编写更短的代码。ES2015 对语法糖支持的更好。
  * 对于需要长时间维护的大型项目，静态类型非常好用。

* 使用编译为 JavaScript 的更高级的语言缺点：
  * 由于浏览器只运行 JavaScript、所以需要构建、编译过程，在将代码提供给浏览器之前，需要将代码转移为 JavaScript。
  * 如果 source map 不能很好地映射到预编译的源代码，调试会很痛苦。
  * 大多数开发人员不熟悉这些语言，需要增加团队成本来学习。

## 如何理解 DefinitelyTyped 项目？



## TypeScript v1~v4 新特性

* v3.x

* v4.x
  * 可变元组类型
  * Class 从构造函数推断成员变量类型：在构造函数里对成员变量的赋值可以直接为成员变量推导类型。
  * **catch error 定义为 unknown 类型**：以保证后面的代码以健壮的类型判断方式书写
  * 支持 **jsxFragmentFactory** 参数定义 Fragment 工厂函数
  * 构建速度提升，提升了 --incremental + --noEmitOnError 场景的构建速度
  * 支持 `--incremental` + `--noEmit` 参数同时生效。
  * **支持 `@deprecated` 注释**， 使用此注释时，代码中会使用 删除线 警告调用者。
  * **局部 TS Server 快速启动功能**，打开大型项目时，TS Server 要准备很久，Typescript 4 在 VSCode 编译器下做了优化，可以提前对当前打开的单文件进行部分语法响应。
  * **更智能的自动导入，** 现在 `package.json` `dependencies` 字段定义的依赖将优先作为自动导入的依据，而不再是遍历 `node_modules` 导入一些非预期的包。

## TypeScript 和 Babel 有什么区别？

* TypeScript 是一门语言、Babel 是一个工具。
* ......

## TypeScript 的内置类型都有哪些？

* ECMAScript 的内置对象：`Boolean`、`Error`、`Date`、`RegExp` 等。
* DOM 和 BOM 的内置对象：`Document`、`HTMLElement`、`Event`、`NodeList` 等。
* TypeScript 核心库的定义文件：TypeScript 核心库的定义文件中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的。
* 第三方类型：如 `@types/node`。

## TypeScript支持哪些面向对象的术语？

* 模块、类、接口、封装、继承、多态、数据类型、成员函数

## 如何理解 TypeScript 泛型？

* 泛型支持递归

```typescript
type ListNode<T> = {
  data: T;
  next: ListNode<T> | null;
};
```

## 如何编写 tsconfig.json？

* 常用的编译配置：
  * allowJs：允许编译 js 文件
  * sourceMap：生成一个 .map.js 的文件，用于其他工具来 debugg，类似于 webpack 的 sourceMap
  * noImplicitAny：不允许用 any，如果初学 ts，建议项目部太复杂的情况下，可以借此来进行限制，前置自己培养对 ts 的理解
  * module && target：target 是编译成哪个版本的 js（es3、es5、es6...）；module 是模板生成的形式。默认情况下，当 target 是 es3 的时候，那 module 默认为 commonjs 形式，否则为 es6 形式。
    * 注意（和 outFile 搭配使用）：生成的模块形式：none、commonjs、amd、system、umd、es6、es2015 或 esnext 只有 amd 和 system 能和 outFile 一起使用 target 为 es5 或更低时可用 es6 和 es2015
  * lib：引入 ES 的功能库，比如想在项目中用js中Set，Map等新的数据结构，或 promise 等，那要在 lib 中引入 es2015。
  * removeComments 编译出的文件是否带注释，当为 false 的时候可以减少编译出文件的体积。
  * allowSyntheticDefaultImports：为 false 的时候，引入模块的时候必须以 * as 的形式
  * jsx：如果用 tsx 文件（React-ts）那么该项要配置成 jsx:"react"
  * baseUrl
  * paths：必须和 baseUrl 联用

## unknown 和 any 类型的区别？

unknown 类型不能赋值给除了 unknown 或 any 的其他任何类型，使用前必需显式进行指定类型，或是在有条件判断情况下能够隐式地进行类型推断的情况。
* unknown 类型，它是 any 类型对应的安全类型。
* unknown 和 any 的主要区别是，unknown 类型会更加严格：在对 unknown 类型的值执行大多数操作之前，我们必须进行某种形式的检查。而在对 any 类型的值执行操作之前，我们不必进行任何检查

## type 和 interface 有什么区别？

* interface是接口，type是类型，本身就是两个概念。只是碰巧表现上比较相似。
* 希望定义一个变量类型，就用type，如果希望是能够继承并约束的，就用interface。
* 如果你不知道该用哪个，说明你只是想定义一个类型而非接口，所以应该用type。
* 相同点：都可以描述一个对象或者函数
* 不同点
  * interface 可以 extends， 但 type 是不允许 extends 和 implement 的，但是 type 缺可以通过交叉类型 实现 interface 的 extend 行为
  * interface 能够合并多个相同命名的声明
  * interface 可以 extends type, type 也可以 与 interface 类型 交叉
  * type 可以声明基本类型别名，联合类型，元组等类型
  * type 语句中还可以使用 typeof 获取实例的 类型进行赋值

```typescript
// Type 一些骚操作
type StringOrNumber = string | number;  
type Text = string | { text: string };  
type NameLookup = Dictionary<string, Person>;  
type Callback<T> = (data: T) => void;  
type Pair<T> = [T, T];  
type Coordinates = Pair<number>;  
type Tree<T> = T | { left: Tree<T>, right: Tree<T> };
```

## 动手实现 [P in ArrType]?: string[]

```typescript
export type TestType = {
  [P in ArrType]?: string[]
}
```

## 动手实现装饰器

```typescript
/**
 * 处理异常装饰器, 挂在需要实现try/catch的方法上
 * @param fn
 * @constructor
 */
export const Throwable = (fn?: () => () => void) => {
  return function (target: any, key: any, descriptor: any) {
    const original = descriptor.value
    descriptor.value = function (...args: any[]) {
      const f = fn ? fn() : undefined
      try {
        original.apply(this, args)
      } catch (e) {
        notificationErrorLog(e)
      } finally {
        f && f()
      }
    }
  }
}
```

## Typescript 中的模块有什么特点？

## TypeScript 中的枚举？

## 如何检查 TypeScript 中的 null 和 undefined？

## TypeScript 是如何支持函数重载的？

## TypeScript 中 HTML 本身的类型？

* HTMLElement

## 动手实战常见的 Type Assertion？

```typescript
/* Checks if T1 equals to T2. */
export type IsTypeEqual<T1, T2> = IsNotAny<T1> extends false ? false : (
    IsNotAny<T2> extends false ? false : (
        [T1] extends [T2] ? ([T2] extends [T1] ? true : false): false
    )
);

/* Checks if T2 can be assigned to T1. */
export type IsTypeAssignable<T1, T2> = IsNotAny<T1> extends false ? false : (
    IsNotAny<T2> extends false ? false : (
        [T2] extends [T1] ? true : false
    )
);

/**
 * Returns `false` if `any` is specified, otherwise returns `true`.
 * @see https://stackoverflow.com/a/49928360/3406963
 */
export type IsNotAny<T> = 0 extends (1 & T) ? false : true;

/* Returns true for false and vice versa. */
export type Not<T> = [T] extends [true] ? false : true;

/**
 * Extracts and returns the first argument of the specified function.
 */
export type FirstArgument<T> = T extends (arg1: infer A, ...args: any[]) => any ? A : never;

/**
 * Extracts and returns the second argument of the specified function.
 */
export type SecondArgument<T> = T extends (arg1: any, arg2: infer A, ...args: any[]) => any ? A : never;

/* Extracts and returns the third argument of the specified function. */
export type ThirdArgument<T> = T extends (arg1: any, arg2: any, arg3: infer A, ...args: any[]) => any ? A : never;

/* Extracts and returns array element type. */
export type ArrayElement<T> = T extends (infer I)[] ? I : never;

/* A simple type assertion function which always expects a true-type. */
export function typeAssert<T extends true>() {}
```

