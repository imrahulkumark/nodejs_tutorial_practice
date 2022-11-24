const mongoose = require('mongoose');
 const Validator = require("validator");

//connection creation and creating a new db
mongoose.connect("mongodb://localhost:27017/practiceChannel", {useNewUrlParser: true, useUnifiedTopology: true}).then( () => console.log("connection successfull...")).catch((err) => console.log(err));

// schema
// A mongoose schema defines the structure of the document, 
//defalt values, validators, etc.,


const playlistSchema = new mongoose.Schema({
    name :{ 
        type:String,
        required: true,
        uppercase: true,
        trim: true,
        minlength: [2, "required minimun lenth is 2"],
        maxlength: 30
    },
    ctype :{
        type :String,
        require: true,
        lowercase: true,
        enum: ["frontend", "backend", "database"]
    } ,
    videos:{
        type:Number,
        validate(value) {
            if(value < 0) {
                throw new error("videos count should not be negative")
            }
        }
    } ,
    author : String,
    email: {
        type: String,
        required: false,
        unique : false,
        validate(value) {
        if (!validator.isEmail(value)) {
            throw new error("Email is invalid");
        }
        }
        
    },
    active : Boolean,
    date : {
        type: Date,
        default: Date.now

    }
});


// A mongoose model is a wrapper on the mongoose Schema.
// A mongoose schema is defined the structure of the document,
// default values, validator, etc.
// Whereas a mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.



//collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

//create  document or insert document

const createDocument = async () =>{
    try{
        // const reactPlaylist = new Playlist({
        //     name : "React JS",
        //     ctype : "Front End",
        //     videos: 20,
        //     author : "Rahulkumar",
        //     active : true   
        // })
        // const nodePlaylist = new Playlist({
        //     name : "Node JS",
        //     ctype : "Back End",
        //     videos: 20,
        //     author : "Rahulkumar",
        //     active : true   
        // })
        // const mongoPlaylist = new Playlist({
        //     name : "Mongodb ",
        //     ctype : "DataBase",
        //     videos: 20,
        //     author : "Rahulkumar",
        //     active : true   
        // })
        // const javascriptPlaylist = new 
        // Playlist({
        //     name : "Javascript JS",
        //     ctype : "Front End",
        //     videos: 20,
        //     author : "Rahulkumar",
        //     active : true   
        // })
        const expressPlaylist = new Playlist({
            name : "ExPrSs JS",
            ctype : "backend",
            videos: 5,
            author : "Rahulkumar",
            // email: "kamble00@gmail.com",
            active : true   
        });
        const result = await  Playlist.insertMany(expressPlaylist); 
         console.log(result);
    } catch(err){
       console.log(err);
    }
    
};

createDocument();

const getDocument = async () => {
    try{
        const result = await Playlist
        .find( {$and : [{author: "Rahulkumar"}]})
        .select({name: 1})
        .sort({name : 1});
       // .countDocuments();
        //.limit(10);
    console.log(result);
    }catch(err) {
        console.log(err);
    }
   
}

//getDocument();

// update the documents

const updateDocument = async (_id) => {
    try{
        const result = await Playlist.findByIdAndUpdate({ _id},{$set : {
            name : "Mongodb"
           }
        }
            );
            console.log(result);
    }catch(err) {
        console.log(err);
    }
}



// updateDocument("63774ec7354b27d4487c7f61");


// delete the document

const deleteDocument = async (_id) => {
    try{
        const result = await Playlist.findByIdAndDelete ( {_id} );
    console.log(result)
} catch(err) {
    console.log(err);
}
    };
    
//deleteDocument("6379d4751dba1c51bec26e40")




