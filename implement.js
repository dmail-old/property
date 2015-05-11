var PropertyModifier = include('./modifier');
var implementPropertyOf = include('./implementPropertyOf');

var implement = PropertyModifier.create(implementPropertyOf);

return implement;