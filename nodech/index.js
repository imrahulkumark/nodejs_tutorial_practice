const fs = require("fs");

// fs.mkdirSync("technical");

// fs.writeFileSync("technical/bio.txt", "my name is rahul kamble , i am from pune");

// fs.appendFileSync("technical/bio.txt", " i am basically from kolhapur");

// fs.appendFileSync("technical/bio.txt", " i am developer")

// const data = fs.readFileSync("technical/bio.txt", "utf-8" )
// console.log(data);

fs.renameSync("technical/bio.txt", "technical/Mybio.txt")
