
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
  //import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAOx4zVwVPr8hSNnZeUapXg_-yQPjfORRg",
    authDomain: "zena-health-67de5.firebaseapp.com",
    databaseURL: "https://zena-health-67de5-default-rtdb.firebaseio.com",
    projectId: "zena-health-67de5",
    storageBucket: "zena-health-67de5.appspot.com",
    messagingSenderId: "970939841182",
    appId: "1:970939841182:web:73127fe64f44051f50998f",
    measurementId: "G-HTGLEN4E91"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 // const analytics = getAnalytics(app);



document.querySelector("#register_login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close_btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});
document.querySelector("#register_doctor").addEventListener("click",function(){
   document.querySelector(".pop-up").classList.add("active");
});

document.querySelector(".pop-up .close-btn").addEventListener("click",function(){
   document.querySelector(".pop-up").classList.remove("active");
});

function validate(){
  var username= document.forms["myForm"]["uName"].value;
  var email= document.forms["myForm"]["email"].value;
  var password= document.forms["myForm"]["password"].value;
  var passwordc= document.forms["myForm"]["passwordc"].value;
  var contact= document.forms["myForm"]["contact"].value;
  var remember= document.getElementById("remember_me");
 //validates user name
  if(username == ""){
     alert("enter user name please");
     return false; 
     
  }

 if(username == !isNaN){
    alert("your contacts should be a number");
    return false; 
    
 }

//validate email

if(email == ""){
   alert("enter your email please");
   return false; 
   
}

//var at = indexOf("@");
//var dot = lastIndexOf(".");
//if(at<1||dot<at+2||dot+2  >= email.length ){
  // alert("invalid email");
   //return false; 
//}

  //validates password
  if(password == ""){
    alert("enter  password");
    return false; 
    
 }
 if( password.length  != 8){
     alert("password should have be 8 characters")
     return false;
 }
 //confirms passweord
 if(passwordc == ""){
    alert("confirm password please");
    return false; 
    
 }

 if(passwordc == !passwordc){
    alert("enter paasword don't match");
    return false; 
    
 }
 //validates contact
 if(contact == ""){
    alert("enter your contacts please");
    return false; 
    
 }
 if(contact == isNaN){
    alert("your contacts should be a number");
    return false; 
    
 }
 if(contact.length<10){
    alert(" your contacts should be complete");
    return false; 
    
}

}