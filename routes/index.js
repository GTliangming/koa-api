/* 
* 整合所有路由请求 统一 /api/xx 输出
*/



const router = require('koa-router')()
router.prefix('/api')



const { testPage, testApi, tryapi } = require('../controllers/common');
const { login } = require('../controllers/user');

/*  通用 ············· */
router.get('/test', testPage)
router.post('/testApi', testApi)
router.post('/try', tryapi)

/*  通用 ············· */
router.post('/login', login)

module.exports = router
