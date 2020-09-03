// 列舉 Enumerated

enum WeekDay {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

const monday: WeekDay = WeekDay.Monday

console.log(monday); // 1

const number = WeekDay[monday]

console.log(number); // Monday

// 定義列舉型別後，使用該列舉的值並代入到變數時，TypeScript 對於該變數的型別推論是 enum 型別
// 列舉具有反射性，所以可以藉由列舉呼叫元素出來的結果反查該元素本身的名稱
// 列舉裡的元素，每一個對應值是從數字 0 開始遞增