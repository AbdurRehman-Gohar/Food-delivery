import express from "express"
import cors from "cors"
import { connect } from "mongoose"
import { conectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRoute from "./routes/cartRoute.js";
// App config
const app = express()
const port = process.env.PORT || 4000; 

//  middleware
app.use(express.json())
app.use(cors())

// Db connection 
conectDB()
// api endpoints
app.use("/api/food",foodRouter)
app.use('/images', express.static('uploads'));
app.use("/api/users",userRouter)
app.use("/api/cart",cartRoute)


app.get("/",(req,res)=>{
    res.send("Api working")
})


app.listen(port,()=>{
    console.log(`server started on http:localhost:${port}`)
})

// mongodb+srv://abdurrehman-tomato:<db_password>@cluster0.vqbkx.mongodb.net/?