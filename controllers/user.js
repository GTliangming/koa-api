const { responseClient } = require("../utils");
const { getToken } = require("../utils/index")


const login = async (ctx, next) => {
    ctx.verifyParams({
        username: { type: "string", required: true },
        password: { type: "string", required: true },
    })
    const token = getToken(ctx.request.body.username);
    await responseClient(ctx, 200, "登录成功!", { token, data: 111 });
}

module.exports = {
    login,
}