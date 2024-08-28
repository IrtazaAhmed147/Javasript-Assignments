//  ARRAYS AND LOOP 


// answer no 1

{
    let multiArray = []

    multiArray.push([1, 2, 5, 8])
    multiArray.push([6, 7])
    console.log(multiArray)

}

// answer no 2

{
    let matrix = [
        [0, 1, 2, 3],
        [1, 0, 1, 2],
        [2, 1, 0, 1]
    ];

    console.log(matrix[0])
}

// answer no 3
{
    
    document.write(`<h3>answer no 3</h3>`)
    for (let a = 1; a <= 10; a++) {

        document.write(`${a} </br>`)
    }
}
// answer no 4

{
    document.write(`<h3>answer no 4</h3>`)


    let input = prompt("enter a number to show its multiplication table");
    let length = prompt("enter length multiplication table")
    length = parseInt(length)

    for (let i = 1; i <= length; i++) {

        let table = input * i

        let b = `${input} x ${i} = ${table} </br>`
        document.write(` ${b}`)

    }
}

// answer no 5
{
    document.write(`<h3>answer no 5</h3>`)

    let fruits = ["apple", "banana", "mango", "orange", "strawberry"]

    for (let a = 0; a < 5; a++) {

        let element = `element at index ${a} is ${fruits[a]} </br>`
        document.write(element)


    }

}

// answer no 6

{

    document.write(`<h3>answer no 6</h3>`)

    document.write("Counting:")

    for (let a = 0; a <= 15; a++) {
        document.write(`${a} `)


    }


    document.write(`</br>`)
    document.write("Reverse Counting:")

    for (let a = 10; a >= 0; a--) {
        document.write(`${a} `)
    }
    document.write(`</br>`)
    document.write("Even:")
    {
        for (let a = 0; a <= 20; a++) {
            if (a % 2 === 0) {

                document.write(`${a} `)
            }

        }
    }
    document.write(`</br>`)
    document.write("Odd:")

    {
        for (let a = 0; a <= 20; a++) {
            if (a % 2 !== 0) {

                document.write(`${a} `)
            }

        }
    }
  document.write(`</br>`)
  document.write("Series:")
    
    {

        for (let a = 0; a <= 20; a++) {
            if (a % 2 === 0) {

                document.write(`${a}k `)
            }

        }
    }
}


// answer no 7

{

    document.write(`<h2>answer no 7</h2>`)
    document.write(`<h3>Bakery</h3>`)
    let A = ["apple pie", "cookie", "chips", "cake", "patties"];

    let userInput = prompt("Welcome to bakery. What do you want to order?")

    let index = A.indexOf(userInput);

   
    if (index !== -1) {
        document.write(`${userInput} is available at index ${index} in our bakery `)
      
    } else {
      document.write(`we are sorry. ${userInput} is not available at bakery`)
      
    }
}




// answer no 8

{
    document.write(`<h3>answer no 8</h3>`)
    let A = [24, 53, 78, 91, 12];
    // A = parseInt(A)
    let largestNumber = Math.max(...A)
    document.write(`Array items: ${A} <br/> The largest number is ${largestNumber}`)
}

// answer no 9
{

    document.write(`<h3>answer no 9</h3>`)
    let A = [24, 53, 78, 91, 12];
   
    let smallestNumber = Math.min(...A)
    document.write(`Array items: ${A} <br/> The largest number is ${smallestNumber}`)
}


// answer no 10 

{
    document.write(`<h3>answer no 10</h3>`)
    let number = 5;
    for (let a = 1; a <= 20; a++) {

        let table = number * a
        document.write(table + " ")

    }
}