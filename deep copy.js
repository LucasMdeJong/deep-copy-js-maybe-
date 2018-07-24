function clone(obj){
	let newObj=new obj.constructor();
	for(let property in obj){//for(let property of Object.getOwnPropertyNames(obj)){ if(!(property in obj)) continue;
		try{
			Object.values(obj[property]);
		} catch(err) {
			newObj[property]=obj[property];
			continue;
		};
		if(Object.values(obj[property]).length!==0){
			newObj[property]=clone(obj[property]);
		} else {
			newObj[property]=obj[property];
		};
	};
	return newObj;
}
