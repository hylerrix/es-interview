# 移动端 Web 开发

## 移动端 Web 的触摸事件

移动端的触摸事件

触摸事件指的是指的是用户将手指放在屏幕上，在屏幕上滑动到将手指从屏幕移开触发的事件，具体来说，有以下触摸事件的产生：

- touchstart: 当手指触摸屏幕时候触发；
- touchmove: 当手指在屏幕上滑动的时候连续触发；可以调用阻止默认事件
- preventDefault(): 阻止屏幕滚动；
- touchend: 手指离开屏幕时触发；
- touchcancel: 系统停止跟踪触摸时触发；

以上的这些事件都会冒泡，而且都可以取消冒泡。对于以上事件也提供了和鼠标事件中常用的属性：bubble, cancelable, view, clientX, clientY, screenX, screenY, detail, altKey, shiftKey, ctrKey 和 metaKey。

除了上面这些属性外，触摸事件还提供了下面这些属性：

- touches: 跟踪返回 Touch 对象的数组；
- targetTouchs: 特定事件目标的 Touch 对象的数组；
- changeTouchs: 上次触摸以来改变了的 Touch 对象的数组；

每个Touch对象包含一下的属性：

- clientX: 触摸目标在浏览器中的 x 坐标
- clientY: 触摸目标在浏览器中的 y 坐标
- identifier: 标识触摸的唯一 ID。
- pageX: 触摸目标在当前 DOM 中的 x 坐标
- pageY: 触摸目标在当前 DOM 中的 y 坐标
- screenX: 触摸目标在屏幕中的 x 坐标
- screenY: 触摸目标在屏幕中的 y 坐标
- target: 触摸的 DOM 节点目标。