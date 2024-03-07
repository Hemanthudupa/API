const { writeFile, readFileSync } = require("fs");
let path = require("path");

const express = require("express");
let app = express();

app.listen(3000, () => console.log("Server has started !!!!"));

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  res.sendFile(filePath);
  // res.end("server ended !!!!!")
});

const cheerio = require("cheerio");

// Read the HTML file
const html = readFileSync("index.html", "utf-8");

// Load the HTML content into Cheerio
const cheerioInstance = cheerio.load(html);

// // Accessing and manipulating DOM elements
// let cName = cheerioInstance('form input[type="text"]').val();
// let countryCode = cName.substring(0, 2).toUpperCase();
// console.log(countryCode);

// let sName = cheerioInstance('form input[type="text"]').eq(1).val();
// let stateCode = sName.substring(0, 2).toUpperCase();

// console.log(stateCode)

// console.log(sName);
// let cityName = cheerioInstance('form input[type="text"]').eq(2).val();

//------------------------------------------------------------------------------

let country = require("country-state-city");
const { forEach } = require("lodash");

// let countries = country.Country.getAllCountries();

// let name = countries.filter((country) => {
//   if (country.name === `India`) return country;
// });

// let state = country.State.getAllStates().filter((state) => {
//   return state.countryCode === countryCode && state.name === sName;
// });
// let state = country.State.getAllStates().filter(state=>state.countryCode===countryCode)
// let district=country.City.getAllCities()
// console.log(country.City.getAllCities()forEach(()))

// let cities = country.City.getAllCities().map(
//   (city) => city
// );

let count=0;
let cities=country.City.getAllCities()

cities=cities.filter((city)=>{
  if(city.countryCode==='IN')
  {
    return city
  }
})
console.log(cities)

console.log(count)
// writeFile(
//   "India-states.json",
//   JSON.stringify(state,null,2),()=>{}
// )

writeFile(
  "State-districts.json",
  JSON.stringify(
    cities,
   
          
    
    null,
    2
  ),{flag:'a'},
  () => {console.log("writted ")}
);
// console.log(district.filter((district) =>district.name==='Shimoga'))
// {
//   "name": "Chincholi",
//   "countryCode": "IN",
//   "stateCode": "KA",
//   "latitude": "17.46508000",
//   "longitude": "77.41874000"
// },
