
// answer no 1

{


    let submit = document.getElementById("submit")
    submit.addEventListener('click', function () {

        let name = document.getElementById("name").value

        let last = document.getElementById("last").value

        let email = document.getElementById("email").value


        let box = document.getElementById("box")



        let h1 = document.createElement("h1")
        h1.textContent = "Submitted form"

        if (name === "") {
            alert("write something in name")
        } else if (last === "") {
            alert("write something in last name")
        } else if (email === "") {
            alert("write something in email")
        } else {
            let line1 = document.createElement("p")
            line1.textContent = `name = ${name}`

            let line2 = document.createElement("p")
            line2.textContent = "Last name = " + last


            let line3 = document.createElement("p")
            line3.textContent = "email = " + email

            box.appendChild(h1)
            box.appendChild(line1)
            box.appendChild(line2)
            box.appendChild(line3)

        }




    })

}


// answer no 2  

{

    let morePara = document.getElementById("hide")
    let buttons = document.getElementById("buttons")


    function btns() {
        morePara.classList.toggle("hide")
        if (morePara.classList.contains("hide")) {
            buttons.innerHTML = "read more"
        } else {
            buttons.innerHTML = "read less"
        }
    }
}

// answer no 4

{

    function btn() {


        let names = document.getElementById("names").value;


        let age = document.getElementById("age").value;
        let grade = document.getElementById("grade").value;
        let tBody = document.querySelector("tbody")





        let student = { name: names, age: age, grade: grade }


        if (names == "") {
            alert("please write name")
        } else if (age == "") {
            alert("please write age")
        } else if (grade == "") {
            alert("please write grade")
        } else {
            let row = document.createElement("tr")

            let nameCell = document.createElement("td")
            nameCell.textContent = student.name


            let ageCell = document.createElement("td")
            ageCell.textContent = student.age

            let gradeCell = document.createElement("td")
            gradeCell.textContent = student.grade

            let delCell = document.createElement("td")
            let delBtn = document.createElement("button")
            delBtn.textContent = "delete"
            delBtn.onclick = function () {
                row.remove()
            }
            delCell.append(delBtn)

            let editCell = document.createElement("td")
            let editBtn = document.createElement("button")
            editBtn.textContent = "edit"
            editBtn.onclick = function () {

            }


            editCell.append(editBtn)
            editBtn.addEventListener('click', function () {
                let hidden = document.getElementById("hidden")
                hidden.classList.toggle("hidden")

                let editName = document.getElementById("edit-names").value = student.name;

                let editAge = document.getElementById("edit-age").value = student.age
                let editGrade = document.getElementById("edit-grade").value = student.grade;

                let saveBtn = document.getElementById("edit-button")

                saveBtn.onclick = function () {
                    student.name = document.getElementById("edit-names").value;
                    student.age = document.getElementById("edit-age").value;
                    student.grade = document.getElementById("edit-grade").value;

                    nameCell.textContent = student.name;
                    ageCell.textContent = student.age;
                    gradeCell.textContent = student.grade;

                    hidden.classList.toggle("hidden");
                };




            })


            row.appendChild(nameCell)
            row.appendChild(ageCell)
            row.appendChild(gradeCell)
            row.appendChild(delCell)
            row.appendChild(editCell)

            tBody.appendChild(row)

        }
        clearForm()

    }
    function clearForm() {

        document.getElementById("names").value = ""


        document.getElementById("age").value = ""
        document.getElementById("grade").value = ""
    }


}


