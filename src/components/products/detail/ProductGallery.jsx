import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductGallery.module.scss';

export default function ProductGallery({ images }) {
    const [mainImage, setMainImage] = useState(images[0]);
    
    const handleThumbnailClick = (image) => {
        setMainImage(image);
    };
    
    return (
        <div className={styles.galleryContainer}>
            <div className={styles.mainImageContainer}>
                <img 
                    src={mainImage} 
                    alt="Product" 
                    className={styles.mainImage}
                />
            </div>
            
            <div className={styles.thumbnailsContainer}>
                {images.map((image, index) => (
                    <div 
                        key={index}
                        className={`${styles.thumbnail} ${mainImage === image ? styles.active : ''}`}
                        onClick={() => handleThumbnailClick(image)}
                    >
                        <img src={image} alt={`Thumbnail ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

ProductGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};
