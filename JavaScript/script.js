let imagenUwU = document.getElementById("imagen");
let aleatorio = document.getElementById("botoncito");

aleatorio.addEventListener("click", e => {
    let val = Math.round(Math.random() * 1000);
    val = val % 10 + 1;
    console.log(val);
    imagenUwU.src = "MEDIA/imagen" + val + ".jpg";
})