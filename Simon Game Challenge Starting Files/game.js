var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClicked3= 0;
var userClickedPattern = [];
var level = 0;

function nextSequence(){
   let randomNumber = Math.floor(Math.random() * 4);

   randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);

   var button = $("#" + randomChosenColour);
   button.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); 
}

$("div[type='button']").on("click", function() {
    var buttonId = $(this).attr("id");
    var userChosenColour = buttonId;
    userClickedPattern.push(userChosenColour);    
    var audio = new Audio("sounds/" + buttonId + ".mp3");
    audio.play();
    animatePress(userChosenColour);    
    checkAnswer();
  });
  
  

  function animatePress(currentColourId){
    $("#" + currentColourId).addClass("pressed");
   // Remove the "pressed" class after 100 milliseconds
  setTimeout(function() {
    $("#" + currentColourId).removeClass("pressed");
  }, 100);
  }

  $(document).keypress(function (event){
    if(event.key === "a"){  
        nextSequence();         
        $('h1').html("Level " + level);
    }else{
        startOver();
        $('h1').html("Press A Key to Start");
    }    
  });

  function checkAnswer(){    
    var currentSelected = userClickedPattern.length;
    currentSelected--;
    console.log('userClickedPattern:' ,userClickedPattern[currentSelected]);
    console.log('gamePattern:', gamePattern[currentSelected]);
    if (userClickedPattern[currentSelected] === gamePattern[currentSelected]){
        console.log('success')        
        if (userClicked3==3)
        {
            level++;
            $('h1').html("Level " + level);
            userClicked3 = 0;             
        }  
        else
        {             
            userClicked3++;
        }   
        nextSequence();   
    }else{
        console.log('wrong');
        var audio = new Audio("sounds/wrong.mp3");
        $("body").addClass("game-over");
        $('h1').html("Game Over, Press Any Key to Restart");
        startOver();
        setTimeout(function() {
            $("body").removeClass("game-over");            
          }, 200);
        audio.play();
    }
   
  }
  function startOver(){
    gamePattern = [];
    userClicked3= 0;
    userClickedPattern = [];
    level = 0;
  }



  
