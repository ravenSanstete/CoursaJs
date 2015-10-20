var conn=require('../../util/db_conn');
var user_biz={
	login:function(user){
		return new Promise((resolve,reject)=>{
				conn.query('select * from user where username=? and password=?'
					,[user.username,user.password]
					,function(err,rows){
						(err)? reject(err):resolve(rows);
 				});
			})
	},


	register:function(user){

	}
}

module.exports=user_biz;