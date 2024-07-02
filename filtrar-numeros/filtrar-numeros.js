"use strict";

function filtrar(arreglo) {
    // Filtrar valores mayores a 10.00
    let filtrados = arreglo.filter(function(valor) {
        return valor > 10.00;
    });

    // Redondear cada valor filtrado a 2 decimales y convertir a string
    let redondeadosStrings = filtrados.map(function(valor) {
        return valor.toFixed(2);
    });

    return redondeadosStrings;
}

let nums = [13.676767, 3.123432, 5.34543543, 10.3452345];

// Aplicar la función filtrar al arreglo nums
let resultado = filtrarYRedondear(nums);

alert(resultado); 
