import Attack from '../abilities/Attack'
import MeleeAttack from '../abilities/MeleeAttack'
import Character from '../characters/characters'
import Role from '../characters/Role'

export default abstract class Weapon {
    abstract name: string = 'Weapon Name'

    abstract availableRoles: Role[] = []
    abstract attackStrategy: Attack = new MeleeAttack()

    public switchAttackStrategy(type: Attack): void {
        this.attackStrategy = type
    }
    public attack(self: Character, target: Character): void {
        this.attackStrategy.attack(self, target)
    }
}