const dayNumber=new Date().getDate();
const year=new Date().getFullYear();
const dayName=new Date().toLocaleString("default",{weekday:"long"});
const monthName=new Date().toLocaleString("default",{month:"long"});

document.querySelector(".month").innerHTML=monthName;
document.querySelector(".day").innerHTML=dayName;
document.querySelector(".date").innerHTML=dayNumber;
document.querySelector(".year").innerHTML=year;

function clock(){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period ="AM";

    if(hours>=12){
        period="PM";
    }
    //12-hrs time
    hours = hours>12 ? hours % 12 : hours;
    //Adding zero for values less than 10
    if(hours<10){
        hours="0"+hours;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }

    document.querySelector(".hours").innerHTML=hours;
    document.querySelector(".minutes").innerHTML=minutes;
    document.querySelector(".seconds").innerHTML=seconds;
    document.querySelector(".period").innerHTML=period;

}
var updateClock = setInterval(clock,1000);