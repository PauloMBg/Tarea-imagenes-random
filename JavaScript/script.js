let imgContainer = document.querySelector(".imgContainer");

imgContainer.addEventListener("click", () => {
    let val = Math.round(Math.random() * 1000);
    val = val % 10 + 1;
    console.log(val)
    imagen.src = `MEDIA/imagen${val}.jpg`;
})
