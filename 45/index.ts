// 泛型宣告下 class 與 interface 綁定時的規則與特點

interface LinkedListNode<T> {
    value: T,
    next: LinkedListNode<T> | null
}

interface LinkedList<U> {
    head: LinkedListNode<U> | null,
    at(index: number): LinkedListNode<U> | null,
    insert(index: number, value: U): void,
    remove(index: number): void
    length(): number,
}

class MyGenericLinkedListNode<T> implements LinkedListNode<T> {
    public next: LinkedListNode<T> | null = null

    constructor(public value: T) {}
}
class MyGenericLinkedList<T> implements LinkedList<T> {
    public head: LinkedListNode<T> | null = null

    public at(index: number): LinkedListNode<T> | null {
        const length = this.length()

        if (index >= length) throw new Error('Index out of bound')

        let currentIndex = 0
        let currentNode = this.head as LinkedListNode<T>

        while (currentIndex !== index) {
            currentNode = currentNode.next as LinkedListNode<T>
            currentIndex++
        }

        return currentNode
    }

    public insert(index: number, value: T) {
        const length = this.length()
        const newListNode = new MyGenericLinkedListNode(value)

        if (index > length) {
            throw new Error('Index out of bound')
        } else if (index === length) {
            if (index === 0) {
                this.head = newListNode
            } else {
                const node = this.at(index - 1) as LinkedListNode<T>
                node.next = newListNode
            }
        } else {
            if (index === 0) {
                const originHead = this.head
                this.head = newListNode
                this.head.next = originHead
            } else {
                const preListNode = this.at(index - 1) as LinkedListNode<T>
                const originListNode = preListNode.next as LinkedListNode<T>
                preListNode.next = newListNode
                newListNode.next = originListNode
            }
        }
    }

    public remove(index: number): void {
        throw new Error("Method doesn't implemented yet")
    }

    public length() {
        let count = 0
        let currentNode: LinkedListNode<T> | null = this.head

        while (currentNode !== null) {
            currentNode = currentNode.next
            count++
        }
        return count
    }

    public getInfo() {
        let currentNode = this.head
        let currentIndex = 0

        while (currentNode !== null) {
            console.log(`Index ${currentIndex}: ${currentNode.value}`);
            currentNode = currentNode.next
            currentIndex++
        }
    }
}

const L = new MyGenericLinkedList<number>()

L.insert(0 ,1)
L.insert(1 ,3)
L.insert(2 ,4)
L.insert(1 ,2)

L.getInfo()

// unknown
const N = new MyGenericLinkedList()

N.insert(0 , '1')
N.insert(1 , '3')
N.insert(2 , '4')
N.insert(1 , '2')

N.getInfo()

const M = new MyGenericLinkedList<boolean>()

M.insert(0 , true)
M.insert(1 , true)
M.insert(2 , false)
M.insert(1 , false)

M.getInfo()