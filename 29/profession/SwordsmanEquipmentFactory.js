"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sword_1 = __importDefault(require("../weapons/basic/Sword"));
var Armour_1 = __importDefault(require("../armours/basic/Armour"));
var SwordsmanEquipmentFactory = /** @class */ (function () {
    function SwordsmanEquipmentFactory() {
    }
    SwordsmanEquipmentFactory.prototype.createWeapon = function () {
        return new Sword_1.default();
    };
    SwordsmanEquipmentFactory.prototype.createArmour = function () {
        return new Armour_1.default();
    };
    return SwordsmanEquipmentFactory;
}());
exports.default = SwordsmanEquipmentFactory;
