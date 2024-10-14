
// answer no 1
{


    function showTime() {
        console.log(new Date())

    }
    showTime()

}

// answer no 2


{
    let firstName = prompt('enter your first name')
    let lastName = prompt('enter your last name')
    function fullName(firstName, lastName) {


        let fullName = `Welcome ${firstName}  ${lastName} </br>`
        alert(fullName)

    }
    fullName(firstName, lastName)

}

// answer no 3 
{
    let firstNum = +prompt('enter  first number')
    let secNum = +prompt('enter second number')
    function sum(firstNum, secNum) {


        let totalSum = firstNum + secNum
        return totalSum

    }
    console.log(sum(firstNum, secNum))

}

// answer no 4

{
    let num1 = +prompt('enter  first number')
    let num2 = +prompt('enter  sec number')
    let operator = +prompt('enter  operation')

    function evaluate(num1, num2, operator) {

        let result = eval(`${num1} ${operator} ${num2}`)
        return result

    }

    document.write(`Answer is ${evaluate(num1, num2, operator)}`)


}

// answer no 5

{
    let num = +prompt('enter number')
    function square(num) {
        let square = num ** 2
        console.log(square)
    }
    square(num)
}



// answer no 6

{


    let num = +prompt('enter number')
    function factorial(num) {
        let result = 1;

        if (num < 0) {
            alert('please enter positive integar')
        } else {


            for (let i = 2; i <= num; i++) {

                // 2 <= 5; 2++


                result = result * i;

                // result *= i;

                // 1 *= 2
                // 2 *= 3
                // 6 *= 4
                // 24 *= 5
                //120

            }

            console.log(result)
        }

    }

    factorial(num)

}

// answer no 7

{
    let startNum = +prompt('enter start number')
    let endNum = +prompt('enter last number')
    function count(startNum, endNum) {

        if (endNum < startNum) {
            alert(`last num should be greater than first num`)
        }
        else {

            for (let i = startNum; i <= endNum; i++) {


                document.write(i + `</br>`)



            }
        }


    }
    count(startNum, endNum)
}


// answer no 8

{
    let perpendicular = +prompt('enter a perpendicular value');
    let base = +prompt('enter a base value');
    function calculateHypotenuse(perpendicular, base) {




        function calculateSquare(y) {
            return Math.sqrt(y);
        }

        let hypo = calculateSquare(base ** 2 + perpendicular ** 2)



        console.log(`Hypotenous is ` + hypo);
    }

    calculateHypotenuse(perpendicular, base)
}

// answer no 9

{
    // Argument as value 

    function value(width, height) {
        let area = width * height



        console.log(area)
    }
    value(3, 8)

    // argument as variable

    let width = 3
    let height = 9

    function variable() {

        let area2 = width * height

        console.log(area2)

    }
    variable()
}


// answer no 10

{
    function isPalindrome(str) {
        let j = str.length - 1
        console.log(j)
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] != str[j]) {
                return false;
            }
            j--;
        }
        return true;
    }

    let str1 = "racecar";
    let str2 = "nitin";
    let str3 = "Rama";

    console.log(isPalindrome(str1));
    console.log(isPalindrome(str2));
    console.log(isPalindrome(str3));
}


// answer no 11

{
    function para(capital) {



        let strCapital = String(capital)

        let str = strCapital.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        //  let str1 = str.slice(1) 




        console.log("this is answer " + str)
    }
    para("timepass hello world")
}


// answer no 12

{
    function findstr(str) {


        let words = str.split(' ')


        let longestWord = "";
        for (let i = 0; i < words.length; i++) {
            // If the current word is longer than the longestWord, update longestWord
            if (words[i].length > longestWord.length) {
                longestWord = words[i];
            }
        }

        return longestWord;
    }

    const exampleString = 'Web Development Tutorial'
    let longestWord = findstr(exampleString)
    console.log(longestWord)

}



// answer no 14

{

    let radius = +prompt('enter radius value')
    function calcCircumference(radius) {


        let formula = 2 * 3.142 * radius;
        console.log(`The circumference is: ${formula}m`);
    }
    calcCircumference(radius)
    
    function calcArea(radius) {

        let formula = 3.142 * radius ** 2;
        console.log(`The area is: ${formula}m<sup>2</sup>`);

    }
    calcArea(radius)
}