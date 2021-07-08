/* 
* 整合所有路由请求 统一 /api/xx 输出
*/



const router = require('koa-router')()
router.prefix('/api')



const common = require('../controllers/common');


/*  通用 ············· */
router.get('/test', common.testPage)
router.post('/testApi', common.testApi)

module.exports = router
