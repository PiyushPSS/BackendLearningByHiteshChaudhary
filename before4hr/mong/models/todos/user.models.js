import mongoose from 'mongoose';

//creating a userSchema.
const userSchema = new mongoose.Schema(
    {
        // username: String

        // Another way to store the element.
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true
        }
    }, { timestamps: true }
);

//the timestamps add the cratedAt and updatedAt fields.

//create a model and export it.
export default User = mongoose.model("User", userSchema);

//the name will be converted from User to users when the data goes to mongoDB because that's how the standardization works in MongoDB. It converts everything to plural.