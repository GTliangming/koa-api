/**
 * Mongoose module.
 * @file 邮箱验证码模块
 * @module config/mongoose

 */
const nodemailer = require('nodemailer');
const CONFIG = require('../utils/config')
//创建一个smtp服务器
const config = {
    host: 'smtp.163.com',
    port: 465,
    auth: {
        user: CONFIG.EMAIL.USER, //注册的163邮箱账号
        pass: CONFIG.EMAIL.TOKENCODE //邮箱的授权码，不是注册时的密码,等你开启的stmp服务自然就会知道了
    }
};


// 创建一个SMTP客户端对象
const transporter = nodemailer.createTransport(config);

//发送邮件
exports.sendMail = async (mail) => {
    await transporter.sendMail(mail, (err, info) => {
        if (err) {
            return console.log(err);
        }
        console.log("发送成功")
    });
};
