const coupons = ["MICODIGO23","DESCUENTO2021","MAMA2022"];
function calcularPrecioConDescuento (precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}
function respuestaConDescuento(){
    const inputPrecio = document.getElementById("InputPrice");
    const precio = inputPrecio.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    let descuento;
    switch (couponValue) {
        case coupons[0]:
            descuento = 15;
        break;
        case coupons[1]:
            descuento = 30;
        break;
        case coupons[2]:
            descuento = 25;
        break;
    }
    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
    const resultP = document.getElementById("ResultP"); 
    resultP.innerText = "El precio con descuento es de $" + precioConDescuento;
}
