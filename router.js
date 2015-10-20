var qs=require('querystring');
var url=require('url');

var user_proc=require('./proc/user_proc');
var util=require('./util/util');




module.exports=function(router){

	router.post('/u',function(req,res,next){
		user_proc(q(req).action,req.body).then((outcome_json)=>{
			res.end(outcome_json);
		});
	
	})

	router.get('/u',function(req,res,next){
		res.end("hello guest");
	})




}


/*from url to query obj for use*/
function q(req){
	return qs.parse(url.parse(req.url).query);
}

