import Role from './Role'
import Attack from '../abilities/Attack'
import Weapon from '../weapons/Weapon'

export default class Character {
    private attackRef: Attack

    constructor (
        public readonly name: string,
        public readonly role: Role,

        private weaponRef: Weapon
    ) {
        this.attackRef = this.weaponRef.attackStrategy
    }

    public introduce(): void {
        console.log(`
            Hi, I'm ${this.name} the ${this.role}
        `)
    }

    public equip(weapon: Weapon) {
        if (weapon.availableRoles.length ===0 || weapon.availableRoles.indexOf(this.role) > -1) {
            console.log(`
                ${this.name} has equipped ${weapon.name}!!
            `)
            this.weaponRef = weapon
            this.attackRef = weapon.attackStrategy
        } else {
            throw new Error(`${this.role} can't equip ${weapon.name}!`)
        }
    }

    public attack(target: Character) {
        this.attackRef.attack(this, target)
    }

    public switchAttackStrategy(type: Attack) {
        this.attackRef = type
    }
}