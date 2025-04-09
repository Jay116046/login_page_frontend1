let card = document.querySelector(".card");
let btn = document.querySelector(".btn");

let display = "none";
// card.classList.add("card_animation");

btn.onclick = () => {
    if(display == "none"){
        display = "block";
        btn.style.display = "none";
        card.style.cssText = " animation: card_animation 3s linear 0s 1; display:inline-block;";
    }
    else{
        display = "none";
        card.style.display = display;
        btn.style.display = "block";
    }
}