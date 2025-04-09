import ProductItem from "./ProductItem";
import ProductData from "@/model/products";
import styles from "./List.module.scss";

export default function ProductList() {
    return (
        <div className={styles.productGrid}>
            {ProductData.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}
