import Role from '../characters/Role'
import Character from '../characters/characters'
import MeleeAttack from '../abilities/MeleeAttack'

export default class Swordsman extends Character {
    constructor(name: string) {
        super(name, Role.Swordsman, new MeleeAttack())
    }
}