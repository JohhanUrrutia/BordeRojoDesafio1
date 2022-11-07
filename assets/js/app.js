var image = document.querySelector(".imageClick");
let contadorClicks = 0

image.addEventListener("click", () => {
    contadorClicks += 1
    console.log (contadorClicks)

    if (contadorClicks == 1) {
        image.style.border = "2px solid red"
    }else if (contadorClicks > 1){
        contadorClicks = 0
        image.style.border = ""
    }
}) 



