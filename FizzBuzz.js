var rule = [[3,'Fizz'],[5,'Buzz']];
var length = rule.length;
var duration = 100;
for (var i=1; i <= duration; i++){
    var output = ""
    for (var j=0; j <= length-1; j++){
        if (i % rule[j][0] == 0){
            output = output + rule[j][1]
        }
    }
    if (output == ""){
        output = i;
    }
    console.log(output);
}
