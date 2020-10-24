# HTML + CSS 实战

## 绘制基础图形

三角形、圆形等

## 水平垂直居中

> [16种方法实现水平居中垂直居中](https://louiszhai.github.io/2016/03/12/css-center/)

- 第一种，绝对定位

```css
div {
    position: absolute;
    width: 300px;
    height: 300px;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
}
```

- 第二种，已知容器宽高

```css
div {
    position: relative; /* 或 absolute */
    width: 500px;
    height: 300px;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -250px;
    background-color: pink;
}
```

- 第三种，不知容器宽高，利用 `transform` 属性

```css
div {
    position: relative; /* 或 absolute */
    width: 500px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: -150px 0 0 -250px;
    background-color: pink;
}
```

- 第四种，flex 布局，需考虑兼容性

```css
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 200px;
    background-color: yellow;
}

.container div {
    width: 100px;
    height: 100px;
    background-color: pink;
}
```