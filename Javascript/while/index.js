var array = []
var again = "yes"

do {
    var element = prompt("write into array")
    array.push(element)

    again = prompt("You want to wrote again")
} while (again === "yes");

console.log(array)


// while (again === "yes") {
    //     var element = prompt("write into array")
    //     array.push(element)

    //     again = prompt("You want to wrote again")
    // }