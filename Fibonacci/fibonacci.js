function fibo(n){
    let a = 0
    let b = 1
    console.log(a)
    for (let i = 1; i < n; i++){
        console.log(b)
        let c = a + b
        a = b
        b = c
    }
}

fibo(51)