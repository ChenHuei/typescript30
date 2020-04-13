const say = function(): void {
    console.log('hi')
}

const add = function(param1: number, param2: number): number {
    return param1 + param2
}

const fun1 = function() {
    return undefined
}

const fun2 = function(): undefined {
    return undefined
}

// error
// const fun3 = function(): undefined {}

const fun4 = function(): void {
    return undefined
}