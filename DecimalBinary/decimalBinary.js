
function decimalToBinary(nums) {
    let result = ''
    while (nums > 0){
        result = (nums % 2) + result
        nums = Math.floor(nums/2)
    }
    return result
}

console.log(decimalToBinary(25))