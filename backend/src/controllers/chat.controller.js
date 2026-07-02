import Message from "../models/Message.js";

import Interest from "../models/Interest.js";
export const sendMessage =
async(req,res)=>{

try{

const {

receiver,

listing,

message

} = req.body;

const acceptedRequest =
await Interest.findOne({

listing,

status:"accepted",

$or:[
{
tenant:req.user._id
},
{
owner:req.user._id
}
]

});

if(!acceptedRequest){

return res.status(403).json({

success:false,

message:
"Chat not allowed"

});

}

const newMessage =
await Message.create({

sender:req.user._id,

receiver,

listing,

message

});

res.status(201).json({

success:true,

message:newMessage

});

}

catch(error){

res.status(500).json({

message:error.message

});

}

};
export const getConversation =
async(req,res)=>{

try{

const {

userId

} = req.params;

const messages =
await Message.find({

$or:[

{
sender:req.user._id,
receiver:userId
},

{
sender:userId,
receiver:req.user._id
}

]

})

.sort({
createdAt:1
});

res.status(200).json({

success:true,

messages

});

}

catch(error){

res.status(500).json({

message:error.message

});

}

};