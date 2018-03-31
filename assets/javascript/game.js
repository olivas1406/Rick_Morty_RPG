

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
  
    var tracker2 = false;

    var countWin = 0;                               // Variable to determine how many opponents you've defeated

    
$(document).ready(function(){  

    function hpPush() {
    $(".HP1").html("HP: " + (rick.HP));         // Push Rick's HP to the HTML
    $(".HP2").html("HP: " + (morty.HP));        // Push Morty's HP to the HTML
    $(".HP3").html("HP: " + (krom.HP));         // Push Krombopulos' HP to the HTML
    $(".HP4").html("HP: " + (lucius.HP));       // Push Lucius' HP to the HTML
    };

    hpPush();

    $(".flasher2").hide();
    $(".attackButton").hide();

    console.log(move1);

    $(".pos11").on("click", function() {                                                 // click rick                          
        rick1();                                                                            // call the rick1 function to move rick into position 1
        
    });

    $(".pos12").on("click", function() {                                                 // click Morty                                        
        morty1();                                                                           // call the morty1 function to move morty into position 1
        
    });

    $(".pos13").on("click", function() {                                                 // click krombopulos                                      
        krom1();                                                                            // Run the krom1 function to move krom into position 1
        
    });
              
    $(".pos14").on("click", function() {                                                 // click Lucius                      
        luc1();                                                                             // Run the moveLuc function
        
    });

    function rick1() {
        if (tracker2 === true) {
            alert("One Enemy At A Time!");
        } else if (move1 === 0) { 
        move1 = 1234;                                                                       // set var move1 to 1234
        $(".flasher1").hide();
        $(".flasher2").show();
        $(".pos11").css({
            "background-color": "lightblue",
            "color": "white"
        });
        $(".chooseDefend").append($(".pos12, .pos13, .pos14"));
        $(".pos12, .pos13, .pos14").addClass("pos2").removeClass("pos1");
    
        console.log(move1);  
        
          yourChar = rick;                                                                    // Set var yourChar to Rick's stats
          tracker = true;                                                                     // Set var tracker to true (no opponent has been selected)
        } else if (move1 === 1234) {                                                        // Else if this is the second time Rick has been clicked
            alert("I'm Pickle Rick!!!");                                                    // Alert this
        } else if ((move1 === 2134) || (move1 === 3124) || (move1 === 4123)) {              // Else if someone else is in position 1, move Rick from
            tracker2 = true;
            $(".attackButton").show();
            $(".flasher2").hide();
            $(".defender").append($(".pos11"));
            $(".pos11").css({
                "background-color": "red",
                "color": "yellow",
                "border-color": "white"
            });
            }
            yourDefend = rick;                                                              // Set var yourDefend to  Rick's stats
            deleteMe = 1234                                                                 // Set Rick as the character to delete if defeated
            tracker = false;                                                                // An oppponent has been selected
        };
    

    function morty1() {
        if (tracker2 === true) {
            alert("One Enemy At A Time!");
        } else if (move1 === 0) { 
        move1 = 2134;                                                                       // set var move1 to 2134
        $(".flasher1").hide();
        $(".flasher2").show();
        $(".pos12").css({
            "background-color": "lightblue",
            "color": "white"
        });
        $(".chooseDefend").append($(".pos11, .pos13, .pos14"));
        $(".pos11, .pos13, .pos14").addClass("pos2").removeClass("pos1");

        console.log(move1);

        yourChar = morty;                                                                   // Set var yourChar to Morty's stats
 
        tracker = true;                                                                 // Set var tracker to true (no opponent has been selected)
        } else if (move1 === 2134) {                                                            // Else if this is the second time Morty has been clicked
            alert("Nobody exists on purpose, nobody belongs anywhere, we are all going to die..."); // Alert this
        } else if ((move1 === 1234) || (move1 === 3124) || (move1 === 4123)){               // Else if someone else is in position 1, move Morty from
            tracker2 = true;
            $(".attackButton").show();
            $(".flasher2").hide();
            $(".defender").append($(".pos12"));
            $(".pos12").css({
                "background-color": "red",
                "color": "yellow",
                "border-color": "white"
            });
        }
            yourDefend = morty;                                                             // Set var yourDefend to Morty's stats
            deleteMe = 2134                                                                 // Set Morty as the character to delete if defeated
            tracker = false;                                                                // An opponent has been selected
        };
    
    

    function krom1() {
        if (tracker2 === true) {
            alert("One Enemy At A Time!");
        } else if (move1 === 0) { 
        move1 = 3124;                                                                       // set var move1 to 3124
        $(".flasher1").hide();
        $(".flasher2").show();
        $(".pos13").css({
            "background-color": "lightblue",
            "color": "white"
        });
        $(".chooseDefend").append($(".pos11, .pos12, .pos14"));
        $(".pos11, .pos12, .pos14").addClass("pos2").removeClass("pos1");

        console.log(move1);

        move1 = 3124;                                                                       // Set var move1 to alert if Krombopulos is clicked again
        yourChar = krom;                                                                    // Set var yourChar to Krombopulos' stats
        tracker = true;                                                                     // Set var tracker to true (no opponent has been selected)
        } else if (move1 === 3124) {                                                        // Else if this is the second time Krombopulos has been clicked
            alert("Here I go killing again");                                               // Alert this
        } else if ((move1 === 1234) || (move1 === 2134) || (move1 === 4123)) {              // Else if someone else is in postion 1, move Krombopulos from
            tracker2 = true;
            $(".attackButton").show();
            $(".flasher2").hide();
            $(".defender").append($(".pos13"));
            $(".pos13").css({
                "background-color": "red",
                "color": "yellow",
                "border-color": "white"
            });
        }
            yourDefend = krom;                                                              // Set var yourDefend to Krombopulos' stats
            deleteMe = 3124;                                                                // Set Krombopulos as the character to delete if defeated
            tracker = false;                                                                // An opponent has been selected
        
    };
    
    
    

    function luc1() {
        if (tracker2 === true) {
            alert("One Enemy At A Time!");
        } else if (move1 === 0) { 
        move1 = 4123;                                                                       // set var move1 to 4123
        $(".flasher1").hide();
        $(".flasher2").show();
        $(".pos14").css({
            "background-color": "lightblue",
            "color": "white"
        });
        $(".chooseDefend").append($(".pos11, .pos12, .pos13"));
        $(".pos11, .pos12, .pos13").addClass("pos2").removeClass("pos1");

        console.log(move1);

        move1 = 4123;                                                                       // Set var move1 to alert if Lucius is clicked again
        yourChar = lucius;                                                                  // Set var yourChar to Lucius' stats
        tracker = true;                                                                     // Set var tracker to true (no opponent has been selected)
        } else if (move1 === 4123) {                                                        // Else if this is the second time Lucius has been clicked
            alert("I just want to go back to hell, where everyone thinks I'm smart and funny"); // Alert this
        } else if ((move1 === 1234) || (move1 === 2134) || (move1 === 3124)) {              // Else if someone else is in postion 1, move Lucius from 
            tracker2 = true;
            $(".attackButton").show();
            $(".flasher2").hide();
            $(".defender").append($(".pos14"));
            $(".pos14").css({
                "background-color": "red",
                "color": "yellow",
                "border-color": "white"
            });
        }
        yourDefend = lucius;                                                                // Set var yourDefend to Lucius' stats
        deleteMe = 4123;                                                                    // Set Lucius as the character to delete if defeated
        tracker = false;                                                                    // An opponent has been selected
    };
    
    $(".attackButton").on("click", function() {
        if ((tracker === true) || (deleteMe === 555)) {
            $("infoDiv").html(" Choose an opponent first - are you attacking yourself?!?");
        }
        else if (tracker === false) {
            yourDefend.HP = yourDefend.HP - yourChar.Attack       
            yourChar.HP = yourChar.HP - yourDefend.CounterAttack
            attackerFu();
            }
    });



    function attackerFu() {                                                                 // Function for what happens when you attack
        if (yourChar.HP <= 1) {                                                             // If your HP is less than 1, lose condition
            alert("You Suck - you have lost the game");                                     // Alert this
            location.reload();
            } else if (yourDefend.HP <= 1) {                                                // Else if your opponent's HP is less than 1, win condition
                        if (countWin === 2) {                                               // If var countWin is already at 2 (this is your 3rd win), you win the game
                            alert("YOU WIN");                                               // Alert this
                            location.reload();                                              // Reload the page
                        } else if (deleteMe === 555) {                                      // Else if var deleteMe has been set to 555, no opponent is active
                            $("infoDiv").html("Enemy Defeated - Choose Another Oppponent");       // Alert this
                        } else {                                                            // Else
                            tracker2 = false;
                            $("infoDiv").html("Enemy Defeated");                                  // Alert this
                            countWin++                                                      // Increment countWin by 1
                            yourChar.Attack = yourChar.Attack + yourChar.Attack;            // Increase your character's attack power by itself
                            hpPush();                                                     // Call the htmlPush function to update the HP in the HTML
                            seeWhoGo();                                                     // Call the seeWhoGo function to delete the defeated character
                        }
                    } else {                                                                // Else
                        $(".infoDiv").html("What's going down: You Attacked for " + yourChar.Attack + " damage, you were Counter Attacked for " + yourDefend.CounterAttack);
                        yourChar.Attack = yourChar.Attack + yourChar.Attack;                // Else do the math for the attack, increase your attack by itself
                        hpPush();                                                         // Call the htmlPush function to update the HP in the HTML
                    }
                }

        function seeWhoGo() {                                                               // Function to delete defeated characters
            if (deleteMe === 1234) {                                                        // If var deleteMe has Rick's code
                $(".pos11").remove();                                                        // Delete Rick
                deleteMe = 555;                                                             // Set deleteMe to 555 (no opponent selected)
            } else if (deleteMe === 2134) {                                                 // If var deleteMe has Morty's code
                $(".pos12").remove();                                                        // Delete Morty
                deleteMe = 555;                                                             // Set deleteMe to 555 (no opponent selected)
            } else if (deleteMe === 3124) {                                                 // If var deleteMe has Krombopulos' code
                $(".pos13").remove();                                                        // Delete Krombopulos
                deleteMe = 555;                                                             // Set deleteMe to 555 (no opponent selected)
            } else if (deleteMe === 4123) {                                                 // If var deleteMe has Lucius' code
                $(".pos14").remove();                                                        // Delete Lucius
               deleteMe = 555;                                                              // Set deleteMe to 555 (no opponent selected)
            }
        }

        $(".resetButton").on("click", function() {
            location.reload();
        })



});




