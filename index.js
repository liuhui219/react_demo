
const os = require('os');
const Koa = require('koa');
const app = new Koa();
var server = require('http').Server(app.callback());
const io = require('socket.io').listen(server);
const fs = require('fs');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const { query } = require('./mysql/async-db')
const router = require('koa-router')();
const serve = require('koa-static');

const main = serve(path.join(__dirname, './build'));
const users = [];
app.use(main);
app.use(bodyParser());
app.use(router['routes']());
router.get('/index', async (ctx, next) => {
	    let data;

		async function selectAllData( ) {
		  let sql = 'SELECT * FROM websites'
		  let dataList = await query( sql )
		  console.log(dataList)
		  return dataList
		}

		try {

		  data = {
			code: 200,
			message: 'success',
			data: await selectAllData()
		  }
		} catch (err) {
		  data = {
			code: 500,
			message: 'error'
		  }

		}
		ctx.body = data
});

router.post('/login', async (ctx, next) => {
      var name = ctx.request.body.userName || '';
			var password = ctx.request.body.password || '';
			var userNameData = [];
			var passWordData = [];
			var user = '';
				let sql = 'SELECT * FROM login'
				var data = await query( sql )
				try {
					data.map(async (info,i)=>{
						userNameData.push(info.phoneNumber);
						passWordData.push(info.passWord);
						if(ctx.request.body.userName == info.phoneNumber){
							user = info.userName;
						}
				 })

				 if(!userNameData.includes(name) || !passWordData.includes(password)){
					   ctx.request.body.code = 500;
						 ctx.request.body.message = '账号或密码有误';
						 ctx.body = ctx.request.body
				 }else{
					   ctx.request.body.code = 0;
						 ctx.request.body.user = user;
						 ctx.body = ctx.request.body
				 }
				} catch (err) {

				}
});

router.post('/register', async (ctx, next) => {
			var name = ctx.request.body.userName || '';
			var password = ctx.request.body.password || '';
			var phoneNumber = ctx.request.body.phoneNumber;
			var userNameData = [];
				let sql = 'SELECT * FROM login'
				var data = await query( sql )
				try {
					data.map(async (info,i)=>{
						userNameData.push(info.phoneNumber);
				 })

				 if(userNameData.includes(phoneNumber)){
					   ctx.request.body.code = 500;
						 ctx.request.body.message = '此账号已被注册';
						 ctx.body = ctx.request.body
				 }else{
					 var  addSql = 'INSERT INTO login(id,userName,passWord,phoneNumber) VALUES(0,?,?,?)';
					 var  addSqlParams = [name, password, phoneNumber];
						await query( addSql,addSqlParams ).then((v)=>{
							ctx.request.body.code = 0;
							ctx.body = ctx.request.body
						}).catch((error)=>{
							console.log(error)
							ctx.request.body.code = 500;
							ctx.request.body.message = '注册失败';
							ctx.body = ctx.request.body
						})
				 }
				} catch (err) {

				}

});

app.use(async (ctx, next) => {

    if (ctx.request.path === '/') {
	    ctx.response.type = 'html';
        ctx.response.body = fs.createReadStream('./build/index.html');
    } else {
        await next();
    }
});

io.sockets.on('connection', function(socket) {
	socket.on('login', function(nickname) {
		 

	});
})


server.listen(2000);
