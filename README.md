# red-front-pc-template

> red前端pc项目的通用模板

## Build Setup

本项目基于vue-cli2.9.6，是前端pc版本的通用模板。
​
创建步骤：
    1、安装node、npm
    2、全局安装webpack
        npm install webpack -g
        检查webpack版本 webpack -v
        注意：webpack4.0以后，需要安装 npm install webpack-cli -g
    3、全局安装vue-cli(2.9.6)
        npm install vue-cli -g
        检查vue版本 vue -V
    4、初始化项目
        vue init webpack [project-name]
    5、安装模块
        npm install
    6、运行项目
        npm run dev
    7、打包项目
        npm run build
添加模块：
    1、lodash https://www.lodashjs.com/ (通用函数)
    2、moment http://momentjs.cn/ （时间处理）
    3、stylus https://www.zhangxinxu.com/jq/stylus/ （css预编译）
        npm install stylus stylus-loader --save-dev
    4、element-ui http://element-cn.eleme.io/#/zh-CN/component/installation （pcUI）
    5、vuex https://vuex.vuejs.org/zh/guide/ （状态管理）
    6、axios https://www.kancloud.cn/yunye/axios/234845 （ajax）
    7、mock http://mockjs.com/ （伪造数据）

