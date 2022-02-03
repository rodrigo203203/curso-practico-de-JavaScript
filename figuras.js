// Codigo del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();
// Codigo del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(
  "Los lados del triangulo son: " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm, " +
    baseTriangulo +
    "cm"
);
console.log("La altura del Triangulo es de: " + alturaTriangulo + "cm");
console.log("El perimetro del Triangulo es de: " + perimetroTriangulo + "cm");
console.log("El área del Triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Codigo del Circulo
console.group("Circulo");
const radio = 4;
const diametro = radio * 2;
const Pi = Math.PI;

const perimetroCirculo = diametro * Pi;
const areaCirculo = radio * radio * Pi;

console.log("El radio del Circulo es de: " + radio + "cm");
console.log("El diametro del Circulo es de: " + diametro + "cm");
console.log("El perimetro del Circulo es de: " + perimetroCirculo + "cm");
console.log("El área del Circulo es de: " + areaCirculo + "cm^2");
console.groupEnd();
