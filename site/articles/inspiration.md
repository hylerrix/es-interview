# 灵感

* 有趣的话题：`const ningo = 1+1` 发生了什么？
* 原型链、作用域链的查找如何委托给 JS 引擎



* 领域设计模型
* 监控平台、链路追踪
* 单体应用、微服务、云原生
* Git 里 pull/fetch 区别、GIt Rebase 高阶用法之合并提交记录
* Git 如何取消单个文件的改动
* ssh 协议是怎么连接的
* 如果直接给 useHook 的引用对象赋值而不调用 setXXX 会怎么样？
* JS 实践

  * 数值每隔千位加英文逗号、isNumber

  * reduce 对象数值累加、判断 key 是否存在
  * 99 乘法表、斐波那契数列
* Set/Array 的转换
* 前端应用问题：处理上传/下载的原理及其多种方式？

  * https://blog.csdn.net/weixin_43660626/article/details/103619106
  * Blob、FileReade、FIleList、Base64、Buffer
  * window.URL.createObjectURL
  * 超大文件的分片长传、断点续传与下载
  * 自定义 csv 通用库
  * CSV 如何处理逗号
* 前端处理视频流媒体
* 如何理解 JAM Stack
  * https://dev.to/simonholdorf/10-things-front-end-developers-should-learn-in-2021-d23
* Vue

  * 如何理解 Vue 里的 render "h"
  * v-show 和 v-if 的区别
  * 如何编写自定义的 directives 如 v-resize
  * Vue 如何 watch DOM 的改变
  * 可以 data[index] = newVal 来自动更新视图吗？为什么



```javascript
/**
 * throttle 节流
 * 每delay毫秒执行一次
 *
 * @param callback
 * @param delay
 * @return {function()}
 */
export const throttle = (callback, delay = 100) => {
  let canExec = true
  return function (...args) {
    if (!canExec) {
      return
    }

    // eslint-disable-next-line standard/no-callback-literal
    callback(...args)

    canExec = false
    setTimeout(() => { canExec = true }, delay)
  }
}

export function debounce (fn, wait = 0) {
  let timer

  return () => {
    if (timer) {
      timer && clearTimeout(timer)
      timer = null
    }

    timer = setTimeout(() => {
      fn()
    }, wait)
  }
}

async function batchRequest (data, params, username) {
  let count = Math.ceil(data.total / perDownloadSize)
  count = Math.min(count, 200) // 控制水位，并发数不能超过200
  const promises = []
  for (let i = 2; i <= count; i++) {
    params.page = i
    promises.push(rs.fetchSysService('GET', '/charge/report/account/detail/charge', params, username, true))
  }

  if (!promises.length) return

  await Promise.all(promises).then((allRes) => {
    for (let i = 1; i < count; i++) {
      const res = (allRes[i - 1] && allRes[i - 1].data) || []
      data.data.push(...res)
    }
  })
}
```



```javascript
// 下载
const url = window.URL.createObjectURL(new Blob([data]))
const link = document.createElement('a')
link.href = url
link.setAttribute('download', fileName)
document.body.appendChild(link)
link.click()

downloadTest({
  type: 'get',
  url: 'http://10.79.30.19:8000/charge/report/day/account/export/detail?accountCode=serversystemservice&costDay=2020-10-01&region=9&',
  data: {}
})

downloadTest (option) {
  // var url = '/s1/brand/exportExcel';
  const xhr = new XMLHttpRequest()
  xhr.open(option.type, option.url, true)
  xhr.responseType = 'blob'
  xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
  xhr.onload = function () {
    if (this.status === 200) {
      // var _b = xhr.getResponseHeader('Content-Disposition');
      // var _c = _b.split('filename=')[1];
      // var _d = decodeURIComponent(_c.split('.')[0])+'.'+_c.split('.')[1];
      const blob = this.response
      const a = document.createElement('a')
      const url = window.URL.createObjectURL(blob) // 创建url对象
      a.href = url
      // a.download = _d
      a.download = 'excel.xlsx'
      a.click()
      window.URL.revokeObjectURL(url) // 释放url对象
    }
  }
  xhr.send(JSON.stringify(option.data))
}




import axios from 'axios'

export const downloadFile = (url: string, type: 'GET' | 'POST', params: any, fileName?: string) => {
  axios({
    url: url,
    method: type,
    params: type === 'GET' ? params : undefined,
    data: type === 'POST' ? params : undefined,
    responseType: 'blob',
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', fileName ? fileName : 'resources.xlsx') //or any other extension
    document.body.appendChild(link)
    link.click()
  })
}
```



待读：

* [React 架构的演变 - 更新机制](https://mp.weixin.qq.com/s/-a4RayWkOuKOMcRlOj1Few)
* [聊聊 Axios 中值得学习的核心知识点](https://mp.weixin.qq.com/s/KfIbhT5ZubvVzNHEIyiXEA)

