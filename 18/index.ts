// class 類別

/* 類別宣告

class C {
    P1: Tp1
    P2: Tp2
    // ...

    M1(param: Tm1): Tm1 {
        // 
    }
    // ...
    Mn(param: Tmn): Tmn {
        // 
    }
}

P1，P2... 稱為類別 C 的成員變數
M1，M2... 稱為類別 C 的成員方法

*/

class Person {
    name: string
    age: number

    constructor(name: string = 'leo', age: number = 20) {
        this.name = name
        this.age = age
    }

    print(): void {
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
        `)
    }
}

/*
由於建構子被視為是函式的一種，所以建構子裡的參數一定要被註記，不然一律被 TypeScript 視為 any，引發 Implicit any 問題
*/

const leo = new Person()

leo.print()

const woody = new Person('woody', 22)

woody.print()