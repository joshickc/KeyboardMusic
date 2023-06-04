for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {

    document.querySelectorAll(".drum")[index].addEventListener("click", function (){
            
            
            var letter= this.innerHTML;
            makesound(letter);
            buttonAnimation(letter);
            
    }); 
}
document.addEventListener("keydown", function (event) {
    
    makesound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(key) {
   var button= document.querySelector("."+key);
   button.classList.toggle("pressed");
   setTimeout(() => {
    button.classList.remove("pressed");
   }, 100);
}
function makesound(key) {
    switch (key) {
        case "w":
            var audio = new Audio ("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;            
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        default:
            console.log(letter);
            break;
    }
}