var PropertyModifier = require('./modifier');
var implementPropertyOf = require('./implementPropertyOf');

var implement = PropertyModifier.create(implementPropertyOf);

module.exports = implement;