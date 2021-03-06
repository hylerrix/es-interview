# 网络

> DNS 域名解析、ARP 与 RARP 协议、DHCP 动态获取 IP 地址、NAT 网络地址转换、ICMP 互联网控制报文协议、IGMP 因特网组管理协议

## 基础

## 什么是 B/S 架构？

>  **浏览器-服务器（Browser/Server）结构**，简称[B/S结构](https://zh.wikipedia.org/wiki/B/S结构)，与[C/S结构](https://zh.wikipedia.org/wiki/C/S结构)不同，其客户端不需要安装专门的[软件](https://zh.wikipedia.org/wiki/软件)，只需要[浏览器](https://zh.wikipedia.org/wiki/浏览器)即可，浏览器通过[Web](https://zh.wikipedia.org/wiki/Web)[服务器](https://zh.wikipedia.org/wiki/服务器)与[数据库](https://zh.wikipedia.org/wiki/数据库)进行交互，可以方便的在不同平台下工作；服务器端可采用高性能[计算机](https://zh.wikipedia.org/wiki/计算机)，并安装[Oracle](https://zh.wikipedia.org/wiki/Oracle)、[Sybase](https://zh.wikipedia.org/wiki/Sybase)、[Informix](https://zh.wikipedia.org/w/index.php?title=Informix&action=edit&redlink=1)等大型数据库。B/S结构简化了客户端的工作，它是随着[Internet](https://zh.wikipedia.org/wiki/Internet)技术兴起而产生的，对C/S技术的改进，但该结构下服务器端的工作较重，对服务器的性能要求更高。—— [维基百科](https://zh.wikipedia.org/wiki/浏览器-服务器)

### URL 和 URI 是什么？

* URL 一般包括几大部分：
  * protocol，协议头，譬如有 http、ftp 等
  * host，主机域名或 IP 地址
  * port，端口号
  * path，目录路径
  * query，查询参数
  * fragment，即 # 后的 hash 值，一般用来定位到某个位置
* 公式
  * URL = 协议 + Web 服务器名(域名或 IP) + 目录名 + 文件名(可选)
  * URL = 协议 + Web 服务器名(域名或 IP) + CGI 程序接口名
* URL 根据访问目标不同，可以包括：服务器域名；访问的文件路径；收件地址；用户名、密码、服务器端口号；新闻组名。

```
URI 组成
                       权限                 路径
        ┌───────────────┴───────────────┐┌───┴────┐
  abc://username:password@example.com:123/path/data?key=value&key2=value2#fragid1
  └┬┘   └───────┬───────┘ └────┬────┘ └┬┘           └─────────┬─────────┘ └──┬──┘
  协议        用户信息         主机名    端口                  查询参数          片段 
```

### 和网络有关的常见终端命令有哪些？

* nc 命令：可以用于涉及 TCP 或 UDP 的相关内容，比如通过它我们可以打开 TCP 连接，发送 UDP 数据包，监听任意的 TCP 和 UDP 端口，执行端口扫描和处理 IPv4 和 IPv6 等。
  * 利用 `nc` 命令，我们可以方便地连接一个 UNIX 域套接字（socket）服务器，如：`$ nc -U /tmp/echo.sock # -U — Use UNIX domain socket`
* tcpdump

## HTTP

### 如何理解 HTTP 协议？

* HTTP 的主要特点：
  * 简单快速：当客户端向服务器端发送请求时，只是简单的填写请求路径和请求方法即可，然后就可以通过浏览器或其他方式将该请求发送就行了。
  * 灵活：HTTP 协议允许客户端和服务器端传输任意类型任意格式的数据对象。
  * 无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接，采用这种方式可以节省传输时间。（当今多数服务器支持 Keep-Alive 功能，使用服务器支持长连接，解决无连接的问题）。
  * 无状态：无状态是指协议对于事务处理没有记忆能力，服务器不知道客户端是什么状态。即客户端发送 HTTP请求后，服务器根据请求，会给我们发送数据，发送完后，不会记录信息。（使用 cookie 机制可以保持 session，解决无状态的问题）。

### HTTP/1 ~ HTTP/3 的新特性？

* HTTP 2.0：不是 HTTPS，它相当于是 HTTP 的下一代规范。使用 HTTP 2.0 时，不需要雪碧图、域名拆分等优化技术。
  * 多路复用(即一个 TCP/IP 连接可以请求多个资源)
  * 首部压缩(HTTP 头部压缩，减少体积)
  * 二进制分帧(在应用层跟传送层之间增加了一个二进制分帧层，改进传输性能，实现低延迟和高吞吐量)
  * 服务器端推送(服务端可以对客户端的一个请求发出多个响应，可以主动通知客户端)
  * 请求优先级(如果流被赋予了优先级，它就会基于这个优先级来处理，由服务器决定需要多少资源来处理该请求。)
* HTTP 2.0 和 HTTP 1.1 区别
  * HTTP 1.1中，每请求一个资源，都是需要开启一个 TCP/IP 连接的，所以对应的结果是，每一个资源对应一个 TCP/IP 请求，由于 TCP/IP 本身有并发数限制，所以当资源一多，速度就显著慢下来。
  * HTTP 2.0中，一个 TCP/IP 请求可以请求多个资源，也就是说，只要一次 TCP/IP 请求，就可以请求若干个资源，分割成更小的帧请求，速度明显提升。

### GET/POST/PUT/DELETE/OPTIONS 有什么区别？

* HTTP 主要方法
  * PUT 和 DELETE 常用于 RESTful API 设计中，App 和后端交互时常用
  * GET，获取 URI 指定的信息(文件、CGI 程序)。
  * POST，发送数据。
  * HEAD，只返回 HTTP 消息头。
  * OPTIONS，用于通知或查询通信选项。
  * PUT，替换 URI 指定的服务器上文件，若不存在则新建。
  * DELETE，删除  URI 指定的服务器上文件，若不存在则新建。
  * TRACE，将服务器收到的请求行和头部直接返回。
  * CONNECT，代理传输加密消息时使用的方法。

* GET 和 POST 区别：
  * GET 在浏览器回退时是无害的，而 POST 会再次提交请求。
  * GET 产生的 URL 地址可以被 Bookmark，而 POST 不可以。
  * GET 请求会被浏览器主动 cache，而 POST 不会，除非手动设置。
  * GET 请求只能进行url编码，而 POST 支持多种编码方式。
  * GET 请求参数会被完整保留在浏览器历史记录里，而 POST 中的参数不会被保留。
  * GET 请求在URL中传送的参数是有长度限制的，而 POST 没有。
  * 对参数的数据类型，GET 只接受 ASCII 字符，而 POST 没有限制。
  * GET 比 POST 更不安全，因为参数直接暴露在 URL 上，所以不能用来传递敏感信息。
  * GET 参数通过 URL 传递，POST 放在 Request Body 中。

### HTTP 报文结构与常见字段？

```markdown
# 请求报文
# 消息头，从 字段名:字段值 开始，一直延伸到空行。
# 消息体可以包含 POST 方法要发送的内容等。
方法<空格>URI<空格>HTTP 版本
字段名:字段值
...
空行
消息体
# 响应报文
# 消息体均为二进制：文件中读取的数据、如 CGI 程序输出的数据
HTTP 版本<空格>状态码<空格>响应短语
字段名:字段值
...
空行
消息体
```

### 常见的 HTTP 状态码都有哪些？

* 1XX 消息，代表请求已被接受，需要继续处理。这类响应是临时响应，只包含状态行和某些可选的响应头信息，并以空行结束。由于 HTTP/1.0 协议中没有定义任何 1xx 状态码，所以除非在某些试验条件下，服务器禁止向此类客户端发送 1xx 响应。
* 2XX 成功，代表请求已成功被服务器接收、理解、并接受。
* 3XX 重定向，代表需要客户端采取进一步的操作才能完成请求。通常用来重定向，后续的请求地址(重定向目标)在本次相应的 Location 域中指明。当且仅当后续的请求所使用的方法是 GET 或者 HEAD 时，用户浏览器才可以在没有用户介入的情况下自动提交所需要的后续请求。客户端应当自动监测无限循环重定向(例如：A→B→C→……→A 或 A→A)，因为这会导致服务器和客户端大量不必要的资源消耗。按照 HTTP/1.0 版规范的建议，浏览器不应自动访问超过5次的重定向。
* 4XX 客户端错误，代表客户端看起来可能发生了错误，妨碍了服务器的处理。除非响应的是一个HEAD请求，否则服务器就应该返回一个解释当前错误状况的实体，以及这是临时的还是永久性的状况。这些状态码适用于任何请求方法。浏览器应当向用户显示任何包含在此类错误响应中的实体内容。
* 5XX 服务器错误，代表了服务器在处理请求的过程中有错误或者异常状态发生，也有可能是服务器意识到以当前的软硬件资源无法完成对请求的处理。除非这是一个 HEAD 请求，否则服务器应当包含一个解释当前错误状态以及这个状况是临时的还是永久的解释信息实体。浏览器应当向用户展示任何在当前响应中被包含的实体。这些状态码适用于任何响应方法。

| 状态码 | 状态码英文名称      | 中文描述                                                     |
| ------ | ------------------- | ------------------------------------------------------------ |
| 100    | Continue            | 继续。客户端应继续其请求.                                    |
| 101    | Switching Protocols | 切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到 HTTP 的新版本协议。 |
| 102    | Processing          | 表示服务器已经收到并正在处理请求，但无响应可用。这样可以防止客户端超时，并假设请求丢失。 |

| 状态码 | 状态码英文名称                | 中文描述                                                     |
| ------ | ----------------------------- | ------------------------------------------------------------ |
| 200    | OK                            | 请求成功，请求所希望的响应头或数据体将随此响应返回。一般用于 GET 与 POST 请求。 |
| 201    | Created                       | 请求已经被实现，而且有一个新的资源已经依据请求的需要而创建，且其 URI 已经随 Location  头信息返回。假如需要的资源无法及时创建的话，应当返回 '202 Accepted'。 |
| 202    | Accepted                      | 服务器已接受请求，但尚未处理。最终该请求可能会也可能不会被执行，并且可能在处理发生时被禁止。 |
| 203    | Non-Authoritative Information | 非授权信息。请求成功。但返回的 meta 信息不在原始的服务器，而返回转换代理服务器上的一个副本 |
| 204    | No Content                    | 服务器成功处理了请求，没有返回任何内容。在未更新网页的情况下，可确保浏览器继续显示当前文档 |
| 205    | Reset Content                 | 服务器成功处理了请求，但没有返回任何内容。与204响应不同，此响应要求请求者重置文档视图。可通过此返回码清除浏览器的表单域。 |
| 206    | Partial Content               | 服务器已经成功处理了部分 GET 请求。HTTP 下载工具都是使用此类响应实现断点续传或者将一个大文档分解为多个下载段同时下载。 |
| 207    | Multi-Status                  | 代表之后的消息体将是一个 XML 消息，并且可能依照之前子请求数量的不同，包含一系列独立的响应代码。 |
| 208    | Already Reported              | DAV 绑定的成员已经在(多状态)响应之前的部分被列举，且未被再次包含。 |
| 226    | IM Used                       | 服务器已经满足了对资源的请求，对实体请求的一个或多个实体操作的结果表示。 |

| 状态码 | 状态码英文名称     | 中文描述                                                     |
| ------ | ------------------ | ------------------------------------------------------------ |
| 300    | Multiple Choices   | 多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端(例如：浏览器)选择 |
| 301    | Moved Permanently  | 永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的 URI，浏览器会自动定向到新 URI。今后任何新的请求都应使用新的 URI 代替 |
| 302    | Found              | 临时移动。与 301 类似。但资源只是临时被移动。客户端应继续使用原有 URI |
| 303    | See Other          | 查看其它地址。与 301 类似。使用 GET 和 POST 请求查看         |
| 304    | Not Modified       | 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源 |
| 305    | Use Proxy          | 使用代理。所请求的资源必须通过代理访问                       |
| 306    | Unused             | 已经被废弃的 HTTP 状态码                                     |
| 307    | Temporary Redirect | 临时重定向。与 302 类似。使用 GET 请求重定向                 |
| 308    | Permanent Redirect | 状态码                                                       |

| 400  | Bad Request                     | 客户端请求的语法错误，服务器无法理解                         |
| ---- | ------------------------------- | ------------------------------------------------------------ |
| 401  | Unauthorized                    | 请求要求用户的身份认证                                       |
| 402  | Payment Required                | 保留，将来使用                                               |
| 403  | Forbidden                       | 服务器理解请求客户端的请求，但是拒绝执行此请求               |
| 404  | Not Found                       | 服务器无法根据客户端的请求找到资源(网页)。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面 |
| 405  | Method Not Allowed              | 客户端请求中的方法被禁止                                     |
| 406  | Not Acceptable                  | 服务器无法根据客户端请求的内容特性完成请求                   |
| 407  | Proxy Authentication Required   | 请求要求代理的身份认证，与 401 类似，但请求者应当使用代理进行授权 |
| 408  | Request Time-out                | 服务器等待客户端发送的请求时间过长，超时                     |
| 409  | Conflict                        | 服务器完成客户端的 PUT 请求是可能返回此代码，服务器处理请求时发生了冲突 |
| 410  | Gone                            | 客户端请求的资源已经不存在。410 不同于 404，如果资源以前有现在被永久删除了可使用 410 代码，网站设计人员可通过 301 代码指定资源的新位置 |
| 411  | Length Required                 | 服务器无法处理客户端发送的不带 Content-Length 的请求信息     |
| 412  | Precondition Failed             | 客户端请求信息的先决条件错误                                 |
| 413  | Request Entity Too Large        | 由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个 Retry-After 的响应信息 |
| 414  | Request-URI Too Large           | 请求的 URI 过长(URI通常为网址)，服务器无法处理               |
| 415  | Unsupported Media Type          | 服务器无法处理请求附带的媒体格式                             |
| 416  | Requested range not satisfiable | 客户端请求的范围无效                                         |
| 417  | Expectation Failed              | 服务器无法满足 Expect 的请求头信息                           |

| 500  | Internal Server Error      | 服务器内部错误，无法完成请求                                 |
| ---- | -------------------------- | ------------------------------------------------------------ |
| 501  | Not Implemented            | 服务器不支持请求的功能，无法完成请求                         |
| 502  | Bad Gateway                | 充当网关或代理的服务器，从远端服务器接收到了一个无效的请求   |
| 503  | Service Unavailable        | 由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的 Retry-After 头信息中 |
| 504  | Gateway Time-out           | 充当网关或代理的服务器，未及时从远端服务器获取请求           |
| 505  | HTTP Version not supported | 服务器不支持请求的 HTTP 协议的版本，无法完成处理             |

### HTTP 的缓存机制是怎样的？

* 缓存可以简单的划分成两种类型：强缓存(200 from cache)与协商缓存(304)。
  * 强缓存(200 from cache)时，浏览器如果判断本地缓存未过期，就直接使用，无需发起 HTTP 请求。对于强缓存，在未过期时，必须更新资源路径才能发起新的请求。
  * 协商缓存(304)时，浏览器会向服务端发起 HTTP 请求，然后服务端告诉浏览器文件未改变，让浏览器使用本地缓存。对于协商缓存，使用 Ctrl + F5 强制刷新可以使得缓存无效。
* HTTP 缓存头部
  * 强缓存和协商缓存通过缓存头部区分。常用的缓存头部有：If-None-Match/E-tag、If-Modified-Since/Last-Modified、Cache-Control/Max-Age、Pragma/Expires。
  * 属于强缓存控制的：
    * (http1.1)Cache-Control/Max-Age，Max-Age 不是一个头部，它是 Cache-Control 头部的值
    * (http1.0)Pragma/Expires
  * 属于协商缓存控制的：
    * (http1.1)If-None-Match/E-tag
    * (http1.0)If-Modified-Since/Last-Modified
* 其实 HTML 页面中也有一个 meta 标签可以控制缓存方案 Pragma，不过，这种方案还是比较少用到，因为支持情况不佳，譬如缓存代理服务器肯定不支持，所以不推荐。`<META HTTP-EQUIV="Pragma" CONTENT="no-cache">`

* Max-Age 与 Expires
  * Expires 使用的是服务器端的时间
  * 但是有时候会有这样一种情况-客户端时间和服务端不同步
  * 那这样，可能就会出问题了，造成了浏览器本地的缓存无用或者一直无法过期
  * 所以一般 HTTP 1.1 后不推荐使用 Expires
  * 而Max-Age使用的是客户端本地时间的计算，因此不会有这个问题
  * 因此推荐使用Max-Age
  * 注意，如果同时启用了 Cache-Control 与 Expires，Cache-Control 优先级高

* E-tag 与 Last-Modified
  * Last-Modified：
    * 表明服务端的文件最后何时改变的
    * 它有一个缺陷就是只能精确到 1s，
    * 然后还有一个问题就是有的服务端的文件会周期性的改变，导致缓存失效
  * E-tag：
    * 是一种指纹机制，代表文件相关指纹
    * 只有文件变才会变，也只要文件变就会变，
    * 也没有精确时间的限制，只要文件一遍，立马 E-tag 就不一样了

* HTTP 各版本缓存控制头部
  * HTTP 1.0 中的缓存控制头部：
    - **Pragma**：严格来说，它不属于专门的缓存控制头部，但是它设置 no-cache 时可以让本地强缓存失效(属于编译控制，来实现特定的指令，主要是因为兼容 HTTP1.0，所以以前又被大量应用)
    - **Expires**：服务端配置的，属于强缓存，用来控制在规定的时间之前，浏览器不会发出请求，而是直接使用本地缓存，注意，Expires 一般对应服务器端时间，如 Expires：Fri, 30 Oct 1998 14:19:41
    - **If-Modified-Since/Last-Modified**：这两个是成对出现的，属于协商缓存的内容，其中浏览器的头部是 If-Modified-Since，而服务端的是 Last-Modified，它的作用是，在发起请求时，如果 If-Modified-Since 和 Last-Modified 匹配，那么代表服务器资源并未改变，因此服务端不会返回资源实体，而是只返回头部，通知浏览器可以使用本地缓存。Last-Modified，顾名思义，指的是文件最后的修改时间，而且只能精确到 1s 以内
  * HTTP 1.1 中的缓存控制头部：
    - **Cache-Control**：缓存控制头部，有 no-cache、max-age 等多种取值
    - **Max-Age**：服务端配置的，用来控制强缓存，在规定的时间之内，浏览器无需发出请求，直接使用本地缓存，注意，Max-Age是Cache-Control头部的值，不是独立的头部，譬如Cache-Control: max-age=3600，而且它值得是绝对时间，由浏览器自己计算
    - **If-None-Match/E-tag**：这两个是成对出现的，属于协商缓存的内容，其中浏览器的头部是 If-None-Match，而服务端的是 E-tag，同样，发出请求后，如果 If-None-Match 和 E-tag 匹配，则代表内容未变，通知浏览器使用本地缓存，和 Last-Modified 不同，E-tag 更精确，它是类似于指纹一样的东西，基于 FileEtag INode Mtime Size 生成，也就是说，只要文件变，指纹就会变，而且没有 1s 精确度的限制。

### HTTPS 是什么？

* HTTPS 就是安全版本的 HTTP，HTTP 请求的安全系数太低。
* HTTPS 在请求前，会建立 SSL 链接，确保接下来的通信都是加密的，无法被轻易截取分析。
* HTTPS = HTTP + SSL(安全套接字, 传输层)
  * 443 端口
  * 加密：公钥（非对称加密算法）和秘钥（对称加密算法）
  * HASH 算法用来确认信息没有被篡改，来生成签名
  * 数字证书：包含证书发布机构、有效期、公钥、证书所有者、签名使用的算法
  * 数字签名：只存在于验证阶段
  * 证书链：证书是分级的，拿到上级证书的公钥才能解密本级证书
  * 验证流程
    - 客户端发 HTTP 请求，连接到服务器的 443 端口
    - 服务端把自己的信息以数字证书的形式返回给客户端（证书内容有密钥公钥，网站地址，证书颁发机构，失效日期等）。证书中有一个公钥来加密信息，私钥由服务器持有。
    - 验证证书的合法性：客户端收到服务器的响应后会先验证证书的合法性（证书中包含的地址与正在访问的地址是否一致，证书是否过期）。
    - 生成随机密码（RSA签名）：如果验证通过，或用户接受了不受信任的证书，浏览器就会生成一个随机的对称密钥（session key）并用公钥加密，让服务端用私钥解密，解密后就用这个对称密钥进行传输了，并且能够说明服务端确实是私钥的持有者。
    - 互相用这个对称加密算法来加密和解密通信内容
* 升级为 HTTPS
  * 一般来说，如果要将网站升级成 HTTPS ，需要后端支持(后端需要申请证书等)，然后 HTTPS 的开销也比 HTTP 要大（因为需要额外建立安全链接以及加密等），所以一般来说 HTTP 2.0 配合 HTTPS 的体验更佳(因为 HTTP2.0 更快)
* SSL/TLS的握手流程
  * 浏览器请求建立 SSL 链接，并向服务端发送一个随机数，Client random 和客户端支持的加密方法，比如 RSA 加密，此时是明文传输。
  * 服务端从中选出一组加密算法与 Hash 算法，回复一个随机数，Server random，并将自己的身份信息以证书的形式发回给浏览器(证书里包含了网站地址，非对称加密的公钥，以及证书颁发机构等信息)
  * 浏览器收到服务端的证书后
    * 验证证书的合法性(颁发机构是否合法，证书中包含的网址是否和正在访问的一样)，如果证书信任，则浏览器会显示一个小锁头，否则会有提示。
    * 用户接收证书后(不管信不信任)，浏览会生产新的随机数–Premaster secret，然后证书中的公钥以及指定的加密方法加密 Premaster secret，发送给服务器。
    * 利用 Client random、Server random和 Premaster secret 通过一定的算法生成 HTTP 链接数据传输的对称加密 key- session key
    * 使用约定好的 HASH 算法计算握手消息，并使用生成的 session key 对消息进行加密，最后将之前生成的所有信息发送给服务端。
  * 服务端收到浏览器的回复
    * 利用已知的加解密方式与自己的私钥进行解密，获取 Premaster secret
    * 和浏览器相同规则生成 session key
    * 使用 session key 解密浏览器发来的握手消息，并验证Hash是否与浏览器发来的一致
    * 使用 session key 加密一段握手消息，发送给浏览器
  * 浏览器解密并计算握手消息的HASH，如果与服务端发来的HASH一致，此时握手过程结束。

## TCP

> * [TCP 的那些事儿](https://coolshell.cn/articles/11564.html)
> * [“三次握手，四次挥手”你真的懂吗？](https://zhuanlan.zhihu.com/p/53374516)
> * 35 张图解：被问千百遍的 TCP 三次握手和四次挥手面试题, https://www.cnblogs.com/xiaolincoding/p/12638546.html

### 如何理解 OSI 与 TCP/IP 模型？

* TCP/IP 模型`——`OSI 参考模型。
  * 应用层`——`应用层、表示层、会话层。
    * HTTP、FTP、SMTP 协议等
  * 传输层`——`传输层。
    * TCP、UDP
    * 确认数据传输及纠错
  * 网络层`——`网络层。
    * IP 协议、ARP 协议（地址解析协议）
    * 负责数据传输
  * 网络接口层`——`数据链路层、物理层。
    * 针对不同物理网络（如 Ethemet、FFDDI、ATM）的连接形式
* TCP 是**面向连接的、可靠的、基于字节流**的传输层通信协议。
  * **面向连接**：一定是「一对一」才能连接，不能像 UDP 协议可以一个主机同时向多个主机发送消息，也就是一对多是无法做到的；
  * **可靠的**：无论的网络链路中出现了怎样的链路变化，TCP 都可以保证一个报文一定能够到达接收端；
  * **字节流**：消息是「没有边界」的，所以无论我们消息有多大都可以进行传输。并且消息是「有序的」，当「前一个」消息没有收到的时候，即使它先收到了后面的字节，那么也不能扔给应用层去处理，同时对「重复」的报文会自动丢弃。
* TCP 模型关键词：
  * ACK —— 确认，使得确认号有效，解决不丢包的问题。
  * RST —— 重置连接（经常看到的reset by peer）就是此字段搞的鬼。
  * SYN —— 用于初如化一个连接的序列号。
  * FIN —— 该报文段的发送方已经结束向对方发送数据。
  * Window：滑动窗口，用于解决流控的。
  * TCP Flag：也就是包的类型，主要是用于操控 TCP 的状态机的。
  * Socket：由 IP 地址和端口号组成
  * Sequence Numbers（序列号）：用来解决乱序问题等
* TCP 数据的长度 = IP 总长度 - IP 首部长度 - TCP 首部长度
  * 为了网络设备硬件设计和处理方便，首部长度需要是 4字节的整数倍。

### 如何理解 TCP 的三次握手与四次挥手？

* TCP 三次握手/四次挥手的背景
  * TCP是一种面向连接的单播协议，在发送数据前，通信双方必须在彼此间建立一条连接。所谓的“连接”，其实是客户端和服务器的内存里保存的一份关于对方的信息，如ip地址、端口号等。、
  * TCP可以看成是一种字节流，它会处理IP层或以下的层的丢包、重复以及错误问题。在连接的建立过程中，双方需要交换一些连接的参数。这些参数可以放在TCP头部。
  * TCP提供了一种可靠、面向连接、字节流、传输层的服务，采用三次握手建立一个连接。采用4次挥手来关闭一个连接。
* **对于建链接的3次握手，**主要是要初始化 Sequence Number 的初始值。通信的双方要互相通知对方自己的初始化的 Sequence Number（缩写为 ISN：Inital Sequence Number）——所以叫 SYN，全称 Synchronize Sequence Numbers。也就上图中的 x 和 y。这个号要作为以后的数据通信的序号，以保证应用层接收到的数据不会因为网络上的传输的问题而乱序（TCP 会用这个序号来拼接数据）。
  * `第一次握手`：客户端发送网络包，服务端收到了。这样服务端就能得出结论：客户端的发送能力、服务端的接收能力是正常的。
  * `第二次握手`：服务端发包，客户端收到了。这样客户端就能得出结论：服务端的接收、发送能力，客户端的接收、发送能力是正常的。
  * `第三次握手`：客户端发包，服务端收到了。这样服务端就能得出结论：客户端的接收、发送能力，服务端的发送、接收能力是正常的。 
  * 三次握手意义 1：让通信双方都清楚对方的发送、接收能力都正常，并建立一个连接。
  * 三次握手意义 2：利用数据包的选项来传输特殊的信息，交换初始序列号 ISN。
    * 交换 ISN 以便让对方知道接下来接收数据的时候如何按序列号组装数据。
    * 如果 ISN 是固定的，攻击者很容易猜出后续的确认号。
* **对于4次挥手，**其实你仔细看是 2 次，因为 TCP 是全双工的，所以，发送方和接收方都需要 Fin 和 Ack。只不过，有一方是被动的，所以看上去就成了所谓的 4 次挥手。如果两边同时断连接，那就会就进入到 CLOSING 状态，然后到达 TIME_WAIT状态。
* **为什么握手要三次，挥手要四次呢？**
  * 这是因为服务端在LISTEN状态下，收到建立连接请求的SYN报文后，把ACK和SYN放在一个报文里发送给客户端。而关闭连接时，当收到对方的FIN报文时，仅仅表示对方不再发送数据了但是还能接收数据，己方是否现在关闭发送数据通道，需要上层应用来决定，因此，己方ACK和FIN一般都会分开发送。
  * 三次握手才可以阻止重复历史连接的初始化（主要原因）
  * 三次握手才可以同步双方的初始序列号，序列号的作用：
    * 接收方可以去除重复的数据；
    * 接收方可以根据数据包的序列号按序接收；
    * 可以标识发送出去的数据包中， 哪些是已经被对方收到的；
  * 三次握手才可以避免资源浪费
  * 「两次握手」：无法防止历史连接的建立，会造成双方资源的浪费，也无法可靠的同步双方序列号；
  * 「四次握手」：三次握手就已经理论上最少可靠连接建立，所以不需要使用更多的通信次数。

![](http://qiniu.ningo.cloud/interview/tcp_open_close.jpg)

### TCP 协议的四元组/头格式/滑动窗口/拥塞处理？

* TCP 四元组：可以唯一的确定一个连接
  * **源地址、源端口、目的地址、目的端口**
  * 源地址和目的地址的字段（32位）是在 IP 头部中，作用是通过 IP 协议发送报文给对方主机。
  * 源端口和目的端口的字段（16位）是在 TCP 头部中，作用是告诉 TCP 协议应该把报文发给哪个进程。

* TCP 头格式
  * 第一行：16 位源端口号，16 位目标端口号
  * 第二行：32 位序列号
    * **序列号**：在建立连接时由计算机生成的随机数作为其初始值，通过 SYN 包传给接收端主机，每发送一次数据，就「累加」一次该「数据字节数」的大小。**用来解决网络包乱序问题。**
  * 第三行：32 位确认应答号
    * **确认应答号**：指下一次「期望」收到的数据的序列号，发送端收到这个确认应答以后可以认为在这个序号以前的数据都已经被正常接收。**用来解决不丢包的问题。**
  * 第四行：4 位首部长度，6 位保留，URG/ACK/PSH/RST/SYN/FIN 各一位，16 位窗口大小
    * *ACK*：该位为 `1` 时，「确认应答」的字段变为有效，TCP 规定除了最初建立连接时的 `SYN` 包之外该位必须设置为 `1` 。
    * *RST*：该位为 `1` 时，表示 TCP 连接中出现异常必须强制断开连接。
    * *SYN*：该位为 `1` 时，表示希望建立连接，并在其「序列号」的字段进行序列号初始值的设定。
    * *FIN*：该位为 `1` 时，表示今后不会再有数据发送，希望断开连接。当通信结束希望断开连接时，通信双方的主机之间就可以相互交换 `FIN` 位为 1 的 TCP 段。
  * 第五行：16 位校验和，16 位紧急指针
  * 第六行：选项（长度可变）
  * 数据
* TCP 状态机
  
  * 网络上的传输是没有连接的，包括 TCP 也是一样的。而 TCP 所谓的“连接”，其实只不过是在通讯的双方维护一个“连接状态”。
* 滑动窗口：
  * **TCP必需要解决的可靠传输以及包乱序（reordering）的问题**，所以，TCP必需要知道网络实际的数据处理带宽或是数据处理速度，这样才不会引起网络拥塞，导致丢包。
  * Sliding Window 来做网络流控的技术之一。**TCP头里有一个字段叫Window，又叫Advertised-Window，这个字段是接收端告诉发送端自己还有多少缓冲区可以接收数据**。**于是发送端就可以根据这个接收端的处理能力来发送数据，而不会导致接收端处理不过来**。 为了说明滑动窗口，我们需要先看一下TCP缓冲区的一些数据结构：
    * 接收端LastByteRead指向了TCP缓冲区中读到的位置，NextByteExpected指向的地方是收到的连续包的最后一个位置，LastByteRcved指向的是收到的包的最后一个位置，我们可以看到中间有些数据还没有到达，所以有数据空白区。
    - 发送端的LastByteAcked指向了被接收端Ack过的位置（表示成功发送确认），LastByteSent表示发出去了，但还没有收到成功确认的Ack，LastByteWritten指向的是上层应用正在写的地方。
    - 接收端在给发送端回ACK中会汇报自己的AdvertisedWindow = MaxRcvBuffer – LastByteRcvd – 1;
    - 而发送方会根据这个窗口来控制发送数据的大小，以保证接收方可以处理。
  * Zero Window
  * Silly Window Syndrome

### TCP 的重传/RTT 算法？

* 重传
  * TCP 要保证所有的数据包都可以到达，所以，必需要有重传机制。
  * 接收端给发送端的 ACK 确认只会确认最后一个连续的包。
    * 比如，发送端发了1,2,3,4,5一共五份数据，接收端收到了1，2，于是回ack 3，然后收到了4（注意此时3没收到），此时的TCP会怎么办？我们要知道，因为正如前面所说的，**SeqNum和Ack是以字节数为单位，所以ack的时候，不能跳着确认，只能确认最大的连续收到的包**，不然，发送端就以为之前的都收到了。
  * 超时重传机制
  * 快速重传机制：不以时间驱动，而以数据驱动重传。
    * 如果，包没有连续到达，就 ACK 最后那个可能被丢了的包，如果发送方连续收到 3 次相同的 ACK，就重传。Fast Retransmit 的好处是不用等 timeout 了再重传。
    * Fast Retransmit只解决了一个问题，就是timeout的问题，它依然面临一个艰难的选择，就是，是重传之前的一个还是重传所有的问题。也许发送端发了20份数据，是#6，#10，#20传来的呢。这样，发送端很有可能要重传从2到20的这堆数据（这就是某些TCP的实际的实现）。可见，这是一把双刃剑。
  * SACK 方法：在TCP头里加一个SACK的东西
    * ACK还是Fast Retransmit的ACK，SACK则是汇报收到的数据碎版。
    * 这时，在发送端就可以根据回传的SACK来知道哪些数据到了，哪些没有到。
    * 比如收到收到 1~300 后，又收到 500~700、900~1100，返回 `ACK 300, SACK 900~1100, 500~700`。
  * Duplicate SACK – 重复收到数据的问题
    * Duplicate SACK又称D-SACK，**其主要使用了SACK来告诉发送方有哪些数据被重复接收了**。[RFC-2883 ](http://www.ietf.org/rfc/rfc2883.txt)里有详细描述和示例。下面举几个例子（来源于[RFC-2883](http://www.ietf.org/rfc/rfc2883.txt)）
    * D-SACK使用了SACK的第一个段来做标志，
      - 如果SACK的第一个段的范围被ACK所覆盖，那么就是D-SACK
      - 如果SACK的第一个段的范围被SACK的第二个段覆盖，那么就是D-SACK
    * 引入好处：
      * 可以让发送方知道，是发出去的包丢了，还是回来的ACK包丢了。
      * 是不是自己的timeout太小了，导致重传。
      * 网络上出现了先发的包后到的情况（又称reordering）
      * 网络上是不是把我的数据包给复制了。
* RTT 算法，Round Trip Time：一个数据包从发出去到回来的时间
  * 背景：TCP 的 Timeout 设置长或者短都有隐患。长了效率低，短了发送频率太大网络拥堵导致发送频率更大。
  * 通过 RTT 就大约知道需要多少的时间，从而可以方便地设置 Timeout——RTO（Retransmission TimeOut）。
  * 经典算法思想：
    * 先采样RTT，记下最近好几次的RTT值。公式为：（其中的 α 取值在0.8 到 0.9之间，这个算法英文叫Exponential weighted moving average，中文叫：加权移动平均）`SRTT = ( α \* SRTT ) + ((1- α) \* RTT)`。
    * 然后做平滑计算SRTT（ Smoothed RTT）。
    * 开始计算RTO。`RTO = min [ UBOUND,  max [ LBOUND,  (β \* SRTT) ]  ]`。
    * UBOUND 是最大的timeout时间，上限值；LBOUND是最小的timeout时间，下限值；β 值一般在1.3到2.0之间。
    * 终极问题——你是用第一次发数据的时间和ack回来的时间做RTT样本值（算大了），还是用重传的时间和ACK回来的时间做RTT样本值（算小了）？
  * Karn / Partridge 算法：1987 年
    * 特点：**忽略重传，不把重传的RTT做采样**
    * 但是，这样一来，又会引发一个大BUG——**如果在某一时间，网络闪动，突然变慢了，产生了比较大的延时，这个延时导致要重转所有的包（因为之前的RTO很小），于是，因为重转的不算，所以，RTO就不会被更新，这是一个灾难**。 于是Karn算法用了一个取巧的方式——只要一发生重传，就对现有的RTO值翻倍（这就是所谓的 Exponential backoff），很明显，这种死规矩对于一个需要估计比较准确的RTT也不靠谱。
  * Jacobson / Karels 算法：1988 年
    * 前面两种算法用的都是“加权移动平均”，这种方法最大的毛病就是如果RTT有一个大的波动的话，很难被发现，因为被平滑掉了。
    * 这个算法引入了最新的RTT的采样和平滑过的SRTT的差距做因子来计算。
* 拥塞处理
  * 背景：
    * 如果网络上的延时突然增加，那么，TCP对这个事做出的应对只有重传数据，但是，重传会导致网络的负担更重，于是会导致更大的延迟以及更多的丢包，于是，这个情况就会进入恶性循环被不断地放大。试想一下，如果一个网络内有成千上万的TCP连接都这么行事，那么马上就会形成“网络风暴”，TCP这个协议就会拖垮整个网络。
    * TCP不是一个自私的协议，当拥塞发生的时候，要做自我牺牲。就像交通阻塞一样，每个车都应该把路让出来，而不要再去抢路了。
  * 主要是四个算法：
    * 慢热启动算法 – Slow Start：刚刚加入网络的连接，一点一点地提速，不要一上来就像那些特权车一样霸道地把路占满。
      * 连接建好的开始先初始化cwnd = 1，表明可以传一个MSS大小的数据。
      * 每当收到一个ACK，cwnd++; 呈线性上升
      * 每当过了一个RTT，cwnd = cwnd*2; 呈指数让升
      * 还有一个ssthresh（slow start threshold），是一个上限，当cwnd >= ssthresh时，就会进入“拥塞避免算法”（后面会说这个算法）
    * 拥塞避免算法 – Congestion Avoidance
    * 拥塞发生算法
    * 快速恢复算法 – Fast Recovery
  * 其它算法：
    * TCP Vegas 拥塞控制算法
    * HSTCP(High Speed TCP) 算法
    * TCP BIC 算法

### TCP 的长连接和短连接什么区别？

> Keep-Alive 不会永远保持，它有一个持续时间，一般在服务器中配置(如 Apache)，另外长连接需要客户端和服务器都支持时才有效

* TCP/IP 层面的定义：
  - 长连接：一个 TCP/IP 连接上可以连续发送多个数据包，在 TCP 连接保持期间，如果没有数据包发送，需要双方发检测包以维持此连接，一般需要自己做在线维持(类似于心跳包)
  - 短连接：通信双方有数据交互时，就建立一个 TCP 连接，数据发送完成后，则断开此 TCP 连接
* HTTP 层面的定义：
  - HTTP 1.0 中，默认使用的是短连接，也就是说，浏览器没进行一次 HTTP 操作，就建立一次连接，任务结束就中断连接，譬如每一个静态资源请求时都是一个单独的连接。
  - HTTP 1.1 起，默认使用长连接，使用长连接会有这一行 `Connection: keep-alive`，在长连接的情况下，当一个网页打开完成后，客户端和服务端之间用于传输 HTTP 的 TCP 连接不会关闭，如果客户端再次访问这个服务器的页面，会继续使用这一条已经建立的连接。
* KeepAlive 机制
  - TCP 的连接，实际上是一种纯软件层面的概念，在物理层面并没有“连接”这种概念。TCP 通信双方建立交互的连接，但是并不是一直存在数据交互，有些连接会在数据交互完毕后，主动释放连接，而有些不会。在长时间无数据交互的时间段内，交互双方都有可能出现掉电、死机、异常重启等各种意外，当这些意外发生之后，这些 TCP 连接并未来得及正常释放，在软件层面上，连接的另一方并不知道对端的情况，它会一直维护这个连接，长时间的积累会导致非常多的半打开连接，造成端系统资源的消耗和浪费，为了解决这个问题，在传输层可以利用 TCP 的 KeepAlive 机制实现来实现。主流的操作系统基本都在内核里支持了这个特性。
  - TCP KeepAlive 的基本原理是，隔一段时间给连接对端发送一个探测包，如果收到对方回应的 ACK，则认为连接还是存活的，在超过一定重试次数之后还是没有收到对方的回应，则丢弃该 TCP 连接。

### 握手挥手的 SYN/ISN/MSL/TIME_AWAIT

* SYN
  * **关于建连接时SYN超时**。
    * 试想一下，如果server端接到了client发的SYN后回了SYN-ACK后client掉线了，server端没有收到client回来的ACK，那么，这个连接处于一个中间状态，即没成功，也没失败。
    * 于是，server端如果在一定时间内没有收到的TCP会重发SYN-ACK。在Linux下，默认重试次数为5次，重试的间隔时间从1s开始每次都翻售，5次的重试时间间隔为1s, 2s, 4s, 8s, 16s，总共31s，第5次发出后还要等32s都知道第5次也超时了，所以，总共需要 1s + 2s + 4s+ 8s+ 16s + 32s = 2^6 -1 = 63s，TCP才会把断开这个连接。
  * **关于SYN Flood攻击**。
    * 一些恶意的人就为此制造了 SYN Flood攻击——给服务器发了一个SYN后，就下线了，于是服务器需要默认等63s才会断开连接，这样，攻击者就可以把服务器的syn连接的队列耗尽，让正常的连接请求不能处理。
      * 最基本的DoS攻击就是利用合理的服务请求来占用过多的服务资源，从而使合法用户无法得到服务的响应。syn flood属于Dos攻击的一种。
      * 如果恶意的向某个服务器端口发送大量的SYN包，则可以使服务器打开大量的半开连接，分配TCB（Transmission Control Block）, 从而消耗大量的服务器资源，同时也使得正常的连接请求无法被相应。当开放了一个TCP端口后，该端口就处于Listening状态，不停地监视发到该端口的Syn报文，一 旦接收到Client发来的Syn报文，就需要为该请求分配一个TCB，通常一个TCB至少需要280个字节，在某些操作系统中TCB甚至需要1300个字节，并返回一个SYN ACK命令，立即转为SYN-RECEIVED即半开连接状态。系统会为此耗尽资源。
  * 于是，Linux下给了一个叫**tcp_syncookies**的参数来应对这个事——当SYN队列满了后，TCP会通过源地址端口、目标地址端口和时间戳打造出一个特别的Sequence Number发回去（又叫cookie），如果是攻击者则不会有响应，如果是正常连接，则会把这个 SYN Cookie发回来，然后服务端可以通过cookie建连接（即使你不在SYN队列中）。
    * 请注意，**请先千万别用tcp_syncookies来处理正常的大负载的连接的情况**。因为，synccookies是妥协版的TCP协议，并不严谨。对于正常的请求，你应该调整三个TCP参数可供你选择，第一个是：tcp_synack_retries 可以用他来减少重试次数；第二个是：tcp_max_syn_backlog，可以增大SYN连接数；第三个是：tcp_abort_on_overflow 处理不过来干脆就直接拒绝连接了。
  * 常见的防攻击方法：
    * 无效连接的监视释放：监视系统的半开连接和不活动连接，当达到一定阈值时拆除这些连接，从而释放系统资源。这种方法对于所有的连接一视同仁，而且由于SYN Flood造成的半开连接数量很大，正常连接请求也被淹没在其中被这种方式误释放掉，因此这种方法属于入门级的SYN Flood方法。
    * 延缓 TCB 分配方法：消耗服务器资源主要是因为当SYN数据报文一到达，系统立即分配TCB，从而占用了资源。而SYN Flood由于很难建立起正常连接，因此，当正常连接建立起来后再分配TCB则可以有效地减轻服务器资源的消耗。常见的方法是使用Syn Cache和Syn Cookie技术。
    * SYN Cache 技术：系统在收到一个SYN报文时，在一个专用HASH表中保存这种半连接信息，直到收到正确的回应ACK报文再分配TCB。这个开销远小于TCB的开销。当然还需要保存序列号。
    * SYN Cookie 技术：Syn Cookie技术则完全不使用任何存储资源，这种方法比较巧妙，它使用一种特殊的算法生成Sequence Number，这种算法考虑到了对方的IP、端口、己方IP、端口的固定信息，以及对方无法知道而己方比较固定的一些信息，如MSS(Maximum Segment Size，最大报文段大小，指的是TCP报文的最大数据报长度，其中不包括TCP首部长度。)、时间等，在收到对方 的ACK报文后，重新计算一遍，看其是否与对方回应报文中的（Sequence Number-1）相同，从而决定是否分配TCB资源。
    * 使用 SYN Proxy 防火墙：一种方式是防止墙dqywb连接的有效性后，防火墙才会向内部服务器发起SYN请求。防火墙代服务器发出的SYN ACK包使用的序列号为c, 而真正的服务器回应的序列号为c', 这样，在每个数据报文经过防火墙的时候进行序列号的修改。另一种方式是防火墙确定了连接的安全后，会发出一个safe reset命令，client会进行重新连接，这时出现的syn报文会直接放行。这样不需要修改序列号了。但是，client需要发起两次握手过程，因此建立连接的时间将会延长。
* ISN
* 三次握手的一个重要功能是客户端和服务端交换ISN(Initial Sequence Number), 以便让对方知道接下来接收数据的时候如何按序列号组装数据。如果ISN是固定的，攻击者很容易猜出后续的确认号。
  * `ISN = M + F(localhost, localport, remotehost, remoteport)`。M是一个计时器，每隔4毫秒加1。 F是一个Hash算法，根据源IP、目的IP、源端口、目的端口生成一个随机数值。要保证hash算法不能被外部轻易推算得出。

  * **关于ISN的初始化**。ISN是不能hard code的，不然会出问题的——比如：如果连接建好后始终用1来做ISN，如果client发了30个segment过去，但是网络断了，于是 client重连，又用了1做ISN，但是之前连接的那些包到了，于是就被当成了新连接的包，此时，client的Sequence Number 可能是3，而Server端认为client端的这个号是30了。全乱了。[RFC793](http://tools.ietf.org/html/rfc793)中说，ISN会和一个假的时钟绑在一起，这个时钟会在每4微秒对ISN做加一操作，直到超过2^32，又从0开始。这样，一个ISN的周期大约是4.55个小时。因为，我们假设我们的TCP Segment在网络上的存活时间不会超过Maximum Segment Lifetime（缩写为MSL – [Wikipedia语条](http://en.wikipedia.org/wiki/Maximum_Segment_Lifetime)），所以，只要MSL的值小于4.55小时，那么，我们就不会重用到ISN。
* TIME_WAIT

  * **关于 MSL 和 TIME_WAIT**。通过上面的ISN的描述，相信你也知道MSL是怎么来的了。我们注意到，在TCP的状态图中，从TIME_WAIT状态到CLOSED状态，有一个超时设置，这个超时设置是 2*MSL（[RFC793](http://tools.ietf.org/html/rfc793)定义了MSL为2分钟，Linux设置成了30s）为什么要这有TIME_WAIT？为什么不直接给转成CLOSED状态呢？主要有两个原因：1）TIME_WAIT确保有足够的时间让对端收到了ACK，如果被动关闭的那方没有收到Ack，就会触发被动端重发Fin，一来一去正好2个MSL，2）有足够的时间让这个连接不会跟后面的连接混在一起（你要知道，有些自做主张的路由器会缓存IP数据包，如果连接被重用了，那么这些延迟收到的包就有可能会跟新连接混在一起）。你可以看看这篇文章《[TIME_WAIT and its design implications for protocols and scalable client server systems](http://www.serverframework.com/asynchronousevents/2011/01/time-wait-and-its-design-implications-for-protocols-and-scalable-servers.html)》
  * **关于TIME_WAIT数量太多**。从上面的描述我们可以知道，TIME_WAIT是个很重要的状态，但是如果在大并发的短链接下，TIME_WAIT 就会太多，这也会消耗很多系统资源。只要搜一下，你就会发现，十有八九的处理方式都是教你设置两个参数，一个叫**tcp_tw_reuse**，另一个叫**tcp_tw_recycle**的参数，这两个参数默认值都是被关闭的，后者recyle比前者resue更为激进，resue要温柔一些。另外，如果使用tcp_tw_reuse，必需设置tcp_timestamps=1，否则无效。这里，你一定要注意，**打开这两个参数会有比较大的坑——可能会让TCP连接出一些诡异的问题**（因为如上述一样，如果不等待超时重用连接的话，新的连接可能会建不上。正如[官方文档](https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt)上说的一样“**It should not be changed without advice/request of technical experts**”）。
  * **关于tcp_tw_reuse**。官方文档上说tcp_tw_reuse 加上tcp_timestamps（又叫PAWS, for Protection Against Wrapped Sequence Numbers）可以保证协议的角度上的安全，但是你需要tcp_timestamps在两边都被打开（你可以读一下[tcp_twsk_unique](http://lxr.free-electrons.com/ident?i=tcp_twsk_unique)的源码 ）。我个人估计还是有一些场景会有问题。
   * **关于tcp_tw_recycle**。如果是tcp_tw_recycle被打开了话，会假设对端开启了tcp_timestamps，然后会去比较时间戳，如果时间戳变大了，就可以重用。但是，如果对端是一个NAT网络的话（如：一个公司只用一个IP出公网）或是对端的IP被另一台重用了，这个事就复杂了。建链接的SYN可能就被直接丢掉了（你可能会看到connection time out的错误）（如果你想观摩一下Linux的内核代码，请参看源码[ tcp_timewait_state_process](http://lxr.free-electrons.com/ident?i=tcp_timewait_state_process)）。
  * **关于tcp_max_tw_buckets**。这个是控制并发的TIME_WAIT的数量，默认值是180000，如果超限，那么，系统会把多的给destory掉，然后在日志里打一个警告（如：time wait bucket table overflow），官网文档说这个参数是用来对抗DDoS攻击的。也说的默认值180000并不小。这个还是需要根据实际情况考虑。
  * Again，使用tcp_tw_reuse和tcp_tw_recycle来解决TIME_WAIT的问题是非常非常危险的，因为这两个参数违反了TCP协议（[RFC 1122](http://tools.ietf.org/html/rfc1122)）
  * 其实，TIME_WAIT表示的是你主动断连接，所以，这就是所谓的“不作死不会死”。试想，如果让对端断连接，那么这个破问题就是对方的了，呵呵。另外，如果你的服务器是于HTTP服务器，那么设置一个[HTTP的KeepAlive](http://en.wikipedia.org/wiki/HTTP_persistent_connection)有多重要（浏览器会重用一个TCP连接来处理多个HTTP请求），然后让客户端去断链接（你要小心，浏览器可能会非常贪婪，他们不到万不得已不会主动断连接）。

### TCP 和 UDP 有什么区别？

- TCP（FTP 文件传输、HTTP/HTTPS）
  -	面向连接
  -	每条连接一对一
  -	提供可靠的交付服务
  -	全双工通信
  -	面向字节流
- UDP（DNS、SNMP、视频、音频、广播通信）
  - 无连接
  - 不保证可靠交付
  - 面向报文
  - 无拥塞控制
  - 支持一对一、一对多、多对一和多对多的交互通信
  - 首部开销小：只有四个字段，源端口、目的端口、长度、校验和
    - 头部长度是固定的，无需【首部长度字段】来记录长度
- UDP 的头格式（只有 8 个字节，64 位）：
  - 第一行：16 位源端口号，16 位目标端口号
  - 第二行：16 位包长度，16 位校验和
  - 数据=内容

### 如何理解 Socket？

* 网络上的两个程序通过一个双向的通信连接实现数据的交换，这个连接的一端称为一个 socket（套接字），因此建立网络通信连接至少要一对端口号。**socket 本质是对 TCP/IP 协议栈的封装，它提供了一个针对 TCP 或者 UDP 编程的接口，并不是另一种协议**。通过 socket，你可以使用 TCP/IP 协议。
  * 它可以实现底层通信，几乎所有的应用层都是通过 socket 进行通信的。
  * 对 TCP/IP 协议进行封装，便于应用层协议调用，属于二者之间的中间抽象层。
  * TCP/IP 协议族中，传输层存在两种通用协议: TCP、UDP，两种协议不同，因为不同参数的 socket 实现过程也不一样。

### TCP 和 IP 有什么区别？

* `IP` 层是「不可靠」的，它不保证网络包的交付、不保证网络包的按序交付、也不保证网络包中的数据的完整性。
* 如果需要保障网络数据包的可靠性，那么就需要由上层（传输层）的 `TCP` 协议来负责。
* 因为 TCP 是一个工作在**传输层**的**可靠**数据传输的服务，它能确保接收端接收的网络包是**无损坏、无间隔、非冗余和按序的。**

## IP

### 如何理解 IPv4？

> [IP 基础知识全家桶，45 张图一套带走](https://zhuanlan.zhihu.com/p/138235610)

* IP 在 TCP/IP 参考模型中处于第三层，也就是网络层（实现主机与主机之间的通信，也叫点对点通信）。
  * IP 负责将数据包发送给最终的目的地址；MAC 只负责某一个区间之间的通信传输。
  * 源 IP 地址和目标 IP 地址在传输过程中是不会变化的，只有源 MAC 地址和目标 MAC 一直在变化。
* IPv4：32 位正整数来表示，IP 地址在计算机是以二进制的方式处理的。
* IPv4 地址长度共 32 位，是以每 8 位作为一组，并用点分十进制的表示方式。
* 最大容量：2^32 约 43 亿台计算机。一个设备可以有多个 IP，IP 不可能被 100% 填满。
  * A 类：首部 0，网络号 7 位，主机号 24 位
    * `0.0.0.0~127.255.255.255`，最大主机数 16777214
    * 私有 IP 地址范围：`10.0.0.0~10.255.255.255`
    * 环回地址：`127.0.0.1`
  * B 类：首部 10，网络号 14 位，主机号 16 位
    * `128.0.0.0~191.255.255.255`，最大主机数 65534
    * 私有 IP 地址范围：`172.16.0.0~172.31.255.255`
  * C 类：首部 110，网络号 21 位，主机号 8 位
    * `192.0.0.0~223.255.255`，最大主机数 254
    * 私有 IP 地址范围：`192.168.0.0~192.168.255.255`。
  * D 类：首部 1110，组播地址 28 位
    * 常被用来 IP 多播
  * E 类：首部 1111，留待后用 28 位
* 广播：
  * 主机号全为 1 指定某个网络下的所有主机，用于广播；主机号全为 0 指定某个网络。
  * 广播地址 - 本地广播
  * 广播地址 - 直接广播。
* 多播：用于将包发送给特定组内的所有主机。
  * 使用的 D 类地址，其前四位是 1110 就表示是多播地址，而剩下的 28 位是多播的组编号。
  * 从 `224.0.0.0 ~ 239.255.255.255` 都是多播的可用范围，其划分为以下三类：
    * `224.0.0.0 ~ 224.0.0.255` 为预留的组播地址，只能在局域网中，路由器是不会进行转发的。
    * `224.0.1.0 ~ 238.255.255.255` 为用户可用的组播地址，可以用于 Internet 上。
    * `239.0.0.0 ~ 239.255.255.255` 为本地管理组播地址，可供内部网在内部使用，仅在特定的本地范围内有效。
* 组播。
* IPV4 的缺点：同一网络下没有地址层次。C 类地址太少，B 类地址对一般企业太多。
* 私有 IP 地址通常是内部的 IT 人员管理，公有 IP 地址是由 `ICANN` 组织管理，中文叫「互联网名称与数字地址分配机构」。

### 如何理解 IPv4 的 CIDR/NAT/ICMP/IGMP/ARP/MAC？

* CIDR：无分类地址的方案
  * 表示形式 a.b.c.d/x，其中 /x 表示前 x 位属于网络号， x 的范围是 0 ~ 32，这就使得 IP 地址更加具有灵活性。
* ARP 是借助 **ARP 请求与 ARP 响应**两种类型的包确定 MAC 地址的。
  * 主机会通过**广播发送 ARP 请求**，这个包中包含了想要知道的 MAC 地址的主机 IP 地址。
  * 当同个链路中的所有设备收到 ARP 请求时，会去拆开 ARP 请求包里的内容，如果 ARP 请求包中的目标 IP 地址与自己的 IP 地址一致，那么这个设备就将自己的 MAC 地址塞入 **ARP 响应包**返回给主机。
  * RARP 协议是已知 MAC 地址求 IP 地址

* NAT 技术：可更换 IP 地址（由于 NAT/NAPT 都依赖于自己的转换表）
  * 简单的来说 NAT 就是通过 NAPT  路由器的转换表同个公司、家庭、教室内的主机对外部通信时，把私有 IP 地址转换成公有 IP 地址。
  * 缺点：
    * 外部无法主动与 NAT 内部服务器建立连接，因为 NAPT 转换表没有转换记录。
    * 转换表的生成与转换操作都会产生性能开销。
    * 通信过程中，如果 NAT 路由器重启了，所有的 TCP 连接都将被重置。
  * 解决缺点 - Nat 穿透技术：让网络应用程序主动发现自己位于 NAT 设备之后，并且会主动获得 NAT 设备的公有 IP，并为自己建立端口映射条目，注意这些都是 NAT设备后的应用程序自动完成的。
* ICMP：Internet Control Message Protocol，互联网控制报文协议。
  * 功能：确认 IP 包是否成功送达目标地址、报告发送过程中 IP 包被废弃的原因和改善网络设置等。
  * 在 `IP` 通信中如果某个 `IP` 包因为某种原因未能达到目标地址，那么这个具体的原因将由 ICMP 负责通知。
  * 分类：
    * 一类是用于诊断的查询消息，也就是「**查询报文类型**」：`0: Echo Reply`， `8: Echo Request`。
    * 另一类是通知出错原因的错误消息，也就是「**差错报文类型**」：`3: Destination Unreachable`，`4: Source Quench`，`5: redirect`，`11: Time Exceeded`。
* IGMP：因特网组管理协议，工作在主机（组播成员）和最后一跳路由之间
  * 可以管理 D 类地址组播时的组关系
  * IGMP 报文向路由器申请加入和退出组播组，默认情况下路由器是不会转发组播包到连接中的主机，除非主机通过 IGMP 加入到组播组，主机申请加入到组播组时，路由器就会记录 IGMP 路由器表，路由器后续就会转发组播包到对应的主机了。
  * IGMP 报文采用 IP 封装，IP 头部的协议号为 2，而且 TTL 字段值通常为 1，因为 IGMP 是工作在主机与连接的路由器之间。
  * IGMP 分为 IGMPv1、IGMPv2、IGMPv3，其中 IGMPv2 的重要工作机制：
    * 常规查询机制与响应工作机制
    * 离开组播组工作机制

### 如何理解 IPv4 的子网掩码/MTU/MSS/分片重组/DHCP？

* 子网掩码：
  * 掩码的意思就是掩盖掉主机号，剩余的就是网络号。
  * 将子网掩码和 IP 地址按位计算 AND，就可得到网络号。`10.100.122.2 & 255.255.255.0 === 10.100.122.0`
  * 子网掩码还有一个作用，那就是划分子网。
  * 子网划分实际上是将主机地址分为两个部分：子网网络地址和子网主机地址。
    * 未做子网划分的 IP 地址：网络地址＋主机地址
    * 做子网划分后的 IP 地址：网络地址＋（子网网络地址＋子网主机地址）
* `MTU`：一个网络包的最大长度，以太网中一般为 `1500` 字节；
* `MSS`：除去 IP 和 TCP 头部之后，一个网络包所能容纳的 TCP 数据的最大长度；
* IP 分片与重组：
  * 当 IP 数据包大小大于 MTU 时， IP 数据包就会被分片。IP 数据报只能由目标主机重组。
  * 每种使用目的不同的数据链路的最大传输单元 `MTU` 都是不相同的，如 FDDI 数据链路 MTU 4352、最常见的以太网的 MTU 是 1500 字节等。
  * 在分片传输中，一旦某个分片丢失，则会造成整个 IP 数据报作废，所以 TCP 引入了 `MSS` 也就是在 TCP 层进行分片不由 IP 层分片，那么对于 UDP 我们尽量不要发送一个大于 `MTU` 的数据报文。
* DHCP：通过 DHCP 服务器动态获取 IP 地址
  * 流程
    * 客户端首先发起 **DHCP 发现报文（DHCP DISCOVER）** 的 IP 数据报，由于客户端没有 IP 地址，也不知道 DHCP 服务器的地址，所以使用的是 UDP **广播**通信，其使用的广播目的地址是 255.255.255.255（端口 67） 并且使用 0.0.0.0（端口 68） 作为源 IP 地址。DHCP 客户端将该 IP 数据报传递给链路层，链路层然后将帧广播到所有的网络中设备。
    * DHCP 服务器收到 DHCP 发现报文时，用 **DHCP 提供报文（DHCP OFFER）** 向客户端做出响应。该报文仍然使用 IP 广播地址 255.255.255.255，该报文信息携带服务器提供可租约的 IP 地址、子网掩码、默认网关、DNS 服务器以及 **IP 地址租用期**。
    * 客户端收到一个或多个服务器的 DHCP 提供报文后，从中选择一个服务器，并向选中的服务器发送 **DHCP 请求报文（DHCP REQUEST**进行响应，回显配置的参数。
    * 最后，服务端用 **DHCP ACK 报文**对 DHCP 请求报文进行响应，应答所要求的参数。
  * 一旦客户端收到 DHCP ACK 后，交互便完成了，并且客户端能够在租用期内使用 DHCP 服务器分配的 IP 地址。
  * 如果租约的 DHCP IP 地址快期后，客户端会向服务器发送 DHCP 请求报文：
    * 服务器如果同意继续租用，则用 DHCP ACK 报文进行应答，客户端就会延长租期。
    * 服务器如果不同意继续租用，则用 DHCP NACK 报文，客户端就要停止使用租约的 IP 地址。
  * 由于全程都是使用 UDP 广播通信，所以有了 **DHCP 中继代理**。有了 DHCP 中继代理以后，**对不同网段的 IP 地址分配也可以由一个 DHCP 服务器统一进行管理。**
    * DHCP 客户端会向 DHCP 中继代理发送 DHCP 请求包，而 DHCP 中继代理在收到这个广播包以后，再以**单播**的形式发给 DHCP 服务器。
    * 服务器端收到该包以后再向 DHCP 中继代理返回应答，并由 DHCP 中继代理将此包广播给 DHCP 客户端。
  * 因此，DHCP 服务器即使不在同一个链路上也可以实现统一分配和管理IP地址。

### 如何理解 IPv6？

* 特点：
  * 数量惊人的可分配地址
  * 更好的安全性和扩展性
  * 可自动配置，即使没有 DHCP 服务器也可以实现自动分配IP地址
  * 包头包首部长度采用固定的值 40 字节，去掉了包头校验和，简化了首部结构，减轻了路由器负荷，大大提高了传输的性能。
  * IPv6 有应对伪造 IP 地址的网络安全功能以及防止线路窃听的功能，大大提升了安全性。
* IPv6 地址长度是 128 位，是以每 16 位作为一组，每组用冒号 「:」 隔开。
* 如果出现连续的 0 时还可以将这些 0 省略，并用两个冒号 「::」隔开。但是，一个 IP 地址中只允许出现一次两个连续的冒号。
* 类型地址：
  * 单播地址，用于一对一的通信。
    * 在同一链路单播通信，不经过路由器，可以使用**链路本地单播地址**，IPv4 没有此类型
    * 在内网里单播通信，可以使用**唯一本地地址**，相当于 IPv4 的私有 IP
    * 在互联网通信，可以使用**全局单播地址**，相当于 IPv4 的公有 IP
  * 组播地址，用于一对多的通信
  * 任播地址，用于通信最近的节点，最近的节点是由路由协议决定
  * 没有广播地址
* 未定义：`::/128`；环回地址：`::1/128`；唯一本地地址：`FC00::/7`；链路本地单播地址：`FE80::/10`；多播地址：`FF00::/8`。
* IPv6 相比 IPv4 的首部改进：
  - **取消了首部校验和字段。** 因为在数据链路层和传输层都会校验，因此 IPv6 直接取消了 IP 的校验。
  - **取消了分片/重新组装相关字段。** 分片与重组是耗时的过程，IPv6 不允许在中间路由器进行分片与重组，这种操作只能在源与目标主机，这将大大提高了路由器转发的速度。
  - **取消选项字段。** 选项字段不再是标准 IP 首部的一部分了，但它并没有消失，而是可能出现在 IPv6 首部中的「下一个首部」指出的位置上。删除该选项字段使的 IPv6 的首部成为固定长度的 `40` 字节。

## DNS/CDN...

### DNS 域名解析机制

1. 客户端首先会发出一个 DNS 请求，问 [http://www.server.com](https://link.zhihu.com/?target=http%3A//www.server.com) 的 IP 是啥，并发给本地 DNS 服务器（也就是客户端的 TCP/IP 设置中填写的 DNS 服务器地址）。
2. 本地域名服务器收到客户端的请求后，如果缓存里的表格能找到 [http://www.server.com](https://link.zhihu.com/?target=http%3A//www.server.com)，则它直接返回 IP 地址。如果没有，本地 DNS 会去问它的根域名服务器：“老大， 能告诉我 [http://www.server.com](https://link.zhihu.com/?target=http%3A//www.server.com) 的 IP 地址吗？” 根域名服务器是最高层次的，它不直接用于域名解析，但能指明一条道路。
3. 根 DNS 收到来自本地 DNS 的请求后，发现后置是 .com，说：“[http://www.server.com](https://link.zhihu.com/?target=http%3A//www.server.com) 这个域名归 .com 区域管理”，我给你 .com 顶级域名服务器地址给你，你去问问它吧。”
4. 本地 DNS 收到顶级域名服务器的地址后，发起请求问“老二， 你能告诉我 [http://www.server.com](https://link.zhihu.com/?target=http%3A//www.server.com) 的 IP 地址吗？”
5. 顶级域名服务器说：“我给你负责 [http://www.server.com](https://link.zhihu.com/?target=http%3A//www.server.com) 区域的权威 DNS 服务器的地址，你去问它应该能问到”。
6. 本地 DNS 于是转向问权威 DNS 服务器：“老三，[http://www.server.com](https://link.zhihu.com/?target=http%3A//www.server.com)对应的IP是啥呀？” [http://server.com](https://link.zhihu.com/?target=http%3A//server.com) 的权威 DNS 服务器，它是域名解析结果的原出处。为啥叫权威呢？就是我的域名我做主。
7. 权威 DNS 服务器查询后将对应的 IP 地址 X.X.X.X 告诉本地 DNS。
8. 本地 DNS 再将 IP 地址返回客户端，客户端和目标建立连接。

### DNS 服务器的工作机制是怎样的？

* DNS 查询得到 IP 的过程：
  * 如果浏览器有缓存、直接使用浏览器缓存，否则使用本机缓存，再没有的话就是用 host
  * 如果本地没有，就向 DNS 域名服务器查询，中间过程经过的路由可能也有缓存，查询得到对应的 IP
* DNS 查询优化
  * 解析域名过多时，会让首屏加载速度变得过慢，可以考虑 dns-prefetch 优化。

```javascript
// gethostbyname 返回 IP 地址
<内存地址> = gethostbyname("要查询的服务器域名");

gethostbyname {
    生成发送给 DNS 服务器的查询信息;
    // 发送查询消息，需要委托给操作系统内部协议栈
    向 DNS 服务器发送查询消息;
    接收 DNS 服务器返回的响应消息;
    从响应消息中取出 IP 地址，存放到 <内存地址中>;
    返回应用程序;
}
```

* DNS 预解析：“Google Chrome 浏览器”等现代浏览器还采用了一种称为“DNS 预解析”的技术，可以更快地抓取和载入网页。通过 DNS 查找将网址转换为 IP 地址的过程称为“解析”，反之则称为“反向解析”。“Chrome 浏览器”会通过 DNS 预解析同时查找网页上的其他所有链接，并在后台将这些链接预解析为 IP 地址。因此，当您实际点击网页上的某个链接后，浏览器就能立即将您转到新的网页。

### 如何理解 CDN？

> [也许是史上最全的一次 CDN 详解](https://zhuanlan.zhihu.com/p/28940451)

* CDN 内容分布网络是构筑在现有的 Internet 上的一种先进的流量分配网络，是一层新的网络架构
  * CDN 系统能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。
  * 控制时延：现代信息科技的重要指标，CDN 的意图就是尽可能的减少资源在转发、传输、链路抖动等情况下顺利保障信息的连贯性。
* CDN 的意义：

  * 为了实现跨运营商、跨地域的全网覆盖：互联不互通、区域 ISP 地域局限、出口带宽受限制等种种因素都造成了网站的区域性无法访问。CDN 加速可以覆盖全球的线路，通过和运营商合作，部署 IDC 资源，在全国骨干节点商，合理部署 CDN 边缘分发存储节点，充分利用带宽资源，平衡源站流量。
  * 为了保障你的网站安全：CDN 的负载均衡和分布式存储技术，可以加强网站的可靠性，相当无无形中给你的网站添加了一把保护伞，应对绝大部分的互联网攻击事件。防攻击系统也能避免网站遭到恶意攻击。
  * 为了异地备援：当某个服务器发生意外故障时，系统将会调用其他临近的健康服务器节点进行服务，进而提供接近 100% 的可靠性，这就让你的网站可以做到永不宕机。
  * 为了节约成本投入：使用 CDN 加速可以实现网站的全国铺设，不用考虑购买服务器与后续的托管运维，服务器之间镜像同步，也不用为了管理维护技术人员而烦恼，节省了人力、精力和财力。
  * 为了更专注业务本身：CDN 加速厂商一般都会提供一站式服务，业务不仅限于 CDN，还有配套的云存储、大数据服务、视频云服务等，而且一般会提供 7x24 运维监控支持，保证网络随时畅通，你可以放心使用。并且将更多的精力投入到发展自身的核心业务之上。
* 最简单的 CDN 网络由一个 DNS 服务器和几台缓存服务器组成。
* 一个 CND 架构 = 镜像（Mirror）+ 缓存（Cache）+整体负载均衡（GSLB）

## 实战

### 如何使用工具进行抓包测试？

### 如何使用命令行进行抓包测试？

* 命令
  * `netstat`
    * `netstat -napt`
  * `tcpdump`