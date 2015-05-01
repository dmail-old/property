var PropertyModifier = require('./modifier');
var completePropertyOf = require('./completePropertyOf');

var complete = PropertyModifier.create(completePropertyOf);

module.exports = complete;