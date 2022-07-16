let chosenCity = "";
let searchedCity = JSON.parse (localStorage.getItem("cities")) || [];
const date = moment().format('MMMM Do YYYY, h:mm:ss a');

function getApi() {
    const requestURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityPicked + "&units=imperial&appid=1690177fc6acff4c67ec2d90d2b1d0c6";

fetch (requestURL)
.then(function (data) {
    return data.JSON();
})
.then(function(data) {
console.log(data);
$("#location-info").empty();
let today = data;
let jumbo = document.getElementById("#fetch");
let jumboInfo = $("<div>");
let day = $("#fetch-info").addClass("day-of");
let displayCity = $("p").addClass("displayCity").text("Weather for: ").appent("chosenCity");
let degree = $("p").addClass("displayDegree").text(Math.round(today.main.temp)+ "˚F");
let humidity = $("p").addClass("displayHumidity").text("Humidity: " (today.main.humidity) + "%");
let wind = $("p").addClass("displayWind").text("Wind: " (today.wind.speed) + "mph");
let icon = $("<img>").addClass("rounded mx-auto d-block");
icon.attr("src", "http://openweathermap.org/img/wn/" + today.weather[0].icon + "@2x.png");
let iconMain = $("<p>").text(today.weather[0].main).addClass("iconexp");
console.log(today.weather[0].icon);
$("#fetch").append(jumboInfo.append(day,displayCity,degree,humidity,wind,icon,iconMain));
$("#today").append(jumbo);

let latitude = today.coord.lat
let longtitude = today.coord.long;

function uvIndex(){
const uvInUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longtitude + "&appid=45b6598a4a1bd706ba39bf0f2ac2fcf4";

fetch (uvInUrl)
.then(functon (datas) 
    return datas.JSON();
})
.then(function (uvInUrl) {
console.log(uvInUrl.value);

let uvInd = $("P");
uvInd.text("UV index: " + uvInUrl.value).addClass("uvValue");
if (uvInUrl.value <=3){
    console.log (uvInUrl.value + "Low");
} else if (uvInUrl.value >3) {
        console.log (uvInUrl.value + "Moderate");
 } else if (uvInUrl.value <=7) {
            console.log (uvInUrl.value + "Moderate");
  } else {
                console.log (uvInUrl.value + "High");
            }
        }
    }
}
}

