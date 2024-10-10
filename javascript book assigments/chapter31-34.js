
// answer no 1 

{





    let dateTime = new Date();

    console.log(dateTime)
}

// answer no 2
{

    let months = ["January", "february", "March", "april", "may", "june", "july", "august", "september", "October", "November", "December"]

    let date = new Date();
    let currentMonth = months[date.getMonth()];

    // let currentMonth = d.getMonth()
    console.log(currentMonth)
}


// answer no 3

{
    let week = ["Monday", "Tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

    let date = new Date();
    let currentDay = week[date.getDay()];
    // let now = d.getDay()

    console.log(currentDay)


    let sub = currentDay.substr(0, 3);
    console.log(sub);

}


// answer no 4

{
    let week = ["Monday", "Tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

    let date = new Date();

    let today = week[date.getDay()];

    // console.log(today)


    if (today === "saturday" || today === "sunday") {
        alert('its fun day')
    }
}

// answer no 5

{
    let d = new Date()
    let date = d.getDate()
    console.log(date)
    if (date <= 15) {
        alert("First fifteen days of the month")
    } else {
        alert('last days of the month');

    }

}

// answer no 7

// {
//     let d = new Date()
//     let time = d.getHours()

//     if(time >= 12) {
//         alert('its PM');

//     } else {
//         alert('its AM');

//     }

//     console.log(time )
// }

// answer no 6 

{
    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let year = day * 365;

    // console.log(year)

    let time = new Date()
    let years = Math.round(time.getTime() / minute)

    console.log(years)
}

// answer no 8

{
    let laterDay = new Date(2020, 11, 31)

    console.log(laterDay)
}

// answer no 9

{
    let ramadanDate = new Date(2024, 2, 12)

    let currentDay = new Date()


    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;


    let daysDifference = currentDay - ramadanDate



    let daysPassed = Math.floor(daysDifference / day);

    console.log(daysPassed);


}

// answer no 10 

{
    let pastDay = new Date(2015, 12, 5)
    let currentDay = new Date()

    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let minsDifference = currentDay - pastDay

    let minsPassed = Math.floor(minsDifference / 1000);

    console.log(minsPassed);
}


// answer no 13 

// {
//     let userInput = prompt("enter your age")
//     parseInt(userInput)

//     let birthYear = 2024 - userInput
//     alert(`your birth year is ${birthYear}`)
// }

// answer no 14


{


    let userName = prompt('enter your name')
    let input = prompt('enter your units')
    parseInt(input)
   




    let numberOfUnits = 410
    let ChargesPerUnit = 16;
    let latePayment = 350;
    let netAmountPayable = input * ChargesPerUnit
    let GrossAmountPayable = netAmountPayable + latePayment



    document.write(`Customer: <b> ${userName} </b> <br/>`);
    document.write(`Number of Units: <b> ${numberOfUnits} </b> <br/>`);
    document.write(`Charges per unit: <b> ${ChargesPerUnit} </b> <br/>`)
    document.write(`Late payment surcharge: <b> ${latePayment} </b> <br/>`)
    document.write(`Net amount Payable (Within due date): <b> ${netAmountPayable} </b> <br/>`)
    document.write(`Gross Amount Payable (After due date): <b> ${GrossAmountPayable} </b> <br/>`);







}




