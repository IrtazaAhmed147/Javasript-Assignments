// STRING METHODS

// answer no 1



{
    let firstName = prompt("enter your first name")
    let lastName =  prompt("enter your last name")

    let fullName = `${firstName} ${lastName}`
    alert(`welcome ${fullName}`)
}

// answer no 2

{
    let userInput = prompt("enter your favourite mobile name");

    alert(`Length of string: ${userInput.length}`)

}

// answer no 3

{
    document.write(`<h3>Answer no 3</h3>`)

    let word = "Pakistani"

    let index = word.indexOf("n")
    document.write(`string: ${word}: </br> Index of 'n': ${index} <br/>`)
}

// answer no 4

{
    document.write(`<h3>Answer no 4</h3>`)
    let word = "hello world"
    let index = word.lastIndexOf("l")
    document.write(`string: ${word}: </br> Last Index of 'l': ${index} <br/>`)
}

// answer no 5

{
    document.write(`<h3>Answer no 5</h3>`)
    let word = "Pakistani"
    let index = word[3]
    document.write(`string: ${word}: </br> Character at index 3: ${index} <br/>`)
}

// answer no 6

{
    document.write(`<h3>Answer no 6</h3>`)
    let firstName = prompt("enter your first name")
    let lastName = prompt("enter your last name")
    let fullName = firstName + " " + lastName
    alert(`welcome ${fullName}`)
}


// answer no 7

{
    document.write(`<h3>Answer no 7</h3>`)
    let city = "hyderabad"

    let replaceCity = city.replace("hyder", "islam")


    document.write(`city: ${city} </br> After replacement: ${replaceCity} <br/>`)
}

// answer no 8
{
    document.write(`<h3>Answer no 8</h3>`)
    let message = "Ali and Sami are best friends. They play cricket and football together"
    let change = message.replaceAll("and", "&")
    document.write(`${change} <br/>`);
}

// answer no 9

{
    document.write(`<h3>Answer no 9</h3>`)
    let value = "472"
    let number = parseInt(value)


    document.write(`value: ${value} <br/> type of: ${typeof value} <br/> value: ${number} <br/> type of: ${typeof number} <br/> `)
}

// answer no 10

{
    document.write(`<h3>Answer no 10</h3>`)
    let userInput = prompt("enter a word to convert in uppercase")
    let upperCase = userInput.toUpperCase()

    document.write(`userinput: ${userInput} <br/> Upper case: ${upperCase} <br/>`)
}

// answer no 11

{
    document.write(`<h3>Answer no 11</h3>`)
    let userInput = prompt("enter random word")
    userInput = userInput.toLowerCase().split(' ')


    for (let a = 0; a < userInput.length; a++) {
        letter = userInput[a].charAt(0).toUpperCase() + userInput[a].slice(1);



        document.write(`Userinput: ${userInput} <br/> Title Case: ${letter} <br/>`)
    }

}

// answer no 12

{
    document.write(`<h3>Answer no 12</h3>`)
    let number = 35.36

    let string = number.toString()
    let output = string.replace('.', '')
    document.write(`Number: ${number} <br/> Result: ${output} <br/>`)
}

// answer no 13

{
    let isValidUsername = true
    let userName = prompt("enter username")


    while (true) {
        isValidUsername = true
        for (let i = 0; i < userName.length; i++) {
            if (userName.charCodeAt(i) === 33 || userName.charCodeAt(i) === 44 || userName.charCodeAt(i) === 46 || userName.charCodeAt(i) === 64) {
                // alert("enter a valid username")
                isValidUsername = false
                break

            }

        }

        if (isValidUsername) {
            break
        }

        alert("Username contains invalid characters. Please avoid using [@ . , !]");
        userName = prompt("Enter a valid username:");

    }
    alert("Username is valid: " + userName);
}

// answer no 14

{

    function check() {

        let Arr = ["cake", "apple pie", "cookie", "chips", "patties"]
        let userInput = document.getElementById("input").value
        let lowerStr = userInput.toLowerCase()
        // let userInput = prompt("enter a name")

        let index = Arr.indexOf(lowerStr)
        console.log(index)

        if (index !== -1) {

            let itemFound = `${userInput} is found in list`
            document.getElementById("output").innerHTML = itemFound


        } else {
            let itemNotFound = `${userInput} is not found in list`
            document.getElementById("output").innerHTML = itemNotFound
        }
    }


}

// answer no 15

{
    let userInput = prompt("Enter the password")
    while (!isNaN(userInput.charAt(0))) {
        alert("Password cannot begin with a number")
        alert("enter a valid password")
        userInput = prompt("Enter the password")

    }
    while (userInput.length < 6) {
        alert("Password must at least 6 characters long")
        alert("enter a valid password")
        userInput = prompt("Enter the password")
    }
}

// answer no 16

{
    document.write(`<h3>Answer no 16</h3>`)
    let university = "University of karachi"

    let splitUniversity = university.split(' ')
   

    let x = splitUniversity[0];
    let y = splitUniversity[1];
    let z = splitUniversity[2];






    for (let a = 0; a < x.length; a++) {



        document.write(x[a] + `</br>`)


    }

}


// answer no 17

{




    function btn() {
        let userInput = document.getElementById("lastChar").value;
        let lastChar = userInput.charAt(userInput.length - 1)
        document.getElementById("lastIndex").innerHTML = `last index of your input is ${lastChar}`
    }

}

// answer no 18

{
    let string = "The quick brown fox jumps over the lazy dog"


    let lowerStr = string.toLowerCase()
    let splitstr = lowerStr.split(' ')

    let count = 0;

    for (let i = 0; i < splitstr.length; i++) {
        if (splitstr[i] === "the") {

            count++
        }


    }

    document.getElementById("paragraph").innerHTML = `the occurence of "the" in this sentence is ${count}`

}