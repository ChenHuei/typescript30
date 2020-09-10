"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MeleeAttack_1 = __importDefault(require("../../abilities/MeleeAttack"));
var Role_1 = __importDefault(require("../../characters/Role"));
var BasicSword = /** @class */ (function () {
    function BasicSword() {
        this.name = 'Basic Sword';
        this.attackStrategy = new MeleeAttack_1.default();
        this.availableRoles = [
            Role_1.default.Swordsman,
            Role_1.default.Highwayman
        ];
    }
    return BasicSword;
}());
exports.default = BasicSword;
