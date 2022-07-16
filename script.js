let chosenCity = "";
let searchedCity = JSON.parse (localStorage.getItem("cities")) || [];
const date = moment().format('MMMM Do YYYY, h:mm:ss a');

function getApi(){
    const requestURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityPicked + "&units=imperial&appid=1690177fc6acff4c67ec2d90d2b1d0c6";
}
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
$("#fetch").append(jumboInfo.append(day,displayCity,degree,humidity,wind,icon,iconMain))

