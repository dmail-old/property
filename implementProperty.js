var implementProperty;

if( Object.defineProperty ){
	var descriptor = {
		enumerable: false,
		writable: true,
		value: null
	};

	implementProperty = function(object, name, value){
		descriptor.value = value;
		Object.defineProperty(object, String(name), descriptor);
	};
}
else{
	implementProperty = function(object, name, value){
		object[String(name)] = value;
	};
}

module.exports = implementProperty;