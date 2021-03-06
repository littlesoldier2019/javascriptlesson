//===Exercise 1 Variables===
console.log("===1 VARIABLES===")
//Ex1
let example1, example2, example3, example4;
//Ex2
let favDrink = "Coca cola";
let favFood = "Cheese";
let favNumber = 10;
let favCountry = "Finland";
//Ex3
let firstName1 = "Helmi";
let lastName1 = "Nguyen";
let maritalStatus1 = "married";
let country1 = "Vietnam";
let age1 = 30;
//Ex4
let firstName2 = "Matti",
    lastName2 = "Nieminen",
    maritalStatus2 = "single",
    country2 = "Finland",
    age2 = 40;
//Ex5
let myAge = 25;
let yourAge = 30;
console.log("I am " + myAge + " years old")
console.log("You are " + yourAge + " years old")

//===Exercise 2 Comments===
console.log("===2 COMMENTS===")
//Ex1
//Comments can make code readable
/* Comments
can make code readable,
easy to use
and informative */

//===Exercise 3 Data types===
console.log("===3 DATA TYPES===")
//Ex1
let varExample = "some randon stuff";
let booleanExample = false;
let undefinedExample = undefined;
let nullExample = null;

//Ex2
console.log(typeof(varExample))
console.log(typeof(booleanExample))
console.log(typeof(undefinedExamplee))
console.log(typeof(nullExample))

//===Exercise 4 Strings===
console.log("===4 STRINGS===")

//Ex1
let nameCompany = "Coding Academy ";
//Ex2
console.log(nameCompany)
//Ex3
console.log(nameCompany.length)
//Ex4
console.log(nameCompany.toUpperCase())
//Ex5
console.log(nameCompany.toLocaleLowerCase())
//Ex6
console.log(nameCompany.slice(0, 6))
console.log(nameCompany.substring(0, 6))
console.log(nameCompany.substr(0, 6))
//Ex7
let sentence1 = "You cannot end a sentence with because because because is a conjunction"
console.log(sentence1.substr(31, 24))
//Ex8
console.log(nameCompany.includes("Academy"))
//Ex9
console.log(sentence1.includes("Academy"))
//Ex10
console.log(nameCompany.split(" "))
//Ex11
let companies1 = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies1.split(","))
//Ex12
console.log(nameCompany.replace("Coding Academy", "Microsolf Academy"))
//Ex13
console.log(nameCompany.charAt(10))
//Ex14
console.log(nameCompany.charCodeAt("A"))
//Ex15
console.log(nameCompany.indexOf("c"))
//Ex16
console.log(nameCompany.lastIndexOf("c"))
//Ex17
console.log(sentence1.indexOf("because"))
//Ex18
console.log(sentence1.lastIndexOf("because"))
//Ex19
console.log(sentence1.search("because"))
//Ex20
console.log((" Coding Academy ").trim())
//Ex21
console.log(nameCompany.startsWith("Coding"))
//Ex22
console.log(nameCompany.endsWith("y"))
//Ex23
console.log(nameCompany.match("c"))
//Ex24
console.log(sentence1.match("because"))
//Ex25
let string1 = "Coding";
let string2 = " Academy";
console.log(string1.concat(string2))
//Ex26
console.log(nameCompany.repeat(5))
//Ex27
let salaryExample = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
console.log(salaryExample.indexOf("5000"))
console.log(salaryExample.indexOf("10000"))
console.log(salaryExample.indexOf("15000"))
console.log(salaryExample.substr(9, 4))
console.log(salaryExample.substr(42, 5))
console.log(salaryExample.substr(67, 5))
console.log(5000 + 10000 + 15000)

let salaryArray = salaryExample.split(" ");
console.log(salaryArray)

let salarySum = 0;
for (let i = 0; i <= salaryExample.length - 1; i++) {
    if (isNaN(salaryArray[i]) == false) {
        salarySum += Number(salaryArray[i]);
    } 
}
console.log(salarySum);

//===
let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

let textArr = text.split(' ');
console.log(textArr);

let num = textArr.filter( item => (!isNaN(parseInt(item))) ).map( item => parseInt(item) )
let balance = num.reduce( (total,num) => total + num)
console.log(balance);

