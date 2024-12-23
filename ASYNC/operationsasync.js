const operation = (a, b, op, mls) => {
    return setTimeout(() => {
        op(a, b)
    }, mls)
}

operation(2, 4, (a, b) => console.log(a + b), 500)
operation(2, 4, (a, b) => console.log(a - b), 500)
operation(2, 4, (a, b) => console.log(a * b), 500)
operation(2, 4, (a, b) => console.log(a / b), 500)