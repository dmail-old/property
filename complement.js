var PropertyModifier = require('./modifier');
var complementPropertyOf = require('./complementPropertyOf');

var complement = PropertyModifier.create(complementPropertyOf);

module.exports = complement;