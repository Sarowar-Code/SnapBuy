import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
    {
        order_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order", // Links to the Order model
            required: true,
        },
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product", // Links to the Product model
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
    },
    {
        timestamps: true, // Automatically manages created_at and updated_at
    }
);

export const orderItemModel =
    mongoose.models.OrderItem || mongoose.model("OrderItem", orderItemSchema);
