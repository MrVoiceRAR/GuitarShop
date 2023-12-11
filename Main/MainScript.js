document.addEventListener("DOMContentLoaded", function() {
    let animatedGif = document.getElementById("string1");

    function changeToActive(){
        animatedGif.src = "../Imgs/StringGif.gif";     
    };

    function changeToIdle(){
        animatedGif.src = "../Imgs/IdleStingGif.gif";
    }

    animatedGif.addEventListener("mouseover", changeToActive);
    animatedGif.addEventListener("mouseout", changeToIdle);
});
