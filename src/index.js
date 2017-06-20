const print = obj => { console.log(JSON.stringify(obj, null, 4)) }
import Heap from './data_structure/Heap';
const heap = new Heap();

heap.insert(60);
heap.insert(50);
heap.insert(30);
heap.insert(20);
heap.insert(10);
heap.insert(22);
heap.insert(80);

heap.print();

