//for logout page #####################################

function myFunction() {
    if (confirm("Are you sure to logout")) {
        document.write("Successfully logged out!!!");
        window.open("login.html");
    }
}

//for login page ##########################################

function check(form) {
    if (form.upname.value == "meryem" && form.psw.value == "123") {
        window.open("BuyTech.html")
    }
    else if (form.upname.value == "MM" && form.psw.value == "MM") {
        window.open("BuyTech.html")
    }
    else if (form.upname.value == "meryem" && form.psw.value == "meryem123") {
        window.open("BuyTech.html")
    }
    else {
        alert("The password or username is incorrect")

    }
}

//for signup page ##############################

function signup() {
    var name = document.signnup.fName;
    var Lnam = document.signnup.lName;
    var emplID = document.signnup.emplid;
    var email = document.signnup.Email;
    var phone = document.signnup.Phone;
    var course = document.signnup.Subject;


    if (name.value == "") {
        window.alert("First name should not be EMPTY! Please enter your First name.");
        name.focus();
        return false;
    }
    if (Lnam.value == "") {
        window.alert("Last name should not be EMPTY! Please enter your Last name.");
        Lnam.focus();
        return false;
    }

    if (emplID.value == "" || isNaN(empl.value) || empl.value.length != 8) {
        window.alert("PLEASE enter a valid 8 DIGITS EMPL ID");
        emplID.focus();
        return false;
    }

    if (email.value == "") {
        window.alert("PLEASE enter a valid Email address");
        email.focus();
        return false;
    }
    if (email.value.indexOf("@", 0) < 0) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (email.value.indexOf(".", 0) < 0) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (phone.value == "" || isNaN(phone.value) || phone.value.length != 10) {
        window.alert("PLEASE enter a valid 10 digits Phone Numbers");
        phone.focus();
        return false;
    }

    alert("Submitted Successfully.");
    return true;
}

//for psw(forgot password) page ################################
/*   //do as a sign up page; need to modify
function check(form){
    if(form.upname.value=="meryem" && form.psw.value == "123"){
        window.open("BuyTech.html")
    }
    else if(form.upname.value=="mm" && form.psw.value == "mm"){
        window.open("BuyTech.html")
    }
    else if(form.upname.value=="meryem" && form.psw.value == "meryem123"){
        window.open("BuyTech.html")
    }
        else{
            alert("The username or password is incorrect")
    
    }
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/
function passvalues() {
    let n = ' $70';
    let x = 'Kotin headphone';
    localStorage.setItem('price', n);
    localStorage.setItem('product', x);
}