/* 
🧩 LEVEL 1: Basic Looping (Pagpainit muna)

Counting Display
➤ I-print lahat ng number mula 1 hanggang 50.
➤ Gamitin ang loop para maglagay ng line break bawat 10 numbers.

Even at Odd Separator
➤ I-loop mula 1 hanggang 30, tapos ilagay sa dalawang list: even at odd.
➤ Ipakita alin ang even, alin ang odd.

Simple Multiplication Table
➤ Gumawa ng loop na nagpapakita ng multiplication table ng 7 (mula 1×7 hanggang 10×7).

Sum Calculator
➤ I-compute ang kabuuan ng lahat ng number mula 1 hanggang 100 gamit lang loop logic.

Countdown Timer
➤ Mag-loop pababa (countdown) mula 10 hanggang 0, tapos magpakita ng “Time’s up!” sa dulo.

*/

// for (let i = 1; i <= 50; i++) {
//     console.log(i);
//     if(i % 10 === 0) {
//         console.log(`\n`);
//     }
// }

// const odd = [];
// const even = [];

// for (let i = 1; i <= 30; i++) {
//     if(!(i % 2 === 0)) {
//         odd.push(i);
//     } else {
//         even.push(i);
//     }
// }

// console.log(odd);
// console.log(even);

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//         if(j === 7) {
//             break;
//         }
//     }
//     console.log(`\n`);
// }

// let total = 0;
// for (let i = 1; i <= 100; i++) {
//     total += i;
// }
// console.log(`total: ${total}`);

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
//     if(i === 0) {
//         console.log('Time’s up!');
//     }
// }


/* 
💡 LEVEL 2: Arrays at Data Handling

Average Finder
➤ Meron kang array ng grades.
➤ Gamit ang for loop, kuhanin ang total, tapos ang average.

Find the Maximum
➤ May array ng random numbers.
➤ I-loop mo lahat at hanapin ang pinakamalaking value.

String Reverser
➤ I-loop ang characters ng string nang pabalik at i-form ang reversed version.

Character Counter
➤ Bilangin ilang beses lumabas ang letter “a” sa isang given string.

Array Cleaner
➤ May array na may null, undefined, o empty string.
➤ Loop through it at buuin ang bagong array na walang mga “empty” values.
*/

// const grades = [87, 88, 80, 85, 90];
// let  total = 0;

// for (let grade of grades) {
//     total += grade;
// }

// let average = total / grades.length;

// console.log(`total: ${total}`);
// console.log(`average: ${average}`);


// const word = "HELLO";
// let reversed = "";

// for (let i = word.length - 1; i >= 0; i--) {
//     reversed += word[i];
// }

// console.log(reversed);

// const word = "ambagan";
// const char = "a";
// let counter = 0;

// for (let i = 0; i < word.length; i++) {
//     if(word[i].toLowerCase() === char.toLowerCase()) {
//         counter++;
//     }
// }

// console.log(counter);

// const names = ["ako", undefined, null, "", "sila", "tayo"];
// const cleanNames = [];
// for (let i = 0; i < names.length; i++) {
//     if(names[i]) {
//         cleanNames.push(names[i]);
//     }
// } 

// console.log(cleanNames);



/* 
⚙️ LEVEL 3: Nested Loops (Loop sa loob ng Loop)

Full Multiplication Table (1–10)
➤ Gumamit ng nested for loops para ipakita ang buong multiplication table mula 1×1 hanggang 10×10.

Pattern Printer – Square of Stars
➤ Gamit ang nested loops, mag-print ng 5x5 na pattern ng asterisk *.

Right Triangle Pattern
➤ Gamit ang nested loops, gumawa ng ganitong pattern:

*
**
***
****
*****

Pyramid Pattern (Challenge)
➤ Gumawa ng pyramid shape gamit loops.

Matrix Display
➤ Ipakita ang 2D array (hal. 3x3 matrix) line by line gamit nested for loops.

*/

