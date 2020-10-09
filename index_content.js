// @deno-types="https://deno.land/x/pagic@v0.9.1/src/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';
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
`;
const IndexPage = () => (React.createElement(React.Fragment, null,
    React.createElement("div", null,
        React.createElement("style", { dangerouslySetInnerHTML: { __html: style } }),
        React.createElement("h1", { style: {
                marginTop: '3.5rem',
                textAlign: 'center',
                fontSize: '64px',
                color: 'hsl(210, 70%, 50%)'
            } }, "ECMAScript+ \u9762\u8BD5\u5B9D\u5178"),
        React.createElement("p", { style: {
                fontSize: '28px',
                marginTop: '2rem',
                textAlign: 'center',
                color: 'var(--color-text-muted)'
            } }, "\u6536\u96C6\u6C47\u603B\u68B3\u7406\u5168\u7F51\u8D44\u6E90\uFF0C\u6DB5\u76D6 JS/TS \u524D\u540E\u7AEF\u7684\u5168\u65B9\u4F4D\u9762\u8BD5\u9898\u5E93\uFF08\u542B\u63D0\u793A\u6027\u89E3\u6790\uFF09\uFF0C\u52A9\u529B\u627E\u4E2A\u597D\u5DE5\u4F5C\uFF01"),
        React.createElement("div", { style: {
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2rem'
            } },
            React.createElement("a", { className: "btn btn-primary", href: "/articles/" }, "\u5F00\u59CB\u9605\u8BFB"),
            React.createElement("a", { className: "btn", target: "_blank", href: "https://github.com/hylerrix/es-interview" }, "\u6E90\u7801\u4ED3\u5E93"))),
    React.createElement("div", { className: "cards" },
        React.createElement("div", null,
            React.createElement("h2", null, "\u539F\u521B\u6587\u7AE0"),
            React.createElement("ul", null,
                React.createElement("li", null, "\u878D\u5408\u4E86\u7B14\u8005\u7684\u5927\u91CF\u601D\u8003\u3002"),
                React.createElement("li", null, "\u672C\u4E66\u3001\u7B14\u8005\u548C\u8BFB\u8005\u4E00\u8D77\u6210\u957F\u3002"),
                React.createElement("li", null, "\u53CB\u597D\u7684\u4EA4\u6D41\u73AF\u5883\u3002"))),
        React.createElement("div", null,
            React.createElement("h2", null, "\u5185\u5BB9\u4E30\u5BCC"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "\u4ECE\u591A\u65B9\u4F4D\u5EFA\u8BBE ",
                    React.createElement("code", null, "\u5927\u524D\u7AEF"),
                    " \u751F\u6001"),
                React.createElement("li", null,
                    "\u5185\u5BB9\u5305\u62EC\u4F46\u4E0D\u5C40\u9650\u4E8E ",
                    React.createElement("code", null, "JS"),
                    " ",
                    React.createElement("code", null, "TS"),
                    " ",
                    React.createElement("code", null, "Node"),
                    " ",
                    React.createElement("code", null, "Deno"),
                    " \u7B49\u4F17\u591A\u6280\u672F\u95EE\u9898"),
                React.createElement("li", null, "\u6301\u7EED\u6784\u601D\u4E2D"))),
        React.createElement("div", null,
            React.createElement("h2", null, "\u957F\u671F\u7EF4\u62A4"),
            React.createElement("ul", null,
                React.createElement("li", null, "\u6765\u6E90\u4E8E\u4E00\u4EFD\u5BF9\u6D77\u91CF ES \u9762\u8BD5\u9898\u5E93\u7CFB\u7EDF\u68B3\u7406\u7684\u6E34\u671B"),
                React.createElement("li", null,
                    "\u57FA\u4E8E ",
                    React.createElement("code", null, "Pagic"),
                    " \u9759\u6001\u7F51\u7AD9\u751F\u6210\u5668\uFF0C\u6784\u5EFA\u957F\u671F\u7684\u7F51\u7AD9\u6280\u672F\u652F\u6301"),
                React.createElement("li", null, "\u91CE\u5FC3\uFF0C\u4E0D\u6B62\u4E8E\u6B64\u3002")))),
    React.createElement("h2", null, "\u63A8\u8350\u4F60\u7684 ES \u9762\u8BD5\u9898\u53CA\u7B80\u6613\u89E3\u6790\uFF1F\u5FEB\u6765\u4E00\u8D77\u5EFA\u8BBE\u5427\u3002"),
    React.createElement("pre", { style: {
            fontSize: '1rem'
        } },
        React.createElement("code", { dangerouslySetInnerHTML: {
                __html: `# 直接在 issues 区里推荐
https://github.com/hylerrix/es-interview/issues

# 或克隆项目，本地编辑并 PR
git clone https://github.com/\${YOUR_NAME}/es-interview
git add . && git commit -s -m "feat(docs): add a new article"
git push origin main`
            } }))));
export default IndexPage;
