class Stack {
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
        console.log(this.stock.join(","));
    }
}
const stock = new Stack;
console.log(stock.size());
