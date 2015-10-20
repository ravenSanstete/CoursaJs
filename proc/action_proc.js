module.exports=function(biz,action,instances,session,proc_atoms){
	return new Promise((resolve,reject)=>{
		biz[action](instances).then((rows)=>{
			resolve(proc_atoms[action][1](session,proc_atoms[action][0]));
		},(err)=>{
			console.log(err);
			resolve({
				state:"SERVER_ERR"
			})
		})
	})
}