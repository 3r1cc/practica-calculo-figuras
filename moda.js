const lista1 = [
    1,
    1,
    1,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    4,
    4,
]

const lista1Count = {};

lista1.map(
    function (elemento) {
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1;
        }
    }
);

const lista1array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = lista1array[lista1array.length - 1];

lista1.map(function (elemento){
    const elementos = elemento + 1
    console.log(elementos + "holaaaaaa")
})