"use strict";
/*
    1. 介面屬性對應的函式可以被超載
    2. 被超載的函式名稱必須相同

    => 若某物件實踐該介面時，必須符合該介面裡任一超載過的函式之情形。
*/
var implementAddition = {
    addition: function (p1, p2) {
        if (typeof p1 === 'number' && typeof p2 === 'number') {
            return p1 + p2;
        }
        else if (typeof p1 === 'string' && typeof p2 === 'string') {
            return parseInt(p1) + parseInt(p2);
        }
        throw new Error('error');
    }
};
var add1 = {
    add: function (p1, p2) {
        return p1 + p2;
    }
};
