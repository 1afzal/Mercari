import express from "express"
const app = express();

// read write delete update 
app.use(express.json())
const todos = [];

app.post('/todo',(req,res)=>{
    const id = todos.length + 1;
    const todo = {
        id: id,
        title: req.body.title,
        description: req.body.description ,
        completed: req.body.completed 
    }
    todos.push(todo);
    return res.status(200).json(todo);
})

app.get('/todos',(req,res)=>{
    return res.send(todos);
})

app.delete('/todos/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const index = todos.findIndex((t)=>t.id === id);
    if(index == -1){
        return res.status(404).send("No todos found...");
    }
    todos.splice(index,1);
    return res.status(200).json({
        message: "todo deleted successfully"
    });
})

app.put('/todo/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const index = todos.findIndex((t)=>t.id === id);
    if(index == -1){
        return res.status(404).send("todo not found");
    } 
    const todo = todos[index];
    todo.title = req.body.title || todo.title;
    todo.description = req.body.description || todo.description;
    todo.completed = req.body.completed || false

    todos[index] = todo;
    return res.status(200).send()
})

app.listen(6969,()=>{
    console.log("Server is live on port 6969")
})
