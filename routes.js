module.exports = {

	//模拟接口 'http://localhost:9999/api/users'
	'/api/users': 'mock::/api/users.json',

	//模拟接口 'http://localhost:9999/api/keys'
	'/api/userIds': 'mock::/api/ids.js',

	//模拟接口 ‘http://localhost:9999/api/query?userId=x’
	'/api/query': 'mock::api/query.js'

	// 如果只mock上面定义的接口， 其它接口都走 ‘http://productHost.com’ 服务器对应的接口，添加如下配置即可
	// 'ALL::/:pattern*': 'http://productHost.com'
};

