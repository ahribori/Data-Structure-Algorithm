// import Stack from './data_structure/Stack';
// import LinkedList from './data_structure/LinkedList';
//
// const linkedList = new LinkedList();
//
// //-----삽입-----
// linkedList.addFirst('사과'); // 사과
// linkedList.addFirst('귤'); // 귤-사과
// linkedList.addLast('바나나'); // 귤-사과-바나나
// linkedList.addLast('오렌지'); // 귤-사과-바나나-오렌지
// linkedList.add(2, '레몬'); // 귤-사과-레몬-바나나-오렌지
//
// //-----삭제-----
// linkedList.removeFirst(); // 사과-레몬-바나나-오렌지
// linkedList.removeLast(); // 사과-레몬-바나나
// linkedList.remove(3);
//
// const result = [];
// let cursor = linkedList.getHead();
// while(cursor) {
//     result.push(cursor.data);
//     cursor = cursor.next;
// }
// console.log(result);

import CircularQueue from './data_structure/CircularQueue';

const queue = new CircularQueue(10);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);
queue.enqueue(10);
queue.dequeue(); //1
queue.dequeue(); //2
queue.dequeue(); //3
queue.dequeue(); //4
queue.dequeue(); //5
queue.dequeue(); //6
queue.dequeue(); //7
queue.dequeue(); //8
queue.dequeue(); //9

console.log(queue.peek());