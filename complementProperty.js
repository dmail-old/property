var implementProperty = include('./implementProperty');

function complementProperty(object, name, value, force){
	if( force || !(name in object) ){
		implementProperty(object, name, value);
	}
}

return complementProperty;