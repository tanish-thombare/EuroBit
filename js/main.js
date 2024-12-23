const cityCoordinates = [
  {
    latitude: "52.367",
    longitude: "4.904",
    city: "Amsterdam",
    country: "Netherlands",
  },
  {
    latitude: "39.933",
    longitude: "32.859",
    city: "Ankara",
    country: "Turkey",
  },
  {
    latitude: "56.134",
    longitude: "12.945",
    city: "Åstorp",
    country: "Sweden",
  },
  {
    latitude: "37.983",
    longitude: "23.727",
    city: "Athens",
    country: "Greece",
  },
  {
    latitude: "54.597",
    longitude: "-5.930",
    city: "Belfast",
    country: "Northern Ireland",
  },
  {
    latitude: "41.387",
    longitude: "2.168",
    city: "Barcelona",
    country: "Spain",
  },
  {
    latitude: "52.520",
    longitude: "13.405",
    city: "Berlin",
    country: "Germany",
  },
  {
    latitude: "46.948",
    longitude: "7.447",
    city: "Bern",
    country: "Switzerland",
  },
  { latitude: "43.263", longitude: "-2.935", city: "Bilbao", country: "Spain" },
  {
    latitude: "50.847",
    longitude: "4.357",
    city: "Brussels",
    country: "Belgium",
  },
  {
    latitude: "47.497",
    longitude: "19.040",
    city: "Bucharest",
    country: "Romania",
  },
  {
    latitude: "59.329",
    longitude: "18.068",
    city: "Budapest",
    country: "Hungary",
  },
  {
    latitude: "51.483",
    longitude: "-3.168",
    city: "Cardiff",
    country: "Wales",
  },
  {
    latitude: "50.937",
    longitude: "6.96",
    city: "Cologne",
    country: "Germany",
  },
  {
    latitude: "55.676",
    longitude: "12.568",
    city: "Copenhagen",
    country: "Denmark",
  },
  { latitude: "51.898", longitude: "-8.475", city: "Cork", country: "Ireland" },
  {
    latitude: "53.349",
    longitude: "-6.260",
    city: "Dublin",
    country: "Ireland",
  },
  {
    latitude: "55.953",
    longitude: "-3.188",
    city: "Edinburgh",
    country: "Scotland",
  },
  {
    latitude: "43.7696",
    longitude: "11.255",
    city: "Florence",
    country: "Italy",
  },
  {
    latitude: "50.110",
    longitude: "8.682",
    city: "Frankfurt",
    country: "Germany",
  },
  {
    latitude: "43.254",
    longitude: "6.637",
    city: "French Riviera",
    country: "France",
  },
  {
    latitude: "32.650",
    longitude: "-16.908",
    city: "Funchal",
    country: "Portugual",
  },
  {
    latitude: "36.140",
    longitude: "-5.353",
    city: "Gibraltar",
    country: "British Territory",
  },
  {
    latitude: "57.708",
    longitude: "11.974",
    city: "Gothenburg",
    country: "Sweden",
  },
  {
    latitude: "53.548",
    longitude: "9.987",
    city: "Hamburg",
    country: "Germany",
  },
  {
    latitude: "60.169",
    longitude: "24.938",
    city: "Helsinki",
    country: "Finland",
  },
  { latitude: "39.020", longitude: "1.482", city: "Ibiza", country: "Spain" },
  { latitude: "50.450", longitude: "30.523", city: "Kyiv", country: "Ukraine" },
  {
    latitude: "61.115",
    longitude: "10.466",
    city: "Lillehammer",
    country: "Norway",
  },
  {
    latitude: "38.722",
    longitude: "-9.139",
    city: "Lisbon",
    country: "Portugual",
  },
  {
    latitude: "51.507",
    longitude: "-0.127",
    city: "London",
    country: "England",
  },
  { latitude: "40.416", longitude: "-3.703", city: "Madrid", country: "Spain" },
  {
    latitude: "39.695",
    longitude: "3.017",
    city: "Mallorca",
    country: "Spain",
  },
  {
    latitude: "53.480",
    longitude: "-2.242",
    city: "Manchester",
    country: "England",
  },
  {
    latitude: "43.296",
    longitude: "5.369",
    city: "Marseille",
    country: "France",
  },
  {
    latitude: "27.760",
    longitude: "-15.586",
    city: "Maspalomas",
    country: "Spain",
  },
  { latitude: "45.464", longitude: "9.190", city: "Milan", country: "Italy" },
  {
    latitude: "48.135",
    longitude: "11.582",
    city: "Munich",
    country: "Germany",
  },
  { latitude: "40.851", longitude: "14.268", city: "Naples", country: "Italy" },
  { latitude: "43.034", longitude: "-2.417", city: "Oñati", country: "Spain" },
  { latitude: "59.913", longitude: "10.752", city: "Oslo", country: "Norway" },
  { latitude: "48.856", longitude: "2.352", city: "Paris", country: "France" },
  {
    latitude: "50.075",
    longitude: "14.437",
    city: "Prague",
    country: "Czech Republic",
  },
  {
    latitude: "64.146",
    longitude: "-21.942",
    city: "Reykjavík",
    country: "Iceland",
  },
  { latitude: "56.879", longitude: "24.603", city: "Riga", country: "Latvia" },
  { latitude: "41.902", longitude: "12.496", city: "Rome", country: "Italy" },
  {
    latitude: "39.453",
    longitude: "-31.127",
    city: "Santa Cruz das Flores",
    country: "Portugual",
  },
  {
    latitude: "28.463",
    longitude: "-16.251",
    city: "Santa Cruz de Tenerife",
    country: "Spain",
  },
  {
    latitude: "57.273",
    longitude: "-6.215",
    city: "Skye",
    country: "Scotland",
  },
  {
    latitude: "42.697",
    longitude: "23.321",
    city: "Sofia",
    country: "Bulgaria",
  },
  {
    latitude: "59.329",
    longitude: "18.068",
    city: "Stockholm",
    country: "Sweden",
  },
  {
    latitude: "59.437",
    longitude: "24.753",
    city: "Tallinn",
    country: "Estonia",
  },
  {
    latitude: "18.208",
    longitude: "16.373",
    city: "Vienna",
    country: "Austria",
  },
  {
    latitude: "52.229",
    longitude: "21.012",
    city: "Warsaw",
    country: "Poland",
  },
  { latitude: "53.961", longitude: "-1.07", city: "York", country: "England" },
  {
    latitude: "47.376",
    longitude: "8.541",
    city: "Zurich",
    country: "Switzerland",
  },
];

