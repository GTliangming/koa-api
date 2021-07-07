/**
 * User models module.
 * @file 用户数据模型
 * @module models/user
 * @author  lm
 */

 const crypto = require('crypto');
 const { argv } = require('yargs');
 const { mongoose } = require('../config/mongodb.js');
 
 const adminSchema = new mongoose.Schema({
 
   id: { type: Number, default: new Date() },
   //第三方授权登录的 github 的用户 id
   github_id: { type: String, default: '' },
 
   // 名字
   name: { type: String, required: true, default: '' },
 
   // 手机
   phone: { type: String, default: '' },
 
   //封面
   img_url: { type: String, default: '' },
 
   // 邮箱
   email: {
     type: String,
     default: '',
   },
 
   // 密码
   password: {
     type: String,
     required: true,
     default: crypto
       .createHash('md5')
       .update(argv.auth_default_password || 'root')
       .digest('hex'),
   },
   // 创建日期
   create_time: { type: Date, default: Date.now },
 
   // 最后修改日期
   update_time: { type: Date, default: Date.now },
 
 });
 // // 自增 ID 插件配置
 // adminSchema.plugin(autoIncrement.plugin, {
 //   model: 'User',
 //   field: 'id',
 //   startAt: 1,
 //   incrementBy: 1,
 // });
 
 module.exports = mongoose.model('User', adminSchema);
 