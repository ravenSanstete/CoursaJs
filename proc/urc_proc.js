var urc_biz=require('./db_opration/urc_biz');

module.exports=function(action,user,course,session){
	if(action=="create"){
		return new Promise((resolve,reject)=>{
			urc_biz.create(user,course).then((urcs)=>{
				var outcome_json={
					state:(urcs.affectedRow==1)
				}

				resolve(outcome_json);

			},(err)=>{
				console.log(err);
				resolve(JSON.stringify({
					state:"SERVER_ERR"
				}))
			});

		});
	}else{

	}


}

