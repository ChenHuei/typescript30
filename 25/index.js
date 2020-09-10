"use strict";
// class 結合 interface
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

class 對 interface 進行綁定

若宣告 class C 與 interface I，其中 C 想對 I 進行綁定，需使用 implements，且一旦 C 綁定了 I，C 必須要其串 I 裡面所有的成員

class C implements I { ... }
class C implements I1, I2 { ... }

類別繼承與介面綁定的不同 (class inheritance V.S. interface implements)

class 一次只能繼承一個父類別，可以同時漸漸多個 interface

class D extends C implements I1, I2, ..., In { ... }

類別綁定介面的推論與註記機制

任何類別 C 儘管綁定介面 I1, I2, ..., In，建構出的物件之型別一律指向 C
但若變數被積極註記為 I1, I2, ..., In 其中任一介面，該變數依然能被指派 C 所建構出來的物件 (該物件至少符合該介面的實作)，

而其中兩者的差別在於

1. 若變數被註記為 C，該變數出聊呼叫類別的 public 成員外，也可呼叫 I1, I2, ..., In 融合過後的屬性與方法
2. 若變數被註記為 I1, I2, ..., In 其中任一介面，只能呼叫該介面裡的屬性與方法

舉例：
Character 與 Monster 皆實作 InterfaceCharacter，而裡面的 attack 方法的參數被積極註記為 InterfaceCharacter，
而非 Character 或 Monster，代表任何實踐過 InterfaceCharacter 皆可被帶入，作為參數的值

子類別繼承父類別，除了擁有父類別 public 與 protected 模式的成員外，也同時繼承父類別實踐之介面的性質

*/
var Role;
(function (Role) {
    Role["Swordsman"] = "Swordsman";
    Role["Warlock"] = "Warlock";
    Role["Highwayman"] = "Highwayman";
    Role["BountyHunter"] = "BountyHunter";
    Role["Monster"] = "Monster";
})(Role || (Role = {}));
var Character = /** @class */ (function () {
    function Character(name, role) {
        var _a;
        this.name = name;
        this.role = role;
        this.health = 50;
        this.mana = 50;
        this.strength = 50;
        this.defense = 50;
        this.RoleVerbs = (_a = {},
            _a[Role.Swordsman] = 'attacking',
            _a[Role.Warlock] = 'cursing',
            _a[Role.Highwayman] = 'ambushing',
            _a[Role.BountyHunter] = 'threatening',
            _a);
    }
    Character.prototype.printRoleVerb = function () {
        return this.role === Role.Monster ? '' : this.RoleVerbs[this.role];
    };
    Character.prototype.attack = function (target) {
        console.log(this.name + " is " + this.printRoleVerb() + " " + target.name);
    };
    return Character;
}());
var Monster = /** @class */ (function () {
    function Monster(name) {
        this.name = name;
        this.role = Role.Monster;
    }
    Monster.prototype.attack = function (target) {
        console.log(this.name + " is attacking the " + target.role + " - " + target.name);
    };
    return Monster;
}());
var Evil = new Monster('Evil');
var Leo = new Character('Leo', Role.Swordsman);
var Woody = new Character('Woody', Role.Highwayman);
Leo.attack(Woody);
Woody.attack(Leo);
var Wesley = new Character('Wesley', Role.Swordsman);
var Ding = new Character('Ding', Role.Warlock);
Wesley.name;
Wesley.health;
Ding.name;
// error (被註記為 InterfaceCharacter 因此不能呼叫 InterfaceState 裡的屬性)
// Ding.health
var BountyHunter = /** @class */ (function (_super) {
    __extends(BountyHunter, _super);
    function BountyHunter(name) {
        var _this = _super.call(this, name, Role.BountyHunter) || this;
        _this.hostages = [];
        return _this;
    }
    BountyHunter.prototype.getTargetInfo = function (target) {
        return target.name + " the " + target.role;
    };
    BountyHunter.prototype.capture = function (target, successRate) {
        if (Math.random() > (1 - successRate)) {
            this.hostages.push(target);
            console.log(this.name + " has captured " + this.getTargetInfo(target));
        }
        else {
            console.log(this.name + " failed to capture " + this.getTargetInfo(target));
        }
    };
    BountyHunter.prototype.sellHostages = function () {
        var _this = this;
        var price = this.hostages.length * 1000;
        var totalHostagesInfo = this.hostages.map(function (item) { return _this.getTargetInfo(item); }).join('\n');
        console.log("\n            " + this.name + " sells all the hostages, including:\n            " + totalHostagesInfo + "\n\n            Receive Gold: $" + price + "\n        ");
        this.hostages = [];
    };
    return BountyHunter;
}(Character));
var Royal = new BountyHunter('Royal');
Royal.capture(Evil, 0.5);
Royal.capture(Leo, 0.5);
Royal.capture(Woody, 0.5);
Royal.capture(Wesley, 0.5);
Royal.capture(Ding, 0.5);
Royal.sellHostages();
Royal.attack(Evil);
Evil.attack(Royal);
