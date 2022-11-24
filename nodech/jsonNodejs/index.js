const fs = require("fs")

const biodata = {
    name: " rahul",
    age: 27,
    city:"pune"
};

// console.log(biodata.city);

const jsonData = JSON.stringify(biodata);

console.log(jsonData)

// this is json answer- convert object data to json data
// for this use only stringify.
//{"name":" rahul","age":27,"city":"pune"}

// const objData = JSON.parse(jsonData);
// console.log(objData)

//this is the object ans- conver json data to object data
//and for this use only parse
//{ name: ' rahul', age: 27, city: 'pune' }

// fs.writeFile("json1.json", jsonData, (err) => {
//     console.log("done");
// });

//API

fs.readFile("json1.json", "utf-8",(err, data) => {
    console.log(data)
const orgData = JSON.parse(data);

});