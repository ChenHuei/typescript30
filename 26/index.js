"use strict";
// Strategy Pattern 策略模式
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*

根據不同情形，在程式執行時可以靈活地轉換演算法（策略）而不需要再另訂新的類別與類別繼承的動作

1. 策略的介面綁並與宣告

abilities/Attack.ts
(每一個策略必須綁定某介面以確保實踐出來的功能是相同的，內部演算法可以不同)

abilities/MeleeAttack.ts & abilities/MagicAttack
(根據介面規格，實踐不同的攻擊策略)

2. 父類別建立策略參考點 (Reference Point)

characters.ts
(一個類別屬性 attackRef 負責連結到 Attack 型別的物件)

3. 藉由參考點進行功能傳遞

characters.ts
(attack 方法藉由參考點 attackRef 指定到若干策略進行呼叫 attack)

4. 子類別選擇策略

profession/Swordsman & profession/Warlock
(constructor 進行策略的選擇)

*/
var Swordsman_1 = __importDefault(require("./profession/Swordsman"));
var Warlock_1 = __importDefault(require("./profession/Warlock"));
var leo = new Swordsman_1.default('Leo');
var woody = new Warlock_1.default('Woody');
leo.introduce();
leo.attack(woody);
woody.introduce();
woody.attack(leo);
