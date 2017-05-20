export default class CircularQueue {
	constructor(_size) {
		/**
		 * 배열의 크기
		 */
		this.size = _size;

		/**
		 * 데이터를 담는 배열
		 * Size보다 하나 더 큰 배열을 생성함으로써 큐가 가득 찼는지 아닌지 알 수 있게 하는
		 * 빈 칸을 하나 마련한다 (원형 큐의 핵심)
		 * @type {Array}
		 */
		this.data = new Array(this.size + 1);

		/**
		 * Rear는 개념적으로 데이터가 들어오는 부분이다.
		 * 데이터가 삽입될 때 마다 1씩 증가하며, Size보다 커질 수 없다.
		 * @type {number}
		 */
		this.rear = 0;

		/**
		 * Front는 개념적으로 데이터가 삭제되는 부분이다.
		 * 데이터가 삭제될 때 마다 1씩 증가하며, Size보다 커질 수 없다.
		 * @type {number}
		 */
		this.front = 0;
	}

	enqueue(item) {
		if (!this.isFull()) {
			// 리어에 아이템을 삽입한다.
			this.data[this.rear] = item;
			// 아이템을 삽입했으므로 리어를 다음칸으로 지정한다.
			this.rear = (this.rear + 1) % (this.size + 1);
		} else {
			console.log('Queue is full.');
		}
	};

	dequeue() {
		if (!this.isEmpty()) {
			// 프론트 다음칸의 아이템을 삭제한다.
			this.data[this.front] = undefined;

			// 아이템을 삭제했으므로 프론트를 다음칸으로 지정한다.
			this.front = (this.front + 1) % (this.size + 1);
		} else {
			console.log('Queue is empty.');
		}
	}

	isEmpty() {
		return this.front === this.rear;
	}

	isFull() {
		return (this.rear + 1) % (this.size + 1) === this.front % (this.size + 1);
	}

	peek() {
		return this.data[this.front];
	}

	clear() {
		this.data = new Array(this.size + 1);
	}

	print() {
		console.log(this.data);
	}
}