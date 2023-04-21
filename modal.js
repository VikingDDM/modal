 // Get the modal
 var modalSuccess = document.getElementById("myModalSuccess");
 var modalWarning = document.getElementById("myModalWarning");
 var modalError = document.getElementById("myModalError");

// modal open and close operation by buttons
 $(document).ready(function(){

   // modal open by buttons in the main content
   $("#myBtnSuccess").click(function(){
     var modalSuccess = $("#myModalSuccess");
     modalSuccess.animate({opacity: '1'}, "slow").css("z-index", 1);
   });
   $("#myBtnWarning").click(function(){
     var modalWarning = $("#myModalWarning");
     modalWarning.animate({opacity: '1'}, "slow").css("z-index", 1);
   });
   $("#myBtnError").click(function(){
     var modalError = $("#myModalError");
     modalError.animate({opacity: '1'}, "slow").css("z-index", 1);
   });

   // success modal close by buttons goback, okay in the success modal footer
   $("#okayBtnSuccess").click(function(){
     var modalSuccess = $("#myModalSuccess");
     modalSuccess.animate({opacity: '0', zIndex: '-1'}, "slow")
   });
   $("#backBtnSuccess").click(function(){
     var modalSuccess = $("#myModalSuccess");
     modalSuccess.animate({opacity: '0', zIndex: '-1'}, "slow")
   });

   // warning modal close by buttons goback, okay in the warning modal footer
   $("#okayBtnWarning").click(function(){
     var modalWarning = $("#myModalWarning");
     modalWarning.animate({opacity: '0', zIndex: '-1'}, "slow")
   });
   $("#backBtnWarning").click(function(){
     var modalWarning = $("#myModalWarning");
     modalWarning.animate({opacity: '0', zIndex: '-1'}, "slow")
   });

   // error modal close by buttons goback, okay in the error modal footer
   $("#okayBtnError").click(function(){
     var modalError = $("#myModalError");
     modalError.animate({opacity: '0', zIndex: '-1'}, "slow")
   });
 });

 // modal close by click on the screen out of modal 
 window.onclick = function(event) {
   // success modal close
   if (event.target == modalSuccess) {
     $(document).ready(function(){
       var modalSuccess = $("#myModalSuccess");
       modalSuccess.animate({opacity: '0', zIndex: '-1'}, "slow")
     })
   }
   // warning modal close
   if (event.target == modalWarning) {
     $(document).ready(function(){
       var modalWarning = $("#myModalWarning");
       modalWarning.animate({opacity: '0', zIndex: '-1'}, "slow")
     })
   }
   // error modal close
   if (event.target == modalError) {
     $(document).ready(function(){
       var modalError = $("#myModalError");
       modalError.animate({opacity: '0', zIndex: '-1'}, "slow")
     })
   }
 }