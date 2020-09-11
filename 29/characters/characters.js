"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Weapon_1 = __importDefault(require("../weapons/Weapon"));
var Armour_1 = __importDefault(require("../armours/Armour"));
var Character = /** @class */ (function () {
    function Character(name, role, weaponRef, armourRef) {
        this.name = name;
        this.role = role;
        this.weaponRef = weaponRef;
        this.armourRef = armourRef;
    }
    Character.prototype.introduce = function () {
        console.log("\n            Hi, I'm " + this.name + " the " + this.role + "\n        ");
    };
    Character.prototype.equip = function (equipment) {
        if (equipment.availableRoles.length === 0 || equipment.availableRoles.indexOf(this.role) > -1) {
            if (equipment instanceof Weapon_1.default) {
                this.weaponRef = equipment;
            }
            if (equipment instanceof Armour_1.default) {
                this.armourRef = equipment;
            }
        }
        else {
            throw new Error("\n                " + this.role + " can't equip " + equipment.name + "!\n            ");
        }
        console.log("\n            " + this.name + " has equipped a " + equipment.type + " - " + equipment.name + "\n        ");
    };
    Character.prototype.attack = function (target) {
        this.weaponRef.attack(this, target);
    };
    return Character;
}());
exports.default = Character;
