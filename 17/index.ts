// 複合型別

/*

type A = X | Y
type B = X & Y

=> A 的值必須至少符合 X 或 Y 其中一項的完整靜態格式
=> B 的值必須完全符合 X 和 Y 所有的完整靜態格式

Boolean Logic

*/

/*
type guard

1. 過濾原始型別 - typeof
2. 過濾物件型別 - instanceof
3. 其他 - Array.isArray...
*/