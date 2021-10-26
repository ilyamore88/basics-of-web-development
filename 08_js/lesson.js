const result = {
    age: 10
}

// function getAge(result, callback) {
//     setTimeout(() => {
//         callback(result.age)
//     }, 2000);
// }
//
// getAge(result, (value) => {
//     console.log(value);
// })

/**
 * Promise - объект
 * Хранит состояния:
 * pending
 * fulfilled
 * rejected
 */

const promise = new Promise((resolve, reject) => {
    if (result.age <= 0) reject("Error - " + result.age);
    setTimeout(() => {
        console.log("Promise #1 done!");
        resolve(result.age);
    }, 1000)
});

const promise2 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Promise #2 done!");
    }, 2000)
})

Promise.all([ promise, promise2 ])
.then((result) => {
    console.log(result);
});


console.log(promise);

/**
 * Client <-> server
 * ... 1s
 * Server -> messages[] -> client
 */