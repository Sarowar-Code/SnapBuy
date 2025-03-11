import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
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
            type: String,
            trim: true, // Optional for non-perfume products
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
            top: { type: [String], default: [] },
            middle: { type: [String], default: [] },
            base: { type: [String], default: [] },
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

export const productModel =
    mongoose.models.Product || mongoose.model("Product", productSchema);
