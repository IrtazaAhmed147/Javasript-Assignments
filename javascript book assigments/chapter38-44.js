// answer no 1

{

    function func(a, b) {
        let sum = Math.pow(a, b)
        console.log(sum)
    }
    func(2, 3)

}

// answer no 2

{
    function btn() {
        let year = prompt('enter year to wheather it is leap or not')
        year = parseInt(year)
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            alert("it is leap year")
            console.log(true)
        } else {
            alert("it is not leap year")
        }
    }
    // btn()

}




// answer no 3 

{
    let a = 7;
    let b = 3;
    let c = 2;
    // let s = '';
    // let ans = document.getElementById("ans3")

    function firstS() {
        s = (a + b + c) / 2
        // ans.innerHTML = `S = ${s}`
    }
    firstS()
    function areaFunc() {
        let area = s * (s - a) * (s - b) * (s - c)
        console.log('S =', s, ' Area =', area)
    }
    areaFunc()
}


// answer no 4 
{

    // let ans = document.getElementById("ans4")
    let sub1 = 45;
    let sub2 = 69;
    let sub3 = 52;
    let total = 255;
    let obtTotal = sub1 + sub2 + sub3

    function averageFunc() {
        average = obtTotal / 3

    }
    function percentage() {
        per = (obtTotal / total) * 100
        per = per.toFixed(3)
    }
    function mainFunc() {
        averageFunc()
        percentage()
        console.log('Average of marks =', average, 'Percentage of result =', per)

    }
    mainFunc()
}



// answer  no 5

{
    let sentence = "I am learning development from youtube"

    let letter = "f";
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === letter) {
            console.log(i)
        }

    }
    // let index = sentence.indexOf("m")
    // console.log(index)

}


// answer no 6

{
    function removeVowel(str) {
        return str.replace(/[aeiouAEIOU]/g, "")
        // console.log(sentence)
        // "a","e","i","o","u","A","E","I","O","U"
        // /[aeiouAEIOU]/g
    }
    let sentence = "I am learning development"
    let result = removeVowel(sentence)
    console.log(result)

}


// answer no 7 

{
    let sentence = 'Pleases read this application and give me gratuity'
    let text = sentence.toLowerCase()
    function twoVowelOccurences() {
        let count = 0
        let vowel = 'aeiou'
        for (let i = 0; i < text.length; i++) {
            let currentChar = text[i]
            let nextChar = text[i + 1]
            if (vowel.includes(currentChar) && vowel.includes(nextChar)) {
                switch (currentChar + nextChar) {
                    case "ea":
                    case "ui":
                    case "ai":
                    case "oi":
                    case "ou":
                    case "ee":
                    case "oo":
                        console.log(`Found pair: ${currentChar}${nextChar}`);
                        console.log(count)
                        break;

                    default:
                        break;
                }
                count++
            }
        }
        return count

    }
    console.log(twoVowelOccurences())
}


// answer no 8

{
    // let km = prompt('enter a distance between two cities in km')
    // km = parseInt(km)
    let km = 15

    function meters() {
        let meters = km * 1000
        console.log('meters', meters)
    }

    function feet() {
        let feets = km * 3280.84
        console.log('feets', feets)
    }
    function inches() {
        let inches = km * 39370.1
        console.log('inches', inches)

    }
    function centimeters() {
        let centimeters = km * 100000
        console.log('centimeters', centimeters)
    }
    meters()
    feet()
    inches()
    centimeters()
}

//answer no 9 
{

    let employeeWorkHour = 43
    let normalWorkHour = 40
    let extraTime = employeeWorkHour - normalWorkHour
    let overtimeRate = 12
    if (extraTime >0) {

        let overTimePay = overtimeRate * extraTime
        console.log(overTimePay)
    }


}


// answer no 10

{



    let amount = 560;

    function btn() {
        if (amount % 10 !== 0) {
            // throw new Error("please enter value which is divisble by 100")
            return
        }
        let notes100 = Math.floor(amount / 100)
        amount %= 100;
        let notes50 = Math.floor(amount / 50)
        amount %= 50;
        let notes10 = Math.floor(amount / 10)


        console.log('Withdrawl amount is:', amount, ' 100 notes:', notes100, ' 50 notes: ', notes50, ' 10 notes:', notes10)
    }
    btn()


}

