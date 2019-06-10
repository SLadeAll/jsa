class Frutas {
    constructor(){
        this.frutas = [];
    }
    push(element) {
        this.frutas.push(element);
        return this.frutas;
    }
    pop(){
        return this.frutas.pop();
    }
    peek(){
        return this.frutas[this.frutas.length-1];
    }
    size(){
        return this.frutas.length;
    }
    print(){
        console.log(this.frutas);
    }
}

const frutas = new Frutas;

console.log(frutas.push(`Manzanas`));
console.log(frutas.push(`Peras`));
console.log(frutas.push(`Platanos`));
frutas.print();
console.log(frutas.size());
console.log(frutas.push(`Papaya`));
console.log(frutas.push(`Granada`));
console.log(frutas.peek());
console.log(frutas.pop());
frutas.print();