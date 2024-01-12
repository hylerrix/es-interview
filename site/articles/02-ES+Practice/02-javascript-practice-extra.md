# 数值数组字符串正则

## 数值

### 进制的转换

```javascript
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    isEmpty() {
        return this.count === 0;
    }
    size() {
        return this.count;
    }
    clear() {
        this.items = {};
        this.count = 0;
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

function baseConverter(decNumber, base) {
    // 创建 Stack 类
    const remStack = new Stack();
    // 定义一个进制位数，这里设置了 36 位进制，可自定义位数
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decNumber;
    let rem;
    let baseString = '';
    if (!(base >= 2 && base <= 36)) {
        return '';
    }
    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }
    while (!remStack.isEmpty()) {
        // 对栈中的数字做转化
        baseString += digits[remStack.pop()];
    }
    return baseString;
}

console.log(baseConverter(1314, 2));    //10100100010
console.log(baseConverter(1314, 8));    //2442
console.log(baseConverter(1314, 16));    //522
console.log(baseConverter(1314, 20));    //35E
console.log(baseConverter(1314, 30));    //1DO
console.log(baseConverter(1314, 35));    //12J
```

### 大整数相加

```jsx
Number.MAX_VALUE // 1.7976931348623157e+308
Number.MAX_SAFE_INTEGER // 9007199254740991
Number.MIN_VALUE // 5e-324
Number.MIN_SAFE_INTEGER // -9007199254740991
```

```javascript
// 首先我们用字符串的形势来保存大数，就保证了其在数学表示上不会发生变化
// 初始化res, temp变量来保存中间计算的结果，在将两个字符串split为数组，以便我们进行每一位的运算
// 循环的第一次就是进行 "个位" 的运算，将二者最末尾的两个数相加，由于每一位数字是0 - 9，所以需要进行进位，在进过取余数操作后，将结果保留在个位。
// 判断 temp 是否大于 10，若是则将 temp 赋值为 true，等等，为什么要赋值成布尔值，不要着急，魔法即将发生。
// 在两个大数中的一个还有数字没有参与运算，或者前一次运算发生进位后，进行下一次循环。
// 接着除了对新的两个数字相加还要加上 temp，若上次发生了进位，则此时 temp 为 true，Js因为存在隐式转换，所以 true 转换为 1，我们借用 Js 的类型转换，完成了逻辑上的逢10进1操作。Amazing
// 接下来就是重复上述的操作，直到计算结束。

function sumBigNumber(a, b) {
  var res = '',
    temp = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || temp) {
    temp += ~~a.pop() + ~~b.pop();
    res = (temp % 10) + res;
    temp = temp > 9;
  }
  return res.replace(/^0+/, '');
}
```



```javascript
function add(a, b) {
  if (a.length < b.length) {
    a = '0' + a;
  }
  if (b.length < a.length) {
    b = '0' + b;
  }

  // 标志位 满十进一
  var addOne = 0;
  var res = [];
  for (var i = a.length; i >= 0; i--) {
    //像小学加法那样，从最后一位开始相加
    var c1 = a.charAt(i) - 0;
    var c2 = b.charAt(i) - 0;
    var sum = c1 + c2 + addOne;
    //满十进一
    if (sum > 9) {
      addOne = 1;
      res.unshift(sum - 10);
    } else {
      addOne = 0;
      res.unshift(sum);
    }
  }
  // 如果是1，就进一
  if (addOne) {
    res.unshift(addOne);
  }
  // 假如这种情况，'01'+'02' = '03'
  if (res[0] === 0) {
    res.splice(0, 1);
  }
  //数组变字符串
  return res.join('');
}

var rrr = add('30000000000000000000000000', '91111111111111111111111111');
console.log( rrr);
```



## 数组

> https://juejin.im/post/6844903569091461133

### 数组去重

```javascript
// forEach
let arr = ['1', '2', '3', '1', 'a', 'b', 'b']
const unique = arr => {
    let obj = {}
    arr.forEach(value => {
        obj[value] = 0
    })
    return Object.keys(obj)
}
console.log(unique(arr))  // ['1','2','3','a','b']
```

```javascript
// filter
let arr = ['1', '2', '3', '1', 'a', 'b', 'b']
const unique = arr => {
    return arr.filter((ele, index, array) => {
        return index === array.indexOf(ele)
    })
}
console.log(unique(arr))  // ['1','2','3','a','b']
```

