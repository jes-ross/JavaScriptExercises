function isPrime (number) {
    if (number % 2 == 0){
        return true
    } else {
        return false
    }
}

for (let i = 0; i< 101; i++){
    console.log(i, isPrime(i))
}