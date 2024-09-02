import express from "express"
import { Book } from "../model/bookmodel.js";
 
const router = express.Router();

//save a new book
router.post('/', async(req,res) =>{
try {
  console.log(req.body);

    if(
        !req.body.title ||
        !req.body.author ||
        !req.body.publishYear 
    )
     {
         return res.status(400).send({
            message: 'Send all required fields: title, author, publisher',
         });
    }
    const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear
    }

    const book = await Book.create(newBook);
    return res.status(201).send(book);

} catch (error) {
    console.log(error.message);
    res.status(500).send({message: error.message})
    
}
})

router.get('/', async (req,res) =>{
try {
    const books = await Book.find({})
    console.log(books);
    
    return res.status(200).json(books)
} catch (error) {
    console.log(error.message)
    res.status(500).send({message: error.message})
}
})

//get books by ID
router.get('/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const book = await Book.findOne({_id:id})
       
       
        return res.status(200).json(book)
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
    })

    //update by id
    router.put('/:id', async (req,res) =>{
        try {
            if(
                !req.body.title ||
                !req.body.author ||
                !req.body.publishYear 
            ){
                return res.status(400).send({
                    message:'send all required fields'
                })
            }
            const {id} = req.params;

            const result = await Book.findByIdAndUpdate(id, req.body)

            if(!result){
                return res.status(404).json({message:"not found"})

            }
           else{
            return res.status(200).json({message:"update successfully"})
           }
        } catch (error) {
            console.log(error.message);
            res.status(500).send({message: error.message})
            
        }
    })

//delte by id

router.delete ('/:id', async(req,res) =>{
try {
    const {id} = req.params
    const result = await Book.findByIdAndDelete(id)
    return res.status(200).json({message:"delete successfully"})
    
} catch (error) {
    console.log(error.message)
    return res.status(400).json(error.message)
}

    
})
export default router; 