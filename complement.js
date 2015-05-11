var PropertyModifier = include('./modifier');
var complementPropertyOf = include('./complementPropertyOf');

var complement = PropertyModifier.create(complementPropertyOf);

return complement;