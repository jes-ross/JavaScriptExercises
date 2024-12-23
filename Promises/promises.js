const myPromises = (a, b) => {
    const result = a + b
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(result)
        }, 500)
    })
}

myPromises(1,3).then(result => console.log(result))