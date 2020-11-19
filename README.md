# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 1.划分目录结构
  + src 
    - assets(资源) 图片,CSS
      + images
      + css
    - components(组件) 放一些公共的组件,例如在home里面要用,别的大的组件也要用
      + common(公共的) 放一些不仅当前项目能用的组件,别的项目也能用的组件
      + content(内容)  当前项目用到的公共的组件,当前业务相关的
    - views(视图)  放一些比较大的组件,例如首页,分类
      + category
      + home
    - router(路由)
    - store(仓库) 公共状态管理
    - network(网络请求)
    - common(公共的JS文件) 例如项目用到的一些常量,常用的工具类
### 2.Css文件引入,初始化样式
  + 对样式统一
  + 我这里要用scss的方式写,但是normallize是css的,不能直接在app入口直接导入,所以去main.js 导入,因为scss里面不支持@import导入

### 3.对路径起别名
  + vue-cli2 里面是在base.config 配置
  + vue-cli3 新建一个js文件  vue.config.js  
  + editorconfig 文件 对项目整体风格进行约束