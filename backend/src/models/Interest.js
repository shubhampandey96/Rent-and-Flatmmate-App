import mongoose from "mongoose";

const interestSchema = new mongoose.Schema(
{
    tenant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    listing:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Listing",
        required:true
    },

    status:{
        type:String,
        enum:[
            "pending",
            "accepted",
            "rejected"
        ],
        default:"pending"
    }
},
{
    timestamps:true
}
);

export default mongoose.model(
    "Interest",
    interestSchema
);