import EquipmentFactory from '../equipments/EquipmentFactory'
import BasicSword from '../weapons/basic/Sword'
import BasicArmour from '../armours/basic/Armour'

class SwordsmanEquipmentFactory implements EquipmentFactory {
    public createWeapon() {
        return new BasicSword()
    }

    public createArmour() {
        return new BasicArmour()
    }
}
export default SwordsmanEquipmentFactory