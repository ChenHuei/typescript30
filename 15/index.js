"use strict";
// 如 key 的型別為 string 其 value 也須為 string
var _a;
var obj1 = {
    aaa: 'aaa',
    bbb: 'bbb'
};
var obj2 = (_a = {
        12: 'hi'
    },
    _a[45678] = 'hello',
    _a);
var obj3 = {};
var obj5 = [];
// error
// const obj4: StringType = [1,2,3]
console.log(obj2[0]);
console.log(obj2[12]);
