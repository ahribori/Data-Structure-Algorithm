export default class Stack {

    constructor(size) {
        // default size 5
        const _size = isNaN(size) ? 5 : size;
        this.data = new Array(_size);
        this.size = _size;
        this.top = -1;
    }

    push(item) {
        if (!this.isFull()) {
            this.data[this.top + 1] = item;
            this.top++;
        } else {
            console.log('Stack Overflow!');
        }
        return this;
    }

    pop() {
        if (!this.isEmpty()) {
            this.data[this.top] = undefined;
            this.top--;
        } else {
            console.log('Stack Underflow!');
        }
        return this;
    }

    peek() {
        console.log(this.top);
    }

    isEmpty() {
        return this.top === -1;
    }

    isFull() {
        return this.top === this.data.length - 1;
    }

    clear() {
        this.data = new Array(this.size);
        return this;
    }

    print() {
        console.log(this.data);
    }

}