```javascript
// set
let arr = ['1', '2', '3', '1', 'a', 'b', 'b']
const unique = arr => {
    return [...new Set(arr)]
}
console.log(unique(arr))  // ['1','2','3','a','b']
```

```javascript
// reduce
let arr = ['1', '2', '3', '1', 'a', 'b', 'b']
const unique = arr.reduce((map, item) => {
    map[item] = 0
    return map
}, {})
console.log(Object.keys(unique))  // ['1','2','3','a','b']
```


### 实现数组扁平化操作

```javascript
Array.prototype.myFlat = function(num = 1) {
  if (Array.isArray(this)) {
    let arr = [];
    if (!Number(num) || Number(num) < 0) {
      return this;
    }
    this.forEach(item => {
      if(Array.isArray(item)){
        let count = num
        arr = arr.concat(item.myFlat(--count))
      } else {
        arr.push(item)
      }  
    });
    return arr;
  } else {
    throw tihs + ".flat is not a function";
  }
};
```


```javascript
// 递归
const flatten = (arr) => {
  if (!Array.isArray(arr)) { return [arr] }
  let res = []
  arr.forEach(item => { res.push(...flatten(item)) })
  return res
}

const arr = [1, [2, [3, 4, [5]]]]
console.log(flatten(arr))
```

```javascript
// 迭代
function flatten2(arr) {
  const stack = [...arr];
  const res = [];
  while (stack.length) {
    // 从栈里取出
    const next = stack.pop();
    if (Array.isArray(next)) {
      // 把next扁平化，然后放入stack中
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // reverse to restore input order
  return res.reverse();
}

console.log(flatten2(arr));
```

```javascript
// generator 异步迭代
function* flatten3(arr) {
    let length = arr.length;
    for (let i=0; i<length; i++) {
        let item = arr[i];
        if (Array.isArray(item)) {
    	    yield* flatten3(item);
        } else {
    	    yield item;
        }
    }
} 

let res = [];
for (let f of flatten3 (arr)) {
    res.push(f);
}
console.log(res);
```

### 动手实现 Array.isArray

```javascript
Array.myIsArray = function(o) { 
  return Object.prototype.toString.call(Object(o)) === '[object Array]'; 
};
```

### 动手实现 Array.prototype.reduce

```javascript
Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue ? initialValue : this[0];
  for (let i = initialValue ? 0 : 1; i < this.length; i++) {
    let _this = this;
    accumulator = callback(accumulator, this[i], i, _this);
  }
  return accumulator;
};

// 使用
let arr = [1, 2, 3, 4];
let sum = arr.myReduce((acc, val) => {
  acc += val;
  return acc;
}, 5);

console.log(sum); // 15
```

### 找到所有和为 N 的连续正数序列

```javascript
/*
 * 输入一个正数N，输出所有和为N的连续正数序列
 * 例如：输入15
 * 结果：[[1,2,3,4,5],[4,5,6],[7,8]]
 */
function createArr(n,len){
    let arr=new Array(len).fill(null),
        temp=[];
    arr[0]=n;
    arr=arr.map((item,index)=>{
        if(item===null){
            item=temp[index-1]+1;
        }
        temp.push(item);
        return item;
    });
    return arr;
}
function fn(count){
    let result=[];
    //=>求出中间值
    let middle=Math.ceil(count/2);
    //从1开始累加
    for(let i=1;i<=middle;i++){
        //控制累加多少次
        for(let j=2;;j++){
            //求出累加多次的和
            let total=(i+(i+j-1))*(j/2);
            if(total>count){
                break;
            }else if(total===count){
                result.push(createArr(i,j));
                break;
            }
        }
    }
    return result;
}
```

### 数组中找出和为N的两个整数

```javascript
/* 
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标
 * nums = [1,6,4,8,7];
 * target = 9
 * => nums[0] + nums[3] = 9
 * => [0,3]
 */

/*方案1：暴力法（遍历每个元素 x，并查找是否存在一个值与 target - x 相等的目标元素）*/
function func(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        let item = nums[i],
            diff = target - item;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === diff) {
                return [i, j];
            }
        }
    }
}

/*方案2：对象键值对*/
function func(nums, target) {
    let temp = {};
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i],
            diff = target - item;
        if (temp[diff] !== undefined) {
            return [temp[diff], i];
        }
        temp[item] = i;
    }
}
```

### 具有最大和的连续子数组

