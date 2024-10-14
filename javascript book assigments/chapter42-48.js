// answer no 1

let link = document.getElementById("link")


link.addEventListener('click', function () {
    alert("you click on link")
})


// answer no 2

let img = document.querySelectorAll(".image");


img.forEach(image => {

    image.addEventListener('click', function () {
        alert("you click on " + image.alt)
        // console.log("hello")
    })
})



// answer no 3

{
    
    
       let students = [
       {index: 0, name: "ali", class: 8},
       {index: 1, name: "ahzem", class: 10},
       {index: 2, name: "maaz", class: 9},
       {index: 3, name: "jethalal", class: 4}
       ];

       let tableBody = document.querySelector('tbody')

       function createRow(student) {

        let row = document.createElement("tr")

        let indexCell = document.createElement('td')
        indexCell.textContent = student.index
        
        let nameCell = document.createElement('td')
        nameCell.textContent = student.name
        
        let classCell = document.createElement('td')
        classCell.textContent = student.class

        let actionCell = document.createElement('td')
        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'delete'
        deleteButton.className = 'btn'

        deleteButton.addEventListener('click', function() {
            row.remove();
        })

        actionCell.append(deleteButton)

        row.appendChild(indexCell)
        row.appendChild(nameCell)
        row.appendChild(classCell)
        row.appendChild(actionCell)

        return row;


       }

       students.forEach(value => {
        let tableRow = createRow(value);
        tableBody.append(tableRow);
       })

 
        
    }

       // answer no 4

       {
        let img = document.getElementById("img")
       

            img.addEventListener('mouseover', function() {
                img.src = "/assets/image3.png"
            })

            img.addEventListener('mouseout', function() {
                img.src = "/assets/image2.png"
            })
     
        
       }


       // answer no 5

       {

        let counter = document.getElementById("counter")
        let increase = document.getElementById("increase")
        let decrease = document.getElementById("decrease")
        let count = '';

        increase.addEventListener('click', function() {

            count++
            counter.innerHTML = count

        })
        decrease.addEventListener('click', function() {
            count--
            counter.innerHTML = count
        })

       }
   
       
    


        
    


