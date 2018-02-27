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

var move1 = 0;

$(document).ready(function(){
   
    $("#HP1").html("HP: " + (rick.HP));                                                 // Push Rick's HP to the HTML

    $("#HP2").html("HP: " + (morty.HP));                                                // Push Morty's HP to the HTML

    $("#HP3").html("HP: " + (krom.HP));                                                 // Push Krombopulos' HP to the HTML

    $("#HP4").html("HP: " + (lucius.HP));                                               // Push Lucius' HP to the HTML

    });

    function rick1() {
        if (move1 === 0) {                      // if first time rick is clicked
        $(".r1c1").animate({top: "+=185px"}, .1);         // move rick to pos1
        $(".r1c2, .r1c3, .r1c4").animate({top: "+=400px"}, .1); // move everyone else to pos2
        $(".r1c2").animate({right: "+=135px"}, .1);
        $(".r1c3").animate({right: "+=138px"}, .1);
        $(".r1c4").animate({right: "+=140px"}, .1);
        $(".chooseYou").remove();
        move1 = 1234;                           // set move 1 to alert if rick is clicked again
            
        } else if (move1 === 1234) {            // else if second time rick is clicked
            alert("I'm Pickle Rick!!!");
            move1 = 1111;
        } else if ((move1 === 2134) || (move1 === 3124) || (move1 === 4123)) { // else if someone else is in pos1, move rick to pos3
            $(".r1c1").animate({top: "+=200px"}, .1);   
        } 
    };

    function morty1() {
        if (move1 === 0) { 
        $(".r1c2").animate({top: "+=185px"}, .1);          // move morty to pos1
        $(".r1c1, .r1c3, .r1c4").animate({top: "+=400px"}, .1);
        $(".r1c2").animate({right: "+=135px"}, .1);
        $(".r1c3").animate({right: "+=138px"}, .1);
        $(".r1c4").animate({right: "+=140px"}, .1);
        $(".chooseYou").remove();
        move1 = 2134;
        } else if (move1 === 2134) {
            alert("Nobody exists on purpose, nobody belongs anywhere, we are all going to die...");
        } else if ((move1 === 1234) || (move1 === 3124) || (move1 === 4123)){
            $(".r1c2").animate({top: "+=200px"}, .1);
            
        }
    };

    function krom1() {
        if (move1 === 0) {
        $(".r1c3").animate({top: "+=185px"}, .1);           // move krom to pos1
        $(".r1c1, .r1c2, .r1c4").animate({top: "+=400px"}, .1);
        $(".r1c2").animate({right: "+=2px"}, .1);
        $(".r1c3").animate({right: "+=270px"}, .1);
        $(".r1c4").animate({right: "+=140px"}, .1);
        $(".chooseYou").remove();
        move1 = 3124;
        } else if (move1 === 3124) {
            alert("Here I go killing again");
        } else if ((move1 === 1234) || (move1 === 2134) || (move1 === 4123))
            $(".r1c3").animate({top: "+=200px"}, .1);
    };

    function luc1() {
        if (move1 === 0) {
        $(".r1c4").animate({top: "+=185px"}, .1);           // move luc to pos1
        $(".r1c1, .r1c2, .r1c3").animate({top: "+=400px"}, .1);
        $(".r1c4").animate({right: "+=405px"}, .1);
        $(".chooseYou").remove();
        move1 = 4123;
        } else if (move1 === 4123) {
            alert("I just want to go back to hell, where everyone thinks I'm smart and funny");
        } else if ((move1 === 1234) || (move1 === 2134) || (move1 === 3124))
        $(".r1c4").animate({top: "+=200px"}, .1);
    };



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

/*

    $(".r3c1").on("click", function() {                                                     // If you click on position 1 (Enemies Available position)
        movePos1D();                                                                        // Move this character to the Defender position
    });

    $(".r3c2").on("click", function() {                                                     // If you click on position 2 (Enemies Available postion)
        movePos2D();                                                                        // Move this character to the Defender position
    });

    $(".r3c3").on("click", function() {                                                     // If you click on position 3 (Enemies Available position)
        movePos3D();                                                                        // Move this character to the Defender position
    });


*/














