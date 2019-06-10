class Combo {
    constructor(){
        this.combo = [];
    }
    push(element) {
        this.combo.push(element);
        return this.combo;
    }
    pop(){
        return this.combo.pop();
    }
    peek(){
        return this.combo[this.combo.length-1];
    }
    size(){
        return this.combo.length;
    }
    print(){
        console.log(this.combo.join(","));
    }
}
const combo = new Combo;
console.log(combo.push("X"));

console.log(combo.push("X"));

console.log(combo.push("Y"));

console.log(combo.push("X"));

console.log(combo.push("Media luna Atras"));

console.log(combo.push("A"));

console.log(combo.size());

console.log(combo.peek());

console.log(combo.pop());

console.log(combo.push("X"));

combo.print();