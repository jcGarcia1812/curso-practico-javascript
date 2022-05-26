//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento (precio, discount) {
    const porcentajePrecioConDescuento = 100 - discount;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount () {

    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const discountValue = inputCoupon.value;
    
    const coupons = [
         "Martes_Frescura",
         "Bebe_Viernes",
         "Domingo_En_Familia",
    ];

if (coupons.includes(discountValue)) {

    let descuento;

    switch (discountValue) {
        case coupons[0]:
            descuento = 15;
        break;
        case coupons[1]:
            descuento = 25;
        break;
        case coupons[2]:
            descuento = 30;
        break;
    }
    const precioDescuento = calcularPrecioConDescuento (priceValue, descuento);

    const finalPrice = document.getElementById("finalPrice");

    finalPrice.innerText = ("Tu total a pagar es: $" + precioDescuento);
}
else {
    finalPrice.innerText = ("Tu cupón no es válido");
}
}
//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento,
//});