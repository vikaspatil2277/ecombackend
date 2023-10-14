const mongoose = require("mongoose")


const connectDB = (url) => {

    mongoose.connect(url)
    .then(()=>console.log("connected to mongoosedb ....."))
    .catch((err)=>console.log("error",err))
  
}

module.exports = connectDB