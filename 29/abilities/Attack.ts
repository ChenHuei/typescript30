import Character from '../characters/characters'

export default interface Attack {
    attack(self: Character, target: Character): void
}