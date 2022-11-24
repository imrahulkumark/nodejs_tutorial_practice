const fs = require("fs");
// const { writeFile } = require("fs/promises");



//for Async file system there is need to call callback fuction with err argument--

// fs.writeFile("read.txt", " today is awesome day :)", (err) =>{
//     console.log(" file is created")
// });


//for Async file system there is need to call callback fuction with err argument--

// fs.appendFile("read.txt", "plz subscribe my channel", (err) =>{
//     console.log(" task complete")
// })

fs.readFile("read.txt", "utf-8", (err, data) => {
    console.log(data)
});