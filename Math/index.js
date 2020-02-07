// // var num = Math.round(10.49)
// var numc = Math.ceil(10.0001)
// var numf = Math.floor(10.9)

// console.log(numc)
// console.log(numf)


// var random = Math.random()
// var i = (random * 16)
// var number = Math.ceil(i)


// console.log(number)

// var age = prompt("Age")

// // age = parseInt(age)
// age = parseFloat(age)

// console.log( 18 + age)

// var num = 10
// var num2 = 10

// num= num.toString()

// console.log(num + num2)



// var string = "10.9985"

// string = Number(string)

// var tax = string +10

// console.log(tax.toFixed(2))

var string = "10.9985"
var length = string.length

if( string.charAt(length-1)==="5"){
    string = string.slice(0,length-1)+"6"
}

string = Number(string)

console.log( string.toFixed(3) )