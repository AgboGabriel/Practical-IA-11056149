const express=require("express")
const app=express()
const mongoose=require("mongoose")
const Product=require("./models/product Models")


app.use(express.json)


app.get("/",(req,res)=>{
    res.send("hello ma guy")
})

app.get("/patient/:id",async(req,res)=>{
    try{
        const {id}=req.params
    const patient=await Patient.findbyId();
    res.status(200).json(patient);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})
app.get("/patient",async(req,res)=>{
    try{
    const patient=await patient.find({});
    res.status(200).json(patient);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})


app.post("/patients",async(req,res)=>{
    try{
        const patient=await patient.create(req.body)
        res.status(200).json(patient);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// udate a patient
app.put("/patients/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Patient.findbyIdAndUpdate(Id,req.body);
// what do you
        if(!patinet){
            return res.status(404).json({message: "cannot find a patinet whi Id $(Id)"})
        }
        const updatedProject =await patient.findbyIdAndUpdate(Id)
        res.status(500).json({message: error.message})
        

    }catch(error){
        res.status(500).json({message: error.message})
        // const patient= await Product.findbyIdAndUpdate(id,req.body)
    }
})

mongoose.connect("mongodb+srv://gagbo005:11056149@cluster0.duen9m6.mongodb.net/Node-Api?retryWrites=true&w=majority ")
.then(()=>{
    
app.listen(3000,()=>{
    console.log("app is runnign on port 30001")
})
    console.log('successful connection')
}).catch((error)=>{
    console.log(error)
})