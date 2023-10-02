
//OUTPUT
const Outputyear= document.querySelector("#yyy")
const Outputmonth= document.querySelector("#mm")
const Outputday= document.querySelector("#dd")
const Submitbtn = document.querySelector("#submit-btn")
const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

// INPUT
const Inputday = document.querySelector("#day");
const Inputmonth = document.querySelector("#month");
const Inputyear = document.querySelector("#year");
//OUTPUT

 
let isvalid=false
//ERROR MESSAGE
const Errorday = document.querySelector(".errorday");
const Errormonth = document.querySelector(".errormonth");
const Erroryear = document.querySelector(".erroryear");
Submitbtn.addEventListener('click',calculateage);

Inputday.addEventListener("input",(e) =>{
    if (+Inputday.value > 31) {
        Errorday.textContent = "Must be a Valid date "
        isvalid=false
        return;   
    } else{
        isvalid= true
        Errorday.textContent = " "

    }
    if (+Inputday.value === 0) {
        Errorday.textContent ="This field is required"
        return;  
    }else{
        isvalid=true
        Errorday.textContent = "" 
    }
    

})
Inputmonth.addEventListener("input",(e) =>{
    if (+Inputmonth.value > 12) {
        Errormonth.textContent = "Must be a Valid month "
        e.style.bordercolor= "red"
        isvalid=false
        return;   
    } else{
        isvalid= true
        Errormonth.textContent = " "

    }
    if (+Inputmonth.value === 0) {
        Errormonth.textContent ="This field is required"
        return;  
    }else{
        isvalid=true
        Errormonth.textContent = "" 
    }
    

})
Inputyear.addEventListener("input",(e) =>{
    if (+Inputyear.value > 2023) {
        Erroryear.textContent = "Must be a Valid year "
        isvalid=false
        return;   
    } else{
        isvalid= true
        Erroryear.textContent = " "

    }
    if (+Inputyear.value === 0) {
        Erroryear.textContent ="This field is required"
        return;  
    }else{
        isvalid=true
        Erroryear.textContent = "" 
    }
    

})

function calculateage() {
    if (isvalid) {
        const d = day - Inputday.value;
        const m = month - Inputmonth.value;
        const y = year - Inputyear.value;

        Outputday.textContent = d
        Outputmonth.textContent = m
        Outputyear.textContent = y
      
    

        
      }else{
        alert("error")

      }
      if(Inputmonth.value > month || Inputday.value > day){ 
        const d = Inputday.value - day
        const m = Inputmonth.value - month

        Outputday.textContent = d
        Outputmonth.textContent = m

    
      }

    
}




    






