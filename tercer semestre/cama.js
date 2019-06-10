class Cama {
    constructor(){
        this.cama = [];
    }
    push(element) {
        this.cama.push(element);
        return this.cama;
    }
    pop(){
        return this.cama.pop();
    }
    peek(){
        return this.cama[this.cama.length-1];
    }
    size(){
        return this.cama.length;
    }
    print(){
        console.log(this.cama.join(","));
    }
}

const cama = new Cama;

console.log(cama.push(`Base`));
console.log(cama.push(`Colchon`));
console.log(cama.peek());
console.log(cama.push(`Sabana`));
console.log(cama.size());
cama.print();
console.log(cama.push(`Colcha`));
console.log(cama.pop());
console.log(cama.push(`Almohada`));
console.log(cama.push(`Colcha`));
cama.print();


