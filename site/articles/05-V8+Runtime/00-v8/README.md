# V8

> JavaScriptCore(Apple)、QuickJS、V8
>
> 你都知道哪些 JavaScript 解析器？JavaScript 的解析器包括的实施规范起始于 ESTree 项目，常见的基于 JS 开发的 JavaScript 解析器包括 uglify-js、Esprima、acorn、@babel/parser(babylon)、espree、TypeScript；常见的基于其他语言开发的 JavaScript 解析器包括 sucrase、swc、esbuild；其它 AST 工具包括：recast、jscodeshift、ASTExplorer 等。
>
> 关于v8。什么是isolate？什么是context？值的抽象？v8是怎么管理内存的？怎么直接用v8 api写[node-addon](https://www.zhihu.com/search?q=node-addon&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A1870290555})？

问题：

* 垃圾回收机制是怎样的？

关键知识：

* V8 是由 C++ 编写的  JavaScript 和 WebAssembly 引擎；支持 x64、IA-32、ARM 或 MIPS 处理器；可以独立运行也可以被嵌入到任何 C++ 应用中。

