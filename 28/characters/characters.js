"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character = /** @class */ (function () {
    function Character(name, role, weaponRef) {
        this.name = name;
        this.role = role;
        this.weaponRef = weaponRef;
    }
    Character.prototype.introduce = function () {
        console.log("\n            Hi, I'm " + this.name + " the " + this.role + "\n        ");
    };
    Character.prototype.equip = function (weapon) {
        if (weapon.availableRoles.length === 0 || weapon.availableRoles.indexOf(this.role) > -1) {
            this.weaponRef = weapon;
        }
        else {
            throw new Error("\n                " + this.role + " can't equip " + weapon.name + "!\n            ");
        }
    };
    Character.prototype.attack = function (target) {
        this.weaponRef.attack(this, target);
    };
    return Character;
}());
exports.default = Character;
