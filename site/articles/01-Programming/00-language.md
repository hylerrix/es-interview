# 编程语言

- 面向过程、面向对象（封装、多态、继承）、函数式
- 堆、栈、队列
- 纯函数、柯里化
- 正则表达式



## [编译原理] 什么是 AST？

> * AST Explorer：https://astexplorer.net/

* AST 的过程中有两个关键步骤：
  * 词法分析: 将代码(字符串)分割为 token 流,即语法单元成的数组
  * 语法分析: 分析 token 流(上面生成的数组)并生成 AST

## 什么是元编程？

* 对编程语言进行编程，如 JavaScript 里的 Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改。
  * 

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
* 

## 什么是字节对齐？

* 各种类型的数据按照一定的规则在空间上排列（数据的存放起始地址 %N== 0）。

* 各个硬件平台对存储空间的处理上有很大的不同。一些平台对某些特定类型的数据只能从某些特定地址开始存取。比如有些架构的 CPU，诸如 SPARC 在访问一个没有进行对齐的变量的时候会发生错误，那么在这种架构上必须编程必须保证字节对齐，**而有些平台对于没有进行对齐的数据进行存取时会产生效率的下降**。

