>  本项目是基于vue2项目，vue2 +vue-router2 + es6 +webpack 仿锤子科技移动端WebApp

***

>  * demo地址 [demo](https://stupidwall.github.io/works/t.tt/) （请用chrome的手机模式预览）

>  *本项目地址[github地址](https://github.com/stupidWall/t.tt)
>  * 手机扫一扫


![1512439893.png](http://osbfr39w7.bkt.clouddn.com/t_ttcode.png)



### 项目技术架构
***
*  vue-cli
*  vue
*  vue-router
*  vue-awesome-swiper
*  less
*  webpack

### 上图
***
* 首页展示

![11.gif](https://github.com/stupidWall/t.tt/blob/master/static/screenshot/t.tt1.gif?raw=true)

* 分类页面

![11.gif](https://github.com/stupidWall/t.tt/blob/master/static/screenshot/t.tt2.gif?raw=true)


* 登录页面

![11.gif](https://github.com/stupidWall/t.tt/blob/master/static/screenshot/t.tt3.gif?raw=true)


* 注册页面

![11.gif](https://github.com/stupidWall/t.tt/blob/master/static/screenshot/t.tt4.gif?raw=true)


* 忘记密码

![11.gif](https://github.com/stupidWall/t.tt/blob/master/static/screenshot/t.tt5.gif?raw=true)




### 安装
***
项目地址：（`git clone`）
```shell
git clone https://github.com/stupidWall/t.tt.git
```
通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))

```
npm install
```
启动服务(http://localhost:8088)

```
npm run dev
```
发布代码

```
npm run build
```

### 页面数据
没有异步获取，直接存在bus.js文件中，没有使用vuex，使用中央事件派发bus代替
