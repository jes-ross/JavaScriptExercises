
/**
 * Context: Jacques is a man that transform into a squirrel between 20:00 and 22:00
 * He wants to solve his problem
 * He starts making anotations of what he does during the day
 * Then look up for the reason
 */



// All the registers
const JOURNAL = require("./journal")

// The math part :) This is called Phi and it's used to calculate correlations.
const phi = (table) => {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt(
            (table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]))
}



const tableFor = (event, journal) => {
    let table = [0, 0, 0, 0]
    for (let i = 0; i < journal.length; i++){
        let entry = journal[i], index = 0
        if (entry.events.includes(event)) index += 1
        if(entry.squirrel) index += 2
        table[index] += 1
    }
    return table
}

const journalEvents = (journal) => {
    let events = []
    for (let entry of journal){
        for (let event of entry.events){
            if(!events.includes(event)){
                events.push(event)
            }
        }
    }
    return events
}

// All the correlations

// for (let event of journalEvents(JOURNAL)){
//     console.log(event, ":", phi(tableFor(event, JOURNAL)))
// }


// Specific correlations
for (let event of journalEvents(JOURNAL)){
    let correlation = phi(tableFor(event, JOURNAL))
    if (correlation > 0.1 || correlation < -0.1){
        console.log(event, ":", correlation)
    }
}


// The reason
for (let entry of JOURNAL){
    if (entry.events.includes("peanuts") 
        && !entry.events.includes("brushed teeth")){
        entry.events.push("peanut teeth")
    }
}

// Print the reason
console.log(phi(tableFor("peanut teeth", JOURNAL)))