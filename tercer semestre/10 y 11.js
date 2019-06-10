//matriz  con Calificciones de los semestres
let calSemUno = [10, 8.7, 8.6, 8.2, 8.1, 9.1, 9.7];
let calSemDos = [9.3, 7, 8, 6, 9.2, 8.4, 8.7];
let calSemTres = [9.8, 8.7, 6.5, 8.2, 7.5, 7.6, 9.4];

let calAll = [];
calAll[0] = calSemUno;
calAll[1] = calSemDos;
calAll[2] = calSemTres;

for (let i = 0; i < calAll.length; i++) {

    console.log(`Semestre ${i+1} calificaciones : ${calAll[i].join(", ")}`)

}

//---------------2 matrices 3x3

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
console.log(`Matriz numero 1 :`);
for(let i = 0; i<matrizFinal.length; i++){
  console.log(matriz1[i].join(", "));
}
console.log(`Matriz numero 2 :`);
for(let i = 0; i<matrizFinal.length; i++){
  console.log(matriz2[i].join(", "));
}
console.log(`Matriz numero sumando los terminos del 1 y 2 :`);
for(let i = 0; i<matrizFinal.length; i++){
  console.log(matrizFinal[i].join(", "));
}
console.log(`Sumatorias :`);
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

array1.sort((a, b) => b - a)
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

// de una matriz de 4x4 hacer 2 de 2x4
let martOr = [];

for (let i = 0; i < 4; i++) {
  let arrayOr = [];
  for (let j = 0; j < 4; j++) {
    arrayOr.push(Math.floor(Math.random() * (41 - 21)) + 21)
  }
  martOr[i] = arrayOr;
}
console.log(`Matriz 4x4 : `);
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



/*
Burbula de mayor a menor
for (var i = 1; i < array1.length; i++) {
  for (var j = 0; j < (array1.length - i); j++) {
    if (array1[j] < array1[j + 1]) {
      k = array1[j + 1]
      array1[j + 1] = array1[j]
      array1[j] = k
    }
  }
}
*/
