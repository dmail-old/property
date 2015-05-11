var implementProperty = include('./implementPropertyOf');

function complementProperty(object, name, owner){
	if( !(name in object) ){
		implementProperty(object, name, owner);
	}
}

return complementProperty;