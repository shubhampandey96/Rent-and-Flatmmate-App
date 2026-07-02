import User from "../models/User.js";
import Listing from "../models/Listing.js";
import Interest from "../models/Interest.js";
import Notification from "../models/Notification.js";
export const getDashboardStats = async(req,res)=>{

try{

const totalUsers =
await User.countDocuments();

const totalListings =
await Listing.countDocuments();

const totalRequests =
await Interest.countDocuments();

const acceptedRequests =
await Interest.countDocuments({
    status:"accepted"
});

const rejectedRequests =
await Interest.countDocuments({
    status:"rejected"
});

const pendingRequests =
await Interest.countDocuments({
    status:"pending"
});

res.status(200).json({

success:true,

stats:{

totalUsers,

totalListings,

totalRequests,

acceptedRequests,

rejectedRequests,

pendingRequests

}

});

}

catch(error){

res.status(500).json({

message:error.message

});

}

};
export const getAllUsers = async(req,res)=>{

try{

const users =
await User.find()
.select("-password");

res.status(200).json({

success:true,

count:users.length,

users

});

}

catch(error){

res.status(500).json({

message:error.message

});

}

};
export const deleteUser = async(req,res)=>{

try{

const user =
await User.findById(
req.params.id
);

if(!user){

return res.status(404).json({

message:"User not found"

});

}

await User.findByIdAndDelete(
req.params.id
);

res.status(200).json({

success:true,

message:"User deleted"

});

}

catch(error){

res.status(500).json({

message:error.message

});

}

};
export const getAllListingsAdmin =
async(req,res)=>{

try{

const listings =
await Listing.find()
.populate(
"owner",
"name email"
);

res.status(200).json({

success:true,

count:listings.length,

listings

});

}

catch(error){

res.status(500).json({

message:error.message

});

}

};
export const deleteListingAdmin =
async(req,res)=>{

try{

const listing =
await Listing.findById(
req.params.id
);

if(!listing){

return res.status(404).json({

message:"Listing not found"

});

}

await Listing.findByIdAndDelete(
req.params.id
);

res.status(200).json({

success:true,

message:"Listing deleted"

});

}

catch(error){

res.status(500).json({

message:error.message

});

}

};
export const getAllRequests =
async(req,res)=>{

try{

const requests =
await Interest.find()

.populate(
"tenant",
"name email"
)

.populate(
"owner",
"name email"
)

.populate(
"listing"
);

res.status(200).json({

success:true,

requests

});

}

catch(error){

res.status(500).json({

message:error.message

});

}

};
export const getUserAnalytics =
async(req,res)=>{

try{

const analytics =
await User.aggregate([

{
$group:{
_id:{
month:{
$month:"$createdAt"
}
},
count:{
$sum:1
}
}
},

{
$sort:{
"_id.month":1
}
}

]);

res.status(200).json({

success:true,

analytics

});

}

catch(error){

res.status(500).json({

message:error.message

});

}

};