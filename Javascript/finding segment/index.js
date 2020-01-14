var string = "ase World War II.  Thuldbe the Second World War II. So let's search the following sentence for the banned charactersnd replace them wie that the New Yorker prefers.It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien waswriting the trilogy, which contains, with the weird applicability available only to poetry anmyth, the essential notion that the good gray wizard can understand the evil magi preciselybecause he is just enough like them to grasp their minds and motives in ways that they cannotgrasp his."


for (var index = 0; index < string.length; index++) {
    if (string.slice(index, index + 12) === "World War II") {
        string = string.slice(0, index) + "The Second World War" + string.slice(index + 12)
    }
}
console.log(string)

var name = "zarak khan zarak zarak"

console.log(name.indexOf("zarak"))
console.log(name.lastIndexOf("zarak"))

var index = name.indexOf("zarak")

name = name.slice(0,index)+"zain"+name.slice(index+5)

console.log(name)

array=["hello","i","am"]
