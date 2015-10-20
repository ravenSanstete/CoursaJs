var biz=require('./db_opration/user_biz');	
module.exports=function(action,user,req){
	if(action=="login"){
		return new Promise((resolve,reject)=>{

			biz.login(user).then((users)=>{
				/*do some more detailed things here and wrap outcome as a json*/
				var outcome_json={
					uid:(users.length==1)? users[0].uid:-1, 
					state:(users.length==1)
				};

				/*set session*/
				if(outcome_json.uid!=-1){
					req.session.uid=outcome_json.uid;
				}

				/*outcome_json should then be presented*/
				resolve(outcome_json);
			},(err)=>{
				console.log(err);
				resolve(JSON.stringify({
					state:"SERVER_ERR"
				}))
			})
		})
	}else if(action=="register"){
		return new Promise((resolve,reject)=>{
			biz.register(user).then((users)=>{
				var outcome_json={
					uid:(users.affectedRows==1)? users.n_uid:-1,
					state:(users.affectedRows==1)
				};

				/*set session*/
				if(outcome_json.uid!=-1){
					req.session.uid=users.n_uid;
				}

				resolve(outcome_json);
			},(err)=>{
				console.log(err);
				resolve(JSON.stringify({
					state:"SERVER_ERR"
				}))
			})
		})

	}else{

	}	
}