```javascript
function maxSubArray(nums) {
    let ans = nums[0],
        sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i];
        if (sum > 0) {
            sum += item;
        } else {
            sum = item;
        }
        ans = Math.max(ans, sum);
    }
    return ans;
}
console.log(maxSubArray([-2, 2, -1, 1, -3]));
```

### 合并两个有序数组

```javascript
// O((n+m)*log(n+m))
function merge(nums1, nums2) {
    return nums1.concat(nums2).sort((a,b)=>a-b);
}

// O(m+n)
function merge(nums1, nums2) {
    let len1 = nums1.length - 1;
    let len2 = nums2.length - 1;
    let len = nums1.length + nums2.length - 1;
    while (len1 >= 0 && len2 >= 0) {
        let val1 = nums1[len1],
            val2 = nums2[len2];
        if (val1 > val2) {
            nums1[len] = val1;
            len1--;
        } else {
            nums1[len] = val2;
            len2--;
        }
        len--;
    }
    return nums1;
};
console.log(merge([1, 5, 8, 16, 26], [4, 7, 9, 17]));
```

### 数组中的最大差值

```javascript
let arr = [23, 4, 5, 2, 4, 5, 6, 6, 71, -3];
const difference = arr => {
    let min = arr[0],
        max = 0;
    arr.forEach(value => {
        if (value < min) min = value
        if (value > max) max = value
    })
    return max - min ;
}
console.log(difference(arr))  // 74
```

### 斐波那契数列

```javascript
/*
 * 实现一个fibonacci [ˌfɪbəˈnɑːtʃi] 函数，实现以下的功能：
 * 斐波那契数列为：[1,1,2,3,5,8,13,21,…]
 * fibonacci(0) -> 1
 * fibonacci(4) -> 5
 */
function fibonacci(count) {
    if (count <= 1) return 1;
    let arr = [1, 1],
        n = count + 1 - 2; //=>要创建的数量
    while (n > 0) {
        let cur = arr[arr.length - 2],
            next = arr[arr.length - 1];
        arr.push(cur + next);
        n--;
    }
    return arr[arr.length - 1];
}
```

## 遍历 & 克隆

### 如何遍历对象和数组

* 对象遍历
  - for in 循环：`for (var property in obj) { console.log(property); }`。但这会遍历到它的继承属性，在使用前需要加入 `obj.hasOwnProperty(property)` 检查。
  - Object.keys()：`Object.keys(obj).forEach(function (property) { ... })`。
  - Object.getOwnPropertyNames()：`Object.getOwnPropertyNames(obj).forEach(function (property) { ... })`。Object.getOwnPropertyNames() 方法返回一个由指定对象的所有自身属性的属性名(包括不可枚举属性但不包括 Symbol 值作为名称的属性)组成的数组。
* 数组遍历
  - for loop：`for (var i = 0; i < arr.length; i++)`。这里的常见错误是 var 是函数作用域而不是块级作用域。ES2015 引入了块级作用域 let，建议使用。
  - forEach：`arr.forEach(function (el, index) { ... })`。这个语句结构有时会更精简，不必使用 index。还有 every 和 some 方法可以提前终止遍历。

### 动手实现数组克隆

```javascript
let array1 = [1, 'a', true, null, undefined];
let c1 = array1.slice();
let cc1 = array1.concat();
let fc1 = Array.from(array1);
Array.prototype.push.apply([], array1);
let mc1 = array1.map((item) => item; });
// 变相的实现深拷贝，数组中的项如果是undefined，那么转换后将变为null
// 如果数组的项为对象，那么对象之间不可相互引用。会造成循环引用，无法JSON序列化。
let jsonc = JSON.parse(JSON.stringify(array1));
let fc1 = [...array1];
```

- 数组浅拷贝

```javascript
var a = [1, 1],
    b = a;
console.log(a === b) // true
```

- 数组深拷贝

```javascript
function cloneObj(obj) {
    var tempObj = {};
    
    if (obj instanceof Array) {
        tempObj = [];
    }
    
    for (var prop in obj) {
        if (typeof prop === 'Object') {
            cloneObj(prop);
        }
        
        tempObj[prop] = obj[prop];
    }
    
    return tempObj;
}

var myCountry = {
    name: 'China',
    birth: 1949
}

var country = cloneObj(myCountry);

console.log(country === myCountry); // false
```

### 动手实现对象克隆

