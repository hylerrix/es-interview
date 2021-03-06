// @deno-types="https://deno.land/x/pagic@v0.9.1/src/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1'

const style = `
h2 {
  font-weight: normal;
}
.main_article {
  width: 960px;
  max-width: 960px;
  padding-bottom: 0;
}
.cards {
  display: flex;
  justify-content: center;
  margin: 3rem -1rem 0 -1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
}
.cards > div {
  width: 20rem;
  padding: 0 1rem;
}
.cards ul {
  color: var(--color-text-muted);
}
.btn {
  padding: 0.5rem 1rem;
  margin: 0 1rem;
  border: 0;
  cursor: pointer;
  opacity: 0.9;
  font-size: 14px;
  text-decoration: none;
  background-color: var(--color-border);
  color: var(--color-text);
}
.btn:hover {
  text-decoration: none;
}
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-background);
}
.btn:hover {
  opacity: 1;
}
@media screen and (max-width: 44rem) {
  h2 {
    text-align: center;
  }
  .cards {
    flex-direction: column;
  }
  .cards > div {
    width: 100vw;
  }
  .cards ul {
    text-align: center;
    padding-left: 0;
    list-style: none;
  }
  pre {
    margin-left: -1rem;
    margin-right: -1rem;
  }
}
`

const IndexPage = () => (
  <>
    <div>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <h1
        style={{
          marginTop: '3.5rem',
          textAlign: 'center',
          fontSize: '64px',
          color: 'hsl(210, 70%, 50%)'
        }}
      >
        ECMAScript+ 面试宝典
      </h1>
      <p
        style={{
          fontSize: '28px',
          marginTop: '2rem',
          textAlign: 'center',
          color: 'var(--color-text-muted)'
        }}
      >
        收集汇总梳理全网资源，涵盖 JS/TS 前后端的全方位面试题库（含提示性解析），助力找个好工作！
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem'
        }}
      >
        <a className="btn btn-primary" href="/articles/">
          开始阅读
        </a>
        <a className="btn" target="_blank" href="https://github.com/hylerrix/es-interview">
          源码仓库
        </a>
      </div>
    </div>
    <div className="cards">
      <div>
        <h2>目录友好</h2>
        <ul>
          <li>融合了笔者的大量思考。</li>
          <li>本书、笔者和读者一起成长。</li>
          <li>友好的交流环境。</li>
        </ul>
      </div>
      <div>
        <h2>内容丰富</h2>
        <ul>
          <li>从多方位建设 <code>大前端</code> 生态。</li>
          <li>
            内容包括但不局限于 <code>JS</code> <code>TS</code> <code>Node</code> <code>Deno</code> 等众多技术问题。
          </li>
          <li>持续构思中。</li>
        </ul>
      </div>
      <div>
        <h2>长期维护</h2>
        <ul>
          <li>来源于一份对海量 ES 面试题库系统梳理的渴望。</li>
          <li>基于 <code>Pagic</code> 静态网站生成器，构建长期的网站技术支持。</li>
          <li>野心，不止于此。</li>
        </ul>
      </div>
    </div>
    <h2>推荐你的 ES 面试题及简易解析？快来一起建设吧。</h2>
    <pre
      style={{
        fontSize: '1rem'
      }}
    >
      <code
        dangerouslySetInnerHTML={{
          __html: `# 直接在 issues 区里推荐
https://github.com/hylerrix/es-interview/issues

# 或克隆项目，本地编辑并 PR
git clone https://github.com/\${YOUR_NAME}/es-interview
git add . && git commit -s -m "feat(docs): add a new article"
git push origin main`
        }}
      />
    </pre>
  </>
)

export default IndexPage
