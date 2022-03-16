//Helpers
function esPar(numerito){
    return (numerito % 2 === 0)
}

function calcularMediaAritmetica(lista){
    // let sumaLista = 0

    // for (let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}



//Mediana General
const salariosCol = barcelona.map(
    function (personita){
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted)

//Meidana del top 10%
const spliceStart = salariosColSorted.length * 90 / 100;

const numberOfCuts = salariosColSorted.length - spliceStart;

const topPorCiento = salariosColSorted.splice(spliceStart, numberOfCuts)

const medianaDelTop = calcularMediaAritmetica(topPorCiento);
// const porCiento = topPorCiento.map(
//     function (element){
//         return element;
//     }
// )


console.log(salariosColSorted)
console.log(spliceStart);
console.log(numberOfCuts)
console.log(topPorCiento)
// console.log(porCiento)
console.log(medianaDelTop)