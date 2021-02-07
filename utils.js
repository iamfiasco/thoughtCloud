const fs = require("fs")
const path = require("path")

function crawl(fpath){
	return new Promise(function(resolve, reject){
		fs.readdir(fpath, function(err, contents){
			if(err){
				reject(err)
			}
			else{
				fpaths = contents.map((e)=>{return path.join(fpath, e)})
				Promise.all(fpaths.map(function(e){
					return new Promise(function(resolve, reject){
						fs.lstat(e, function(err, stats){
							if(err){
								reject([])
							}
							else if(stats.isDirectory()){
								crawl(e).then(resolve)
							}
							else if(stats.isFile()){
								resolve([e])
							}
							else{
								resolve([])
							}
						})
					})
				})).then(function(elems){
					return elems.reduce(function(a,e){
						return a.concat(e)
					}, [])
				}).then((res)=>{
					resolve(res)
				}).catch(function(err){
					console.log(err)
				})
			}
		})	
	})
}

crawl("/home/iamfiasco/Downloads").then(console.log)
