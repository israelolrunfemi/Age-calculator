
//OUTPUT
const Outputyear= document.querySelector("#yyy")
const Outputmonth= document.querySelector("#mm")
const Outputday= document.querySelector("#dd")
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

    






