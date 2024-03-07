let {readFileSync,writeFileSync}=require('fs')
let datastates=readFileSync('India-states.json','utf8')
let states=JSON.parse(datastates)
let datadistricts=readFileSync('State-districts.json','utf8')
let districts=JSON.parse(datadistricts)
let arrayStates=datastates.split(',')
arrayStates=JSON.parse(arrayStates)


let filterdDist;

let listOfStates=[]

arrayStates.forEach((state)=>
{
    districts.forEach((dis)=>{
        if(state.isoCode===dis.stateCode)
        {
            filterdDist=  districts.filter(dist=>{
        
              return dist.stateCode===state.isoCode;
             })
         
        }
    })
    
  state.cities=filterdDist


  console.log(filterdDist)

  listOfStates.push(state)
   
}

)

let jsonStates=JSON.stringify(listOfStates,null,2)
  writeFileSync('Location.json',jsonStates,{flag:'a'})

// console.log(filterdDist)


