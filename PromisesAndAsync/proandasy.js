const functionA = async () => {
    console.log("Function A is starting")
    const begining = new Date()
    console.log(begining.toLocaleTimeString())

    await new Promise(resolve => setTimeout(resolve, 1000))
    const end = new Date()
    console.log("Function A has ended")
    console.log(end.toLocaleTimeString())
}

const functionB = async () => {
    console.log("Function B is starting")
    const begining = new Date()
    console.log(begining.toLocaleTimeString())

    await new Promise(resolve => setTimeout(resolve, 2000))
    const end = new Date()
    console.log("Function B has ended")
    console.log(end.toLocaleTimeString())
}

const functionC = async () => {
    console.log("Function C is starting")
    const begining = new Date()
    console.log(begining.toLocaleTimeString())

    await new Promise(resolve => setTimeout(resolve, 3000))
    const end = new Date()
    console.log("Function C has ended")
    console.log(end.toLocaleTimeString())
}

const functionD = async () => {
    console.log("Function D is starting")
    const begining = new Date()
    console.log(begining.toLocaleTimeString())

    await new Promise(resolve => setTimeout(resolve, 1000))
    const end = new Date()
    console.log("Function D has ended")
    console.log(end.toLocaleTimeString())
}


async function  main() {
    const C = functionC()
    const B = functionB()
    const A = functionA()

    await Promise.all([C, B, A])
    const D = functionD()
    
}

main()