```javascript
function clone(obj){
    var o;
    if(typeof obj == "object"){
        if(obj === null){
            o = null;
        }else{
            if(obj instanceof Array){
                o = [];
                for(var i = 0, len = obj.length; i < len; i++){
                    o.push(clone(obj[i]));
                }
            }else{
                o = {};
                for(var k in obj){
                    o[k] = clone(obj[k]);
                }
            }
        }
    }else{
        o = obj;
    }
    return o;
}
```

```javascript
function clone(obj){
    var o, obj;
    if (obj.constructor == Object){
        o = new obj.constructor();
    }else{
        o = new obj.constructor(obj.valueOf());
    }
    for(var key in obj){
        if ( o[key] != obj[key] ){
            if ( typeof(obj[key]) == 'object' ){
                o[key] = clone(obj[key]);
            }else{
                o[key] = obj[key];
            }
        }
    }
    o.toString = obj.toString;
    o.valueOf = obj.valueOf;
    return o;
}
```

```javascript
function clone(obj){
    function Fn(){}
    Fn.prototype = obj;
    var o = new Fn();
    for(var a in o){
        if(typeof o[a] == "object") {
            o[a] = clone(o[a]);
        }
    }
    return o;
}
```

### 动手实现浅拷贝与深拷贝

```javascript
// 同时考虑对象和数组，考虑循环引用
function clone(target, map = new WeakMap()) {
  if(typeof target === 'object'){
    let cloneTarget = Array.isArray(target) ? [] : {};
    if(map.get(target)) {
      return target;
    }
    map.set(target, cloneTarget);
    for(const key in target) {
      cloneTarget[key] = clone(target[key], map)
    }
    return cloneTarget;
  } else {
    return target;
  }
}
```

```javascript
/**
 * deep clone
 * @param {[type]} parent object 需要进行克隆的对象
 * @return {[type]} 深克隆后的对象
 */
const clone = parent => {
  // 判断类型
  const isType = (obj, type) => {
    if (typeof obj !== "Object") return false
    const typeString = Object.prototype.toString.call(obj)
    let flag
    switch (type) {
      case "Array":
        flag = typeString === "[object Array]"
        break
      case "Date":
        flag = typeString === "[Object Date]"
      case "RegExp":
        flag = typeSting === "[object RegExp]"
        break
      default:
        flag = false
    }
    return flag
  }
  
  // 处理正则
  const getRegExp = re => {
    var flags = ""
    if (re.global) flags += "g"
    if (re.ignoreCase) flags += "i"
    if (re.multiline) flags += "m"
    return flags
  }
  
  // 维护两个储存循环引用的数组
  const parents = []
  const children = []
  
  const _clone = parent => {
    if (pareng === null) return null
    if (typeof parent !== "object") return parent
    let child, proto
    if (isType(parent, "Array")) {
      // 对数组做特殊处理
      child = new RegExp(parent.source, getRegExp(parent))
      if (parent.lastIndex) child.lastIndex = parent.lastIndex
    } else if (isType(parent, "Date")) {
      // 对 Date 对象做特殊处理
      child = new Date(parent.getItem())
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent)
      // 利用 Object.create 切断原型链
      child = Object.create(proto)
    }
    //处理循环引用
    const index = parents.indexOf(parent)
    if (index != -1) {
      // 如果父数组存在本对象，说明之前已经被引用过，直接返回此对象
      return children[index]
    }
    parents.push(parent)
    children.push(child)
    for (let i in parent) {
      // 递归
      child[i] = _clone(parent[i])
    }
    return child
  }

  return _clone(parent)
}
```

## 字符串与正则

### 实现 trim()

```javascript
String.prototype.trim = function() {
  return this.replace(/^\s*((?:[\S\s]*\S)?)\s*$/, '$1');
}
```

```javascript
String.prototype.trim = function() {
  var str = this,
  str = str.replace(/^\s\s*/, ''),
  ws = /\s/,
  i = str.length;
  while (ws.test(str.charAt(--i)));
  return str.slice(0, i + 1);
}
```

### 翻转字符串

```javascript
let str ="Hello Dog";
const reverseString = str =>{
    return [...str].reverse().join("");
}
console.log(reverseString(str))   // goD olleH
```

### 解析 URL Params 为对象？

