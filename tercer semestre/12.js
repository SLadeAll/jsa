let gustos = {
  "color": "Rojo",
  "pelicula": "Kingman",
  "artista": "Proof"
}

//meses escribir keys
let dias31 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let dias30 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let dias28 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];

let meses = {
  "Enero": dias31,
  "Febrero": dias28,
  "Marzo": dias31,
  "Abril": dias30,
  "Mayo": dias31,
  "Junio": dias30,
  "Julio": dias31,
  "Agosto": dias31,
  "Septiembre": dias30,
  "Octubre": dias31,
  "Noviembre": dias30,
  "Diciembre": dias31

};

//calificaciones


let sem1 = {
  "Programacion": 10,
  "Etica": 8.7,
  "Redesd_De_Datos": 8.6,
  "Matematicas_Basicas": 8.2,
  "Sistemas_Operativos": 8.1,
  "Ingenieria_En_Software": 9.1,
  "Ingles": 9.7

};
let sem2 = {
  "Programación_Orientada_A_Objetos": 9.3,
  "Sistemas_Digitales": 7,
  "Servicios_De_Internet": 8,
  "Metodos_Numericos": 6,
  "Desarrollo_Emprendedor": 9.2,
  "CicloDeVida_Del_Software": 8.4,
  "Ingles": 8.7
};
let sem3 = {
  "Estructura_De_Datos": 9.8,
  "Ingles": 8.7,
  "Estructura_De_Computadoras": 6.5,
  "Legislación_Y_Derecho": 8.2,
  "Matematicas_Discretas": 7.5,
  "Metodologias_Agiles": 7.6,
  "Base_De_Datos": 9.4
};
let miCalificacion = [sem1, sem2, sem3];

//codigos de estatus

statusCode = {
  "CuatroCientos": "Error de tipo : Errores del Cliente",
  "Quinientos": "Error de tipo : Errores del servidor",
  "XXX": "No existe el codigo o este no es un tipo de error"
}

let a = prompt("Ingrese el codigo de error");

if (a >= 400 && a < 500) {
  alert((statusCode.CuatroCientos))
}
if (a >= 500 && a < 600) {
  alert((statusCode.Quinientos))
} else if (a < 400 || a >= 600) {
  alert((statusCode.XXX))
}
