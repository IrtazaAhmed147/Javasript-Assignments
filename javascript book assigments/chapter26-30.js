// MATH METHODS

// answer no 1

{
    function btn1() {
        let userInput = prompt('Enter a positive integar');
        // userInput = parseInt(userInput)
        let roundNumber = Math.round(userInput)
        let parseNumber = parseInt(userInput)
        let mathCeil = Math.ceil(userInput)

        if (userInput < 0) {
            alert("enter a positive integar")
        } else {
            document.write("poslist").innerHTML = `Number: ${userInput} <br/>
            Round of the value: ${roundNumber}
            <br/> floor value: ${parseNumber}
             <br/> Ceil Value: ${mathCeil}`
        }

    }
}

// answer no 2



{
    function btn2() {
        let userInput = prompt('Enter a positive integar');
        let roundNumber = Math.round(userInput)
        let parseNumber = parseInt(userInput)
        let mathCeil = Math.ceil(userInput)

        // userInput = parseInt(userInput)

        if (userInput > 0) {
            alert("enter a negative integar")
        } else {
            document.write(`Number: ${userInput} <br/>
            Round of the value: ${roundNumber}
            <br/> floor value: ${parseNumber}
             <br/> Ceil Value: ${mathCeil}`)
        }

    }
}

// answer  no 3

{
    function btn3() {
        let userInput = prompt('The absolute number of');
        let a = Math.abs(userInput)
        document.write(`The absolute number of ${userInput} is ${a}`)
    }
}


// answer no 4

{

    let a = Math.ceil(Math.random() * 6)
    document.write(`random value of dice is ${a}`)


}

// answer no 5

{

    let a = Math.ceil(Math.random() * 4)

    if (a <= 2) {

        document.write(`Head`)
    } if (a >= 3 && a <= 4) {

        document.write(`Tails`)

    }





}

// answer no 6
{
    let randomNumber = Math.floor(Math.random() * 89)
    document.write(`random number between 1 and 100: ${randomNumber}`)
}


// answer no 7 
{


    let userInput = prompt('Enter your weight in kilograms')
    userInput = parseInt(userInput)
    document.write(`The weight of user is ${userInput} kilograms`)


}

// answer no 8

{



    let userInput = prompt('Guess the secret number between 1 to 10')

    userInput = parseInt(userInput)
    let random = 3;

    if (userInput === random) {
        document.write(`Congratulation you guessed right`)
    } if (userInput !== random) {

        document.write(`Try again`)
    }


}