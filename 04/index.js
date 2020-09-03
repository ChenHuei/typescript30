"use strict";
// function
// 隱性 any (Implicit Any)
// 大部分的情況下，只要定義任何函式 TypeScript 通常會無條件推論函式內的參數（Parameters）為 any 型別
// 推論與註記
// 分別為輸入參數與輸出部分，大部分情況下，只要我們提供函式參數的註記，輸出就可以間接被 TypeScript 推論出來
var say = function () {
    console.log('hi');
};
var add = function (param1, param2) {
    return param1 + param2;
};
var fun1 = function () {
    return undefined;
};
var fun2 = function () {
    return undefined;
};
// error
// const fun3 = function(): undefined {}
var fun4 = function () {
    return undefined;
};
