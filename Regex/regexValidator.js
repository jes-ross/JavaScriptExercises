const validateEmail = async (email) => {
    let match = new RegExp( /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ )
    console.log("Validating Email")
    const good = !match.test(email)
    
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve(good)
        }, 500)
    })
}


const validateNumber = async (number) => {
    let match = new RegExp(/^[0-9]{1,9}$/)
    console.log("Validating number")
    const good = !match.test(number)
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve(good)
        }, 600)
    })
}

const validateURL = async (url) => {
    let match = new RegExp('(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?')
    console.log("Validating url")
    const good = !match.test(url)
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve(good)
        },700)
    })
}

validateEmail("AnEmail@gmail.com").then(result => console.log(result))
validateEmail("AnEmail213@gmail.com").then(result => console.log(result))
validateEmail("Peter").then(result => console.log(result))

validateEmail(898451234).then(result => console.log(result))
validateEmail("Peter").then(result => console.log(result))
validateNumber(543124567).then(result => console.log(result))

validateURL("https://efnvfjkadbfvhjkaedfgbva.com").then(result => console.log(result))
validateURL("Peter").then(result => console.log(result))
validateURL("http://sdhaudfvgbaufgqeyuiofv.es").then(result => console.log(result))