import Role from './Role'
import Weapon from '../weapons/Weapon'
import Armour from '../armours/Armour'
import Equipment from '../equipments/Equipment'

export default class Character {
    constructor (
        public readonly name: string,
        public readonly role: Role,

        private weaponRef: Weapon,
        private armourRef: Armour
    ) {}

    public introduce(): void {
        console.log(`
            Hi, I'm ${this.name} the ${this.role}
        `)
    }

    public equip(equipment: Equipment) {
        if (equipment.availableRoles.length === 0 || equipment.availableRoles.indexOf(this.role) > -1) {
            if (equipment instanceof Weapon) {
                this.weaponRef = equipment
            }
            if (equipment instanceof Armour) {
                this.armourRef = equipment
            }
        } else {
            throw new Error(`
                ${this.role} can't equip ${equipment.name}!
            `)
        }

        console.log(`
            ${this.name} has equipped a ${equipment.type} - ${equipment.name}
        `);
    }

    public attack(target: Character) {
        this.weaponRef.attack(this, target)
    }
}