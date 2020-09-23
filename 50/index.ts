// async await


function delayAfter<T>(
    milliseconds: number, value: T
): Promise<T> {
    return new Promise(resolve => {
        setTimeout(() => { resolve(value) }, milliseconds)
    })
}

async function test1() {
    const message = await delayAfter(1000, 'test1')

    console.log(message);
}

async function test2() {
    // const message = await 'test2' equal to const message = 'test2'
    const message = 'test2'

    console.log(message);
}

async function test3() {
    const result = await Promise.race([
        delayAfter(1000, 'one'),
        delayAfter(2000, 'two'),
        delayAfter(3000, 'three')
    ])

    console.log(result);
}

async function test4() {
    return await Promise.resolve(4)
}

async function test5() {
    return Promise.resolve(5)
}

test2()
test3()