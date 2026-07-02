import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
{
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true
    },

    rent:{
        type:Number,
        required:true
    },

    availableFrom:{
        type:Date
    },

    roomType:{
        type:String,
        enum:[
            "Single",
            "Shared",
            "Private"
        ]
    },

    furnishingStatus:{
        type:String,
        enum:[
            "Furnished",
            "Semi-Furnished",
            "Unfurnished"
        ]
    },

    images:[
        {
            type:String
        }
    ],

    status:{
        type:String,
        enum:[
            "available",
            "filled"
        ],
        default:"available"
    }
},
{
    timestamps:true
}
);

export default mongoose.model(
    "Listing",
    listingSchema
);