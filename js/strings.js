//STEP 1
let name = prompt("Enter your name")
alert("Name length: " + name.length)

//STEP 2
name = prompt("Enter your name")
num = prompt("Enter a number between 0 and " + name.length)
alert("Char position: " + name.charAt(num))

//STEP 3
let firstName = prompt("Enter your first name")
let lastName  = prompt("Enter your last name")
alert("Your name is: " + firstName.concat(" ", lastName))

//STEP 4
let storedText = "The quick brown fox jumps over the lazy dog"
alert("Index of the word fox: " + storedText.indexOf("fox"))

//STEP 5
let storedText2 = "The quick brown fox jumps over the lazy fox"
alert("Index of the last instance of fox: " + storedText2.lastIndexOf("fox"))

//STEP 6
let storedText3 = "The quick brown fox jumps over the lazy dog"
let fullName = prompt("Enter your full name")
alert(storedText3.replace("the lazy dog", fullName))

//STEP 7
let storedText4 = "The quick brown fox jumps over the lazy dog"
let word = prompt("Enter a word")
let wordPosition = storedText4.search(word)
if(wordPosition > 0)
    alert("The word " + word + " was found at " + storedText4.search(word))
else 
    alert("The word " + word + " was not found")

//STEP 8
let old_string = "The quick brown fox jumps over the lazy dog"
let new_string = old_string.slice(old_string.indexOf("the lazy dog"))
alert(new_string.toUpperCase())

//STEP 9
let storedText5 = "          THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          "
alert(storedText5.trim().toLowerCase())

//STEP 10
let storedText6 = "the quick brown fox jumps over the lazy dog"
alert(storedText6.charAt(0).toUpperCase() + storedText6.slice(1))