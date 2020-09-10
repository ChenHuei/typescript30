// class 的型別註記與推論

/*
class 型別

宣告新的類別，本身就是在創造新的型別化名，也就是說，我們可以使用類別名稱作為變數的型別註記（Type Annotation）

若變數被賦予的值為類別 C 建構出來的物件，則 TypeScript 會自動推論該變數之型別為 C，因此將符合廣義物件的完整性原則：

1. 不能夠新增屬性
2. 原有屬性下不能賦予錯誤型別的值
3. 如要複寫，賦予的值必須是類別 C 建構出來的物件

class extend 型別繼承

若宣告 class C，及 class D 為繼承 C 的子類別

1. 若變數 A 被註記型別為 C，A 除了可被賦予 C 建構出的物件外，D 建構出的物件也可被賦予
2. 若變數 B 被註記型別為 D，在 D 繼承 C 的過程中，如未額外定義 C 本身沒有的成員下，C 所建構出的物件也可被指派至 B

class 型別等效理論

若宣告兩個類別 C1, C2，其中 C1, C2 的成員皆為 public，且成員名稱與對應型別皆相同，typescript 判定 C1 equal to C2

class C1 {
    constructor(public prop: string) {}

    public print(): string {
        return this.prop
    }
}

class C2 {
    constructor(public prop: string) {}

    public print(): string {
        return this.prop
    }
}

const obj: C1 = new C2('C2')

*/

enum Color {
    White,
    Black,
    Brown,
    Grey,
    Rainbow
}

class Horse {
    constructor(
        public name: string,
        public color: Color,
        public readonly type: string,
        private noise: string = 'heeeeeeee'
    ) {}

    public maskNoise(): void {
        console.log(this.noise);
    }

    public printInfo(): void {
        console.log(this.info);
    }

    protected info(): string {
        return `It's ${this.name} the ${Color[this.color]} ${this.type}`
    }
}

let Leo = new Horse('leo', Color.Black, 'Pony')

Leo.name = 'Leoooo'

Leo = new Horse('leo', Color.White, 'Pony')

// error (根據廣義物件的完整性原則)

// Leo.color = 'Red'
// Leo.isMale = true


// 繼承過後的型別推論與註記

class Unicorn extends Horse {
    constructor(name: string) {
        super(
            name,
            Color.Rainbow,
            'mystical unicorn',
            'n~heeeeeeee'
        )
    }

    protected info(): string {
        return `It's a ${this.type}!! It's name is ${this.name}`
    }

    public puke(): void {
        console.log('Puking rainbow vomit!!')
    }
}

const Woody = new Unicorn('woody')
Woody.puke()

const Wesley: Horse = new Unicorn('wesley') // 被註記為父類別的變數可以指派子類別的物件 - 隸屬於同一個原型鍊
// error
// Wesley.puke()


// class 型別等效理論

class C1 {
    constructor(public prop: string) {}

    public print(): string {
        return this.prop
    }
}

class C2 {
    constructor(public prop: string) {}

    public print(): string {
        return this.prop
    }
}

const obj1: C1 = new C2('C2')

class C3 {
    constructor(public prop: string, private privateProp: string) {}

    public print(): string {
        return this.prop
    }

    private privatePrint(): string {
        return this.privateProp
    }
}

class C4 {
    constructor(public prop: string, private privateProp: string) {}

    public print(): string {
        return this.prop
    }

    private privatePrint(): string {
        return this.privateProp
    }
}

// error
// const obj2: C3 = new C4('C4', 'C44')


// 其他型別等效理論

type TA = { name: string }
type TB = { name: string }

interface IA {
    name: string
}
interface IB {
    name: string
}

function print(obj: TA): void {
    console.log(obj)
}

print(<TA>{ name: 'name' })
print(<TB>{ name: 'name' })
print(<IA>{ name: 'name' })
print(<IB>{ name: 'name' })