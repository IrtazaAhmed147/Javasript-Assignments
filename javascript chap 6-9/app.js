//MATH EXPRESSIONS

// answer no 1

{
    document.write(`<h3>Answer no 1</h3> <br/>`)
    let a = 10

    document.write(`the value of a is ${a}<br/>  <br/>`)

    ++a

    document.write(`the value of ++a is ${a} </br> now the value of a is ${a}  <br/>  <br/>`)


    let b = a++

    document.write(`the value of a++ is ${b} </br> now the value of a is ${a} </br> </br> `)
    document.write(``)


    --a
    document.write(` the value of --a is ${a} </br> now the value of a is ${a}  <br/>  <br/>`)

    let c = a--
    document.write(` the value of a-- is ${c} </br> now the value of a is ${a}  <br/>  <br/>`)
}

// answer no 2


{
    document.write(`<h3>Answer no 2</h3> <br/>`)
    let a = 2;
    let b = 1;
    let result = --a - --b + ++b + b--;
    document.write(`a is ${a} </br> b is ${b} </br> the <b>result</b>  is ${result} <br/>`)


    document.write(`<br/> <b>Step 1:</b> --a <br/>
    --a decrements a by 1 before using it. <br/>
    Initially, a = 2. <br/>
    After --a, a becomes 1 <br/> <br/> `)

    document.write(`<b>Step 2:</b> --a - --b <br/>
    --b decrements b by 1 before using it. <br/>
    Initially, b = 1. <br/>
    After --b, b becomes 0. <br/>
    Now, the expression is 1 - 0. <br/>
    The result of this operation is 1. <br/> <br/> `)

    document.write(`<b>Step 3:</b> --a - --b + ++b  <br/>
    ++b increments b by 1 before using it. <br/>
    b was 0 after the last step. <br/>
    After ++b, b becomes 1. <br/>
    Now, the expression is 1 - 0 + 1. <br/>
    The result of this operation is 2. <br/> <br/> `)

    document.write(`<b>Step 4:</b> --a - --b + ++b + b--   <br/>
    b-- uses b and then decrements it by 1. <br/>
    b is currently 1. <br/>
    The expression now is 1 - 0 + 1 + 1. <br/>
    The result of this operation is 3. <br/>
    After this, b becomes 0.<br/> <br/> `)



}

// // answer no 3

{   
    document.write(`<h3>Answer no 3</h3> <br/>`)
    let a = prompt("enter your name")
   alert(`Welcome ${a}`)
}

// // question no 4 is not given 

// // answer no 5 will be solve

// // answer no 6

{
    document.write(`<h3>Answer no 6</h3>`)

    let sub1 = prompt("enter first subject name")
    let sub2 = prompt("enter second subject name ")
    let sub3 = prompt("enter third subject name ")
    let totalMark = 100;

    let obtMark1 = parseInt(prompt(`enter the obtained marks for ${sub1}`))

    let obtMark2 = parseInt(prompt(`enter the obtained marks for ${sub2}`))
    let obtMark3 = parseInt(prompt(`enter the obtained marks for ${sub3}`))

    let fullMarks = totalMark + totalMark + totalMark;
    let fullObtMarks = obtMark1 + obtMark2 + obtMark3;

    let percentage1 = (obtMark1/totalMark)*100
    let percentage2 = (obtMark2/totalMark)*100
    let percentage3 = (obtMark3/totalMark)*100



    document.write(` <h4>Subject TotalMarks ObtainedMarks Percentage</h4> `)
    document.write(`${sub1} ${totalMark} ${obtMark1} ${percentage1}% </br>`)
    document.write(`${sub2} ${totalMark} ${obtMark2} ${percentage2}% </br>`)
    document.write(`${sub3} ${totalMark} ${obtMark3} ${percentage3}% </br>`)


}

