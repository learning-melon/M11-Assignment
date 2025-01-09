//STEP 1
let  input = prompt("Enter a number")
while (isNaN(input)) {
    input = prompt("Enter a number")
}
console.log(Math.abs(input))

//STEP 2
let input2 = prompt("Enter a decimal number")
while (typeof input2 !== "number" && isNaN(parseFloat(input2)) && !input2.includes(".")){
    input2 = prompt("Enter a decimal number")
}
console.log(Math.ceil(input2))

//STEP 3
let input3 = prompt("Enter a decimal number")
while (typeof input3 !== "number" && isNaN(parseFloat(input2)) && !input3.includes(".")){
    input2 = prompt("Enter a decimal number")
}
console.log(Math.floor(input3))

//STEP 4
let numCheck = (input) => {
    let numArr = input.split(",")
    for (let i = 0; i < numArr.length; i++){
        if (isNaN(numArr[i])){
            return false
        }
    }
    return true
}

let input4 = prompt("Enter 5 numbers separated by commas")
while(input4.split(",").length !== 5 || !numCheck(input4)){
    input4 = prompt("Enter 5 numbers separated by commas")
}
console.log("Smallest: " + Math.min(...input4.split(",")))
console.log("Largest: " + Math.max(...input4.split(",")))

//STEP 5
let input5 = prompt("Enter a number")
console.log("Square root of " + input5 + " is " + Math.sqrt(input5))
