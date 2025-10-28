// let car = {
//     brand: "Audi",
//     model: "Q7",
//     color: "Black"
// }


// for (let c in car) {
//     console.log(car[c]);
// }

// let str = "Hello";

// for (let s in str) {
//     console.log(s);
// }

// for (let s of str) {
//     console.log(s);
// }

// let car = {
//   brand: "Audi",
//   model: "Q7",
//   color: "Black"
// };

// const result = Object.hasOwn(car);
// console.log(result);
// for (let c in car) {
//     console.log(car[c] = null);
// }

// for (let prop in navigator) {
//   console.log(prop);
// }

// for (let key in car) {
//   if (car.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }


/* 
🧠 1. User Profile Display

Scenario:
May user object ka na may mga properties:

name, age, email, city


Gamit ang for...in, gusto mong i-display lahat ng info ng user.

Sample Data:

name: "Mia"
age: 25
email: "mia@gmail.com"
city: "Cebu"


Expected Output (Console):

name -> Mia
age -> 25
email -> mia@gmail.com
city -> Cebu

*/

// const user = {
//     name: "Mia",
//     age: 25,
//     email:"mia@gmail.com",
//     city: "Cebu"
// }


// for (let key in user) {
//     console.log(`${key} -> ${user[key]}`);
// }

/* 
⚙️ 2. Resetting Settings to False

Scenario:
May settings object ka na naglalaman ng mga feature toggles. Gamitin mo ang for...in para gawing false lahat ng value.

Sample Data:

darkMode: true
notifications: true
autoSave: true
sound: true


Expected Output (Console):

darkMode -> false
notifications -> false
autoSave -> false
sound -> false
*/


// const settings = {
//     darkMode: true,
//     notifications: true,
//     autoSave: true,
//     sound: true
// }

// for (let key in settings) {
//     console.log(`${key} -> ${settings[key] = false}`)
// }


/* 
🎓 3. Student Grades Average

Scenario:
May studentGrades object ka na naglalaman ng mga subject at grades. I-loop mo lahat at i-compute ang average.

Sample Data:

Math: 88
Science: 92
English: 85


Expected Output (Console):

Average Grade: 88.33

*/

// const studentGrades = {
//     Math: 88,
//     Science: 92,
//     English: 85
// }


// let avarage = 0;
// for (let key of Object.values(studentGrades)) {
//     avarage += key / Object.values(studentGrades).length;
// }


/* 
🔠 5. Convert User Info to Uppercase

Scenario:
May user object ulit. Gamitin mo ang for...in para gawing uppercase lahat ng values na string type.

Sample Data:

name: "alex"
city: "manila"
email: "alex@email.com"


Expected Output (Console):

name -> ALEX
city -> MANILA
email -> ALEX@EMAIL.COM

*/

// const user = {
//     name: "alex",
//     city: "manila",
//     email: "alex@email.com"
// }

// for (let key in user) {
//     console.log(`${key} -> ${user[key].toUpperCase()}`)
// }

/* 
💼 6. Company Department Budgets

Scenario:
May departments object na may yearly budgets. I-loop mo para makita kung alin ang may budget na mas mababa sa 50000.

Sample Data:

HR: 40000
IT: 80000
Marketing: 30000
Finance: 60000


Expected Output (Console):

Departments below 50000:
HR -> 40000
Marketing -> 30000
*/

// const departments = {
//     HR: 40000,
//     IT: 80000,
//     Marketing: 30000,
//     Finance: 60000
// }


// console.log("Departments below 50000:")
// for (let key in departments) {
//     if(departments[key] < 50000) {
//         console.log(`${key} -> ${departments[key]}`)
//     }
// }


/* 
📊 7. Product Stock Check

Scenario:
May inventory object na naglalaman ng stock ng bawat produkto. I-loop mo at i-display lang yung mga out of stock.

Sample Data:

laptop: 5
mouse: 0
keyboard: 2
monitor: 0


Expected Output:

Out of stock items:
mouse
monitor
*/


// const inventory = {
//     laptop: 5,
//     mouse: 0,
//     keyboard: 2,
//     monitor: 0
// }

// console.log('Out of stock items:');
// for (let key in inventory) {
//     if(inventory[key] <= 0) {
//         console.log(`${key}`);
//     }
// }



/* 
🧾 8. Employee Salary Increase

Scenario:
May employees object na naglalaman ng pangalan at salary. I-loop mo para dagdagan lahat ng salary ng 10%.

Sample Data:

John: 20000
Liza: 25000
Mark: 18000


Expected Output:

John -> 22000
Liza -> 27500
Mark -> 19800
*/

// const employees = {
//     John: 20000,
//     Liza: 25000,
//     Mark: 18000,
// }

// for (let key in employees) {
//     console.log(`${key} -> ${employees[key] * 1.10}`);
// }


/* 
💬 9. Word Frequency Counter

Scenario:
May wordCount object na naglalaman ng bilang ng salita sa isang text. I-loop mo para i-display lahat ng words at counts.

Sample Data:

hello: 3
world: 2
javascript: 5


Expected Output:

hello -> 3
world -> 2
javascript -> 5
*/

// const wordCount = {
//     hello: 3,
//     world: 2,
//     javascript: 5
// }
// for (let key in wordCount) {
//     console.log(`${key} -> ${wordCount[key] = key.length}`);
// }


/* 
🏠 10. House Maintenance Status

Scenario:
May houseMaintenance object ka na may mga task at kung completed na o hindi. I-loop mo para makita kung ano pa ang pending.

Sample Data:

cleanRoof: true
paintWalls: false
fixPlumbing: true
mowLawn: false


Expected Output:

Pending tasks:
paintWalls
mowLawn
*/

// const houseMaintenance = {
//     cleanRoof: true,
//     paintWalls: false,
//     fixPlumbing: true,
//     mowLawn: false
// }

// console.log("Pending tasks:");
// for (let key in houseMaintenance) {
//     if(!houseMaintenance[key]) {
//         console.log(`${key}`)
//     }
// }