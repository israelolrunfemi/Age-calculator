function agecal() {
    const Day = document.querySelector(".day");
    const Month = document.querySelector(".month");
    const Year = document.querySelector(".Year");
    const result = document.querySelector(".result");
    const errormessage1 = document.querySelector(".errormessage1");
    const errorcolor = document.querySelector(".errorcolor");
 

 
    

if (isNaN(Day) || isNaN(Month) || isNaN(Year) <=0) {
    errormessage1.style.display="block"
    // errorcolor.style.color= "red"
    

    
}
}