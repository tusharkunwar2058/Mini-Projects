let weatherButton = document.getElementById("weatherButton");

weatherButton.addEventListener("click", function () {
    let city = document.getElementById("city").value;

    checkGeoData(city);
});

async function checkGeoData(city) {
    let url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

    try {
        let response = await fetch(url);
        let GeoData = await response.json();

        if (!GeoData.results || GeoData.results.length === 0) {
            document.getElementById("demo").innerHTML = "Check city name properly";
            return;
        }

        let lat = GeoData.results[0].latitude;
        let lon = GeoData.results[0].longitude;

        checkWheather(city, lat, lon);

    } catch (error) {
        document.getElementById("demo").innerHTML = error;
        return;
    }

}

async function checkWheather(city, lat, lon) {
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current=temperature_2m`

    try {
        let response = await fetch(url);
        let weatherData = await response.json();

        document.getElementById("demo").innerHTML = `Current Weather of ${city}: ${weatherData.current.temperature_2m} °C`
    } catch (error) {
        document.getElementById("demo").innerHTML = error;
    }

    // console.log(weatherData);
}