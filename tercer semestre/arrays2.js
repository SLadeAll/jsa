array1let aray1 = []
for (let i = 0; i < 20; i++) {
  let alea = Math.floor(Math.random() * (10 - 1)) + 1
  aray1.push(alea);
}
console.log(`los numeros aleatorias son: ${aray1.join(",")}`)

let numElimi = parseInt(prompt(`Ingrese el numero que quiere que no se repita`))

for (let i = 0; i < aray1.length; i++) {
  if (aray1[i] == numElimi) {
    aray1.splice(i, 1)
  }
}
console.log(`arreglo modificado ${aray1}`);

//--------------------------

let aray2 = []
for (let i = 0; i < 15; i++) {
  let alea2 = Math.floor(Math.random() * (5 - 1)) + 1
  aray2.push(alea2)
}
console.log(aray2.join(","))

let numCambio = parseInt(prompt(`Ingrese el numero que quiere que se edite`))

for (let i = 0; i < aray2.length; i++) {
  if (aray2[i] == numCambio) {
    aray2.splice(i, 1, "x")
  }
}
console.log(aray2.join(","))


//---------------------------------

let aray3 = []
let aray4 = []
for (let i = 0; i < 30; i++) {
  let alea3 = Math.floor(Math.random() * (1000 - 1)) + 1
  aray3.push(alea3);
}
console.log(aray3.join(","))

for (let i = 0; i < aray3.length; i++) {

  if (aray3[i] == 2 || aray3[i] == 3 || aray3[i] == 5 || aray3[i] == 7 || aray3[i] == 11) {
    aray4.push(aray3[i])
  } else if (aray3[i] % 2 != 0 && aray3[i] % 3 != 0 && aray3[i] % 5 != 0 && aray3[i] % 7 != 0 && aray3[i] % 11 != 0 && aray3[i] != 1) {
    aray4.push(aray3[i])
  }
}
console.log(`Los numeros primos son: ${aray4.join(",")}`)

//----------------------

let aray3 = []
let aray4 = []
for (let i = 0; i < 30; i++) {
  let alea3 = Math.floor(Math.random() * (1000 - 1)) + 1
  aray3.push(alea3);
}
console.log(aray3.join(","))
console.log("--------------------------------")

for (let i = 0; i < aray3.length; i++) {
  let cont = 0;
  for (let e = 1; e <= aray3[i]; e++) {
    if (aray3[i] % e == 0) {
      cont++;
    }
  }
  if (cont == 2) {
    aray4.push(aray3[i]);
  }
}

console.log(` Los numeros primos son : ${aray4.join(",")}`)


let comLun = ["huevos", "Carne Asada", "tacos"]
let comMart = ["Chilaquiles", "Sopa", "Burger"]
let comMierc = ["Burritos", "pizza", "Dogo"]
let comJuev = ["Torta", "Pollo", "Tacos"]
let comVier = ["Fijoles", "carne Asada", "Tostadas"]

let comSemana = [];
comSemana[0] = comLun;
comSemana[1] = comMart;
comSemana[2] = comMierc;
comSemana[3] = comJuev;
comSemana[4] = comVier;
//-------------Calificciones de los semestres pasados y actal en una matriz

let calSemUno = [10, 8.7, 8.6, 8.2, 8.1, 9.1, 9.7];
let calSemDos = [9.3, 7, 8, 6, 9.2, 8.4, 8.7];
let calSemTres = [9.8, 8.7, 6.5, 8.2, 7.5, 7.6, 9.4];

let calAll = [];
calAll[0] = calSemUno;
calAll[1] = calSemDos;
calAll[2] = calSemTres;

for (let i = 0; i < calAll.length; i++) {
  for (let j = 0; j < calAll[i].length; j++) {
    console.log(`Semestre ${i+1} calificacion : ${calAll[i][j]}`)
  }
}

//---------------

let matriz1 = []

for (let i = 0; i < 3; i++) {
  let arr = []
  for (let j = 0; j < 3; j++) {
    let alea = Math.floor(Math.random() * (9 - 3)) + 3
    arr.push(alea)
  }
  matriz1[i] = arr;
}

let matriz2 = []

for (let i = 0; i < 3; i++) {
  let arr = []
  for (let j = 0; j < 3; j++) {
    let alea = Math.floor(Math.random() * (9 - 3)) + 3
    arr.push(alea)
  }
  matriz2[i] = arr;
}

