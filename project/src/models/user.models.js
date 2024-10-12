import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config'

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


userSchema.pre("save", async function (next) {
    if (this.isModified(this.password)) {
        this.password = bcrypt.hash(this.password, 10);
        next();
    } else {
        next();
    }
})

//To check the password.
userSchema.methods.isPasswordCorrect = async function (password) {
    //check password here.

    const isTrue = await bcrypt.compare(password, this.password);

    if (isTrue) {
        return true;
    } else {
        return false;
    }
}

userSchema.methods.generateAccessToken = async function () {
    const accessToken = jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )

    return accessToken;
}

userSchema.methods.generateRefreshToken = async function () {
    const refreshToken = jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )

    return refreshToken;
}

export const User = mongoose.model("User", userSchema);