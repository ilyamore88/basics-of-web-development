fetch("https://api.agify.io/?name=Ilya&country_id=RU", { method: "GET" })
.then(response => response.json())
.then(data => {
    console.log(data);
})