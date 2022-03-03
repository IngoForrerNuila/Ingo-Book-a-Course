const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const uname = document.getElementById('uname')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
   let messages = []


    if (fname.value === '' || fname.value == null, lname.value === '' || lname.value == null){
        messages.push('Double check your First and Last name')
        alert("Please provide your first and last name");
        
    }

    if (email.value === '' || email.value == null){
        messages.push('There is no Email written')
        alert("There is no Email written");
        

    }
     if (password.value.length <= 6) {
        messages.push('Pasword must be longer than 6 characters')
        alert("Password should be minimum 6 character long");
        
    }


     if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')

    }

})
    
/*function passvalues() {
    var firstName=document.getElementById("fname").value;
    localStorage.setItem("textvalue",firstName);
    return false;
    
}*/

function passvalues() {

    localStorage.setItem("firstName", document.getElementById("fname").value)
    localStorage.setItem("lastName", document.getElementById("lname").value)
    localStorage.setItem("lselect", document.getElementById("lselect").value)
    localStorage.setItem("language", document.getElementById("language").value)

}

     



