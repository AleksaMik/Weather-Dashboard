let chosenCity = "";
let searchedCity = JSON.parse (localStorage.getItem("cities")) || [];
const date = moment().format('MMMM Do YYYY, h:mm:ss a');

function getApi(){
    const requestURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityPicked + "&units=imperial&appid=1690177fc6acff4c67ec2d90d2b1d0c6";
}
fetch (requestURL)
.then(function(data)) {
    return data.JSON();
}).then(function(data)) {
console.log(data);
$("#location-info").empty();
let today = data;
let jumbo = document.getElementById("#")

