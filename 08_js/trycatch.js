const num = 10;

function throwError() {
    throw new Error("ERROR!!!!");
}

// if (typeof num !== 'number') {
//     // console.log("Wrong format");
//     throw new Error("Wrong format");
// } else {
//     console.log("Number:", num);
// }

try {
    throwError();
} catch (e) {
    console.log(e.message);
}

console.log("Done!");