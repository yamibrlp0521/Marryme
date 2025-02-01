function aceptarPropuesta() {
    document.getElementById('mensaje').style.display = 'block';
}

function moverBoton() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    document.getElementById('noButton').style.position = "absolute";
    document.getElementById('noButton').style.left = x + "px";
    document.getElementById('noButton').style.top = y + "px";
}

