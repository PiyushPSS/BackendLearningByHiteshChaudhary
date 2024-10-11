import mongoose from 'mongoose';

//mini-models
const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: [orderItemSchema]

        // other way:
        // type: [
        //     {
        //         quantity: {
        //             type: Number,
        //             required: true
        //         },
        //         product: {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "Product"
        //         },
        //     }
        // ]
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING", "CANDELLED", "DELIVERED"],
        default: "PENDING"
    }
}, { timestamps: true });

export const Order = mongoose.model("Order", orderSchema);