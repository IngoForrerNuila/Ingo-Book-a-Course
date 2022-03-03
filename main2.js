

/*
--Beautiful code that helped me at the very begginning-- (T___T)
document.getElementById("result").innerHTML=localStorage.getItem("firstName");
document.getElementById("result2").innerHTML=localStorage.getItem("lastName");
document.getElementById("result3").innerHTML=localStorage.getItem("lselect");
document.getElementById("result4").innerHTML=localStorage.getItem("language");
document.getElementById("result5").innerHTML=localStorage.getItem("email");
document.getElementById("result6").innerHTML=localStorage.getItem("uname");*/

var fname=localStorage.getItem("firstName");
var lname=localStorage.getItem("lastName");
var lselect=localStorage.getItem("lselect");
var language=localStorage.getItem("language");
var email=localStorage.getItem("email");
var uname=localStorage.getItem("uname");

document.getElementById("result").innerHTML=fname;
document.getElementById("result2").innerHTML=lname;
document.getElementById("result3").innerHTML=lselect;
document.getElementById("result4").innerHTML=language;
document.getElementById("result5").innerHTML=email;
document.getElementById("result6").innerHTML=uname;







