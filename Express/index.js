import express from "express"
const app = express()
app.use(express.json());

app.get('/',function (req,res){
    res.status(200).send("Hello")
})

app.get('/about', function(req,res){
    res.status(200).json({
        name: "afzal",
        profession: "vibe coder"
    })
})

app.get('/contact', function(req,res){
    res.status(200).json({
        email: "afza@gmail.com",
        phone: "493284923840"
    })
})

app.get('/user/:id',function(req,res){
    res.status(200).send(`hello ${req.params.id}`)
})

app.listen(6969,()=>{
    console.log(`Server connected at port ${6969}`);
})

app.get('/naam/:name',function (req,res){
    res.send(`name is-> ${req.params.name}`);
    console.log(req.params.name)
})


//STAGE-02

app.post('/login',function(req,res){
    const { name, password } = req.body;

    if(name === "afzal" || name ==  "ali" || name == "ahmed"){
        console.log("success");
        res.status(200).json({
            status: "success",
            name : name,
            password: password
        })
    }
    else{
        res.status(404).json({
            failure: "invalid name or password"
        })
    }
})

//custom middleware
app.use(function(req,res,next){
    if(!req.body.name){
        res.status(404).json({
            error: "middleware error no name fuck offfff"
           
        })
    } 
    next()

})
app.post('/test-middleware', function(req,res){
    const name = req.body;
    res.send(name);
    console.log(name);
})