const weathermap = {
  tsrain: "Thunderstorm with rain",
  snow: "Snow",
  rain: "Rain",
  fog: "Foggy",
  humid: "Relatively Humid",
  lightrain: "Light rain or showers",
  cloudy: "Cloudy",
  oshower: "Occasional showers",
  ishower: "Isolated showers",
  lightsnow: "Light snow",
  tstorm: "Thunderstorm",
  clear: "Clear",
  pcloudy: "Partly Cloudy",
  mcloudy: "Mostly Cloud",
  rainsnow: "Mixed",
};
const options = {
  weekday: "long",
  month: "short",
  day: "2-digit",
  year: "numeric",
};
const time = new Date();
let meteoData;
const selectElement = document.querySelector("select");
const summaryTemp = document.querySelector("#summary-temp");
const locationEl = document.querySelector("#location");
const presentDay = document.querySelector("#present-day");
const presenttime = document.querySelector("#present-time");
const humidity = document.querySelector("#humid");
const Wind = document.querySelector("#wind");
const tempHigh = document.querySelector("#highest");
const tempLow = document.querySelector("#lowest");
const weekWeather = document.querySelector("#weekly-weather");
const weatherPoint = document.querySelector("#weekly-weather-point");
const dialyContainer = document.querySelector(".data-details");
const weeklyIcon = document.querySelector(".icon");
const Main = document.querySelector(".main");
const weatherIcon = document.querySelector(".wicon");

cityCoordinates.forEach((location, i) => {
  const option = document.createElement("option");
  option.text = `${location.city}, ${location.country}`;
  option.value = `${location.city} ${i}`;
  selectElement.add(option);
});

async function getCityData(city, product) {
  try {
    const res =
      await fetch(`https://www.7timer.info/bin/api.pl?lon=${city.longitude}&lat=${city.latitude}&product=${product}&output=json
    `);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Something went wrong: ${error.message}`);
  }
}

async function userLocationGetData(city) {
  dialyContainer.innerHTML = "";
  dialyContainer.classList.remove("added");
  loading("Getting location data ");
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${city.latitude}&lon=${city.longitude}`
    );
    const data = await res.json();
    if (!data.address.state || !data.address.country) throw new Error();
    await updateData(city);
    locationEl.textContent = `${data.address.city || data.address.state}, ${
      data.address.country
    }`;
    dialyContainer.innerHTML = "";
  } catch (error) {
    locationEl.textContent = `Unknown Location`;
  }
}

