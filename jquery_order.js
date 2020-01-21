


  function validateForm() {
    var x = document.forms["order"]["name"].value

    var t = true
    var response = ""

    if(x=="") {
      response+= "\nName must be filled out."
      t = false
    }
    if (response != "") {
      alert(response)
    }

    return t
  }




$(function(){


  $(".entree_choice").click(() => {
      var val = $("input[name=entree_choice]:checked").val();
      if(val == "burger"){
        $(".rest").show();
        $(".burgers").show();
        $(".wraps").hide();

      } else if (val == "wrap") {
        $(".rest").show();
        $(".wraps").show();
        $(".burgers").hide();
      }
  });


  function main(){
    $(".rest").hide();
    $(".burgers").hide();
    $(".wraps").hide();

  }

  main();
});
