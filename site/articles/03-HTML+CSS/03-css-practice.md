# CSS 实战

> CSS 左固定宽度，右边自适应
>
> 纯 CSS 实现卡通人物、动画等 https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-css-variables-to-change-several-elements-at-once
>
> 常见的图形绘制，常见动画

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

## 绘制基础图形

> https://www.cnblogs.com/ming1025/p/7363074.html

```css
// 三角形
#triangle-up {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red;
}

// 圆形
#circle {
    width: 100px;
    height: 100px;
    background: red;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
}

// 椭圆
1 #oval {
2     width: 200px;
3     height: 100px;
4     background: red;
5     -moz-border-radius: 100px / 50px;
6     -webkit-border-radius: 100px / 50px;
7     border-radius: 100px / 50px;
8 }

// 平行四边形
1 #parallelogram {
2     width: 150px;
3     height: 100px;
4     margin-left:20px;
5     -webkit-transform: skew(20deg);
6     -moz-transform: skew(20deg);
7     -o-transform: skew(20deg);
8     background: red;
9 }

// 六角星
 1 #star-six {
 2     width: 0;
 3     height: 0;
 4     border-left: 50px solid transparent;
 5     border-right: 50px solid transparent;
 6     border-bottom: 100px solid red;
 7     position: relative;
 8 }
 9 #star-six:after {
10     width: 0;
11     height: 0;
12     border-left: 50px solid transparent;
13     border-right: 50px solid transparent;
14     border-top: 100px solid red;
15     position: absolute;
16     content: "";
17     top: 30px;
18     left: -50px;
19 }

// 五角星
1 #star-five {
 2    margin: 50px 0;
 3    position: relative;
 4    display: block;
 5    color: red;
 6    width: 0px;
 7    height: 0px;
 8    border-right:  100px solid transparent;
 9    border-bottom: 70px  solid red;
10    border-left:   100px solid transparent;
11    -moz-transform:    rotate(35deg);
12    -webkit-transform: rotate(35deg);
13    -ms-transform:     rotate(35deg);
14    -o-transform:      rotate(35deg);
15 }
16 #star-five:before {
17    border-bottom: 80px solid red;
18    border-left: 30px solid transparent;
19    border-right: 30px solid transparent;
20    position: absolute;
21    height: 0;
22    width: 0;
23    top: -45px;
24    left: -65px;
25    display: block;
26    content: '';
27    -webkit-transform: rotate(-35deg);
28    -moz-transform:    rotate(-35deg);
29    -ms-transform:     rotate(-35deg);
30    -o-transform:      rotate(-35deg);
31     
32 }
33 #star-five:after {
34    position: absolute;
35    display: block;
36    color: red;
37    top: 3px;
38    left: -105px;
39    width: 0px;
40    height: 0px;
41    border-right: 100px solid transparent;
42    border-bottom: 70px solid red;
43    border-left: 100px solid transparent;
44    -webkit-transform: rotate(-70deg);
45    -moz-transform:    rotate(-70deg);
46    -ms-transform:     rotate(-70deg);
47    -o-transform:      rotate(-70deg);
48    content: '';
49 }

// 五角大楼
 1 #pentagon {
 2     position: relative;
 3     width: 54px;
 4     border-width: 50px 18px 0;
 5     border-style: solid;
 6     border-color: red transparent;
 7 }
 8 #pentagon:before {
 9     content: "";
10     position: absolute;
11     height: 0;
12     width: 0;
13     top: -85px;
14     left: -18px;
15     border-width: 0 45px 35px;
16     border-style: solid;
17     border-color: transparent transparent red;
18 }

// 六边形
 1 #hexagon {
 2     width: 100px;
 3     height: 55px;
 4     background: red;
 5     position: relative;
 6 }
 7 #hexagon:before {
 8     content: "";
 9     position: absolute;
10     top: -25px;
11     left: 0;
12     width: 0;
13     height: 0;
14     border-left: 50px solid transparent;
15     border-right: 50px solid transparent;
16     border-bottom: 25px solid red;
17 }
18 #hexagon:after {
19     content: "";
20     position: absolute;
21     bottom: -25px;
22     left: 0;
23     width: 0;
24     height: 0;
25     border-left: 50px solid transparent;
26     border-right: 50px solid transparent;
27     border-top: 25px solid red;
28 }

// 八角形
 1 #octagon {
 2     width: 100px;
 3     height: 100px;
 4     background: red;
 5     position: relative;
 6 }
 7  
 8 #octagon:before {
 9     content: "";
10     position: absolute;
11     top: 0;
12     left: 0;   
13     border-bottom: 29px solid red;
14     border-left: 29px solid #eee;
15     border-right: 29px solid #eee;
16     width: 42px;
17     height: 0;
18 }
19  
20 #octagon:after {
21     content: "";
22     position: absolute;
23     bottom: 0;
24     left: 0;   
25     border-top: 29px solid red;
26     border-left: 29px solid #eee;
27     border-right: 29px solid #eee;
28     width: 42px;
29     height: 0;
30 }

// 爱心
1 #heart {
 2     position: relative;
 3     width: 100px;
 4     height: 90px;
 5 }
 6 #heart:before,
 7 #heart:after {
 8     position: absolute;
 9     content: "";
10     left: 50px;
11     top: 0;
12     width: 50px;
13     height: 80px;
14     background: red;
15     -moz-border-radius: 50px 50px 0 0;
16     border-radius: 50px 50px 0 0;
17     -webkit-transform: rotate(-45deg);
18        -moz-transform: rotate(-45deg);
19         -ms-transform: rotate(-45deg);
20          -o-transform: rotate(-45deg);
21             transform: rotate(-45deg);
22     -webkit-transform-origin: 0 100%;
23        -moz-transform-origin: 0 100%;
24         -ms-transform-origin: 0 100%;
25          -o-transform-origin: 0 100%;
26             transform-origin: 0 100%;
27 }
28 #heart:after {
29     left: 0;
30     -webkit-transform: rotate(45deg);
31        -moz-transform: rotate(45deg);
32         -ms-transform: rotate(45deg);
33          -o-transform: rotate(45deg);
34             transform: rotate(45deg);
35     -webkit-transform-origin: 100% 100%;
36        -moz-transform-origin: 100% 100%;
37         -ms-transform-origin: 100% 100%;
38          -o-transform-origin: 100% 100%;
39             transform-origin :100% 100%;
40 }

// 无穷大
 1 #infinity {
 2     position: relative;
 3     width: 212px;
 4     height: 100px;
 5 }
 6  
 7 #infinity:before,
 8 #infinity:after {
 9     content: "";
10     position: absolute;
11     top: 0;
12     left: 0;
13     width: 60px;
14     height: 60px;   
15     border: 20px solid red;
16     -moz-border-radius: 50px 50px 0 50px;
17          border-radius: 50px 50px 0 50px;
18     -webkit-transform: rotate(-45deg);
19        -moz-transform: rotate(-45deg);
20         -ms-transform: rotate(-45deg);
21          -o-transform: rotate(-45deg);
22             transform: rotate(-45deg);
23 }
24  
25 #infinity:after {
26     left: auto;
27     right: 0;
28     -moz-border-radius: 50px 50px 50px 0;
29          border-radius: 50px 50px 50px 0;
30     -webkit-transform: rotate(45deg);
31        -moz-transform: rotate(45deg);
32         -ms-transform: rotate(45deg);
33          -o-transform: rotate(45deg);
34             transform: rotate(45deg);
35 }

// 鸡蛋
#egg {
   display:block;
   width: 126px;
   height: 180px;
   background-color: red;
   -webkit-border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
   border-radius: 50%   50%  50%  50%  / 60%   60%   40%  40%;
}

// 食豆人
 1 #pacman {
 2   width: 0px;
 3   height: 0px;
 4   border-right: 60px solid transparent;
 5   border-top: 60px solid red;
 6   border-left: 60px solid red;
 7   border-bottom: 60px solid red;
 8   border-top-left-radius: 60px;
 9   border-top-right-radius: 60px;
10   border-bottom-left-radius: 60px;
11   border-bottom-right-radius: 60px;
12 }

// 提示对话框
 1 #talkbubble {
 2    width: 120px;
 3    height: 80px;
 4    background: red;
 5    position: relative;
 6    -moz-border-radius:    10px;
 7    -webkit-border-radius: 10px;
 8    border-radius:         10px;
 9 }
10 #talkbubble:before {
11    content:"";
12    position: absolute;
13    right: 100%;
14    top: 26px;
15    width: 0;
16    height: 0;
17    border-top: 13px solid transparent;
18    border-right: 26px solid red;
19    border-bottom: 13px solid transparent;
20 }

// 12 角形
 1 #burst-12 {
 2     background: red;
 3     width: 80px;
 4     height: 80px;
 5     position: relative;
 6     text-align: center;
 7 }
 8 #burst-12:before, #burst-12:after {
 9     content: "";
10     position: absolute;
11     top: 0;
12     left: 0;
13     height: 80px;
14     width: 80px;
15     background: red;
16 }
17 #burst-12:before {
18     -webkit-transform: rotate(30deg);
19        -moz-transform: rotate(30deg);
20         -ms-transform: rotate(30deg);
21          -o-transform: rotate(30deg);
22             transform: rotate(30deg);
23 }
24 #burst-12:after {
25     -webkit-transform: rotate(60deg);
26        -moz-transform: rotate(60deg);
27         -ms-transform: rotate(60deg);
28          -o-transform: rotate(60deg);
29             transform: rotate(60deg);
30 }

// 八卦
 1 #yin-yang {
 2     width: 96px;
 3     height: 48px;
 4     background: #eee;
 5     border-color: red;
 6     border-style: solid;
 7     border-width: 2px 2px 50px 2px;
 8     border-radius: 100%;
 9     position: relative;
10 }
11  
12 #yin-yang:before {
13     content: "";
14     position: absolute;
15     top: 50%;
16     left: 0;
17     background: #eee;
18     border: 18px solid red;
19     border-radius: 100%;
20     width: 12px;
21     height: 12px;
22 }
23  
24 #yin-yang:after {
25     content: "";
26     position: absolute;
27     top: 50%;
28     left: 50%;
29     background: red;
30     border: 18px solid #eee;
31     border-radius:100%;
32     width: 12px;
33     height: 12px;
34 }
```