async function updateData(cityObj, daily) {
  try {
    const allPromise = await Promise.all([
      getCityData(cityObj, "meteo"),
      getCityData(cityObj, "civillight"),
      getCityData(cityObj, "civil"),
    ]);
    allPromise.map((data) => {
      if (data.product === "meteo") {
        meteoData = data;
        updateSummary(data, cityObj);
        Wind.textContent = windVariablesCalc(data);
        weekWeather.textContent = `Cloud Cover`;
        weatherPoint.textContent = `${CloudCalc(
          data.dataseries[0].cloudcover
        ).toFixed()}%`;
      } else if (data.product === "civillight") {
        backgroundSetter(data.dataseries[0].weather);
        tempHigh.textContent = `${highOrLow(data.dataseries)[1]}°C`;
        tempLow.textContent = `${highOrLow(data.dataseries)[0]}°C`;
        if (!daily) return;
        dialyContainer.innerHTML = "";
        dialyContainer.classList.add("added");
        data.dataseries.forEach((el, i) => createHtml(el, i));
      } else if (data.product === "civil") {
        humidity.textContent = humidityFunc(data);
      }
    });
  } catch (error) {
    dialyContainer.innerHTML = "";
    dialyContainer.textContent = error.message;
  }
}

function updateSummary(data, obj) {
  const date = time
    .toLocaleString("en-GB", options)
    .slice()
    .split(" ")
    .splice(0, 3)
    .join(" ");
  const hour = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
  const minutes = time.getMinutes();
  locationEl.textContent = `${obj.city}, ${obj.country}`;
  summaryTemp.textContent = `${data.dataseries[0].temp2m}°`;
  presentDay.textContent = `${date}`;
  presenttime.textContent = `${hour.toString().padStart(2, "0")}: ${minutes
    .toString()
    .padStart(2, "0")} ${time.getHours() > 11 ? "PM" : "AM"}`;
}

function highOrLow(set) {
  let minMax = [0, 0];
  set.forEach((el) => {
    minMax[1] = el.temp2m.max > minMax[1] ? el.temp2m.max : minMax[1];
    minMax[0] = el.temp2m.min < minMax[0] ? el.temp2m.min : minMax[0];
  });
  return minMax;
}

function humidityFunc(data) {
  let rh = 0;
  const divider = data.dataseries.length;
  data.dataseries.slice().map((el) => {
    rh += +el.rh2m.slice(0, -1);
  });
  return `${(rh / divider).toFixed()}%`;
}

function weatherDetails(product, dailyClicked, id) {
  let amt = [0, 0, 0];
  let divider = 0;
  product.dataseries.slice().map((el) => {
    if (
      +product.init + +el.timepoint >= +product.init + 24 * id &&
      +product.init + +el.timepoint < +product.init + 24 * (id + 1)
    ) {
      amt[0] += +el.prec_amount;
      amt[1] += +el.cloudcover;
      amt[2] += +el.windspeed;
      divider += 1;
    }
  });
  const precAmt = amt[0] / divider;
  const cloudAmt = amt[1] / divider;
  const windspeed = amt[2] / divider;
  weekWeather.textContent = `Cloud Cover`;
  weatherPoint.textContent = `${CloudCalc(cloudAmt).toFixed()}%`;
  if (!dailyClicked) return;
  if (precAmt > 7) {
    weekWeather.textContent = `Heavy Rain`;
    weatherPoint.textContent = `${precAmt.toFixed()}mm`;
  }
  if (windspeed > 17) {
    weekWeather.textContent = `Strong Wind`;
    weatherPoint.textContent = `${windspeed.toFixed()}m/s`;
  }
  if (windspeed > 17 && precAmt > 7) {
    weekWeather.textContent = `Possible Rainstorm`;
    weatherPoint.textContent = `${precAmt.toFixed()}mm/h rain at ${windspeed.toFixed()}m/s`;
  }
}

function windDirCalc(num) {
  if (num >= 0 && num < 46) return `${num.toFixed()}° N`;
  if (num > 45 && num < 91) return `${(num - 45).toFixed()}° NE`;
  if (num >= 90 && num < 136) return `${(num - 90).toFixed()}° E`;
  if (num > 135 && num < 181) return `${(num - 135).toFixed()}° SE`;
  if (num >= 180 && num < 226) return `${(num - 180).toFixed()}° S`;
  if (num > 225 && num < 271) return `${(num - 225).toFixed()}° SW`;
  if (num >= 270 && num < 316) return `${(num - 270).toFixed()}° W`;
  if (num > 315 && num < 360) return `${(num - 315).toFixed()}° NW`;
}

function windVariablesCalc(data) {
  let speed = 0;
  let dir = 0;
  const divider = data.dataseries.length;
  data.dataseries.slice().map((el) => {
    speed += +el.wind10m.speed;
    dir += +el.wind10m.direction;
  });
  const spd = dir / divider;
  return `${(speed / divider).toFixed()}m/s  | ${windDirCalc(spd)}`;
}

