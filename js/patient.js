

 $(document).ready(function(){
   $("#view").click(function(){
      alert("No prescription yet");
   })
   $("#download").click(function(){
      alert("If the prescription is available it will download automatically");
   })
   $("#ambulance").click(function(){
      alert("Our ambulance hotline: +254 712 289 027");
   })

   $("#prescription").click(function(){
      $("#upload").show();
      $("#prescription").hide();
   })
   $("#uploadForm").click(function(){
      $("#prescription").show();
      $("#upload").hide();
   })

   $("#upload").submit(function(){
      var location = $("#floatingTextarea").val();
      alert("We have received your prescription . Your medicine will be delivered at " + location + " " + ". Payment after delivery")
   })

   $("#labResults").click(function(){
      $("#lab").show();
      $("#labResults").hide();
   })
   $("#uploadResults").click(function(){
      $("#labResults").show();
      $("#lab").hide();
   })

   $("#lab").submit(function(){
      alert("your lab results have been received and are under review. Be on wait for results");
   })

   $("#viewLab").click(function(){
      alert("Be on wait for results");
   })
   $("#downloadResults").click(function(){
      alert("If results are available , download will start automatically");
   })
 })