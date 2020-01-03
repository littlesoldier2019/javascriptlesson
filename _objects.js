///=================
let user = {};
user.name = "John";
user.name = "Smith";
user.name = "Pete";
delete user.name;

///=================
let obj = {};
function isEmpty(obj) {
    if ("key" in obj === false ) {
    return true;
    } else {
    return false;
    }
}

console.log(isEmpty(obj))

///=================
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sumSalaries = salaries.John + salaries.Ann + salaries.Pete;

console.log(sumSalaries)


let sumSalaries1 = 0;
for (let key in salaries) {
    sumSalaries1 += salaries[key];
}

console.log(sumSalaries1)

///=================
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

let multiplyNumeric = {};

for (let key in menu) {
    if (typeof menu[key] == "number") {
        multiplyNumeric[key] = menu[key]*2;
    } else {
        multiplyNumeric[key] = menu[key];
    } 
}

console.log(multiplyNumeric)

///=================
let calculator = {
    read() {
        calculator.prom1 = +prompt("Enter a value","");
        calculator.prom2 = +prompt("Enter a value","");
    },
    sum() {
        return this.prom1 + this.prom2;
    },
    mul() {
        return this.prom1 * this.prom2;
    },
  };
  
  ///=================
calculator.read();
   alert( calculator.sum() );
   alert( calculator.mul() );

let ladder = {
    step: 0,
    up() {
      this.step++;
    },
    down() {
      this.step--;
    },
    showStep: function() { 
      alert( this.step );
    }
  };

ladder.up().up().down().showStep();


let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  }
  
ladder.up().up().down().up().down().showStep();

ladder
  .up()
  .up()
  .down()
  .up()
  .down()
  .showStep();