//=== Exercise 5 Boolean ===
console.log("===BOOLEAN===")
//Ex1
console.log(Boolean(2 == 2))
console.log(Boolean(3 != 2))
console.log(Boolean("2" !== 2))
//Ex2
console.log(Boolean(3 == 2))
console.log(Boolean("2" != 2))
console.log(Boolean("2" === 2))
//Ex3
console.log(Boolean(4 > 3)) //True
console.log(Boolean(4 >= 3)) //True
console.log(Boolean(4 < 3)) //False
console.log(Boolean(4 <= 3)) //False
console.log(Boolean(4 == 4)) //True
console.log(Boolean(4 === 4)) //True
console.log(Boolean(4 != 4)) //False
console.log(Boolean(4 !== 4)) //False
console.log(Boolean(4 != "4")) //False
console.log(Boolean(4 == '4')) //True
console.log(Boolean(4 === '4')) //False

//=== Exersise 6 Data Type===
console.log("===DATA TYPE===")

//=== Exersise 7 Logical Operators===
console.log("===LOGICAL OPERATORS===")
console.log(Boolean(4 > 3 && 10 < 12)) //True
console.log(Boolean(4 > 3 && 10 > 12)) //False
console.log(Boolean(4 > 3 || 10 < 12)) //True
console.log(Boolean(4 > 3 || 10 > 12)) //True
console.log(Boolean(!(4 > 3))) //False
console.log(Boolean(!(4 < 3))) //True
console.log(Boolean(!(false))) //True
console.log(Boolean(!(4 > 3 && 10 < 12))) //False
console.log(Boolean(!(4 > 3 && 10 > 12))) //True
console.log(Boolean(!(4 === '4'))) //True

//=== Exersise 8 Conditionals===
console.log("===CONDITIONALS===")
//Ex1
/*let age3 = prompt("Enter your age: ");
if (age3 >= 18) {
    console.log("You are old enough to drive.");
} else {
    console.log("You are left with 3 years to drive.")
}
//Ex2
let age4 = prompt("Enter your age: ");
let ageDifference = age4 - myAge;
if (ageDifference > 0) {
    console.log("You are " + ageDifference + " years older than me");
} else if (ageDifference < 0){
    console.log("You are " + ageDifference + " years younger than me")
} else {
    console.log("We are the same age")
}*/
//Ex3
let a = 4;
let b = 3;
let compareAB = Boolean(a > b);
if (compareAB = true) {
    console.log("4 is greater than 3")
} else {
    console.log("a is less than b")
}

//Ex4

function gradeStudent(grade) {
    if ( grade >= 80 && grade <=100) {
        return 'A';
    } else if ( grade >= 70 && grade <=79) {
        return 'B';
    } else if ( grade >= 60 && grade <=69) {
        return 'C';
    } else if ( grade >= 50 && grade <=59) {
        return 'D';
    } else if ( grade >= 0 && grade <=49) {
        return 'F';
    }
}

console.log(gradeStudent(80));

//Ex5

// let userInput = prompt('What month?','').toLocaleLowerCase();

// function getSeason(userInput) {
//     if ( userInput === 'September' || userInput === 'October' || userInput === 'November' ) {
//         return 'The season is Autumn';
//     } else if ( userInput === 'December' || userInput === 'January' || userInput === 'February' ) {
//         return 'The season is Winter';
//     } else if ( userInput === 'March' || userInput === 'April' || userInput === 'May' ) {
//         return 'The season is Spring';
//     } else if ( userInput === 'June' || userInput === 'July' || userInput === 'August' ) {
//         return 'The season is Summer';
//     }
// }

// alert(getSeason(userInput));

//===Loops===
console.log("===LOOPs===")
//Ex1
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}


let ii = 0;
do {
    console.log(ii);
    ii++;
} while (ii <= 10);

// Ex2
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

let i1 = 10;
while (i1 >= 0) {
    console.log(i1);
    i1--;
}


let i2 = 10;
do {
    console.log(i2);
    i2--;
} while (i2 >= 0);

//Ex3
let symbol = "#";
for (let i = 0; i <= 7; i++) {
    console.log(symbol.repeat(i))
}

//Ex4
const array1 = ["HTML", "CSS", "JavaScript"]
for (let i = 0; i <= array1.length - 1; i++) {
    console.log(array1[i])
}

//Ex5
let evenNumber = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//Ex6
let oddNumber = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

//Ex7
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum)

//Ex8
let sumEvens = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumEvens = sumEvens + i;
    }
}
console.log(sumEvens)

//Ex9
let sumOdds = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        sumOdds = sumOdds + i;
    }
}
console.log(sumOdds)

//=== Exercise 9 Arrays===
console.log("===Exercise 9 ARRAY===")

//Ex1
const array2 = []

//Ex2
const array3 = [3, 2, 9, 4, 6, 8, 5]

//Ex3
console.log(array3.length)

//Ex4
console.log(array3[0])
console.log(array3[6])
console.log(array3[3])

