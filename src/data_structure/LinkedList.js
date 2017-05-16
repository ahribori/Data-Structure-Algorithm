/**
 * 연결리스트(ArrayList)에서 사용할 Node 자료형
 */
class Node {
    constructor(_prev, _item, _next) {
        /**
         * Private values
         */
        let prev = _prev;
        let item = _item;
        let next = _next;

        /**
         * Getter methods
         */
        this.getPrev = () => prev;
        this.getItem = () => item;
        this.getNext = () => next;

        /**
         * Setter methods
         */
        this.setPrev = _prev => {
            prev = _prev;
            return this;
        };
        this.setItem = _item => {
            item = _item;
            return this;
        };
        this.setNext = _next => {
            next = _next;
            return this;
        };

        /**
         * print this object
         */
        this.print = () => {
            console.log({
                prev,
                item,
                next
            });
        }

    }
}

/**
 * LinkedList 자료구조 클래스
 */
export default class LinkedList {
    constructor() {
        this.data = [];
    }

    add(index, item) {

    }

    remove() {

    }

    size () {

    }
}