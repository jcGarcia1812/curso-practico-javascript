//Código del cuadrado

console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado +"cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado +"cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrada +"cm^2");

console.groupEnd();

//Código del triángulo

console.group("Triangulo");

const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: " + 
    ladoTriangulo + "cm, " + 
    ladoTriangulo2 + "cm, " + 
    baseTriangulo + "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es: " + alturaTriangulo +"cm");

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo =  (baseTriangulo * alturaTriangulo)/2;
console.log("El area del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código del circulo

console.group("Circulo");

//Radio
const radioCirculo = 5;
console.log("El radio del circulo es: " + radioCirculo + "cm");
//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
//PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI);
//Circunferencia
const perimetroCirculo = PI * diametroCirculo;
console.log("El perimetro del circulo es: "+ perimetroCirculo + "cm");
//Area
const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log("El área del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();