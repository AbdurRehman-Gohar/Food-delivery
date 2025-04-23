import express from 'express'
import { addFood, listFood, removeFood } from '../controllers/foodController.js'
//  for storing images
import multer from 'multer'

const foodRouter = express.Router();
//  image storage Engine                             
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`) 
    }
})
const upload = multer({storage:storage});
foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/get",listFood);
foodRouter.post("/delete",removeFood);


export default foodRouter; 