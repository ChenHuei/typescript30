import Weapon from '../Weapon'
import StabAttack from '../../abilities/StabAttack'
import Role from '../../characters/Role'

export default class BasicWand extends Weapon {
    public readonly name = 'Basic Wand'

    public availableRoles: Role[] = []

    public attackStrategy = new StabAttack()
}