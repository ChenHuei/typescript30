import Role from '../characters/Role'
import Character from '../characters/characters'
import BasicWand from '../weapons/basic/Wand'

export default class Warlock extends Character {
    constructor(name: string) {
        super(name, Role.Warlock, new BasicWand())
    }
}