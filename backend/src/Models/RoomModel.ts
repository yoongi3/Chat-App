import mongoose, { Schema } from "mongoose";
import { User } from "./userModel";

export interface Room extends Document {
    roomID: string;
    name: string;
    users: User[];
    createdAt: Date;
}

const roomSchema: Schema = new Schema ({
    roomID: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    createdAt: {type: Date, default: Date.now},
});

export const RoomModel = mongoose.model<Room>('Room', roomSchema)