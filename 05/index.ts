const numbers = [111, 222, 333]
const strings = ['1', '2', '3']

numbers[1] = 555
numbers.push(666)
numbers.concat([777])

// error
// numbers[1] = '5'
// numbers.push('6')
// numbers.concat(['7'])

// 通常稱某陣列儲存元素之型態集合為同一種時，稱為 Typed Array
// 另也可稱 Homogeneous Type Array (同質性陣列)

const objArray1 = [{name: 'a'}, {name: 'b'}]
const objArray2 = [{name: 'a'}, {name: 'b', age: 18}]
const objArray3 = [{name: 'a'}, {name: 111}]

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