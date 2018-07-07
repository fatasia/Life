# Life 福大 前端项目
> Angular 5 + SCSS + Router
## + Install 安装运行环境

### 1、 安装Node 和 Angular 环境
 - Node version 推荐  10.5.0 ，最低 8.0+
 -  卸载原有Angular版本并全局安装 npm install -g @angular/cli@5.2.0

### 2、获取代码
> git clone git@github.com:fatasia/Life.git

### 3、安装依赖包
> 切换到项目根目录，执行 npm install (可使用cnpm、yarn镜像加速)

## + Run 运行项目

 ###  运行项目 
 >npm run start
 ### 编译打包项目
 >npm run build


## + Config 配置文件

 - package
 > package.json  项目的依赖库、命令
 - router
 > src/app/app-routing.module.ts 页面的路由跳转
 - module
 > src/app/app.module.ts 引用和配置
 - assets
 > src/assets  包括资源文件和国际化文件
 - pages
 > src/pages 页面
 - base
 > src/styles.scss | src/app/BaseComponent.ts
