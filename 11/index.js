"use strict";
// any
/*
出現 any 的時機

1. delayed initialization
2. function parameters
3. function return value
4. empty Array

*/
// unknown
var isAny;
var isUnknown;
var isNumber;
var isString;
var isBoolean;
var isNull;
var isUndefined;
isNumber = isAny;
isString = isAny;
isBoolean = isAny;
isNull = isAny;
isUndefined = isAny;
isAny = isAny;
isUnknown = isAny;
// error
// isNumber = isUnknown
// isString = isUnknown
// isBoolean = isUnknown
// isNull = isUnknown
// isUndefined = isUnknown
isAny = isAny;
isUnknown = isAny;
// 除了 unknown 和 any 型別外，其他型別的變數皆不能被 unknown 指派
// 因此可以透過"縮小型別"或"類型斷言"確保當下能斷定目前變數到底是什麼型別在對其進行操作，降低 any 型別帶來的不確定性
// 縮小型別
if (typeof isUnknown === 'number') {
    isNumber = isUnknown;
}
if (typeof isUnknown === 'string') {
    isString = isUnknown;
}
// 類型斷言
isNumber = isUnknown;
isString = isUnknown;
// 被註記為 unknown 的數變在透過"縮小型別"或"類型斷言"確保目前變數的型別前，皆無法進行操作
isAny.hello = 'hello';
// error
// isUnknown.hello = 'hello'
isAny.greet('hi');
// error
// isUnknown.greet('hi')
var unknownObj = {
    hello: 'hello'
};
// error
// unknownObj.hello
console.log(unknownObj.hello);
console.log(unknownObj.hello);
