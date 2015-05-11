var PropertyModifier = include('./modifier');
var completePropertyOf = include('./completePropertyOf');

var complete = PropertyModifier.create(completePropertyOf);

return complete;