import mongoose from "mongoose";

const todoModel = mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ] //Array of subtodos
}, { timestamps: true });

export const TODO = mongoose.model('Todo', todoModel);
//the name will be todos when stored in mongoDB.