# 编程语言

- 面向过程、面向对象（封装、多态、继承）、函数式
- 堆、栈、队列
- 纯函数、柯里化
- 正则表达式

## 常见的编程范式都有哪些？

> https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1

* 指令式（对比：声明式）
  * 过程式
* 结构化（对比：非结构化）
  * 块结构
  * 模块化
  * 递归
  * 面向对象
    * 基于类
    * 基于原型
    * 多态性
    * 根据关注点分离：
      * 面向方面
      * 面向角色
      * 面向主题
  * 并发面向对象
* 非结构化（对比：结构化）
  * 阵列
* 声明式（对比：指令式）
  * 函数式
    * 纯函数式
  * 数据流程
    * 基于流程
    * 响应式
      * 函数式响应
  * 逻辑
    * 溯因逻辑
    * 回答集编程
    * 并发逻辑
    * 归纳逻辑
    * 函数式逻辑
  * 约束
    * 约束逻辑
      * 并发约束逻辑
  * 本体
* 元编程
  * 宏
  * 模板
  * 反射式
    * 面向属性
* 泛型
* 面向语言
  * 领域特定
* 函数级（对比：值级）
  * 无参数式
    * 串接
* 并发计算
  * 基于演员
* 并行计算
  * 面向进程
* 自动
  * 归纳
* 面向代理
* 基于自动机
* 基于堆栈
* 数据驱动
* 事件驱动
* 动态/脚本
* 文学
* 集合论
* 符号式
* 行动
* 自然语言
* 相对性
* 非确定性
* 可微分
* 概率
* 量子

## 如何理解元编程？

* 对编程语言进行编程，如 JavaScript 里的 Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改。
  * 例如，如果你为了调查对象`a`和另一个对象`b`之间的关系 —— 它们是被`[[Prototype]]`链接的吗？ —— 而使用`a.isPrototypeOf(b)`，这通常称为自省，就是一种形式的元编程。
  * 宏（JS中还没有） —— 代码在编译时修改自己 —— 是元编程的另一个明显的例子。使用`for..in`循环枚举一个对象的键，或者检查一个对象是否是一个“类构造器”的 *实例*，是另一些常见的元编程任务。
* 元编程关注以下的一点或几点：代码检视自己，代码修改自己，或者代码修改默认的语言行为而使其他代码受影响。
* ES6在JS已经拥有的东西上，增加了几种新的元编程形式/特性：
  * 函数名
  * 推断
  * 元属性
  * 代理
  * ...

## 如何理解面向对象编程？

* 语言：支持部分或绝大部分面向对象特性的语言即可称为基于对象的或面向对象的语言。Simula (1967)被视为第一个具有面向对象特性的语言。早期，完全面向对象的语言主要包括Smalltalk等语言，目前较为流行的语言中有Java、C#、Eiffel等。随着软件工业的发展，比较早的面向过程的语言在近些年的发展中也纷纷吸收了许多面向对象的概念，比如C→C++，C→Objective-C，BASIC→Visual Basic→Visual Basic .NET，Pascal→Object Pascal，Ada→Ada95。“纯粹”的面向对象语言, 因为所有的东西都是由对象所组成，例如：Eiffel, Emerald,[9] JADE, Obix, Ruby, Scala, Smalltalk, Self.
* 特征：
  * 面向对象程序编程的定义是使用“对象”来做设计，但并非所有的编程语言都直接支持“面向对象程序编程”相关技术与结构。对于OOP的准确定义及其本意存在着不少争论。
  * 通常，OOP被理解为一种将程序分解为封装数据及相关操作的模块而进行的编程方式。
  * 有别于其它编程方式，OOP中的与某数据类型相关的一系列操作都被有机地封装到该数据类型当中，而非散放于其外，因而OOP中的数据类型不仅有着状态，还有着相关的行为。
* 分类：基于类、基于原型、多态性
* 三大特性：
  * 封装：隐藏了某一方法的具体运行步骤，取而代之的是通过消息传递机制发送消息给它。
    * 通常来说，成员会依它们的访问权限被分为3种：公有成员、私有成员以及保护成员。
  * 继承：在某种情况下，一个类会有“子类”。子类会继承父类的属性和行为，并且也可包含它们自己的。
  * 多态：由继承而产生的相关的不同的类，其对象对同一消息会做出不同的响应。
    * 多态性的概念可以用在运算符重载
