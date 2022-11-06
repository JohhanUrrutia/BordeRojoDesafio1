var button = document.getElementById("buttonClick")
button.ishid
var image = document.querySelector(".imageClick")
let contadorClicks = 0

button.addEventListener("click", () => {
    contadorClicks += 1
    console.log (contadorClicks)

    if (contadorClicks == 1) {
        image.style.border = "2px solid red"
        console.log("me diste un click")
    }else if (contadorClicks > 1){
        contadorClicks = 0
        image.style.border = ""
        console.log("me diste dos o mas click")
    }
}) 



