var conn=require('../../util/db_conn');
var uuid=require('node-uuid');
var user_biz={
	login:function(instances){
		return new Promise((resolve,reject)=>{
				conn.query('select uid from user where username=? and password=?',
					[instances['user'].username,instances['user'].password],
					function(err,rows){
						(err)? reject(err):resolve(rows);
 				});
			})


	},
	register:function(instances){
		return new Promise((resolve,reject)=>{
			var n_uid=uuid.v4();
			conn.query('insert into user (uid,username,password,name,gender,school,email,phone,intro) values (?,?,?,?,?,?,?,?,?)',
				[n_uid,instances['user'].username,instances['user'].password,instances['user'].name,instances['user'].gender,instances['user'].school,instances['user'].email,instances['user'].phone,instances['user'].intro],
				function(err,rows){
					/*append new generated uid to rows*/
					rows.n_uid=n_uid;
					(err)? reject(err):resolve(rows);
				})
		});
	}


}

module.exports=user_biz;