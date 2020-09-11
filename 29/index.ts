// 工廠模式與抽象工廠模式 

/*
Factory Method

匯集性質相近的物件，讓使用者進行建立物件的統一窗口

工廠模式下，一個工廠類別 Factory (WeaponFactory) 會對應一個 Product (Weapon) 類別
而 createWeapon 就是俗稱的工廠方法

Abstract Factory Pattern

不用直接實踐出實體工廠，而是藉由介面或抽象類別先進行抽象化工廠的動作，再分別延伸出想要創建的實體工廠

以本篇舉的例子來說，儘管武器 Weapon 跟防具 Armour 是兩個完全不ㄧ樣的物件，但同時又為角色裝備的類型 Equipment
因此 Weapon 與 Armour 就是從 Equipment 實踐出來的物件抽象類別。

且當 Equipment 確定建好之後，就可以建立相對應的 EquipmentFactory 抽象工廠，
並延伸出不同職業的裝備工廠 (SwordsmanEquipmentFactory && WarlockEquipmentFactory)
*/

import Swordsman from './profession/Swordsman'
import Warlock from './profession/Warlock'

import Weapons from './weapons/Weapons'
import WeaponFactory from './weapons/WeaponFactory'

const weaponFactory = new WeaponFactory()

const BasicDagger = weaponFactory.createWeapon(Weapons.BasicDagger)
const BasicSword = weaponFactory.createWeapon(Weapons.BasicSword)

const leo = new Swordsman('Leo')
const woody = new Warlock('Woody')

try {
    leo.introduce()
    leo.attack(woody)
    
    woody.introduce()
    woody.attack(leo)
    
    leo.equip(BasicDagger)
    leo.attack(woody)
    
    leo.equip(BasicSword)
    leo.attack(woody)
    
} catch(error) {
    console.log(error);
}