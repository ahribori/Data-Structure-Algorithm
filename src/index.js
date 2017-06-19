import BinarySearchTree from './data_structure/BinarySearchTree';

const bst = new BinarySearchTree(20);
bst.add(15);
bst.add(28);
bst.add(10);
bst.add(17);
bst.add(26);
bst.add(33);
bst.add(4);
bst.add(12);
bst.add(19);
bst.add(30);
bst.add(35);
bst.add(18);
bst.remove(20);

bst.preOrder();