var user_biz=require('./db_opration/user_biz');	
var proc_action=require('./action_proc');
var proc_atoms={
	'register':[(rows)=>{
			return {
				'uid':users.affectedRows==1 ? users.n_uid:-1,
				'state':users.affectedRows==1
			}
		},
		(session,outcome)=>{
			if(outcome.uid!=-1){
				session.uid=outcome.uid;
			}
			return outcome;
		}],

	'login':[(rows)=>{
			return {
				'uid':users.length==1 ? users[0].uid:-1,
				'state':users.length==1
			}
		},
		(session,outcome)=>{
			if(outcome.uid!=-1){
				session.uid=outcome.uid;
			}
			return outcome;
		}],
}





module.exports=function(action,user,session){
	return proc_action(user_biz,action,{'user':user},session,proc_atoms);
}




