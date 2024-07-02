"use strict";

function filtrarAsignaturasPorNivel(asignaturas, nivel) {
    // Filtrar las asignaturas por el nivel 
    let asignaturasFiltradas = asignaturas.filter(asignatura => asignatura.nivel === nivel);

    // Retornar el resultado del filtro
    return asignaturasFiltradas;
}

let cursos = [
    { nombre: "MATEMATICA COMPUTACIONAL", nivel: 1 },
    { nombre: "METODOLOGÍAS PARA RESOLVER PROBLEMAS INFORMÁTICOS", nivel: 1 },
    { nombre: "BASE DE DATOS RELACIONALES", nivel: 1 },
    { nombre: "LAS TICS Y SOPORTE EN HARDWARE", nivel: 1 },
    { nombre: "PROGRAMACIÓN DE INTERFACES GRÁFICAS Y ESTRUCTURA DE DATOS", nivel: 1 },
    { nombre: "PROYECTO INTEGRADOR DE SABERES:CREACIÓN DE APLICACIONES DE ESCRITORIO", nivel: 1 },
    { nombre: "PRÁCTICAS DE SERVICIO COMUNITARIO", nivel: 1 },
    { nombre: "SISTEMAS DIGITALES PROGRAMABLES", nivel: 2 },
    { nombre: "SISTEMAS DE INFORMACIÓN", nivel: 2 },
    { nombre: "PROGRAMACIÓN ORIENTADA A OBJETOS", nivel: 2 },
    { nombre: "PROCESOS CONTABLES", nivel: 2 },
    { nombre: "GESTION DE BASE DE DATOS", nivel: 2 },
    { nombre: "PROYECTO INTEGRADOR DE SABERES: CREACIÓN DE APLICACIONES DE ESCRITORIO CON BASE DE DATOS", nivel: 2 },
    { nombre: "PRÁCTICAS LABORALES UNO", nivel: 2 },
    { nombre: "PROGRAMACION DE APLICACIONES PARA DISPOSITIVOS MOVILES", nivel: 3 },
    { nombre: "PROBABILIDADES Y PROCESOS ESTOCÁSTICOS", nivel: 3 },
    { nombre: "HERRAMIENTAS INFORMÁTICAS PARA EL DESPLIEGUE DE DIAGRAMAS", nivel: 3 },
    { nombre: "APLICACIONES TECNOLOGICAS AUTONOMAS", nivel: 3 },
    { nombre: "SOFTWARE APLICATIVO", nivel: 3 },
    { nombre: "PROYECTO INTEGRADOR DE SABERES CREACION DE APLICACIONES WEB CON BASE A LA ARQUITECTURA CLIENTE SERVIDOR", nivel: 3 },
    { nombre: "PRÁCTICAS LABORALES DOS", nivel: 3 },
    { nombre: "COMUNICACIONES Y REDES DE DATOS", nivel: 4 },
    { nombre: "SISTEMAS OPERATIVOS", nivel: 4 },
    { nombre: "HERRAMIENTAS CASE", nivel: 4 },
    { nombre: "DERECHO Y SEGURIDAD INFORMATICA", nivel: 4 },
    { nombre: "TENDENCIAS TECNOLÓGICAS", nivel: 4 },
    { nombre: "DESARROLLO DE PROYECTOS DE SOFTWARE", nivel: 4 },
    { nombre: "PRÁCTICAS LABORALES TRES", nivel: 4 }
];

// Pedir al usuario que ingrese el nivel a filtrar
let nivel = prompt("Ingrese el nivel que desea filtrar (1, 2, 3 o 4):");

// Convertir la entrada del usuario a un número entero
nivel = parseInt(nivel);

// Validar que el nivel ingresado sea válido (entre 1 y 4)
if (nivel >= 1 && nivel <= 4) {
    // Filtrar las asignaturas por el nivel ingresado
    let asignaturasFiltradas = filtrarAsignaturasPorNivel(cursos, nivel);

    // Mostrar mensaje 
    let mensaje = `Asignaturas de nivel ${nivel}:\n`;
    asignaturasFiltradas.forEach(asignatura => {
        mensaje += `- ${asignatura.nombre}\n`;
    });

    // Mostrar las asignaturas filtradas en un alert
    alert(mensaje);
} else {
    alert("Nivel ingresado no válido. Por favor ingrese un número entre 1 y 4.");
}
