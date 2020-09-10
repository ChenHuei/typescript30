import Weapon from '../Weapon'
import MeleeAttack from '../../abilities/MeleeAttack'
import Role from '../../characters/Role'

export default class BasicSword extends Weapon {
    public readonly name = 'Basic Sword'

    public availableRoles: Role[] = [
        Role.Swordsman,
        Role.Highwayman
    ]

    public attackStrategy = new MeleeAttack()
}