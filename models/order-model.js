import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users", // Reference to the User model
            required: true,
        },
        products: [
            {
                product_id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product", // Generic reference to any product type
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                },
                brand: {
                    type: String,
                },
                category: {
                    type: String,
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
        ],
        totalAmount: {
            type: Number,
            required: true,
            min: 0,
        },
        status: {
            type: String,
            enum: ["pending", "shipped", "delivered", "canceled"],
            default: "pending",
        },
        paymentStatus: {
            type: String,
            enum: ["unpaid", "paid", "refunded"],
            default: "unpaid",
        },
    },
    {
        timestamps: true, // Automatically adds createdAt & updatedAt fields
    }
);

export const orderModel =
    mongoose.models.Order || mongoose.model("Order", orderSchema);
