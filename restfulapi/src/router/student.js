const express = require("express");
const router = new express.Router();

const Student = require("../models/students");

// //  2: we need tp define the router

// router.get("/rahul", (req, res) => {
//     res.send("Hello whatsup guys");
// });


//create a new student

// app.post("/students", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);


//     user.save().then( () => {
//         res.status(201).send(user)
//     }).catch( (e) => {
//         res.status(400).send(e)
//     });
    
// res.send("hello freom the other side");
 //});

//  this is second  way to post method

router.post("/students", async(req, res) => {
    try{
        const user = new Student(req.body);

        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(err) {
        res.status(400).send(err);
    };
 })

 // read the data of registration Students

 router.get("/students", async(req, res) => {
    try{
        const studentsData = await Student.find();
        res.send(studentsData);

    }catch(err){
        res.send(err);
    }
 });



// get the indivisual Student data using id

router.get("/students/:id", async(req, res) => {
    try{
        const _id = req.params.id;

        const studentData = await Student.findById(_id);
        res.send(studentData);

    }catch(err) {
        res.send(err);
    }
});

//update the students by id

// router.patch("/students/:id", async(req, res) => {
//     try{
//         const id = req.params.id;
//         const updateStudents = await Student.findByIdAndUpdate(_id, req.body);
//         res.send(updateStudents); 
// }catch(err) {
//     res.status(400).send(err);
// }
// });

   

//delete the student by id

router.delete("/students/:id" , async(req, res) => {
    try{
        const id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id) {
            return res.status(400).send();
        }
        res.send(deleteStudent);
    }catch(err) {
        res.status(500).send(err);

    }
})



module.exports = router;