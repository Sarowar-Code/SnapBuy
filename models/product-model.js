import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        size: {
            value: { type: Number, min: 0 },
            unit: { type: String, enum: ["ml", "oz", "g"] },
        },
        category: {
            type: String,
            required: true, // Ensures every product has a category
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        notes: {
            top: { type: [String], default: undefined },
            middle: { type: [String], default: undefined },
            base: { type: [String], default: undefined },
        },

        long_lasting: {
            type: Boolean,
            default: false, // Relevant for perfumes but optional for other products
        },
        gender: {
            type: String,
            enum: ["Men", "Women", "Unisex"],
            default: "Unisex", // Optional for non-perfume products
        },
        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
        },
        reviews: {
            type: Number,
            default: 0,
            min: 0,
        },
        stock: {
            type: Number,
            required: true,
            min: 0,
        },
        image: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true, // Automatically manages createdAt and updatedAt
    }
);

export const Product =
    mongoose.models.Product || mongoose.model("Product", productSchema);
