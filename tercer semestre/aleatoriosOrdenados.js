let numOrg = []
let numOrd = []
for(let i = 0; i<25; i++){
    numOrg.push(Math.floor(Math.random() * (100 - 1)) + 1)
}

for(let i = 0; i<25; i++){
    numOrd.push(numOrg[i])
}
console.log( numOrg.join(","));

numOrg.sort((a, b) => a - b);
console.log( numOrg.join(","));
