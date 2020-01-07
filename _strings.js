function ucFirst(string1) {
    return string1.charAt(0).toUpperCase() + string1.slice(1);
}

console.log(ucFirst("john"));

///=================
function checkSpam(string2) {
    let lowerString2 = string2.toLowerCase()
    return lowerString2.includes("viagra") || lowerString2.includes("xxx");
}

console.log(checkSpam("buy ViAgRA now")) // true
console.log(checkSpam("free xxxxx")) // true
console.log(checkSpam("innocent rabbit")) // false

///=================
function truncate(string3, maxlength) {
    if(string3.length <= maxlength) {
        return string3;
    } else {
        return string3.slice(0, maxlength - 1) + "..."
    }
}


console.log(truncate("What I'd like to tell on this topic is:", 20))
console.log(truncate("Hi everyone!", 20))

