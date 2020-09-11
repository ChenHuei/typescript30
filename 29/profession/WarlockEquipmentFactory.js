"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Wand_1 = __importDefault(require("../weapons/basic/Wand"));
var Robe_1 = __importDefault(require("../armours/basic/Robe"));
var WarlockEquipmentFactory = /** @class */ (function () {
    function WarlockEquipmentFactory() {
    }
    WarlockEquipmentFactory.prototype.createWeapon = function () {
        return new Wand_1.default();
    };
    WarlockEquipmentFactory.prototype.createArmour = function () {
        return new Robe_1.default();
    };
    return WarlockEquipmentFactory;
}());
exports.default = WarlockEquipmentFactory;
