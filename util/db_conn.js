var mysql=require('mysql');

var conn=mysql.createConnection({
	host:'127.0.0.1',
	user:'root',
	password:'root',
	database:'coursa'
})

module.exports=conn;