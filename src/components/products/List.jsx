import ProductItem from "@/components/products/Item";
import ProductData from "@/model/products";
import "./styles.scss";
export default function ProductList() {
    return (
        <div className="productList">
            {ProductData.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}