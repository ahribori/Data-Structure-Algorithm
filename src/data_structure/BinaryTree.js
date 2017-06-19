class Node {
    constructor(_data) {
        this.data = _data;
        this.leftChild = null;
        this.rightChild = null;
        this.parent = null;
        this.sibling = null;
    }
}

export default class BinaryTree {

    //_data를 루트노드로 가지는 BinaryTree 초기화
    constructor(_data) {m
        this.root = new Node(_data);
        this.level = 1;
        this.height = 1;
    }

    // targetNode의 왼쪽에 _data를 자식 노드로 추가
    insertLeftChildNode(targetNode, _data) {
        if (this.root) {
            const newNode = new Node(_data);
            newNode.parent = this.root;
            if (this.root.rightChild) {
                newNode.sibling = this.root.rightChild;
                this.root.rightChild.sibling = newNode;
            }
            targetNode.leftChild = newNode;
        }
    }

    // targetNode의 오른쪽에 _data를 자식 노드로 추가
    insertRightChildNode(targetNode, _data) {
        if (this.root) {
            const newNode = new Node(_data);
            newNode.parent = this.root;
            if (this.root.leftChild) {
                newNode.sibling = this.root.leftChild;
                this.root.leftChild.sibling = newNode;
            }
            targetNode.rightChild = newNode;
        }
    }

    // 전위 순회(TLR)
    preOrder(node) {
        if (node) {
            console.log(node.data);
            this.preOrder(node.leftChild);
            this.preOrder(node.rightChild);
        }
    }

    // 중위 순회(LTR)
    inOrder(node) {
        if (node) {
            this.inOrder(node.leftChild);
            console.log(node.data);
            this.inOrder(node.rightChild);
        }
    }

    // 후위 순회(LRT)
    postOrder(node) {
        if (node) {
            this.postOrder(node.leftChild);
            this.postOrder(node.rightChild);
            console.log(node.data);
        }
    }

    // targetNode의 왼쪽 자식 노드를 반환
    getLeftChildNode(targetNode) {
        return targetNode.leftChild;
    }

    // targetNode의 오른쪽 자식 노드를 반환
    getRightChildNode(targetNode) {
        return targetNode.rightChild;
    }

    getRootNode() {
        return this.root;
    }
}
