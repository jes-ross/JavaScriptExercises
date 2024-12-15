function isArmstrong(str) {
    let nums = []
    let result = 0
    for (let i = 0; i < str.length; i++){
        nums.push(str[i]**str.length)
    }
    for (let j = 0; j < nums.length; j++){
        result += nums[j]
    }
    if (str == result.toString()){
        return true
    } else{
        return false
    }
}

console.log(isArmstrong("370"))