const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved")
    }, 1000)
})

promise.then(value => {
    console.log(value);
})