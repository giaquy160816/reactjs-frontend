import styles from './ProductItem.module.scss';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
    return (
        <div className={styles.productCard}>
            <Link to={`/san-pham/${product.id}`} className={styles.productLink}>
                <div className={styles.imageWrapper}>
                    <img src={product.image} alt={product.name} />
                    <div className={styles.overlay}>
                        <button className={styles.addToCart}>
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                    {product.oldPrice && (
                        <div className={styles.discountBadge}>
                            {Math.round(((parseInt(product.oldPrice.replace(/[^\d]/g, '')) - parseInt(product.price.replace(/[^\d]/g, ''))) / parseInt(product.oldPrice.replace(/[^\d]/g, ''))) * 100)}%
                        </div>
                    )}
                </div>
                <div className={styles.productInfo}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <div className={styles.priceContainer}>
                        <p className={styles.productPrice}>{product.price}</p>
                        {product.oldPrice && (
                            <p className={styles.oldPrice}>{product.oldPrice}</p>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    );
}