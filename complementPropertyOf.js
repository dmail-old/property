var implementProperty = require('./implementPropertyOf');

function complementProperty(object, name, owner){
	if( !(name in object) ){
		implementProperty(object, name, owner);
	}
}

module.exports = complementProperty;