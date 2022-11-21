const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



// let userName = document.getElementById("username");
// let Email = document.getElementById("email");
// let Password = document.getElementById("pass");

// function checkData(){
// validpra=document.getElementById("validp");
// let sginuparray = [];
// let objsginUp = {};

// objsginUp =  {
//     UserName : userName.value,
//     Email : Email.value,
//     Password : Password.value
// }
// try {
//     if(objsginUp.UserName=="/^[a-zA-Z ]+$/" || objsginUp.Email=="/\S+@\S+.\S+/"  || objsginUp.Password=="/^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,16}$/")  throw "incorrect username , password or email  "
// }

// catch (err)
// {
//     validpra.innerHTML=err; 
// }
// }

function checkData()
{
  
  let checkErr=0;
  let checkName =document.getElementById("username").value;
  let checkEmail =document.getElementById("email").value;
  let checkPassword =document.getElementById("pass").value;
  // let checkPassword2 =document.getElementById("pass2").value;
	  //  console.log(checkName);
	  //  console.log(checkEmail);
	  //  console.log(checkPassword);
	  //  console.log(checkPassword2);
	  
	  try{
		  if(!checkName.match(/^[a-z ,.'-]+$/i) ) throw "name for information"
		  if(!checkPassword.match( /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))/)  ) throw "pas for information"
		  // if(checkPassword != checkPassword2) throw "error for information"
		  if(!checkEmail.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) throw "email for information"
	  }
	  catch(error){
	  checkErr++;
	   let err=document.getElementById("validp");
	   err.innerHTML=error;
	  }
	  if(checkErr==0)
	  {  
		  //  console.log("test");
		   localStorage.setItem("name",JSON.stringify(checkName));
		   localStorage.setItem("email",JSON.stringify(checkEmail));
		   localStorage.setItem("password",JSON.stringify(checkPassword));
		  
	  }
	  
}

// function for compaire data

function compareData()
{
  let email1=JSON.parse(localStorage.getItem("email"));
  let pass1=JSON.parse(localStorage.getItem("password"));
  
  let email2=document.getElementById("email2");
  let pass2=document.getElementById("pass2");
  if(email1==email2.value && pass1==pass2.value)
  {
	  console .log("welcom");
  }

  else 
  {
	  console.log("again");
  }

  // console.log(email1);
}