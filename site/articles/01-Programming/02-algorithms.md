# 算法

- 前端中暗藏的各种算法？

![](https://user-gold-cdn.xitu.io/2016/11/29/4abde1748817d7f35f2bf8b6a058aa40?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

算法：

* 排序算法：快速排序、归并排序、计数排序
* 搜索算法：回溯、递归、剪枝技巧
* 图论：最短路、最小生成树、网络流建模
* 动态规划：背包问题、最长子序列、计数问题
* 基础技巧：分治、倍增、二分、贪心

数据结构：

* 数组与链表：单/双向链表、跳舞链
* 栈与队列
* 树与图：最近公共祖先、并查集
* 哈希表
* 堆：大 / 小根堆、可并堆
* 字符串：字典树、后缀树

> 树是图的一种特例，连同无环的图就是树

## 怎么理解时间复杂度和空间复杂度？

* 常用的时间复杂度的量级：
  * 常数阶 O(1)
  * 对数阶 O(logN)
  * 线性阶 O(n)
  * 线性对数阶 O(nlogN)
  * 平方阶 O(n²)
  * 立方阶 O(n³)
  * K 次方阶 O(n^k)
  * 指数阶 O(2^n)
  * 阶乘 O(n!)
* 空间复杂度：内存空间增长的趋势：
  * O(1)
  * O(n)
  * O(n²)

## 什么是树？

* 关键字：根节点、父节点、子节点、兄弟节点、深度
* 树的种类：
  * **二叉树 Binary Tree**：每个节点最多包含两个子节点
  * **满二叉树 Full Binary Tree**：每个不是尾节点的节点都有两个子节点
  * **完全二叉树 Complete Binary Tree**：假设一个二叉树深度为 d，除了第 d 层外，其它各层的节点数量均已达到最大值，且第 d 层所有节点从左向右紧密排列，这样的二叉树就是完全二叉树。
  * **排序二叉树 Binary Search Tree**：在此树中，每个节点的数值比左子树的每个节点都大，比所有右子树上的节点都小。
  * **平衡二叉树 AVL Tree**：任何节点的两颗子树的高度差不大于 1 的排序二叉树。
  * **B 树 B-Tree**：B 树和平衡二叉树一样，只不过它是一种多叉树（一个节点的子节点数量可以超过二）
  * **红黑树 Red-Black Tree**：一种自平衡二叉查找树。
* 遍历树的方法：
  * 前序遍历：先访问节点自己，然后访问左子树，最后再访问右子树。
  * 中序遍历：先访问左子树上的节点，再访问自己，最后再访问右子树上的节点。
  * 后序遍历 Post Order：先访问左右子树，最后再访问自己。

## 什么是哈希表？

> https://www.bilibili.com/video/BV1si4y1b7Rs

* 哈希表的实现方式：数组 + 链表。
  * 数组：寻址容易，插入和删除元素困难
  * 链表：寻址困难，插入和删除元素容易
* 哈希函数：能快速将一个数值转换成哈希数（整数）。所以哈希表必须保持哈希值的计算一致。
  * 如果两个哈希值是不相同的，那么这两个哈希值的院士输入也是不相同的。
  * 如果两个不同的输入得到相同的哈希值，则哈希冲突，存在相应的链表里。

* 哈希表支持的操作：
  * `add(key, value)`：将一对新的键值对加入哈希表
  * `get(key)`：通过特定的关键字拿到其所对应的数值。
  * `remove(key)`：通过关键字，删除哈希表中的键值对。
  * `getSize()`：当前键值对的数量。
  * `isEmpty()`：查看哈希表是否为空。

## 动手实现哈希表

## 如何区分无向图/有向图/权重图

> 参考资料：
>
> * https://www.bilibili.com/s/video/BV1254y1976m

* 无向图 Undirected Graph：每个顶点和其他顶点通过相连线连接。
* 有向图 Directed Graph：有向图中的相连线是有方向的。
  * 实现方法 - 矩阵：容易冗余
  * 实现方法 - 链表：比较复杂
* 权重图 Weighted Graph：在权重图中，每条相连线有各自的权重。

## 排序算法 (1) - 冒泡排序

```javascript
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

改进：传统冒泡排序中每一趟排序操作只能找到一个最大值或最小值,我们考虑利用在每趟排序中进行正向和反向两遍冒泡的方法一次可以得到两个最终值(最大者和最小者) , 从而使排序趟数几乎减少了一半。

```javascript
function bubbleSort3(arr3) {
    var low = 0;
    var high= arr.length-1; //设置变量的初始值
    var tmp,j;
    console.time('2.改进后冒泡排序耗时');
    while (low < high) {
        for (j= low; j< high; ++j) //正向冒泡,找到最大者
            if (arr[j]> arr[j+1]) {
                tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
            }
        --high;                 //修改high值, 前移一位
        for (j=high; j>low; --j) //反向冒泡,找到最小者
            if (arr[j]<arr[j-1]) {
                tmp = arr[j]; arr[j]=arr[j-1];arr[j-1]=tmp;
            }
        ++low;                  //修改low值,后移一位
    }
    console.timeEnd('2.改进后冒泡排序耗时');
    return arr3;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort3(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

## 排序算法 (2) - 选择排序

首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。

```javascript
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    console.time('选择排序耗时');
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.timeEnd('选择排序耗时');
    return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(selectionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

```

## 排序算法 (3) - 插入排序

* 插入排序（Insertion-Sort）：
  * 对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
  * 插入排序在实现上，通常采用只需 O(1)  额外空间的排序，因而在从后向前扫描过程中，需要反复**把已排序元素逐步向后挪位**，为最新元素提供插入空间。
* 时间复杂度：O(n²)
* 空间复杂度：O(1)

```javascript
function insertionSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        console.time('插入排序耗时：');
        for (var i = 1; i < array.length; i++) {
            var key = array[i];
            var j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
        console.timeEnd('插入排序耗时：');
        return array;
    } else {
        return 'array is not an Array!';
    }
}
```

## 排序算法 (4) - 希尔排序

* 1959年Shell发明； 第一个突破O(n^2)的排序算法；是简单插入排序的改进版；它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序

* 希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态的定义间隔序列。动态定义间隔序列的算法是《算法（第4版》的合著者Robert Sedgewick提出的。

```javascript
function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    console.time('希尔排序耗时:');
    while(gap < len/5) {          //动态定义间隔序列
        gap =gap*5+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/5)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    console.timeEnd('希尔排序耗时:');
    return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(shellSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

## 排序算法 (5) - 归并排序

* 归并排序：分治法，一种稳定的排序方法。将一个数组分为两个子数组，通过递归重复将数组切分到只剩下一个元素为止。然后将每个子数组中的元素排序后合并，通过不断合并子数组，最后就会拿到一个排好序的大数组。
  *  第一步：切分，大问题变小问题
  *  第二步：合并，小问题结果合并
*  时间复杂度：O(nlogN）
*  空间复杂度：O(n)

```javascript
function mergeSort(arr) {  //采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];
    console.time('归并排序耗时');
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());
    console.timeEnd('归并排序耗时');
    return result;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(mergeSort(arr));
```

## 排序算法 (6) - 快速排序

* 快速排序：分治法，通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。
  * 基准数可以随机取值。
* 时间复杂度：O(n^2)，平均 O(nlogN)
* 空间复杂度：O(n)，平均 O(logN)

```javascript
var quickSort = function(arr) {
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
};
```

## 排序算法 (7) - 堆排序

* 堆排序可以说是一种利用堆的概念来排序的选择排序。
* 堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。

```javascript
/*方法说明：堆排序
@param  array 待排序数组*/
function heapSort(array) {
    console.time('堆排序耗时');
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        //建堆
        var heapSize = array.length, temp;
        for (var i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
            heapify(array, i, heapSize);
        }

        //堆排序
        for (var j = heapSize - 1; j >= 1; j--) {
            temp = array[0];
            array[0] = array[j];
            array[j] = temp;
            heapify(array, 0, --heapSize);
        }
        console.timeEnd('堆排序耗时');
        return array;
    } else {
        return 'array is not an Array!';
    }
}
/*方法说明：维护堆的性质
@param  arr 数组
@param  x   数组下标
@param  len 堆大小*/
function heapify(arr, x, len) {
    if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof x === 'number') {
        var l = 2 * x + 1, r = 2 * x + 2, largest = x, temp;
        if (l < len && arr[l] > arr[largest]) {
            largest = l;
        }
        if (r < len && arr[r] > arr[largest]) {
            largest = r;
        }
        if (largest != x) {
            temp = arr[x];
            arr[x] = arr[largest];
            arr[largest] = temp;
            heapify(arr, largest, len);
        }
    } else {
        return 'arr is not an Array or x is not a number!';
    }
}
var arr=[91,60,96,13,35,65,46,65,10,30,20,31,77,81,22];
console.log(heapSort(arr));//[10, 13, 20, 22, 30, 31, 35, 46, 60, 65, 65, 77, 81, 91, 96]
```

## 排序算法 (8) - 计数排序

* 计数排序的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。
* 计数排序(Counting sort)是一种稳定的排序算法。计数排序使用一个额外的数组C，其中第i个元素是待排序数组A中值等于i的元素的个数。然后根据数组C来将A中的元素排到正确的位置。它只能对整数进行排序。

```javascript
function countingSort(array) {
    var len = array.length,
        B = [],
        C = [],
        min = max = array[0];
    console.time('计数排序耗时');
    for (var i = 0; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
        C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
    }
    for (var j = min; j < max; j++) {
        C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
    }
    for (var k = len - 1; k >= 0; k--) {
        B[C[array[k]] - 1] = array[k];
        C[array[k]]--;
    }
    console.timeEnd('计数排序耗时');
    return B;
}
var arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
console.log(countingSort(arr)); //[1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 6, 7, 7, 8, 8, 9, 9]
```

## 排序算法 (9) - 桶排序

* 桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。
* 桶排序 (Bucket sort)的工作的原理：假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排。

```javascript
/*方法说明：桶排序
@param  array 数组
@param  num   桶的数量*/
function bucketSort(array, num) {
    if (array.length <= 1) {
        return array;
    }
    var len = array.length, buckets = [], result = [], min = max = array[0], regex = '/^[1-9]+[0-9]*$/', space, n = 0;
    num = num || ((num > 1 && regex.test(num)) ? num : 10);
    console.time('桶排序耗时');
    for (var i = 1; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
    }
    space = (max - min + 1) / num;
    for (var j = 0; j < len; j++) {
        var index = Math.floor((array[j] - min) / space);
        if (buckets[index]) {   //  非空桶，插入排序
            var k = buckets[index].length - 1;
            while (k >= 0 && buckets[index][k] > array[j]) {
                buckets[index][k + 1] = buckets[index][k];
                k--;
            }
            buckets[index][k + 1] = array[j];
        } else {    //空桶，初始化
            buckets[index] = [];
            buckets[index].push(array[j]);
        }
    }
    while (n < num) {
        result = result.concat(buckets[n]);
        n++;
    }
    console.timeEnd('桶排序耗时');
    return result;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bucketSort(arr,4));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

## 排序算法 (10) - 基数排序

* 基数排序也是非比较的排序算法，对每一位进行排序，从最低位开始排序，复杂度为O(kn),为数组长度，k为数组中的数的最大的位数；
* 基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。基数排序基于分别排序，分别收集，所以是稳定的。

```javascript
/**
 * 基数排序适用于：
 *  (1)数据范围较小，建议在小于1000
 *  (2)每个数值都要大于等于0
 * @author xiazdong
 * @param  arr 待排序数组
 * @param  maxDigit 最大位数
 */
//LSD Radix Sort

function radixSort(arr, maxDigit) {
    var mod = 10;
    var dev = 1;
    var counter = [];
    console.time('基数排序耗时');
    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for(var j = 0; j < arr.length; j++) {
            var bucket = parseInt((arr[j] % mod) / dev);
            if(counter[bucket]== null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        var pos = 0;
        for(var j = 0; j < counter.length; j++) {
            var value = null;
            if(counter[j]!=null) {
                while ((value = counter[j].shift()) != null) {
                      arr[pos++] = value;
                }
          }
        }
    }
    console.timeEnd('基数排序耗时');
    return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(radixSort(arr,2)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

## 定义一颗二叉树

```javascript
const tree = {
  data: 1,
  left: {
    data: 2,
    left: {
      data: 4,
      left: {
        data: 8,
      },
      right: {
        data: 9
      }
    },
    right: {
      data: 5,
      left: {
        data: 10,
      },
      right: {
        data: 11
      }
    }
  },
  right: {
    data: 3,
    left: {
      data: 6,
      left: {
        data: 12
      }
    },
    right: {
      data: 7
    }
  }
}
```

## 递归/非递归实现前序遍历二叉树

递归法前序遍历：思路：每开始访问一个节点组合的时候，总是先读取其根节点的值，再访问其左子节点树，最后访问其右子节点树。于是设想：每个节点组合的遍历作为一次递归，不断按照此规律进行遍历，直至所有节点遍历完成。

```javascript
/**
 * 递归法前序遍历
 */
function dfsPreorderByRcs(tree) {
  const output = [];
  const visitLoop = (node) => {
    if (node) {
      // 先搜索出根节点的值，push进结果列表
      output.push(node.data);
      // 访问左子节点树，左子节点开始作为根节点进行下一轮递归
      visitLoop(node.left);
      // 同上述，递归遍历右子节点
      visitLoop(node.right);
    }
  }
  visitLoop(tree);
  return output;
}

console.log('递归法DFS(前序): ', dfsPreorderByRcs(tree));
// 递归法DFS(前序):  [ 1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 7 ]
```

非递归法前序遍历：思路：不用递归，那就肯定要用循环了，但如何保证搜索的顺序呢？可以用数组来记录访问顺序，并且每次从这个顺序数组中依次取出节点对象进行搜索，这样只要保证数组中要搜索的节点顺序是正常的就完成了。那又如何正确的记录顺序呢？每访问一个节点组合，总是搜索其根节点值，然后将其左子节点树push进顺序数组中，再将其右子节点树push进顺序数组中，但是最后push进的节点需要先读取出来，这样就是一个先进后出的栈结构了。

```javascript
/**
 * 简单构造个栈结构
 */
class Stack {
  constructor() {
    this.stackArr = [];
  }
  push(data) {
    this.stackArr.unshift(data);
    return this.stackArr.length;
  }
  pop() {
    const popData = this.stackArr.shift();
    return popData;
  }
  getItem(index) {
    return this.stackArr[index];
  }
  clear() {
    this.stackArr = [];
  }
  get isEmpty() {
    return this.stackArr.length <= 0;
  }
}

/**
 * 非递归法前序遍历
 * 由于遍历过程是先进后出，所以使用栈结构
 */
function dfsPreorderNonRcs(tree) {
  const stack = new Stack();
  const output = [];
  stack.push(tree);
  while (!stack.isEmpty) {
    const pop = stack.pop();
    if (pop) {
      output.push(pop.data);
      if (pop.right) {
        stack.push(pop.right);
      }
      if (pop.left) {
        stack.push(pop.left);
      }
    }
  }
  return output;
}

console.log('非递归DFS(前序): ', dfsPreorderNonRcs(tree));
// 非递归DFS(前序):  [ 1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 7 ]
```

## 递归/非递归实现中序遍历二叉树

递归算法：思路：和前序递归遍历思路差不多，但是顺序上有点改变，先要搜索的是一个节点组合的左子节点，再搜索其根节点，最后是右子节点。

```javascript
/**
 * 递归法中序遍历
 */
function dfsInorderByRcs(tree) {
  const output = [];
  const visitLoop = (node) => {
    if (node) {
      if (node.left) {
        visitLoop(node.left);
      }
      output.push(node.data);
      if (node.right) {
        visitLoop(node.right);
      }
    }
  };
  visitLoop(tree);
  return output;
}

console.log('递归法DFS(中序): ', dfsInorderByRcs(tree));
// 递归法DFS(中序):  [ 8, 4, 9, 2, 10, 5, 11, 1, 12, 6, 3, 7 ]
```

中序 - 非递归算法：思路：和前序的非递归算法一样的是，需要一个栈结构记录遍历的顺序，但现在麻烦的一点是不能每次访问一个节点组合的时候立马读取根节点的值，然后按照读取顺序依次将节点push进栈中了。这里有用到一种“[回溯思想](https://baike.baidu.com/item/回溯算法/9258495?fr=aladdin)”。

* 步骤1：用一个变量存放当前访问的节点，若此节点存在左子节点，则将此节点对象push进栈中，且将左子节点作为当前访问节点进行下一轮循环
* 步骤2：若当前访问节点不存在左子节点，则从栈中pop出这个节点，读取这个节点的值，并且如果其存在右子节点，则将右子节点作为当前访问节点进行下一轮循环。若左右子节点都不存在，则从栈中pop出其父节点，开始读取父节点的右子节点。

```javascript
/**
 * 非递归法中序遍历
 */
function dfsInorderNonRcs(tree) {
  const output = [];
  const stack = new Stack();
  let node = tree;
  while (!stack.isEmpty || node) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      const pop = stack.pop();
      output.push(pop.data);
      if (pop.right) {
        node = pop.right;
      }
    }
  }
  return output;
}
console.log('非递归法DFS(中序): ', dfsInorderNonRcs(tree));
// 非递归法DFS(中序):  [ 8, 4, 9, 2, 10, 5, 11, 1, 12, 6, 3, 7 ]
```

## 递归/非递归实现后序遍历二叉树

后续 - 递归：思路：和前序及中序一样，但先要搜索的是一个节点组合的左子节点，再搜索右子节点，最后才是根节点

```javascript
/**
 * 递归法后序遍历
 */
