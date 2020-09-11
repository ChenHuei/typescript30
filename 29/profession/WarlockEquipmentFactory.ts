import EquipmentFactory from "../equipments/EquipmentFactory";
import BasicWand from "../weapons/basic/Wand";
import BasicRobe from "../armours/basic/Robe";

class WarlockEquipmentFactory implements EquipmentFactory {
    public createWeapon() {
        return new BasicWand()
    }

    public createArmour() {
        return new BasicRobe()
    }
}

export default WarlockEquipmentFactory