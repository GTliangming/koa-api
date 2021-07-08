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

//mongose文件引入
const mongodb = require('./config/mongodb');
//将路由文件引入
const index = require('./routes/index');

// error handler
onerror(app)




// 启动mongos连接数据库
// mongodb.connect();
// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
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


//初始化所有路由
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