function dfsPostorderByRcs(tree) {
  const output = [];
  const visitLoop = (node) => {
    if (node) {
      if (node.left) {
        visitLoop(node.left);
      }
      if (node.right) {
        visitLoop(node.right);
      }
      output.push(node.data);
    }
  };
  visitLoop(tree);
  return output;
}
console.log('递归法DFS(后序): ', dfsPostorderByRcs(tree));
// 递归法DFS(后序):  [ 8, 9, 4, 10, 11, 5, 2, 12, 6, 7, 3, 1 ]
```

后续 - 非递归：思路：对当前访问的节点增加一个touched属性，用来标志这个节点是否被访问过其左子节点和右子节点了，判断：

* 当左子节点未被访问过，则将左子节点压入栈中，并且左子节点作为当前访问节点，开始下一轮循环判断；
* 当左子节点已被访问，而右子节点未被访问，则将右子节点压入栈中，并且右子节点作为当前访问节点，开始下一轮循环判断；
* 当左右子节点都被访问过了，则读取其值，然后从栈中取出其父节点，从步骤2开始判断父节点是否可以被读取值了（因为回溯到父节点了，那么父节点的左子节点肯定被搜索过了，只是判断当前节点是否是父节点的右子节点，若是，则可以直接读取父节点的值了）；
* 如上述三个步骤，直至栈为空。

```javascript
/**
 * 非递归法后序遍历
 */
