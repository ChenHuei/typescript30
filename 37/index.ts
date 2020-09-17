// 型別定義與宣告檔 Type Definition & Declaration Files

/*
當使用原生 js 的第三方套件時，若不想重額外翻譯成 typescript 時，可採用型別定義，利用讓 ts 和 js 合作

1. declare 關鍵字

declare const $: any

${document}.ready(() => {
    ...
})

**通常會放在 .d.ts 檔案裡面 aka Declaration Files

2. 引入第三方套件的宣告檔

第三方套件的型別宣告檔，通常都會以 @types/<package> 的格式作為名稱 (通常不包含原套件的 JS 程式碼，因此有可能必須同時下載套件的原始碼)

*/