import mongoose from "mongoose";

 export const conectDB = async()=>{
    await mongoose.connect('mongodb+srv://abdurrehman-tomato:tomato1234@cluster0.vqbkx.mongodb.net/food-del').then(()=>console.log("DB Connected"));
    
}   