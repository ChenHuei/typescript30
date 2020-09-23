import MyGenericLinkedList from '../45/index'

// 迭代器模式 Iterator Pattern

/*

迭代器模式的主要目的在於不需要知曉任意聚合物的細節，就可以依序遍歷內含的每一個元素

藉由迭代器模式，統一所有聚合物的迭代方式 aka 多型巡訪 (Polymorphic Iteration)

*/

interface Iterator<T> {
    next(): void
    isDone: boolean

    currentItem: T | null
}

interface Iterable<T> {
    createIterator(): Iterator<T>
}

class NormalIterator<T> implements Iterator<T> {
    public currentItem: T | null = null
    private currentIndex = 0

    constructor(private items: Array<T>) {
        this.currentItem = items[0]
    }
    
    get isDone() {
        return this.currentIndex > this.items.length - 1
    }

    public next() {
        if (this.isDone) throw new Error('Iterator out of bound')

        this.currentIndex++
        this.currentItem = this.items[this.currentIndex]
    }
}

class MyArray<T> implements Iterable<T> {
    constructor(public items: Array<T>) {}

    createIterator() {
        return new NormalIterator<T>(this.items)
    }
}

class IterableLinkedList<T> extends MyGenericLinkedList<T> implements Iterable<T> {
    createIterator() {
        const elements: Array<T> = []

        let currentNode = this.head
        while (currentNode !== null) {
            elements.push(currentNode.value)
            currentNode = currentNode.next
        }

        return new NormalIterator(elements)
    }
}

function forEachMock<T>(iterator: Iterator<T>, callback: (v: T) => void) {
    while (!iterator.isDone) {
        callback(iterator.currentItem as T)
        iterator.next()
    }
}

const list1 = new MyGenericLinkedList<number>()

list1.insert(0, 1)
list1.insert(1, 3)
list1.insert(2, 4)
list1.insert(1, 2)

let currentNode = list1.head

while (currentNode !== null) {
    console.log(`Iterated list value ${currentNode.value}`);
    currentNode = currentNode.next
}

const collection1 = new MyArray([1, 2, 3, 4, 5])
const list2 = new IterableLinkedList<number>()

list2.insert(0, 1)
list2.insert(1, 2)
list2.insert(2, 3)

const iterator1 = collection1.createIterator()
const iterator2 = list2.createIterator()

forEachMock(iterator1, v => console.log(`v from collection1: ${v}`))
forEachMock(iterator2, v => console.log(`v from list2: ${v}`))