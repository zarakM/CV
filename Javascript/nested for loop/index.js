var first_name = ["zarak", "zain", "ali", "qamar"]
var last_name = ["mughal", "khan", "hasan", "zaman",""]

for (var index = 0; index < first_name.length; index++) {

    for (var i = last_name.length-1; i > 0; i--) {

        console.log( first_name[index]+" "+last_name[i] )
    }
}