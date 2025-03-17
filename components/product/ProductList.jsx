import Link from "next/link";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
    return (
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
            {products.map((product) => (
                <Link href={"#"} key={product.name}>
                    {" "}
                    <ProductCard product={product} />
                </Link>
            ))}
        </div>
    );
};

export default ProductList;
