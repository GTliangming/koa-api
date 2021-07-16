

const { responseClient } = require("../utils")


const testPage = async (ctx, next) => {
    await ctx.render("view")
}

const testApi = async (ctx, next) => {
    console.log(2222, ctx.request.body)
    ctx.verifyParams({
        id: { type: "number", required: true }
    })
    responseClient(ctx, 200, "测试成功!");
}

const tryapi = async (ctx, nex) => {
    console.log(3322)
    ctx.body = { code: 111, msg: "xx" }
}

module.exports={
    tryapi,
    testApi,
    testPage
}