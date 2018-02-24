$(document).ready(function(){

    var rick = {
        HP: 50,
        Attack: 120,
        CounterAttack: 130,
    };

    var morty = {
        HP: 75,
        Attack: 90,
        CounterAttack: 100,
    };

    var fart = {
        HP: 90,
        Attack: 100,
        CounterAttack: 110,
    };

    var lucius = {
        HP: 120,
        Attack: 60,
        CounterAttack: 80,
    };

    $("#HP1").html("HP: " + (rick.HP));  

    $("#HP2").html("HP: " + (morty.HP));  

    $("#HP3").html("HP: " + (fart.HP));  

    $("#HP4").html("HP: " + (lucius.HP)); 

    });

    function changes() {
        $(".r1c1").css("height", "160px");
        $(".r1c1, .r1c2, .r1c3, .r1c4").css({
            "border" : "none",
            "background" : "none",
        });
        $(".r2c1, .r3c1, .r3c2, .r3c3").css({
            "border" : "aqua solid 2px",
            "background" : "white",
        });

    }

/*
    function cssChanges() {
    $(".r1c1").css({
        "height" : "160px",
    }); 
    $(".r1c1, .r1c2, .r1c3, .r1c4").css({
        "border" : "none",
        "background" : "none",
    });
    $(".r2c1, .r3c1, .r3c2, .r3c3").css({
        "border" : "aqua solid 2px",
        "background" : "white",
    });
    
*/

    $(".charImg1").on("click", function() {  
        $(".char1").detach().appendTo(".char5")
        $(".char2").detach().appendTo(".char6")
        $(".char3").detach().appendTo(".char7")
        $(".char4").detach().appendTo(".char8")
        changes();
    });
        /*
        $(".r1c1").css({
            "height" : "160px",
        });  
        $(".r1c1, .r1c2, .r1c3, .r1c4").css({
            "border" : "none",
            "background" : "none",
        });
        $(".r2c1, .r3c1, .r3c2, .r3c3").css({
            "border" : "aqua solid 2px",
            "background" : "white",
        });
    });
*/



    $(".charImg2").on("click", function() {  
        $(".char2").detach().appendTo(".char5")
        $(".char1").detach().appendTo(".char6")
        $(".char3").detach().appendTo(".char7")
        $(".char4").detach().appendTo(".char8")
        changes();
    });

/*
        $(".r1c1").css({
            "height" : "160px",
        });  
        $(".r1c1, .r1c2, .r1c3, .r1c4").css({
            "border" : "none",
            "background" : "none",
        });
        $(".r2c1, .r3c1, .r3c2, .r3c3").css({
            "border" : "aqua solid 2px",
            "background" : "white",
        });
    });

    */

    $(".charImg3").on("click", function() {  
        $(".char3").detach().appendTo(".char5")
        $(".char1").detach().appendTo(".char6")
        $(".char2").detach().appendTo(".char7")
        $(".char4").detach().appendTo(".char8")
        changes();
    });

/*
        $(".r1c1").css({
            "height" : "160px",
        });  
        $(".r1c1, .r1c2, .r1c3, .r1c4").css({
            "border" : "none",
            "background" : "none",
        });
        $(".r2c1, .r3c1, .r3c2, .r3c3").css({
            "border" : "aqua solid 2px",
            "background" : "white",
        });
    });  */
                
    $(".charImg4").on("click", function() {  
        $(".char4").detach().appendTo(".char5")
        $(".char1").detach().appendTo(".char6")
        $(".char2").detach().appendTo(".char7")
        $(".char3").detach().appendTo(".char8")
        changes();
    });

/*
        $(".r1c1").css({
            "height" : "160px",
        });  
        $(".r1c1, .r1c2, .r1c3, .r1c4").css({
            "border" : "none",
            "background" : "none",
        });
        $(".r2c1, .r3c1, .r3c2, .r3c3").css({
            "border" : "aqua solid 2px",
            "background" : "white",
        });
    });  */
    

/*

    on click r3c1

    on click r3c2

    on click r3c2


*/

    
    