matrizFinal = [];

for (let i = 0; i < 3; i++) {
  let arr = [];
  for (let j = 0; j < 3; j++) {
    arr.push(matriz1[i][j] + matriz2[i][j])
  }
  matrizFinal[i] = arr;
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`${matriz1[i][j]} + ${matriz2[i][j]} = ${matrizFinal[i][j]}`)
  }
}

//----------- 36 numeros aleatorios matriz de 6x6 con numeros aleatorios del 2 al 9

let matr = []
let arraAco = []
for (let i = 0; i < 36; i++) {
  arraAco.push(Math.floor(Math.random() * (10 - 2)) + 2)
}
console.log(`Numeros aleatorios ${arraAco.join(",")}`)
arraAco.sort((a, b) => b - a)


let a = 0;


//ciclo que cuenta los 36 numeros
for (let i = 0; i < 6; i++) {
  let arra = [];
  for (let j = 0; j < 6; j++) {
    arra.push(arraAco[a])
    a++
  }

  matr[i] = arra;
}
console.log("---------------------------")

for (let i = 0; i < matr.length; i++) {
  console.log(matr[i].join(","))
}

// hacer matrices de 4x4 ascendente y descendente

let matr = []
let array1 = []
let matr2 = []
for (let i = 10; i < 170; i += 10) {
  array1.push(i);
}

console.log(array1.join(","))

let a = 0
for (let i = 0; i < 4; i++) {
  let arra = [];
  for (let j = 0; j < 4; j++) {
    arra.push(array1[a])
    a++
  }
  matr[i] = arra;
}
console.log("ascendente");
for (var i = 0; i < matr.length; i++) {
  console.log(matr[i].join(","));
}

for (var i = 1; i < array1.length; i++) {
  for (var j = 0; j < (array1.length - i); j++) {
    if (array1[j] < array1[j + 1]) {
      k = array1[j + 1]
      array1[j + 1] = array1[j]
      array1[j] = k
    }
  }
}
console.log("descendente");
let b = 0
for (let i = 0; i < 4; i++) {
  let arra = [];
  for (let j = 0; j < 4; j++) {
    arra.push(array1[b])
    b++
  }
  matr2[i] = arra;
}
for (var i = 0; i < matr.length; i++) {
  console.log(matr2[i].join(","));
}
//HACER UN MATRIZ de 3x6 con dos matrices de 3x3 con numeros del 1 al 20
let matriz1 = [];
for (let i = 0; i < 3; i++) {
  let arraAco = [];
  for (var j = 0; j < 3; j++) {
    arraAco.push(Math.floor(Math.random() * (21 - 1)) + 1)
  }
  matriz1[i] = arraAco;
}
for (let i = 0; i < matriz1.length; i++) {
  console.log(matriz1[i].join(","));
}
let matriz2 = [];
for (let i = 0; i < 3; i++) {
  let arraAc = [];
  for (var j = 0; j < 3; j++) {
    arraAc.push(Math.floor(Math.random() * (21 - 1)) + 1)
  }
  matriz2[i] = arraAc;
}
for (let i = 0; i < matriz2.length; i++) {
  console.log(matriz2[i].join(","));
}
let matrizConcatenada = [];
for (let i = 0; i < 3; i++) {
  matrizConcatenada[i] = matriz1[i].concat(matriz2[i])
  console.log(matrizConcatenada[i].join(","));
}

//
let martOr = [];

for (let i = 0; i < 4; i++) {
  let arrayOr = [];
  for (let j = 0; j < 4; j++) {
    arrayOr.push(Math.floor(Math.random() * (21 - 1)) + 1)
  }
  martOr[i] = arrayOr;
}
for (let i = 0; i < martOr.length; i++) {
  console.log(martOr[i].join(","))
}
let matr1 = [];
let matr2 = [];
let a = 0;
for (let i = 0; i < 2; i++) {
  matr1[i] = martOr[a];
  a++;
}
for (let i = 0; i < 2; i++) {
  matr2[i] = martOr[a];
  a++;
}

console.log(`2x4 matriz 1`);
for (var i = 0; i < matr2.length; i++) {
  console.log(matr1[i].join(","))
}

console.log(`2x4 matriz 2`);
for (var i = 0; i < matr2.length; i++) {
  console.log(matr2[i].join(","))
}
