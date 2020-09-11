import Role from '../characters/Role'
import Character from '../characters/characters'
import SwordsmanEquipmentFactory from './SwordsmanEquipmentFactory'

export default class Swordsman extends Character {
    constructor(name: string) {
        const SEF = new SwordsmanEquipmentFactory()

        super(
            name, 
            Role.Swordsman, 
            SEF.createWeapon(),
            SEF.createArmour()
        )
    }
}