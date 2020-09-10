// class 結合 interface

/*

class 對 interface 進行綁定

若宣告 class C 與 interface I，其中 C 想對 I 進行綁定，需使用 implements，且一旦 C 綁定了 I，C 必須要其串 I 裡面所有的成員

class C implements I { ... }
class C implements I1, I2 { ... }

類別繼承與介面綁定的不同 (class inheritance V.S. interface implements)

class 一次只能繼承一個父類別，可以同時漸漸多個 interface

class D extends C implements I1, I2, ..., In { ... }

類別綁定介面的推論與註記機制

任何類別 C 儘管綁定介面 I1, I2, ..., In，建構出的物件之型別一律指向 C
但若變數被積極註記為 I1, I2, ..., In 其中任一介面，該變數依然能被指派 C 所建構出來的物件 (該物件至少符合該介面的實作)，

而其中兩者的差別在於

1. 若變數被註記為 C，該變數出聊呼叫類別的 public 成員外，也可呼叫 I1, I2, ..., In 融合過後的屬性與方法
2. 若變數被註記為 I1, I2, ..., In 其中任一介面，只能呼叫該介面裡的屬性與方法

舉例：
Character 與 Monster 皆實作 InterfaceCharacter，而裡面的 attack 方法的參數被積極註記為 InterfaceCharacter，
而非 Character 或 Monster，代表任何實踐過 InterfaceCharacter 皆可被帶入，作為參數的值

子類別繼承父類別，除了擁有父類別 public 與 protected 模式的成員外，也同時繼承父類別實踐之介面的性質

*/

enum Role {
    Swordsman = 'Swordsman',
    Warlock = 'Warlock',
    Highwayman = 'Highwayman',
    BountyHunter = 'BountyHunter',
    Monster = 'Monster'
}

interface InterfaceCharacter {
    name: string
    role: Role
    attack(target: InterfaceCharacter): void
}

interface InterfaceState {
    health: number,
    mana: number,
    strength: number,
    defense: number
}

class Character implements InterfaceCharacter, InterfaceState {
    public health: number = 50
    public mana: number = 50
    public strength: number = 50
    public defense: number = 50

    constructor(
        public name: string,
        public role: Role
    ) {}

    private RoleVerbs = {
        [Role.Swordsman]: 'attacking',
        [Role.Warlock]: 'cursing',
        [Role.Highwayman]: 'ambushing',
        [Role.BountyHunter]: 'threatening'
    }

    private printRoleVerb(): string {
        return this.role === Role.Monster ? '' : this.RoleVerbs[this.role]
    }

    public attack(target: InterfaceCharacter): void {
        console.log(`${this.name} is ${this.printRoleVerb()} ${target.name}`!!)
    }
}

class Monster implements InterfaceCharacter {
    public role = Role.Monster

    constructor(public name: string) {}

    public attack(target: InterfaceCharacter): void {
        console.log(`${this.name} is attacking the ${target.role} - ${target.name}`)
    }
}
const Evil = new Monster('Evil')

const Leo = new Character('Leo', Role.Swordsman)
const Woody = new Character('Woody', Role.Highwayman)

Leo.attack(Woody)
Woody.attack(Leo)

const Wesley = new Character('Wesley', Role.Swordsman)
const Ding: InterfaceCharacter = new Character('Ding', Role.Warlock)

Wesley.name
Wesley.health

Ding.name

// error (被註記為 InterfaceCharacter 因此不能呼叫 InterfaceState 裡的屬性)
// Ding.health


class BountyHunter extends Character {
    public hostages: InterfaceCharacter[] = []

    constructor (name: string) {
        super(name, Role.BountyHunter)
    }

    private getTargetInfo(target: InterfaceCharacter) {
        return `${target.name} the ${target.role}`
    }

    public capture(target: InterfaceCharacter, successRate: number): void {
        if (Math.random() > (1 - successRate)) {
            this.hostages.push(target)
            console.log(`${this.name} has captured ${this.getTargetInfo(target)}`)
        } else {
            console.log(`${this.name} failed to capture ${this.getTargetInfo(target)}`)
        }
    }

    public sellHostages(): void {
        const price = this.hostages.length * 1000
        const totalHostagesInfo = this.hostages.map(item => this.getTargetInfo(item)).join('\n')

        console.log(`
            ${this.name} sells all the hostages, including:
            ${totalHostagesInfo}

            Receive Gold: $${price}
        `)

        this.hostages = []
    }
    
}

const Royal = new BountyHunter('Royal')

Royal.capture(Evil, 0.5)
Royal.capture(Leo, 0.5)
Royal.capture(Woody, 0.5)
Royal.capture(Wesley, 0.5)
Royal.capture(Ding, 0.5)

Royal.sellHostages()

Royal.attack(Evil)
Evil.attack(Royal)