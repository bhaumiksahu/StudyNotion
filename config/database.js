const mongoose=require("mongoose");
require("dotenv").config();

const DbConnect = () =>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("Database Connected Successfully")})
    .catch((err)=>{
        console.log("Database Connection Failed"+err);
        process.exit(1);
    })
}
module.exports=DbConnect;