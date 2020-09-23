"use strict";
// Generator Functions
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function test1() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('test1');
                return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                return [2 /*return*/, 3];
        }
    });
}
console.log('before create test1');
var test1Iterator = test1();
console.log('after create test1');
console.log(test1Iterator.next());
console.log(test1Iterator.next());
console.log(test1Iterator.next());
console.log(test1Iterator.next());
console.log(test1Iterator.next());
function fibonacci() {
    var n0, n1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                n0 = 1;
                n1 = 1;
                _b.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, n0];
            case 2:
                _b.sent();
                _a = [n1, n0 + n1], n0 = _a[0], n1 = _a[1];
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var fibSeries = fibonacci();
for (var i = 0; i < 10; i++) {
    var number = fibSeries.next();
    console.log("number: " + number);
}
function summationGenerator(total) {
    var _a;
    if (total === void 0) { total = 0; }
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!true) return [3 /*break*/, 2];
                _a = total;
                return [4 /*yield*/, total];
            case 1:
                total = _a + _b.sent();
                return [3 /*break*/, 0];
            case 2: return [2 /*return*/];
        }
    });
}
var summation = summationGenerator();
console.log(summation.next(5));
console.log(summation.next(7));
console.log(summation.next(9));
