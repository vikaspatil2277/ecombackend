const mongoose = require("mongoose")

const uri =  "mongodb+srv://vikaspatil2277:vikas5577@cluster0.mwva03x.mongodb.net/ecommerce?retryWrites=true&w=majority"



const connectDB = async () => {
    try {
        const client = await mongoose.connect(uri)
        console.log("Connected to database")
        return client
    }
    catch (err) {
        console.log(`Error in connecting with database ${err}`)
    }
}

module.exports = connectDB