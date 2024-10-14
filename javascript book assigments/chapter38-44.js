// answer no 1

{
    
    function func(a, b){
    let sum = Math.pow(a, b)
    console.log(sum)
}
func(2, 3)

}

// answer no 2

{
    let p = document.getElementById("ans2")
    let year = document.getElementById("userInput")
    function btn() {
        let year = document.getElementById("userInput").value
        year = parseInt(year)
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
       p.innerHTML = "it is leap year"
       console.log(true)
    } else {
        p.innerHTML = "it is not a leap year"
      }
  } 
  year.addEventListener('keydown', function(event) {
    // event.preventDefault()
    if(event.key === "Enter"){
      btn()
    }
  })
}




// answer no 3 

{
    let a = 7;
    let b = 3;
    let c = 2;
    // let s = '';
    let ans = document.getElementById("ans3")

    function firstS() {
        s = (a + b + c) / 2
        // ans.innerHTML = `S = ${s}`
    }
    firstS()
    function areaFunc() {
        let area = s*(s-a)*(s-b)*(s-c)
        ans.innerHTML = `S = ${s} </br> Area = ${area}`
    }
    areaFunc()
}


// answer no 4 
{

    let ans = document.getElementById("ans4")
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
        ans.innerHTML = `Average of marks = ${average} </br> Percentage of result = ${per}%`

    }
    mainFunc()
}



// answer  no 5

{
    let sentence = "I am learning development from youtube"
    // let index = sentence.indexOf("m")
    // console.log(index)
    
    let letter = "f";
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === letter) {
            console.log(i)
        }
        
    }

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


// answer no 8

{
    let ans = document.getElementById("ans8")
    // let amount = 560;
    let input = document.getElementById("input").value;
    
  
    
     let amount = 560;
     
     function btn() {
         console.log(amount)
         console.log(input)
         if (amount % 10 !== 0) {
             throw new Error("please enter value which is divisble by 100")
            }
            let notes100 = Math.floor(amount / 100)
            amount %= 100;
            let notes50 = Math.floor(amount / 50)
            amount %= 50;
            let notes10 = Math.floor(amount / 10)
            
            
            ans.innerHTML = `Withdrawl amount is ${amount} </br> 100 notes: ${notes100}, 50 notes: ${notes50}, 10 notes: ${notes10}`
    }
    // let notes = btn(amount);
    
    
}

