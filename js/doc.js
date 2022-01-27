$(document).ready(function () {
     $("#dayOff").click(function () {
          var dayOff = prompt("Please Indicate the day that you will be off..");
          alert("No consultations will be scheduled on " + dayOff);
     })
     $("#inHospital").click(function () {
          var dayIn = prompt("Please Indicate the day that you are available ..");
          alert(" consultations will be scheduled on " + dayIn);
     })
     $("#docConsultations").click(function () {
          $("#uploadPatientPrescription").show();
          $("#docConsultations").hide();
     })
     $("#uploadPatientResults").click(function () {
          $("#docConsultations").show();
          $("#uploadPatientPrescription").hide();
     })

})