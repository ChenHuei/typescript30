"use strict";
// 型別推論
var myName = 'name';
var age = 20;
var isMale = true;
// Nullable Types 會被推論為 any
var type1 = undefined;
var type2 = null;
// 型別推論目的
// 防止賦予不同型別的值到推論後的變數上
myName = 'leo';
// error
// myName = 18
// Delayed Initialization
// 每當我們對任何變數不立即指派值 (equal 帶入 undefined)，該變數會無條件被視為 any 型別
var message;
message = 'message';
message = 1;
// 未確定變數被正式丟入合法的值之前的這段空間，不能使用該變數，可以理解為 TDZ
var test1;
// error
// let test2 = test1
test1 = 'test1';
