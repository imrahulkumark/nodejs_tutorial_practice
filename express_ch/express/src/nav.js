const express = require('express');
const app = express();

const port = 3000;

app.get('/',( req, res) =>{
    res.send("<h1>welcome to my home page</h1>")
});

app.get('/about',( req, res) =>{
    res.send("welcome to my about page")
});

app.get('/contact',( req, res) =>{
    res.send("welcome to my  page contact")
});

// app.get('/temp',( req, res) =>{
//     res.send([
//         {
//         id:1,
//         name:"rahul"
//         },
//         {
//             id:1,
//             name:"rahul"
//             },
//             {
//                 id:1,
//                 name:"rahul"
//                 }
//     ]);
// });

app.get('/temp',( req, res) =>{
    res.json([
        {
        id:1,
        name:"rahul"
        },
        {
            id:1,
            name:"rahul"
            },
            {
                id:1,
                name:"rahul"
                }
    ]);
});

// The methods are identical when object and array is passed,
// bit res.json() will also convert non-objects,
// such as null and undefined, whitch are not valid JSON.

app.listen(port,() => {
    (`listening to the port no ${port}`);
});