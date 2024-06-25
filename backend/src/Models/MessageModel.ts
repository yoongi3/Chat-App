import mongoose, { Schema } from "mongoose";
import { Room } from "./RoomModel";
import { User } from "./UserModel";

export interface message extends Document {
    messageID: string;
    content: string;
    sender: User;
    room: Room;
    createdAt: Date;
}

const messageSchema: Schema =  new Schema ({
    messageID: {type: String, required: true, unique:true},
    content: {type: String, required: true},
    sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    room: {type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true},
    createdAt: {type: Date, default: Date.now},
})