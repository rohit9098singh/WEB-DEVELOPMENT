const http = require('https');

const options = {
	method: 'GET',
	hostname: 'yt-api.p.rapidapi.com',
	port: null,
	path: '/dl?id=arj7oStGLkU',
	headers: {
		'x-rapidapi-key': 'f60215bb40msh957b336c96f1079p176b15jsn1a930874e7d9',
		'x-rapidapi-host': 'yt-api.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();