* 关键字：
  * public：public表明该数据成员、成员函数是对所有用户开放的，所有用户都可以直接进行调用
  * private：private表示私有，私有的意思就是除了class自己之外，任何人都不可以直接使用，私有财产神圣不可侵犯嘛，即便是子女，朋友，都不可以使用。
  * protected：protected对于子女、朋友来说，就是public的，可以自由使用，没有任何限制，而对于其他的外部class，protected就变成private。

## 如何理解函数式？

> https://zhuanlan.zhihu.com/p/21714695

* 函数式的特性：
  * 闭包
  * 匿名函数
  * 纯函数：对于相同的输入，永远会得到相同的输出，而且没有任何可观察的**副作用**，也不依赖外部环境的状态。
  * 柯里化：传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。
    * 事实上柯里化是一种“预加载”函数的方法，通过传递较少的参数，得到一个已经记住了这些参数的新函数，某种意义上讲，这是一种对参数的“缓存”，是一种非常高效的编写函数的方法。
  * 函数组合：像搭积木一样把任意数量的纯函数结合到一起。
  * Point Free：不要命名转瞬即逝的中间变量

## 如何理解柯里化？

* 柯里化，currying，是一种模式，其中具有多个参数的函数被分解为多个函数，当被串联调用时，将一次一个地累积所有需要的参数。这种技术帮助编写函数式风格的代码，使代码更易读、紧凑。值得注意的是，对于需要被 curry 的函数，它需要从一个函数开始，然后分解成一系列函数，每个函数都需要一个参数。

* Currying 为实现多参函数提供了一个递归降解的实现思路——把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数，在某些编程语言中（如 Haskell），是通过 Currying 技术支持多参函数这一语言特性的。所以 **Currying 原本是一门编译原理层面的技术，用途是实现多参函数。**
* Curry 的使用场景：
  * 参数复用
  * 延迟执行（bind 和箭头函数也能实现同样的功能）

## 如何理解高阶函数？

* 高阶函数是将一个或多个函数作为参数的函数，它用于数据处理，也可能将函数作为返回结果。
* 高阶函数是为了抽象一些重复执行的操作。如 map、forEach、filter、reduce 等。
  * `.apply()、.bind()、.call()`。.apply() 和 .call() 都用于调用函数，第一个参数将用作函数内 this 的值。然而 .call 接受逗号分隔的参数作为后面的参数，而 .apply 接受一个参数数组作为后面的参数。

## 如何理解 AOP 面向切面编程？

* AOP 即面向切面编程，简单来说就是可以通过编译期或者运行时在不修改源代码的情况下给程序动态增加功能的一种技术。
* AOP 应用场景：日志记录、性能监控、埋点上报、异常处理等等。对于业务无关的附加功能，直接写到业务代码中也可以实现，但这显然不是一个有"洁癖"程序员的作风；而且这些功能往往需求多变，或者会污染业务代码的实现，掺杂在一起难以维护。无侵入的 AOP 才是"附加功能"的最佳选择。

## 什么是字节对齐？

* 各种类型的数据按照一定的规则在空间上排列（数据的存放起始地址 %N== 0）。

* 各个硬件平台对存储空间的处理上有很大的不同。一些平台对某些特定类型的数据只能从某些特定地址开始存取。比如有些架构的 CPU，诸如 SPARC 在访问一个没有进行对齐的变量的时候会发生错误，那么在这种架构上必须编程必须保证字节对齐，**而有些平台对于没有进行对齐的数据进行存取时会产生效率的下降**。

## 如何理解高内聚、低耦合？

## 什么是 ASCII/UNICODE/UTF8/BASE64 等编码格式？

