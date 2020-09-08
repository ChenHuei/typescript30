"use strict";
// Indexable Types
var _a;
var obj1 = {
    aaa: 'aaa',
    bbb: 'bbb',
};
var obj3 = (_a = {
        12: 'hi'
    },
    _a[45678] = 'hello',
    _a);
console.log(obj3[0]);
console.log(obj3[12]);
var obj4 = {};
var obj5 = ['hi'];
var toyota = {
    type: 'plus',
    name: 'RV'
};
var leo = {
    email: 'leo@gmail.com',
    password: 'leo',
    age: 20
};
leo.age;
var createCounter = function () {
    var value;
    var initializedValue;
    var counter = (function (startNumber) {
        value = startNumber;
        initializedValue = startNumber;
    });
    counter.increment = function () {
        value++;
        return value;
    };
    counter.reset = function () {
        value = initializedValue;
    };
    Object.defineProperty(counter, 'value', {
        get: function () {
            return value;
        }
    });
    return counter;
};
var counter = createCounter();
counter(5);
console.log(counter.value); // 5
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value); // 8
counter.reset();
console.log(counter.value); // 5
