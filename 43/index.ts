// 泛用化名

/*

除非型別參數有預設值（又可稱作預設型別參數 Default Type Parameter），否則本身為泛用形式的型別化名，少掉任何一個型別參數的值就會出錯。
*/

let numberArray1: Array<number> = [1, 2, 3]
// let numberArray2: Array = [1, 2, 3]