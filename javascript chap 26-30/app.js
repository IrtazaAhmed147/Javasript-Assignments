// MATH METHODS

// answer no 1

{
    function btn1() {
        let userInput = document.getElementById("positive-integar").value;
        // userInput = parseInt(userInput)
        let roundNumber = Math.round(userInput)
        let parseNumber = parseInt(userInput)
        let mathCeil = Math.ceil(userInput)

        if (userInput < 0) {
            alert("enter a positive integar")
        } else {
            document.getElementById("poslist").innerHTML = `Number: ${userInput} <br/>
            Round of the value: ${roundNumber}
            <br/> floor value: ${parseNumber}
             <br/> Ceil Value: ${mathCeil}`
        }
        
    }
}

// answer no 2



{
    function btn2() {
        let userInput = document.getElementById("negative-integar").value;
        let roundNumber = Math.round(userInput)
        let parseNumber = parseInt(userInput)
        let mathCeil = Math.ceil(userInput)

        // userInput = parseInt(userInput)

        if (userInput > 0) {
            alert("enter a negative integar")
        } else {
            document.getElementById("neglist").innerHTML = `Number: ${userInput} <br/>
            Round of the value: ${roundNumber}
            <br/> floor value: ${parseNumber}
             <br/> Ceil Value: ${mathCeil}`
        }
     
    }
}

// answer  no 3

{
    function btn3() {
        let userInput = document.getElementById("absolute-num").value;
        let a = Math.abs(userInput)
        document.getElementById("absnum-ans").innerHTML = `The absolute number of ${userInput} is ${a}`
    }
}


// answer no 4

{
    function btn4() {
        let a = Math.ceil(Math.random() * 6)
        document.getElementById("roll").innerHTML = `random value of dice is ${a}`

    }
}

// answer no 5

{
    function btn5() {
        let a = Math.ceil(Math.random() * 4)
      
        if (a <= 2) {

            document.getElementById("toss").innerHTML = `Head`
        } if (a >= 3 && a <= 4) {

            document.getElementById("toss").innerHTML = `Tails`

        }




    }
}

// answer no 6
{
    let randomNumber = Math.floor(Math.random()*89)
    document.getElementById("randomBtw100").innerHTML = `random number between 1 and 100: ${randomNumber}`
}


// answer no 7 
{
    function btn7() {

        let userInput = document.getElementById("weight").value
        userInput = parseInt(userInput)
        document.getElementById("weightAns").innerHTML = `The weight of user is ${userInput} kilograms`
        
    }
}

// answer no 8

{
    function btn8() {

       
        
        let userInput = document.getElementById("guess").value

        userInput = parseInt(userInput)
        let random = 3;
       
        if (userInput === random) {
            document.getElementById("guess-ans").innerHTML = `Congratulation you guessed right`
        } if (userInput !== random) {
            
            document.getElementById("guess-ans").innerHTML = `Try again`
        }
    }
    
}