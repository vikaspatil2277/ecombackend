const express = require("express")

const app = express()

const connectDB = require("./config/database")
const usersRouter = require("./route/users")
const productsRouter = require("./route/products")
require('dotenv').config();

const port=8000
const cors = require("cors")

app.use(cors({
    origin: "*"
}))

app.use(express.json())

app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.get("/", (req, res) => {
    console.log("Api is running fine!")
    res.send("Hello")
})

const startConnection=async ()=>{
    try{
        await connectDB(process.env.Mongo_URL)
        app.listen(port,()=>{
            console.log("server is running on port 8000")
        })
    }

    catch(err){
        console.log(err)
    }
}

startConnection()