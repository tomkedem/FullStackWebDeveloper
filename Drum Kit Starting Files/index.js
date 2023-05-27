
var count = document.querySelectorAll(".drum").length;
for(var i = 0; i < count; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {    
        getKeyAndPlay(this.innerHTML); 
        
        buttonAnimation(this.innerHTML);
    });
}
function getKeyAndPlay(keePress){
    switch  (keePress){
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            break;   
        default:
            console.log(keePressddddd);
    }
    audio.play();
}
document.addEventListener("keypress", (event) => {
    getKeyAndPlay(event.key);  
    buttonAnimation(event.key);  
});

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed")
      }, 100);
}