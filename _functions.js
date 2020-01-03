// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }


// function checkAge2(age) {
//     return (age > 18)? true : confirm("Did parents allow you?");
//   }

// console.log(checkAge2(20));

// function checkAge3(age) {
//     return age > 18 || confirm("Did your parents allow you?");
// }

// console.log(checkAge3(0));

// function min(a,b) {
//     if (a < b) {
//         return a;
//     } else if (a > b) {
//         return b;
//     } else {
//         return a || b;
//     }

// }

// console.log(min(2,5));
// console.log(min(3,-1));
// console.log(min(1,1));


// function pow(y,z)  {
//     let resultPow = y;
//     for (let i = 1; i < z; i++) {
//         resultPow *= y;
//     } return resultPow;
// }
// let y = prompt("Choose value for y","")
// let z = prompt("Choose a value to multible y by z time","")
// alert(pow(y,z))


// let ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }

// ask (
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.") 
// )

// function pow(x,k) {
//   let result = 1;
  
//   for (let i = 0; i < k; i++) {
//       result*=x;
//     } 
//     return result;
// }

// let x = prompt("x?",'');
// let k = prompt("k?",'');

// if (k <= 0) {
//   alert(`Power ${k} is not supported, 
//   please enter an integer number greater than zero`);
// } else {
//   alert( pow(x,k) );
// }
