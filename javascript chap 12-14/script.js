// answer no 1

// let checkCharacter = prompt("write")
// {

    // console.log(checkCharacter(prompt("write")));
    // function checkCharacter(char) {
//     while (char.length !== 1) {
//         alert("Please enter a single character.");
//         checkCharacter(prompt("write"))
//     }

//     let a = char.charCodeAt(0);
//     // let asciiValue = prompt("write")

//     if (a >= 48 && a <= 57) {

//         alert("The character is a number.");
//         // checkCharacter(prompt("write"))
//     } else if (a >= 65 && a <= 90) {
//         alert("The character is an uppercase letter.");
//     } else if (a >= 97 && a <= 122) {
//         return "The character is a lowercase letter.";
//     } else {
//         alert("The character is neither a number nor an English letter.");
//     }
// }

// checkCharacter('a')
// }


// answer no 2

{
    let num1 = parseInt(prompt("enter first number"))  
    let num2 = parseInt(prompt("enter second number")) 

    if (num1 === num2) {
        alert("both integars are equal")
    }
    else if (num1 > num2) {
        alert(`${num1} is greater than ${num2}`)
    } 
    else if (num1 < num2) {
        alert(`${num1} is less than ${num2}`)
    }
}


// answer no 3

// {
//     let number = parseInt(prompt("check wether the number is positive or negative"));
//     if (number > 0) {
//         alert(`${number} is positive`)
//     }
//     if (number < 0) {
//         alert(`${number} is negative`)
//     }

// }

// answer no 4

// {
//     let string = prompt("give one alphabet to check wether the alphabet is vowel or not ");
//     while (string.length != 1) {
//         alert("put only one alphabet")
//         string = prompt("give one alphabet");

//     } 
//     if (string === "a") {
//         alert(`true`)
//     } 
//      else if (string === "e") {
//         alert(`true`)
//     } 
//     else if (string === "i") {
//         alert(`true`)
//     } 
//      else if (string === "o") {
//         alert(`true`)
//     } 
//     else if (string === "u") {
//         alert(`true`)
//     } 
//     else {

//         alert("false")
//     }
// }

// answer no 5

// {
//     let password = "irtaza123" 
//     let user = prompt("enter a password")
//     while (user === "") {
//         alert("enter a password")
//         user = prompt("enter a password")
//     }
//     while(user !== password) {
//         alert("Incorrect password")
//         user = prompt("enter a password")
//     }
//     if (user === password) {
//         alert("“Correct! The password you entered matches the original password")

//     }



// }

// answer no 6

// {
//     var greeting;
// var hour = 20;
// if (hour < 18) {
// greeting = "Good day"; }
// else {
// greeting = "Good evening";
// }
// console.log(greeting)
// }


// answer no 7


// {
//     let time = parseInt(prompt("enter a time in 24 hour format"))
//     if(time >= 0 && time < 12) {
//         alert("Good Morning")
//     } else if (time >= 12 && time < 17) {
//         alert("Good afternoon")

//     }
//     else if(time >= 17 && time < 21) {
//         alert("Good evening")
//     } else if(time >= 21 && time <= 24) {
//         alert("Good night")
//     } 

// }