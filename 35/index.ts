// 命名空間模組 TypeScript Namespaces Introduction

/*

為了將不同的程式碼區塊進行隔離 (防止交叉感染交互污染、命名衝突)

宣告

namespace N {
    const A = B

    export const C = D
    export function Method(...) {
        ... 
    }
}

**任何東西想要輸出就必須標註 export 關鍵字 (唯一不能輸出的是 value 本身, example: export 123)

巢狀命名空間 Nested Namespaces

namespace A {
    namespace B {
        ...
    }

    namespace C {
        ...
    }
}

命名空間的融合 Namespaces Merging

namespace A {
    export const name = 'A'
}

namespace A {
    export function print(...) {...}
}

equal to 

namespace A {
    export const name = 'A'
    export function print(...) {...}
}

另外，不同區塊的 Namespace 可以交互使用各自輸出的功能
但是，不同區塊的 Namespace 不能覆蓋之前宣告的 Namespace 所提供的功能 (變數、函式、類別...)

*/


namespace MyMath {
    export const PI = 3.14

    export function AreaOfCircle(radius: number): number {
        return PI * radius ** 2
    }

    export function AreaOfRectangle(width: number, height: number): number {
        return width * height
    }
}

console.log(MyMath.PI)
console.log(MyMath.AreaOfCircle(100))
console.log(MyMath.AreaOfRectangle(50, 50))

namespace A {
    export const name = 'A'
    export interface I {
        createElement(name: 'a'): HTMLAnchorElement
    }
}

namespace A {
    export const type = 'A'
    export function print(): void {
        console.log(name)
    }
    export interface I {
        createElement(name: 'p'): HTMLParagraphElement
    }
}

console.log(A)
A.print()