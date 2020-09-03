// 型別推論

let myName = 'name'
let age = 20
let isMale = true

// Nullable Types 會被推論為 any

let type1 = undefined
let type2 = null

// 型別推論目的
// 防止賦予不同型別的值到推論後的變數上

myName = 'leo'
// error
// myName = 18


// Delayed Initialization
// 每當我們對任何變數不立即指派值 (equal 帶入 undefined)，該變數會無條件被視為 any 型別

let message

message = 'message'
message = 1

// 未確定變數被正式丟入合法的值之前的這段空間，不能使用該變數，可以理解為 TDZ

let test1: string

// error
// let test2 = test1

test1 = 'test1'
