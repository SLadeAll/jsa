class Sandwich {
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
const sandwich = new Sandwich;
console.log(sandwich.size());
console.log(sandwich.push("Pan"));
console.log(sandwich.push("Mayonesa"));
console.log(sandwich.push("Mostaza"));
console.log(sandwich.push("Jamon"));
sandwich.print();
console.log(sandwich.peek());
console.log(sandwich.pop());
console.log(sandwich.push("Mostaza"));
console.log(sandwich.push("Mayonesa"));
console.log(sandwich.push("Pan"));
