"use strict";
// never
// The never type has the following characteristics:
// 1. never is a subtype of and assignable to every type.
//    never 型別為所有型別的 subtype
// => type test = T | never is equal to type test = T 
// 2. No type is a subtype of or assignable to never (except never itself).
//    任何型別除了 never 本身以外，皆不是 never 的 subtype。
// => type test = T & never is equal to type test = never
// 1. 無法跳脫出該函式或方法
var forever = function () {
    while (true) { }
};
// 2. 出現例外結果中斷執行
var mustError = function () {
    throw new Error('error');
};
var test1 = mustError();
var test2 = mustError();
// 總結
// 如果函式可以被完整的執行完畢，則 TypeScript 會根據 return 表達式回傳的值之型別或者是函式回不回傳值來作為根據進行型別推論
// 如果函式 100% 確定不能執行到結束的點，則 TypeScript 會無條件將該函式的回傳值之型別視為 never
// 如果函式被積極註記為 never 型別，則開發者必須確保該函式的實作 100% 不會有任何結束的執行點
