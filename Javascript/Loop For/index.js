// var number = prompt("Number") //10
// var times = prompt("Times")   //5

//2 X 1 = 2
// for (var index = 1; index <= times;  index++) {
//     console.log( number+" x "+index+ " = "+ index*number )
// }

var cities = ["kar", "que", "isl", "lah"]
var capital = "isl"

for (var index = 0; index < 4; index++) {
    if (capital == cities[index]) {
        // console.log("city found")
    }
    else {
        // console.log(cities[index])
    }
}


for (var i = 0; i <= 5; i++) {

    if (i % 2 !== 0) {
        for (var j = 0; j < i; j++) {
            console.log("*")
        }
        console.log("\n")
    }

}

for (var i = 3; i >= 0; i--) {
    if (i % 2 !== 0) {
        for (var j = 0; j < i; j++ ) {
            console.log("*")
        }
        console.log("\n")
    }
}


// *
// ***
// *****
// ***
// *