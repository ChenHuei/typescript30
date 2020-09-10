"use strict";
// class 的型別註記與推論
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
class 型別

宣告新的類別，本身就是在創造新的型別化名，也就是說，我們可以使用類別名稱作為變數的型別註記（Type Annotation）

若變數被賦予的值為類別 C 建構出來的物件，則 TypeScript 會自動推論該變數之型別為 C，因此將符合廣義物件的完整性原則：

1. 不能夠新增屬性
2. 原有屬性下不能賦予錯誤型別的值
3. 如要複寫，賦予的值必須是類別 C 建構出來的物件

class extend 型別繼承

若宣告 class C，及 class D 為繼承 C 的子類別

1. 若變數 A 被註記型別為 C，A 除了可被賦予 C 建構出的物件外，D 建構出的物件也可被賦予
2. 若變數 B 被註記型別為 D，在 D 繼承 C 的過程中，如未額外定義 C 本身沒有的成員下，C 所建構出的物件也可被指派至 B

class 型別等效理論

若宣告兩個類別 C1, C2，其中 C1, C2 的成員皆為 public，且成員名稱與對應型別皆相同，typescript 判定 C1 equal to C2

class C1 {
    constructor(public prop: string) {}

    public print(): string {
        return this.prop
    }
}

class C2 {
    constructor(public prop: string) {}

    public print(): string {
        return this.prop
    }
}

const obj: C1 = new C2('C2')

*/
var Color;
(function (Color) {
    Color[Color["White"] = 0] = "White";
    Color[Color["Black"] = 1] = "Black";
    Color[Color["Brown"] = 2] = "Brown";
    Color[Color["Grey"] = 3] = "Grey";
    Color[Color["Rainbow"] = 4] = "Rainbow";
})(Color || (Color = {}));
var Horse = /** @class */ (function () {
    function Horse(name, color, type, noise) {
        if (noise === void 0) { noise = 'heeeeeeee'; }
        this.name = name;
        this.color = color;
        this.type = type;
        this.noise = noise;
    }
    Horse.prototype.maskNoise = function () {
        console.log(this.noise);
    };
    Horse.prototype.printInfo = function () {
        console.log(this.info);
    };
    Horse.prototype.info = function () {
        return "It's " + this.name + " the " + Color[this.color] + " " + this.type;
    };
    return Horse;
}());
var Leo = new Horse('leo', Color.Black, 'Pony');
Leo.name = 'Leoooo';
Leo = new Horse('leo', Color.White, 'Pony');
// error (根據廣義物件的完整性原則)
// Leo.color = 'Red'
// Leo.isMale = true
// 繼承過後的型別推論與註記
var Unicorn = /** @class */ (function (_super) {
    __extends(Unicorn, _super);
    function Unicorn(name) {
        return _super.call(this, name, Color.Rainbow, 'mystical unicorn', 'n~heeeeeeee') || this;
    }
    Unicorn.prototype.info = function () {
        return "It's a " + this.type + "!! It's name is " + this.name;
    };
    Unicorn.prototype.puke = function () {
        console.log('Puking rainbow vomit!!');
    };
    return Unicorn;
}(Horse));
var Woody = new Unicorn('woody');
Woody.puke();
var Wesley = new Unicorn('wesley'); // 被註記為父類別的變數可以指派子類別的物件 - 隸屬於同一個原型鍊
// error
// Wesley.puke()
// class 型別等效理論
var C1 = /** @class */ (function () {
    function C1(prop) {
        this.prop = prop;
    }
    C1.prototype.print = function () {
        return this.prop;
    };
    return C1;
}());
var C2 = /** @class */ (function () {
    function C2(prop) {
        this.prop = prop;
    }
    C2.prototype.print = function () {
        return this.prop;
    };
    return C2;
}());
var obj1 = new C2('C2');
var C3 = /** @class */ (function () {
    function C3(prop, privateProp) {
        this.prop = prop;
        this.privateProp = privateProp;
    }
    C3.prototype.print = function () {
        return this.prop;
    };
    C3.prototype.privatePrint = function () {
        return this.privateProp;
    };
    return C3;
}());
var C4 = /** @class */ (function () {
    function C4(prop, privateProp) {
        this.prop = prop;
        this.privateProp = privateProp;
    }
    C4.prototype.print = function () {
        return this.prop;
    };
    C4.prototype.privatePrint = function () {
        return this.privateProp;
    };
    return C4;
}());
function print(obj) {
    console.log(obj);
}
print({ name: 'name' });
print({ name: 'name' });
print({ name: 'name' });
print({ name: 'name' });
