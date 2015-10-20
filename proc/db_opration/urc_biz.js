var conn=require('../../util/db_conn');
var uuid=require('node-uuid');

var urc_biz={
	create:function(user,course){
		return new Promise((resolve,reject)=>{
			conn.query("insert into urc (rid,uid,courseId) values(?,?,?)",
				[uuid.v4(),user.uid,course.courseId],
				function(err,rows){
					(err)? reject(err):resolve(rows);
				});
		})
	}


}

module.exports=urc_biz;