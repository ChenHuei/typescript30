//  泛用型別 Generic Types

/*

最主要是將型別化名進行參數化（Parameterize）的動作，使得型別化名擁有更多的彈性與變化性。

type Identity<T> = T

Identity 的宣告中，T 被稱為型別參數（Type Parameter)，原理跟普通的函式概念差不多，代入 Identity<T> 裡面的 T 為怎樣的型別，T 就會成為該型別 (型別參數可以有複數個，只要在 <> 裡用逗號分隔就可以了)

example:

let shouldBeNumber: Identity<number>
let shouldBeString: Identity<string>

example:

type TypeConversion<T, U> = (input: T) => U

let isPositive: TypeConversion<number, boolean> = function (input: number) {
    return input > 0
}

泛用型別的表現形式不單單只有型別（Type）而已，interface 與 class 皆可以轉換成泛用型式

type Dictionary<T> = {
    [prop: string]: T
}

interface LinkedList<T> {
    head: LinkedListNode<T> | null
    length: number
    at(index: number): LinkedListNode<T> | null
}

class TypedArray<T> {
    constructor(public values: T[]) {}
}

若宣告的函式型別為泛用形式，泛用的型別參數除了可以註記到函式內部的變數外，還可以註記在函式的參數（Parameter）與輸出（Output）上

function identityFunction<T>(something: T): T {
    return something
}
*/

type Identity<T> = T

let shouldBeNumber: Identity<number>
let shouldBeString: Identity<string>

type TypeConversion<T, U> = (input: T) => U

let isPositive: TypeConversion<number, boolean> = function (input: number) {
    return input > 0
}