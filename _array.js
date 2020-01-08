///=================
let styles = ["Jazz","Blues"];

console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);

styles.splice(((styles.length -1)/2),1,"Classics");
console.log(styles);

console.log(styles.shift(0));

styles.unshift("Rap","Reggae");
console.log(styles);

///=================
// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2]();

///=================
// let inputNumber1 = +prompt("Enter a number","")
// let inputNumber2 = +prompt("Enter a number","")

// function sumInput() {
//     if(isNaN(inputNumber1) === true || isNaN(inputNumber2) === true || inputNumber2 === "" || inputNumber2 === null) {
//     } else {
//         alert(inputNumber1 + inputNumber2); 
//     }
// }

// function sumInput() {
//     let numbers = [];
//     while (true) {
//         let inputNumber = prompt("Enter a number","");
//         if (!isFinite(inputNumber) === true || inputNumber === "" || inputNumber === null) break;
//         numbers.push(+inputNumber);
//     }

//     let sum = 0;
//     for (let num of numbers) {
//         sum += num;
//     }
//     return sum;
// }

// alert( sumInput() );

///=================

function getMaxSumSlow(array) {
    let maxSum = 0;

    for (let i = 0; i < array.length; i++) {
        let sum = 0;
        for (let j = i; j < array.length; j++) { 
            sum += array[j];
            maxSum = Math.max(maxSum,sum);
        }
    } 
    return maxSum;
}
console.log( getMaxSumSlow([-1, 2, 3, -9]) ); // 5
console.log( getMaxSumSlow([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSumSlow([-2, -1, 1, 2]) ); // 3
console.log( getMaxSumSlow([1, 2, 3]) ); // 6
console.log( getMaxSumSlow([100, -9, 2, -3, 5]) ); // 100

function getMaxSumFast(array) {
    let maxSum = 0;
    let sum = 0;
    for (let item of array) {
        sum += item;
        maxSum = Math.max(maxSum,sum);
        if (sum < 0) sum = 0;
        }
    return maxSum;
}

console.log( getMaxSumFast([-1, 2, 3, -9]) ); // 5
console.log( getMaxSumFast([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSumFast([-2, -1, 1, 2]) ); // 3
console.log( getMaxSumFast([1, 2, 3]) ); // 6
console.log( getMaxSumFast([100, -9, 2, -3, 5]) ); // 100

///=================
function camelize(str) {
    let array = str.split("-");
    let array2 = array[].toUpperCase();
    return array2;
}

console.log( camelize("background-color") );
console.log( camelize("list-style-image") );
console.log( camelize("-webkit-transition") );