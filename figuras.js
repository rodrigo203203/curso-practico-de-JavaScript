// Codigo del cuadrado

function perimetroCuadrado(lado) {
  perimetro = lado * 4;
  return "El perimetro del cuadrado es de: " + perimetro + "cm";
}
function areaCuadrado(lado) {
  area = lado * lado;
  return "El área del cuadrado es de: " + area + "cm^2";
}

// Codigo del triangulo

function perimetroTriangulo(lado1, lado2, base) {
  perimetro = lado1 + lado2 + base;
  return "El perimetro del triangulo es de: " + perimetro + "cm";
}
function areaTriangulo(base, altura) {
  area = (base * altura) / 2;
  return "El área del triangulo es de: " + area + "cm^2";
}

// Codigo del Circulo

function perimetroCirculo(radio) {
  perimetro = radio * 2 * Math.PI;
  return "El perimetro del Circulo es de: " + perimetro + "cm";
}
function areaCirculo(radio) {
  area = radio * radio * Math.PI;
  return "El área del Circulo es de: " + area + "cm^2";
}

//Aqui html
function CalcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function CalcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}