function dfsPostorderNonRcs(tree) {
  const output = [];
  const stack = new Stack();
  let node = tree;
  stack.push(tree);
  while (!stack.isEmpty) {
    if (node.left && !node.touched) {
      node.touched = 'left';
      node = node.left;
      stack.push(node);
      continue;
    }
    if (node.right && node.touched !== 'right') {
      node.touched = 'right';
      node = node.right;
      stack.push(node);
      continue;
    }
    const pop = stack.pop();
    output.push(pop.data);
    // 当前访问节点要改成父节点了，所以从栈中取出父节点
    // 但由于还没确定是否可以读取父节点的值，所以不能用pop
    node = stack.getItem(0); 
    delete pop.touched;
  }
  return output;
}
console.log('非递归法DFS(后序): ', dfsPostorderNonRcs(tree));
// 非递归法DFS(后序):  [ 8, 9, 4, 10, 11, 5, 2, 12, 6, 7, 3, 1 ]
```

## 什么是深度优先和广度优先？

* 生产上广泛用于拓扑排序，社交网络、寻路、搜索引擎和爬虫等
* **使用栈的深度优先遍历** Depth First Search（DFS）：
  * 深度优先遍历用的是，而广度优先遍历要用队列来实现
  * 从图中一个未访问的顶点 V 开始，沿着一条路一直走到底，然后从这条路尽头的节点回退到上一个节点，再从另一条路开始走到底。
  * 不管是前序遍历、还是中序遍历、亦或是后序遍历、都属于深度优先遍历。
* **使用队列的广度优先遍历**：Breath First Search（BFS）

## 二叉树的广度优先遍历

递归：思路：由于是一层一层从左至右访问并直接读取节点值，同一层中读取了某个节点的值后，其右边的节点并不一定与其有共同的父节点，所以必须用一个顺序结构来记录访问的顺序，可以推出是个先进先出的队列结构。

```javascript
/**
 * 递归法广度优先遍历
 */
