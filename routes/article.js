/**
 * Article models module.
 * @file 涉及文章请求
 * @module routes/article
 * @author  lm
 */

const utils = require("../common/utils")
const Article = require("../models/article");



/* 获取文章详情 */
exports.getArticleDetail = async (ctx,next) =>{

}

/*—————————————————————  前台文章操作 ————————————————————— */

/* 前台获取所有文章 */
exports.getArticleList = async (ctx,next) =>{

}
/* 前台文章点赞 */
exports.likeArticle = async (ctx,next) =>{

}

/*—————————————————————  后台文章操作 ————————————————————— */

/* 后台获取所有文章 */
exports.getArticleListAdmin = async (ctx,next) =>{

}

/* 后台新增文章 */
exports.addArticle = async (ctx,next) =>{

}
/* 后台更新文章 */
exports.updateArticle = async (ctx,next) =>{

}
/* 后台删除文章 */
exports.delArticle = async (ctx,next) =>{

}