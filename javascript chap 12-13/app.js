// IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS

// answer no 1

{
let userInput = prompt("write a single character")

   let charVal = userInput.charCodeAt(0);



    if (charVal >= 48 && charVal <= 57) {

        alert("The character is a number.");

    } else if (charVal >= 65 && charVal <= 90) {
        alert("The character is an uppercase letter.");
    } else if (charVal >= 97 && charVal <= 122) {
        alert("The character is a lowercase letter.");
    } else {
        alert("The character is neither a number nor an English letter.");
    }

}


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

{
    let number = parseInt(prompt("check wether the number is positive or negative"));
    if (number > 0) {
        alert(`${number} is positive`)
    }
    if (number < 0) {
        alert(`${number} is negative`)
    }

}

// answer no 4

{
    let string = prompt("give one alphabet to check wether the alphabet is vowel or not ");

     if(String.length != 1) {
         alert("put only one alphabet")
     }

    if (string === "a") {
        alert(`true`)
    }
     else if (string === "e") {
        alert(`true`)
    }
    else if (string === "i") {
        alert(`true`)
    }
     else if (string === "o") {
        alert(`true`)
    }
    else if (string === "u") {
        alert(`true`)
    }
    else {

        alert("false")
    }
}

// answer no 5

{
    let password = "java123"
    let user = prompt("enter a password")

    if (user === "") {
        alert("enter a password")
         user = prompt("enter a password")
    }
    else if (user === password) {
        alert("“Correct! The password you entered matches the original password")

    }
    else if (user !== password) {
        alert("Incorrect password")

    }



}

// answer no 6

{
    var greeting;
    var hour = 20;
    if (hour < 18) {
         greeting = "Good day"; 
    }
    else {
         greeting = "Good evening";
    }
     console.log(greeting)
}


// answer no 7


{
    let time = parseInt(prompt("enter a time in 24 hour format"))
    if(time >= 0 && time < 12) {
        alert("Good Morning")
    } else if (time >= 12 && time < 17) {
        alert("Good afternoon")

    }
    else if(time >= 17 && time < 21) {
        alert("Good evening")
    } else if(time >= 21 && time <= 24) {
        alert("Good night")
    }

}