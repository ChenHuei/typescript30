// Array

const numbers = [111, 222, 333]
const strings = ['1', '2', '3']

numbers[1] = 555
// error
// numbers[1] = '5'

numbers.push(666)
// error
// numbers.push('6')

numbers.concat([777])
// error
// numbers.concat(['7'])

const objArray1 = [
    { message: 'hi' },
    { message: '你好' }
]

const objArray2 = [
    { message: 'hi', language: 'en' },
    { message: '你好' }
]

const objArray3 = [
    { message: 'hi' },
    { message: '你好' },
    { message: 1 }
]

// 通常稱某陣列儲存元素之型態集合為同一種時，稱為 Typed Array
// 另也可稱 Homogeneous Type Array (同質性陣列)

const objArray4 = [{name: 'a'}, {name: 'b'}]
const objArray5 = [{name: 'a'}, {name: 'b', age: 18}]
const objArray6 = [{name: 'a'}, {name: 111}]

const objFunctions = [
    function add(num1: number, num2: number) { return num1 + num2 },
    function sub(num1: number, num2: number) { return num1 - num2 },
    function mul(num1: number, num2: number) { return num1 * num2 },
    function div(num1: number, num2: number) { return num1 / num2 },
]

const arrayArray = [
    [111, 222, 333],
    ['1', '2', '3'],
    [true, false, true, false]
]


const testArray = [
    [111, 222, 333],
    ['1', '2', '3'],
    [true, true, 1],
    ['string', undefined]
]

// 空陣列會被推論為 any，因此必須積極註記