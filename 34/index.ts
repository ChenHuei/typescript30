/*

strictNullChecks 會將 Nullable Types 視為獨立的原始型別

1. 任何被註記為 Nullable Types 的變數只能接收該 Nullable Types
2. Nullable Types 的值除了被指派到註記有 Nullable Types 的變數外，也可被指派到 any 型別的變數

noImplicitAny 當任何函式的宣告裡，參數若被判定為 any 則會發出警告

額外語法與型別推論檢測相關設定 (no* 系列)

1. noUnusedLocals:              如果有變數沒有被使用，就會出現警告
2. noUnusedParameters:          如果函式裡的參數沒有被使用，就會出現警告
3. noFallthroughCasesInSwitch:  每個 switch 裡面的 case 判斷敘述式一定要有 break 語法，不能有 case 沒有 break 以至於會執行到下一個 case
4. noImplicitThis:              this 如果被 TypeScript 判定為 any 型態時就會發出警告


*/