const Conversation = require("../models/conversationmodel.js");
const Message = require("../models/messagemodel.js");
//const { io, getReceiverSocketId } = require("../socket/socket.js");



async function sendMessage(req, res) {
    console.log("sendMessage function triggered");
    try {
        const senderId = req.id;
        const receiverId = req.params.id;
        const { message } = req.body;
        const file = req.file;

        let gotConversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!gotConversation) {
            gotConversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        };
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message: message || "",
            file: file
                ? {
                    filename: file.filename,
                    path: file.path,
                    mimetype: file.mimetype,
                    size: file.size
                }
                : undefined
        });


        if (newMessage) {
            
            gotConversation.messages.push(newMessage._id);
            
        };
        
        
        await Promise.all([gotConversation.save(), newMessage.save()]);     
        
        return res.status(201).json(newMessage);

    } catch (error) {
        console.log(error);
    }
}




async function getMessage(req, res) {
    try {
        const receiverId = req.params.id;
        const senderId = req.id;
       

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        }).populate("messages");

        if (!conversation) {
            return res.status(200).json([]);
        }        

        

        return res.status(200).json(conversation.messages);
    } catch (error) {
        console.error("Error in getMessage:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = { getMessage, sendMessage };