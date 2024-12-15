function calcFact(num){
    if (num === 1) {
        return 1
    } else {
        return num * calcFact((num -1))
    }   
}
console.log(calcFact(5))