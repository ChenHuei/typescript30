// optional 選用屬性

enum Gender { Male, Female, Other }

type AccountInfo1 = {
    account: string,
    password: string,
    gender?: Gender
    birth?: Date
}

const leo: AccountInfo1 = {
    account: 'leo',
    password: '####'
}

// 複合型別

type AccountRequired = {
    account: string,
    password: string,
}

type AccountOptional = {
    gender?: Gender
    birth?: Date
}

type AccountInfo2 = AccountRequired & AccountOptional

const woody: AccountInfo2 = {
    account: 'woody',
    password: '####',
    gender: Gender.Male
}

// optional parameters

const add = (num1: number, num2?: number) => {
    if (num2) {
        return num1 + num2
    } else {
        return num1 + 3
    }
}

add(3)

// optional elements

type optionalTuples = [string, string?]

const test: optionalTuples = ['test']