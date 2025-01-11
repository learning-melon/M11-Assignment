//STEP 1
let str = prompt("Enter string")
let sortedStr = str.split("").reverse().join("")
console.log(sortedStr)

//STEP 2
let str2 = prompt("Enter phrase")
str2 = str2.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
console.log(str2)

//STEP 3
let str3 = prompt("Enter phrase")
let vowels = ['a','e','i','o','u']
let count = 0
str3.split("").map(letter => vowels.includes(letter) ? count++ : count)
console.log(count)

//STEP 4
let strLength = prompt("Enter a string length")
while (isNaN(strLength)){
    strLength = prompt("Enter a string length")
}

const getRandomNumArray = (strLength) => {
    let arr = []
    let num

    while(arr.length < strLength){
        num = Math.floor(Math.random() * (100))
        if((num >= 48 && num <= 57) || (num >= 65 && num <= 90) || (num >= 97 && num <= 122)) //alphanumeric
            arr.push(String.fromCharCode(num))
    }
    return arr
}

console.log(getRandomNumArray(strLength).join(''))


//STEP 5
let countries = ["Nigeria", "Ghana", "Kenya", "Togo", "South Africa", "Egypt", "Morocco", "Mali", "Senegal", "Cameroon"]

const longestCountry = (countries) => {
    let longest = countries[0]
    for(let i = 1; i < countries.length; i++){
        if(countries[i].length > longest.length){
            longest = countries[i]
        }
    }
    return longest
}

console.log(longestCountry(countries))