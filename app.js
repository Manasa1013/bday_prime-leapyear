let ipName = document.querySelector("#ip-name")
let ipDob = document.querySelector("#ip-dob")

let btn = document.querySelector("#btn")
let textDisplay = document.createElement("div")
let br = document.createElement('br')
document.body.insertBefore(br,btn)
//write isNaN() func,stringlength=8 function
document.body.insertBefore(textDisplay,br)


function leapCalc(){
    let bYear = ipDob.value.substring(4,8)
    
    bYear = parseInt(bYear,10);
    console.log(bYear)
    textDisplay.innerHTML = "Mansa"
    textDisplay.innerHTML = leapYear(bYear)

}
function leapYear(year){
    let res = ""
    let leapmessage =  "You were born on leapyear"
    let notleapmessage = "You were not born in leapyear"
    if(isNaN(year)){
        console.log("Nan ")
        year=0
        res = "Enter birth year"
    }
    
    else{
        if((year%400 ===0) || ((year%100 !=0)&& (year%4===0))){
            res = leapmessage // for centuries case
        }
        else{
            if(year%100 ===0 || year%4!=0){
            res = notleapmessage 
            
        }}
    }
    
    console.log(res)
    return res;
}
function primeCalc(){
    let bday = ipDob.value.substring(0,2);
    let bmon = ipDob.value.substring(2,4);
    let bdate = ipDob.value.substring(0,4);
    let resBday = ""
    let errorMsg = "Write correct date and month"
    let primeMsg = "Yes,you are born on prime number date"
    let nonPrimeMsg = "You weren't born on prime number date"
    bday = parseInt(bday,10)
    bmon = parseInt(bmon,10)
    bdate = parseInt(bdate,10)
    if((bday>31) || (bday<=0) || (bmon>12) || (bmon<=0)){
        console.log("error")
        resBday = errorMsg
    }
    else{
        let count = 0
        for(let i=2;i<bdate;i++){
            if(bdate%i===0){
                count = count+1
            }
        }
        if(count===0){
            resBday = primeMsg
        }
        else{
            resBday = nonPrimeMsg
        }
    }
    textDisplay.innerHTML +="\n"+resBday
    console.log(resBday)
}
btn.addEventListener("click",()=>{
    leapCalc();
    primeCalc();
},false)