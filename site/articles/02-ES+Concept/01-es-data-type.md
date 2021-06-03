# ES 数据类型

## 基础数据类型都有哪些？

* undefiend 没有定义数据类型
* number 数值数据类型，例如 10 或者 1 或者 5.5
  * NaN 是一种特殊的 number
* string 字符串数据类型用来描述文本，例如 "你的姓名"
  * string 的内置属性和方法：
  * 构造函数 String()
* boolean 布尔类型 true | false ，不是正就是反
  * boolean 的内置属性和方法：
  * 构造函数
* object 对象类型，复杂的一组描述信息的集合
  * null 是一种特殊的 object
  * object 的内置属性和方法：
  * 构造函数
  * Object.prototype
* function 函数类型
  * 函数的内置属性和方法：
  * 构造函数
  * Function.prototype

## 如何理解基础类型/引用类型？

## String 有哪些操作？

1. **属性**
   1. [`String.length`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length)
2. **方法**
   1. [`String.fromCharCode()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
   2. [`String.fromCodePoint()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)
   3. [`String.prototype.anchor()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/anchor)
   4. [`String.prototype.big()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/big)
   5. [`String.prototype.blink()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/blink)
   6. [`String.prototype.bold()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/bold)
   7. [`String.prototype.charAt()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
   8. [`String.prototype.charCodeAt()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
   9. [`String.prototype.codePointAt()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
   10. [`String.prototype.concat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/concat)
   11. [`String.prototype.endsWith()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
   12. [`String.prototype.fixed()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fixed)
   13. [`String.prototype.fontcolor()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fontcolor)
   14. [`String.prototype.fontsize()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fontsize)
   15. [`String.prototype.includes()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
   16. [`String.prototype.indexOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
   17. [`String.prototype.italics()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/italics)
   18. [`String.prototype.lastIndexOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
   19. [`String.prototype.link()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/link)
   20. [`String.prototype.localeCompare()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
   21. [`String.prototype.match()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)
   22. [`String.prototype.matchAll()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)
   23. [`String.prototype.normalize()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
   24. [`String.prototype.padEnd()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)
   25. [`String.prototype.padStart()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
   26. [`String.prototype.quote()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/quote)
   27. [`String.prototype.repeat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
   28. [`String.prototype.replace()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
   29. [`String.prototype.search()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search)
   30. [`String.prototype.slice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
   31. [`String.prototype.small()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/small)
   32. [`String.prototype.split()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)
   33. [`String.prototype.startsWith()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
   34. [`String.prototype.strike()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/strike)
   35. [`String.prototype.sub()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/sub)
   36. [`String.prototype.substr()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
   37. [`String.prototype.substring()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
   38. [`String.prototype.sup()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/sup)
   39. [`String.prototype.toLocaleLowerCase()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase)
   40. [`String.prototype.toLocaleUpperCase()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase)
   41. [`String.prototype.toLowerCase()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
   42. [`String.prototype.toSource()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toSource)
   43. [`String.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toString)
   44. [`String.prototype.toUpperCase()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) [[我来译!\]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase$translate)
   45. [`String.prototype.trim()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
   46. [`String.prototype.trimRight()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/TrimRight)
   47. [`String.prototype.trimStart()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/TrimLeft)
   48. [`String.prototype.valueOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf) [[我来译!\]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf$translate)
   49. [`String.prototype[@@iterator]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)
   50. [`String.raw()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/raw)

## Boolean 有哪些操作？

## Undifined/NULL 有哪些操作？

## Function 有哪些操作？

1. **[`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)**
2. **属性**
   1. [`Function.arguments`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments)
   2. [`Function.caller`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/caller)
   3. [`Function.displayName`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/displayName)
   4. [`Function.length`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
   5. [`Function.name`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
3. **方法**
   1. [`Function.prototype.apply()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
   2. [`Function.prototype.bind()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
   3. [`Function.prototype.call()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
   4. [`Function.prototype.toSource()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/toSource)
   5. [`Function.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)

## Object 有哪些操作？

1. **[`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)**
2. **属性**
   1. [`Object.prototype.__proto__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
   2. [`Object.prototype.constructor`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
3. **方法**
   1. [`Object.assign()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
   2. [`Object.create()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
   3. [`Object.defineProperties()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)
   4. [`Object.defineProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
   5. [`Object.entries()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
   6. [`Object.freeze()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
   7. [`Object.fromEntries()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
   8. [`Object.getOwnPropertyDescriptor()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
   9. [`Object.getOwnPropertyDescriptors()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)
   10. [`Object.getOwnPropertyNames()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
   11. [`Object.getOwnPropertySymbols()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
   12. [`Object.getPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf)
   13. [`Object.is()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
   14. [`Object.isExtensible()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)
   15. [`Object.isFrozen()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)
   16. [`Object.isSealed()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)
   17. [`Object.keys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
   18. [`Object.preventExtensions()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)
   19. [`Object.prototype.__defineGetter__()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
   20. [`Object.prototype.__defineSetter__()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
   21. [`Object.prototype.__lookupGetter__()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
   22. [`Object.prototype.__lookupSetter__()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
   23. [`Object.prototype.hasOwnProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
   24. [`Object.prototype.isPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf)
   25. [`Object.prototype.propertyIsEnumerable()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)
   26. [`Object.prototype.toLocaleString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString)
   27. [`Object.prototype.toSource()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource)
   28. [`Object.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
   29. [`Object.prototype.valueOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)
   30. [`Object.seal()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)
   31. [`Object.setPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)
   32. [`Object.values()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

## Number 有哪些操作？

* JS 的 Number 类型遵循的是 IEEE 754 标准，使用的是 64 位固定⻓度来表示。

* IEEE 754 浮点数由三个域组成，分别为 sign bit (符号位)、exponent bias (指数偏移值) 和 fraction (分数值)。64 位中，sign bit 占 1 位，exponent bias 占 11 位，fraction 占 52 位。
* 以 0.1 转换为 IEEE 754 标准表示为例解释一下如何求 exponent bias 和 fraction。转换过程主要经历 3 个过程：
  * 将 0.1 转换为二进制表示。
  * 将转换后的二进制通过科学计数法表示。
  * 将通过科学计数法表示的二进制转换为 IEEE 754 标准表示。

## Array 有哪些操作？

* Array 静态方法：`Array.from(); Array.isArray(); Array.of();`。
* Array 原型方法：
  * `.concat(); .copyWithin(); .entries(); .every();`。
  * `.fill(); .filter(); .find(); .findIndex(); .flat(); .flatMap(); .forEach();`。
  * `.includes(); .indexOf(); .join(); .keys(); .lastIndexOf(); .map(); .pop(); .push(); `。
  * `.reduce(); .reduceRight(); .reverse(); .shift(); .slice(); .some(); .sort(); .splice(); `。
  * `.toLocaleString(); .toSource(); .toString(); .unshift(); .values();`。
  * `Array.prototype[@@iterator](); get Array[@@species]`。
* Array 常见考题：
  * 数组拷贝。
  * 数组展开。
  * 用 reduce 实现 map 的功能
  * 类数组转化成数组的方法
  * 实现数组 flatten
* Object 常见考题：
  * 深拷贝、浅拷贝
  * 如何判断一个对象是不是空对象？
* 类数组和数组的互相转换？
* Number & BigInt 常见考题：
  * 大数操作
  * 0.1+0.2 == 0.3？原因？
* 链式调用：add(2, 5)，add(2)(5)，add(1)(1)(5) 的结果都为 7

## BigInt 有哪些操作？

* JavaScript中Number.MAX_SAFE_INTEGER表示最大安全数字,计算结果是9007199254740991，即在这个数范围内不会出现精度丢失(小数除外)。 但是一旦超过这个范围，js就会出现计算不准确的情况，这在大数计算的时候不得不依靠一些第三方库进行解决，因此官方提出了BigInt来解决此问题。

### 什么是关联数组？

> 其它多数语言里，数组分为索引数组和关联数组，索引数组又分为一维数组、二维数组和多维数组。
>
> 引用：“JavaScript 里面没有关联数组和索引数组这两种不同的区分，一切对象都是键值对，数组也是对象，数组也可以看作是键值对。”
>
> 自我感悟，存疑：JavaScript 还是有索引数组和关联数组的微小差异。索引数组和 length 属性直接挂钩，关联数组其实访问的是数组上的属性及其值，length 一般都是 0(没有真正的数据内容)。

在计算机科学中，关联数组（英语：Associative Array），又称映射（Map）、字典（Dictionary）是一个抽象的数据结构，它包含着类似于（键，值）的有序对。一个关联数组中的有序对可以重复（如C中的 multimap）也可以不重复（如 C 中的 map）。这种数据结构包含以下几种常见的操作：

- 向关联数组添加配对
- 从关联数组内删除配对
- 修改关联数组内的配对
- 根据已知的键寻找配对

> 字典问题是设计一种能够具备关联数组特性的数据结构。解决字典问题的常用方法，是利用散列表，但有些情况下，也可以直接使用二叉查找树或其他结构。
>
> 许多程序设计语言内置基本的数据类型，提供对关联数组的支持。而内容定址存储器则是硬件层面上实现对关联数组的支持。

属性值和键值的异同

- 属性和键值不一样，给数组新增一个属性，其依然为数组，length 不变，新增的被读取时将是属性值，而非键值。

```javascript
var a = [1,2,3]; // 定义一个数组
console.log(a);
console.log(a.length); // 结果为3

a["name"] = "xiaoming"; // 我们再给它赋值，这是给 a 数组增加了一个属性叫 name，而不是在数组里添加数据。
console.log(a); // [1, 2, 3, aaa: 1]，a 依然是数组
console.log(a.length); // 结果还是为 3

a.push(4);
console.log(a) // [1, 2, 3, 4, aaa: 1]，a 依然是数组
console.log(a.length); // 结果为4
```

- 以下两种写法效果是一样的，但 j2 符合 JSON 风格，当 JSON 对象作为 Map(映射、关联数组) 时使用。
  - JSON 对象和 JSON Map 在运行时看起来是一样的；这个特性与 API 设计相关。当 JSON 对象被当作 Map 使用时，API 文件应当做出说明。
  - Map 的键名不一定要遵循属性名称的命名准则。键名可以包含任意的 Unicode 字符。客户端可使用 Map 熟悉的方括号来访问这些属性。

```javascript
var j1 = {
    name: 'j1',
    age: 18,
    fun: function () {
        console.log(1)
    }
}

var j2 = {
    "name": "j2",
    "age": 18,
    "fun": function () {
        console.log(1)
    }
}
```

遍历关联数组

```javascript
for (var key in array){  
    console.log("键:",key);  
    console.log("值:",array[key]); 
}
```

关联数组和索引数组的遍历效率问题。

遍历赋值以下数组时，第一次耗费时间差不多，浏览器默认优化之后，arr2 作为 Array 而非 Object 存取速度更快。

```javascript
var arr = new Array(50000000);
var arr2 = {};
```

### 什么是 JSON？

* JSON 对象包含两个方法：

  * 用于解析 JavaScript Object Notation  (JSON) 的 parse() 方法
  * 以及将对象/值转换为 JSON 字符串的 stringify() 方法。
  * 除了这两个方法, JSON 这个对象本身并没有其他作用，也不能被调用或者作为构造函数调用。
  * 把数据结构或者对象转换成某种格式的过程称为「序列化」
  * 而将序列化过程的结果反向转换回某种数据结构或对象的过程称为「反序列化」。

* JSON 的本质

  * JSON 指的是 JavaScript 对象表示法（JavaScript Object Notation）
  * JSON 是轻量级的文本数据交换格式
  * JSON 独立于语言，JSON 解析器和 JSON 库支持许多不同的编程语言。
  * JSON 具有自我描述性，更易理解

* JSON 风格指南：

  * 所有的属性名必须在双引号内。
  * JSON对象中不包含注释。
  * JSON中的数据元素应以扁平化方式呈现。不能为了方便而将数据任意分组。
  * 选择有意义的属性名。

  - - 属性名应该是具有定义语义的有意义的名称。
    - 属性名必须是驼峰式的，ASCII 码字符串。
    - 首字符必须是字母，下划线(_)或美元符号($)。
    - 随后的其他字符可以是字母，数字，下划线(_)或美元符号($)。
    - 应该避免使用 Javascript 中的保留关键字

  - 在 JSON Map 中键名可以使用任意 Unicode 字符。

### JS 常见类型 与 JSON 的区别？

| JavaScript类型 | JSON 的不同点                                                |
| -------------- | ------------------------------------------------------------ |
| 对象和数组     | 属性名称必须是双引号括起来的字符串；最后一个属性后不能有逗号。 |
| 数值           | 禁止出现前导零（ JSON.stringify 方法自动忽略前导零，而在 JSON.parse 方法中将会抛出 SyntaxError）；如果有小数点, 则后面至少跟着一位数字。 |
| 字符串         | 只有有限的一些字符可能会被转义；禁止某些控制字符； Unicode 行分隔符 （U+2028）和段分隔符 （U+2029）被允许 ; 字符串必须用双引号括起来。请参考下面的示例，可以看到 JSON.parse() 能够正常解析，但将其当作JavaScript解析时会抛出 SyntaxError 错误： |

```
let code = '"\u2028\u2029"';
JSON.parse(code);  // 正常
eval(code);  // 错误
```

* JSON.parse()：解析 JSON 字符串并返回对应的值，可以额外传入一个转换函数，用来将生成的值和其属性, 在返回之前进行某些修改。
* JSON.stringify()：返回与指定值对应的JSON字符串，可以通过额外的参数, 控制仅包含某些属性, 或者以自定义方法来替换某些 key 对应的属性值。
* JSON Polyfill：JSON 对象可能不被老版本的浏览器支持。可以将下面的代码放到JS脚本最开始的位置，这样就可以在没有原生支持 JSON 对象的浏览器（如IE6）中使用 JSON 对象。
