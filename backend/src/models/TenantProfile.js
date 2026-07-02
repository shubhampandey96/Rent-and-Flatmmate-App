import mongoose from "mongoose";

const tenantProfileSchema = new mongoose.Schema(
{
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    preferredLocation:{
        type:String,
        required:true
    },

    minBudget:{
        type:Number,
        required:true
    },

    maxBudget:{
        type:Number,
        required:true
    },

    moveInDate:{
        type:Date
    },

    lifestyle:{
        type:String,
        enum:[
            "Quiet",
            "Social",
            "Flexible"
        ]
    },

    occupation:{
        type:String
    }
},
{
    timestamps:true
}
);

export default mongoose.model(
    "TenantProfile",
    tenantProfileSchema
);