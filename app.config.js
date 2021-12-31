/**
 * App config module.
 * @file 应用运行配置
 * @module app.config
 */

const path = require('path');
const { argv } = require('yargs');

// cookie设置

exports.DEV_COOKIE = {
	domain:"localhost",
	path:"/",
	maxAge:360000,
	httpOnly:false,
}
exports.COOKIE = {
	domain:"netbugs.cn",
	path:"/",
	maxAge:360000,
	httpOnly:false,
}

// exports.APP = {
// 	LIMIT: 10,
// 	PORT: 8000,
// 	ROOT_PATH: __dirname,
// 	NAME: 'biaochenxuying',
// 	URL: 'http://biaochenxuying.cn/main.html',
// 	FRONT_END_PATH: path.join(__dirname, '..', 'biaochenxuying'),
// };

// exports.CROSS_DOMAIN = {
// 	allowedOrigins: [
// 		'http://biaochenxuying.cn/main.html',
// 		'http://biaochenxuying.cn',
// 		'https://github.com/biaochenxuying',
// 	],
// 	allowedReferer: 'biaochenxuying',
// };


// 线上数据库
exports.MONGODB = {
    uri: `mongodb://123.56.31.193:${argv.dbport || '27017'}/BLOG`,
    username: argv.db_username || 'admin',
    password: argv.db_password || '',
};
// exports.AUTH = {
// 	data: argv.auth_data || { user: 'root' },
// 	jwtTokenSecret: argv.auth_key || 'blog-node',
// 	defaultPassword: argv.auth_default_password || 'root',
// };

// exports.EMAIL = {
// 	account: argv.email_account || 'your email address like : i@biaochenxuying',
// 	password: argv.email_password || 'your email password',
// 	from: 'https://github.com/biaochenxuying',
// 	admin: 'biaochenxuying',
// };

// exports.AKISMET = {
// 	key: argv.akismet_key || 'your akismet Key',
// 	blog: argv.akismet_blog || 'your akismet blog site, like: http://biaochenxuying.cn/main.html',
// };

exports.GITHUB = {
    username: 'GTliangming',
    /*  https://github.com/login/oauth/authorize?client_id=0bd27ff087cc7103c1b9 */
	oauth_uri: 'https://github.com/login/oauth/authorize',
	access_token_url: 'https://github.com/login/oauth/access_token',
	// 获取 github 用户信息 url // eg: https://api.github.com/user?access_token=****&scope=&token_type=bearer
	user_url: 'https://api.github.com/user?access_token=',

	// 请把生产环境的 redirect_url，client_id 和 client_secret 中的 "****", 换成自己创建的 OAuth App 的具体参数即可。
	// // 生产环境
  redirect_url: 'http://www.netbugs.cn:3002/authorizeLogin',
//   client_id: '*****',
// 	client_secret: '*****',

	// 开发环境 （参数可以直接用，公供测试）
	redirect_url: "http://localhost:3002/authorizeLogin",
    client_id: "e2a1eaa9cf8f58c79077",
	client_secret: "cc1f6eaa045878114b751a1e34fcaa0e6f103b9a",
	
};

// exports.ALIYUN = {
// 	ip: argv.aliyun_ip_auth,
// };

// exports.BAIDU = {
// 	site: argv.baidu_site || 'your baidu site domain like : biaochenxuying',
// 	token: argv.baidu_token || 'your baidu seo push token',
// };

// exports.QINIU = {
// 	accessKey: argv.qn_accessKey || 'your access key',
// 	secretKey: argv.qn_secretKey || 'your secret key',
// 	bucket: argv.qn_bucket || 'your bucket name',
// 	origin: argv.qn_origin || 'http://nodepress.u.qiniudn.com',
// 	uploadURL: argv.qn_uploadURL || 'http://up.qiniu.com/',
// };

// exports.INFO = {
// 	// name: package.name,
// 	// version: package.version,
// 	// author: package.author,
// 	// site: exports.APP.URL,
// 	github: 'https://github.com/biaochenxuying',
// 	powered: ['react', 'Nodejs', 'MongoDB', 'Express', 'Nginx'],
// };
