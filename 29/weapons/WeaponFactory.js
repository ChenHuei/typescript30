"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Weapons_1 = __importDefault(require("./Weapons"));
var Weapon_1 = __importDefault(require("./Weapon"));
var Sword_1 = __importDefault(require("./basic/Sword"));
var Wand_1 = __importDefault(require("./basic/Wand"));
var Dagger_1 = __importDefault(require("./basic/Dagger"));
// ...其他武器
var WeaponFactory = /** @class */ (function () {
    function WeaponFactory() {
    }
    WeaponFactory.prototype.createWeapon = function (type) {
        switch (type) {
            case Weapons_1.default.BasicSword: return new Sword_1.default();
            case Weapons_1.default.BasicWand: return new Wand_1.default();
            case Weapons_1.default.BasicDagger: return new Dagger_1.default();
            // ...其他武器
            default:
                throw new Error(Weapon_1.default[type] + " isn't registered!!");
        }
    };
    return WeaponFactory;
}());
exports.default = WeaponFactory;
