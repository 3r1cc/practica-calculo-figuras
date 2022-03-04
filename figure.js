// console.group("Con Variables")
// //Cuadrado
// console.group("Cuadrado")

// const ladoCuadrado = 5;
// const perimetroCuadrado = ladoCuadrado * 4;
// const areaCuadrado = ladoCuadrado * ladoCuadrado;

// console.log("El perímetro del cuadrado es " + perimetroCuadrado + " cm")
// console.log("El área del cuadrado es " + areaCuadrado + " cm^2");

// console.groupEnd()

// //Triangulo
// console.group("Triángulo")

// const base = 9;
// const catetoA = 6;
// const catetoB = 5;
// const perimetroTriangulo = base + catetoA + catetoB;
// const altura = 5.5;
// const areaTriangulo = (base * altura) / 2;

// console.log("El perímetro del triángulo es de " + perimetroTriangulo + " cm")
// console.log("El area del triangulo es de " + areaTriangulo + " cm^2")

// console.groupEnd()

// //Círculo
// console.group("Círculo")

// const radio = 5;
// const diametro = 10;
// const perimetro = diametro + Math.PI;
// const area = (radio * radio) * Math.PI;

// console.log("El perímetro del círculo es de " + perimetro + " cm")
// console.log("El area del círculo es de " + area + " cm^2")

// console.groupEnd()

// //PI
// console.group("PI")

// const PI = Math.PI;

// console.log(PI);

// console.groupEnd()

// console.groupEnd()



// // Con Funciones
// console.group("Con Funciones")

// //Cuadrado
// console.group("Cuadrado")

// function perimetroCuadrado(lado){
//     return lado * 4;
// }

// function areaCuadrado(lado){
//     return lado * lado;
// }

// console.groupEnd()

// //Triángulo
// console.group("Triángulo")

// function perimetroTriangulo(catetoA, catetoB, base){
//     return catetoA + catetoB + base;
// }

// function areaTriangulo(base, altura){
//     return (base * altura) / 2;
// }

// console.groupEnd()

// //Círculo
// console.group("Círculo")

// function perimetroCirculo(diametro){
//     return diametro * Math.PI;
// }

// function areaCirculo(diametro){
//     const radio = diametro / 2
//     return (radio * radio) * Math.PI;
// }

// console.groupEnd()

// console.groupEnd()

//Interactuando

//Cuadrado

const inputCuadrado = document.getElementById("inputLado");

function calcularPerimetroCuadrado(){
    const value = inputCuadrado.value
    const perimetrocuadrado = value * 4
    console.log("El perímetro del cuadrado es de " + perimetrocuadrado + " cm");
}

function calcularAreaCuadrado(){
    const value = inputCuadrado.value
    const areacuadrado = value * value
    console.log("El area del cuadrado es de " + areacuadrado + " cm2"); 
    
}

//Triángulo

const inputcateto1 = document.getElementById("inputCateto1")
const inputcateto2 = document.getElementById("inputCateto2")
const inputbase = document.getElementById("inputBase")

function calcularPerimetroTriangulo(){
    const cateto1 = inputcateto1.value

    const cateto2 = inputcateto2.value

    const base = inputbase.value

    const perimetroTriangulo = parseInt(cateto1) + parseInt(cateto2) + parseInt(base)
    console.log("El perímetro del triángulo es de " + perimetroTriangulo + " cm");
}

function calcularAreaTriangulo(){
    const cateto1 = inputcateto1.value

    const cateto2 = inputcateto2.value

    const base = inputbase.value

    const base2 = base / 2
    const altura = Math.sqrt((cateto1 * cateto1) - (base2 * base2))
    const areaTriangulo = base * altura
    console.log("El area del triángulo es de " + areaTriangulo + " cm2")

}

//Círculo

function calcularPerimetroCirculo(){
    const inputradio = document.getElementById("inputRadio")
    const radio = inputradio.value
    const diametro = radio * 2
    const perimetro = diametro * Math.PI
    console.log("El perímetro del círculo es de " + perimetro + "cm")
}

function calcularAreaCirculo(){
    const inputradio = document.getElementById("inputRadio")
    const radio = inputradio.value
    const area = Math.PI * (radio * radio)
    console.log("El area del círculo es de " + area + " cm2")
}