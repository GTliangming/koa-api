

const utils = require("../utils")

exports.testPage = async (ctx, next) => {
    utils.responseClient(ctx, 200, "测试成功!")
}
