const express = require('express');
const mongoose = require('mongoose');



const cors= require('cors');



// requiring the keys of db
const config = require('./config/key');


//importing routes here
const userRoute = require('./routes/user');





const app = express();
app.use(express.json());
app.use(cors());


// connecting to db
mongoose.connect( config.mongoURI , { useNewUrlParser: true ,useUnifiedTopology: true } ).then( ()=> console.log('db connected')).catch(err => console.log(err));
//


// user management routes here

app.use('/api/user' , userRoute);

// user managemnet routes ends




const port = process.env.PORT || 5000


app.listen(port , () => console.log(`server is running at ${port}`));