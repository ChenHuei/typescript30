import Role from './Role'
import Weapon from '../weapons/Weapon'

export default class Character {
    constructor (
        public readonly name: string,
        public readonly role: Role,

        private weaponRef: Weapon
    ) {}

    public introduce(): void {
        console.log(`
            Hi, I'm ${this.name} the ${this.role}
        `)
    }

    public equip(weapon: Weapon) {
        if (weapon.availableRoles.length === 0 || weapon.availableRoles.indexOf(this.role) > -1) {
            this.weaponRef = weapon
        } else {
            throw new Error(`
                ${this.role} can't equip ${weapon.name}!
            `)
        }
    }

    public attack(target: Character) {
        this.weaponRef.attack(this, target)
    }
}