"use strict";
var obj1 = {
    name: 'leo',
    age: 20,
    type1: undefined,
    type2: null
};
obj1 = {
    name: 'leo',
    age: 22,
    type1: undefined,
    type2: null
};
obj1.age = 24;
// error
// obj1 = {
//     name: 'leo',
//     age: 22,
//     type2: null
// }
// obj1 = {
//     name: 'leo',
//     age: 22,
//     type1: undefined,
//     type2: null,
//     isMale: boolean
// }
// obj1.job = 'FE'
// JS 物件的型別會按照物件本身的格式被推論出來
// 對物件裡的屬性覆寫值，其值的型別與該屬性對應的型別相同，對物件整體覆寫，其覆寫的物件格式必須完全相同
// 物件的屬性若直接代入 Nullable Type，則不會被視為 any 型別，而是等同於該 Nullable Type 本身
// delete 目前在 TS 就算被使用在刪除物件屬性上，TS 依舊不會警告，Reference: https://github.com/Microsoft/TypeScript/issues/13783
// Object 型別
var obj2 = { name: 'obj2' };
// error
// 覆寫正確型別的值 (?!)
// obj2.name = 'obj22'
// 覆寫錯誤型別的值
// obj2.name = 2
// 新增 key
// obj2.age = 20
// 完全覆寫物件 (is ok ?!)
obj2 = { age: 20 };
// TS 認為 object 型別指的是任何 JS 物件（儘管格式不同）都可以被套入，但是不允許對該物件做細部微調
// Q: JS 的 Array 或 Function 也是物件的一種表示方式，是不是代表也可以覆寫在 object 型別下呢？
// error 
// obj2 = 123
obj2 = [1, 2, 3];
obj2 = function () { };
obj2 = new Object();
obj2 = new String('obj');
obj2 = new Number(12);
obj2 = Object;
obj2 = Array;
// A: Yes!
// 狹義物件的定義：限於 JSON 格式的物件
// 廣義物件的定義：包含 JSON 格式的物件、陣列、函式、類別、類別創建出之物件
