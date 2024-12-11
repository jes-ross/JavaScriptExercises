
//  Create a function that receives a matrix and add all the numbers.
//  Create a function that create a matrix.

const sum = (range) => {
    let total = 0
    for (let i = 0; i <= range.length; i++){
        total += i
    }
    return total
}

const rangeOf = (start, end) => {
    let mt = []
    while (start <= end){
        mt.push(start)
        start++
    }
    return mt
}

console.log(sum(rangeOf(1, 10)))