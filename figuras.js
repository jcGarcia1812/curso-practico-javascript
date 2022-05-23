//Código del cuadrado

console.group("Cuadrado");

function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrada (lado) {
    return lado * lado;
}

console.groupEnd();

//Código del triángulo

console.group("Triangulo");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
} 

function areaTriangulo (base, altura) {
    return (base * altura)/2;
}
function mediaBase (base) {
    return base/2;
}

console.groupEnd();

//Código del circulo

console.group("Circulo");

//Diametro
function diametroCirculo (radio) {
    return radio * 2;
}
//PI
const PI = Math.PI;
//Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//Area
function areaCirculo (radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

//Inteacción con HTML

    //Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro + "cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrada(value);
    alert(area + "cm^2");
}

    //Triángulo isóceles

function calcularAlturaTriangulo() {

        const inputA = document.getElementById("inputLadoA");
        const valueA = inputA.value;

        const inputB = document.getElementById("inputLadoB");
        const valueB = inputB.value;

        const inputBase = document.getElementById("inputBase");
        const valueBase = inputBase.value;

        if (valueA === valueB && valueA != valueBase)
    {
        const baseIso = mediaBase(valueBase);
        const altura = Math.sqrt((valueB * valueB)-(baseIso * baseIso));
        alert (altura + "cm");
    }
    else {
        alert("Error, las medidas de los lados deben ser iguales");
    }

}