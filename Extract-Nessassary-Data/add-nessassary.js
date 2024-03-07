let { writeFile, readFileSync } = require("fs");
// let files = readFileSync("India-states.json", "utf-8");
// let parsed_files = JSON.parse(files);
// let whole_data = [];
// parsed_files.forEach((element) => {
//   let data = {};
//   data.state = element.name;
//   data.stateCode = element.isoCode;

//   whole_data.push(data);

//   console.log("added ");
// });
// writeFile("new-states.json", JSON.stringify(whole_data, null, 2), (err, data) => {});

// const axios = require('axios');
// const fs = require('fs');

// const url = 'http://20.204.55.122/api/helpers/states';

// const data = JSON.parse(fs.readFileSync("new-states.json", "utf-8"));
// // let count=0;
// // data.forEach(ele=>++count)
// // console.log(count)
// data.forEach(element => {
//   axios.post(url, element)
//     .then(response => {
//       console.log('Response:', response.data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// });




