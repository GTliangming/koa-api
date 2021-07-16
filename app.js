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
// const { SECRET } = require("./app.config")
//将路由文件引入
const index = require('./routes/index');

// error handler
onerror(app)

// 启动mongos连接数据库
// mongodb.connect();

// 解决跨域
app.use(cors({
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
  maxAge: 100000,
  credentials: true,
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous', 'Set-Cookie'],
}))



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
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 错误处理
app.use((ctx, next) => {
  return next().catch((err) => {
      if(err.status === 401){
          ctx.status = 401;
        ctx.body = 'Protected resource, use Authorization header to get access\n';
      }else{
          throw err;
      }
  })
})

// 注意：放在路由前面
app.use(koajwt({
  secret: 'Gopal_token'
}).unless({ // 配置白名单
  path: [/\/api\/register/, /\/api\/login/]
}))


//初始化所有路由
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
