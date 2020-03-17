///============Javascript Pretest 1===========
console.log('===Javascript Pretest 1===');

//No.1 

const names1 = [
    'Pradip',
    'Van',
    'Thanh',
    'Ca',
    'Joshua',
    'Devendra',
    'Anzhelika'
    ]

function greetStudents(names1) {
    names1.forEach( name => 
      { console.log(`Hi ${name}, nice to meet you. I am Asabeneh. Welcome to Integrify.`)
    }); 
}

greetStudents(names1);

function greet(name, role) {
    return `Hi Angelica, nice to meet you. I am ${name} and I am a ${role} here at Integrify. Welcome to Integrify.`;
};

console.log(greet('Asabeneh', 'teacher'));
console.log(greet('Van', 'student'));
console.log(greet('Joshua', 'student'));

//No.2

const text2 = 'He earns 5000 euro from salary per month, 15000 euro annual bonus, 10000 euro online courses per month.'
const text2Arr = text2.split(' ');

let nums = text2Arr.filter( num => (!isNaN(parseInt(num)))).map( num => parseInt(num));
let income2 = nums.reduce( (total, num) => total + num, 0);

console.log(income2);

//No.3

let paragraph = 'In English language some words come more often than others to a sentence. Write a function called mostFrequentWords it takes a sentence or a paragraph as a parameter and return an array of objects. The object key is the word and its number of occurrence is the value. What are the ten most frequent words in a sentence or a paragraph of an English language. In English language some words come more often than others to a sentence. Write a function called mostFrequentWords it takes a sentence or a paragraph as a parameter and return an array of objects. The object key is the word and its number of occurrence is the value. What are the ten most frequent words in a sentence or a paragraph of an English language.';

function mostFrequentWords(paragraph) {
    let words = paragraph
    .replace(/[.,\s]/g, ' ')
    .split(' ')
    .filter( word => word !== '')
    .map( word => word.toLocaleLowerCase());

    let duplicateWord = words
        .map((word) => {
            return {
                count: 1,
                word: word
            }
        })
        .reduce((a, b) => {
            a[b.word] = (a[b.word] || 0) + b.count
            return a
        }, {})

        console.log(duplicateWord);
    
    let keysSorted = Object
    .keys(duplicateWord).sort(function(a,b){return duplicateWord[b]-duplicateWord[a]})
    .slice(0, 10);

    return keysSorted;
}

console.log(mostFrequentWords(paragraph));

//No.4

function sumOfNumbers(num) {
    let sum = 0;
    for (let i = 0; i<num; i++) {
        sum += i;
    } return sum;
}

let sumOfNumbers2 = (num) => {
    let sum = 0;
    for (let i = 0; i<num; i++) {
        sum += i;
    } return sum;
}

console.log(sumOfNumbers(10));
console.log(sumOfNumbers2(10));

//No.5

const numbers3 = [80, 85,70, 90, 65, 90, 80];
     
function getAverage(array) {
    return array.reduce( ( total, num ) => total + num, 0 ) / array.length
};

console.log(getAverage(numbers3));

function getMedian(array) {
    array.sort(function(a, b) {
        return a - b;
      });
    let mid = array.length / 2;
    return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
}

console.log(getMedian(numbers3));

function getRange(array) {
    let max = (array) => { return Math.max.apply(null, array);}
    let min = (array) => { return Math.min.apply(null, array);}
    return max(array) - min(array);
};

console.log(getRange(numbers3));

//No.6
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, scores] = student;
let [ , , JSscore, ReactScore] = scores;
console.log(name, skills, scores);
console.log(JSscore, ReactScore);

//No.7
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

let studentObj = { name: '', skills: '', score: ''};
function convertArrayToObject() {
    students.forEach( item => 
        studentObj.name = item[0]
        );
    students.forEach( item => 
        studentObj.skills = item[1]
        );
    students.forEach( item => 
        studentObj.score = item[2]
        );
    return studentObj;
}

convertArrayToObject(students);

const student3 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

let newStudent3 = { ...student3 };
newStudent3.skills.frontEnd.push({skill: 'BootStrap',level: 8});
newStudent3.skills.backEnd.push({skill: 'Express',level: 9});
newStudent3.skills.dataBase.push({ skill: 'SQL',level: 8});
newStudent3.skills.dataScience.push('SQL');
console.log(newStudent3);

//No.8
//Companies with two 'O'
let bigIT = 'Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon';
let bigITArr = bigIT.split(','); 
let filterBigIT = [];
for (let i = 0; i < bigITArr.length; i++) {
    if (bigITArr[i].match(/o/gi) === null) {
    } else if (bigITArr[i].match(/o/gi).length >= 2) {
        filterBigIT.push(bigITArr[i]);
    }
}
console.log(filterBigIT);

//Most popular initial letter

function mostFrequentInitial(countries) {
    let initials = countries
    .map( word => word.slice(0, 1));

    let repeatInitial = initials
        .map((letter) => {
            return {
                count: 1,
                letter: letter
            }
        })
        .reduce((a, b) => {
            a[b.letter] = (a[b.letter] || 0) + b.count
            return a
        }, {})

        console.log(repeatInitial);
    
    let letterSorted = Object
    .keys(repeatInitial).sort(function(a,b){return repeatInitial[b]-repeatInitial[a]})
    .slice(0, 1);

    return letterSorted;
}
console.log(mostFrequentInitial(countriesArr));

//Most popular languages

function tenMostSpokenLanaguages(countries) {
    
    const languageArr = countries.map( country => country.languages);
    const languageArrS = [].concat.apply([],languageArr);
    const languageSet = new Set (languageArrS);
    const languageUnique = Array.from(languageSet);

    const languageCount = [];
    for (let lang of languageUnique) {
        let count = 0;
        for (let country of countries) {
            if (country.languages.includes(lang)) {
                count++;
            }
        } languageCount.push({language: lang, count: count});
    }
    languageCount.sort((a,b) => {
        if (a.count < b.count) return 1
        if (a.count > b.count) return -1
        return 0
    })
    return languageCount;
}
console.log(tenMostSpokenLanaguages(countriesObj));

//No.9

function add(a,b){

    if(b !== undefined){
        return a + b;
    }

    return function(b){
        return a + b;
    }

}

console.log(add(2,3));
console.log(add(2)(3));
console.log(add(2,3) === add(2)(3));


//No.10
const numbers4 = [1,3,4];
const names4 = ['Asab', 'Eyob'];
const bools = [true, false, true, true, false];
const mixedData = ['Asab', 'JS', true, 2019, {name:'Asab', lang:'JS'}];
const object = [{name:'Asab', lang:'JS'}];

let checkDataTypes = (array, type) => {
    for (let i = 0; i < array.length; i++ ) {
        if ( array[i] === null) {
        } else {
            return typeof array[i] === type ? true : false;
        }
    }
}

console.log(checkDataTypes(numbers4, 'number')) // true
console.log(checkDataTypes(numbers4, 'string')) // false
console.log(checkDataTypes(names4, 'string')) // true
console.log(checkDataTypes(bools, 'boolean')) // true
console.log(checkDataTypes(mixedData, 'boolean')) // false
console.log(checkDataTypes(object, 'object')) //true