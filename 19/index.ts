// 存取修飾子 Access Modifiers

/*
存取修飾子

1. 總共分為三種：public、private、protected (預設 public)
2. 可調整成員變數與方法在 class 裡外使用的限制
3. 若宣告某類別 C，裡面的成員變數 P 或成員方法 M 被註記為
    public - P 與 M 可任意在 class 內外以及繼承 C 的子類別使用
    private - P 與 M 只可在當前類別 C 內使用
    protected - P 與 M 除了在當前類別 C 內使用外，繼承 C 的子類別也可使用
4. 若某 class C 確認實踐 (implements) 某 interface I，則類別 C 必須實踐所有 interface I 所提供的格式，
    - interface I 規格轉換成 class C 時，成員變數與方法皆須為 public
｀
*/


/*

class C implement I {
    private users: T[]

    constructor (users: T[]) {
        this.users = users
    }
}

equal to

class C implement I {
    constructor (private users: T[]) {}
}

就算在建構子的參數裡，想要宣告 public 模式的成員變數，也必須明確註記 public 這個修飾子出來
否則 TypeScript 只能當該參數為普通參數而不是該類別的成員變數

*/

// 提款機範例

type UserAccount = {
    account: string
    password: string
    money: number
}

interface AccountSystem {
    // 登入
    signIn(account: string, password: string): void

    // 登出
    signOut(): void
}

interface TransactionSystem {
    // 存錢
    deposit(amount: number): void

    // 領錢
    withdraw(amount: number): void
}

interface interfaceCashMachine extends AccountSystem, TransactionSystem {}

class CashMachine implements interfaceCashMachine {
    private currentUser: UserAccount | undefined

    constructor (private users: UserAccount[]) {}

    signIn(account: string, password: string) {
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i]

            if (user.account === account && user.password === password) {
                this.currentUser = user
                break
            }
        }

        if (!this.currentUser) {
            throw new Error('User not found')
        }
    }

    signOut() {
        this.currentUser = undefined
    }

    deposit(amount: number) {
        if (this.currentUser) {
            this.currentUser.money += amount
        } else {
            throw new Error('Not signed in!!')
        }
    }

    withdraw(amount: number) {
        if (this.currentUser) {
            this.currentUser.money -= amount
        } else {
            throw new Error('Not signed in!!')
        }
    }
}

function printUser(user: UserAccount | undefined) {
    if (user) {
        console.log(`
            current user: ${user.account}
            money: ${user.money}
        `)
    } else {
        console.log('no user found');
    }
}

const machine = new CashMachine(
    [
        { account: 'aaa', password: 'aaa', money: 10000 },
        { account: 'bbb', password: 'bbb', money: 10000 },
        { account: 'ccc', password: 'ccc', money: 10000 }
    ]
)

// printUser(machine.currentUser)

machine.signIn('aaa', 'aaa')
// printUser(machine.currentUser)

machine.withdraw(5000)
// printUser(machine.currentUser)

machine.signOut()
// printUser(machine.currentUser)