function bfsByRcs(tree) {
  const queue = [];
  const output = [];
  const visitLoop = (node) => {
    if (node) {
      output.push(node.data);
      if (node.left) {
        queue.unshift(node.left);
      }
      if (node.right) {
        queue.unshift(node.right);
      }
      visitLoop(queue.pop());
    }
  }
  visitLoop(tree);
  return output;
}
console.log('递归法BFS: ', bfsByRcs(tree));
// 递归法BFS:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
```

非递归：思路：和递归法思路差不多，只是用while循环去替代递归就行了

```javascript
/**
 * 非递归法广度优先遍历
 */
function bfsNonRcs(tree) {
  const queue = [];
  const output = [];
  queue.push(tree);
  while (queue.length > 0) {
    const pop = queue.pop();
    if (pop) {
      output.push(pop.data);
      if (pop.left) {
        queue.unshift(pop.left);
      }
      if (pop.right) {
        queue.unshift(pop.right);
      }
    }
  }
  return output;
}
console.log('非递归法BFS: ', bfsNonRcs(tree));
// 非递归法BFS:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
```

## 求二叉树深度和宽度

深度：二叉树深度定义：从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。（其实就是二叉树的最深层次），上述我们用的例子中的深度为4（一共有4层）。

* 思路：分别计算左子树的深度和右字数的深度，然后选出两个值中的较大值。

```javascript
/**
 * 获取二叉树深度
 */
