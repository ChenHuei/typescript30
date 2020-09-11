import Character from '../characters/characters'
import Attack from './Attack'

export default class StabAttack implements Attack {
    public attack(self: Character, target: Character) {
        console.log(`
            ${self.name} stab through ${target.name} with his sword!!
        `)
    }
}