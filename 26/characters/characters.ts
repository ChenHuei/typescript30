import Role from './Role'
import Attack from '../abilities/Attack'

export default class Character {
    constructor (
        public readonly name: string,
        public readonly role: Role,

        private attackRef: Attack
    ) {}

    public introduce(): void {
        console.log(`
            Hi, I'm ${this.name} the ${this.role}
        `)
    }

    public attack(target: Character) {
        this.attackRef.attack(this, target)
    }
}