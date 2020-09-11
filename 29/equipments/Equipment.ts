import Equipments from './Equipments'
import Role from '../characters/Role'

export default interface Equipment {
    name: string
    availableRoles: Role[]
    type: Equipments
}