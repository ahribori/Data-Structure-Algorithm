export default class Graph {

    constructor(_size = 5) {
        this.size = _size;
        this.vertices = new Array(_size);
        this.initializeMatrix();
    }

    initializeMatrix() {
        this.matrix = new Array(this.size);
        for (let i = 0; i < this.size; i ++) {
            this.matrix[i] = new Array(this.size);
            for (let j = 0; j < this.size; j ++) {
                this.matrix[i][j] = 0;
            }
        }
    }

    increaseMatrixSize() {
        const tempVertices = new Array(this.size + 1);
        const tempMatrix = [];
        for (let i = 0; i < this.size + 1; i++) {
            if (i < this.size) {
                tempVertices[i] = this.vertices[i];
            }
            tempMatrix[i] = new Array(this.size + 1);
            for (let j = 0; j < this.size + 1; j++) {
                if (i <= this.size - 1 && j <= this.size - 1) {
                    tempMatrix[i][j] = this.matrix[i][j];
                } else {
                    tempMatrix[i][j] = 0;
                }
            }
        }
        this.matrix = tempMatrix;
        this.vertices = tempVertices;
        this.size ++;
    }

    decreaseMatrixSize() {
        // TODO
    }

    addVertex(v) {
        if (v <= this.size && !this.vertices[v - 1]) {
            this.vertices[v - 1] = v;
        } else {
            if (v <= this.size + 1) {
                this.increaseMatrixSize();
                this.vertices[v - 1] = v;
            }
        }
    }

    addEdge(u, v, weight = 1) {
        u --; // 배열의 인덱스를 의미해야 하기 때문에 정점에서 1을 뺴준다
        v --; // 배열의 인덱스를 의미해야 하기 때문에 정점에서 1을 뺴준다
        if(this.vertices[u] && this.vertices[v]) {
            this.matrix[u][v] = weight;
            this.matrix[v][u] = weight;
        }
    }

    removeVertex(v) {
        v--;
        if (this.vertices[v]) {
            delete this.vertices[v];
            for (let i = 0; i < this.size; i++) {
                this.matrix[v][i] = 0; // 간선 초기화
            }
            for (let j = 0; j < this.size; j++) {
                this.matrix[j][v] = 0; // 간선 초기화
            }
        }
    }

    /**
     *
     * @param v {Number} 머리
     * @param u {Number} 꼬리
     */
    removeEdge(v, u) {
        v--;
        u--;
        if (this.matrix[v][u] !== 0 && this.matrix[u][v] !== 0) {
            this.matrix[v][u] = 0;
            this.matrix[u][v] = 0;
        } else {
            console.log('간선이 존재하지 않음');
        }
    }

    /**
     * 정점을 인자로 받아 인접한 정점의 배열을 반환하는 함수
     * @param v {Number} 정점
     * @returns {Array} 정점의 배열
     */
    adjacent(v) {
        v--;
        const adjacent = [];
        for (let i = 0; i < this.size; i ++) {
            if (this.matrix[v][i] > 0) {
                adjacent.push(i + 1);
            }
        }
        return adjacent;
    }

    /**
     * 정점 v에서 시작하는 깊이 우선 탐색(DFS)
     * @param v {Number} 정점
     * @constructor
     */
    DFS(v) {
    }

    /**
     * 정점 v에서 시작하는 너비 우선 탐색(BFS)
     * @param v {Number} 정점
     * @constructor
     */
    BFS(v) {
        const queue = [];
        const visited = [];

        if (this.vertices.indexOf(v) > -1) {
            queue.push(v);
        }

        while (queue.length > 0) {
            const cursor = queue.shift();
            visited.push(cursor);
            for (let i = 0; i < this.size; i++) {
                if (this.matrix[cursor - 1][i] === 1 && // 인접하면서,
                    visited.indexOf(i + 1) === -1 && // 방문된 적이 없고,
                    queue.indexOf(i + 1) === -1) { // 큐에 들어있지 않은 정점을,
                    queue.push(i + 1); // 큐에 추가한다.
                }
            }
        }
        console.log(visited);
    }
}