# 前端工具链

> Npm 和 yarn 是如何管理软件包的？全局软件包/本地软件包
>
> npx 的原理
>
> Babel 的组成和工作原理：parser、traverser、generator
>
> - [ ] npm link
> - [ ] 分析 node modules 嵌套模块图
> - [ ] package.json 依赖安全性分析、各个包大小分析
>   - https://github.com/pastelsky/bundlephobia
>   - https://github.com/webpack-contrib/webpack-bundle-analyzer
>   - [source-map-explorer](https://github.com/danvk/source-map-explorer)
>   - https://github.com/siddharthkp/cost-of-modules
>   - https://arve0.github.io/npm-download-size
>   - https://packagephobia.com/
>
> 关于工程化。webpack5是怎么做持久化储存的？mf是怎么服务于微前端的，又是怎么解决external的问题的？mf的原理是什么？hardsourceplugin的原理是什么，它为什么这么快？lerna的最佳实践？submodule的最佳实践？webpack和gulp怎么配合？tapable究竟是什么抽象？
>
> 热更新的原理

## 工具链概览

- **JS 开发环境**？有 V8、Node 甚至是 Deno 等；
- **JS 前端框架**？有 Angular、React、Vue、React Native、jQuery 等；
- **JS 后端框架**？有 Nest、Express、Koa 等；
- **JS 脚手架**？有 Vue CLI、Angular CLI、Create React App、Yeoman 等；
- **JS 转译工具**？有 Babel 等；
- **JS 测试工具**？围绕单元测试、集成测试，有 Mocha、Jasmine、Jest、Karma 等；
- **JS 调试工具**？有 Chrome DevTools/Firebug/Webkit inspector 等各大主流浏览器、VS Code/WebStorm 等各大编辑器/IDE 等；
- **JS 格式规范工具**？有 JSLint、JSHint、ESLint、TSLint 等；
- **JS 接口联调工具**？有 Axios、Fetch 等；
- **JS 包管理器**？有 NPM、Yarn、Bower、PNPM 等；
- **JS 模块加载器**？有 RequireJS、SystemJS、StealJS、ES Module Loader 等；
- **JS 任务管理工具**？Grunt、Gulp、Webpack 监听文件变化，自动执行任务；
- **JS 静态化支持**？有 TypeScript、CoffeeScript、Flow、LiveScript 等；
- **JS 代码后处理工具**？围绕混淆器、缩小器、优化器诸多领域有各种各样的 loader 等；
- **JS 打包工具**？Webpack、Rollup、Parcel、Browserify 等；
- **JS 模板引擎**？有 handlebarsjs、etpl、templatejs 甚至各大前端框架内置的模板语法等；
- **JS 非 Web 框架**？在物联网、区块链、大数据等领域均有相关库支持，本文不涉及。
- **JS 进程管理**？有 Forever、PM2、StrongLoop Process Manager 等；
- **......**？甚至编辑器、IDE、CSS 预处理器、代码托管平台、团队开发模式(纯前端、重后端、前后分离)、WebAssembly、Serverless、JS DevOps 等都可以加到项目的技术选型范围内。

## underscore



## lodash



## Rome



## Axios

