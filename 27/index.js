"use strict";
// Strategy Pattern 策略模式 II
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
策略模式最大的威力在於：

新增各種策略在子類別時，不需要覆蓋父類別的實踐，就可以間接切換策略達到目的。


新 feature：設計角色裝備武器的功能

1. 策略的介面綁定與宣告

weapons/Weapon.ts (負責每個武器必須實作的特性與規格)

weapons/basic/*
(根據介面規格，實踐不同的武器裝備)

2. 父類別建立策略參考點 (Reference Point)

characters.ts
(weaponRef 連結到 Weapon 型別的物件，並轉換 attackRef)

3. 藉由參考點進行功能傳遞

characters.ts
(equip 方法負責接 Weapon 型別的物件，加以調整攻擊策略)

4. 子類別選擇策略

profession/Swordsman & profession/Warlock
(constructor 進行策略的選擇：選擇武器)

*/
var Swordsman_1 = __importDefault(require("./profession/Swordsman"));
var Warlock_1 = __importDefault(require("./profession/Warlock"));
var Dagger_1 = __importDefault(require("./weapons/basic/Dagger"));
var Wand_1 = __importDefault(require("./weapons/basic/Wand"));
var leo = new Swordsman_1.default('Leo');
var woody = new Warlock_1.default('Woody');
try {
    leo.introduce();
    leo.attack(woody);
    woody.introduce();
    woody.attack(leo);
    leo.equip(new Dagger_1.default());
    leo.attack(woody);
    leo.equip(new Wand_1.default());
    leo.attack(woody);
}
catch (error) {
    console.log(error);
}
