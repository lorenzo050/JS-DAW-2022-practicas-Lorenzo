window.addEventListener("keydown", function (event) {
  if (event.altKey && event.key === "F12") {
    //generar numero random para camibar la imagen
    var imagenAleatoriaURL = `https://source.unsplash.com/random?t=`+Math.random(100);
    document.getElementById("imagen").style.backgroundImage = `url("${imagenAleatoriaURL}")`;
  }
});
