  
  function Booking(name, email, phoneNo, doctor, message) {
  this.name = name;
  this.email = email;
  this.phoneNo = phoneNo;
  this.doctor = doctor;
  this.message = message;
}
$(document).ready(function () {
$("#btn").click(function (event) {
$("#form").show();
$(".check").show();
$("#btn").hide();
$(".show").hide();
  })
  $("#form").submit(function (event) {
    event.preventDefault()
    var myName = $("#names").val();
    var myEmail = $("#email").val();
    var myPhoneNo = $("#number").val();
    var myServices = $("#service").val();
    var myDoctor = $("#doctors").val();
var myBooking = new Booking( myName, myEmail, myEmail, myPhoneNo, myDoctor, myServices)
//alert("thankyou we have recevied")
$("#p").show();
$("#patient").html(myName);
$("#service").html(myServices);
$("#doc").html(myDoctor);
$("#form").hide();
$("#btn").show();
$("#check").hide();
  })

 })    


