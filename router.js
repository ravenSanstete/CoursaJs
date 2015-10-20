var qs=require('querystring');
var url=require('url');
var user_proc=require('./proc/user_proc');
var urc_proc=require('./proc/urc_proc');


var procs={
	'/u':user_proc,
	'/urc':urc_proc
}


module.exports=function(router){
	for(var path in procs){
		bind_route(path,procs[path],router);
	}
}


/*from url to query obj for quick usage*/
function q(req){
	return qs.parse(url.parse(req.url).query);
}

function bind_route(route,proc,router){
	router.post(route,function(req,res,next){
		proc(q(req).action,req.body,req.session).then((outcome_json)=>{
				res.end(JSON.stringify(outcome_json));
		})
	})

}

