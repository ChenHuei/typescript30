import Role from '../characters/Role'
import Character from '../characters/characters'
import WarlockEquipmentFactory from './WarlockEquipmentFactory'

export default class Warlock extends Character {
    constructor(name: string) {
        let WEF = new WarlockEquipmentFactory()

        super(
            name,
            Role.Warlock,
            WEF.createWeapon(),
            WEF.createArmour()
        )
    }
}