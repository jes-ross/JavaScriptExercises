function isAnagram(firstWord, secondWord) {
    let isAnAnagram = true
    let numChar

    if (firstWord.length != secondWord.length){
        isAnAnagram = false
    } else {
        numChar = 0
        let arrfirstWord = Array.from(firstWord)
        arrfirstWord.sort()
        let arrsecondWord = Array.from(secondWord)
        arrsecondWord.sort()

        while (isAnAnagram && (numChar < arrfirstWord.length)){
            if (arrfirstWord[numChar] != arrsecondWord[numChar]){
                isAnAnagram = false
            } 
            numChar++
        } 
    }
    return isAnAnagram
}

console.log(isAnagram("hola", "halo"))