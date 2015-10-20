var qs=require('querystring');
var url=require('url');

var user_proc=require('./proc/user_proc');





module.exports=function(router){

	router.post('/u',function(req,res,next){
		user_proc(q(req).action,req.body,req).then((outcome_json)=>{
			/*give login user a session*/
			res.end(JSON.stringify(outcome_json));
		});
	})

	router.get('/u',function(req,res,next){
		res.end(req.session.uid);
	})




}


/*from url to query obj for use*/
function q(req){
	return qs.parse(url.parse(req.url).query);
}

