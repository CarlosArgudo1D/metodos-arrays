"use strict";


function calcularPromedioEntero(calificaciones) {
    // Verificar si el array de calificaciones está vacío
    if (calificaciones.length === 0) {
        return 0; // Si no hay calificaciones, el promedio es 0
    }

    // Calcular la suma de las calificaciones
    let suma = calificaciones.reduce((total, calificacion) => total + calificacion, 0);

    // Calcular el promedio
    let promedio = suma / calificaciones.length;

    // Obtener la parte entera del promedio
    let promedioEntero = Math.floor(promedio); // Puedes usar Math.ceil o Math.round según el redondeo deseado

    // Mostrar el promedio entero en un alert
    alert(`El promedio entero es: ${promedioEntero}`);

    // Retornar la parte entera del promedio
    return promedioEntero;
}

let calificaciones = [85, 90, 92, 88, 96];
let promedioEntero = calcularPromedioEntero(calificaciones);



