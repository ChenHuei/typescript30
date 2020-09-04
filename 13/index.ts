enum Gender { Male, Female, Other }

interface AccountRequired {
    account: string
    password: string
}

interface AccountOptional {
    gender?: Gender
    birth?: Date
}

interface UserAccount extends AccountRequired, AccountOptional {}

const leo: UserAccount = {
    account: 'leo',
    password: '####',
}

const woody: UserAccount = {
    account: 'woody',
    password: '####',
    gender: Gender.Other
}

// error
// const wesley: UserAccount = {
//     account: 'wesley',
//     password: '####',
//     isMale: true
// }

/*
interface IMain extends I1, I2, ... In {}

若所有的介面裡名稱相同之屬性，各自對應之型別不能互相衝突。則 IMain 為所有 I1, I2, ... In 交集的結果
*/

interface I1 { a: string, b: number,            }
interface I2 {            b: number, c: boolean }
interface I3 { a: string,            c: string  }

interface I12 extends I1, I2 {}

// error
// interface I23 extends I2, I3 {}
// interface I123 extends I1, I2, I3 {}

/*
interface vs type

介面（Interface） - 跟規格的概念很像，可以擴充設計、組裝出更複雜的功能規格

型別（Type）- 代表靜態的資料型態，因此型別一但被定義出來則恆為固定的狀態。儘管可以利用型態的複合（intersection 與 union）看似達到型別擴展的感覺，然而這個行為並不叫作型別擴展，而是創造出新的靜態型別
*/