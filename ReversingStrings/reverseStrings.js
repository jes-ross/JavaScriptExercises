function reverseString(string) {
    let reversed = []
    for (let i = string.length -1; i >=0; i--){
        reversed.push(string[i])
    }
    return reversed
}

function concat(array) {
    let string = ''
    for (let i = 0; i < array.length; i++){
        string += array[i]
    }
    return string
}

console.log(concat(reverseString("Buenas noches Jose Juan")))