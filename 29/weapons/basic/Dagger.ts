import Weapon from '../Weapon'
import StabAttack from '../../abilities/StabAttack'
import Role from '../../characters/Role'

export default class BasicDagger extends Weapon {
    public readonly name = 'Basic Dagger'

    public availableRoles: Role[] = []

    public attackStrategy = new StabAttack()
}