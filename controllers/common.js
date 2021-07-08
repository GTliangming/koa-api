

const utils = require("../utils")


exports.testPage = async (ctx, next) => {
    await ctx.render("view")
}


exports.testApi = async (ctx, next) => {
    console.log(2222,ctx.request.body)
    ctx.verifyParams({
        id: { type: "number", required: true }
    })
    utils.responseClient(ctx, 200, "测试成功!");
}
