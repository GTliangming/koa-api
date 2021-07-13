/**
 * Mongoose module.
 * @file 数据库模块
 * @module config/mongoose

 */

const consola = require('consola')
const { MONGODB_ONLINE, MONGODB_DEV } = require('../utils/config')
const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

// remove DeprecationWarning
mongoose.set('useFindAndModify', false)


// mongoose Promise
mongoose.Promise = global.Promise

// mongoose
exports.mongoose = mongoose

// connect
exports.connect = () => {
    const MONGODB = process.env.NODE_ENV === "production" ? MONGODB_ONLINE : MONGODB_DEV;
    console.log('CONFIG.MONGODB.uri :', MONGODB.uri)
    // 连接数据库
    mongoose.connect(MONGODB.uri, {
        useCreateIndex: true,
        useNewUrlParser: true,
        promiseLibrary: global.Promise,
        useUnifiedTopology: true
    })

    // 连接错误
    mongoose.connection.on('error', error => {
        consola.warn('数据库连接失败!', error)
    })

    // 连接成功
    mongoose.connection.once('open', () => {
        consola.ready('数据库连接成功!')
    })

    // 自增 ID 初始化
    autoIncrement.initialize(mongoose.connection)

    // 返回实例
    return mongoose
}
