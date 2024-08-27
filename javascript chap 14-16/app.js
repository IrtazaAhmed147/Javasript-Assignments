// answer no 1

{

    
    let studentNames = []
}

// answer no 2

{
    let studentNames = new Array()
    
}

// answer no 3
{

    
    let fruit = ['banana', 'apple', 'grapes']
}

// answer no 4

{
    let numbers = [23, 23, 45, 89]
    // console.log(typeof[23])
}
// answer no 5

{
    let boolean = [true, false, true, false]
}
// answer no 6

{
    let mixedArray = [34, "array", true,]
}

// answer no 7
{
    document.write(`<br/><h3>Answer no 7</h3> `)
    let qualification = ['SSC', "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
  document.write(qualification + `<br/>`) 
}

// answer no 8 

{
    document.write(`<br/><h3>Answer no 8</h3> `)
    let studentNames = ["ali", "hasnain", "Michael"]
    let studentMarks = [320, 230, 480]


    let totalMarks = 500

    let percentage1 = (studentMarks[0]/totalMarks) *100
   
    let percentage2 = (studentMarks[1]/totalMarks) *100
    
    let percentage3 = (studentMarks[2]/totalMarks) *100


    document.write(`<br/> Score of ${studentNames[0]} is ${studentMarks[0]}. Percentage is ${percentage1}% </br> Score of ${studentNames[1]} is ${studentMarks[1]}. Percentage is ${percentage2}% </br> Score of ${studentNames[2]} is ${studentMarks[2]}. Percentage is ${percentage3}% <br/>`)

    

}

// answer no 9


{
    document.write(`<br/><h3>Answer no 9</h3> `)
    let userColor = prompt("what color you want add in array will be first")
    let endColor = prompt("what color you want add in array will be end")
    let colors = [userColor, "blue", "yellow", endColor]
    document.write(colors)

    // to add array

    let secondarray= ["brown", "white"]
    colors.unshift(...secondarray);
    document.write(colors)

    // to delete first array

    colors.shift()
    document.write(colors)

    // to delete last array
    
    colors.pop()
    document.write(colors)



// f.


    let index = prompt("at which index you want to add color")

    // to convert number into integar 
    index = parseInt(index)


    let userColor1 = prompt("which color you want to add")
    


    if (index >= 0 && index <= colors.length) {
        // Add color at specified index
        colors.splice(index, 0, userColor1);

        // Display the updated array in the HTML element
       document.write(colors)
    } else {
        alert("Invalid index. Color not added.");
    }




// g.

    let index1 = prompt("at which index you want to remove color")

    // to convert number into integar 
    index = parseInt(index)


    let deletedCount = prompt("how many colors you want to delete")

    deletedCount = parseInt(deletedCount)


    


    if (index >= 0 && index < colors.length && deletedCount > 0 && deletedCount <= colors.length - index) {
        // Add color at specified index
        let deletedColors = colors.splice(index, deletedCount);

        // Display the updated array in the HTML element
        document.write(deletedColors)
    } else {
        alert("Invalid index. Color not added.");
    }


}

// answer no 10

{
    document.write(`<br/><h3>Answer no 10</h3> `)
    let studentScores =[92, 56, 34, 78, 48]
   
    document.write(`Score of students: ${studentScores}  <br/>`)
    studentScores.sort()
 
    document.write(`Ordered Score of students: ${studentScores}`)
}

// answer no 11

{
    document.write(`<br/><h3>Answer no 11</h3> `)
    let city = ["karachi", "lahore", "islamabad", "rawalpindi", "quetta", "peshawar"]
   
    let selectedCities = [city[0], city[3]];

   


    document.write(`<br/>`+ city)
    document.write(`<br/>`+ selectedCities + `<br/>`)



}


// answer no 12

{
    document.write(`<br/><h3>Answer no 12</h3> `)
    let arr = ["This ", "is ", "my ", "cat"]
    let joinedArr =  arr.join("")
    document.write(`array: ${arr} <br/>`  + "String: " + joinedArr + `<br/>`)
}

// answer no 13

{
    document.write(`<br/><h3>Answer no 13</h3>`)
    let devices = [];

    devices.push("keyboard");
    devices.push("mouse");
    devices.push("printer");
    devices.push("monitor");

    console.log(devices);


    // just use pop method to reverse this

    let first = devices.shift();
    document.write(first + `<br/>`)
    let second = devices.shift();
    document.write(second + `<br/>`)
    let third = devices.shift();
    document.write(third + `<br/>`)
    let fort = devices.shift();
    document.write(fort + `<br/>`)
    document.write(devices + `<br/>`)
}

// answer no 15




{
    document.write(`<br/><h3>Answer no 15</h3> `)
     // Array to store phone manufacturers
     var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

     // Function to create and display dropdown menu
     function createDropdown() {
         var dropdown = '<select>';

         // Loop through the array to create options
         for (var i = 0; i < manufacturers.length; i++) {
             dropdown += '<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>';
         }

         dropdown += '</select>';

         // Display the dropdown menu
         document.write(dropdown);
     }

     // Call the function to create and display the dropdown menu
     createDropdown();
    }