import Weapon from '../Weapon'
import MagicAttack from '../../abilities/MagicAttack'
import Role from '../../characters/Role'

export default class BasicWand extends Weapon {
    public readonly name = 'Basic Wand'

    public availableRoles: Role[] = [
        Role.Warlock
    ]

    public attackStrategy = new MagicAttack()
}