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


