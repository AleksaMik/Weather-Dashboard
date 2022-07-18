function render() {
    localStorage.removeItem("cities");

let chosenCity = "";
let searchedCity = JSON.parse (localStorage.getItem("cities")) || [];
const date = moment().format('MMMM Do YYYY, h:mm:ss a');

function getApi() {
    const requestURL = "https://api.openweathermap.org/data/2.5/weather?q=" + chosenCity + "&units=imperial&appid=1690177fc6acff4c67ec2d90d2b1d0c6";

fetch (requestURL)
.then(function (data) {
    return data.json();
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
.then(function(datas) {
  return datas.json();
}).then(function (uvInUrl) {
console.log(uvInUrl.value);

let uvInd = $("P");
uvInd.text("UV index: " + uvInUrl.value).addClass("uvValue");
if (uvInUrl.value <=3){
    console.log (uvInUrl.value + " - Low");
} else if (uvInUrl.value >3) {
        console.log (uvInUrl.value + " - Moderate");
 } else if (uvInUrl.value <=7) {
            console.log (uvInUrl.value + " - Moderate");
  } else {
                console.log (uvInUrl.value + " - High");
            }
            $("#fetch").append(uvInd);
        })
    }
    return uvIndex();

})
}

function fiveDaysApi() {
    const url5Days = "https://api.openweathermap.org/data/2.5/forecast?q=" + chosenCity + "&units=imperial&appid=45b6598a4a1bd706ba39bf0f2ac2fcf4";
fetch (url5Days)
.then(function(data) {
return data.json();
}).then(function(data){
    fetch("#5DaysForecast").empty();
    console.log(data);
    for (let i=0; i<40; i+=8){
        let days = data.list [i];
        let cards = document.getElementById('#5-days-forecast');
        let cardInit = $("<div>").addClass("col-sm-4");
        let cardDay = $("<h2>").text(days.dt_txt.slice(0, 10));
                    let degree = $("<p>").text(Math.round(days.main.temp) + "˚F");
                    let humid = $("<p>").text("Humidity: " + days.main.humidity + "%");
                    let wind = $("<p>").text("wind Speed: " + Math.round(days.wind.speed) + " mph");
                    let icon = $("<img>");
                    icon.attr("src", "http://openweathermap.org/img/wn/" + days.weather[0].icon + "@2x.png");
                    $("#fetch-five").append(cardInit.append(cardDay, degree, icon, humid, wind));
                    $("#five-days").append(cards);
    }
})
}
function searchedLocation() {
    $("#location-search").empty();
    for (let i=o; i<searchedCity.lenght; i++){
        let el = ("<p class= 'cities'>");
        el.attr("data", searchedCity [i]);
        el.text(searchedCity[i]);
        $("location-search").append(el);
    }
}

$("#submitBtn").on("clic", function (event){
    event.preventDefault();
    chosenCity = $("#cityName").val().trim();
    if (!locationSearched.includes(chosenCity)){
        (locationSearched).push(chosenCity);
    }
    if (locationSearched.lenght > 5) {
locationSearched.shift();
    }

    searchedLocation();
    getApi();
    fiveDaysApi();
    localStorage.setItem("cities",JSON.stringify(locationSearched));
    $("#cityName").val("");
    $("#one-day").css('display','block');
});

searchedLocation();

$(document).on('click','.cities', function() {
    chosenCity = $(this).text();
    $(chosenCity).on("click",getApi)
    getApi();
    fiveDaysApi();
});
}
$(document).ready(render);

