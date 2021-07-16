const { responseClient } = require("../utils");
const jwt = require("jsonwebtoken");
const Qs = require('qs')


const login = async (ctx, next) => {
    
    console.log(222, ctx.request.body)
    ctx.verifyParams({
        username: { type: "string", required: true },
        password: { type: "string", required: true },
    })
 
    // const {} = ctx.request.body;
    // // 数据库操作 此处只做测试 故省略
    // const token = jwt.sign(
    //     {
    //         name: result.name
    //     },
    //     "Gopal_token", // secret
    //     { expiresIn: 60 * 60 } // 60 * 60 s
    // );
    responseClient(ctx, 200, "测试成功!");
}

module.exports = {
    login,
}