import Role from '../characters/Role'
import Character from '../characters/characters'
import BasicSword from '../weapons/basic/Sword'

export default class Swordsman extends Character {
    constructor(name: string) {
        super(name, Role.Swordsman, new BasicSword())
    }
}