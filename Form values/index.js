var name = document.getElementById("name")
var age = document.getElementById("age")

console.log(name, age)

function getValues() {
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var car = document.getElementById("car").value
    document.getElementById("val").innerHTML = name+age+car
}