// 泛用化名

/*

Q: 為何不要直接取泛用型別，還要取泛用化名？
A: 如果要很精確討論泛用的行為，而又要概括型別（Type）、介面（Interface）與類別（Class）的狀況，因為共通點都是型別化名的一種，所以才會取這個名稱。


1. 除非型別參數有預設值（又可稱作預設型別參數 Default Type Parameter），否則本身為泛用形式的型別化名，少掉任何一個型別參數的值就會出錯。

2. 宣告方式

type
type GT<TP1, TP2, ..., TPn> = { 內容必須包含 TP1, TP2, ..., TPn }

interface
interface GI<TP1, TP2, ..., TPn> { 內容必須包含 TP1, TP2, ..., TPn }

class
class GC<TP1, TP2, ..., TPn> { 內容必須包含 TP1, TP2, ..., TPn }

3. 預設型別參數

type DefaultStringDictionary<T = string> = {
    [prop: string]: T
}

4. 型別參數限制

type GT<Tp extends Tc> = { ... }

則該型別 GT 一但被註記到某變數時，裡面的型別參數不能代入超出 Tc 以外的型別值


example:
type Primitives = number | string | boolean | null | undefined
type PrimitiveArray<T extends Primitives> = Array<T>

*/

let numberArray1: Array<number> = [1, 2, 3]

// error
// let numberArray2: Array = [1, 2, 3]

type Primitives = number | string | boolean | null | undefined

type PrimitiveArray<T extends Primitives> = Array<T>

let stringPrimitiveArray: PrimitiveArray<string> = ['a', 'b']
let numberPrimitiveArray: PrimitiveArray<number> = [1, 2, 3, 4]

// error
// interface PersonInfo {
//     name: string
// }
// let personPrimitiveArray: PrimitiveArray<PersonInfo> = [
//     {
//         name: 'leo'
//     },
//     {
//         name: 'woody'
//     }
// ]

function traverseElements<T>(values: Array<T>, callback: (el: T, index: number) => void) {
    for (let i = 0; i < values.length; i++) {
        callback(values[i], i)
    }
}

/*
const array = [2, 3, 5, 7, 11]

const callbackFunction = (el: number, index: number) => {
    console.log(`Index: ${index} - Value: ${el}`);
}

traverseElements<number>(array, callbackFunction)

equal to below

*/

traverseElements<number>([2, 3, 5, 7, 11], function(el, index) {
    console.log(`Index: ${index} - Value: ${el}`);
})