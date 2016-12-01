console.log("sor");
$(document).ready(function(){
  console.log("JQ");
//SANITIZE INPUT DATA
//begin buy apple on click
$("#buyApple").on("click", function (){
  console.log("in buy apple function");
  var qApple = $("#quantityApple").val();
  if(qApple.length == 0){
      alert("Please input a number!")
    } else if (qApple < 0) {
      alert("Please input a postive number!")
    } else {
      return qApple;
    };//end if condition
});//end buyApple test function

//begin buy apple on click
$("#buyOrange").on("click", function (){
  console.log("in buy orange function");
  var qOrange = $("#quantityOrange").val();
  if(qOrange.length == 0){
      alert("Please input a number!")
    } else if (qOrange < 0) {
      alert("Please input a postive number!")
    } else {
      return qOrange
    };//end if condition
});//end buyApple test function

//begin buy banana on click
$("#buyBanana").on("click", function (){
  console.log("in buy grape function");
  var qBanana = $("#quantityBanana").val();
  if(qBanana.length == 0){
      alert("Please input a number!")
    } else if (qBanana < 0) {
      alert("Please input a postive number!")
    } else {
      return qBanana;
    };//end if condition
});//end buyBanana test function

//begin buy grape on click
$("#buyGrape").on("click", function (){
  console.log("in buy grape function");
  var qGrape = $("#quantityGrape").val();
  if(qGrape.length == 0){
      alert("Please input a number!")
    } else if (qGrape < 0) {
      alert("Please input a postive number!")
    } else {
      return qGrape;
    };//end if condition
});//end buy grape test function

});//end doc ready
