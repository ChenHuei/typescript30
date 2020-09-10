"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MeleeAttack = /** @class */ (function () {
    function MeleeAttack() {
    }
    MeleeAttack.prototype.attack = function (self, target) {
        console.log("\n            " + self.name + " strikes " + target.name + " with a big sword!!\n        ");
    };
    return MeleeAttack;
}());
exports.default = MeleeAttack;
