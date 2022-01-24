
//Business Logic/backend 

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



document.querySelector("#register_login").addEventListener("click", function () {
   document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close_btn").addEventListener("click", function () {
   document.querySelector(".popup").classList.remove("active");
});
document.querySelector("#register_doctor").addEventListener("click", function () {
   document.querySelector(".pop-up").classList.add("active");
});

document.querySelector(".pop-up .close-btn").addEventListener("click", function () {
   document.querySelector(".pop-up").classList.remove("active");
});

// function validate(){
//   var username= document.forms["myForm"]["uName"].value;
//   var email= document.forms["myForm"]["email"].value;
//   var password= document.forms["myForm"]["password"].value;
//   var passwordc= document.forms["myForm"]["passwordc"].value;
//   var contact= document.forms["myForm"]["contact"].value;
//   var remember= document.getElementById("remember_me");
//  //validates user name


// }

//user Interface/ frontEnd
$(document).ready(function () {
   $("#doctorForm").submit(function (event) {
      event.preventDefault();

      var userName = $("#username").val();
      var npi = $("#npi").val();
      var location = $("#location").val();
      var specialist = $("#specialist").val();
      var contact = $("#contact").val();
      var password = $("#password").val();
      var confirmPassword = $("#confirmPassword").val();
      var rememberMe = $("#rememberMe:checked");



      if (userName == "") {
         alert("enter user name please");
         return false;

      }


      //validates password
      if (password == "") {
         alert("enter  password");
         return false;

      }

      //confirms passweord
      if (confirmPassword == "") {
         alert("confirm password please");
         return false;

      }

      if (password !== confirmPassword) {
         alert(" paasword don't match");
         return false;

      }
      //validates contact
      if (contact == " ") {
         alert("enter your contacts please");
         return false;

      }
      if (contact == isNaN) {
         alert("your contacts should be a number");
         return false;

      }
      if (contact.length < 10) {
         alert(" your contacts should be complete");
         return false;

      }
      alert("registration succesfull")

   })
   $("#register").click(function () {
      function pageRedirect() {
         window.location.href = "Doctors-interface.html";
         $("#docName").html(userName);
         $("#docContact").html(contact);
      }
      setTimeout("pageRedirect()", 10000);
      pageRedirect();

   })
  



   $("#patientForm").submit(function (event) {
      event.preventDefault();

      var myNamme = $("#name").val();
      var email = $("#email").val();
      var yourPassword = $("#pass").val();
      var confirmPass = $("#confirmPass").val();

      
      if (myNamme == "") {
         alert("enter user name please");
         return false;

      }
      if(email == ""){
         alert("Please enter your email");
         return false;
      }


      //validates password
      if (yourPassword == "") {
         alert("enter  password");
         return false;

      }

      //confirms passweord
      if (confirmPass == "") {
         alert("confirm password please");
         return false;

      }

      if (yourPassword !== confirmPass) {
         alert(" paasword don't match");
         return false;

      }
      alert("registration succesfull");



   })

   $("#reg").click(function () {
      function redirectPage() {
         window.location.href = "patients_interface.html";
         // $("#names").html(myNamme);
         // $("#email").html(email);
      }
      setTimeout("pageRedirect()", 10000);
      redirectPage();

   })

   $("#btn_consult").click(function(){
      alert("appointment booked");
   })
   $("#btn_two").click(function(){
      alert("appointment booked");
   })
   $("#btn_three").click(function(){
      alert("appointment booked");
   })
   $("#btn_four").click(function(){
      alert("appointment booked");
   })
   $("#btn_five").click(function(){
      alert("appointment booked");
   })
   $("#btn_six").click(function(){
      alert("appointment booked");
   })

  



  
})