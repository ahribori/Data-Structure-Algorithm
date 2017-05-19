import Stack from './data_structure/Stack';
import LinkedList from './data_structure/LinkedList';

const linkedList = new LinkedList();

//-----삽입-----
linkedList.addFirst('사과'); // 사과
linkedList.addFirst('귤'); // 귤-사과
linkedList.addLast('바나나'); // 귤-사과-바나나
linkedList.addLast('오렌지'); // 귤-사과-바나나-오렌지
linkedList.add(2, '레몬'); // 귤-사과-레몬-바나나-오렌지

//-----삭제-----
linkedList.removeFirst(); // 사과-레몬-바나나-오렌지
linkedList.removeLast(); // 사과-레몬-바나나
linkedList.remove(3);

const result = [];
let cursor = linkedList.getHead();

while(cursor) {
    result.push(cursor.data);
    cursor = cursor.next;
}

console.log(result);