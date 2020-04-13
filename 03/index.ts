// Object 型別

let obj:object = { name: 'obj' }

// error
// obj = 123

obj = [1,2,3]

obj = function() {}

obj = new Object()

obj = new String('obj')

obj = new Number(12)

obj = Object

obj = Array

// 狹義物件的定義：限於 JSON 格式的物件
// 廣義物件的定義：包含 JSON 格式的物件、陣列、函式、類別、類別創建出之物件

// 1. 可以被任何廣義物件覆寫
// 2. 只能進行全面覆寫，不能進行微調 (包含新增或改變屬性的值)
