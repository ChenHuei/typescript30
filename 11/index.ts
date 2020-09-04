// any

/*
出現 any 的時機

1. delayed initialization
2. function parameters
3. function return value
4. empty Array

*/

// unknown

let isAny: any
let isUnknown: unknown

let isNumber: number
let isString: string
let isBoolean: boolean
let isNull: null
let isUndefined: undefined


isNumber = isAny
isString = isAny
isBoolean = isAny
isNull = isAny
isUndefined = isAny
isAny = isAny
isUnknown = isAny

// error
// isNumber = isUnknown
// isString = isUnknown
// isBoolean = isUnknown
// isNull = isUnknown
// isUndefined = isUnknown
isAny = isAny
isUnknown = isAny

// 除了 unknown 和 any 型別外，其他型別的變數皆不能被 unknown 指派
// 因此可以透過"縮小型別"或"類型斷言"確保當下能斷定目前變數到底是什麼型別在對其進行操作，降低 any 型別帶來的不確定性


// 縮小型別
if (typeof isUnknown === 'number') {
    isNumber = isUnknown
}

if (typeof isUnknown === 'string') {
    isString = isUnknown
}

// 類型斷言

isNumber = <number>isUnknown
isString = isUnknown as string


// 被註記為 unknown 的數變在透過"縮小型別"或"類型斷言"確保目前變數的型別前，皆無法進行操作

isAny.hello = 'hello'
// error
// isUnknown.hello = 'hello'

isAny.greet('hi')
// error
// isUnknown.greet('hi')


const unknownObj: unknown = {
    hello: 'hello'
}

type Hello = {
    hello: string
}

// error
// unknownObj.hello

console.log((<Hello>unknownObj).hello)
console.log((unknownObj as Hello).hello)

// 任何型別 T 只要和 unknown 交集（intersection）unknown 就會被 T 吸收

type T00 = unknown & null // null
type T01 = unknown & undefined // undefined
type T02 = unknown & null & undefined // never
type T03 = unknown & string // string
type T04 = unknown & string[] // string[]
type T05 = unknown & unknown // unknown
type T06 = unknown & any // any

// 任何型別 T 只要和 unknown 聯集（union）若 T 不為 any 型別，則 unknown 會吸收掉 T

type T07 = unknown | null // unknown
type T08 = unknown | undefined // unknown
type T09 = unknown | null | undefined // unknown
type T10 = unknown | string // unknown
type T11 = unknown | string[] // unknown
type T12 = unknown | unknown // unknown
type T13 = unknown | any // any