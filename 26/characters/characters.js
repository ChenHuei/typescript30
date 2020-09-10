"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character = /** @class */ (function () {
    function Character(name, role, attackRef) {
        this.name = name;
        this.role = role;
        this.attackRef = attackRef;
    }
    Character.prototype.introduce = function () {
        console.log("\n            Hi, I'm " + this.name + " the " + this.role + "\n        ");
    };
    Character.prototype.attack = function (target) {
        this.attackRef.attack(this, target);
    };
    return Character;
}());
exports.default = Character;
