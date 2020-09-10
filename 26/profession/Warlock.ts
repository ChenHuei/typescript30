import Role from '../characters/Role'
import Character from '../characters/characters'
import MagicAttack from '../abilities/MagicAttack'

export default class Warlock extends Character {
    constructor(name: string) {
        super(name, Role.Warlock, new MagicAttack())
    }
}