// for (let i = 1; i <= 10; i++) { // outer
//     for (let j = 1; j <= 10; j++) { // inner
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
//     console.log(`\n`);
// }

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= 5; j++) {
//         row += "* "
//     }
//     console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = i; j <= 5; j++) {
//         row += "* ";
//     }
//     console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "* "; 
//     }
//     console.log(row);
// }

// for (let i = 1; i <= 3; i++) {
//     let row = ""
//     for (let j = 1; j <= 3; j++) {
//         row += `${i}, ${j}`;
//     }

//     console.log(row);
// }

/* 
🧠 LEVEL 4: Logical & Real-World Scenarios

Leaderboard Generator
➤ May array ng scores.
➤ I-loop mo ito at i-display bilang ranked list (1st, 2nd, 3rd...).

Password Strength Checker
➤ I-loop bawat character sa password at bilangin kung ilang uppercase, lowercase, number, at special character.

Shopping Cart Total
➤ May array ng objects (item + price).
➤ I-loop mo lahat para makuha total cost.

Word Censor
➤ May list ng banned words.
➤ I-loop mo ang sentence at palitan ng *** ang mga banned words.

Data Filter
➤ May array ng users (may age, name, etc.).
➤ I-loop mo at piliin lang ang users na may age ≥ 18.

*/

// const scores = [12, 23, 35];
// const sorted = [...scores].sort((a, b) => b - a);

// console.log(`1st: ${sorted[0]}`);
// console.log(`2nd: ${sorted[1]}`);
// console.log(`3rd: ${sorted[2]}`);

// const password = "Aq7!xL9@asdfasfadsf";
// let counterUppercase = 0;
// let counterLowerCase = 0;
// let counterNumber = 0;
// let counterSpecialChar = 0;

// for (let i = 0; i < password.length; i++) {
//   const char = password[i];

//   if (/^[A-Z]$/.test(char)) {
//     counterUppercase++;  
//   } else if (/^[a-z]$/.test(char)) {
//     counterLowerCase++;
//   } else if (/^[0-9]$/.test(char)) {
//     counterNumber++;
//   } else if (/[!@#$%^&*(),.?":{}|<>]/.test(char)) {
//     counterSpecialChar++;
//   }
// }

// console.log("Uppercase:", counterUppercase);
// console.log("Lowercase:", counterLowerCase);
// console.log("Numbers:", counterNumber);
// console.log("Special chars:", counterSpecialChar);


/* 
🛒 1. Shopping Cart Total

Scenario:
May array ng product prices, gusto mong makuha ang total cost gamit ang for loop.

Sample Data:

prices = [250, 300, 150, 100]


Goal:
Kunin ang kabuuang halaga ng lahat ng items.

Expected Output:

Total Price: 800
*/

// const prices = [250, 300, 150, 100];

// let total = 0;
// // for (let i = 0; i < prices.length; i++) {
// //     total += prices[i];
// // }

// for (let item of prices) {
//     total += item;
// }
// console.log(`Total Price: ${total}`);
// // console.log(`Total Price: ${total}`);



/*
👥 2. Count Active Users

Scenario:
May listahan ng user statuses. Gamit ang for, bilangin ilan ang “active”.

Sample Data:

statuses = ["active", "inactive", "active", "active", "inactive"]


Expected Output:

Total Active Users: 3 
 */

// const statuses = ["active", "inactive", "active", "active", "inactive"];
// let totalActice = 0;

// // start from 0 index
// for (let i = 0; i < statuses.length; i++) {
//     if(statuses[i].toLowerCase() === 'active') {
//         totalActice++;
//     }
// }

// using for of 
// for (let item of statuses) {
//     if(item.toLowerCase() === 'active') {
//         totalActice++;
//     }
// }

// console.log(`Total Active Users: ${totalActice}`);

/* 
📈 3. Daily Sales Tracker

Scenario:
May sales data for one week. Gamit for, hanapin ang total sales at average sales.

Sample Data:

sales = [1200, 1800, 900, 1500, 2000, 1700, 1300]


Expected Output:

Total Sales: 10400  
Average Sales: 1485.71
*/

// const sales = [1200, 1800, 900, 1500, 2000, 1700, 1300];

// let totalSales = 0;
// for (let i = 0; i < sales.length; i++) {
//     totalSales += sales[i];
// }

// const totalAverage = totalSales / sales.length;
// console.log(`Total Sales: ${totalSales}`);
// console.log(`Average Sales: ${totalAverage.toFixed(2)}`);



/* 
📦 4. Warehouse Stock Alert

Scenario:
May stock quantities ng products. Gamit ang for, i-display lang ang mga item na below 10.

Sample Data:

stocks = [15, 9, 30, 4, 20]


Expected Output:

Low Stock Items (below 10):  
Index 1 -> 9  
Index 3 -> 4
*/

// console.log("Low Stock Items (below 10):");

// const stocks = [15, 9, 30, 4, 20];
// for (let i = 0; i < stocks.length; i++) {
//     if(stocks[i] < 10) {
//         console.log(`Index ${i} -> ${stocks[i]}`);
//     }
// }

/* 
✉️ 5. Email Campaign Sender

Scenario:
May listahan ng email addresses. Gamit for, i-display bawat email na isa-isang ipapadala.

Sample Data:

emails = ["a@gmail.com", "b@gmail.com", "c@gmail.com"]


Expected Output:

Sending email to: a@gmail.com  
Sending email to: b@gmail.com  
Sending email to: c@gmail.com
*/

// const emails = ["a@gmail.com", "b@gmail.com", "c@gmail.com"];

// for (let i = 0; i < emails.length; i++) {
//     console.log(`Sending email to: ${emails[i]}`);
// }

/* 
🧮 6. Multiplication Table Generator

Scenario:
Gamit ang for, gumawa ng multiplication table ng 5.

Expected Output:

5 x 1 = 5  
5 x 2 = 10  
5 x 3 = 15  
...  
5 x 10 = 50
*/

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }

