const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const bookController = require("./controllers/books");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/TFG?authSource=admin", {
    //userNewUrlParser: true
}).then(() => {
    console.log("Database connected!");
}).catch((error) =>{
    console.log("Database connection failed!");
    console.log(error);
})

app.get("/", (req,res)=>{res.send("Hello world")});
app.get("/books", bookController.findBooks);
app.post("/books", bookController.createBook);
app.get("/books/:id", bookController.findBook);
app.patch("/books/:id", bookController.updateBook);
app.delete("/books/:id", bookController.deleteBook);

app.listen(8000, () => {
    console.log("Server has started at port 8000");
});
