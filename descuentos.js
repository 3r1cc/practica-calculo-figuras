function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

    return precioConDescuento;
}

function descontar(){
    const precio = document.getElementById("precio");
    const descuento = document.getElementById("descuento");
    const priceValue = precio.value;
    const discountValue = descuento.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const totalPrice = document.getElementById("totalPrice")
    totalPrice.innerText = "El  precio final es de " + precioConDescuento + "€";
}