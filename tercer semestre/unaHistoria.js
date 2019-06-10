class Historia {
    constructor(){
        this.stock = {}
        this.count = 0
    }
    push(element) {
        this.stock[this.count] = element;
        this.count++;
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
const historia = new Historia;
console.log(historia.size());
console.log(historia.push("Prologo"));
console.log(historia.push("Introduccion"));
console.log(historia.push("Desarrollo"));
console.log(historia.push("Desenlace"));
historia.print();
console.log(historia.peek());
console.log(historia.pop());
console.log(historia.push("Climax"));
console.log(historia.push("Desenalace"));
historia.print();
