"use strict";
// Array
var numbers = [111, 222, 333];
var strings = ['1', '2', '3'];
numbers[1] = 555;
// error
// numbers[1] = '5'
numbers.push(666);
// error
// numbers.push('6')
numbers.concat([777]);
// error
// numbers.concat(['7'])
var objArray1 = [
    { message: 'hi' },
    { message: '你好' }
];
var objArray2 = [
    { message: 'hi', language: 'en' },
    { message: '你好' }
];
var objArray3 = [
    { message: 'hi' },
    { message: '你好' },
    { message: 1 }
];
// 通常稱某陣列儲存元素之型態集合為同一種時，稱為 Typed Array
// 另也可稱 Homogeneous Type Array (同質性陣列)
var objArray4 = [{ name: 'a' }, { name: 'b' }];
var objArray5 = [{ name: 'a' }, { name: 'b', age: 18 }];
var objArray6 = [{ name: 'a' }, { name: 111 }];
var objFunctions = [
    function add(num1, num2) { return num1 + num2; },
    function sub(num1, num2) { return num1 - num2; },
    function mul(num1, num2) { return num1 * num2; },
    function div(num1, num2) { return num1 / num2; },
];
var arrayArray = [
    [111, 222, 333],
    ['1', '2', '3'],
    [true, false, true, false]
];
var testArray = [
    [111, 222, 333],
    ['1', '2', '3'],
    [true, true, 1],
    ['string', undefined]
];
// 空陣列會被推論為 any，因此必須積極註記
