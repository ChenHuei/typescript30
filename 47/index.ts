// 泛型結合 es2015+

const map1 = new Map()
const set1 = new Set()

const map2 = new Map([[123, 'hi']])
const set2 = new Set([1, 2, 3, 4, 5])

const promise1 = new Promise((resolve, reject) => {
    resolve(true)
}).then(res => {
    console.log(res)
})

const resolvedPromise = Promise.resolve(true)
const rejectedPromise = Promise.reject(false)