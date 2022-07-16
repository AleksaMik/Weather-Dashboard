let chosenCity = "";
let searchedCity = JSON.parse (localStorage.getItem("cities")) || [];
const date = moment().format('MMMM Do YYYY, h:mm:ss a');