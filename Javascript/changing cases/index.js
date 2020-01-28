// var cleanestCities = ["Cheyenne", "cheyenne", "Santa Fe", "santa fe", "Tucson", "tucson", "Great Falls"]
// var array = []

// for (var index = 0; index < cleanestCities.length; index++) {
//     cleanestCities[index] = cleanestCities[index].toUpperCase()
// }

// console.log(cleanestCities)




var string = "pak"

console.log(string.toUpperCase())

var array = ["A", "B", "C"]

for (var index = 0; index < array.length; index++) {
    array[index] = array[index].toLowerCase()
}

console.log(array)


var string = "zarak"

var input = prompt("What is your password")

input = input.toLowerCase()

if (string === input) {
    console.log("Access")
}