/* slide show 
// Select UI elements or inputs

const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const uname = document.getElementById('uname');
const dname = document.getElementById('dob');
const loc = document.getElementById('loc');
const pnum = document.getElementById('pnum');
const subs = document.getElementById('subs');
const psw= document.getElementById('psw');
const psw2 = document.getElementById('psw2');
*/

function validateform(){  
  var fname=document.myform.fname.value;  
  var password=document.myform.password.value;  
    
  if (fname==null || fname==" "){  
    alert("Name can't be blank");  
    return false;  
  }else if(psw.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    }  
  }  
/*

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
//get values from the inputs
const fnameValue=fname.value.trim();
const lnameValue=lname.value.trim();
const unameValue=uname.value.trim();
const localNameValue=localName.value.trim();
const pnumValue=pnum.value.trim();
const pswValue=psw.value.trim();
const psw2Value=psw2.value.trim();



if(fnameValue===''){
  //show error
  setErrorFor(fname, 'Username cannot be blank')
}

else{
  //add success
  setSuccessFor(lname);
}
}

function setErrorFor(input, message){
  const formControl=input.parentElement;
  const small=formControl.querySelector('small')


  //add error message inside small
  small.innerText=message;

  //add error class
  formControl.className='form-control error';
}


// error count
let errors = 0;

// show input error message
const showError = (displayPlace, message) => {
    displayPlace.html(message);
    errors += 1;
}

// check for required field
const checkRequired = (inputArr) => {
    
  inputArr.forEach(function(input){
      if(input.val() === '') {
          showError(input.next(), `${input.attr('id')} field is required`);
      }
  })
}


// check for input length
const checkInputLength = (input, min, max) => {

  if(input.val().length <= min){
      showError(input.next(), `${input.attr('id')} must be more than ${min} characters long`);
  } else if( input.val().length >= max){
      showError(input.next(), `${input.attr('id')} must be less than ${max} characters long`);
  }
}

function checkPasswordMatch(psw, psw2) {
  if (psw.val() != psw2.val()) {
    showError(psw2.next(), 'Your passwords do not match');
  }
}


// When form is submitted
form.submit(function(e){
    
    // Submit the form
})

// TODO check for required inputs
checkRequired([uname, lname, psw, psw2, loc, subs,lname, dname]);

// TODO check for username length
checkInputLength(uname, 5, 10);
// TODO check for password length
checkInputLength(psw, 5, 10);
// TODO check for valid email
//checkEmail(email);
// TODO check if the passwords match
checkPasswordMatch(psw, psw2);

if(errors === 0){
    return true;
}else{
    return false;
}



// Your code

//var slideIndex = 0;
//showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000); // Change image every 8 seconds
}
*/