/**
 * https://api.agify.io/?name=Ilya&country_id=RU
 */
// fetch("https://api.agify.io/?name=Veniamin", {
//     method: "GET"
// }).then(result => {
//     return result.json();
// }).then(data => {
//     console.log(data);
// })

(async () => {
    const response = await fetch("https://api.genderize.io?name=Nastya", { method: "GET" });
    const data = await response.json();

    document.getElementById("result").innerHTML = data.name;

    console.log(data);
})()