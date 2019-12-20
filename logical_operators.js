//==OR==

//alert( null || 2 || undefined );
//Answer: 2


//alert( alert(1) || 2 || alert(3) );
//Answer: 1 => fist show 1, then unidentify because it is an alert, AND stop at falty value


//alert( 1 && null && 2 );
//Answer: false => null because it is an alert 


//alert( null || 2 && 3 || 4 );
//Answer: 3


// let age3 = prompt("How old are you?", "");
// if (age3 >= 14 && age3 <= 90) {
//     alert("Inclusively");
// }


// let age4 = prompt("How old are you?", "");
// if (!(age4 >= 14 && age4 <= 90)) {
//     alert("Inclusively");
// } else {
//     alert("No inclusively")
// }


// let age5 = prompt("How old are you?", "");
// if (age5 < 14 || age5 > 90) {
//     alert("Exclusively");
// } else {
//     alert("No exclusively")
// }


// if (-1 || 0) alert( 'first' ); Answer: -1 truthy run
// if (-1 && 0) alert( 'second' ); Answer: false doesnt run
// if (null || -1 && 1) alert( 'third' ); Answer: true execute



// let userName1 = prompt("Who's there?", "");

// if (userName1 === null || userName1 === "") {
//     alert("Canceled")
// } else if (userName1 === "Admin") {
//     let userPassword1 = prompt("Password?", ""); {      
//         if (userPassword1 === "TheMaster") {
//             alert("Welcome!") 
//         } else if (userPassword1 === null || userPassword1 === "") {
//             alert("Canceled") 
//         } else {
//             alert("Wrong password");
//         }
//     }       
// } else {
//     alert("I don't know you");
// }
    
