var rick = {                                    // Object with Rick's stats
HP: 120,
Attack: 8,
CounterAttack: 10
};

var morty = {                                   // Object with Morty's stats
HP: 100,
Attack: 11,
CounterAttack: 5
};

var krom = {                                    // Object with Krombopulos' stats
HP: 150,
Attack: 8,
CounterAttack: 20
};

var lucius = {                                  // Object with Lucius' stats
HP: 180,
Attack: 9,
CounterAttack: 25
};

var move1 = 0;                                  // Variable to identify which character was moved

var yourChar = {};                              // Object to hold Your Character's stats

var yourDefend = {};                            // Object to hold the current Defender's stats

var deleteMe = 0;                               // Variable to identify which character to delete after they have been defeated

var tracker = false;                            // Variable to determine if a Defender has been selected

var countWin = 0;                               // Variable to determine how many opponents you've defeated

$(document).ready(function(){                   // Function to populate the HTML with the character's HP

    $("#HP1").html("HP: " + (rick.HP));         // Push Rick's HP to the HTML

    $("#HP2").html("HP: " + (morty.HP));        // Push Morty's HP to the HTML

    $("#HP3").html("HP: " + (krom.HP));         // Push Krombopulos' HP to the HTML

    $("#HP4").html("HP: " + (lucius.HP));       // Push Lucius' HP to the HTML

    });

    function words() {                                                                      // Function to create words in the HTML
        $(".resetB").append('<h4>Your Character</h4>');                                     // Create 'Your Character' in the HTML                   
        $(".pos3").append("<h4>Choose Your Opponent</h4>")                                  // Create 'Your Opponent' in HTML                  
        $(".pos3").append("<h4>---------- Defender ------------------------</h4>")          // Create 'Defender' in the HTML
        $(".attack").append('<img src="./assets/images/button.png">');                      // Create 'attack' button in HTML
    }

    function rick1() {                                                                      // Move Rick function
        if (move1 === 0) {                                                                  // If this is the first time Rick has been clicked
        $(".r1c1").animate({top: "+=15px"}, .1);                                            // Move rick to position 1
        $(".r1c2, .r1c3, .r1c4").animate({top: "+=185px"}, .1);                             // Move everyone else to position 2
        $(".r1c2").animate({right: "+=135px"}, .1);                                                
        $(".r1c3").animate({right: "+=138px"}, .1);                                                 
        $(".r1c4").animate({right: "+=140px"}, .1);                                                
        $(".chooseYou").remove();                                                           // Remove 'choose your character' from HTML
        move1 = 1234;                                                                       // Set var move1 to alert if rick is clicked again
        yourChar = rick;                                                                    // Set var yourChar to Rick's stats
        words();                                                                            // Call the 'words' function
        tracker = true;                                                                     // Set var tracker to true (no opponent has been selected)
        } else if (move1 === 1234) {                                                        // Else if this is the second time Rick has been clicked
            alert("I'm Pickle Rick!!!");                                                    // Alert this
        } else if ((move1 === 2134) || (move1 === 3124) || (move1 === 4123)) {              // Else if someone else is in position 1, move Rick from
                                                                                            // position 2 to position 3 (defender)
            $(".r1c1").animate({top: "+=240px"}, .1);                                       // Move Rick to position 3
            $(".r1c1").css({                                                                // Change Rick's CSS properties
                "border" : "red solid 2px",                                                         // Border to red
                "background" : "yellow"                                                             // Background to yellow
            })
            yourDefend = rick;                                                              // Set var yourDefend to  Rick's stats
            deleteMe = 1234                                                                 // Set Rick as the character to delete if defeated
            tracker = false;                                                                // An oppponent has been selected
        }  
    };

    function morty1() {                                                                     // Move Morty function
        if (move1 === 0) {                                                                  // If this is the first time Morty has been clicked
        $(".r1c2").animate({top: "+=15px"}, .1);                                            // Move Morty to position 1
        $(".r1c1, .r1c3, .r1c4").animate({top: "+=185px"}, .1);                             // Move everyone else to position 2
        $(".r1c2").animate({right: "+=135px"}, .1);                                                     
        $(".r1c3").animate({right: "+=138px"}, .1);
        $(".r1c4").animate({right: "+=140px"}, .1);
        $(".chooseYou").remove();                                                           // Remove 'choose your character' from HTML
        move1 = 2134;                                                                       // Set var move1 to alert if Morty is clicked again
        yourChar = morty;                                                                   // Set var yourChar to Morty's stats
        words();                                                                            // Call the 'words' function
            tracker = true;                                                                 // Set var tracker to true (no opponent has been selected)
    } else if (move1 === 2134) {                                                            // Else if this is the second time Morty has been clicked
            alert("Nobody exists on purpose, nobody belongs anywhere, we are all going to die..."); // Alert this
        } else if ((move1 === 1234) || (move1 === 3124) || (move1 === 4123)){               // Else if someone else is in position 1, move Morty from
                                                                                            // position 2 to positon 3 (defender)
            $(".r1c2").animate({top: "+=240px"}, .1);                                       // move morty to position 3
            $(".r1c2").css({                                                                // Change Morty's CSS properties
                "border" : "red solid 2px",                                                         // Border to red
                "background" : "yellow"                                                             // Background to yellow
            })
            yourDefend = morty;                                                             // Set var yourDefend to Morty's stats
            deleteMe = 2134                                                                 // Set Morty as the character to delete if defeated
            tracker = false;                                                                // An opponent has been selected
        }
    };

    function krom1() {                                                                      // Function to move Krombopulos
        if (move1 === 0) {                                                                  // If this is the first time Krombopulos has been clicked
        $(".r1c3").animate({top: "+=15px"}, .1);                                            // Move Krombopulos to postion 1
        $(".r1c1, .r1c2, .r1c4").animate({top: "+=185px"}, .1);                             // Move everyone else to postion 2
        $(".r1c2").animate({right: "+=2px"}, .1);
        $(".r1c3").animate({right: "+=270px"}, .1);
        $(".r1c4").animate({right: "+=140px"}, .1);
        $(".chooseYou").remove();                                                           // Remove 'Choose your character' from the HTML
        move1 = 3124;                                                                       // Set var move1 to alert if Krombopulos is clicked again
        yourChar = krom;                                                                    // Set var yourChar to Krombopulos' stats
        words();                                                                            // Call the 'words' function
        tracker = true;                                                                     // Set var tracker to true (no opponent has been selected)
        } else if (move1 === 3124) {                                                        // Else if this is the second time Krombopulos has been clicked
            alert("Here I go killing again");                                               // Alert this
        } else if ((move1 === 1234) || (move1 === 2134) || (move1 === 4123)) {              // Else if someone else is in postion 1, move Krombopulos from
                                                                                            // position 2 to position 3 (defender)
            $(".r1c3").animate({top: "+=240px"}, .1);                                       // Move Krombopulos to position 3
            $(".r1c3").css({                                                                // Change Krombopulos' CSS properties
                "border" : "red solid 2px",                                                             // Border to red
                "background" : "yellow"                                                                 // Background to yellow
            })
            yourDefend = krom;                                                              // Set var yourDefend to Krombopulos' stats
            deleteMe = 3124;                                                                // Set Krombopulos as the character to delete if defeated
            tracker = false;                                                                // An opponent has been selected
        }
    };

    function luc1() {                                                                       // Function to move Lucius
        if (move1 === 0) {                                                                  // If this is the first time Lucius has been clicked
        $(".r1c4").animate({top: "+=15px"}, .1);                                            // Move Lucius to postion 1          
        $(".r1c1, .r1c2, .r1c3").animate({top: "+=185px"}, .1);                             // Move everyone else to position 2
        $(".r1c4").animate({right: "+=405px"}, .1); 
        $(".chooseYou").remove();                                                           // Remove 'Choose your character' from the HTML
        move1 = 4123;                                                                       // Set var move1 to alert if Lucius is clicked again
        yourChar = lucius;                                                                  // Set var yourChar to Lucius' stats
        words();                                                                            // Call the 'words' function
        tracker = true;                                                                     // Set var tracker to true (no opponent has been selected)
        } else if (move1 === 4123) {                                                        // Else if this is the second time Lucius has been clicked
            alert("I just want to go back to hell, where everyone thinks I'm smart and funny"); // Alert this
        } else if ((move1 === 1234) || (move1 === 2134) || (move1 === 3124)) {              // Else if someone else is in postion 1, move Lucius from 
                                                                                            // postion 2 to position 3 (defender)
        $(".r1c4").animate({top: "+=240px"}, .1);                                           // Move Lucius to position 3
        $(".r1c4").css({                                                                    // Change Lucius' CSS properties
            "border" : "red solid 2px",                                                                 // Border to red
            "background" : "yellow"                                                                     // Background to yellow
        })  
        yourDefend = lucius;                                                                // Set var yourDefend to Lucius' stats
        deleteMe = 4123;                                                                    // Set Lucius as the character to delete if defeated
        tracker = false;                                                                    // An opponent has been selected
        }
    };

    function htmlPush() {                                                                   // Function to push character HP to the HTML
        $("#HP1").html("HP: " + (rick.HP));                                                 // Push Rick's HP              
        $("#HP2").html("HP: " + (morty.HP));                                                // Push Morty's HP 
        $("#HP3").html("HP: " + (krom.HP));                                                 // Push Krombopulos' HP
        $("#HP4").html("HP: " + (lucius.HP));                                               // Push Lucius' HP
    }   

    function attackerFu() {                                                                 // Function for what happens when you attack
        if (yourChar.HP <= 1) {                                                             // If your HP is less than 1, lose condition
            alert("You Suck - you have lost the game");                                     // Alert this
            } else if (yourDefend.HP <= 1) {                                                // Else if your opponent's HP is less than 1, win condition
                        if (countWin === 2) {                                               // If var countWin is already at 2 (this is your 3rd win), you win the game
                            alert("YOU WIN");                                               // Alert this
                            location.reload();                                              // Reload the page
                        } else if (deleteMe === 555) {                                      // Else if var deleteMe has been set to 555, no opponent is active
                            $("p").html("Enemy Defeated - Choose Another Oppponent");       // Alert this
                        } else {                                                            // Else
                            $("p").html("Enemy Defeated");                                  // Alert this
                            countWin++                                                      // Increment countWin by 1
                            yourChar.Attack = yourChar.Attack + yourChar.Attack;            // Increase your character's attack power by itself
                            htmlPush();                                                     // Call the htmlPush function to update the HP in the HTML
                            seeWhoGo();                                                     // Call the seeWhoGo function to delete the defeated character
                        }
                    } else {                                                                // Else
                        $("P").html("What's going down: You Attacked for " + yourChar.Attack + " damage, you were Counter Attacked for " + yourDefend.CounterAttack);
                        yourChar.Attack = yourChar.Attack + yourChar.Attack;                // Else do the math for the attack, increase your attack by itself
                        htmlPush();                                                         // Call the htmlPush function to update the HP in the HTML
                    }
                }

        function seeWhoGo() {                                                               // Function to delete defeated characters
            if (deleteMe === 1234) {                                                        // If var deleteMe has Rick's code
                $(".r1c1").remove();                                                        // Delete Rick
                $(".r1c2").animate({left: "+=180px"}, .1);                                  // Move the other characters to compensate
                $(".r1c3").animate({left: "+=180px"}, .1);
                $(".r1c4").animate({left: "+=180px"}, .1);
                deleteMe = 555;                                                             // Set deleteMe to 555 (no opponent selected)
            } else if (deleteMe === 2134) {                                                 // If var deleteMe has Morty's code
                $(".r1c2").remove();                                                        // Delete Morty
                $(".r1c3").animate({left: "+=135px"}, .1);                                  // Move the other characters to compensate
                $(".r1c4").animate({left: "+=135px"}, .1);
                deleteMe = 555;                                                             // Set deleteMe to 555 (no opponent selected)
            } else if (deleteMe === 3124) {                                                 // If var deleteMe has Krombopulos' code
                $(".r1c3").remove();                                                        // Delete Krombopulos
                $(".r1c4").animate({left: "+=135px"}, .1);                                  // Move the other characters to compensate
                deleteMe = 555;                                                             // Set deleteMe to 555 (no opponent selected)
            } else if (deleteMe === 4123) {                                                 // If var deleteMe has Lucius' code
                $(".r1c4").remove();                                                        // Delete Lucius
               deleteMe = 555;                                                              // Set deleteMe to 555 (no opponent selected)
            }
        }

    $(".resetB").append('<img src="./assets/images/reset.png" class="reset">');             //create 'reset' button in HTML     
    $(".reset").on("click", function() {
        location.reload();
    })

    $(".charImg1").on("click", function() {                                                 // click rick                          
        rick1();                                                                            // call the rick1 function to move rick into position 1
        move1 = 1234;                                                                       // set var move1 to 1234
    });

    $(".charImg2").on("click", function() {                                                 // click Morty                                        
        morty1();                                                                           // call the morty1 function to move morty into position 1
        move1 = 2134;                                                                       // set var move1 to 2134
    });

    $(".charImg3").on("click", function() {                                                 // click krombopulos                                      
        krom1();                                                                            // Run the krom1 function to move krom into position 1
        move1 = 3124;                                                                       // set var move1 to 3124
    });
              
    $(".charImg4").on("click", function() {                                                 // click Lucius                      
        luc1();                                                                             // Run the moveLuc function
        move1 = 4123;                                                                       // set var move1 to 4123
    });

    $(".attack").on("click", function() {
        if ((tracker === true) || (deleteMe === 555)) {
            $("p").html(" Choose an opponent first - are you attacking yourself?!?");
        }
        else if (tracker === false) {
            yourDefend.HP = yourDefend.HP - yourChar.Attack       //make function
            yourChar.HP = yourChar.HP - yourDefend.CounterAttack
            attackerFu();
            }
    });



 











