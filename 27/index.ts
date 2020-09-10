// Strategy Pattern 策略模式 II

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

import Swordsman from './profession/Swordsman'
import Warlock from './profession/Warlock'

import BasicDagger from './weapons/basic/Dagger'
import BasicWand from './weapons/basic/Wand'

const leo = new Swordsman('Leo')
const woody = new Warlock('Woody')

try {

    leo.introduce()
    leo.attack(woody)
    
    woody.introduce()
    woody.attack(leo)
    
    leo.equip(new BasicDagger())
    leo.attack(woody)

    leo.equip(new BasicWand())
    leo.attack(woody)

} catch(error) {
    console.log(error)
}

