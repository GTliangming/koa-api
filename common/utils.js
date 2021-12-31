const crypto = require("crypto");

exports.MD5_SUFFIX = 'www.biaochenxuying.cn*&^%$#'

exports.md5 = (pwd) => {
	let md5 = crypto.createHash('md5');
	return md5.update(pwd).digest('hex');
}
// 响应客户端
exports.responseClient = async (ctx, code, message, data) => {
	if (data) {
		return ctx.body = {
			code,
			message,
			data
		}
	} else {
		return ctx.body = {
			code,
			message
		}
	}
}
// 时间 格式化成 2018-12-12 12:12:00
exports.timestampToTime = (timestamp) => {
	const date = new Date(timestamp);
	const Y = date.getFullYear() + '-';
	const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	const D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
	const h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
	const m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
	const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
	return Y + M + D + h + m + s;
}
// 生成六位随机验证码
exports.createSixNum = () => {
	let codeNum = "";
	for (var i = 0; i < 6; i++) {
		codeNum += Math.floor(Math.random() * 10);
	}
	return codeNum;
}
exports.CheckUserInfo = (name, email, password) => {
	// let ErrText = ""
	// switch () {

	// }
}