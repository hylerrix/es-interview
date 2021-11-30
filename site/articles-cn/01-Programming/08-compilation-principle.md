# 编译原理

## 编译原理的过程？

```markdown
**词法分析**   ===>   单词与记号、正则表达式、有限自动机、从正则表达式到有限自动机的转换、词法分析器的实现
    ││
**语法分析**   ===>   上下文无关文法、递归下降分析、LR 分析、错误处理、语法分析器自动生成
    ││
**语义分析**   ===>   类型系统、属性文法、语法制导翻译、符号表管理、抽象语法树、线性中间表示、图中间表示
    ││
**中间代码生成**   ===>   变量地址分配、算术表达式翻译、布尔表达式翻译、数组、结构体和字符串的翻译、控制流的翻译、函数调用的翻译
    ││
**目标代码优化与生成**   ===>   目标体系结构、树匹配代码生成、基于动态规划的代码生成、寄存器分配、指令调度、控制流分析、数据流分析、死代码删除、常量传播、拷贝传播、静态单赋值形式
```

## 什么是 AST？

> * AST Explorer：https://astexplorer.net/

* AST 的过程中有两个关键步骤：
  * 词法分析: 将代码(字符串)分割为 token 流,即语法单元成的数组
  * 语法分析: 分析 token 流(上面生成的数组)并生成 AST
* AST 的使用场景：
  * 代码语法的检查、代码风格的检查、代码的格式化、代码的高亮、代码错误提示、代码自动补全等等
    - 如JSLint、JSHint对代码错误或风格的检查，发现一些潜在的错误
    - IDE的错误提示、格式化、高亮、自动补全等等
  * 代码混淆压缩
    - UglifyJS2等
  * 优化变更代码，改变代码结构使达到想要的结构
    - 代码打包工具 Webpack、rollup等等
    - CommonJS、AMD、CMD、UMD等代码规范之间的转化
    - CoffeeScript、TypeScript、JSX等转化为原生Javascript

```javascript
{
  "type": "Program",
  "start": 0,
  "end": 16,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 16,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "ast"
      },
      "expression": false,
      "generator": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 16,
        "body": []
      }
    }
  ],
  "sourceType": "module"
}
```

