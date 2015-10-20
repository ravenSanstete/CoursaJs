var biz=require('./db_opration/user_biz');	
module.exports=function(action,user){
	if(action=="login"){
		console.log('here');
		return new Promise((resolve,reject)=>{

			biz.login(user).then((users)=>{
				/*do some more detailed things here and wrap outcome as a json*/
				var outcome_json=JSON.stringify({
					state:(users.length==1)
				});

				resolve(outcome_json);

			},(err)=>{
				console.log(err);
				resolve(JSON.stringify({
					state:"SERVER_ERR"
				}))
			})
		})
	}else if(action=="register"){
		
	}	
}