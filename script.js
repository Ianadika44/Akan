var maleNames =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Koffi","Kwame"]
var femaleNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
var daysOfWeek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

function akanNames(){
    var date  =parseInt(document.getElementById("date").value);
    var month =parseInt(document.getElementById("month").value);
    var year =parseInt(document.getElementById("year"));
    var date =new Date(date +"/" + month + "/" + year);
    var dateBorn = date.getDate();
    var akanNames;
    var validate =(date>0 && date <=31 && month>0 && month <=12 && year >0);
    alert("date between 1 and 31");

    
}