function calcularPrecioConDescuento (precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}
function respuestaConDescuento(){
    const inputPrecio = document.getElementById("InputPrice");
    const precio = inputPrecio.value;
    const inputDescuento = document.getElementById("InputDescuento");
    const descuento = inputDescuento.value;
    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
    const resultP = document.getElementById("ResultP"); 
    resultP.innerText = "El precio con descuento es de $" + precioConDescuento;
}