function getTreeDepth(tree) {
  const depthCount = (node) => {
    let leftDepth = 0;
    let rightDepth = 0;
    if (node.left) {
      leftDepth = depthCount(node.left);
    }
    if (node.right) {
      rightDepth = depthCount(node.right);
    }
    return Math.max(leftDepth, rightDepth) + 1;
  };
  return depthCount(tree);
}
console.log('二叉树深度: ', getTreeDepth(tree));
// 二叉树深度:  4
```

宽度：二叉树宽度定义：二叉树各层结点个数的最大值

* 思路：在每个节点中添加个属性floor，用来记录这个节点是在第几层，然后计算floor相同情况最多的个数就行了。

```javascript
/**
 * 获取二叉树宽度
 */
function getTreeWidth(tree) {
  const widthArr = []; // 每层的节点个数数组
  const queue = []; // 遍历树用到的队列结构
  tree.floor = 0;
  queue.push(tree);
  while (queue.length > 0) {
    const pop = queue.shift();
    // widthArr中的index对应层数floor
    // 每访问一个节点，在对应层数的widthArr索引里+1
    widthArr[pop.floor] = (widthArr[pop.floor] || 0) + 1;
    const nextFloor = pop.floor + 1;
    if (pop.left) {
      pop.left.floor = nextFloor;
      queue.push(pop.left);
    }
    if (pop.right) {
      pop.right.floor = nextFloor;
      queue.push(pop.right);
    }
    delete pop.floor;
  }
  return Math.max(...widthArr);
}
console.log('二叉树宽度: ', getTreeWidth(tree));
// 二叉树宽度:  5
```

