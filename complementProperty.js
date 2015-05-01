var implementProperty = require('./implementProperty');

function complementProperty(object, name, value, force){
	if( force || !(name in object) ){
		implementProperty(object, name, value);
	}
}

module.exports = complementProperty;