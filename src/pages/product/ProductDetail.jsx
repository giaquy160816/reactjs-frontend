import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from '../../components/products/detail/ProductGallery';
import ProductInfo from '../../components/products/detail/ProductInfo';
import ProductDescription from '../../components/products/detail/ProductDescription';
import products from '../../model/products';
import styles from './ProductDetail.module.scss';

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Tìm sản phẩm theo id
        const foundProduct = products.find(p => p.id === parseInt(id));
        
        if (foundProduct) {
            setProduct(foundProduct);
        }
        
        setLoading(false);
    }, [id]);

    if (loading) {
        return <div className={styles.loading}>Đang tải...</div>;
    }

    if (!product) {
        return <div className={styles.notFound}>Không tìm thấy sản phẩm</div>;
    }

    return (
        <div className={styles.productDetailPage}>
            <div className="pageContainer">
                <div className={styles.productDetailContainer}>
                    <div className={styles.productDetailTop}>
                        <div className={styles.productGallery}>
                            <ProductGallery images={product.images} />
                        </div>
                        <div className={styles.productInfo}>
                            <ProductInfo product={product} />
                        </div>
                    </div>
                    
                    <div className={styles.productDetailBottom}>
                        <ProductDescription description={product.description} specifications={product.specifications} />
                    </div>
                </div>
            </div>
        </div>
    );
}
