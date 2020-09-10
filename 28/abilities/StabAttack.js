"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StabAttack = /** @class */ (function () {
    function StabAttack() {
    }
    StabAttack.prototype.attack = function (self, target) {
        console.log("\n            " + self.name + " stab through " + target.name + " with his sword!!\n        ");
    };
    return StabAttack;
}());
exports.default = StabAttack;
