// 如 key 的型別為 string 其 value 也須為 string

type Dictionary = {
    [propName: string]: string
}

const obj1: Dictionary = {
    aaa: 'aaa',
    bbb: 'bbb'
}

// error
// const obj2: Dictionary = {
//     111: 111,
//     log: () => { console.log('log') }
// }

interface StringType {
    [index: number]: string
}

const obj2: StringType = {
    12: 'hi',
    [45678]: 'hello'
}
const obj3: StringType = {}
const obj5: StringType = []

// error
// const obj4: StringType = [1,2,3]

console.log(obj2[0]);
console.log(obj2[12]);


interface Person {
    readonly email: string,
    readonly password: string,
    age: number,
    name?: string
}

const leo: Person = {
    email: 'leo@gmail.com',
    password: 'leo',
    age: 25
}

leo.age

// error
// leo.email = 'leo2@gmail.com'