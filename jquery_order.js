


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
        $(".condiment").show();
        $(".burger_stuff").show();
        $(".wraps").hide();
        $(".t_c_f").show();
        $(".rest").show();


      } else if (val == "wrap") {
        $(".condiment").show();
        $(".wraps").show();
        $(".burger_stuff").hide();
        $(".t_c_f").show();
        $(".rest").show();
      }
  });


  function main(){
    $(".condiment").hide();
    $(".burgers").hide();
    $(".wraps").hide();
    $(".t_c_f").hide();
    $(".rest").hide();
  }

  main();
});
