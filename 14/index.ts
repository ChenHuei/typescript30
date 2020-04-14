
// 介面屬性對應的函式可以被超載

interface AddOperation {
    addition(p1: number, p2: number): number;
    addition(p1: string, p2: string): number;
}

const implementAddition: AddOperation = {
    addition(p1: number | string, p2: number | string) {
        if (typeof p1 === 'number' && typeof p2 === 'number') {
            return p1 + p2
        } else if (typeof p1 === 'string' && typeof p2 === 'string') {
            return parseInt(p1) + parseInt(p2)
        }
        throw new Error('failed')
    }
}

interface AddOperation1 {
    add(p1: number, p2: number): number;
    add(p1: number, p2: number): number;
}
const add1: AddOperation1 = {
    add(p1: number, p2: number) {
        return p1 + p2
    }
}

// interface AddOperation2 {
//     add(p1: number): number;
//     add(p1: number, p2: number): number;
// }
// const add2: AddOperation2 = {
//     add(p1: number, p2: number | undefined) {
//         return p1 + p2
//     }
// }

interface MyDocument {
    createElement(tag: 'p'):      HTMLParagraphElement,
    createElement(tag: 'body'):   HTMLBodyElement,
    createElement(tag: 'div'):    HTMLDivElement
}
interface MyDocument {
    createElement(tag: 'a'):      HTMLAnchorElement,
    createElement(tag: 'span'):   HTMLSpanElement,
    createElement(tag: 'input'):  HTMLInputElement
}