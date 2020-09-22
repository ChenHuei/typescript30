// 泛用介面與泛用類別的型別註記機制

// interface
interface LinkedListNode<T> {
    value: T,
    next: LinkedListNode<T> | null
}

interface LinkedList<U> {
    header: LinkedListNode<U> | null,
    at(index: number): LinkedListNode<U> | null,
    insert(index: number, value: U): void,
    remove(index: number): void
    length(): number,
}

// class
class C<T> {
    constructor(public memberProp: T) {}

    public memberFunction() {
        return this.memberProp
    }

    get value() {
        return this.memberProp
    }

    set value(input: T) {
        this.memberProp = input
    }
}

const test1 = new C(123)

console.log(test1.memberProp)
console.log(test1.memberFunction());
console.log(test1.value);

test1.value = 321

class Cparent<T, U> {
    constructor(
        public member1: T,
        public member2: U
    ) {}
}

class Cchild1<T, U>             extends Cparent<T, U> {}
class Cchild2<T, U = T>         extends Cparent<T, U> {}
class Cchild3<T, U extends T>   extends Cparent<T, U> {}
class Childe4                   extends Cparent<string, number> {}

const test21 = new Cchild1<number, string>(1, '2')
const test22 = new Cchild2<number>(1, 2)
const test23 = new Cchild3<number, number>(1, 2)
