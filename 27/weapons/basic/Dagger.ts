import Weapon from '../Weapon'
import StabAttack from '../../abilities/StabAttack'
import Role from '../../characters/Role'

export default class BasicDagger implements Weapon {
    public readonly name = 'Basic Dagger'

    public attackStrategy = new StabAttack()

    public availableRoles = []
}