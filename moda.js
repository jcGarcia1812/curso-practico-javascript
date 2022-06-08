function calcularModa (lista) {

const listaCount = {};

lista.map(function (elemento) {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        }
        else {
        listaCount[elemento] = 1;
        }
    });

const listaArray = Object.entries(listaCount).sort(
    function (Elemento1, Elemento2){
        return Elemento1[1] - Elemento2[1];
    });

const moda = listaArray[listaArray.length - 1];
console.log(moda);
}