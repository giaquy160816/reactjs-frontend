import { memo } from 'react';
import ProductItem from './ProductItem';
import styles from './ProductList.module.scss';

const ProductList = ({ products }) => {
    return (
        <div className={styles.productList}>
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default memo(ProductList);
