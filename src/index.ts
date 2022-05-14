interface Data {
    word1 : string;
    word2 : string;
    word3 : string
}

let data : Data = {
    word1 : "aababaa",
    word2 : "herdin",
    word3 : "aca"
}

function isPalindrome(n : string): string | boolean{
    let arrStr = n.toLowerCase().split("")
    let arrNew = arrStr.join('')
    let arrRev = [...arrNew].reverse().join('')

    if(arrNew === arrRev){
        return true
    }else{
        return false
    }
}

function checkPalindrome(){
    let info : string = "ini hasil check palindrome"
    let hasil
    console.log(info.toUpperCase(), hasil = [
        isPalindrome(data.word1),
        isPalindrome(data.word2),
        isPalindrome(data.word3),
    ])
}
checkPalindrome()