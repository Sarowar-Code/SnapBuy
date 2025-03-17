import { Product } from "@/models/product-model";

export async function getAllProduct() {
    try {
        const products = await Product.find().lean(); // Improves performance by returning plain JS objects

        if (!products.length) {
            console.warn("Warning: No products found in the database.");
        }

        return products;
    } catch (error) {
        console.error("❌ Error fetching products:", error);
        return [];
    }
}
