export default class LinearQueue {
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
		this.data = new Array(this.size);
		this.front = -1;
		this.rear = -1;
	}

	/**
	 * 큐에 원소를 삽입
	 * @param item
	 */
	enqueue(item) {
		if (!this.isFull()) {
			this.rear++;
			this.data[this.rear] = item;
		} else {
			console.log('Queue is full.');
		}
	}

	/**
	 * 큐에서 원소를 삭제
	 */
	dequeue() {
		if (!this.isEmpty()) {
			this.front++;
			this.data[this.front] = undefined;
			this.reArrange();
		} else {
			console.log('Queue is empty.');
		}
	}

	/**
	 * 큐에 잉여 공간이 없도록 다시 정렬
	 */
	reArrange() {
		const tempData =  new Array(this.size);
		let k = 0;
		for (let i = this.front; i < this.rear; i++) {
			tempData[k] = this.data[i + 1];
			k++;
		}
		this.front = -1;
		this.rear = k - 1;
		this.data = tempData;
	}

	/**
	 * 큐가 비어있는지 검사
	 * @returns {boolean}
	 */
	isEmpty() {
		return this.rear === this.front;
	}

	/**
	 * 큐가 가득 차 있는지 검사
	 * @returns {boolean}
	 */
	isFull() {
		return this.rear + 1 === this.size;
	}

	/**
	 * 큐의 프론트 반환
	 * @returns {*}
	 */
	peek() {
		return this.data[this.front];
	}

	/**
	 * 큐 초기화
	 */
	clear() {
		this.data = new Array(this.size);
	}

	/**
	 * 큐 출력
	 */
	print() {
		console.log(this.data);
	}
}