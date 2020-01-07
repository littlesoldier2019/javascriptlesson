///=================
// function CalculateNumber() {
//     this.read = function () {
//       this.num1 = +prompt("Enter a number?","");
//       this.num2 = +prompt("Enter a number?","");
//     }
//     this.sum = function () {
//       return this.num1 + this.num2; 
//     }
//   }
  
  
//   let calculatorNumber = new CalculateNumber();
//   calculatorNumber.read();
  
//   alert( "Sum=" + calculatorNumber.sum() );

///=================
let number2 = prompt( "Enter a number","");

function readNumber() {
    if (number2 === null || number2 === "") {
        alert( "null")
    } else if (isNaN(number2) === false) {
        alert( number2 )
    } else {
        prompt( "Enter a number","")
    }
}

readNumber(number2);




