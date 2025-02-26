
document.getElementById('form').addEventListener('submit',
  function(preventRefresh){
preventRefresh.preventDefault();

//get the html elements
const name=document.getElementById('name').value;
const email=document.getElementById('email').value;
const age=document.getElementById('age').value;
const password=document.getElementById('password').value

//loging the data to the console

let isValid=true;

console .log('name',name);
console .log("email",email);

if(age>=18){
console .log("age",age);
}else{
  document.getElementById('message').textContent='sorry age should be 18 years and above❌';
  document.getElementById('message').style.color='red';

  isValid=false;
}
if(password.length>=6){
  console .log("password",password);
}
else{
  document.getElementById('message').textContent="password is too short.should be atleast 6 character❌";
  document.getElementById('message').style.color='red';
  
 isValid=false;
}
if(isValid){
  document.getElementById('message').textContent="data submited succesfully...";
 document.getElementById('message').style.color='green';
  document.getElementById('form').reset();
  
}
});

/*
//prepare form submition
const formData={
  name:name,
  email:email,
  age:age,
  password:password

};

// send the data to the server by use of fetch fuction
try {
const response =  fetch( "http://localhost:5000/submit",{
method:"POST",

headers: {
"content-type":"applications .json"
},
body=JSON.stringify(formData)
});
const result= response.json(); //passing the json response

if(response.ok){
  document.getElementById('meassage').textContent="form submited succefully>>";
document.getElementById("mesage").style.color="blue"
document.getElementById('form').rest();
}
else{
  document.getElementById('message').textContent='error:'+result.message;
  doucume.getElementById('message').style.color="red";
}


} catch (error) {
  document.getElementById('message').textContent='error: failed to submit data';
  doucume.getElementById('message').style.color="red";
}

});
*/