/* 
🧑‍🎓 7. Class Grades Reporter

Scenario:
May grades ng 5 students. Gamit for, i-display lahat at hanapin ang pinakamataas.

Sample Data:

grades = [78, 92, 85, 88, 95]


Expected Output:

Student 1: 78  
Student 2: 92  
Student 3: 85  
Student 4: 88  
Student 5: 95  
Highest Grade: 95
*/

// const grades = [78, 92, 85, 88, 95];
// let highestGrade = grades[0];

// for (let i = 0; i < grades.length; i++) {
//     console.log(`Student ${i + 1}: ${grades[i]}`);
//     if(grades[i] > highestGrade) {
//         highestGrade = grades[i];
//     }
// }
// console.log(`Highest Grade: ${highestGrade}`);


/* 
🕓 8. Countdown Timer

Scenario:
Gamit for, gumawa ng countdown mula 10 hanggang 1.

Expected Output:

Countdown:  
10  
9  
8  
...  
1  
Go!
*/
// console.log(`Countdown: `);
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
//     if(i === 1) {
//         console.log('Go!');
//     }
// }

/* 
💳 9. Payment Reminder System

Scenario:
May listahan ng due dates in days. Kung mas mababa sa 5, markahan as “urgent”.

Sample Data:

dueDays = [2, 10, 1, 7, 3]


Expected Output:

Due Day 2 -> Urgent  
Due Day 10 -> OK  
Due Day 1 -> Urgent  
Due Day 7 -> OK  
Due Day 3 -> Urgent
*/

// const dueDays = [2, 10, 1, 7, 3];

// for (let i = 0; i < dueDays.length; i++) {
//     if(dueDays[i] < 5) {
//         console.log(`Due Day ${dueDays[i]} -> Urgent`);
//         continue;
//     }
//     console.log(`Due Day ${dueDays[i]} -> OK`);
// }


/* 
🧾 10. Receipt Line Items

Scenario:
May items at prices arrays. Gamit for, i-display bawat line item na may presyo at total.

Sample Data:

items = ["Burger", "Fries", "Drink"]
prices = [50, 30, 20]


Expected Output:

Burger - 50  
Fries - 30  
Drink - 20  
Total: 100
*/

// const items = ["Burger", "Fries", "Drink"];
// const prices = [50, 30, 20];

// let total = 0;
// for (let i = 0; i < items.length; i++) {
//     total += prices[i];
//     console.log(`${items[i]} - ${prices[i]}`);
// }
// console.log(`Total: ${total}`);


/* 
🧠 BONUS CHALLENGE (Harder)

Scenario:
May array ng random numbers. Gamit for, ihiwalay mo ang even at odd numbers.

Sample Data:

numbers = [2, 5, 8, 13, 21, 34]


Expected Output:

Even Numbers: 2, 8, 34  
Odd Numbers: 5, 13, 21
*/

// const numbers = [2, 5, 8, 13, 21, 34];
// const even = [];
// const odd = [];
// for (let i = 0; i < numbers.length; i++) {
//     if(i % 2 === 0) {
//         even.push(numbers[i]);
//     } else {
//         odd.push(numbers[i]);
//     }
// }

// console.log(`Even Numbers: ${even}`)
// console.log(`Odd Numbers: ${odd}`)