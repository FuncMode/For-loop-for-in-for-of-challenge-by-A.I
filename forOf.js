// console.log(String instanceof Object);

// const houseMaintenance = {
//     cleanRoof: true,
//     paintWalls: false,
//     fixPlumbing: true,
//     mowLawn: false
// }


// for (let [key, value] of Object.entries(houseMaintenance)) {
//     console.log(key, value);
// }

// const arr = ["JavaScript", "Python", "C"];

// for (let value of arr) {
//     console.log(value);
// }


// let str = "JavaScript";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
// }
// console.log(reversed);


// for (let value of str) {
//     console.log(valu);
// }

// const nums = [10, 20, 30, 30, 40];
// const set = new Set([...nums]);


// const map = new Map();
// map.set("one", 1);
// map.set("second", 2);
// map.set("second", 2);
// // console.log(map);

// for (let [k, v] of map) {
//     console.log(k, v);
// }


/* 
🧩 Task 1: Student Grades Report
🎯 Scenario:

Isa kang web developer sa school management system.
May listahan ka ng mga estudyante kasama ang kanilang mga grades.
Kailangan mong i-display ang bawat estudyante at ang corresponding grade nila.

📋 Sample Data:
const studentGrades = new Map([
  ["Ana", 89],
  ["Bryan", 92],
  ["Carla", 76],
  ["David", 95]
]);

✅ Expected Output:
Ana → 89
Bryan → 92
Carla → 76
David → 95
*/

// const studentGrades = new Map([
//     ["Ana", 89],
//     ["Bryan", 92],
//     ["Carla", 76],
//     ["David", 95]
// ]);

// for (let [key, value] of studentGrades) {
//     console.log(`${key} -> ${value}`);
// }

// console.log(studentGrades);


/* 
🛒 Task 2: Unique Products Display
🎯 Scenario:

May online store ka at gusto mong siguraduhin na walang duplicate product IDs sa iyong listahan.
Ang data ay nasa isang Set, kasi gusto mo unique lang.

📋 Sample Data:
const productIDs = new Set([1001, 1002, 1003, 1002, 1004]);

✅ Expected Output:
1001
1002
1003
1004
*/

// const productIDs = new Set([1001, 1002, 1003, 1002, 1004]);

// for (let value of productIDs) {
//     console.log(value);
// }

/* 
🧩 Task 6: Print Each Character of Usernames

Scenario:
May listahan ka ng mga usernames, gusto mong ipakita bawat character ng bawat username (parang analyzer).

Sample Data:

const usernames = ["Mark12", "Ella22"];


Expected Output:

Username: Mark12
→ M
→ a
→ r
→ k
→ 1
→ 2

Username: Ella22
→ E
→ l
→ l
→ a
→ 2
→ 2

*/


// const usernames = ["Mark12", "Ella22"];

// for (let value of usernames) {
//     console.log(`Username: ${value}`);

//     for (let str of value) {
//         console.log(str);
//     }
//     console.log(`\n`);
// }

/* 
🧩 Task 7: Attendance Tracker

Scenario:
May listahan ka ng mga section at bawat section ay may mga estudyante.
Gamitin for...of para i-display lahat ng section at ang mga estudyante nila.

Sample Data:

const sections = new Map([
  ["Section A", ["Anna", "Bryan", "Chloe"]],
  ["Section B", ["David", "Ella"]],
  ["Section C", ["Fred", "Gina", "Harry", "Ivy"]]
]);


Expected Output:

Section A Students:
→ Anna
→ Bryan
→ Chloe

Section B Students:
→ David
→ Ella

Section C Students:
→ Fred
→ Gina
→ Harry
→ Ivy
 */

// const sections = new Map([
//     ["Section A", ["Anna", "Bryan", "Chloe"]],
//     ["Section B", ["David", "Ella"]],
//     ["Section C", ["Fred", "Gina", "Harry", "Ivy"]]
// ]);

// console.log(sections);

// for (let [key, value] of sections) {
//     console.log(`${key} Students: `);
//     for (let innerValue of value) {
//         console.log(`-> ${innerValue}`);
//     }
// }


/* 
🧩 Task 8: Inventory Checker

Scenario:
May Set ng mga available item names at Map ng items with quantity.
Ipakita lang ang mga items na nasa Set at may stock pa.

Sample Data:

const availableItems = new Set(["Mouse", "Laptop", "Keyboard", "Monitor"]);
const inventory = new Map([
  ["Mouse", 10],
  ["Laptop", 0],
  ["Keyboard", 5],
  ["Monitor", 2],
  ["Printer", 3]
]);


Expected Output:

Available for sale:
Mouse - 10 left
Keyboard - 5 left
Monitor - 2 left
*/


// const availableItems = new Set(["Mouse", "Laptop", "Keyboard", "Monitor"]);
// const inventory = new Map([
//     ["Mouse", 10],
//     ["Laptop", 0],
//     ["Keyboard", 5],
//     ["Monitor", 2],
//     ["Printer", 3]
// ]);

// console.log("Available for sale:");
// for (let [key, value] of inventory) {
//     if(value) {
//         if(availableItems.has(key)) {
//             console.log(`${key} - ${value} left`);
//         }
//     }
// }

/* 
🧩 Task 9: Feedback Analyzer

Scenario:
May array ng feedback strings mula sa users.
Gamit for...of, bilangin kung ilang feedback ang may salitang “good”.

Sample Data:

const feedbacks = [
  "The service was good and fast.",
  "Not bad, but could be better.",
  "Really good food!",
  "Average experience."
];


Expected Output:

Number of feedbacks containing 'good': 2

*/

// const feedbacks = [
//     "The service was good and fast.",
//     "Not bad, but could be better.",
//     "Really good food!",
//     "Average experience."
// ];

// let counter = 0;

// for (let value of feedbacks) {
//     if(value.includes('good')) {
//         counter++;
//     }
// }

// console.log(`Number of feedbacks containing 'good': ${counter}`);