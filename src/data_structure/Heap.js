export default class Heap {

    constructor() {
        this.array = [];
        this.size = 0;
    }

    insert(data) {
        let currentIndex = this.size + 1; // 계산의 편의성을 위해 배열의 0번째 인덱스는 사용하지 않는다.
        let parentIndex = Math.floor(currentIndex / 2); // 자식노드 입장에서 부모노드의 인덱스는 자신의 인덱스를 2로 나눈 값.
        this.array[currentIndex] = data; // 배열의 마지막 인덱스에 노드를 삽입한다.

        while (this.array[parentIndex] < this.array[currentIndex]) { // 부모노드와 값을 비교하면서 큰 값이 위로 가도록 정렬한다. (최소힙의 경우 반대)
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }

        this.size ++;
    }

    delete() {
        const root = this.array[1];
        const getChildIndex = currentIndex => this.array[currentIndex * 2] > this.array[currentIndex * 2 + 1] ? currentIndex * 2 : currentIndex * 2 + 1;
        if (root) {
            if (this.size > 1) {
                this.swap(1, this.size);
                this.array[this.size] = '';
                let currentIndex = 1;
                let childIndex = getChildIndex(currentIndex);
                while (this.array[currentIndex] < this.array[childIndex]) {
                    this.swap(currentIndex, childIndex);
                    currentIndex = childIndex;
                    childIndex = getChildIndex(currentIndex);
                }
            } else {
                this.array[1] = '';
            }
        }
        this.size --;
        return this.array[1];
    }

    swap(idx1, idx2) {
        const temp1 = this.array[idx1];
        const temp2 = this.array[idx2];
        this.array[idx1] = temp2;
        this.array[idx2] = temp1;
    }

    print() {
        const tree = this.array;
        const level = Math.floor(Math.log2(this.size));
        let text = '';
        for (let t = 1; t < tree.length; t ++) {
            const currentLevel = Math.floor(Math.log2(t));
            const space = (level - currentLevel + 1) * 4;
            if (Math.log2(t) - currentLevel === 0) {
                text += '\n';
            }
            for (let s = 0; s < space; s ++) {
                text += ' ';
            }
            text += `${tree[t]}`;
        }
        console.log(text);
    }

}

