//  Create a function that receive an array and create other reversed
//  Create a function that reverse an array

const reverseArray = (array) => {
    let newArray = []
    for (let i = array.length -1 ; i >= 0 ; i--){
        newArray.push(array[i])
    }
    return newArray
}
console.log(reverseArray([1, 2, 3, 4]))


const reverseArrayInPlace = (array) => {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
    
}

console.log(reverseArrayInPlace([1, 2, 3, 4]))



