

const { responseClient } = require("../utils")


const testPage = async (ctx, next) => {
    await ctx.render("view")
}

const testApi = async (ctx, next) => {
    ctx.verifyParams({
        id: { type: "number", required: true }
    })
    await responseClient(ctx, 200, "测试成功!");
}

const tryapi = async (ctx, nex) => {
    console.log(3322)
    ctx.body = "xxxxxxxxxx"
}

module.exports = {
    tryapi,
    testApi,
    testPage
}