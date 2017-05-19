/**
 * 연결리스트(LinkedList)에서 사용할 노드 클래스
 */
class Node {
    constructor(_prev, _data, _next) {
        this.prev = _prev;
        this.data = _data;
        this.next = _next;
    }
}

/**
 * LinkedList 자료구조 클래스
 */
export default class LinkedList {
    constructor() {
        let head = null;
        let tail = null;
        let size = 0;

        /**
         * 해당 인덱스의 노드를 반환
         */
        const node = (index) => {
            if (index < size / 2 ) {
                // 인덱스가 사이즈의 절반보다 작으면 앞(head)에서부터부터 탐색
                let cursor = head;
                for (let i = 0; i < index; i++) {
                    cursor = cursor.next;
                }
                return cursor;
            } else {
                // 인덱스가 사이즈의 절반보다 크면 뒤(tail)에서부터 탐색
                let cursor = tail;
                for (let i = size -1; i > index; i--) {
                    cursor = cursor.prev;
                }
                return cursor;
            }
        };

        /**
         * 리스트의 맨 앞에 노드를 추가
         * @param data
         */
        this.addFirst = (data) => {
            const newNode = new Node(null, data, head);
            if (head !== null) {
                head.prev = newNode;
            }
            head = newNode;
            size ++;
            if (head.next === null) {
                tail = newNode;
            }
        };

        /**
         * 리스트의 맨 뒤에 노드를 추가
         * @param data
         */
        this.addLast = (data) => {
            const newNode = new Node(tail, data, null);
            if (tail !== null) {
                tail.next = newNode;
            }
            tail = newNode;
            size ++;
            if (tail.prev === null) {
                head = newNode;
            }
        };

        /**
         * 인덱스를 지정해 노드를 추가
         * @param k
         * @param data
         */
        this.add = (k, data) => {
            const prev = node(k-1);
            if (prev === null) {
                this.addFirst(data);
            } else {
                const next = prev.next;
                const newNode = new Node(prev, data, next);
                prev.next = newNode;
                if (next !== null) {
                    next.prev = newNode;
                }
                size ++;
                if (next === null) {
                    tail = newNode;
                }
            }
        };

        /**
         * 리스트의 맨 앞 노드를 삭제
         */
        this.removeFirst = () => {
            if (head) {
                let temp = head;
                head = temp.next;
                if (head === null) {
                    tail = null;
                } else {
                    head.prev = null;
                }
                temp = null;
                size--;
            }
        };

        /**
         * 리스트의 맨 뒤 노드를 삭제
         */
        this.removeLast = () => {
            if (tail) {
                let temp = tail;
                tail = temp.prev;
                if (tail === null) {
                    head = null;
                } else {
                    tail.next = null;
                }
                temp = null;
                size --;
            }
        };

        /**
         * 인덱스를 지정해 노드를 삭제
         * @param index
         */
        this.remove = (index) => {
            let target = node(index);
            if (target) {
                const prev = target.prev;
                const next = target.next;

                if (prev === null) {
                    return this.removeFirst();
                }

                if (next === null) {
                    return this.removeLast();
                }

                prev.next = target.next;
                next.prev = target.prev;
                target = null;
                size --;
            }
        };

        /**
         * Head를 반환
         */
        this.getHead = () => head;

        /**
         * Tail을 반환
         */
        this.getTail = () => tail;

        /**
         * 해당 인덱스의 노드를 반환
         * @param k
         */
        this.get = (k) => node(k);

        /**
         * 리스트의 크기를 반환
         */
        this.size = () => size;

    }
}
