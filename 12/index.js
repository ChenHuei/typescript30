"use strict";
// interface
/*
Interface 可以藉由關鍵字 interface 宣告出來，介面裡面的詳細定義可為：

物件格式：屬性 + 型別
單一函式格式：沒有任何屬性 (不一定需要標上函式名稱)

混合格式：即『物件格式』與『單一函式格式』混合在一起

=> 多一鍵、少一鍵與屬性對應型別錯誤都會報錯

*/
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
// 以下結果與使用 type 相同
var printInfo = function (user) {
    console.log(user.id);
    console.log(user.name);
};
// error
// printInfo({
//     id: 0,
//     name: 'leo',
//     birth: new Date(),
//     print() {},
// })
var leo = {
    id: 0,
    name: 'leo',
    birth: new Date(),
    print: function () { },
};
printInfo(leo);
