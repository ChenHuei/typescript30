import Character from '../characters/characters'
import Attack from './Attack'

export default class MagicAttack implements Attack {
    public attack(self: Character, target: Character) {
        console.log(`
            ${self.name} casts magic and pierced through ${target.name}!!
        `)
    }
}