* ASCII：

  * ASCII（American Standard Code for Information Interchange，美国信息交换标准代码）是基于的一套电脑编码系统，主要用于显示现代[英语](https://baike.baidu.com/item/英语/109997)和其他[西欧](https://baike.baidu.com/item/西欧)语言。它是现今最通用的单[字节](https://baike.baidu.com/item/字节)[编码](https://baike.baidu.com/item/编码)系统，并等同于[国际](https://baike.baidu.com/item/国际)标准ISO/IEC 646。—— [百度百科](https://baike.baidu.com/item/ASCII/309296)
  * ASCII 码使用指定的 7 位或 8 位[二进制数](https://baike.baidu.com/item/二进制数)组合来表示 128 或 256 种可能的[字符](https://baike.baidu.com/item/字符)。标准 ASCII 码也叫基础ASCII 码，使用7 位[二进制数](https://baike.baidu.com/item/二进制数)（剩下的1位二进制为0）来表示所有的大写和小写字母，数字 0 到 9、标点符号， 以及在美式英语中使用的特殊[控制字符](https://baike.baidu.com/item/控制字符)。
  * **0～31及127(共33个)是控制字符或通信专用字符（其余为可显示字符），**如控制符：LF（换行）、CR（回车）、FF（换页）、DEL（删除）等。
  * 32～126 (共95个) 是字符 (32是空格），其中 48～57 为 0 到 9 十个阿拉伯数字。
  * 65～90 为 26 个大写英文字母，97～122 号为 26 个小写英文字母，其余为一些标点符号、运算符号等。
  * 后 128 个称为[扩展ASCII](https://baike.baidu.com/item/扩展ASCII)码。许多基于[x86](https://baike.baidu.com/item/x86)的系统都支持使用扩展 ASCII。扩展 ASCII 码允许将每个字符的第 8 位用于确定附加的 128 个特殊符号字符、外来语字母和图形符号。

* unicode

  * Unicode，Universal Multiple-Octet Coded Character Set（[统一码](https://baike.baidu.com/item/统一码)、万国码、单一码）是计算机科学领域里的一项业界标准，包括字符集、编码方案等。Unicode 是为了解决传统的字符编码方案的局限而产生的，它为每种语言中的每个字符设定了统一并且唯一的[二进制](https://baike.baidu.com/item/二进制)编码，以满足跨语言、跨平台进行文本转换、处理的要求。—— [百度百科](https://baike.baidu.com/item/Unicode)

* UTF8

  * UTF-8（8-bit Unicode Transformation Format）是一种针对 Unicode 的可变长度字符编码，又称万国码。由Ken Thompson于1992年创建。现在已经标准化为RFC 3629。
  * UTF-8 就是以 8 位为单元对 UCS 进行编码，而 UTF-8 不使用大尾序和小尾序的形式，每个使用 UTF-8 存储的字符，除了第一个字节外，其余字节的头两个比特都是以 "10" 开始，使文字处理器能够较快地找出每个字符的开始位置。
  * Unicode 和 UTF-8 之间有转换关系表。

* Base64 编码：

  * **Base64**是一种基于64个可打印字符来表示[二进制数据](https://zh.wikipedia.org/wiki/二进制)的表示方法。由于 2^6=64，所以每6个[比特](https://zh.wikipedia.org/wiki/位元)为一个单元，对应某个可打印字符。3个[字节](https://zh.wikipedia.org/wiki/字节)有24个比特，对应于4个Base64单元，即3个字节可表示4个可打印字符。它可用来作为[电子邮件](https://zh.wikipedia.org/wiki/电子邮件)的传输[编码](https://zh.wikipedia.org/wiki/字符编码)。在Base64中的可打印字符包括[字母](https://zh.wikipedia.org/wiki/拉丁字母)`A-Z`、`a-z`、[数字](https://zh.wikipedia.org/wiki/数字)`0-9`，这样共有62个字符，此外两个可打印符号在不同的系统中而不同。Base64常用于在通常处理文本[数据](https://zh.wikipedia.org/wiki/数据)的场合，表示、传输、存储一些二进制数据，包括[MIME](https://zh.wikipedia.org/wiki/MIME)的[电子邮件](https://zh.wikipedia.org/wiki/电子邮件)及[XML](https://zh.wikipedia.org/wiki/XML)的一些复杂数据。 —— [维基百科](https://zh.wikipedia.org/wiki/Base64)
