const isPalindrome = (string) => {
    for (let i = 0; i < string.length; i++){
        if (string[i] !== string[string.length -1 -i]) return false
        return true
    }
}
console.log(isPalindrome("ana lleva al oso la avellana"))