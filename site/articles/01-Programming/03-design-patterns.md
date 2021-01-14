# 设计模式

## 面向对象五个基本原则？

* 单一职责原则：一个类，最好只做一件事，只有一个引起它的变化。单一职责原则可以看做是低耦合、高内聚在面向原则上的引申，以提高内聚性来减少引起变化的原因。
  * 提高类的可维护性和可读写性
  * 提高系统的可维护性
  * 降低变更的风险
  * 如何遵守单一职责原则
* 开放封闭原则(OCP)：软件的功能应该是可扩展的，而尽可能的不修改。因为修改程序有可能会对原来的程序造成错误。不能修改，但是可以添加功能，尽可能的在外边添加新的类，如上面计算器的项目一样。对于要添加的功能就添加一个类，然后只修改下面的switch就可以了。
* Liskov替换原则(LSP)：子类必须能够替换基类。这一思想体现为对继承机制的约束规范，只有子类能够替换基类时，才能保证运行期内识别子类，这是保证继承复用的基础。如上例JisuanQi jsp=new Add(n1,n2);即：子类可以代替换父类，而父类不可以替换子类。
* 依赖倒置原则:依赖于抽象，具体来说就是，高层模块不依赖底层模块，二者都通依赖于抽象。抽象不依赖于具体，而具体依赖于抽象。模块间的依赖是通过抽象发生，实现类之间不发生直接的依赖关系，其依赖关系是通过接口或抽象类产生的；接口或抽象类不依赖于实现类；实现类依赖于接口和抽象类。采用依赖倒置原则可以减少类间的耦合性，提高系统的稳定性，减少并发引起的风险，提高代码的可读性和可维护性。
* 接口隔离原则：使用多个小的专门的接口，而不要使用一个大的总接口。就是每一个接口都执行一个专门的功能，用什么调什么。这样可以提高代码的灵活性，还可以降低类间的耦合性。提高稳定性。

## 什么是单例模式？

* 单例模式也称为单体模式，规定一个类只有一个实例，并且提供可全局访问点。
* 单一职责原则

## 什么是观察者模式和发布订阅模式？

> **观察者模式**是[软件设计模式](https://zh.wikipedia.org/wiki/軟件設計模式)的一种。在此种模式中，一个目标对象管理所有相依于它的观察者对象，并且在它本身的状态改变时主动发出通知。这通常透过呼叫各观察者所提供的方法来实现。此种模式通常被用来实时事件处理系统。 —— 维基百科
>
> 在[软件架构](https://zh.wikipedia.org/wiki/软件架构)中，**发布-订阅**是一种[消息](https://zh.wikipedia.org/wiki/消息)[范式](https://zh.wikipedia.org/wiki/范式)，消息的发送者（称为发布者）不会将消息直接发送给特定的接收者（称为订阅者）。而是将发布的消息分为不同的类别，无需了解哪些订阅者（如果有的话）可能存在。同样的，订阅者可以表达对一个或多个类别的兴趣，只接收感兴趣的消息，无需了解哪些发布者（如果有的话）存在。—— [维基百科](https://zh.wikipedia.org/wiki/发布/订阅)

* 观察者模式，定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。
* 发布/订阅模式与观察者模式非常类似，它们最大的区别是：发布者和订阅者不知道对方的存在。它们之间需要一个第三方组件，叫做信息中介，它将订阅者和发布者串联起来，它过滤和分配所有输入的消息。换句话说，发布/订阅模式用来处理不同系统组件的信息交流，即使这些组件不知道对方的存在。
* 信息中介是如何过滤消息
  * 在**基于主题**的系统中，消息被发布到主题或命名通道上。订阅者将收到其订阅的主题上的所有消息，并且所有订阅同一主题的订阅者将接收到同样的消息。发布者负责定义订阅者所订阅的消息类别。
  * 在**基于内容**的系统中，订阅者定义其感兴趣的消息的条件，只有当消息的属性或内容满足订阅者定义的条件时，消息才会被投递到该订阅者。订阅者需要负责对消息进行分类。
* 观察者模式与发布/订阅模式之间的区别：
  - 在观察者模式中，观察者知道 Subject 的存在，Subject 一直保持对观察者进行记录。然而，在发布/订阅模式中，发布者和订阅者不知道对方的存在，它们只有通过信息中介进行通信。
  - 在发布订阅模式中，组件是松散耦合的，正好和观察者模式相反。
  - 观察者模式大多数时候是同步的，比如当事件触发，Subject 就会去调用观察者的方法。而发布/订阅模式大多数时候是异步的（使用消息队列）。
