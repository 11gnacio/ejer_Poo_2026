function ejerUno() {
    let ingreso = parseInt(prompt("Ingrese algun dato"));

    if (ingreso >= 18) {
        alert("Acceso concedido. Eres mayor de edad.")
    } else if (ingreso < 18) {
        alert("Acceso denegado. Eres menor de edad.")
    };
};

// Ejercicio 2
function ejerdos() {
    let persona = "";
    let nombre = prompt("Ingrese algun nombre");

    if (persona === nombre) {
        alert("hola")
    }
};