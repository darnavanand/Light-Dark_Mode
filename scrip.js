$(document).ready(function () {

    let right = false;

    $(".changer").click(function () { 

        if(right==false)
        {
            $(".container h2").text("Light Mode Tester");
            $(".container").css({"background-color":"white", "color":"black", "border":"solid"}); 
            $("body").css("background-color","black");
            $(".changer span:first").text("Light Mode");
        }

        else{
            $(".container h2").text("Dark Mode Tester");
            $(".container").css({"background-color":"black", "color":"white"}); 
            $("body").css("background-color","white");
            $(".changer span:first").text("Dark Mode");

        }

        right = !right;
          
    });
});