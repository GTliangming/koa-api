# api-admin
node server

## 目录结构

—— bin                  项目开始文件
—— config               项目配置文件夹
—— controllers          路由具体请求
—— models               数据库集合模型
—— public               公共文件
—— routes               路由统一定义
—— utils                工具文件夹
—— views                通用页面


## 本地开发

```
npm install  || yarn (推荐)

npm run dev  || yarn dev  (本地开发)

npm run start  || yarn start (生产环境)

```
### 更换端口

app.config.js  
 
更改 `DEVPORT` or  `ONLINEPORT`

默认端口 3000


测试接口 ： `localhost://${port}/api/test `










