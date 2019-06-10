class Oracion {
    constructor(){
        this.stock = {}
        this.count = 0
    }
    push(element) {
        this.stock[this.count] = element;
        this.count++
        return this.stock;
    }
    pop(){
        const element = this.stock[this.count];
        delete this.stock[this.count];
        return element;
    }
    peek(){
        return this.stock[this.count - 1];
    }
    size(){
        return this.count;
    }
    print(){
        console.log(this.stock);
    }
}
const oracion = new Oracion;
console.log(oracion.size());
console.log(oracion.push("Hola"));
console.log(oracion.push("Me"));
console.log(oracion.push("Llamo"));
console.log(oracion.push("Oscar"));
oracion.print();
console.log(oracion.peek());
console.log(oracion.pop());
console.log(oracion.push("Vera"));
console.log(oracion.push("Mira"));
