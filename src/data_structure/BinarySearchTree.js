class Node {
    constructor(_data) {
        this.data = _data;
        this.leftChild = null;
        this.rightChild = null;
    }
}

export default class BinarySearchTree {

    constructor(_data) {
        this.root = new Node(_data);
    }
    
    // 탐색
    search(data, node = this.root) {
        if (data === node.data) {
            return node;
        } else {
            return this.search(data, data > node.data ? node.rightChild : node.leftChild);
        }
    }
    
    // 노드 추가
    add(data, node = this.root) {
        if (data > node.data) {
            if (!node.rightChild) {
                node.rightChild = new Node(data);
            } else {
                this.add(data, node.rightChild);
            }
        } else if (data < node.data) {
            if (!node.leftChild) {
                node.leftChild = new Node(data);
            } else {
                this.add(data, node.leftChild);
            }
        }
    }
    
    // 노드 삭제
    remove(data) {
        /*
         successor 노드는 대상 노드의 왼쪽 서브 트리의 가장 큰 노드
         또는 오른쪽 서브트리의 가장 작은 노드이다.
         여기서는 오른쪽 서브트리의 가장 작은 노드를 선택하도록 하였다.
          */
        const getSuccessorNode = (targetNode) => {
            let successor = targetNode.rightChild;
            let successorParent = null;
            while (successor.leftChild) {
                successorParent = successor;
                successor = successor.leftChild;
            }

            successorParent.leftChild = successor.rightChild ? successor.rightChild : null;

            return successor;
        };

        let parent = null;
        let current = this.root;
        
        while (data !== current.data) {
            parent = current;
            if (data < current.data) {
                current = current.leftChild;
            } else if (current.data < data) {
                current = current.rightChild;
            }
        }
        
        if (!current.leftChild && !current.rightChild) { // 자식이 없을 경우
            parent.leftChild.data === current.data ? parent.leftChild = null : parent.rightChild = null;
        } else if (current.leftChild && !current.rightChild) { // 왼쪽 자식만 있을 경우
            current = current.leftChild;
            parent.leftChild.data === current.data ? parent.leftChild = current : parent.rightChild = current;
        } else if (!current.leftChild && current.rightChild) { // 오른쪽 자식만 있을 경우
            current = current.rightChild;
            parent.leftChild.data === current.data ? parent.leftChild = current : parent.rightChild = current;
        } else if (current.leftChild && current.rightChild) { // 양쪽 자식 모두 있을 경우
            const successorNode = getSuccessorNode(current);
            const currentLeftChildTemp = current.leftChild;
            const currentRightChildTemp = current.rightChild;
            current = successorNode;
            current.leftChild = currentLeftChildTemp;
            current.rightChild = currentRightChildTemp;
            if (!parent) {
                this.root = current;
            } else {
                console.log(parent)
            }
        }
    };

    // 전위 순회(TLR)
    preOrder(node = this.root) {
        if (node) {
            console.log(node.data);
            this.preOrder(node.leftChild);
            this.preOrder(node.rightChild);
        }
    }

    // 중위 순회(LTR)
    inOrder(node = this.root) {
        if (node) {
            this.inOrder(node.leftChild);
            console.log(node.data);
            this.inOrder(node.rightChild);
        }
    }

    // 후위 순회(LRT)
    postOrder(node = this.root) {
        if (node) {
            this.postOrder(node.leftChild);
            this.postOrder(node.rightChild);
            console.log(node.data);
        }
    }
}