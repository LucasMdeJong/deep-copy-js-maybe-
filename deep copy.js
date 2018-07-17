function clone(obj){
	let newObj=new obj.constructor();
	for(let property in obj){//for(let property of Object.getOwnPropertyNames(obj)){ if(!(property in obj)) continue;
		try{
			Object.values(obj[property]);
		} catch(err) {
			continue;
		};
		if(Object.values(obj[property]).length!==0){
			newObj[property]=clone(obj[property]);
		};
	};
	return newObj;
}
