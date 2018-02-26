$(document).ready(function(){

    var rick = {                                                                        // Object with Rick's stats
        HP: 50,
        Attack: 120,
        CounterAttack: 130,
    };

    var morty = {                                                                       // Object with Morty's stats
        HP: 75,
        Attack: 90,
        CounterAttack: 100,
    };

    var krom = {                                                                        // Object with Krombopulos' stats
        HP: 90,
        Attack: 100,
        CounterAttack: 110,
    };

    var lucius = {                                                                      // Object with Lucius' stats
        HP: 120,
        Attack: 60,
        CounterAttack: 80,
    };

    $("#HP1").html("HP: " + (rick.HP));                                                 // Push Rick's HP to the HTML

    $("#HP2").html("HP: " + (morty.HP));                                                // Push Morty's HP to the HTML

    $("#HP3").html("HP: " + (krom.HP));                                                 // Push Krombopulos' HP to the HTML

    $("#HP4").html("HP: " + (lucius.HP));                                               // Push Lucius' HP to the HTML

    });

    function cssChanges1() {                                                            // Function to handle CSS changes after the initial click
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

    function moveRick() {                                                               // Function to move Rick
        $(".char1").detach().appendTo(".char5").toggleClass("testing1").removeClass("char1");                                        
         // Move Rick to 'Your Character' position
    
        $(".char2").detach().appendTo(".char6").toggleClass("testing2").removeClass("char2");
        // Move Morty to 'Enemies Available' position
        
        $(".char3").detach().appendTo(".char7").toggleClass("testing3").removeClass("char3");                                         
        // Move Krombopulos to 'Enemies Available' position
    
        $(".char4").detach().appendTo(".char8").toggleClass("testing4").removeClass("char4");                                         
        // Move Lucius to 'Enemies Available' position
        
        cssChanges1();                                                                   // Call function for CSS changes
    }

    function moveMorty() {                                                              // Function to move Morty
        $(".char2").detach().appendTo(".char5")                                         // Move Morty to 'Your Character' position
        $(".char1").detach().appendTo(".char6")                                         // Move Rick to 'Enemies Available' position
        $(".char3").detach().appendTo(".char7")                                         // Move Krombopuls to 'Enemies Available' position
        $(".char4").detach().appendTo(".char8")                                         // Move Lucius to 'Enemies Available' position
        cssChanges1();
    }

    function moveKrom() {                                                               // Function to move Krombopulos
        $(".char3").detach().appendTo(".char5")                                         // Move Krombopulos to 'Your Character' position
        $(".char1").detach().appendTo(".char6")                                         // Move Rick to 'Enemies Available' position
        $(".char2").detach().appendTo(".char7")                                         // Move Morty to 'Enemies Available' position
        $(".char4").detach().appendTo(".char8")                                         // Move Lucius to 'Enemies Available' position
        cssChanges1(); 
    }

    function moveLuc() {                                                                // Function to move Lucius
        $(".char4").detach().appendTo(".char5")                                         // Move Lucius to 'Your Character' position
        $(".char1").detach().appendTo(".char6")                                         // Move Rick to 'Enemies Available' position
        $(".char2").detach().appendTo(".char7")                                         // Move Morty to 'Enemies Available' position
        $(".char3").detach().appendTo(".char8")                                         // Move Krombopulos to 'Enemies Available' position
        cssChanges1();  
    }


        // scroll to div after click
    $.fn.scrollView = function () {               
        return this.each(function () {
        $('html, body').animate({
        scrollTop: $(this).offset().top
        }, 1000);
        });
    }



    $(".charImg1").on("click", function() {                                             
        moveRick();                                                                     
    });

    $(".charImg2").on("click", function() {                                             
        moveMorty();
    });

    $(".charImg3").on("click", function() {                                            
        moveKrom();
    });
              
    $(".charImg4").on("click", function() {                                
        moveLuc();
    });



// this works for Rick, pushes morty down
//  NEED VARIABLE FOR WHEN CHARACTER IS CHOSEN, WHEN RICK IS CHOSEN VAR = 1, IF VAR ==== 1 RUN THIS CODE - CREATE CODE FOR OTHER CHARS, MORTY === 2, ETC...
//  NEED VARIABLE FOR WHEN CHARACTER IS CHOSEN, WHEN RICK IS CHOSEN VAR = 1, IF VAR ==== 1 RUN THIS CODE - CREATE CODE FOR OTHER CHARS, MORTY === 2, ETC...
//  NEED VARIABLE FOR WHEN CHARACTER IS CHOSEN, WHEN RICK IS CHOSEN VAR = 1, IF VAR ==== 1 RUN THIS CODE - CREATE CODE FOR OTHER CHARS, MORTY === 2, ETC...
//  NEED VARIABLE FOR WHEN CHARACTER IS CHOSEN, WHEN RICK IS CHOSEN VAR = 1, IF VAR ==== 1 RUN THIS CODE - CREATE CODE FOR OTHER CHARS, MORTY === 2, ETC...
    $(".r3c1").on("click", function() {
        $(".r3c1").detach().appendTo(".r4c1");
        $(".r3c2").css("margin-left", "3%");
        $(".r4c1").toggleClass("testClass1");
        $(".r3c1").css({
            "border" : "none",
            "background" : "none",
        });
        $(".testClass1").css({
            "max-width" : "9.5%",
            "max-height" : "15%",
            "border" : "aqua solid 2px",
            "background" : "white",
            "margin-left" : "3%",
            "display" : "inline",
            "text-align" : "center",
        });
        $(".r2c1").scrollView();
      //  $(".r4c1").css("text-align", "center");  // still trying to get bottom image centered

    });


    // this works for Rick, pushes krom down          // KROM DOES NOT HAVE FORMATTING AFTER MOVE
    $(".r3c2").on("click", function() {
        $(".r3c2").detach().appendTo(".r4c1");
        $(".r3c2").css({
            "border" : "none",
            "background" : "none",
        });
        $(".testClass1").css({
            "max-width" : "9.5%",
            "max-height" : "15%",
            "border" : "aqua solid 2px",
            "background" : "white",
            "margin-left" : "3%",
            "display" : "inline",
            "text-align" : "center",
        });


        $(".r2c1").scrollView();

    });



// this works for Rick, pushes luc down                 // LUC DOES NOT HAVE FORMATTING AFTER MOVE
$(".r3c3").on("click", function() {
    $(".r3c3").detach().appendTo(".r4c1");

    $(".r3c3").css({
            "border" : "none",
            "background" : "none",
        });
        $(".testClass1").css({
            "max-width" : "9.5%",
            "max-height" : "15%",
            "border" : "aqua solid 2px",
            "background" : "white",
            "margin-left" : "3%",
            "display" : "inline",
            "text-align" : "center",
        });


    $(".r2c1").scrollView();



});






