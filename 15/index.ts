// Indexable Types

// 定義 Dictionary 物件型別內的 key 和 value 都須為 string

type Dictionary = {
    [propName: string]: number
}

const obj1: Dictionary = {
    aaa: 0,
    bbb: 1,
}

// error
// const obj2: Dictionary = {
//     111: '1',
//     log: () => { console.log('log') }
// }

interface StringType {
    [index: number]: string
}

const obj3: StringType = {
    12: 'hi',
    [45678]: 'hello'
}
console.log(obj3[0]);
console.log(obj3[12]);

const obj4: StringType = {}
const obj5: StringType = ['hi']

// error
// const obj4: StringType = [1,2,3]

// 複合狀態

type UserInfo1 = {
    name: string,
    [prop: string]: string
}

// error
// type UserInfo2 = {
//     name: string,
//     3: 3,
//     [prop: string]: string
// }

// type UseBothKeyType = {
//     [key: number]: number,
//     [key: string]: string
// }

/*
type T = {
    readonly P: Tany
}

interface T {
    readonly P: Tany
}

則任何經由型別 T 創造出來或經由 I 實踐出來的廣義物件，這些物件的屬性 P 只能讀取不能進行覆寫
*/

type Car = {
    readonly type: string,
    name: string,
    color?: string
}

const toyota: Car = {
    type: 'plus',
    name: 'RV'

}

// error
// toyota.type = 'plusplus'

interface Person {
    readonly email: string,
    readonly password: string,
    age: number,
    name?: string
}

const leo: Person = {
    email: 'leo@gmail.com',
    password: 'leo',
    age: 20
}

leo.age

// error
// leo.email = 'leo2@gmail.com'


// interface 混合格式
// 建議避免使用：typescript 監測不出未實踐出混合型態介面裡的屬性與方法

interface Counter {
    // 函式格式
    (start: number): void

    // 物件格式
    increment(): number
    reset(): void
    value: number
}

const createCounter = (): Counter => {
    let value: number
    let initializedValue: number

    const counter = ((startNumber: number) => {
        value = startNumber
        initializedValue = startNumber
    }) as Counter

    counter.increment = () => {
        value++
        return value
    }

    counter.reset = () => {
        value = initializedValue
    }

    Object.defineProperty(counter, 'value', {
        get() {
            return value
        }
    })

    return counter
}

const counter: Counter = createCounter()

counter(5)

console.log(counter.value); // 5

counter.increment()
counter.increment()
counter.increment()

console.log(counter.value); // 8

counter.reset()

console.log(counter.value); // 5