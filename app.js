let country=require('country-state-city')
let {writeFile}=require('fs')
let countries=country.Country.getAllCountries()


let c=document.getElementById('form')
c.value


let name=countries.filter((country)=>{
  if(country.name==='India')return country
    
})
// console.log(name)





let state=country.State.getAllStates().filter(state=>{
  return  state.countryCode==='IN'
})
// console.log(state)

writeFile('India-states.json',JSON.stringify(state,null,2),(err,res)=>{
    console.log(res)

})

// let district=country.City.getAllCities().filter(city=>{
//     return city.stateCode==='KL'
// })

// console.log(district)
