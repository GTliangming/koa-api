/**
 * App config module.
 * @file 应用运行配置
 * @module utils/config
 */

const path = require('path');

//处理命令行参数
const { argv } = require('yargs');


// 线上数据库
exports.MONGODB_ONLINE = {
    uri: `mongodb://xx`,
    username: "",
    password: "",
};
// 本地数据库
exports.MONGODB_ONLINE = {
    uri: `mongodb://xx`,
    username: "",
    password: ""
};


// github第三方登录相关
exports.GITHUB = {
    username: '',
    // 
    oauth_uri: 'https://github.com/login/oauth/authorize',
    access_token_url: 'https://github.com/login/oauth/access_token',

    // 获取 github 用户信息 url 
    user_url: 'https://api.github.com/user?access_token=',


    redirect_url: '',
    client_id: '',
    client_secret: '',
};

//邮件发送
exports.EMAIL = {
    USERNAME: "",
    TOKENCODE: ""
}