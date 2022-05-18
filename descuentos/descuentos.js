function calcularPrecioConDescuento (precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}
function respuestaConDescuento(){
    const inputPrecio = document.getElementById("inputPrice");
    const precio = inputPrecio.value;
    debugger;
    const inputDescuento = document.getElementById("inputDescuento");
    const descuento = inputDescuento.value;
    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
    const resultP = document.getElementById("ResultP"); 
    resultP.innerText = "El precio con descuento es de $" + precioConDescuento;
    console.log(resultP);
}