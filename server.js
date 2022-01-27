const express=require('express');
const dotenv=require('dotenv');
const app=express();
const path=require('path');
const morgan=require('morgan');
const bodyparser=require('body-parser');
const exp = require('constants');
// const connectionDB=require('/home/manick/Desktop/my-api/crud_app/server/database/connection.js')
dotenv.config({path:'config.env'})
const PORT=process.env.PORT ||8080

const mongoose=require('mongoose');

const DB=process.env.MONGO_URL;

const Router=require('/home/manick/Desktop/my-api/crud_app/server/routes/router.js')
app.use(morgan("dev"));

// connectionDB();
mongoose.connect(DB,{
    // useNewUrlParser:true,
    // useCreateIndex:true,
    // useFindAndModify:false
}).then(con =>{
   // console.log(con.connection);
    console.log('DB connections successfull');
})

//parse req to body-parser
app.use(bodyparser.urlencoded({extented :true}));

//set view engine
app.set("view engine","ejs");
// app.set("views",path.resolve(__dirname,"views/html/index.html"));


//load assets into the http server
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

//importing routes
app.use('/',Router);
app.listen(PORT,'127.0.0.1',()=>{
    console.log(`App running on the port ${PORT}`);
});