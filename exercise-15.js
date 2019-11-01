function groupAnimals(animals) {
    var res = []
    for (var i = 0; i < animals.length; i++) {
        if (animals[i] !== '') {
            let temp = []
            temp.push(animals[i])
            for (var j = i + 1; j < animals.length; j++) {
                if (temp[0][0] === animals[j][0]) {
                    temp.push(animals[j])
                    animals[j] = ''
                }
            }
            res.push(temp)
        }
    }
    return res.sort()
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]