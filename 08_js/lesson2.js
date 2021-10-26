(async () => {
    const promise = new Promise((resolve, reject) => {
        reject("Error!!!");
        setTimeout(() => {
            resolve("Done!")
        }, 1000)
    })

    try {
        const result = await promise;
        console.log(result);
    } catch (e) {
        console.log(e);
    }
})()
