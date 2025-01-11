//STEP 1
let numDaysInMonth = new Date('2025','1',0).getDate()
console.log("Number of days in January: " + numDaysInMonth)

//STEP 2
let monthName = new Date('January 2, 2025 00:00:00').toLocaleString('default',{month: 'long'})
console.log("Month name: " + monthName)

//STEP 3
let day = new Date().getDay()
let isWeekend = day == 0 || day == 6 ? true : false
console.log("Is Weekend: " + isWeekend)

//STEP 4
let date = new Date()
let yesterday = date.setDate(date.getDate() - 1)
let yesterdayDay = new Date(yesterday).toLocaleString('default',{weekday:'long'})
console.log("Yesterday: " + yesterdayDay)

//STEP 5
let today = new Date().toLocaleString('default',{weekday:'long'})
console.log("First letter of today: " + today.slice(0,1))