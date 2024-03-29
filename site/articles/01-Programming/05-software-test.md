# 测试

> 场景分析法，边界值分析法，等价划分法，错误推测法
>
> 测试覆盖率报告 lcov：genhtml、overcal

## App 测试和 Web 测试

- Web

- - B/S 架构，根据不同浏览器内核测试
  - 客户端同步更新
  - 性能：响应时间为主
  - 交互：鼠标、键盘
  - 测试：常规 Web 测试

- App

- - C/S 架构，根据各种终端设备测试
  - 客户端需要主动升级，因此需要对新功能各个版本上回归测试
  - 性能：需要关心流量、电量、CPU、GPU、内存
  - 交互：各种分辨率、屏幕尺寸；触摸屏
  - 测试：Web 测试、弱网络测试、中断、来电、短信、关机、重启

## 黑盒测试和白盒测试

- 白盒测试：基于代码结构。语句覆盖、判定覆盖、条件覆盖、判定/条件覆盖、条件组合覆盖和路径覆盖
- 黑盒测试：基于用户需求。等价类划分方法、边界值分析方法、错误推测方法、因果图方法、判定表驱动分析方法、正交实验法、场景法。依据是用户需求规格说明书，详细设计说明书

## 软件测试流程

- 测试需求分析阶段
- 测试计划阶段：编写测试计划，参考软件需求规格说明书等
- 测试设计阶段：编写测试用例等
- 测试执行阶段：冒烟测试、正式测试、BUG管理
- 测试评估阶段：测试报告
- 测试流程：了解用户需求-->参考需求规格说明书-->测试计划（人力物力时间进度的安排）-->编写测试用例-->评审用例-->搭建环境-->测试包安排预测（冒烟测试）-正式测试-bug-测试结束出报告-->版本上线-->面向用户

## 单元测试、集成测试、系统测试

- 粒度不同：单元测试粒度最小，集成测试粒度居中，系统测试粒度最大。
- 测试方式不同：
  - 单元测试一般由开发小组采用白盒方式来测试
  - 集成测试一般由开发小组采用白盒加黑盒的方式来测试
  - 系统测试一般由独立测试小组采用黑盒方式来测试。
- 测试内容不同：
  - 单元测试主要测试单元是否符合“设计”
  - 集成测试既验证“设计”，又验证“需求”
  - 系统测试主要测试系统是否符合“需求规格说明书”。
- 使用阶段不同：
  - 单元测试为开发人员在开发阶段要做的事情
  - 集成测试和系统测试为测试人员在测试周期内级层做的工作。