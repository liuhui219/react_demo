'use strict';

const os = require('os');
const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const path = require('path');
const bodyParser = require('koa-bodyparser'); 
const { query } = require('./mysql/async-db')
const router = require('koa-router')();
const serve = require('koa-static');

const main = serve(path.join(__dirname, './build'));
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
		console.log(name)
		ctx.body = ctx.request.body
});

app.use(async (ctx, next) => {
	
    if (ctx.request.path === '/') { 
	    ctx.response.type = 'html';
        ctx.response.body = fs.createReadStream('./build/index.html');
    } else {
        await next();
    }
});
 
 
app.listen(2000);