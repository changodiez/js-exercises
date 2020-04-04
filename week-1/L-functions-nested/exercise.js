
function getUpperCaseName(name){
    return (name.toUpperCase());
       
}

function greatting(great,name){
    var UpperCaseName = getUpperCaseName(name);
    return (great + UpperCaseName)
}


var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

var result1 = greatting("HELLO ", mentor1);
var result2 = greatting("HELLO ", mentor2);
var result3 = greatting("HELLO ", mentor3);
var result4 = greatting("HELLO ", mentor4);
var result5 = greatting("HELLO ", mentor5);

console.log (result1);
console.log (result2);
console.log (result3);
console.log (result4);
console.log (result5);