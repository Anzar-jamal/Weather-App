console.log('Hello ANzar');

async function weatherdatafetch() {

    const API_key = "ba2d4b4e95364693efb6a690f2c6821b";
    let city = "goa";
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=5&appid=${API_key}
`);

const data = await response.json();

console.log("weather data -> " + data);
    
}