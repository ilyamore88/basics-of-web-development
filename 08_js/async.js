(async () => {
    async function asyncRequest() {
        const response = await fetch("https://api.agify.io/?name=Ilya&country_id=RU", { method: "GET" });
        const data = await response.json();

        return data;
    }

    const result = await asyncRequest();
    console.log(result);
})()
