import mongoose from "mongoose";

const compatibilitySchema = new mongoose.Schema(
{
    tenant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    listing:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Listing"
    },

    score:{
        type:Number
    },

    explanation:{
        type:String
    },

    generatedBy:{
        type:String,
        enum:[
            "Gemini",
            "Rule"
        ]
    }
},
{
    timestamps:true
}
);

export default mongoose.model(
    "Compatibility",
    compatibilitySchema
);