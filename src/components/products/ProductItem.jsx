import styles from './ProductItem.module.scss';

export default function ProductItem({ product }) {
    return (
        <div className={styles.productCard}>
            <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.name} />
                <div className={styles.overlay}>
                    <button className={styles.addToCart}>
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
            <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>{product.price}</p>
            </div>
        </div>
    );
}