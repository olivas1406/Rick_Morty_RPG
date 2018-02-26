

var rick = {                                                                        // Object with Rick's stats
HP: 50,
Attack: 120,
CounterAttack: 130,
};

var morty = {                                                                       // Object with Morty's stats
HP: 75,
Attack: 90,
CounterAttack: 100
};

var krom = {                                                                        // Object with Krombopulos' stats
HP: 90,
Attack: 100,
CounterAttack: 110
};

var lucius = {                                                                      // Object with Lucius' stats
HP: 120,
Attack: 60,
CounterAttack: 80
};
/*
var  yourDefend = {
};
*/
var yourChar =  {
HP: 0,
Attack: 0,
CounterAttack: 0,
};                                                                 


var yourDefend = {
HP: 0,
Attack: 0,
CounterAttack: 0,
};


var logic1 = 0;
/*
var yourChar1 = {};

var yourChar2 = {};

var yourChar3 = {};

var yourChar4 = {};
*/



$(document).ready(function(){
   
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

    function moveRick() {                                                                       // Function to move Rick to 'Who You Be' (your character)
        $(".char1").detach().appendTo(".char5").toggleClass("testing1").removeClass("char1");   // Move Rick to 'Your Character' position                                     
        $(".char2").detach().appendTo(".char6").toggleClass("testing2").removeClass("char2");   // Move Morty to 'Enemies Available' position
        $(".char3").detach().appendTo(".char7").toggleClass("testing3").removeClass("char3");   // Move Krombopulos to 'Enemies Available' position                                        
        $(".char4").detach().appendTo(".char8").toggleClass("testing4").removeClass("char4");   // Move Lucius to 'Enemies Available' position                                        
        cssChanges1();                                                                          // Call function for CSS changes
        yourChar = rick;                                                                        // Assigns Rick's stats to var yourChar 
    }

    function moveMorty() {                                                                      // Function to move Morty to 'Who You Be' (your character)
        $(".char2").detach().appendTo(".char5").toggleClass("testing1").removeClass("char2");   // Move Morty to 'Your Character' position
        $(".char1").detach().appendTo(".char6").toggleClass("testing2").removeClass("char1");   // Move Rick to 'Enemies Available' position
        $(".char3").detach().appendTo(".char7").toggleClass("testing3").removeClass("char3");   // Move Krombopuls to 'Enemies Available' position
        $(".char4").detach().appendTo(".char8").toggleClass("testing4").removeClass("char4");   // Move Lucius to 'Enemies Available' position
        cssChanges1();                                                                          // Call function for CSS changes
        yourChar = morty;                                                                        // Assigns Morty's stats to var yourChar
    }

    function moveKrom() {                                                                       // Function to move Krombopulos to 'Who You Be' (your character)
        $(".char3").detach().appendTo(".char5").toggleClass("testing1").removeClass("char3");   // Move Krombopulos to 'Your Character' position
        $(".char1").detach().appendTo(".char6").toggleClass("testing2").removeClass("char1");   // Move Rick to 'Enemies Available' position
        $(".char2").detach().appendTo(".char7").toggleClass("testing3").removeClass("char2");   // Move Morty to 'Enemies Available' position
        $(".char4").detach().appendTo(".char8").toggleClass("testing4").removeClass("char4");   // Move Lucius to 'Enemies Available' position
        cssChanges1();                                                                          // Call function for CSS changes
        yourChar = krom;                                                                        // Assigns Krombopulos' stats to var yourChar
    }

    function moveLuc() {                                                                        // Function to move Lucius to 'Who You Be' (your character)
        $(".char4").detach().appendTo(".char5").toggleClass("testing1").removeClass("char4");   // Move Lucius to 'Your Character' position
        $(".char1").detach().appendTo(".char6").toggleClass("testing2").removeClass("char1");   // Move Rick to 'Enemies Available' position
        $(".char2").detach().appendTo(".char7").toggleClass("testing3").removeClass("char2");   // Move Morty to 'Enemies Available' position
        $(".char3").detach().appendTo(".char8").toggleClass("testing4").removeClass("char3");   // Move Krombopulos to 'Enemies Available' position
        cssChanges1();                                                                          // Call function for CSS changes
        yourChar = lucius;                                                                      // Assign Lucius' stats to var yourChar
    }

    $.fn.scrollView = function () {                                                         // scroll to div after click          
        return this.each(function () {
        $('html, body').animate({
        scrollTop: $(this).offset().top 
        }, 500);                                                                            // .5 seconds for transition   
        });
    }
    
    function movePos1D() {                                                                  // Function to move position 1 from 'Enemies Available' to 'Defender'
        $(".r3c1").detach().appendTo(".r4c1");                                              // Move from div r3c1 to r4c1
        $(".r3c2").css("margin-left", "3%");                                                // CSS changes
        $(".r4c1").toggleClass("testClass1");                                               // Change div name
        $(".r3c1").css({                                                                    // CSS changes
            "border" : "none",
            "background" : "none",
        });
        $(".testClass1").css({                                                              // CSS changes
            "max-width" : "9.5%",
            "max-height" : "15%",
            "border" : "aqua solid 2px",
            "background" : "white",
            "margin-left" : "3%",
            "display" : "inline",
            "text-align" : "center",
        });
        $(".r2c1").scrollView();                                                            // Scroll to div r2c1
        
           }       /*
        
        if (logic1 === 234) {                                                               // rick was picked, morty is in position 1
            yourDefend = morty;                                                             // assign morty stats to var yourDefend
            logic1 = 678;                                                                   // krom will be in positon 1 next
        } else if (logic1 === 134) {                                                        // morty was picked
            yourDefend = morty;                                                             // asign rick stats to yourDefend (pos 1, round 1)
            logic1 = 678;                                                                   // krom will be in position 1 next
        } else if (logic1 === 124) {                                                        // krob was picked
            yourDefend = rick;                                                              // assign rick stats to yourDefend (pos 1, round 1)
            logic1 = 987;                                                                   // morty will be in position 1 next
        } else if (logic1 === 123) {                                                        // Luc was picked
            yourDefend = rick;                                                              // assigned rick stats to yourDefend (pos 1, round 1)
            logic1 = 987;                                                                   // morty will be in position 1 next
        } else if (logic1 === 678) {                                                        // Krom is now in position 1 (round 2)
            yourDefend = krom;
           
            
            ///////////////////////////need to reassign logic1 for round 3 set to 987
        
        } else if (logic1 === 987) {
           yourDefend = morty; 
         
          
          /////////////////////////////reassign logic 1 for round 3 set to 678
        
        }
    } 
    */

    function movePos2D() {                                                                  // Function to move position 2 from 'Enemies Available' to 'Defender'
        $(".r3c2").detach().appendTo(".r4c1");                                              // Move from div r3c2 to r4c1
        $(".r3c2").css({                                                                    // CSS changes
            "border" : "none",
            "background" : "none",
        });
        $(".testClass1").css({                                                              // CSS changes
            "max-width" : "9.5%",
            "max-height" : "15%",
            "border" : "aqua solid 2px",
            "background" : "white",
            "margin-left" : "3%",
            "display" : "inline",
            "text-align" : "center",
        });
        $(".r2c1").scrollView();                                                            // Scroll to div r2c1
       
    }
       /*
        if (logic1 === 234) {                                                               // rick was picked, krom is in pos 2
            yourDefend = krom;                                                              // assign krom stats to var yourDefend
            logic1 = 678;                                                                   // luc will be in positon 1 next
        } else if (logic1 === 134) {                                                        // morty was picked, krom is in pos 2
            yourDefend = krom;                                                              // assign krom stats to yourDefend (pos 1, round 1)
            logic1 = 678;                                                                   // luc will be in position 1 next
        } else if (logic1 === 124) {                                                        // krob was picked
            yourDefend = morty;                                                             // assign morty stats to yourDefend (pos 1, round 1)
            logic1 = 678;                                                                   // luc will be in position 2 next
        } else if (logic1 === 123) {                                                        // Luc was picked
            yourDefend = morty;                                                             // assigned morty stats to yourDefend (pos 1, round 1)
            logic1 = 987;                                                                   // krom will be in position 1 next
        } else if (logic1 === 678) {                                                        // luc is now in position 2 (round 2)
            yourDefend = lucius;                                                            // assign luc stats to var yourDefend
        } else if (logic1 === 987) {                                                        // krom is now in position 2 (round 2)
           yourDefend = krom; 
        }
    }

*/



    function movePos3D() {                                                                  // Function to move position 3 from 'Enemies Available' to 'Defender'
        $(".r3c3").detach().appendTo(".r4c1");                                              // Move from div r3c3 to r4c1
        $(".r3c3").css({                                                                    // CSS changes
                "border" : "none",
                "background" : "none",
            });
            $(".testClass1").css({                                                          // CSS changes
                "max-width" : "9.5%",
                "max-height" : "15%",
                "border" : "aqua solid 2px",
                "background" : "white",
                "margin-left" : "3%",
                "display" : "inline",
                "text-align" : "center",
            });
        $(".r2c1").scrollView();                                                            // Scroll to div r2c1
       
       
       /*
        if (logic1 === 123) {                                                               // luc was picked, krom is in position 3
            yourDefend = krom;                                                              // assign krom stats to yourDefend 
        } else {                                                                            // luc is in position 3 in all other cases
            yourDefend = lucius;                                                            // assign luc stats to yourDefend 
        }
        */
    }

    $(".charImg1").on("click", function() {                                                 // If you click on Rick                              
        moveRick();                                                                         // Run the moveRick function
        var logic1 = 234;
    });

    $(".charImg2").on("click", function() {                                                 // If you click on Morty                                        
        moveMorty();                                                                        // Run the moveMorty function
        var logic1 = 134
    });

    $(".charImg3").on("click", function() {                                                 // If you click on krombopulos                                      
        moveKrom();                                                                         // Run the moveKrom function
        var logic1 = 124
    });
              
    $(".charImg4").on("click", function() {                                                 // If you click on Lucius                      
        moveLuc();                                                                          // Run the moveLuc function
        var logic1 = 123
    });



    $(".r3c1").on("click", function() {                                                     // If you click on position 1 (Enemies Available position)
        movePos1D();                                                                        // Move this character to the Defender position
    });

    $(".r3c2").on("click", function() {                                                     // If you click on position 2 (Enemies Available postion)
        movePos2D();                                                                        // Move this character to the Defender position
    });

    $(".r3c3").on("click", function() {                                                     // If you click on position 3 (Enemies Available position)
        movePos3D();                                                                        // Move this character to the Defender position
    });
















