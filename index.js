for (var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        new Audio(PathBetter(this.innerHTML)).play();
        buttonanimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event){
    new Audio(PathBetter(event.key)).play();
    buttonanimation(event.key);
});

function buttonanimation(e){
    document.querySelector("."+e).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+e).classList.remove("pressed");
    }, 0.5);
}



function PathBetter(e){
    switch (e) {
        case 'w':
            return "sounds/crash.mp3";
            break;
        case 'a':
            return "sounds/kick-bass.mp3";
            break;
        case 's':
            return "sounds/snare.mp3";
            break;
        case 'd':
            return "sounds/tom-1.mp3";
            break;
        case 'j':
            return "sounds/tom-2.mp3";
            break;
        case 'k':
            return "sounds/tom-3.mp3";
            break;
        case 'l':
            return "sounds/tom-4.mp3";
            break;
        default:
            break;
    }
}
