
// // // function length_of_string(characters) {
// // //     return characters.length
// // // }
// // // function add(operand_one, operand_two) {
// // //     return operand_one + operand_two
// // // }
// // // function alerts() {
// // //     return 8 + 8
// // // }

// // // var string = "Hello"
// // // var length = length_of_string(string)
// // // var number = alerts()

// // // var one = 67
// // // var two = 33
// // // var addition = add(one, two)

// // // console.log(add(100))

// // console.log(nji)

// // var nji =10


// // var total = calcTot(110)

// // console.log( total )
// // console.log( calcTot(30) )
// // console.log(calcTot(60))



// // function tax(merchTot) {
// //     return 0.03 * merchTot
// // }

// // function calcTot(merchTot) {
// //     var orderTot;
// //     if (merchTot >= 100) {
// //         orderTot = merchTot;
// //     }
// //     else if (merchTot < 50.01) {
// //         orderTot = merchTot + 5;
// //     }
// //     else {
// //         console.log(tax(merchTot))
// //         orderTot = merchTot + 5 + tax(merchTot);
// //     }
// //     return orderTot
// // }


// function show() {
//     var name = "zarak"
//     console.log(name)
// }

// console.log(name)

// show()

var cities = ["karachi"]
var country = ["pakistan"]

function create(array, data) {
    array.unshift(data)
}

function read(array) {
    return array
}

function update(array ,index ,data) {
    array[index]=data
}

function deletes(array, index) {
    array.splice(index,1)
}

create(country,"lahore")
create(country,"islamabad")
create(country,"islamabad")
create(country,"islamabad")
create(country,"islamabad")
create(country,"islamabad")
create(country,"quetta")
create(country,"Sri lanka")

update(cities,1,"murree")

deletes(cities,0)

console.log(read(cities))
console.log(read(country))

var index = country.indexOf("lahore")

country.splice(index,1)

console.log(read(country))