function createHtml(el, i) {
  const dateString = `${el.date.toString().slice(0, 4)},${el.date
    .toString()
    .slice(4, 6)},${el.date.toString().slice(6, 8)}`;
  const time = new Date(dateString).toString();
  const date = time.split(" ").splice(0, 3);
  const html = `<div class="daily-data" id=${i}>
                <div id="img">
                  <img src="./images/${el.weather}1.png" alt="${el.weather}1" />
                  <img src="./images/${el.weather}2.png" alt="${el.weather}2" />
                </div>
                <div id="div">
                  <div id="days">
                    <p class="each-day">${date[0]}</p>
                    <p>${date[1]} ${date[2]}</p>
                  </div>
                  <span>${weathermap[el.weather]}</span>
                  <div class="heat-range">
                    <span>${el.temp2m.max}°C</span>
                    <img src="./images/swap.png" alt="updownArrow" id="updown"/>
                    <span>${el.temp2m.min}°C</span>
                  </div>
                </div>
                </div>`;
  dialyContainer.innerHTML += html;
  dialyContainer.addEventListener("click", function (e) {
    const click = e.target.closest(".daily-data");
    const clickedId = click.getAttribute("id");
    if (!click || clickedId !== i.toString()) return;
    weatherDetails(meteoData, true, clickedId);
    weeklyIcon.src = `./images/${el.weather || "earth"}.gif`;
  });
}

function loading(text) {
  const html = `<div class="loading-container">
                  <div class="loading-text">${text}</div>
                  <div class="dot-container">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                </div>`;
  dialyContainer.innerHTML += html;
}

function CloudCalc(num) {
  if (num <= 8) {
    return ((num - 1) / 8) * 100;
  } else {
    return 97;
  }
}

function backgroundSetter(data) {
  let newData;
  if (
    data === "rain" ||
    data === "oshower" ||
    data === "ishower" ||
    data === "lightrain"
  )
    newData = "rain";
  if (
    data === "fog" ||
    data === "cloudy" ||
    data === "clear" ||
    data === "humid" ||
    data === "mcloudy" ||
    data === "pcloudy"
  )
    newData = "clear";
  if (data === "snow" || data === "lightsnow" || data === "rainsnow")
    newData = "snow";
  if (data === "tsrain" || data === "tstorm" || data === "windy")
    newData = "storm";
  weatherIcon.src = `./images/${newData}.svg`;
}

function callback(e) {
  dialyContainer.innerHTML = "";
  dialyContainer.classList.remove("added");
  loading("Getting weather forecast ");
  const arr = e.target.value.slice().split(" ");
  const num = +arr[arr.length - 1];
  const cityObj = cityCoordinates[num];
  updateData(cityObj, true);
}

// Global variable to track the temperature unit (default to Celsius)
let isCelsius = true;

// Function to convert Celsius to Fahrenheit
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Function to convert Fahrenheit to Celsius
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Function to update all temperature units on the page
function updateTemperatureUnits() {
  const tempElements = [
    document.getElementById("summary-temp"),
    document.getElementById("highest"),
    document.getElementById("lowest"),
  ];

  tempElements.forEach((tempElement) => {
    if (tempElement) {
      const tempText = tempElement.textContent;
      const tempValue = parseFloat(tempText);

      if (isNaN(tempValue)) return; // Skip invalid values

      // Convert temperature based on the current unit
      if (isCelsius) {
        tempElement.textContent = `${toFahrenheit(tempValue).toFixed(1)}°F`;
      } else {
        tempElement.textContent = `${toCelsius(tempValue).toFixed(1)}°C`;
      }
    }
  });

  // Toggle the global unit
  isCelsius = !isCelsius;
}

// Function to toggle the button text
function toggleUnitButtonText() {
  const toggleButton = document.getElementById("unit-toggle");
  toggleButton.textContent = isCelsius ? "Switch to °F" : "Switch to °C";
}

// Attach the temperature toggle functionality to the button
document.getElementById("unit-toggle").addEventListener("click", () => {
  updateTemperatureUnits();
  toggleUnitButtonText();
});


function init() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        const { latitude, longitude } = success.coords;
        const city = {
          latitude: +latitude.toFixed(3),
          longitude: +longitude.toFixed(3),
        };
        userLocationGetData(city);
      },
      (error) => {
        dialyContainer.innerHTML = "";
        dialyContainer.classList.remove("added");
        dialyContainer.textContent = `Something went wrong: ${
          error.message.split(".")[0]
        }`;
      }
    );
  }
}

init();

selectElement.addEventListener("change", callback);
window.addEventListener("online", init());
document.querySelector(".page").addEventListener("click", function () {
  location.reload();
});