```javascript
let url = "http://www.domain.com/?user=anoymous&id=123&id=456&city=test&enabled"
parseParam(url)

function parseParam(url) {
  const paramsStr = /.\?(.+)$/.exec(url)[1] // 将问号后面的字符串取出来
  const paramsArr = paramsStr.split('&') // 将字符串以 & 分割后存到数组中
  let paramsObj = {}
  // 将 params 存到对象中
  paramsArr.forEach(param => {
    if (/=/.test(param)) { // 处理有 value 的参数
      let [key, val] = param.split('=') // 分割 key 和 value
      val = decodeURIComponent(val) // 解码
      val = /^\d+$/.test(val) ? parseFloat(val) : val // 判断是否为数字
      if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
        paramsObj[key] = [].concat(paramsObj[key], val)
      } else { // 如果对象没有这个 key，创建 key 并设置值
        paramsObj[key] = val
      }
    } else {
      paramsObj[param] = true
    }
  })
  return paramsObj
}
```

### 字符串转换为驼峰法？

```javascript
var s1 = 'get-element-by-id'

var f = function (s) {
  return s.replace(/-\w/g, function (x) {
    return x.slice(1).toUpperCase()
  })
}
```

### 基本遍历查找子字符串出现的位置

请使用最基本的遍历来实现判断字符串 a 是否被包含在字符串 b 中，并返回第一次出现的位置(找不到返回 -1)。

```javascript
a='34';b='1234567'; // 返回 2
a='35';b='1234567'; // 返回 -1
a='355';b='12354355'; // 返回 5 isContain(a,b);

function isContain(a, b) {
  for (let i in b) {
    if (a[0] === b[i]) {
      let tmp = true
      for (let j in a) {
        if (a[j] !== b[~~i + ~~j]) {
          tmp = false
        }
      }
      if (tmp) {
        return i
      }
    }
  }
  return -1
}
```

### 统计字符串中出现最多的字符

```javascript
let str = 'asdfghjklaqwertyuiopiaia';
const strChar = str => {
    let string = [...str],
        maxValue = '',
        obj = {},
        max = 0;
    string.forEach(value => {
        obj[value] = obj[value] == undefined ? 1 : obj[value] + 1
        if (obj[value] > max) {
            max = obj[value]
            maxValue = value
        }
    })
return maxValue;
}
console.log(strChar(str))    // a
```

### 正则查找字符串中出现最多的字符和个数

```javascript
// 例: abbcccddddd -> 字符最多的是d，出现了5次
let str = 'abcabcabcbbccccc'
let num = 0
let char = ''
// 使其按照一定的次序排列
str = str.split('').sort().join('')
// 'aaabbbbbcccccccc'
// 定义正则表达式
let re = /{\w}\1+/g
str.replace(re, ($0, $1) => {
  if (num < $0.length) {
    num = $0.length
    char = $1
  }
})
console.log(`字符最多的是${char}, 出现了${num}次`)
```

### 实现千位分隔符

```javascript
// 保留三位小数
parseToMoney(1234.56) // return '1,234.56'
parseToMoney(123456789) // return '123,456,789'
parseToMoney(1087654.321) // return '1,087,654.321'

function parseToMoney(num) {
  num = parseFloat(num.toFixed(3))
  let [integer, decimal] = String.prototype.split.call(num, '.')
  integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,')
  return integer + '.' + (decimal ? decimal : '')
}

// 正则表达式，运用了正则的前向声明和反前向声明
function parseToMoney(str){
  // 仅仅对位置进行匹配
  let re = /(?=(?!\b)(\d{3})+$)/g
  return str.replace(re,',')
}
```

### 正则判断电话号/邮箱/身份证

```javascript
// 电话号
function isPhone(tel) {
  var regx = /^1[34578]\d{9}$/
  return regx.test(tel)
}
// 邮箱
function isEmail(email) {
  var regx = /^([a-zA-Z0-9_\-])+@([a-zA-Z0-9_\-])+(\.[a-zA-Z0-9_\-])+$/;
  return regx.test(email);
}
// 身份证
function isCardNo(number) {
  var regx = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; return regx.test(number);
}
```

## 时间

```
以下表格，点击 `#data .date` 后使表格按日期排序，当前是正序则改为倒序，当前是倒序则改为正序
<table id="data">
    <thead>
    <tr>
        <th class="date">日期</th>
        <th class="total">总次数</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>2017年10月23日</td>
        <td>68,112</td>
    </tr>
    <tr>
        <td>2017年8月6日</td>
        <td>68,020</td>
    </tr>
    <tr>
        <td>2017年11月11日</td>
        <td>69,433</td>
    </tr>
    <tr>
        <td>2016年5月12日</td>
        <td>69,699</td>
    </tr>
    <tr>
        <td>2017年1月18日</td>
        <td>42,565</td>
    </tr>
    </tbody>
</table>
```