// 型別化名 type

// type A = T
// 目的：進行抽象化

// 明確地把物件格式印出來的結果，我們稱它為物件的明文型別

type person = {
    name: string,
    age: number
}

const leo: person = {
    name: 'leo',
    age: 20
}

const woody: person = {
    name: 'woody',
    age: 22
}

const printPerson = (info: person) => {
    console.log(info.name)
    console.log(info.age)
}

// error
// printPerson({
//     name: 'wesley',
//     age: 20,
//     isMale: true
// })


const ding = {
    name: 'ding',
    age: 18,
    isMale: true
}

printPerson(ding)

// 若某變數(ding)儲存某物件值且沒有被積極註記
// 當該變數(ding)作為某函式（或方法）的參數，其中該參數有型別 T，則 TypeScript 只會針對 ding 的格式至少符合型別 T，則通過