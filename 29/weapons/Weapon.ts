import Equipment from '../equipments/Equipment'
import Equipments from '../equipments/Equipments'
import Attack from '../abilities/Attack'
import MeleeAttack from '../abilities/MeleeAttack'
import Character from '../characters/characters'
import Role from '../characters/Role'

export default abstract class Weapon implements Equipment {
    abstract name: string = 'Weapon Name'

    abstract availableRoles: Role[] = []
    abstract attackStrategy: Attack = new MeleeAttack()

    public type: Equipments = Equipments.Weapon

    public switchAttackStrategy(type: Attack): void {
        this.attackStrategy = type
    }
    public attack(self: Character, target: Character): void {
        this.attackStrategy.attack(self, target)
    }
}