//Ex5
const mixedDataTypes = ["Helmi", "Nguyen", 30, "Espoo", true, false]

//Ex6
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//Ex7
console.log(itCompanies)

//Ex8
console.log(itCompanies.length)

//Ex9
console.log(itCompanies[0])
console.log(itCompanies[6])
console.log(itCompanies[3])

//Ex10
for (let i = 0; i <= itCompanies.length - 1; i++) {
    console.log(itCompanies[i])
}

//Ex11
for (let i = 0; i <= itCompanies.length - 1; i++) {
    console.log(itCompanies[i].toUpperCase())
}

//Ex12
console.log(itCompanies + " are big IT companies")

//Ex13
let companyX = "Facebook";
for (let i = 0; i <= itCompanies.length - 1; i++) {
    if (companyX === itCompanies[i]) {
        console.log(companyX);
        break
    } else if (companyX !== itCompanies[i]) {
        console.log(companyX + " is not found");
        break
    } else {
        console.log("Can not identify");
    } 
}

for (let i = 0; i <= itCompanies.length - 1; i++) {
    if (companyX === itCompanies[i]) {
        console.log(companyX);
        break
    } else (companyX !== itCompanies[i]) 
        console.log(companyX + " is not found");
}


//Ex14

let filterO = [];
for (let i = 0; i <= itCompanies.length - 1; i++) {
    if (itCompanies[i].match(/o/gi) === null) {
    } else (itCompanies[i].match(/o/gi).length > 1)
        filterO.push(itCompanies[i]);
}

console.log(filterO)

for (let i = 0; i <= itCompanies.length - 1; i++) {
    if (itCompanies[i].includes("O") == true) {
        filterO += itCompanies[i];
    } 
}
console.log(filterO)

//Ex15
console.log(itCompanies.sort())

//Ex16
let reverseArray = [];
for (let i = 0; i <= itCompanies.length - 1; i++) {
    if (a - b > 0) {
        reverseArray.push(itCompanies[i]);
    }
}

console.log(reverseArray)

//Ex17
console.log(itCompanies.reverse())

//Ex18
console.log(itCompanies.slice(0,3))

//Ex19
console.log(itCompanies.length)
console.log(itCompanies.slice(-3))

//Ex20
console.log(itCompanies.slice(1,6))

//Ex21
itCompanies.shift()
console.log(itCompanies)

//Ex22
console.log(itCompanies.slice(3,4))

//Ex23
itCompanies.pop()
console.log(itCompanies)

//Ex24
console.log(itCompanies.splice())

//=== Exercise 10 Functions ===
console.log("===Exercise 10 FUNCTIONS===")

//ex47 check Prime number

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0 ) {
            return 'NOT a prime';
        } else {
            return 'Is a prime';
        }
    }
}

console.log(isPrime(5));

//Ex48 check duplicate in array

var names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']

var uniq = names
  .map((name) => {
    return {
      count: 1,
      name: name
    }
  })
  .reduce((a, b) => {
    a[b.name] = (a[b.name] || 0) + b.count
    return a
  }, {})

var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)

console.log(duplicates); // [ 'Nancy' ]


//=== Exercise Functional Programming ===
console.log("===Exercise Functional Programming===")

const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//ex 3
 countries.forEach( (country) => {console.log(country)});

//ex 4
names2.forEach( (name) => {console.log(name)});

//ex 5
numbers.forEach( (number) => {console.log(number)});

//ex 6
let newCountries = [];
countries.map( (country) => {newCountries.push(country.toUpperCase())} );
console.log(newCountries);

//ex 7
let newNumbers = [];
numbers.map( (number) => newNumbers.push(number*2) );
console.log(newNumbers)

//ex 8
names.map( (name) => {console.log(name.toUpperCase())} );

//ex 9
let landCountry = [];
countries.filter( function(country) { if (country.toLowerCase().includes('land') === true) { landCountry.push(country)} 
})
console.log(landCountry);

//ex 10
let sixCountry = [];
countries.filter( function(country) { if (country.length === 6) { sixCountry.push(country)} 
})
console.log(sixCountry);

//ex 11
let sevenCountry = [];
countries.filter( function(country) { if (country.length >= 6) { sevenCountry.push(country)} 
})
console.log(sevenCountry);

//ex 12
let ECountry = [];
countries.filter( function(country) { if (country.indexOf('E') === 0) { ECountry.push(country)} 
})
console.log(ECountry); 

//ex 13
let newArrCountries = countries.map((country) => country.toUpperCase()).filter((country) => country.includes('I'));
console.log(newArrCountries);