// type vs interface

/*
共同點

不管是宣告 type 或 interface，typescript 在型別檢測上基本上都是一模一樣的

若某變數(A) 被註記 type (T) 或 interface (I)

1. 變數(A) 若存的值少或多了 type (T) 或 interface (I) 規範的屬性都會被警告
2. 變數(A) 若存的值的屬性跟 type (T) 或 interface (I) 規範的屬性不同，也會被警告

另外，type and interface 皆有下列提到的特性

1. 選用屬性

type T = {
    message?: string
}

interface I {
    message?: string
}

2. 函式型別超載

type T = {
    createElement(name: 'a'): HTMLAnchorElement
    createElement(name: 'p'): HTMLParagraphElement
}

interface I {
    createElement(name: 'a'): HTMLAnchorElement
    createElement(name: 'p'): HTMLParagraphElement
}

3. Indexable Types

type T = {
    [prop: string]: string
}

interface I {
    [prop: string]: string
}

4. 唯獨屬性 (readonly)

type T = {
    readonly message: string
}

interface I {
    readonly message: string
}

備註：

1. interface 和 type 可進行複合 (union and intersection）

type T = {
    prop1: string
}

interface I1 {
    prop2: string
}

interface I2 {
    prop3: string
}

type A = T | I1 | I2 
type B = T & I1 & I2

2. interface 除了從其他 interface 擴充外，也可從 type 進行擴充 (但該 type 不能為原始型別)

type T = {
    prop1: string
}

interface I extends T {
    prop2: string
}
*/


/*
差異


1. 語法上差異

type T = U

interface I  {
    P: U
}

2. 應用上差異

type T = number

interface I {
    a: string
}

type U = T & I

// 以上面的例子，type U 不算是被擴充，而是被另外宣告一個新的

interface J extends T, I {}

3. 只有 interface 能做到

(1) interface 可被融合

interface I1 {
    a: string
    b: string
}

interface I1 {
    c: string
}

// 以上等同於

interface I1 {
    a: string
    b: string
    c: string
}

4. 只有 type 能做到

(1) type 才能單純化名原始型別、列舉與元組

interface 除了可以定義的像物件格式外，也可定義為函示，甚至是混合版，但不能模仿原始型別、列舉與元組

*/


/*
使用情境

1. 不希望被人擴充、單純代表一種獨立的資料格式的概念 - type
2. 如果單純是原始型別、列舉型別、元組型別 - type
3. 通常使用型別複合的時候（union 或 intersection）- type
4. 功能可以被重複利用，且該功能可能會被多方程式碼或第三方套件依賴 - interface

*/