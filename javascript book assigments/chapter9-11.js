// USER INPUT & CONDITIONAL STATEMENT

// answer no 1


let city = prompt("write a city name")

if (city === "karachi") {
    alert("welcome to city of lights")
}
else {
    alert("thanks")
}

// answer no 2

{
    let gender = prompt("write your gender")

    if (gender === "male") {
        alert("Good Morning Sir")
    }
    else if (gender === "female") {
        alert("Good Morning Ma'am")
    }
}

// answer no 3
{
    const signalColor = prompt("Enter the traffic signal color (Red, Yellow, Green):").toLowerCase();

    if (signalColor === "red") {
        alert("Must Stop");
    } else if (signalColor === "yellow") {
        alert("Ready to move");
    } else if (signalColor === "green") {
        alert("Move now");
    } else {
        alert("Invalid input. Please enter Red, Yellow, or Green.");
    }
}

// answer no 4 

{
    let fuelOFCar = prompt("write the fuel of your car in litre")
    if (fuelOFCar < 0.25) {
        alert("Please refill the fuel in your car")

    }


}

// answer no 5

{
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    }

    // a. true
    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
    }

    // b. false
    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }

    if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }

    // condition 2 is true
    // condition 4 is true

    // d.
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }


    // e.
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }

    // f. true
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }


}


// answer no 6

{
    let totalMark = 300;

    let sub1 = parseInt(prompt("write the number for subject1"))
    let sub2 = parseInt(prompt("write the number for subject2"))
    let sub3 = parseInt(prompt("write the number for subject3"))

    
    let totalObtMarks = sub1 + sub2 + sub3;

    let percentage = (totalObtMarks / totalMark) * 100;

    let grade = ""

    let remark = ""
    if (percentage >= 80) {

        grade = "A-one"
        remark = "Excellent"

    } else if (percentage >= 70) {
        grade = "A"
        remark = "Good"
    }
    else if (percentage >= 60) {
        grade = "B"
        remark = "You need to improve"

    }
    else if (percentage < 60) {
        grade = "Fail"
        remark = "Sorry"

    }


    document.write(`Total Mark/s: ${totalMark} </br> Marks Obtained: ${totalObtMarks} </br> percentage: ${percentage} </br> Grade: ${grade} </br> Remark: ${remark}`)


}

// answer no 7

{
    let secretNumber = 1;



    let guessNumber = parseInt(prompt("Guess the number between 1-10"))

    if (guessNumber === secretNumber) {
        alert("Bingo! Correct answer")
    }
    else if (guessNumber === ++secretNumber) {
        alert("Close enough to the correct answer")
    }
    else if (guessNumber != secretNumber) {
        alert("Wrong")
    }



}


// answer no 8 

{
    let number = parseInt(prompt("give number which is divisible by 3"))
    if (number % 3 === 0) {
        alert(`${number} is divisible by 3`)
    } if (number % 3 != 0) {
        alert(`${number} is not divisible by 3`)
    }
}


// answer no 9

{
    let number = parseInt(prompt("Write a number that checks whether the given input is an even number or an odd number"))

    if (number % 2 === 0) {
        alert(`${number} is even number`)

    }
    if (number % 2 != 0) {
        alert(`${number} is odd number`)

    }

}


// answer no 10

{
    let T = parseInt(prompt("Enter Temperature"))

    if (T > 40) {
        alert("“It is too hot outside")
    }
    else if (T > 30) {
        alert("The Weather today is Normal.")
    }
    else if (T > 20) {
        alert("Today's Weather is cool.")
    }
    else if (T > 10) {
        alert("OMG! Today's weather is so Cool.")
    }
}

// answer no 11

{
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Enter the operation (+, -, *, /, %):");

    let result;

    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Error! Division by zero.";
        }
    } else if (operation === "%") {
        if (num2 !== 0) {
            result = num1 % num2;
        } else {
            result = "Error! Division by zero.";
        }
    } else {
        result = "Invalid operation.";
    }

    alert("Result: " + result);


}