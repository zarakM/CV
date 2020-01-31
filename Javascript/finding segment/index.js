
// var string = "ase World War II.  Thuldbe the Second World War II. So let's search the following sentence for the banned charactersnd replace them wie that the New Yorker prefers.It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien waswriting the trilogy, which contains, with the weird applicability available only to poetry anmyth, the essential notion that the good gray wizard can understand the evil magi preciselybecause he is just enough like them to grasp their minds and motives in ways that they cannotgrasp his."


// for (var index = 0; index < string.length; index++) {
//     if (string.slice(index, index + 12) === "World War II") {
//         string = string.slice(0, index) + "The Second World War" + string.slice(index + 12)
//     }
// }
// console.log(string)

// var name = "zarak khan zarak zarak"

// console.log(name.indexOf("zarak"))
// console.log(name.lastIndexOf("zarak"))

// var index = name.indexOf("zarak")

// name = name.slice(0, index) + "zain" + name.slice(index + 5)

// console.log(name)

// array = ["hello", "i", "am"]
// console.clear()


// //new class



// var city = "islamabad is the cleanest one"

// var sliced = city.slice(0, 1).toUpperCase()

// city = sliced + city.slice(1)

// console.log(city)

// console.clear()


// // var month = prompt("Month")

// // var length = month.length

// // if (length>3) {
// //     month = month.slice(0,3)
// // }

// // console.log(month)

// // console.clear()

// var str = "This is a  dog"
// var occur = "no"
// var indexs = ""

// for (var index = 0; index < str.length; index++) {
//     if (str.slice(index, index + 2) === "  ") {
//         occur = "yes"
//         indexs = index
//     }
// }

// console.log(occur)
// console.log(indexs)
// console.log(index)


// var string = "ase World War II.  Thuldbe the World War II. So let's search the following sentence for the banned World War II charactersnd replace them wie that the New Yorker prefers.It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien waswriting the trilogy, which contains, with the weird applicability available only to poetry anmyth, the essential notion that the good gray wizard can understand the evil magi preciselybecause he is just enough like them to grasp their minds and motives in ways that they cannotgrasp his."


// for (var index = 0; index < string.length; index++) {
//     if (string.slice(index, index + 12) === "World War II") {
//         string = string.slice(0, index) + "The second World War" + 
//         string.slice(index + 12)
//     }
// }

// console.log(string)


var str = "My name is khan"

var search = str.indexOf("khan")

if (search > -1) {
    str = str.slice(0, search) + "not khan" + str.slice(search + 4)
}

console.log(str)


// var array = ["dog","cat","fish","elephant"]

// // array.pop()
// // array.shift()

// // array.push("prawns")
// // array.unshift("horse")

// // array.splice(3,2)



// console.log( array.slice(1,3) )

// var array = ["dog","cat","fish","elephant"]


// for (var i = 0; i < 5; i++) {
//     console.log("i"+i)    
//     for (var j = 0; j < 4; j++) {
//         console.log("j"+j)
//     }     
// }


var one = 4
var two = 5
var three = 5
var four = "5"



console.log(one + two + three + four)