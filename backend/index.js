import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { PORT, mongoDBURL } from "./config.js"
import router from "./routes/booksRouter.js" 
const app = express()

app.use(express.json());

app.use(cors({
    origin:["http://localhost:5174","http://localhost:5174"],
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type']
}))

app.get('/', (req,res) =>{
    console.log(req);
    return res.status(234).send('welcome')
})

app.use('/books', router)

mongoose.connect(mongoDBURL)
.then(() =>{
console.log("app connect to database");

app.listen(PORT, () =>{
    console.log(`listening to: ${PORT}`);
    
})

})
.catch((error) =>{
console.log(error);

})