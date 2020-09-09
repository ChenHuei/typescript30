"use strict";
// class accessors
/*
類別的存取方法分為 取值(Getter) 和存值(Setter)

1. 若只有單純實踐某物件屬性的取值方法，可視為是 read-only 狀態
2. 取值方法不能有任何參數，且必須要有回傳值
3. 存值方法只能有一個參數

*/
var CircleGeometry = /** @class */ (function () {
    function CircleGeometry(radius) {
        this.radius = radius;
        this.PI = 3.14;
    }
    Object.defineProperty(CircleGeometry.prototype, "area", {
        get: function () {
            return this.PI * Math.pow(this.radius, 2);
        },
        set: function (value) {
            this.radius = Math.pow((value / this.PI), 0.5);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleGeometry.prototype, "circumference", {
        get: function () {
            return 2 * this.PI * this.radius;
        },
        set: function (value) {
            this.radius = value / 2 / this.PI;
        },
        enumerable: false,
        configurable: true
    });
    return CircleGeometry;
}());
var circle = new CircleGeometry(2);
console.log(circle.area);
circle.area = 25 * circle.PI;
console.log(circle.radius);
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.coyotes = 'test';
    return Test;
}());
console.log(Test.coyotes);
Test.coyotes = 'aaaa';
console.log(Test.coyotes);
