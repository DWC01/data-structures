class Node {
	constructor(value: number | string) {
		this.value = value;
		this.next = null;
	}

	value;
	next: Node | null;
}

class LinkedList {
	constructor(value: number | string) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = newNode;
		this.length = 1;
	}

	get(index: number) {
		if (index >= this.length || index < 0) {
			return undefined;
		}

		let currentNode: Node | null | undefined = this.head;

		// Since currentNode already set,
		// and i starts at 0
		// only increment if index is above this value
		for (let i = 0; i < index; i++) {
			currentNode = currentNode?.next;
		}

		return currentNode;
	}

	set(index: number, value: number | string) {
		const node = this.get(index);

		if (node) {
			node.value = value;
		}

		return node;
	}

	// insert(value) {}

	push(value: number | string) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else if (this.tail) {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length += 1;

		return this;
	}

	pop() {
		if (!this.head) {
			return undefined;
		}

		let lastNode = this.head;
		let previousNode = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			while (lastNode.next) {
				previousNode = lastNode;
				lastNode = lastNode.next;
			}

			this.tail = previousNode;
			this.tail.next = null;
		}

		this.length -= 1;

		return lastNode;
	}

	unshift(value: number | string) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length += 1;

		return this;
	}

	shift() {
		if (!this.head) {
			return undefined;
		}

		const shiftedNode = this.head;
		shiftedNode.next = null;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			const newFirstNode = this.head.next;
			this.head = newFirstNode;
		}

		this.length -= 1;

		return shiftedNode;
	}

	head: Node | null;
	tail: Node | null;
	length: number;
}

// const linkedList = new LinkedList(4);

export default LinkedList;
