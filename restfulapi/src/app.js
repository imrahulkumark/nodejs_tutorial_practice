const express = require("express");
require("./db/conn");

const Student = require("./models/students");
const studentRouter = require("./router/student")

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

//  3: we need to register router

app.use(studentRouter);



//  1: create a new router-

//const router = new express.Router();

// //  2: we need tp define the router

// router.get("/rahul", (req, res) => {
//     res.send("Hello whatsup guys");
// });




//  this is first way to post method


// app.get("/", (req, res) => {
//     res.send("hello from the other side by rahul")
// })

//  //create a new student

// // app.post("/students", (req, res) => {
// //     console.log(req.body);
// //     const user = new Student(req.body);


// //     user.save().then( () => {
// //         res.status(201).send(user)
// //     }).catch( (e) => {
// //         res.status(400).send(e)
// //     });
    
// // res.send("hello freom the other side");
//  //});

// //  this is second  way to post method

//  app.post("/students", async(req, res) => {
//     try{
//         const user = new Student(req.body);

//         const createUser = await user.save();
//         res.status(201).send(createUser);
//     }catch(err) {
//         res.status(400).send(err);
//     };
//  })

//  // read the data of registration Students

//  app.get("/students", async(req, res) => {
//     try{
//         const studentsData = await Student.find();
//         res.send(studentsData);

//     }catch(err){
//         res.send(err);
//     }
//  });



// // get the indivisual Student data using id

// app.get("/students/:id", async(req, res) => {
//     try{
//         const _id = req.params.id;

//         const studentData = await Student.findById(_id);
//         res.send(studentData);

//     }catch(err) {
//         res.send(err);
//     }
// });

// //update the students by id

// // app.patch("/students/:id", async(req, res) => {
// //     try{
// //         const id = req.params.id;
// //         const updateStudents = await Student.findByIdAndUpdate(_id, req.body);
// //         res.send(updateStudents); 
// // }catch(err) {
// //     res.status(400).send(err);
// // }
// // });

   

// //delete the student by id

// app.delete("/students/:id" , async(req, res) => {
//     try{
//         const id = req.params.id;
//         const deleteStudent = await Student.findByIdAndDelete(req.params.id);
//         if(!req.params.id) {
//             return res.status(400).send();
//         }
//         res.send(deleteStudent);
//     }catch(err) {
//         res.status(500).send(err);

//     }
// })


app.listen(port, () => {
    console.log(`connection is setup ${port}`);
});

// you do not need rxpress.json() and express.urlencoded()
// for GET requests or DELETE requests. We only need it for post and put request.

// express.json() is a method inbuilt in express to recognize the incomming requests
// object as an json object. this method is called as midleware in your application using the code: app.use(express.json());