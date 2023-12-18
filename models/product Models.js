const mongoose=require("mongoose")



const productSchema=mongoose.Schema(
    {
       PatientSurname: {
        type:String,
        required:[true,"please enter a  name "]
       },
    OtherNames : {
        type:String,
        required:[true,"please enter a  name "]
       },
       PatienGender : {
        type:String,
        required:[true,"please enter a  Gender "]
       },
       PatientID : {
        type:Number,
        required:true
       },
       PhoneNumber : {
        type:Number,
        required:true
       },
       ResidentialAddress : {
        type:String,
        required:true
       },
       EmergencyName : {
        type:String,
        required:true
       },



    },
    
    {
        timestamps:true

    }
)

const product=mongoose.model("product",productSchema)

    
module.exports=product;        
    
