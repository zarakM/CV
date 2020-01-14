// var string = "May"
// var length = string.length
// if (length > 3) {
//     console.log("Its not an abbreviation")
// }
// else{
//     console.log("Its a abbreviation")    
// }
// Capitiliaze string
// var capital_string = string.slice(0,1).toUpperCase()+string.slice(1)
var string = "hello i am zar  ak"
for (var index = 0; index < string.length; index++) {
    if (string.slice(index, index+2) === "  ") {
        console.log( "Double quote found at :"+ index)
        break
    }
}
// array declaree : Months = ["january","febuarary"]
// abbreviated_array =["jan","feb"]
// for loop 0,length of Array
// slice to 3 alpha

var months=["January","febuary","March","April","March","May","June"]
var empty = []
for (var index = 0; index < months.length; index++) {
    empty.push(months[index].slice(0,3))
}

console.log(months)
console.log(empty)