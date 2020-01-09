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
    let strSplit = str.split("-");
    let strUpper = strSplit.map(function(word,index) {
        if (index == 0) {
            return word;
        } else {
            return word[0].toUpperCase() + word.slice(1);
        }
    })
    let strJoin = strUpper.join("");
    return strJoin;
}

console.log( camelize("background-color") );
console.log( camelize("list-style-image") );
console.log( camelize("-webkit-transition") );

///=================
function filterRange(arr, a, b) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > Math.abs(a-b)) {
        } else {
            newArray.push(arr[i]);
        }
    } return newArray;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)

console.log( arr ); // 5,3,8,1 (not modified)

///=================
function filterRangeInPlace(arr2, a, b) {
    for (let i = 0; i < arr2.length; i++) {
        if (a <= arr2[i] && arr2[i] <= b) {
        } else {
            arr2.splice(i,1);
        }
    } return arr2;
}

let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4

console.log( arr2 ); // [3, 1]

///=================
let arr3 = [5, 2, 1, -10, 8];

console.log( arr3.sort( (a,b) => b - a ) );

///=================
function copySorted(arr4) {
    let copyArray = [];
    for (let item of arr4) {
        copyArray.push(item);
    } 
    copyArray.sort( (a, b) => a.localeCompare(b) );
    return copyArray;
}

let arr4 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr4);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr4 ); // HTML, JavaScript, CSS (no changes)


function copySorted2(arr5) {
   return arr5.slice().sort();
}

let arr5 = ["HTML", "JavaScript", "CSS"];

let sorted2 = copySorted2(arr5);

console.log( sorted2 ); // CSS, HTML, JavaScript
console.log( arr5 ); // HTML, JavaScript, CSS (no changes)

///=================
function Calculator() {
    this.method = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
        '**': (x, y) => x ** y, 
    }
    this.calculate = function (string) {
        let array = string.split(" ");
        let a = +array[0];
        let op = array[1];
        let b = +array[2];
        return this.method[op](a,b);
    } 
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") );
console.log( calc.calculate("7 - 3") );
console.log( calc.calculate("10 * 5") );
console.log( calc.calculate("12 / 3") );
console.log( calc.calculate("2 ** 3") );


/* HỎI KHIÊM */
// function Calculator2() {
//     this.method2 = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b, 
//     }
//     this.calculate2 = function (string) {
//         let array = string.split(" ");
//         let a = +array[0];
//         let op = array[1];
//         let b = +array[2];

//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//           }

//         return this.method2[op](a,b);
//     } 
//     this.addMethod = function(op, function2) {
//         this.methods2[op] = function2;
//       };
// }

// let powerCalc = new Calculator2;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result2 = powerCalc.calculate2("2 ** 3");
// console.log( result2 )

///=================
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

console.log( names ); // John, Pete, Mary

///=================
let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [ john2, pete2, mary2 ];

let users2Mapped = users2.map(
    user => ({fullName: `${user.name} ${user.surname}`, id: user.id})
    )

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( users2Mapped[0].id ) // 1
console.log( users2Mapped[0].fullName ) // John Smith

let john3 = { name: "John", surname: "Smith", id: 1 };
let pete3 = { name: "Pete", surname: "Hunt", id: 2 };
let mary3 = { name: "Mary", surname: "Key", id: 3 };

let users3 = [ john3, pete3, mary3 ];

let users3Mapped = [];
users3.map(function(item) {
    let obj = {};
    obj.fullName = item.name + " " + item.surname;
    obj.id = item.id;
    return users3Mapped.push(obj);
    }
)
    


/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( users3Mapped[0].id ) // 1
console.log( users3Mapped[0].fullName ) // John Smith