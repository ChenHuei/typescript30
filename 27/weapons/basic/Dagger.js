"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var StabAttack_1 = __importDefault(require("../../abilities/StabAttack"));
var BasicDagger = /** @class */ (function () {
    function BasicDagger() {
        this.name = 'Basic Dagger';
        this.attackStrategy = new StabAttack_1.default();
        this.availableRoles = [];
    }
    return BasicDagger;
}());
exports.default = BasicDagger;
