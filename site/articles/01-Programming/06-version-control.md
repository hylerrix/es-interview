# 版本控制

## 什么是 Git

* Git 仓库的三个组成部分：工作区、暂存区和历史记录区
  * 工作区 working directory：在 git 管理下的正常目录都是工作区
  * 暂存区 stage：临时区域，里面存放将要提交文件的快照
  * 历史记录区 history：git commit 后的记录区
  * 三个区转换关系：
    * history -> stage(Index)：`git reset --files`
    * Stage(Index) -> Working Directory: `git checkout --files`
    * Working Directory -> Stage(Index): `git add files`
    * Stage(Index) -> History: `git commit`

## Git Workflow 是怎样的？

* Git Flow：由 Vincent Driessen 提出：
  * 分支
    * master：主分支
    * develop：主开发分支，包含确定即将发布的代码
    * feature：新功能分支，一般一个新功能对应一个分支，对于功能的拆分需要比较合理，以避免一些后面不必要的代码冲突。
    * release：发布分支，发布时候用的分支，一般测试时候发现的 bug 在这个分支进行修复。
    * hotfix：更新分支，紧急修 bug 时候用
  * 优点：
    * 并行开发：GitFlow 可以很方便的实现并行开发:每个新功能都会建立一个新的 feature 分支，从而和已经完成的功能隔离开来，而且只有在新功能完成开发的情况下，其对应的 feature 分支才会合并到主开发分支上(也就是我们经常说的 分支)。另外，如果你正在开发某个功能，同时又有一个新的功能需要开发，你只需要 提交当前 的代码，然后创建另外一个 feature 分支并完成新功能开发。然后再切回之前的 feature 分 支即可继续完成之前功能的开发。
    * 协作开发：协作开发:GitFlow 还支持多人协同开发，因为每个 feature 分支上改动的代码都只是为了让某个新的 feature 可以独立运行。同时我们也很容易知道每个人都在干啥。
    * 发布阶段：当一个新 feature 开发完成的时候，它会被合并到 分支，这个分支主要用来暂时保存那些还 没有发布的内容，所以如果需要再开发新的 feature ，我们只需要从 分支创建新分支，即可包含所有已 经完成的 feature 。
    * 支持紧急修复：GitFlow 还包含了 hotfix 分支。这种类型的分支是从某个已经发布的 tag 上创建出来并做一个紧 急的修复，而且这个紧急修复只影响这个已经发布的 tag，而不会影响到你正在开发的新 feature 。
* GitHub Flow

## rebase 和 merge 的区别？

* git rebase 和 git merge 一样都是用于从一个分支获取并且合并到当前分支。
* merge：自动创建一个新的 commit，如果合并时遇到冲突，仅需要修改后重新 commit
  * 优点：记录了真实的 commit 情况，包括每个分支的详情
  * 缺点：因为每次 merge 都会自动产生一个 merge commit，所以在使用一些 git GUI 工具时，分支较乱。
* rebase：合并之前的 commit 历史
  * 优点：得到更简洁的项目历史，去掉了 merge commit
  * 缺点：如果合并出现代码问题不容易定位，因为 rewrite 了 history

## reset、revert、checkout 有什么区别？

* 共同点：用来撤销代码仓库中的某些更改。
* 不同点 - commit 层面：
  * git reset 可以将一个分支的末端指向之前的一个 commit，然后在下次 git 执行垃圾回收的时候，会把这个 commit 之后的 commit 都扔掉。
  * git reset 还支持三种标记，用来标记 reset 指令影响的范围：
    * --mixed：会影响到暂存区和历史记录区。也是默认选项。
    * --soft：只影响历史记录区。
    * --hard：影响工作区、暂存区和历史记录区
  * git reset 是直接删除 commit 记录，从而会影响到其他开发人员的分支，所以不要在公共分支（dev、master 等）操作。
  * git checkout 可以将 HEAD 移到一个新的分支，并更新工作目录。因为可能会覆盖
* 不同点 - 文件层面：
  * git reset 只是把文件从历史记录区拿到暂存区，不影响工作区的内容，而且不支持 --mixed、--soft 和 --hard。
  * git checkout 则是把文件从历史记录拿到工作区，不影响暂存区的内容。
  * git revert 不支持文件层面的操作。

## Git Commit Message 提交规范（Angular）？

每次提交，Commit message 都包括三个部分：Header，Body 和 Footer。其中，Header 是必需的，Body 和 Footer 可以省略。不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。这是为了避免自动换行影响美观。

```html
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```

* Header：Header 部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）。
  * type：用于说明 commit 的类别，只允许使用下面 7 个标识。
    * feat：新功能（feature）
    * fix：修补bug
    * docs：文档（documentation）
    * style：格式（不影响代码运行的变动）
    * refactor：重构（即不是新增功能，也不是修改bug的代码变动）
    * test：增加测试
    * chore：构建过程或辅助工具的变动
  * 如果 type 为 feat 和 fix，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。
  * scope：用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。
  * subject：是 commit 目的的简短描述，不超过50个字符。
    * 以动词开头，使用第一人称现在时，比如change，而不是changed或changes
    * 第一个字母小写
    * 结尾不加句号（.）
* Body：对本次 commit 的详细描述，可以分成多行。注意：
  * 使用第一人称现在时，比如使用change而不是changed或changes。
  * 应该说明代码变动的动机，以及与以前行为的对比。
* Footer：只用于两种情况。
  * 不兼容变动：如果当前代码与上一个版本不兼容，则 Footer 部分以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动理由和迁移方法。
  * 关闭 Issue：如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。也可以一次关闭多个 issue 。
* Revert：还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以revert:开头，后面跟着被撤销 Commit 的 Header。
  * Body部分的格式是固定的，必须写成 This reverts commit .，其中的 hash 是被撤销 commit 的 SHA 标识符。
  * 如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。如果两者在不同的发布，那么当前 commit，会出现在 Change log 的Reverts小标题下面。

## 保证 Git Commit 规范的工具都有哪些？

* Commitizen：一个撰写合格 Commit message 的工具。安装后在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式。
* validate-commit-msg：用于检查 Node 项目的 Commit message 是否符合格式。它的安装是手动的。首先，拷贝下面这个 JavaScript 文件，放入你的代码库。文件名可以取为 validate-commit-msg.js。接着，把这个脚本加入 Git 的 hook。下面是在 package.json 里面使用 ghooks，把这个脚本加为 commit-msg 时运行。

## 如何生成 changelog？

* 如果你的所有 Commit 都符合 Angular 格式，那么发布新版本时， Change log 就可以用脚本自动生成。生成的文档包括以下三个部分。
  * New features
  * Bug fixes
  * Breaking changes。

* 使用 conventional-changelog 工具。
  * 上面命令不会覆盖以前的 Change log，只会在 CHANGELOG.md 的头部加上自从上次发布以来的变动。如果你想生成所有发布的 Change log，要改为运行下面的命令。

```json
{
  "scripts": {
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -w -r 0"
  }
}
```

