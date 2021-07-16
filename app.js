const Koa = require('koa')
const app = new Koa()

const path = require("path")
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')


const koaStatic = require("koa-static");
const error = require("koa-json-error");
const parameter = require("koa-parameter");
const koajwt = require('koa-jwt')
const cors = require('koa2-cors')
//mongose文件引入
const mongodb = require('./config/mongodb');
//token mi秘钥
const { SECRET } = require("./app.config")
//将路由文件引入
const index = require('./routes/index');

// error handler
onerror(app)

// 启动mongos连接数据库
// mongodb.connect();

// 解决跨域
app.use(
  cors({
    origin: function (ctx) { //设置允许来自指定域名请求
      if (ctx.url === '/test') {
        return '*'; // 允许来自所有域名请求
      }
      return "http://localhost:3000"; //只允许http://localhost:8080这个域名的请求
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept','Origin','Content-Length'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
  })
);



// middlewares
app.use(bodyparser())

app.use(error({
  postFormat: (e, { stack, ...rest }) => process.env.NODE_ENV === "production" ? rest : { stack, ...rest }
}))
app.use(parameter(app));// 校验请求参数

app.use(json())
app.use(logger())
app.use(koaStatic(path.join(__dirname, "public")));  // 静态资源

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  console.log(ctx)
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 错误处理
app.use((ctx, next) => {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = 'Protected resource, use Authorization header to get access\n';
    } else {
      throw err;
    }
  })
})

// 注意：放在路由前面
app.use(koajwt({
  secret: SECRET
}).unless({ // 配置白名单
  path: [/\/api\/register/, /\/api\/login/, /\/api\/try/]
}))


//初始化所有路由
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
