function completeProperty(object, name, value, force){
	name = String(name);
	if( force || !(name in object) ){
		object[name] = value;
	}
}

return completeProperty;