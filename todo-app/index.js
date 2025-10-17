import express from "express";
const app = express();
app.use(express.json())
const todos = []; //empty array acts as storage for todos


app.post('/todos',(req,res)=>{
    const id = todos.length + 1;
    const todo = {
        title: req.body.title || "",
        description: req.body.description || "",
        completed: req.body.completed || "",
    }
    todos.push(todo);
    return res.status(200).send()
})

app.get('/todos',(req,res)=>{
    return res.send(todos);
})

app.listen(6969,()=>{
    console.log("server live at port 6969");
})