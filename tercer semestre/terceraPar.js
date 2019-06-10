let a = []
let ba = []
for (i = 0; i < 50; i++) {
  let b = Math.floor(Math.random() * (100 - 1)) + 1
  a.push(b);
  if (b % 2 != 0) {
    ba.push(a[i])
  }
}
console.log(`${a.join(",")} la cantidad de elementos es: ${a.length}`);
console.log("-----------------------")
for (var i = 1; i < ba.length; i++) {
  for (var j = 0; j < (ba.length - i); j++) {
    if (ba[j] > ba[j + 1]) {
      k = ba[j + 1]
      ba[j + 1] = ba[j]
      ba[j] = k
    }
  }
}
console.log(`numeros impares ${ba.join(",")}`);

//

let b = []
for (i = 0; i < 40; i++) {

  b.push(Math.floor(Math.random() * (1000 - 1)) + 1)
}
console.log(b.join(",") + " la cantidad de elementos es de " + b.length);
let c = []
let num = prompt("ingrese el digito que desea: ")

for (i = 0; i < b.length; i++) {
  let u = b[i].toString()
  if (u.substr(u.length - 1, 1) == num) {
    c.push(u)
  }
}
console.log(`los numeros acabados en ${num} son ${c.join(",")}`)

//


let a = prompt("ingrese una frase");
let cont = 0;
for (let i = 0; i < a.length; i++) {
  let b = a.charAt(i);
  if (b == "a" || b == "e" || b == "i" || b == "o" || b == "u" ||
    b == "A" || b == "E" || b == "I" || b == "O" || b == "U") {
    cont++
  }
}
console.log(`la cantidad de vocales en la frase ${a} es ${cont}`)
