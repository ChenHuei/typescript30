import Equipments from '../equipments/Equipments'
import Equipment from '../equipments/Equipment'
import Role from '../characters/Role'

export default abstract class Armour implements Equipment {
    abstract name: string;

    abstract availableRoles: Role[];

    public type = Equipments.Armour;
}