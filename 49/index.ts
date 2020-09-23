// Generator Functions

/*

宣告方式

function * numbersIteratorGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const numbersIterator = numbersIteratorGenerator()

console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());

特性

1. Generators 產出的迭代器不會馬上動作
2. 迭代器呼叫第一次的 next 方法，該迭代器就會執行到 Generator 函式的第一個 yield 位置；亦或者，如果沒有 yield，就會執行到 return 為止
3. 迭代器呼叫第一次的 next 方法，且執行到第一次 yield 的位置時，會將 yield 旁邊的值（可能也包含 undefined）進行輸出的動作；如果沒有 yield 則是會將 return 的結果值輸出
4. 迭代器只要在第 n 次呼叫 next 方法並且代入任何值，該值就會取代前一個 yield 關鍵字的位置
(第 n 次呼叫 next 方法時，填入的參數值會取代第 n - 1 的 yield 位置)

*/

function * test1() {
    console.log('test1');
    yield 1;
    yield 2;
    return 3
}

console.log('before create test1');
const test1Iterator = test1()
console.log('after create test1');

console.log(test1Iterator.next());
console.log(test1Iterator.next());
console.log(test1Iterator.next());
console.log(test1Iterator.next());
console.log(test1Iterator.next());

function * fibonacci() {
    let n0 = 1
    let n1 = 1

    while (true) {
        yield n0;

        [n0, n1] = [n1, n0 + n1]
    }
}

const fibSeries = fibonacci()

for (let i = 0; i < 10; i++) {
    const number = fibSeries.next()
    console.log(`number: ${number}`);
}

function * summationGenerator(total: number = 0) {
    while (true) {
        total += yield total
    }
}

const summation = summationGenerator()

console.log(summation.next(5));
console.log(summation.next(7));
console.log(summation.next(9));