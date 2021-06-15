# Nginx

- Nginx 平滑重启，反向代理、正向代理

## Nginx 的安装与环境配置？

```bash
# CentOS
$ yum install nginx
# /usr/share/nginx/, etc/nginx/
$ vim /etc/nginx/nginx.conf
$ cd /usr/local/nginx
```

## Nginx 安装时的依赖包都有什么用途？

```
================================================================
 Package                     Arch   Version          Repository
                                                           Size
================================================================
Installing:
 nginx                       x86_64 1:1.16.1-3.el7   epel 563 k
Installing for dependencies:
 nginx-all-modules           noarch 1:1.16.1-3.el7   epel  20 k
 nginx-filesystem            noarch 1:1.16.1-3.el7   epel  21 k
 nginx-mod-http-image-filter x86_64 1:1.16.1-3.el7   epel  30 k
 nginx-mod-http-perl         x86_64 1:1.16.1-3.el7   epel  39 k
 nginx-mod-http-xslt-filter  x86_64 1:1.16.1-3.el7   epel  29 k
 nginx-mod-mail              x86_64 1:1.16.1-3.el7   epel  57 k
 nginx-mod-stream            x86_64 1:1.16.1-3.el7   epel  85 k
 openssl11-libs              x86_64 1:1.1.1c-2.el7   epel 1.4 M
```

## nginx.conf 中有哪些配置项？

* listen、server_name、location、root...

## Nginx 的反向代理？

