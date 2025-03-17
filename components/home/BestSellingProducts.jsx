import { getAllProduct } from "@/database/queries";
import PrimaryButton from "../common/PrimaryButton";
import ProductList from "../product/ProductList";

const BestSellingProducts = async () => {
    const allProducts = await getAllProduct();

    return (
        <div className="w-full mx-auto">
            <div className="flex flex-col justify-between items-start sm:items-center gap-6 mb-8">
                <div className="space-y-2 w-full">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-10 bg-primary rounded-sm" />
                        <h2 className="text-primary font-medium">This Month</h2>
                    </div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl md:text-3xl text-text-primary font-semibold">
                            Best Selling Products
                        </h3>
                        <div className=" sm:mt-8 flex justify-center">
                            <PrimaryButton text={"View All"} href={"#"} />
                        </div>
                    </div>
                </div>
                <ProductList products={allProducts} />
            </div>
        </div>
    );
};

export default BestSellingProducts;
