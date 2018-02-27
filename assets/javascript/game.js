var rick = {                                                                        // Object with Rick's stats
HP: 500,
Attack: 120,
CounterAttack: 130,
};

var morty = {                                                                       // Object with Morty's stats
HP: 705,
Attack: 90,
CounterAttack: 100
};

var krom = {                                                                        // Object with Krombopulos' stats
HP: 900,
Attack: 100,
CounterAttack: 110
};

var lucius = {                                                                      // Object with Lucius' stats
HP: 1200,
Attack: 60,
CounterAttack: 80
};

var move1 = 0;

var move2 = true;

var yourChar = {};

var yourDefend = {};


$(document).ready(function(){

    $("#HP1").html("HP: " + (rick.HP));                                                 // Push Rick's HP to the HTML

    $("#HP2").html("HP: " + (morty.HP));                                                // Push Morty's HP to the HTML

    $("#HP3").html("HP: " + (krom.HP));                                                 // Push Krombopulos' HP to the HTML

    $("#HP4").html("HP: " + (lucius.HP));                                               // Push Lucius' HP to the HTML

    });

    
    
    function words() {
        $(".pos2").append('<h4>Your Character</h4>');  // create 'your character' in the HTML                   
        $(".pos3").append("<h4>Choose Your Opponent</h4>")  // create 'your opponent' in HTML                  
        $(".pos3").append("<h4>---------- Defender ------------------------</h4>")      // add 'defender' to HTML4
        $(".attack").append('<img src="./assets/images/button.png">');   //create 'attack' button in HTML
    }

    function rick1() {
        if (move1 === 0) {                      // if first time rick is clicked
        $(".r1c1").animate({top: "+=125px"}, .1);         // move rick to pos1
        $(".r1c2, .r1c3, .r1c4").animate({top: "+=315px"}, .1); // move everyone else to pos2
        $(".r1c2").animate({right: "+=135px"}, .1);             
        $(".r1c3").animate({right: "+=138px"}, .1);            
        $(".r1c4").animate({right: "+=140px"}, .1);             
        $(".chooseYou").remove();                               // remove 'choose your character' from HTML
        move1 = 1234;                           // set var move1 to alert if rick is clicked again
        yourChar = rick;                                // var yourChar to rick stats
        words();
        
        } else if (move1 === 1234) {            // else if second time rick is clicked
            alert("I'm Pickle Rick!!!");        // you click rick again after selecting him for your character
        } else if ((move1 === 2134) || (move1 === 3124) || (move1 === 4123)) { // else if someone else is in pos1, move rick pos2 to pos3 (defender)
            $(".r1c1").animate({top: "+=240px"}, .1);   // move rick to position 3
            yourDefend = rick;              // set var yourDefend to rick stats
            
        }  
    };

    function morty1() {                     
        if (move1 === 0) {                          // if first time morty clicked
        $(".r1c2").animate({top: "+=125px"}, .1);          // move morty to pos1
        $(".r1c1, .r1c3, .r1c4").animate({top: "+=315px"}, .1); // move everyone else to pos2
        $(".r1c2").animate({right: "+=135px"}, .1);     
        $(".r1c3").animate({right: "+=138px"}, .1);
        $(".r1c4").animate({right: "+=140px"}, .1);
        $(".chooseYou").remove();           // remove 'choose your character' from HTML
        move1 = 2134;               // set var move1 to alert if morty is clicked again
        yourChar = morty;                   // var yourChar to morty stats
        words();
        } else if (move1 === 2134) {                    // else if second time morty clicked
            alert("Nobody exists on purpose, nobody belongs anywhere, we are all going to die...");
        } else if ((move1 === 1234) || (move1 === 3124) || (move1 === 4123)){  //else if someone else is in pos1, move morty pos2 to pos3(defender)
            $(".r1c2").animate({top: "+=240px"}, .1);   // move morty to position 3
            yourDefend = morty;                         // set var yourDefend to morty stats
        }
    };

    function krom1() {
        if (move1 === 0) {
        $(".r1c3").animate({top: "+=125px"}, .1);           // move krom to pos1
        $(".r1c1, .r1c2, .r1c4").animate({top: "+=315px"}, .1);
        $(".r1c2").animate({right: "+=2px"}, .1);
        $(".r1c3").animate({right: "+=270px"}, .1);
        $(".r1c4").animate({right: "+=140px"}, .1);
        $(".chooseYou").remove();
        move1 = 3124;
        yourChar = krom
        words();
        } else if (move1 === 3124) {
            alert("Here I go killing again");
        } else if ((move1 === 1234) || (move1 === 2134) || (move1 === 4123)) {
            $(".r1c3").animate({top: "+=240px"}, .1);
            yourDefend = krom;
        }
    };

    function luc1() {
        if (move1 === 0) {
        $(".r1c4").animate({top: "+=125px"}, .1);           // move luc to pos1
        $(".r1c1, .r1c2, .r1c3").animate({top: "+=315px"}, .1);
        $(".r1c4").animate({right: "+=405px"}, .1);
        $(".chooseYou").remove();
        move1 = 4123;
        yourChar = lucius;
        words();
        } else if (move1 === 4123) {
            alert("I just want to go back to hell, where everyone thinks I'm smart and funny");
        } else if ((move1 === 1234) || (move1 === 2134) || (move1 === 3124)) {
        $(".r1c4").animate({top: "+=240px"}, .1);
        yourDefend = lucius;
        }
    };

    $(".resetB").append('<img src="./assets/images/reset.png" class="reset">');   //create 'attack' button in HTML     
    $(".reset").on("click", function() {
        location.reload();
        })

    $(".charImg1").on("click", function() {                                                  // click rick                          
        rick1();                                                                            // call the rick1 function to move rick into position 1
        move1 = 1234;                                                                        // set var move1 to 1234
    });

    $(".charImg2").on("click", function() {                                                 // click Morty                                        
        morty1();                                                                       // call the morty1 function to move morty into position 1
        move1 = 2134;                                                                      // set var move1 to 2134
    });

    $(".charImg3").on("click", function() {                                                 // click krombopulos                                      
        krom1();                                                                         // Run the krom1 function to move krom into position 1
        move1 = 3124;                                                                        // set var move1 to 3124
    });
              
    $(".charImg4").on("click", function() {                                                 // click Lucius                      
        luc1();                                                                          // Run the moveLuc function
        move1 = 4123;                                                                       // set var move1 to 4123
    });

    $(".attack").on("click", function() {

        yourDefend.HP = yourDefend.HP - yourChar.Attack       //make function
        yourChar.HP = yourChar.HP - yourDefend.CounterAttack
        if (yourChar.HP < 1) {
            alert("You Suck - you have lost the game");
            
            } else if (yourDefend.HP < 1) {
                $("P").html("Enemy Defeated");
            } else {
        $("P").html("You Attacked for " + yourChar.Attack + " damage, you were Counter Attacked for " + yourDefend.CounterAttack);
        $("#HP1").html("HP: " + (rick.HP));                                        
        $("#HP2").html("HP: " + (morty.HP));                            
        $("#HP3").html("HP: " + (krom.HP));                
        $("#HP4").html("HP: " + (lucius.HP));
         
        }
    });

        //alert("you clicked the button");
       //location.reload();
    

 











