// interface

/*
Interface 可以藉由關鍵字 interface 宣告出來，介面裡面的詳細定義可為：

物件格式：屬性 + 型別
單一函式格式：沒有任何屬性 (不一定需要標上函式名稱)

混合格式：即『物件格式』與『單一函式格式』混合在一起

=> 多一鍵、少一鍵與屬性對應型別錯誤都會報錯

*/

enum Gender { Male, Female, Other }

interface UserInfo {
    id: number
    name: string

    print(message: string): void
}

interface UpdateUserInfo {
    (id: number, newUserInfo: UserInfo): void
}

// 以下結果與使用 type 相同

const printInfo = (user: UserInfo) => {
    console.log(user.id);
    console.log(user.name);
}

// error
// printInfo({
//     id: 0,
//     name: 'leo',
//     birth: new Date(),
//     print() {},
// })

const leo = {
    id: 0,
    name: 'leo',
    birth: new Date(),
    print() {},
}

printInfo(leo)