// chap 2 
// VARIABLES FOR STRINGS
{



    let userName;
    let myName = "Irtaza Ahmed"

    let message;
    message = "Hello World";
    // alert(message)


    let student = {
        name: "john Doe",
        age: 15 + " years old",
        certificate: "Certified mobile Application Development"

    }
    // alert(student.name)
    // alert(student.age)
    // alert(student.certificate)

    // alert("pizza \npizz \npiz \npi \np")

    let email = "example@example.com"
    // alert("My email address is " + email)


    let book = "'A smarter way to learn JavaScript'"
    // alert("I am trying to learn from the Book " + book)


    document.write("Yah! i can write HTML content through JavaScript")


    let storeVar = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
    // alert(storeVar)


}


// Chap no 3

// VARIABLES FOR NUMBERS
{

    let age = 18
    // alert(age)



    let birthYear = 2006
    document.write(`<br/>My birth year is ` + birthYear)
    document.write(`Data type of my declared variable is ${typeof birthYear}`)

    // let visitorName = prompt("enter your name")
    // let productTitle = prompt("enter product name")
    // let quantity = prompt("enter quantity")
    // document.write(`<br/> ${visitorName} ordered ${quantity} ${productTitle} on XYZ store`)



}

// VARIABLE NAMES: LEGAL & ILLEGAL 
// chap 4

{
    let var1, var2, var3;

    // 5 legal names
    let fullName;
    let full_Name;
    let name1;
    let $name;
    let _name;

    // 5 illegal names 

    // let 2name;
    // let let; ----   reserved key
    // let @name;
    // let full name;
    // let full-name;


    document.write(`<h1>Rules for naming JS variables</h1>  <br/>Variable names can only contain numbers, $ _ and $ <br/> Variables must begin with a letter, $ or _.  <br/> Variable names are case sensitve <br/> Variable names should not be JS keywords `)



}



// MATH EXPRESSIONS 
// chap 5

{
    document.write(`<br/> <b>Chap 5</b>`)
    {
        document.write(`<br/> <b>Answer no 1</b>`)

        let a = 3;
        let b = 5;

        let c = a + b;


        document.write(`<br/>sum of ${a} and ${b} is ${c}`)


    }

    // ans no 2 is same as ans no 1 

    // ans no 3 

    {

        document.write(`<br/> <b>Answer no 3</b>`)
        let a;
        document.write(`<br/> value after variable decleration is ${a}`)
        a = 5
        document.write(`<br/> Initial value: ${a}`)
        a++
        document.write(`<br/> Value after increment is: ${a}`)
        a = a + 7
        document.write(`<br/> Value after addition is: ${a}`)
        a--
        document.write(`<br/> Value after decrement is: ${a}`)
        a = a % 3
        document.write(`<br/> The remainder is :  ${a}`)




    }

    // answer no 4

    {
        document.write(`<br/> <b>Answer no 4</b>`)
        let ticketPrice = 600;
        let numofTicket = 5;

        let a = ticketPrice * numofTicket;
        document.write(`<br/> Total cost to buy ${numofTicket} tickets to a movie is ${a} Pkr `)


    }


    // answer no 5 

    { 
        document.write("<h1>Answer no 5</h1>")
        let table = 4
        document.write(`Table of ${table} <br/>`)

        document.write(`${table} x 1 = ${table * 1} <br/>`)
        document.write(`${table} x 2 = ${table * 2} <br/>`)
        document.write(`${table} x 3 = ${table * 3} <br/>`)
        document.write(`${table} x 4 = ${table * 4} <br/>`)
        document.write(`${table} x 5 = ${table * 5} <br/>`)
        document.write(`${table} x 6 = ${table * 6} <br/>`)
        document.write(`${table} x 7 = ${table * 7} <br/>`)
        document.write(`${table} x 8 = ${table * 8} <br/>`)
        document.write(`${table} x 9 = ${table * 9} <br/>`)
        document.write(`${table} x 10 = ${table * 10} <br/>`)
    }

    // answer no 6


    {
        document.write(`<br/> <b>Answer no 6</b>`)

        let celciusTemp = 25;
        let f = (celciusTemp * 9 / 5) + 32


        let fahrenheitTemp = 70;
        let C = (fahrenheitTemp - 32) * 5 / 9

        document.write(`<br/> ${celciusTemp}C is ${f}F </br> ${fahrenheitTemp}F is ${C}C`)



    }

    // answer no 7

    {
        document.write(`<br/> <b>Answer no 7</b>`)
        let priceItem1 = 650;
        let priceItem2 = 100;

        let quantityItem1 = 3;
        let quantityItem2 = 5;

        let shipCharges = 100;

        let totalCost = ((priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shipCharges)



        document.write(`<br/> Price of item1 is ${priceItem1} </br> Quantity of item1 is ${quantityItem1} </br> Price of item2 is ${priceItem2} </br> Quantity of item2  is ${quantityItem2} </br> Total cost of your order is ${totalCost}`)


    }

    // answer no 8 

    {
        document.write(`<br/> <b>Answer no 8</b>`)
        let totalMark = 980;

        let obtainedMarks = 804;

        let percentage = (obtainedMarks / totalMark * 100)

        document.write(`<br/> Total marks: ${1100} </br> Marks obtained: ${obtainedMarks} </br> percentage: ${percentage}`)

    }



    // answer no 9 

    {
        document.write(`<br/> <b>Answer no 9</b>`)
        let usDollars = 10
        let saudiRiyals = 25

        let usDollars1 = 104.80
        let saudiRiyals1 = 28

        let totalCurrency = (usDollars1 * usDollars) + (saudiRiyals1 * saudiRiyals)

        document.write(`<br/> Total currency in PKR is ${totalCurrency}`)
    }

    // answer no 10

    {
        document.write(`<br/> <b>Answer no 10</b>`)

        let a = 5;
        let b = a + 5 * 10 / 2
        document.write(`<br/> ${b}`)
    }


    // answer no 11 

    {
        document.write(`<br/> <b>Answer no 11</b>`)
        let currentYear = 2024;
        let birthYear = 2006;
        let age = currentYear - birthYear;

        document.write(`</br> current year: ${currentYear} </br> Birth Year: ${birthYear} </br> Your Age is: ${age}`)

    }

    // answer no 12 

    {
        document.write(`<br/> <b>Answer no 12</b>`)
        let radius = 3;
        let circumference = (2 * 3.142 * radius)
        let area = (3.142 * radius ** 2)


        document.write(`</br> Radius of circle: ${radius} </br> The circumference is: ${circumference} </br> The area is: ${area}`)
    }

    // answer no 13

    {

        document.write(`<br/> <b>Answer no 13</b>`)
        let favoriteSnack = "Chocolate";
        let currentAge = 15;
        let maxAge = 65;
        let amountPerDay = 3;

        let yearsLeft = maxAge - currentAge;
        let totalSnacks = yearsLeft * 365 * amountPerDay;



        document.write(`</br> favourite snack: ${favoriteSnack} </br> Current age: ${currentAge} </br> Estimated maximum age: ${maxAge} </br> Amount of snacks per day: ${amountPerDay} </br>   You will need <b> ${totalSnacks} </b> ${favoriteSnack}s to last you until the ripe old age of ${maxAge}.`);


    }
}