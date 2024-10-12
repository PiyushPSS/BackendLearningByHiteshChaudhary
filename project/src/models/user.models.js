import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        // To enable searching in any field, make it's index true
        index: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    fullname: {
        type: String,
        required: true,
        unique: true,
        index: true
    },

    avatar: {
        type: String, //cloudinary url
        required: true,
        unique: true
    },

    coverImage: {
        type: String, //cloudinary url
    },

    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }
    ],

    password: {
        type: String,
        required: [true, "Password is required"]
    },

    refreshToken: {
        type: String
    }

}, { timestamps: true });

export const User = mongoose.model("User", userSchema);