var cleanestCities = ["Cheyenne", "cheyenne", "Santa Fe", "santa fe", "Tucson", "tucson", "Great Falls"]
var array = []

for (var index = 0; index < cleanestCities.length; index++) {
    cleanestCities[index] = cleanestCities[index].toUpperCase()
}

console.log(cleanestCities)
