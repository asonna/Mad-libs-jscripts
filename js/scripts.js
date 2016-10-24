$(function(){
  $("#fields form").submit(function() {
    var inputs = ['title', 'name', 'position', 'favCompany', 'address'];
    inputs.forEach(function(input) {
       var userInput = $("input#" + input).val();
      $("." + input).text(userInput);
    });
   
//     var titleInput = $("input#title").val();
//     var nameInput = $("input#name").val();
//     var positionInput = $("input#position").val();
//     var favCompanyInput = $("input#favCompany").val();
//     var addressInput = $("input#address").val();

//     $(".name").text(nameInput);
//     $(".address").text(addressInput);
//     $(".position").text(positionInput);
//     $(".favCompany").text(favCompanyInput);
//     $(".title").text(titleInput);

    $("#letter").show();

    event.preventDefault();
  });
});
