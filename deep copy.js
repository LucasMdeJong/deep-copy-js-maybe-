function clone(obj){
	let newObj=Object.assign({},obj);
	for(let property in obj){//for(let property of Object.getOwnPropertyNames(obj)){ if(!(property in obj)) continue;
		if(Object.values(obj[property])!=0){
			newObj[property]=clone(obj[property]);
		};
	};
	return newObj;
}
