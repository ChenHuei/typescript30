import Weapon from '../weapons/Weapon'
import Armour from '../armours/Armour'

export default interface EquipmentFactory {
    createWeapon(): Weapon
    createArmour(): Armour
}