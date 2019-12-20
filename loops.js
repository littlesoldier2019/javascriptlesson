
//===Javasript.info===

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i4 = 0;
// while (i4 < 3) {
//     alert( `number ${i4}!` );
//     i4++;
// }

// let inputNumber = prompt("Enter a random number greater than 100", "");
// for (let i = 0; ; i++) {
//     if (inputNumber > 100 || inputNumber === "" || inputNumber === null) {
//         alert("Thank you!");
//     break
//     } else (inputNumber <= 100)
//     inputNumber = prompt("Enter a random number greater than 100", "");
// }       

// let inputNum;
// do {
//     inputNum = prompt("Enter a number greater than 100?", 0);
// } while (inputNum <= 100 && inputNum);

let n = 10;
let primeNumber = [];
nextPrime:
for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
        } primeNumber.push(i);
} 

console.log(primeNumber)