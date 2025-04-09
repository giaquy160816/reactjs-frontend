import PropTypes from 'prop-types';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import styles from './ProductInfo.module.scss';

export default function ProductInfo({ product }) {
    // Tạo mảng sao dựa trên rating
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<StarIcon key={i} className={styles.star} width={20} height={20} />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<StarIcon key={i} className={styles.star} width={20} height={20} />);
            } else {
                stars.push(<StarOutlineIcon key={i} className={styles.starOutline} width={20} height={20} />);
            }
        }
        
        return stars;
    };
    
    return (
        <div className={styles.productInfoContainer}>
            <h1 className={styles.productName}>{product.name}</h1>
            
            <div className={styles.ratingContainer}>
                <div className={styles.stars}>
                    {renderStars(product.rating)}
                </div>
                <span className={styles.ratingValue}>{product.rating}/5</span>
            </div>
            
            <div className={styles.stockStatus} data-status={product.stock === 'Còn hàng' ? 'inStock' : 'outOfStock'}>
                {product.stock}
            </div>
            
            <div className={styles.priceContainer}>
                <div className={styles.priceWrapper}>
                    <span className={styles.currentPrice}>{product.price}</span>
                    {product.oldPrice && (
                        <span className={styles.oldPrice}>{product.oldPrice}</span>
                    )}
                </div>
                
                {product.oldPrice && (
                    <div className={styles.discount}>
                        {Math.round(((parseInt(product.oldPrice.replace(/[^\d]/g, '')) - parseInt(product.price.replace(/[^\d]/g, ''))) / parseInt(product.oldPrice.replace(/[^\d]/g, ''))) * 100)}%
                    </div>
                )}
            </div>
            
            <div className={styles.actionButtons}>
                <button 
                    className={`${styles.addToCartButton} ${product.stock !== 'Còn hàng' ? styles.disabled : ''}`}
                    disabled={product.stock !== 'Còn hàng'}
                >
                    {product.stock === 'Còn hàng' ? 'Thêm vào giỏ hàng' : 'Hết hàng'}
                </button>
                
                <div className={styles.contactButtons}>
                    <a href="https://zalo.me/0123456789" target="_blank" rel="noopener noreferrer" className={styles.zaloButton}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" width={20} height={20} />
                        Chat Zalo
                    </a>
                    <a href="https://m.me/shopname" target="_blank" rel="noopener noreferrer" className={styles.messengerButton}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg" alt="Messenger" width={20} height={20} />
                        Chat Facebook
                    </a>
                </div>
            </div>
            
            <div className={styles.productMeta}>
                <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Mã sản phẩm:</span>
                    <span className={styles.metaValue}>SP{product.id.toString().padStart(4, '0')}</span>
                </div>
                <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Danh mục:</span>
                    <span className={styles.metaValue}>
                        {product.name.includes('iPhone') || product.name.includes('Samsung') || product.name.includes('OPPO') || product.name.includes('Xiaomi') 
                            ? 'Điện thoại' 
                            : product.name.includes('Máy chiếu') 
                                ? 'Máy chiếu' 
                                : 'Phụ kiện'}
                    </span>
                </div>
            </div>
        </div>
    );
}

ProductInfo.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        oldPrice: PropTypes.string,
        rating: PropTypes.number.isRequired,
        stock: PropTypes.string.isRequired
    }).isRequired
};
