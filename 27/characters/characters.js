"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character = /** @class */ (function () {
    function Character(name, role, weaponRef) {
        this.name = name;
        this.role = role;
        this.weaponRef = weaponRef;
        this.attackRef = this.weaponRef.attackStrategy;
    }
    Character.prototype.introduce = function () {
        console.log("\n            Hi, I'm " + this.name + " the " + this.role + "\n        ");
    };
    Character.prototype.equip = function (weapon) {
        if (weapon.availableRoles.length === 0 || weapon.availableRoles.indexOf(this.role) > -1) {
            console.log("\n                " + this.name + " has equipped " + weapon.name + "!!\n            ");
            this.weaponRef = weapon;
            this.attackRef = weapon.attackStrategy;
        }
        else {
            throw new Error(this.role + " can't equip " + weapon.name + "!");
        }
    };
    Character.prototype.attack = function (target) {
        this.attackRef.attack(this, target);
    };
    Character.prototype.switchAttackStrategy = function (type) {
        this.attackRef = type;
    };
    return Character;
}());
exports.default = Character;
