"use strict";
// 型別化名 type
var leo = {
    name: 'leo',
    age: 20
};
var woody = {
    name: 'woody',
    age: 22
};
var printPerson = function (info) {
    console.log(info.name);
    console.log(info.age);
};
// error
// printPerson({
//     name: 'wesley',
//     age: 20,
//     isMale: true
// })
var ding = {
    name: 'ding',
    age: 18,
    isMale: true
};
printPerson(ding);
// 若某變數(ding)儲存某物件值且沒有被積極註記
// 當該變數(ding)作為某函式（或方法）的參數，其中該參數有型別 T，則 TypeScript 只會針對 ding 的格式至少符合型別 T，則通過
