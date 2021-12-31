/**
 * Article models module.
 * @file 通用请求
 * @module routes/common
 * @author  lm
 */
const CONFIG = require('../app.config.js')
const utils = require("../common/utils");
const nodemailer = require("../config/nodemailer");
const User = require("../models/user");
const fetch = require('node-fetch');
const fs = require("fs");

/* 邮箱发送验证码！ */
exports.sendEmail = async (ctx, next) => {
    let email = ctx.request.query.email;
    if (!email) {
        utils.responseClient(ctx, 400, '邮箱不可为空')
        return;
    }
    let code = utils.createSixNum();
    let mail = {
        from: "lmzs124083@163.com",
        subject: "即将拥有八块腹肌のlm向你发送了一个爱心验证码",
        to: email,
        html: `
        <H1>验证码</H1><a href="javascript:;">${code}</a>  请在5分钟内完成验证！`
    }
    await User.findOne({ email }).then(result => {
        console.log(22222, result);
        utils.responseClient(ctx, 200, "success", result)
    })
    // await nodemailer.sendMail(mail).then( async result => {

    //     console.log(3333, ctx.session)
    //     utils.responseClient(ctx, 200, '验证码发送成功,请到邮箱查看！')
    // }).catch(err => {
    //     utils.responseClient(ctx, 400, '验证码发送失败,请重试！')
    // })
}

/* 接口测试页面    (用postman测试更佳) */
exports.testPage = async (ctx, next) => {
    await ctx.render("index")
}
exports.testGithub = async (ctx, next) => {
    console.log(3333)
    await ctx.render("github")
}

exports.test = async (ctx, next) => {
    ctx.session.test = false
    // ctx.cookies.set("name","lm",CONFIG.DEV_COOKIE)
    const session = ctx.session.test
    console.log(3333, session)
    utils.responseClient(ctx, 200, "success")
}
exports.gettest = async (ctx, next) => {
    const session = ctx.session
    console.log(ctx.request,ctx.response)
    utils.responseClient(ctx, 200, "success", session)
}
