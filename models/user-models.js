import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["customer", "admin"],
            default: "customer",
        },
        orders: [
            {
                type: mongoose.Schema.Types.ObjectId, // No need to import ObjectId separately
                ref: "Order",
            },
        ],
    },
    {
        timestamps: true, // Automatically adds createdAt & updatedAt
    }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
