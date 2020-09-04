"use strict";
// optional 選用屬性
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
var leo = {
    account: 'leo',
    password: '####'
};
var woody = {
    account: 'woody',
    password: '####',
    gender: Gender.Male
};
// optional parameters
var add = function (num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1 + 3;
    }
};
add(3);
var test = ['test'];
