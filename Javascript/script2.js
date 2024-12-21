function cambiarColor() {
    const colores = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A8"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}
