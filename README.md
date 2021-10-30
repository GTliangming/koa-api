# api-admin
koa node server

## 目录结构

```
—— bin                  项目开始文件
—— config               项目配置文件夹
—— controllers          路由具体请求
—— models               数据库集合模型
—— public               公共文件
—— routes               路由统一定义
—— utils                工具文件夹
—— views                通用页面
```

## 本地开发

```
npm install  || yarn (推荐)

npm run dev  || yarn dev  (本地开发)

npm run start  || yarn start (生产环境)

```
### 更换端口

app.config.js  
 
更改 `DEVPORT` or  `ONLINEPORT`

默认端口 本地：3000  生产环境：3001


测试接口页面 ： `localhost://${port}/api/test `

测试接口 ：`localhost://${port}/api/testApi `


### 部分中间件
 - koa-parameter 用于参数校验，它是基于参数验证框架parameter, 给 koa 框架做的适配。
    ```
     ctx.verifyParams({
        id: { type: "number", required: true }
    })
    ```
 - koa-json-error 错误处理中间件，错误会默认抛出堆栈信息，在生产环境中，没必要返回给用户，在开发环境显示 
    ```
    app.use(error({
        postFormat: (e, { stack, ...rest }) => process.env.NODE_ENV === "production" ? rest : { stack, ...rest }
    }))
    ```








