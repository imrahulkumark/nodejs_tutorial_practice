// const path = require('path');
// const express = require('express');
// const app = express();
// //relative, absolute

// // console.log(__dirname);
// const staticPath = path.join(__dirname, '../public');

// //built in midleware
// app.use(express.static(staticPath));



// app.get("/", (req, res) => {
//      res.send("Hello from the express")
// });

// app.get('/about', (req, res) => {
//     res.send("helo from the about page")
// })

// app.listen(8000, () => {
//     console.log("listning the port at 8000")
// })

// the callback function has 2 parameters, request(req) and response(res),
// the request object (req) represents the HTTP request and
// has properties for the request querry String, parameters, body, HTTP Headers, etc.HTTP

// similarly, the response object represents the http requests
// that the express app sends with it receives an HTTP request.




const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = 8000;


//built in midleware

// console.log(__dirname);

const staticPath = path.join(__dirname,'../public');
const templatesPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials")


// to set the view engine

app.set("view engine", "hbs");
app.set('views', 'templates');
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.use(express.static(templatesPath));



//template engine route

app.get("/", (req, res) => {
    res.render("index", {
        userName:'rahulkumar'
    });
});

app.get("/about", (req, res) => {
    res.render('about');
});




app.get("/", (req, res) => {
    res.send("hello from expres server")
});

// app.get('*', (req, res) => {
//     res.render('404', {
//         errorcomment : "oops page couoldent be found"
//     });
// });


app.listen(port, () => {
    console.log(`listening to the port ${port}`);
})