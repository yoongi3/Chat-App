import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
    userID: string;
    username: string;
    email: string;
    password: string;
}

const userSchema: Schema = new Schema({
    userID: { type: String, required: true, unique: true},
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true, unique: true},
});

export const UserModel = mongoose.model<User>('User',userSchema);