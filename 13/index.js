"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
var leo = {
    account: 'leo',
    password: '####',
};
var woody = {
    account: 'woody',
    password: '####',
    gender: Gender.Other
};
// error
// interface I23 extends I2, I3 {}
// interface I123 extends I1, I2, I3 {}
/*
interface vs type

介面（Interface） - 跟規格的概念很像，可以擴充設計、組裝出更複雜的功能規格

型別（Type）- 代表靜態的資料型態，因此型別一但被定義出來則恆為固定的狀態。儘管可以利用型態的複合（intersection 與 union）看似達到型別擴展的感覺，然而這個行為並不叫作型別擴展，而是創造出新的靜態型別
*/ 
