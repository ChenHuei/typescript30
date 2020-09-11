import Weapons from './Weapons'
import Weapon from './Weapon'

import BasicSword from './basic/Sword'
import BasicWand from './basic/Wand'
import BasicDagger from './basic/Dagger'
// ...其他武器

export default class WeaponFactory {
    public createWeapon(type: Weapons): Weapon {
        switch(type) {
            case Weapons.BasicSword:  return new BasicSword();
            case Weapons.BasicWand:   return new BasicWand();
            case Weapons.BasicDagger: return new BasicDagger();
            // ...其他武器

            default:
                throw new Error(`${Weapon[type]} isn't registered!!`)
        }
    }
}